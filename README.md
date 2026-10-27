# Verseforge Story

**锻造属于你的故事 · Craft your interactive story**

[中文](#中文) · [English](#english)

## 中文

Verseforge Story 是一个面向个人创作者的本地文游编辑器。通过节点与分支组织剧情，搭配变量、记忆、实体和条件，制作可以实际游玩的互动故事，再导出为独立 HTML 文件。

编辑器采用单文件形式，不需要安装依赖、注册账号或连接后端服务。可以在浏览器中本地打开，也可以直接访问网页版：https://verseforges.com/story 。支持中英文界面，内置两个语言版本的示例故事《零点列车》，可用于体验故事机制和查看设置方式。

### 功能

- **节点与分支创作**：在画布上组织剧情关系，通过节点列表查找、筛选和编辑内容；支持章节、标签、正文格式、条件选项、替换正文与附加正文。
- **故事状态与规则**：使用故事变量、节点变量、故事记忆、实体与实体模板组织状态，结合条件、状态变化组、状态响应、状态路线和事件池构建故事机制。
- **节奏与呈现**：配置倒计时、文字动画、故事面板、成就和故事主题，支持双主题与自定义主题。
- **预览与作者测试**：在编辑器中试玩，检查变量与状态，使用测试场景、测试记录、分支覆盖率和故事检验排查流程与引用问题。
- **管理与复用**：管理多个故事，保存本地版本，通过素材库复用节点、故事片段和机制配置。
- **导入与导出**：导出可继续编辑的故事数据、编辑器备份，以及供读者游玩的独立故事 HTML。

### 使用方式

1. 使用浏览器打开编辑器 HTML 文件，或直接访问网页版：https://verseforges.com/story 。
2. 打开内置示例查看效果，或新建自己的故事。
3. 编写节点正文、连接分支，并按需添加故事机制。
4. 在预览中试玩，结合故事检验和作者测试工具检查各条路径。
5. 导出独立故事 HTML，交给读者使用浏览器打开游玩。

本地单文件使用不需要额外的图标文件。部署时可将编辑器命名为 `index.html`；`site.webmanifest`、`sw.js` 与 `index.html` 同级，安装图标位于 `assets/icons/`。

### Android 应用

[下载最新安卓版 APP](https://verseforges.com/story/download/Verseforge-Story.apk)

下载 `Verseforge-Story.apk` 后，在 Android 设备上安装使用；网页版“关于”中也提供同一下载入口。下载链接固定，更新时可从同一地址获取最新版安装包。

Android 应用与网页版的数据分别保存在各自的本地环境中，不会自动同步。转移故事、素材与设置请使用导入、导出或编辑器备份，更新或卸载应用前请先备份重要内容。

### 网页离线使用

通过 HTTPS 访问网页版并完成首次资源缓存后，可在支持的浏览器中添加到主屏幕或安装为应用，之后断网也能重新打开编辑器。首次访问仍需联网；离线使用前，请先关闭页面并断网重开确认缓存成功。

更新在后台准备，不会强制刷新正在编辑的页面。新版就绪时弹窗提醒一次，确认后不再重复提醒同一更新。新版准备好后，关闭所有 VF Story 标签页和应用窗口，再次打开时使用新版。缓存保存的是程序资源，故事仍保存在浏览器本地；请继续定期导出备份。

### 本地数据与注意事项

- 故事、素材和设置保存在当前浏览器本地，不会自动同步到其他设备或浏览器。
- 清理网站数据、使用无痕模式或更换访问地址，可能导致原有数据无法继续访问。浏览器本地保存不能代替文件备份，请定期导出重要内容。
- 本地文件版与部署后的网页不要视为共享同一份存储；需要转移内容时，请使用导入、导出或编辑器备份。
- **故事数据文件**用于继续编辑单个故事；**编辑器备份**用于备份、恢复故事、素材与设置，恢复会替换当前编辑器数据，且不包含本地保存版本；**故事 HTML**用于游玩。请分别保留需要的文件。
- 故事检验和覆盖率可以帮助发现问题，但不能代替实际试玩。发布前应检查不同分支、输入结果、条件变化，并打开导出的 HTML 完整体验。
- 本地打开与手机文件管理器内置预览的行为可能不同；遇到保存、导入或下载异常时，可尝试使用独立浏览器打开。

### 联系与反馈

- GitHub Issues：[提交问题](https://github.com/Verseforge/story/issues)
- 用户反馈表（飞书多维表格）：[填写反馈](https://ncnviye1gx54.feishu.cn/share/base/form/shrcnhqCTlE1nLDngroYfDYrvCg)
- 邮箱：verseforge@foxmail.com / verseforge.sj@gmail.com

反馈问题时，请尽量说明浏览器、设备、操作步骤与实际结果。需要附上故事数据时，请先移除私人内容。

## English

Verseforge Story is a local interactive fiction editor for individual creators. Organize your story with nodes and branches, add variables, memories, entities, and conditions, then export a standalone HTML file that readers can play in a browser.

The editor runs from a single HTML file, with no dependency installation, account, or backend required. Open it locally in a browser, or use the web version at https://verseforges.com/story . It includes Chinese and English interfaces, along with both language versions of the built-in example, *The Midnight Train*, for exploring story mechanics and their configuration.

### Features

- **Nodes and branching**: Organize passages on a canvas, find and edit content in the node list, and work with chapters, tags, text formatting, conditional choices, alternate text, and appended text.
- **Story state and rules**: Combine story variables, node variables, memories, entities, and entity templates with conditions, effect groups, state responses, state routes, and event pools.
- **Pacing and presentation**: Configure countdowns, text animations, story panels, achievements, and story themes, including dual themes and custom themes.
- **Preview and author testing**: Play through your story, inspect variables and state, and use test scenarios, test records, branch coverage, and story inspection to investigate flow and reference issues.
- **Management and reuse**: Manage multiple stories, save local versions, and reuse nodes, story fragments, and mechanics through the material library.
- **Import and export**: Export editable story data, editor backups, and standalone story HTML files for readers.

### How to use

1. Open the editor HTML file in a browser, or use the web version at https://verseforges.com/story .
2. Explore the built-in example or create a new story.
3. Write node text, connect branches, and add mechanics as needed.
4. Play through the preview and check your paths with story inspection and author testing tools.
5. Export a standalone story HTML file for readers to open and play in a browser.

The local single-file editor does not require separate icon files. For deployment, name the editor `index.html`; keep `site.webmanifest` and `sw.js` beside `index.html`, with installation icons under `assets/icons/`.

### Android app

[Download the latest Android app](https://verseforges.com/story/download/Verseforge-Story.apk)

Download `Verseforge-Story.apk` and install it on an Android device. The web editor’s About dialog offers the same download. This fixed address always points to the latest uploaded APK.

The Android app and the web version store data in separate local environments and do not sync automatically. Use import, export, or editor backups to transfer stories, materials, and settings. Back up important work before updating or uninstalling the app.

### Offline web use

After opening the HTTPS website and completing the initial resource cache, you can add it to the home screen or install it in a supported browser, then reopen the editor offline. The first visit requires a connection. Before relying on offline access, close the page and reopen it with the network disconnected to confirm caching succeeded.

Updates are prepared in the background without forcing a reload while you edit. A dialog announces each ready update once; dismissing it acknowledges that update. Once an update is ready, close all VF Story tabs and app windows; the next launch uses the new version. The cache contains application resources, while stories remain in browser storage. Continue exporting backups regularly.

### Local data and important notes

- Stories, materials, and settings are stored in the current browser. They do not automatically sync across devices or browsers.
- Clearing site data, using private browsing, or changing the access URL may make previous data unavailable. Browser storage is not a substitute for file backups. Export important work regularly.
- Treat the local file and the deployed website as separate storage environments. Use import, export, or editor backups to transfer your work.
- **Story data files** let you continue editing an individual story. **Editor backups** restore stories, materials, and settings by replacing the editor’s current data; they do not include saved local versions. **Story HTML files** are for playing. Keep the files you need for each purpose.
- Story inspection and coverage help identify problems, but do not replace playtesting. Before sharing a story, check different branches, input outcomes, and state changes, then play through the exported HTML itself.
- A mobile file manager’s built-in preview may behave differently from a standalone browser. If saving, importing, or downloading fails, try opening the file in a browser directly.

### Contact and feedback

- GitHub Issues: [Report a problem](https://github.com/Verseforge/story/issues)
- User feedback form (Lark Forms): [Send feedback](https://ncnviye1gx54.feishu.cn/share/base/form/shrcnhqCTlE1nLDngroYfDYrvCg)
- Email: verseforge@foxmail.com / verseforge.sj@gmail.com

When reporting a problem, include your browser, device, steps to reproduce, and what happened. Remove private content before attaching story data.

## 作者 / Author

by [@Verseforge](https://github.com/Verseforge)

## 版权声明 / Copyright

© 2026 Verseforge. 保留所有权利。All rights reserved.


