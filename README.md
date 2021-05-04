# 📊 Thinking in Data

> **_NOTE:_**  It is **strongly recommended** that you use the [Insiders Edition of Visual Studio Code](https://code.visualstudio.com/insiders/), which is updated daily, and includes the latest and most up-to-date features for the Python extension, Live Share, Codespaces, native notebooks, and more.

[![You are urged to use caution when inflating your metrics, dear reader.](https://imgs.xkcd.com/comics/box_plot.png)](https://xkcd.com/1798)

_Thinking in Data_ is a curated set of VS Code extensions for **data analysis, visualization, and collaboration**, inspired by and including the brilliant [_Thinking in Code_](https://github.com/lostintangent/thinking-in-code) extension pack. If you are a data scientist or machine learning engineer who is familiar with [RStudio](https://www.rstudio.com/), [MATLAB](https://www.mathworks.com/products/matlab.html), [Spyder](https://www.spyder-ide.org/), [JupyterLab](http://jupyterlab.io/), or other scientific IDEs, but have felt overwhelmed by the [Visual Studio Code extension marketplace](https://marketplace.visualstudio.com/VSCode): this is a great place to start.

🖖 **Contributions are welcome:** if you come across an extension that enhances your understanding or accelerates your analysis, please feel free to submit a pull request to add it!

***

## Language and Notebook Support
> [Jupyter](https://jupyter.org/) and [nteract](https://github.com/nteract) notebooks are supported within Visual Studio Code, as of version X.XX. You can view, edit, and modify notebooks in multiple languages. Below are a list of extensions that support work in Python, R, SQL, and Julia; all are included with _Thinking in Data_, but you can customize the `settings.json` file to exclude certain extensions, if you wish.

| Included extension | How can it help? |
|-|-|
| 🐍 [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python) - Python IntelliSense, linting, debugging, code navigation, code formatting, refactoring, variable explorer, test explorer, and more!<br /><br /><a href="https://devblogs.microsoft.com/python/wp-content/uploads/sites/12/2019/10/variable_explorer.gif"><img width="400px" src="https://devblogs.microsoft.com/python/wp-content/uploads/sites/12/2019/10/variable_explorer.gif" /></a> |  <ol><li> Edit your code with autocompletion, code navigation, syntax checking, and more. </li><li> Support for Jupyter notebooks via the included [Jupyter extension](https://marketplace.visualstudio.com/items?itemName=ms-toolsai.jupyter).<li> Debug your Python scripts, web apps, remote or multi-threaded processes.</li><li> Automatically activate and switch between `virtualenv`, `venv`, `pipenv`, `conda`, and `pyenv` environments.</li><li> Restructure Python code with variable extraction, method extraction, and import sorting.</li></ol> |
| 🗣️ [.NET Interactive Notebooks](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-interactive-vscode) - Multiple language support (SQL, C#, JavaScript, TypeScript, HTML, and more) in a single notebook.<br /><br /><a href="https://user-images.githubusercontent.com/2546640/94603830-cb8e0700-0264-11eb-9226-ab819fa07d68.gif"><img width="400px" src="https://user-images.githubusercontent.com/2546640/94603830-cb8e0700-0264-11eb-9226-ab819fa07d68.gif" /></a> | <ol>Though _data science_ and _machine learning_ aren't necessarily the first things you might thing of when hearing ".NET", this extension allows you to use **multiple languages in the same notebook**, and to handle 3D interactive visualizations, SQL tables, and variable sharing with ease.</ol> |
| 🗣️ [R Language Support](https://marketplace.visualstudio.com/items?itemName=Ikuyadeu.r) - Minimal R language support for VS Code. If you solely develop projects using R, I recommend RStudio.<br /><br /><a href="https://github.com/Ikuyadeu/vscode-R/raw/HEAD/images/DataframePreview.gif"><img width="400px" src="https://github.com/Ikuyadeu/vscode-R/raw/HEAD/images/DataframePreview.gif" /></a> | <ol><li>Run source, selected lines, and functions.</li><li>R integrated terminal and extended syntax.</li><li>Data frame and environment viewers.</li><li>Snippets, keybindings, and package development shortcuts.<li>A subset of RStudio Add-ins.</ol> |
| 🖪 [SQL Tools](https://marketplace.visualstudio.com/items?itemName=mtxr.sqltools) - Database connection explorer, query runner, IntelliSense, bookmarks, query history.<br /><br /><a href="https://github.com/Microsoft/vscode-mssql/raw/main/images/mssql-demo.gif"><img width="400px" src="https://github.com/Microsoft/vscode-mssql/raw/main/images/mssql-demo.gif" /></a> | The SQL Tools database explorer is a collection of community-managed extensions, that offers support for: <ol><li>AWS Redshift</li><li>MariaDB.</li><li>Microsoft SQL Server.</li><li>MySQL.<li>PostGRESQL.<li>SQLite</li></ol> |

***

##  Visualization and Ideation
| Included extension | How can it help? |
|-|-|
| 📊 [Draw.io](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio) - View and edit rich diagrams directly within the editor.<br /><br /><a href="https://github.com/hediet/vscode-drawio/raw/master/docs/demo.gif"><img width="1000px" src="https://github.com/hediet/vscode-drawio/raw/master/docs/demo.gif" /></a> | <ol><li>Create diagrams, using a fully offline  canvas, that's themed to match your editor preferences</li><li>Allows you to create SVGs or PNGs, so that your diagrams can be embedded into other documents</li><li>You can link nodes/edges on the diagram to spans of code</li><li>Provides a fully real-time collaboration experience (see below)</li></ol> |
| 📋 [Live Share Whiteboard](https://marketplace.visualstudio.com/items?itemName=lostintangent.vsls-whiteboard) - Adds a real-time collaborative whiteboard to Visual Studio Live Share sessions. <br /><br /><a href="https://user-images.githubusercontent.com/116461/50567457-dddaba00-0cf9-11e9-840b-1b0a984d5ad9.gif"><img width="1000px" src="https://user-images.githubusercontent.com/116461/50567457-dddaba00-0cf9-11e9-840b-1b0a984d5ad9.gif" /></a> | <ol>**Live Share Whiteboard** enables you to open an integrated whiteboard, without needing to use a separate tool or service. All participants within a Live Share session can collaboratively draw on the whiteboard, and see each others changes in real-time. For certain use cases (e.g. technical interviews, mentoring, and classrooms), this can provide a useful means of communication, in addition to an audio call and co-editing and debugging.</ol> |
| 📋 [Debug Visualizer](https://marketplace.visualstudio.com/items?itemName=hediet.debug-visualizer) - A visual watch window that lets you visualize your data structures while debugging. <br /><br /><a href="https://github.com/hediet/vscode-debug-visualizer/raw/master/docs/demo.gif"><img width="1000px" src="https://github.com/hediet/vscode-debug-visualizer/raw/master/docs/demo.gif" /></a> | <ol></ol> |
| 📋 [Data Preview](https://marketplace.visualstudio.com/items?itemName=RandomFractalsInc.vscode-data-preview) - Supports importing, slicing, dicing, charting, and exporting large arrays. <br /><br /><a href="https://raw.githubusercontent.com/RandomFractals/vscode-data-preview/master/images/vscode-data-preview.png"><img width="1000px" src="https://raw.githubusercontent.com/RandomFractals/vscode-data-preview/master/images/vscode-data-preview.png" /></a> | <ol></ol> |

***

## Source Control with Github
| Included extension | How can it help? |
|-|-|
| 🙇 [Github Pull Requests](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github) - Review and manage Github pull requests and issues in VS Code.<br /><br /><a href="https://github.com/microsoft/vscode-pull-request-github/raw/main/.readme/demo.gif"><img width="400px" src="https://github.com/microsoft/vscode-pull-request-github/raw/main/.readme/demo.gif" /></a> | <ol></ol> |
| 📘 [GistPad](https://aka.ms/gistpad) - Manage and access developer notes and code snippets, stored as GitHub Gists and repos. <br /><a href="https://user-images.githubusercontent.com/116461/87234714-96ba9400-c388-11ea-92c3-544d9a3bb633.png"><img width="400px" src="https://user-images.githubusercontent.com/116461/87234714-96ba9400-c388-11ea-92c3-544d9a3bb633.png" /></a> | <ol><li>Allows you to capture todos, journals and [daily notes](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gistfs#scratch-notes), so you can stay organized from your editor</li><li>Supports [Roam/Obsidian-like wikis](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gistfs#wikis), including `[[references]]` and `#tags`</li><li>Easily store and access code snippets, to surpercharge your workflow</li><li>Review and commment on gists and repos via [editor-integrated commenting](https://marketplace.visualstudio.com/items?itemName=vsls-contrib.gistfs#gist-commenting)</li><li>You own your data, and you can make use of VS Code's amazing ecosystem of extensions</li></ol> |
| 📄 [GitDoc](https://aka.ms/gitdoc) - Edit Git repositories like they were a multi-file document (aka "Google Docs for developers").<br /><br /><a href="https://user-images.githubusercontent.com/116461/79521572-5a3bfe00-800e-11ea-83a0-8e125122fa8f.gif"><img width="400px" src="https://user-images.githubusercontent.com/116461/79521572-5a3bfe00-800e-11ea-83a0-8e125122fa8f.gif" /></a> | <ol><li>Auto-commit your changes on save, and never think about the Git CLI again (can we admit that it's complicated and not beginner-friendly?)</li><li>Retain the benefits of a Git repo (version history, collaboration) without the overhead of cloning/committing/pushing<li>Restore, undo and squash versions via a simple-to-use GUI</li><li>Perfect for docs repos, your README profile, wikis, etc.</li><li>Can enable new/non-developers to better collaborate on a Git-based "source of truth"</li></ol> |
| 📄 [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - Visualize code authorship at a glance via Git blame annotations and code lens.<br /><br /><a href="https://raw.githubusercontent.com/eamodio/vscode-gitlens/main/images/docs/revision-navigation.gif"><img width="400px" src="https://raw.githubusercontent.com/eamodio/vscode-gitlens/main/images/docs/revision-navigation.gif" /></a> | <ol></ol> |

***

## 🧑‍🤝‍🧑 Explaining and Sharing Work
| Included extension | How can it help? |
|-|-|
| 🗺️ [CodeTour](https://aka.ms/codetour) - Record and playback guided tutorials for codebases (aka "tours").<br /><br /><a href="https://user-images.githubusercontent.com/116461/76151694-7b531b80-606c-11ea-96a6-0655eb6ab4e6.gif"><img width="400px" src="https://user-images.githubusercontent.com/116461/76151694-7b531b80-606c-11ea-96a6-0655eb6ab4e6.gif" /></a> | <ol><li>Like a table-of-contents for your codebases</li><li>Enables easier onboarding/knowledge sharing</li><li>Documentation is provided where developers actually work: their editor.</li><li>Tours are interactive, and can automate commands, inject code snippets, run shell commands and more!<li>GUI recorder makes it easy to author and maintain tours (let's make writing fun!)</ol> | 
| 🗺️ [Live Share Extension Pack](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) - Collection of extensions that enable real-time collaborative development with VS Live Share.<br /><br /><a href="https://visualstudio.microsoft.com/wp-content/uploads/2018/11/v2-Diff-Comp-FINAL-optimized840.gif"><img width="400px" src="https://visualstudio.microsoft.com/wp-content/uploads/2018/11/v2-Diff-Comp-FINAL-optimized840.gif" /></a> | <ol></ol> | 

*** 

## 🌟 Lagniappe

The following extensions are not included out of the box in _Thinking in Data_, but they are delightful, nevertheless, and I encourage you to give them a try.

| Recommended Extension | What does it do? |
|-|-|
| 🗺️ [StackOverflow Instant Search](https://marketplace.visualstudio.com/items?itemName=Alexey-Strakh.stackoverflow-search) - Instant StackOverflow search from within the comfort of VS Code.<br /><br /><a href="https://raw.githubusercontent.com/alexeystrakh/vscode-stackoverflow-extension/master/images/stackoverflow-search-video.gif"><img width="400px" src="https://raw.githubusercontent.com/alexeystrakh/vscode-stackoverflow-extension/master/images/stackoverflow-search-video.gif" /></a> | <ol></ol> |
| 🗺️ [Discord](https://marketplace.visualstudio.com/items?itemName=KuanHulio.discord) - Send messages and files to your friends in Discord while never leaving VS Code.<br /><br /><a href="https://github.com/KuanHulio/vscode-discord/raw/master/file.gif"><img width="400px" src="https://github.com/KuanHulio/vscode-discord/raw/master/file.gif" /></a> | <ol></ol> |
| 🗺️ [Code Time](https://marketplace.visualstudio.com/items?itemName=softwaredotcom.swdc-vscode) - An open-source plug-in that provides programming productivity metrics from within VS Code.<br /><br /><a href="https://assets.software.com/readme/code-time/vscode/visualize-everything.png"><img width="400px" src="https://assets.software.com/readme/code-time/vscode/visualize-everything.png" /></a> | <ol></ol> |
| 🗺️ [Music Time for Spotify](https://marketplace.visualstudio.com/items?itemName=softwaredotcom.music-time) - Tracks the most productive music for you to listen to while you code.<br /><br /><a href="https://swdc-vscode.s3-us-west-1.amazonaws.com/music-time-recommendations.png"><img width="400px" src="https://swdc-vscode.s3-us-west-1.amazonaws.com/music-time-recommendations.png" /></a> | <ol><li>**Integrated player controls:** Control your music right from the status bar of your editor. </li><li>**Embedded playlists**: Browse and play your Spotify playlists and songs from your editor.</li><li>**Personalized recommendations** generated using machine learning.</li><li>**Weekly Top 40** playlist  of your most productive songs.<li>**Discover new music** to aid your productivity via the global top 40 list.</ol> |