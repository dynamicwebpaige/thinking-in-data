"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const GalleryInterfaces_1 = require("azure-devops-node-api/interfaces/GalleryInterfaces");
const package_1 = require("./package");
const tmp = require("tmp");
const store_1 = require("./store");
const util_1 = require("./util");
const denodeify = require("denodeify");
const yauzl = require("yauzl");
const semver = require("semver");
const cp = require("child_process");
const exec = denodeify(cp.exec, (err, stdout, stderr) => [err, { stdout, stderr }]);
const tmpName = denodeify(tmp.tmpName);
function readManifestFromPackage(packagePath) {
    return new Promise((c, e) => {
        yauzl.open(packagePath, (err, zipfile) => {
            if (err) {
                return e(err);
            }
            const onEnd = () => e(new Error('Manifest not found'));
            zipfile.once('end', onEnd);
            zipfile.on('entry', entry => {
                if (!/^extension\/package\.json$/i.test(entry.fileName)) {
                    return;
                }
                zipfile.removeListener('end', onEnd);
                zipfile.openReadStream(entry, (err, stream) => {
                    if (err) {
                        return e(err);
                    }
                    const buffers = [];
                    stream.on('data', buffer => buffers.push(buffer));
                    stream.once('error', e);
                    stream.once('end', () => {
                        try {
                            c(JSON.parse(Buffer.concat(buffers).toString('utf8')));
                        }
                        catch (err) {
                            e(err);
                        }
                    });
                });
            });
        });
    });
}
function _publish(packagePath, pat, manifest) {
    return __awaiter(this, void 0, void 0, function* () {
        const api = yield util_1.getGalleryAPI(pat);
        const packageStream = fs.createReadStream(packagePath);
        const name = `${manifest.publisher}.${manifest.name}`;
        const fullName = `${name}@${manifest.version}`;
        console.log(`Publishing ${fullName}...`);
        let extension = null;
        try {
            try {
                extension = yield api.getExtension(null, manifest.publisher, manifest.name, null, GalleryInterfaces_1.ExtensionQueryFlags.IncludeVersions);
            }
            catch (err) {
                if (err.statusCode !== 404) {
                    throw err;
                }
            }
            if (extension && extension.versions.some(v => v.version === manifest.version)) {
                throw new Error(`${fullName} already exists. Version number cannot be the same.`);
            }
            if (extension) {
                try {
                    yield api.updateExtension(undefined, packageStream, manifest.publisher, manifest.name);
                }
                catch (err) {
                    if (err.statusCode === 409) {
                        throw new Error(`${fullName} already exists.`);
                    }
                    else {
                        throw err;
                    }
                }
            }
            else {
                yield api.createExtension(undefined, packageStream);
            }
        }
        catch (err) {
            const message = (err && err.message) || '';
            if (/Invalid Resource/.test(message)) {
                err.message = `${err.message}\n\nYou're likely using an expired Personal Access Token, please get a new PAT.\nMore info: https://aka.ms/vscodepat`;
            }
            throw err;
        }
        util_1.log.info(`Extension URL (might take a few minutes): ${util_1.getPublishedUrl(name)}`);
        util_1.log.info(`Hub URL: ${util_1.getHubUrl(manifest.publisher, manifest.name)}`);
        util_1.log.done(`Published ${fullName}.`);
    });
}
function versionBump(cwd = process.cwd(), version, commitMessage) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!version) {
            return Promise.resolve(null);
        }
        const manifest = yield package_1.readManifest(cwd);
        if (manifest.version === version) {
            return null;
        }
        switch (version) {
            case 'major':
            case 'minor':
            case 'patch':
                break;
            case 'premajor':
            case 'preminor':
            case 'prepatch':
            case 'prerelease':
            case 'from-git':
                return Promise.reject(`Not supported: ${version}`);
            default:
                if (!semver.valid(version)) {
                    return Promise.reject(`Invalid version ${version}`);
                }
        }
        let command = `npm version ${version}`;
        if (commitMessage) {
            command = `${command} -m "${commitMessage}"`;
        }
        try {
            // call `npm version` to do our dirty work
            const { stdout, stderr } = yield exec(command, { cwd });
            process.stdout.write(stdout);
            process.stderr.write(stderr);
            return null;
        }
        catch (err) {
            throw err.message;
        }
    });
}
function publish(options = {}) {
    let promise;
    if (options.packagePath) {
        if (options.version) {
            return Promise.reject(`Not supported: packagePath and version.`);
        }
        if (options.web) {
            return Promise.reject(`Not supported: packagePath and web.`);
        }
        promise = readManifestFromPackage(options.packagePath).then(manifest => ({
            manifest,
            packagePath: options.packagePath,
        }));
    }
    else {
        const cwd = options.cwd;
        const githubBranch = options.githubBranch;
        const baseContentUrl = options.baseContentUrl;
        const baseImagesUrl = options.baseImagesUrl;
        const useYarn = options.useYarn;
        const ignoreFile = options.ignoreFile;
        const web = options.web;
        promise = versionBump(options.cwd, options.version, options.commitMessage)
            .then(() => tmpName())
            .then(packagePath => package_1.pack({ packagePath, cwd, githubBranch, baseContentUrl, baseImagesUrl, useYarn, ignoreFile, web }));
    }
    return promise.then(({ manifest, packagePath }) => __awaiter(this, void 0, void 0, function* () {
        if (!options.noVerify && manifest.enableProposedApi) {
            throw new Error("Extensions using proposed API (enableProposedApi: true) can't be published to the Marketplace");
        }
        if (options.web) {
            if (!package_1.isWebKind(manifest)) {
                throw new Error("Extensions which are not web kind can't be published to the Marketpalce as a web extension");
            }
            const extensionsReport = yield util_1.getPublicGalleryAPI().getExtensionsReport();
            if (!package_1.isSupportedWebExtension(manifest, extensionsReport)) {
                throw new Error("Extensions which are not supported can't be published to the Marketpalce as a web extension");
            }
        }
        const patPromise = options.pat ? Promise.resolve(options.pat) : store_1.getPublisher(manifest.publisher).then(p => p.pat);
        return patPromise.then(pat => _publish(packagePath, pat, manifest));
    }));
}
exports.publish = publish;
function unpublish(options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        let publisher, name;
        if (options.id) {
            [publisher, name] = options.id.split('.');
        }
        else {
            const manifest = yield package_1.readManifest(options.cwd);
            publisher = manifest.publisher;
            name = manifest.name;
        }
        const fullName = `${publisher}.${name}`;
        if (!options.force) {
            const answer = yield util_1.read(`This will FOREVER delete '${fullName}'! Are you sure? [y/N] `);
            if (!/^y$/i.test(answer)) {
                throw new Error('Aborted');
            }
        }
        const pat = options.pat || (yield store_1.getPublisher(publisher).then(p => p.pat));
        const api = yield util_1.getGalleryAPI(pat);
        yield api.deleteExtension(publisher, name);
        util_1.log.done(`Deleted extension: ${fullName}!`);
    });
}
exports.unpublish = unpublish;
