(() => {
  'use strict';

  /**
   * 完整匹配翻译。
   *
   * 只有文本去除首尾空白后，与左侧内容完全相同时才会翻译。
   */
  const translations = new Map([
    // 顶部和主页导航
    ['Home', '主页'],
    ['Homepage', '主页'],
    ['Dashboard', '仪表板'],
    ['Pull requests', '拉取请求'],
    ['Issues', '议题'],
    ['Codespaces', '代码空间'],
    ['Marketplace', '市场'],
    ['Explore', '探索'],
    ['Agents', '智能体'],
    ['Security and quality', '安全与质量'],
    ['Pin', '置顶'],

    // Copilot 和通用导航
    ['Ask anything or type @ to add context', '询问任何问题，或输入 @ 添加上下文'],
    ['Type', '类型'],
    ['to search', '进行搜索'],
    ['Ask', '询问模式'],
    ['All repositories', '所有仓库'],
    ['Agent', '智能体'],
    ['Create issue', '创建议题'],
    ['Write code', '编写代码'],
    ['Trending repositories', '热门仓库'],
    ['See more', '查看更多'],
    ['Top repositories', '热门仓库'],
    ['New', '新建'],
    ['Profile', '个人资料'],
    ['Repositories', '仓库'],
    ['Stars', '星标'],
    ['stars', '个星标'],
    ['watching', '人关注'],
    ['forks', '个复刻'],
    ['Organizations', '组织'],
    ['Enterprises', '企业'],
    ['Sponsors', '赞助'],
    ['Find a repository...', '查找仓库...'],
    ['Find a repository…', '查找仓库…'],
    ['Find a repository', '查找仓库'],
    ['Feed', '动态'],
    ['Auto', '自动'],
    ['Follow', '关注'],
    ['Register now', '立即注册'],
    ['View changelog', '查看更新日志'],
    ['View changelog →', '查看更新日志 →'],

    // 主页右侧公告
    ['Save $300 with Early Bird passes through August 19.', '在 8 月 19 日前购买早鸟票，可节省 300 美元。'],
    ['Latest from our changelog', '更新日志最新消息'],
    ['GitHub Code Quality license estimate in public preview', 'GitHub 代码质量许可证估算功能开放公开预览'],
    ['Separate SSO and Organizations pages in Settings', '设置中的 SSO 和组织页面已分开'],
    ['CodeQL 2.26.0 adds Kotlin 2.4.0 support and AI prompt injection...', 'CodeQL 2.26.0 新增 Kotlin 2.4.0 支持和 AI 提示词注入...'],
    ['CodeQL 2.26.0 adds Kotlin 2.4.0 support and AI prompt injection detection', 'CodeQL 2.26.0 新增对 Kotlin 2.4.0 的支持及 AI 提示词注入检测'],
    ['Clearer names for secret scanning detector types', '为机密扫描检测器类型提供更清晰的名称'],
    ['OCT 28-29', '10 月 28-29 日'],
    ['SAN FRANCISCO, CA', '美国加州旧金山'],

    // Copilot 菜单
    ['Ask Copilot...', '询问 Copilot...'],
    ['Ask Copilot…', '询问 Copilot…'],
    ['In immersive chat', '在沉浸式聊天中'],
    ['In a space', '在空间中'],
    ['Download for...', '下载适用于...'],
    ['Download for…', '下载适用于…'],
    ['GitHub Copilot app', 'GitHub Copilot 应用'],
    ['Copilot settings', 'Copilot 设置'],

    // 个人菜单
    ['Gists', '代码片段'],
    ['Appearance', '外观'],
    ['Accessibility', '无障碍'],
    ['Free', '免费'],

    // 主页动态
    ['made this repository public', '将此仓库设为公开'],
    ['created a repository', '创建了一个仓库'],
    ['starred a repository', '收藏了一个仓库'],

    // 页脚
    ['Terms', '条款'],
    ['Privacy', '隐私'],
    ['Status', '状态'],
    ['Community', '社区'],
    ['Docs', '文档'],
    ['Contact', '联系我们'],
    ['Manage cookies', '管理 Cookie'],
    ['Do not share my personal information', '请勿共享我的个人信息'],

    // Feed 设置
    ['Events', '活动'],
    ['Activity you want to see on your feed', '你希望在动态中看到的活动'],
    ['Announcements', '公告'],
    ['Special discussion posts from repositories', '仓库中的特别讨论帖'],
    ['Update posts from repositories', '仓库的更新帖'],
    ['Relevant projects or people that are being sponsored', '正在获得赞助的相关项目或用户'],
    ['Repositories being starred by people', '用户收藏的仓库'],
    ['Repositories that are created or forked by people', '用户创建或派生的仓库'],
    ['Repository activity', '仓库动态'],
    ['Issues and pull requests from repositories', '仓库中的议题和拉取请求'],
    ['Follows', '关注'],
    ['Who people are following', '用户正在关注的人'],
    ['Recommendations', '推荐'],
    ['Repositories and people you may like', '你可能喜欢的仓库和用户'],
    ['Include events from starred repositories', '包含已收藏仓库的活动'],
    ['By default, the feed shows events from repositories you sponsor or watch, and people you follow.', '默认情况下，动态会显示你赞助或关注的仓库，以及你关注的用户的活动。'],
    ['Reset to', '重置为'],
    ['starred', '收藏了'],
    ['a repository', '一个仓库'],
    ['Open user navigation menu', '打开用户导航菜单'],

    // Copilot 模型选择
    ['Models', '模型'],
    ['Upgrade', '升级'],
    ['Upgrade to access more models and higher limits.', '升级以使用更多模型并获得更高限额。'],
    ['to access more models and higher limits.', '以使用更多模型并获得更高限额。'],
    ['Fast and cost-efficient', '快速且经济高效'],
    ['Versatile and highly intelligent', '用途广泛且高度智能'],
    ['Most powerful at complex tasks', '处理复杂任务的能力最强'],

    // Copilot 建议操作
    ['Create a profile README', '创建个人资料 README'],
    ['Generate a simple calculator', '生成一个简单计算器'],
    ['Make a Pong game', '制作一个 Pong 游戏'],
    ['Design a Mermaid architecture overview', '设计 Mermaid 架构概览'],
    ['Basic Git commands', 'Git 基础命令'],
    ['Git branching', 'Git 分支操作'],
    ['Advanced Git commands', 'Git 高级命令'],
    ['My open pull requests', '我开启的拉取请求'],
    ['Summarize my latest PR', '总结我最新的 PR'],

    // 新建菜单
    ['Import repository', '导入仓库'],
    ['New codespace', '新建代码空间'],
    ['New gist', '新建代码片段'],
    ['New organization', '新建组织'],
    ['New project', '新建项目'],
    ['Create new...', '新建...'],
    ['Create new…', '新建…'],

    // 关注动态
    ['Popular projects among people you follow', '你关注的人中的热门项目'],
    ['people you follow', '你关注的人'],

    // 加载和组织菜单
    ['One moment please...', '稍等下下....'],
    ['One moment please…', '稍等下下....'],
    ['Loading more...', '正在加载更多...'],
    ['Loading more…', '正在加载更多…'],
    ['Loading...', '加载中...'],
    ['Loading…', '加载中…'],
    ['Joined the', '加入了'],
    ['organization', '组织'],
    ['on', '于'],
    ['Go to organization dashboard', '前往组织仪表板'],
    ['Manage organizations', '管理组织'],
    ['Create organization', '创建组织'],

    // 个人资料和贡献图表
    ['Overview', '概览'],
    ['Edit profile', '编辑个人资料'],
    ['Achievements', '成就'],
    ['Pinned', '置顶'],
    ['Customize your pins', '自定义置顶项目'],
    ['Contribution settings', '贡献设置'],
    ['Private contributions', '私有贡献'],
    ['Turning on private contributions will show anonymized private activity on your profile.', '启用私有贡献后，你的个人资料中将显示匿名的私有活动。'],
    ['Turning off private contributions will show only public activity on your profile.', '关闭私有贡献后，你的个人资料中将只显示公开活动。'],
    ['Activity overview', '活动概览'],
    ['Turning off the Activity overview will hide the section on your profile.', '关闭活动概览后，你的个人资料中将隐藏此部分。'],
    ['Contributed to', '贡献于'],
    ['Code review', '代码审查'],
    ['Turning on the activity overview will show an overview of your activity across organizations and repositories.', '启用活动概览后，将显示你在各个组织和仓库中的活动概览。'],
    ['Learn how we count contributions', '了解我们如何计算贡献'],
    ['Less', '少'],
    ['More', '多'],
    ['Contribution activity', '贡献活动'],
    ['Activity in', '活动：'],
    ['yet for this period.', '中有活动。'],
    ['merged', '已合并'],
    ['Show more activity', '显示更多活动'],
    ['Seeing something unexpected? Take a look at the GitHub profile guide.', '遇到意外情况？请查看 GitHub 个人资料指南。'],
    ['Seeing something unexpected? Take a look at the', '遇到意外情况？请查看'],
    ['GitHub profile guide.', 'GitHub 个人资料指南。'],
    ['GitHub profile guide', 'GitHub 个人资料指南'],
    ['following', '正在关注'],

    // 贡献图月份和星期
    ['Jan', '1 月'],
    ['Feb', '2 月'],
    ['Mar', '3 月'],
    ['Apr', '4 月'],
    ['May', '5 月'],
    ['Jun', '6 月'],
    ['Jul', '7 月'],
    ['Aug', '8 月'],
    ['Sep', '9 月'],
    ['Oct', '10 月'],
    ['Nov', '11 月'],
    ['Dec', '12 月'],
    ['Mon', '周一'],
    ['Wed', '周三'],
    ['Fri', '周五'],
    ['January', '1 月'],
    ['February', '2 月'],
    ['March', '3 月'],
    ['April', '4 月'],
    ['June', '6 月'],
    ['July', '7 月'],
    ['August', '8 月'],
    ['September', '9 月'],
    ['October', '10 月'],
    ['November', '11 月'],
    ['December', '12 月'],

    // 个人资料成就
    ['Opened their first pull request on GitHub in', '在 GitHub 上开启了首个拉取请求，所在仓库：'],
    ['Congratulations on your first pull request!', '恭喜你创建了第一个拉取请求！'],
    ['First pull request', '首个拉取请求'],
    ['had no activity during this period.', '在此期间没有活动。'],

    // 成就详情
    ['Earned achievements', '已获得的成就'],
    ['Pull Shark', '拉取鲨鱼'],
    ['opened pull requests that have been merged.', '开启了已合并的拉取请求。'],
    ['History', '历史'],
    ['Unlocked', '已解锁'],
    ['inaccessible', '不可访问'],
    ['You want it? You merge it.', '想要它？合并它。'],
    ['Merged without a review', '未经审核即合并'],
    ['Quickdraw', '快枪手'],
    ['Gitty up!', '出发！'],
    ['Closed within 5 minutes of opening', '开启后 5 分钟内关闭'],
    ['Copy share link', '复制分享链接'],
    ['Preview on Twitter', '在 Twitter 上预览'],

    // Projects 空状态
    ['Create your first GitHub project', '创建你的第一个 GitHub 项目'],
    ['Projects are a customizable, flexible tool for planning and tracking your work.', '项目是一种可自定义的灵活工具，用于规划和跟踪工作。'],
    ['Welcome to Projects', '欢迎使用项目'],
    ['Built to be flexible and adaptable, Projects gives you a live canvas to filter, sort, and group issues and pull requests in a table, board, or roadmap. Tailor them to your needs with custom fields, saved views, workflows, and insights.', '项目灵活且适应性强，为你提供实时画布，可在表格、看板或路线图中筛选、排序和分组议题与拉取请求。你还可使用自定义字段、已保存视图、工作流和洞察，按需调整项目。'],
    ['Jump right in', '立即开始'],
    ['Project closed.', '项目已关闭。'],
    ['No open projects', '没有开启的项目'],

    // GitHub Packages
    ['Get started with GitHub Packages', '开始使用 GitHub Packages'],
    ['Safely publish packages, store your packages alongside your code, and share your packages privately with your team.', '安全地发布软件包，将软件包与代码一起存储，并与团队私密共享。'],
    ['Choose a registry', '选择软件包注册表'],
    ['A default package manager used for the Java programming language and the Java runtime environment.', 'Java 编程语言和 Java 运行时环境使用的默认包管理器。'],
    ['A free and open source package manager used for the Microsoft development platforms including .NET.', '用于 Microsoft 开发平台（包括 .NET）的免费开源包管理器。'],
    ['A standard format for distributing Ruby programs and libraries used for the Ruby programming language.', '用于分发 Ruby 程序和库的标准格式。'],
    ['A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code.', 'JavaScript 包管理器，随 Node.js 一起提供。npm 让开发者能够轻松共享和复用代码。'],
    ['A single place for your team to manage Docker images and decide who can see and access your images.', '团队集中管理 Docker 镜像并决定访问权限的地方。'],

    // Stars 和列表
    ['Lists', '列表'],
    ['Create list', '创建列表'],
    ['Create your first list', '创建你的第一个列表'],
    ['Create your first list.', '创建你的第一个列表。'],
    ['Lists make it easier to organize and curate repositories that you have starred.', '列表可让你更轻松地组织和整理已收藏的仓库。'],
    ['Lists make it easier to organize and curate repositories that you have starred. Create your first list.', '列表可让你更轻松地组织和整理已收藏的仓库。创建你的第一个列表。'],
    ['Search stars', '搜索收藏'],
    ['Type: All', '类型：全部'],
    ['Language', '语言'],
    ['Sort by: Recently starred', '排序：最近收藏'],
    ['Select type', '选择类型'],
    ['Select language', '选择语言'],
    ['Select order', '选择排序方式'],
    ['All', '全部'],
    ['Sources', '源仓库'],
    ['Forks', '复刻仓库'],
    ['Archived', '已归档'],
    ['Can be sponsored', '可赞助'],
    ['Mirrors', '镜像仓库'],
    ['Templates', '模板仓库'],
    ['Last updated', '最近更新'],
    ['Starred', '已收藏'],
    ['Forked from', '派生自'],

    // 编辑个人资料
    ['Name', '姓名'],
    ['Bio', '简介'],
    ['You can @mention other users and organizations to link to them.', '你可以使用 @ 提及其他用户和组织，以链接到他们。'],
    ['You can', '你可以使用'],
    ['other users and organizations to link to them.', '提及其他用户和组织，并链接到他们。'],
    ['Pronouns', '代词'],
    ["Don't specify", '不指定'],
    ['Company', '公司'],
    ['Location', '位置'],
    ['Display current local time', '显示当前本地时间'],
    ['(GMT+08:00) Beijing', '(GMT+08:00) 北京'],
    ['Social accounts', '社交账户'],
    ['Change your avatar', '更换头像'],

    // 用户和仓库数量后缀
    ['followers', '关注'],
    ['repositories', '个仓库'],
    ['released', '已发布'],

    // 仓库导航
    ['Code', '代码'],
    ['Actions', '自动化'],
    ['Projects', '项目'],
    ['Wiki', '维基'],
    ['Security', '安全'],
    ['Insights', '洞察'],
    ['Settings', '设置'],

    // 仓库操作
    ['Watch', '关注'],
    ['Unwatch', '取消关注'],
    ['Fork', '派生'],
    ['Star', '收藏'],
    ['Unstar', '取消收藏'],
    ['Sponsor', '赞助'],

    ['Branches', '分支'],
    ['Branch', '分支'],
    ['Tags', '标签'],
    ['Tag', '标签'],
    ['Go to file', '转到文件'],
    ['Add file', '添加文件'],
    ['Create new file', '创建新文件'],
    ['Upload files', '上传文件'],
    ['Download ZIP', '下载 ZIP'],

    // Issue 和 PR
    ['New issue', '新建议题'],
    ['New pull request', '新建拉取请求'],
    ['Compare & pull request', '比较并创建拉取请求'],
    ['Create pull request', '创建拉取请求'],
    ['Open', '开启'],
    ['Closed', '已关闭'],
    ['Merged', '已合并'],
    ['Conversation', '对话'],
    ['Commits', '提交'],
    ['Checks', '检查'],
    ['Files changed', '文件更改'],

    // 仓库信息
    ['Commit', '提交'],
    ['Contributors', '贡献者'],
    ['Releases', '发行版'],
    ['Packages', '软件包'],
    ['Deployments', '部署'],
    ['Languages', '语言'],
    ['About', '关于'],
    ['Activity', '动态'],
    ['Resources', '资源'],

    // 通用操作
    ['Edit', '编辑'],
    ['Delete', '删除'],
    ['Save', '保存'],
    ['Cancel', '取消'],
    ['Close', '关闭'],
    ['Submit', '提交'],
    ['Confirm', '确认'],
    ['Copy', '复制'],
    ['Copied!', '已复制！'],
    ['Preview', '预览'],
    ['Search', '搜索'],
    ['Filter', '筛选'],
    ['Clear', '清除'],
    ['Apply', '应用'],
    ['Create', '创建'],
    ['Update', '更新'],
    ['Refresh', '刷新'],
    ['Retry', '重试'],
    ['View all', '查看全部'],
    ['Learn more', '了解更多'],
    ['Show more', '显示更多'],
    ['Show less', '收起'],
    ['Manage', '管理'],
    ['Rename', '重命名'],
    ['Disable', '禁用'],
    ['Enable', '启用'],
    ['Remove', '移除'],

    // 通知和动态
    ['Notifications', '通知'],
    ['Inbox', '收件箱'],
    ['Saved', '已保存'],
    ['Done', '已完成'],
    ['Unread', '未读'],
    ['Mark as read', '标记为已读'],
    ['Mark as unread', '标记为未读'],

    // 用于 GitHub 把句子拆成多个元素的情况
    ['you', '你'],
    ['your', '你的'],
    ['started following', '开始关注'],

    // 账户菜单
    ['Sign in', '登录'],
    ['Sign up', '注册'],
    ['Your profile', '你的个人资料'],
    ['Your repositories', '你的仓库'],
    ['Your projects', '你的项目'],
    ['Your stars', '你的收藏'],
    ['Your organizations', '你的组织'],
    ['Your enterprises', '你的企业'],
    ['Your sponsors', '你的赞助'],
    ['Try Enterprise', '试用企业版'],
    ['Feature preview', '功能预览'],
    ['Sign out', '退出登录'],

    // 仓库状态
    ['Public', '公开'],
    ['Private', '私有'],
    ['Internal', '内部'],
    ['Archive', '归档'],
    ['Unarchive', '取消归档'],
    ['Archived', '已归档'],

    // 创建仓库
    ['Create repository', '创建仓库'],
    ['New repository', '新建仓库'],
    ['Repository name', '仓库名称'],
    ['Description', '说明'],
    ['Owner', '所有者'],
    ['Visibility', '可见性'],
    ['Initialize this repository with:', '初始化此仓库：'],
    ['Add a README file', '添加 README 文件'],
    ['Add a README', '添加 README'],
    ['Help people interested in this repository understand your project.', '帮助对此仓库感兴趣的人了解你的项目。'],
    ['Choose a license', '选择许可证'],
    ['No description, website, or topics provided.', '未提供说明、网站或主题。'],
    ['No releases published', '暂无已发布的发行版'],
    ['Create a new release', '创建新发行版'],
    ['No packages published', '暂无已发布的软件包'],
    ['Publish your first package', '发布你的第一个软件包'],
    ['Suggested workflows', '推荐工作流'],
    ['Based on your tech stack', '根据你的技术栈推荐'],
    ['Configure', '配置'],
    ['Publish Node.js Package to GitHub Packages', '将 Node.js 软件包发布到 GitHub Packages'],
    ['Publishes a Node.js package to GitHub Packages.', '将 Node.js 软件包发布到 GitHub Packages。'],
    ['SLSA Generic generator', 'SLSA 通用生成器'],
    ['Generate SLSA3 provenance for your existing release workflows', '为现有发布工作流生成 SLSA3 来源证明'],
    ['Build a NodeJS project with npm and webpack.', '使用 npm 和 webpack 构建 Node.js 项目。'],
    ['More workflows', '更多工作流'],
    ['Dismiss suggestions', '忽略建议'],
    ['Participating and @mentions', '参与和 @提及'],
    ['Only receive notifications from this repository when participating or @mentioned.', '仅在参与或被 @提及时接收此仓库的通知。'],
    ['All Activity', '所有活动'],
    ['Notified of all notifications on this repository.', '接收此仓库的所有通知。'],
    ['Ignore', '忽略'],
    ['Never be notified.', '不接收任何通知。'],
    ['Custom', '自定义'],
    ['Select events you want to be notified of in addition to participating and @mentions.', '除参与和 @提及外，选择你还希望接收通知的事件。'],
    ['Existing forks', '现有派生仓库'],
    ["You don't have any forks of this repository.", '你没有此仓库的任何派生副本。'],
    ['Create a new fork', '创建新的派生仓库'],
    ['Add this repository to a list', '将此仓库添加到列表'],
    ['0 stars', '0 个星标'],
    ['0 watching', '0 人关注'],
    ['0 forks', '0 个复刻'],
    ['Edit repository details', '编辑仓库详细信息'],
    ['Short description of this repository', '此仓库的简短说明'],
    ['Website', '网站'],
    ['Enter a valid URL', '输入有效网址'],
    ['Topics (separate with spaces)', '主题（用空格分隔）'],
    ['Topics', '主题'],
    ['(separate with spaces)', '（用空格分隔）'],
    ['Include in the home page', '在主页中显示'],
    ['Save changes', '保存更改'],
    ['A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.', '派生仓库是仓库的副本。你可以在不影响原项目的情况下自由尝试更改。'],
    ['Required fields are marked with an asterisk (*).', '必填字段标有星号（*）。'],
    ['Choose an owner', '选择所有者'],
    ['By default, forks are named the same as their upstream repository. You can customize the name to distinguish it further.', '默认情况下，派生仓库与上游仓库同名。你可以自定义名称以便区分。'],
    ['Copy the', '仅复制'],
    ['branch only', '分支'],
    ['Create fork', '创建派生仓库'],
    ['Files', '文件'],
    ['Cancel changes', '取消更改'],
    ['Commit changes...', '提交更改...'],
    ['Commit changes…', '提交更改…'],
    ['Spaces', '空格'],
    ['No wrap', '不换行'],
    ['Enter file contents here', '在此输入文件内容'],
    ['Use', '使用'],
    ['to toggle the', '切换'],
    ['key moving focus. Alternatively, use', '键移动焦点。或者，先按'],
    ['then', '然后'],
    ['to move to the next interactive element on the page.', '移动到页面上的下一个交互元素。'],
    ['Attach files by dragging & dropping, selecting or pasting them.', '可通过拖放、选择或粘贴来附加文件。'],
    ['Indent mode', '缩进模式'],
    ['Indent size', '缩进宽度'],
    ['Tabs', '制表符'],
    ['Line wrap mode', '换行模式'],
    ['Soft wrap', '自动换行'],
    ['Loading preview...', '正在加载预览...'],
    ['Loading preview…', '正在加载预览…'],
    ['There is no content to preview.', '没有可预览的内容。'],
    ['Switch branches/tags', '切换分支/标签'],
    ['Find or create a branch...', '查找或创建分支...'],
    ['Find or create a branch…', '查找或创建分支…'],
    ['Search or create a new tag', '搜索或创建新标签'],
    ['Search or create a new tag...', '搜索或创建新标签...'],
    ['Search or create a new tag…', '搜索或创建新标签…'],
    ['default', '默认'],
    ['View all branches', '查看所有分支'],
    ['View all tags', '查看所有标签'],
    ['branches', '分支'],
    ['tags', '标签'],
    ['Nothing to show', '暂无内容'],
    ['Search this repository', '搜索此仓库'],
    ['Expand file tree', '展开文件树'],
    ['Collapse file tree', '收起文件树'],
    ['You have unsaved changes on this file that can be restored.', '此文件有可恢复的未保存更改。'],
    ['Discard', '丢弃'],
    ['Restore', '恢复'],
    ['Choose a .gitignore template', '选择 .gitignore 模板'],

    // 表单
    ['Title', '标题'],
    ['Comment', '评论'],
    ['Write', '编辑'],
    ['Leave a comment', '发表评论'],
    ['Add a description', '添加说明'],
    ['No description provided.', '暂无说明。'],
    ['Optional', '可选'],
    ['Required', '必填'],

    // 时间和排序
    ['Newest', '最新'],
    ['Oldest', '最早'],
    ['Recently updated', '最近更新'],
    ['Least recently updated', '最久未更新'],
    ['Best match', '最佳匹配'],
    ['Sort', '排序'],

    // 相对时间（兼容数字和时间单位被拆成不同元素）
    ['second ago', '秒前'],
    ['seconds ago', '秒前'],
    ['minute ago', '分钟前'],
    ['minutes ago', '分钟前'],
    ['hour ago', '小时前'],
    ['hours ago', '小时前'],
    ['day ago', '天前'],
    ['days ago', '天前'],
    ['week ago', '周前'],
    ['weeks ago', '周前'],
    ['month ago', '个月前'],
    ['months ago', '个月前'],
    ['year ago', '年前'],
    ['years ago', '年前'],
    ['just now', '刚刚'],
    ['yesterday', '昨天'],
    ['today', '今天'],
    ['last week', '上周'],
    ['last month', '上个月'],
    ['last year', '去年'],

    // 转移仓库页面
    ['Transfer repository:', '转移仓库：'],
    ['Transfer this repository to another user or to an organization where you have the ability to create repositories.', '将此仓库转移给其他用户或组织（你需要拥有创建仓库的权限）。'],
    ['Required fields are marked with an asterisk (*).', '必填字段标有星号（*）。'],
    ['To understand admin access, teams, issue assignments, and redirects after a repository is transferred, see', '如需了解仓库转移后的管理员访问权限、团队、议题分配和重定向，请参阅'],
    ['Transferring a repository', '转移仓库'],
    ['in GitHub Help.', 'GitHub 帮助中的相关说明。'],
    ['Transferring may be delayed until the new owner approves the transfer.', '转移可能会延迟，直到新所有者批准此次转移。'],
    ['New owner', '新所有者'],
    ['Select one of my organizations', '选择我的一个组织'],
    ['Specify an organization or username', '指定组织或用户名'],
    ['Repository name', '仓库名称'],
    ['is available.', '可用。'],
    ['Type', '输入'],
    ['to confirm.', '以确认。'],
    ['I understand, transfer this repository.', '我已了解，转移此仓库。'],

    // 组织成员管理
    ['People', '成员'],
    ['Find a member...', '查找成员...'],
    ['Find a collaborator...', '查找协作者...'],
    ['Select all', '全选'],
    ['Visibility', '可见性'],
    ['No one outside of the organization has access to its repositories.', '组织外部没有任何人可以访问其仓库。'],
    ['Manage', '管理'],
    ['Convert to outside collaborator...', '转换为外部协作者...'],
    ['Remove from organization...', '从组织中移除...'],

    // 仓库主页和置顶菜单
    ['Edit Pins', '编辑置顶项'],
    ['About', '关于'],
    ['Custom properties', '自定义属性'],
    ['Audit log', '审核日志'],
    ['Report repository', '举报仓库'],
    ['Pin to...', '置顶到...'],
    ['Public pins in this organization', '此组织中的公开置顶项'],
    ['Visible to anyone', '所有人可见'],
    ['Private pins in this organization', '此组织中的私有置顶项'],
    ['Visible to members only', '仅成员可见'],
    ['Personal profile', '个人资料'],
    ['Pin this to your personal profile, visible to everyone', '将此项置顶到你的个人资料，所有人可见'],

    // 仓库常规设置导航
    ['General', '常规'],
    ['Access', '访问权限'],
    ['Collaborators and teams', '协作者和团队'],
    ['Moderation options', '内容管理选项'],
    ['Code, planning, and automation', '代码、规划与自动化'],
    ['Rules', '规则'],
    ['Webhooks', 'Webhook'],
    ['Environments', '环境'],
    ['Pages', 'Pages'],
    ['Advanced Security', '高级安全'],
    ['Code quality', '代码质量'],
    ['Deploy keys', '部署密钥'],
    ['Secrets and variables', '机密和变量'],
    ['Integrations', '集成'],
    ['GitHub Apps', 'GitHub 应用'],
    ['Email notifications', '电子邮件通知'],

    // 仓库常规设置
    ['Rename', '重命名'],
    ['Template repository', '模板仓库'],
    ['Template repositories let users generate new repositories with the same directory structure and files.', '模板仓库允许用户生成具有相同目录结构和文件的新仓库。'],
    ['Learn more about template repositories.', '详细了解模板仓库。'],
    ['Learn more about template repositories', '详细了解模板仓库'],
    ['Default branch', '默认分支'],
    ['The default branch is considered the “base” branch in your repository, against which all pull requests and code commits are automatically made, unless you specify a different branch.', '默认分支是仓库中的“基础”分支。除非指定其他分支，否则所有拉取请求和代码提交都会以它为目标。'],
    ['Releases', '发行版'],
    ['Enable release immutability', '启用发行版不可变性'],
    ['Disallow assets and tags from being modified once a release is published.', '发行版发布后禁止修改其资源和标签。'],
    ['Social preview', '社交媒体预览'],
    ["Upload an image to customize your repository's social media preview.", '上传图片以自定义仓库的社交媒体预览。'],
    ['Images should be at least 640×320px (1280×640px for best display).', '图片应至少为 640×320 像素（建议使用 1280×640 像素以获得最佳显示效果）。'],
    ['Download template', '下载模板'],
    ['Features', '功能'],
    ['Wikis', 'Wiki'],
    ['Wikis host documentation for your repository.', 'Wiki 用于托管仓库文档。'],
    ['Restrict editing to users in teams with push access only', '仅允许拥有推送权限的团队成员编辑'],
    ['Public wikis will still be readable by everyone.', '所有人仍可阅读公开 Wiki。'],
    ['Issues integrate lightweight task tracking into your repository. Keep projects on track with issue labels and milestones, and reference them in commit messages.', '议题为仓库提供轻量级任务跟踪。使用议题标签和里程碑推进项目，并可在提交消息中引用议题。'],
    ['Issue permissions', '议题权限'],
    ['Creation allowed by:', '允许创建者：'],
    ['All users', '所有用户'],
    ['If restricted, issues will still be readable by everyone who can see this repository.', '即使限制创建，所有能查看此仓库的人仍可阅读议题。'],
    ['Get organized with issue templates', '使用议题模板整理工作'],
    ['Give contributors issue templates that help you cut through the noise and help them push your project forward.', '为贡献者提供议题模板，减少无关信息并推动项目进展。'],
    ['Set up templates', '设置模板'],
    ['Sponsorships', '赞助'],
    ['Sponsorships help your community know how to financially support this repository.', '赞助功能让社区了解如何为此仓库提供资金支持。'],
    ['Display a "Sponsor" button', '显示“赞助”按钮'],
    ['Add links to GitHub Sponsors or third-party methods your repository accepts for financial contributions to your project.', '添加 GitHub Sponsors 或第三方赞助方式的链接，以接受项目资金支持。'],
    ['Set up sponsor button', '设置赞助按钮'],
    ['Preserve this repository', '保存此仓库'],
    ['Include this code in the GitHub Archive Program.', '将此代码纳入 GitHub 存档计划。'],
    ['Discussions', '讨论'],
    ['Discussions is the space for your community to have conversations, ask questions and post answers without opening issues.', '讨论区供社区交流、提问和回答，无需创建议题。'],
    ['Get started with Discussions', '开始使用讨论区'],
    ['Engage your community by having discussions right in your repository, where your community already lives', '直接在仓库中开展讨论，与已有社区互动。'],
    ['Set up discussions', '设置讨论区'],
    ["Projects on GitHub are created at the repository owner's level (organization or user) and can be linked to a repository's Projects tab. Projects are suitable for cross-repository development efforts such as feature work, complex product roadmaps or even Issue triage.", 'GitHub 项目在仓库所有者（组织或用户）层级创建，并可链接到仓库的“项目”选项卡。项目适合跨仓库开发，例如功能开发、复杂产品路线图或议题分类。'],
    ['Pull requests allow others to suggest changes to your repository.', '拉取请求允许他人建议对仓库进行更改。'],
    ['Pull request permissions', '拉取请求权限'],
    ['If restricted, pull requests will still be readable by everyone who can see this repository.', '即使限制创建，所有能查看此仓库的人仍可阅读拉取请求。'],

    // 拉取请求、提交和存档设置
    ['Pull Requests', '拉取请求'],
    ['Allow merge commits', '允许合并提交'],
    ['Add all commits from the head branch to the base branch with a merge commit.', '使用合并提交将头部分支的所有提交添加到基础分支。'],
    ['Default commit message', '默认提交消息'],
    ['Presented when merging a pull request with merge.', '使用合并方式合并拉取请求时显示。'],
    ['Default message', '默认消息'],
    ['Allow squash merging', '允许压缩合并'],
    ['Combine all commits from the head branch into a single commit in the base branch.', '将头部分支的所有提交合并为基础分支中的一个提交。'],
    ['Presented when merging a pull request with squash.', '使用压缩方式合并拉取请求时显示。'],
    ['Allow rebase merging', '允许变基合并'],
    ['Add all commits from the head branch onto the base branch individually.', '将头部分支的所有提交逐个添加到基础分支。'],
    ['Always suggest updating pull request branches', '始终建议更新拉取请求分支'],
    ['Allow auto-merge', '允许自动合并'],
    ['Automatically delete head branches', '自动删除头部分支'],
    ['Deleted branches will still be able to be restored.', '已删除的分支仍可恢复。'],
    ['Require contributors to sign off on web-based commits', '要求贡献者签署网页端提交'],
    ['Allow comments on individual commits', '允许评论单个提交'],
    ['Archives', '存档'],
    ['When creating source code archives, you can choose to include files stored using Git LFS in the archive.', '创建源代码存档时，可以选择包含通过 Git LFS 存储的文件。'],
    ['Include Git LFS objects in archives', '在存档中包含 Git LFS 对象'],
    ['Git LFS usage in archives is billed at the same rate as usage with the client.', '存档中的 Git LFS 用量按与客户端相同的费率计费。'],
    ['Pushes', '推送'],
    ['Limit how many branches and tags can be updated in a single push', '限制单次推送可更新的分支和标签数量'],
    ['Pushes will be rejected if they attempt to update more than this.', '尝试更新超过此数量时，推送将被拒绝。'],
    ['After merging a pull request, linked issues can be closed automatically.', '合并拉取请求后，可以自动关闭关联议题。'],
    ['Auto-close issues with merged linked pull requests', '合并关联的拉取请求后自动关闭议题'],
    ['Whenever linked pull requests have merged, auto-close the issue.', '关联的拉取请求合并后，自动关闭议题。'],

    // 危险区域
    ['Danger Zone', '危险区域'],
    ['Change repository visibility', '更改仓库可见性'],
    ['This repository is currently public.', '此仓库当前为公开仓库。'],
    ['Change visibility', '更改可见性'],
    ['Disable branch protection rules', '禁用分支保护规则'],
    ['Disable branch protection rules enforcement and APIs', '禁用分支保护规则的强制执行和 API'],
    ['Transfer ownership', '转移所有权'],
    ['Transfer', '转移'],
    ['Archive this repository', '归档此仓库'],
    ['Mark this repository as archived and read-only.', '将此仓库标记为已归档且只读。'],
    ['Delete this repository', '删除此仓库'],
    ['Once you delete a repository, there is no going back. Please be certain.', '仓库一旦删除便无法恢复，请务必确认。'],
    ['Updated', '更新于'],
    ['Types', '类型'],
    ['Feedback', '反馈'],
    ['Give feedback', '提供反馈'],
    ['Sort by', '排序方式'],
    ['Created on', '创建时间'],
    ['Total comments', '评论总数'],
    ['Best match', '最佳匹配'],
    ['Reactions', '反应'],
    ['Order', '排序'],
    ['Oldest', '最早'],
    ['Newest', '最新'],
    ['Filter by issue type', '按议题类型筛选'],
    ['Filter types', '筛选类型'],
    ['No type', '无类型'],
    ['Issues with no type', '没有类型的议题'],
    ['Filter assignees', '筛选受理人'],
    ['No assignees', '未分配'],
    ['Filter milestones', '筛选里程碑'],
    ['No milestone', '无里程碑'],
    ['Filter projects', '筛选项目'],
    ['No projects were found', '未找到项目'],
    ['Please try a different search query.', '请尝试其他搜索条件。'],
    ['Filter labels', '筛选标签'],
    ['No labels', '无标签'],

    // 设置页补充及无障碍文本
    ['Skip to content', '跳到正文'],
    ['Repository navigation', '仓库导航'],
    ['Footer', '页脚'],
    ['Footer navigation', '页脚导航'],
    ['Loading', '正在加载'],
    ['Learn more about template repositories.', '详细了解模板仓库。'],
    ["Upload an image to customize your repository’s social media preview.", '上传图片以自定义仓库的社交媒体预览。'],
    ['Include this code in the', '将此代码纳入'],
    ['GitHub Archive Program.', 'GitHub 存档计划。'],
    ['GitHub Archive Program', 'GitHub 存档计划'],
    ['Learn more about this setting', '详细了解此设置'],
    ['and send us your', '并向我们发送'],
    ['feedback.', '反馈。'],

    // 功能说明（兼容页面中的独立文本节点）
    ['When merging pull requests, you can allow any combination of merge commits, squashing, or rebasing. At least one option must be enabled. If you have linear history requirement enabled on any protected branch, you must enable squashing or rebasing.', '合并拉取请求时，可以任意组合使用合并提交、压缩合并或变基合并。必须至少启用一种方式。如果受保护分支启用了线性历史记录要求，则必须启用压缩合并或变基合并。'],
    ['Control how and when users are prompted to update their branches if there are new changes available in the base branch.', '控制基础分支出现新更改时，提示用户更新其分支的方式和时机。'],
    ['Whenever there are new changes available in the base branch, present an “update branch” option in the pull request.', '基础分支出现新更改时，在拉取请求中显示“更新分支”选项。'],
    ['You can allow setting pull requests to merge automatically once all required reviews and status checks have passed.', '可以允许拉取请求在所有必需审核和状态检查通过后自动合并。'],
    ['Waits for merge requirements to be met and then merges automatically.', '等待满足合并要求后自动合并。'],
    ['After pull requests are merged, you can have head branches deleted automatically.', '拉取请求合并后，可以自动删除头部分支。'],
    ["Enabling this setting will require contributors to sign off on commits made through GitHub’s web interface. Signing off is a way for contributors to affirm that their commit complies with the repository's terms, commonly the Developer Certificate of Origin (DCO).", '启用此设置后，贡献者必须签署通过 GitHub 网页界面创建的提交。签署表示贡献者确认其提交符合仓库条款，通常指开发者原创证书（DCO）。'],
    ['Learn more about signing off on commits.', '详细了解提交签署。'],
    ['Learn more about signing off on commits', '详细了解提交签署'],
    ["Enabling this setting will require contributors to sign off on commits made through GitHub’s web interface. Signing off is a way for contributors to affirm that their commit complies with the repository's terms, commonly the", '启用此设置后，贡献者必须签署通过 GitHub 网页界面创建的提交。签署表示贡献者确认其提交符合仓库条款，通常指'],
    ["Enabling this setting will require contributors to sign off on commits made through GitHub's web interface. Signing off is a way for contributors to affirm that their commit complies with the repository's terms, commonly the", '启用此设置后，贡献者必须签署通过 GitHub 网页界面创建的提交。签署表示贡献者确认其提交符合仓库条款，通常指'],
    ['Developer Certificate of Origin (DCO)', '开发者原创证书（DCO）'],
    ['Enabling this setting will allow anyone who can view this repository to add', '启用此设置后，任何能查看此仓库的人都可以添加'],
    ['commit comments.', '提交评论。'],
    ['commit comments', '提交评论'],
    ['Existing commit comments are not affected by this setting and will remain viewable, editable, and deletable.', '现有提交评论不受此设置影响，仍可查看、编辑和删除。'],
    ['Transfer this repository to another user or to an organization where you have the ability to create repositories.', '将此仓库转移给其他用户或你有权创建仓库的组织。'],

    // 下拉菜单选项
    ['Pull request title', '拉取请求标题'],
    ['Pull request title and commit details', '拉取请求标题和提交详情'],
    ['Pull request title and description', '拉取请求标题和说明'],
    ['Anyone can create a pull request', '任何人都可以创建拉取请求'],
    ['Collaborators only', '仅协作者'],
    ['Only collaborators can create PRs', '只有协作者可以创建拉取请求'],
    ['Anyone can create an issue', '任何人都可以创建议题'],
    ['Only collaborators can create issues', '只有协作者可以创建议题'],

    // 仓库访问权限管理
    ['Manage access', '管理访问权限'],
    ['Manage visibility', '管理可见性'],
    ['Public repository', '公开仓库'],
    ['This repository is public and visible to anyone', '此仓库为公开仓库，所有人均可见'],
    ['Direct access', '直接访问'],
    ['Organization access', '组织访问权限'],
    ['Organization Members', '组织成员'],
    ['Outside Collaborators', '外部协作者'],
    ['Pending Invitations', '待处理的邀请'],
    ['No people or teams have organization-based access to this repository', '没有任何成员或团队通过组织获得此仓库的访问权限'],
    ['Assigned individuals and teams will appear here once an organization owner grants them access', '组织所有者授予访问权限后，获授权的成员和团队将显示在这里'],
    ['Add people', '添加成员'],
    ['Add teams', '添加团队'],
    ['Create team', '创建团队'],
    ['Find people or a team…', '查找成员或团队…'],
    ['No matching GitHub account found', '未找到匹配的 GitHub 账户'],
    ['No matching team found', '未找到匹配的团队'],
    ['Filter by member type', '按成员类型筛选'],
    ['Search by name', '按名称搜索'],
    ['Choose role', '选择角色'],
    ['Choose role options', '选择角色选项'],
    ['Role', '角色'],
    ['Role:', '角色：'],
    ['Role: write', '角色：写入'],
    ['Base role', '基础角色'],
    ['Mixed roles', '混合角色'],
    ['User', '用户'],
    ['Team', '团队'],
    ['Teams', '团队'],
    ['members', '成员'],
    ['Admin', '管理'],
    ['Maintain', '维护'],
    ['Write', '写入'],
    ['Read', '读取'],
    ['Triage', '分类'],
    ['Security manager', '安全管理员'],
    ['All-repository admin', '所有仓库：管理'],
    ['All-repository maintain', '所有仓库：维护'],
    ['All-repository write', '所有仓库：写入'],
    ['All-repository read', '所有仓库：读取'],
    ['All-repository triage', '所有仓库：分类'],
    ['Can read, clone, and push to this repository. Can also manage issues, pull requests, and repository settings, including adding collaborators.', '可以读取、克隆和推送到此仓库，还可以管理议题、拉取请求和仓库设置，包括添加协作者。'],
    ['Create custom roles with GitHub Enterprise', '使用 GitHub Enterprise 创建自定义角色'],
    ['Enterprise accounts offer organizations granular control over permissions, and up to three custom repository roles.', '企业账户可让组织精细控制权限，并最多创建三个自定义仓库角色。'],
    ['Enterprise accounts offer organizations more granular control over permissions by allowing you to configure up to 20 custom repository roles. This enables greater control over who and how your users access code and data in your organization.', '企业账户允许配置最多 20 个自定义仓库角色，从而更精细地控制哪些用户能够以何种方式访问组织中的代码和数据。'],
    ['Try GitHub Enterprise', '试用 GitHub Enterprise'],
    ['GitHub Enterprise', 'GitHub Enterprise'],

    // 添加及移除访问权限
    ['Confirm you want to remove this member', '确认要移除此成员'],
    ['Remove from repository', '从仓库中移除'],
    ['However, they may still have access to this repository if they are a member of a team that is granted access.', '但是，如果该用户属于已获授权的团队，仍可能拥有此仓库的访问权限。'],
    ['Include my email address so I can be contacted', '附上我的电子邮件地址，以便对方联系我'],
    ['remove user access to this repository', '移除用户对此仓库的访问权限'],
    ['Close dialog', '关闭对话框'],
    ['Access type', '访问类型'],
    ['Label: Read', '标签：读取'],

    // 搜索、分页和通用状态
    ['Open menu', '打开菜单'],
    ['Switch repository', '切换仓库'],
    ['Breadcrumbs', '面包屑导航'],
    ['Global navigation menu', '全局导航菜单'],
    ['GitHub Homepage', 'GitHub 主页'],
    ['Search code, repositories, users, issues, pull requests...', '搜索代码、仓库、用户、议题和拉取请求...'],
    ['Search or jump to…', '搜索或跳转到…'],
    ['Search syntax tips', '搜索语法提示'],
    ['Use saved searches to filter your results more quickly', '使用已保存的搜索更快地筛选结果'],
    ['Saved searches', '已保存的搜索'],
    ['Create saved search', '创建已保存的搜索'],
    ['Query', '查询'],
    ['Type:', '类型：'],
    ['All issues', '所有议题'],
    ['All pull requests', '所有拉取请求'],
    ['No results found', '未找到结果'],
    ['0 suggestions.', '0 条建议。'],
    ['1 result loaded', '已加载 1 条结果'],
    ['1 entity', '1 个对象'],
    ['1 member', '1 名成员'],
    ['Previous', '上一页'],
    ['Next', '下一页'],
    ['Pagination', '分页'],
    ['Reload', '重新加载'],
    ['Loading content...', '正在加载内容...'],
    ['Save successful', '保存成功'],
    ['Dismiss alert', '关闭提醒'],
    ['Dismiss error', '关闭错误'],
    ['Sorry, something went wrong.', '抱歉，出现了问题。'],
    ['Something went wrong. Try again', '出现问题，请重试'],
    ['You can’t perform that action at this time.', '你目前无法执行该操作。'],
    ['You have no unread notifications', '你没有未读通知'],
    ['You signed in with another tab or window.', '你已在其他标签页或窗口中登录。'],
    ['You signed out in another tab or window.', '你已在其他标签页或窗口中退出登录。'],
    ['You switched accounts on another tab or window.', '你已在其他标签页或窗口中切换账户。'],
    ['to refresh your session.', '以刷新会话。'],

    // 反馈弹窗
    ['Give feedback.', '提供反馈。'],
    ['Provide feedback.', '提供反馈。'],
    ['Submit feedback.', '提交反馈。'],
    ['We read every piece of feedback, and take your input very seriously.', '我们会阅读每一条反馈，并认真对待你的意见。'],
    ['feedback', '反馈'],
    ['Include my email address so I can be contacted', '附上我的电子邮件地址，以便与我联系'],
    ['To see all available qualifiers, see our', '要查看所有可用限定符，请参阅我们的'],
    ['documentation', '文档'],
    ['Add custom roles with', '添加自定义角色：'],
    ['users and', '用户和'],
    ['can access this repository.', '可以访问此仓库。'],
    ['can access this repository through the organization.', '可以通过组织访问此仓库。'],
    ['has access to this repository.', '拥有此仓库的访问权限。'],
    ['Once removed,', '移除后，'],
    ['will no longer have direct access to this repository.', '将不再拥有此仓库的直接访问权限。'],

    // 设置导航补充
    ['Code review limits', '代码审查限制'],
    ['Interaction limits', '互动限制'],
    ['Internet access', '互联网访问'],
    ['Policies', '策略'],
    ['Reported content', '已举报内容'],
    ["There aren't any resolved content reports for this repository.", '此仓库没有任何已解决的内容举报。'],
    ['Rulesets', '规则集'],
    ['Runners', '运行器'],
    ['OIDC', 'OIDC'],
    ['Open-source license manager', '开源许可证管理器'],
    ['Cloud agent', '云端智能体'],
    ['Chat with Copilot', '与 Copilot 对话'],
    ['Open Copilot…', '打开 Copilot…'],
    ['Preview feature', '预览功能'],
    ['General settings', '常规设置'],
    ['Repository', '仓库'],
    ['Suggestions', '建议'],
    ['Webhook', 'Webhook'],
    ['items', '项'],
    ['then', '然后'],
    ['shift', 'Shift'],
    ['forward slash', '正斜杠'],

    // 规则、分支保护与规则洞察
    ['Add branch ruleset', '添加分支规则集'],
    ['Add classic branch protection rule', '添加经典分支保护规则'],
    ['Branch protection rules', '分支保护规则'],
    ['Classic branch protections have not been configured', '尚未配置经典分支保护规则'],
    ['Define branch rules to disable force pushing, prevent branches from being deleted, or require pull requests before merging. Learn more about', '定义分支规则以禁用强制推送、防止分支被删除，或要求在合并前创建拉取请求。详细了解'],
    ['Define whether collaborators can delete or force push and set requirements for any pushes, such as passing status checks or a linear commit history.', '定义协作者是否可以删除或强制推送，并为任何推送设置要求，例如通过状态检查或保持线性提交历史。'],
    ['New ruleset', '新建规则集'],
    ['You haven\'t created any rulesets', '你尚未创建任何规则集'],
    ['Go to rulesets to create new tag rules', '前往规则集以创建新的标签规则'],
    ['Learn more about rulesets.', '详细了解规则集。'],
    ['Rulesets', '规则集'],
    ['Rule insights', '规则洞察'],
    ['Rule Insights Dashboard', '规则洞察仪表板'],
    ['Filter rule insights dashboard', '筛选规则洞察仪表板'],
    ['Rule Suites', '规则套件'],
    ['See how rulesets are affecting this repository', '查看规则集如何影响此仓库'],
    ['Enterprise accounts enable you to review commits against rulesets to track pass, fail, or bypass status for greater oversight and understanding.', '企业账户允许你根据规则集审查提交，以跟踪通过、失败或绕过状态，从而获得更深入的监督和了解。'],
    ['Passes', '通过'],
    ['Failures', '失败'],
    ['Bypasses', '绕过'],
    ['Bypassed', '已绕过'],
    ['Bypasses by actor', '按执行者统计的绕过次数'],
    ['Number of bypasses', '绕过次数'],
    ['Actor', '执行者'],
    ['View allowed runs', '查看允许的运行'],
    ['View bypassed runs', '查看已绕过的运行'],
    ['View failed runs', '查看失败的运行'],
    ['Show Passes', '显示通过'],
    ['Show Failures', '显示失败'],
    ['Show Bypasses', '显示绕过'],
    ['Chart options', '图表选项'],
    ['View as data table, Chart', '以数据表查看图表'],
    ['Toggle series visibility, Chart', '切换数据系列可见性图表'],
    ['Interactive chart', '交互式图表'],
    ['End of interactive chart.', '交互式图表结束。'],
    ['Bar chart with 0 bars.', '包含 0 个柱的柱状图。'],
    ['Line chart with 3 lines.', '包含 3 条线的折线图。'],
    ['Created with Highcharts 11.4.3', '使用 Highcharts 11.4.3 创建'],

    // 标签保护与协作限制
    ['Protected tags', '受保护的标签'],
    ['Protected tags have been deprecated', '受保护的标签已弃用'],
    ['Protected tags are being deprecated. To continue protecting tags, please migrate to a tag ruleset by August 30th. You can learn more about the sunset in our', '受保护的标签即将弃用。要继续保护标签，请在 8 月 30 日前迁移到标签规则集。你可以在我们的'],
    ['changelog', '更新日志'],
    ['Interaction limits', '互动限制'],
    ['Temporary interaction restrictions', '临时互动限制'],
    ['Temporarily restrict which external users can interact with your repository (comment, open issues, or create pull requests) for a configurable period of time.', '在可配置的一段时间内，临时限制哪些外部用户可以与你的仓库互动（评论、创建议题或拉取请求）。'],
    ['This may be used to force a "cool-down" period during heated discussions or prevent unwanted interactions.', '这可用于在激烈讨论期间强制设置“冷静期”，或防止不必要的互动。'],
    ['Enable interaction limits for:', '为以下对象启用互动限制：'],
    ['Existing users', '现有用户'],
    ['New users', '新用户'],
    ['Users that have recently created their account will be unable to interact with the repository.', '最近创建账户的用户将无法与该仓库互动。'],
    ['will not be able to interact with the repository.', '将无法与该仓库互动。'],
    ['You can restrict repository interactions across the TenquiMC organization', '你可以限制 TenquiMC 组织中的仓库互动'],

    // 拉取请求限制与举报内容
    ['Pull request limits', '拉取请求限制'],
    ['Limit open pull requests from users without write access', '限制无写入权限用户打开的拉取请求数量'],
    ['Maximum open pull requests per user', '每位用户最多可打开的拉取请求数'],
    ['Currently, users without write access can open an unlimited number of pull requests.', '目前，没有写入权限的用户可以打开无限数量的拉取请求。'],
    ['Currently, users without write access can have up to', '目前，没有写入权限的用户最多可以同时拥有'],
    ['open pull request at a time.', '个开放的拉取请求。'],
    ['Enter a number from 1 to 1000', '输入 1 到 1000 之间的数字'],
    ['Enter a number from 1 to 1000. Users who have more open PRs than the above limit will not be able to create new PRs.', '输入 1 到 1000 之间的数字。打开的拉取请求数量超过上述限制的用户将无法创建新的拉取请求。'],
    ['Bypass list', '绕过列表'],
    ['No users can bypass the open pull request limit', '没有用户可以绕过开放拉取请求限制'],
    ['Add users', '添加用户'],
    ['Add users to bypass list', '将用户添加到绕过列表'],
    ['Users listed here can open pull requests regardless of the configured limit.', '此处列出的用户无论配置的限制如何都可以创建拉取请求。'],
    ['Restrict how many pull requests users without write access can have open at one time and add specific users to a bypass list. These settings stay in effect until you change them.', '限制无写入权限的用户一次可打开的拉取请求数量，并将特定用户添加到绕过列表。这些设置会一直生效，直到你更改它们。'],
    ['Reported Content', '已举报内容'],
    ['Report content setting', '举报内容设置'],
    ['Disable content reporting', '禁用内容举报'],
    ['Disable content reporting for all users', '为所有用户禁用内容举报'],
    ['Any user on GitHub is able to report content', '任何 GitHub 用户都可以举报内容'],
    ['Only users who have previously contributed to the repository and collaborators will be able to report content', '只有此前为此仓库贡献过的用户和协作者可以举报内容'],
    ['Limit to existing users', '限制为现有用户'],
    ['Limit to prior contributors', '限制为先前的贡献者'],
    ['Limit to repository collaborators', '限制为仓库协作者'],
    ['Limit to users explicitly granted', '限制为被明确授予权限的用户'],
    ['Users can report abusive or distruptive content for review and moderation.', '用户可以举报辱骂性或扰乱性内容，以供审核和管理。'],
    ['The following content has been reported by users:', '以下内容已被用户举报：'],
    ['There aren\'t any unresolved content reports for this repository.', '此仓库没有未解决的内容举报。'],
    ['Learn more about reported content', '详细了解已举报内容'],
    ['Resolved', '已解决'],
    ['Clear filter', '清除筛选条件'],
    ['Report filter', '举报筛选器'],
    ['Dismiss this message', '关闭此消息'],

    // 规则页面其余状态、筛选与辅助文本
    ['Abuse reports', '滥用举报'],
    ['active', '活跃'],
    ['Allowed', '允许'],
    ['branch', '分支'],
    ['Collaborators', '协作者'],
    ['committed', '已提交'],
    ['continue to be able to do so.', '将继续能够这样做。'],
    ['created', '已创建'],
    ['Customization settings', '自定义设置'],
    ['Failed', '失败'],
    ['in the time period', '在此时间段内'],
    ['in your', '在你的'],
    ['Members who have bypassed the most', '绕过次数最多的成员'],
    ['Organization members', '组织成员'],
    ['organization settings', '组织设置'],
    ['or higher access', '或更高访问权限'],
    ['Prior contributors and collaborators', '先前的贡献者和协作者'],
    ['protected branches', '受保护的分支'],
    ['read', '读取'],
    ['repository rules', '仓库规则'],
    ['Restrict users who are permitted to approve or request changes on pull requests in this repository.', '限制允许在此仓库的拉取请求中批准或请求更改的用户。'],
    ['reviews that "approve" or "request changes". All users able to submit comment pull request reviews will', '“批准”或“请求更改”的审核。所有能够提交拉取请求评论审核的用户将'],
    ['Users', '用户'],
    ['Users that are not', '不符合条件的用户'],
    ['Users that have not previously', '此前未曾'],
    ['Values', '值'],
    ['When enabled, only users explicitly granted access to this repository will be able to submit pull request', '启用后，只有被明确授予此仓库访问权限的用户才能提交拉取请求'],
    ['Copy code to clipboard', '复制代码到剪贴板'],

    // 互动限制和审核权限中由链接拆开的说明
    ['You can restrict repository interactions across the TenquiMC organization in your', '你可以在 TenquiMC 组织中限制仓库互动，详见'],
    ['to the main branch of this repository will be unable to interact with the repository.', '到此仓库 main 分支的用户将无法与仓库互动。'],
    ['collaborators', '协作者'],
    ['committed', '提交'],
    ['Users that are not', '非'],
    ['When enabled, only users explicitly granted access to this repository will be able to submit pull request reviews that "approve" or "request changes". All users able to submit comment pull request reviews will continue to be able to do so.', '启用后，只有被明确授予此仓库访问权限的用户才能提交“批准”或“请求更改”的拉取请求审核。所有能够提交评论型拉取请求审核的用户仍可继续这样做。'],

    // GitHub App 安装和授权（应用名称与跳转地址保持原文）
    ['Install & Authorize', '安装并授权'],
    ['for these repositories:', '为以下仓库：'],
    ['Repository access', '仓库访问权限'],
    ['Only select repositories', '仅选择仓库'],
    ['This applies to all current and future repositories owned by the resource owner. Also includes public repositories (read-only).', '此设置适用于资源所有者当前和未来拥有的所有仓库，也包括公开仓库（只读）。'],
    ['Select at least one repository. Also includes public repositories (read-only).', '请至少选择一个仓库，也包括公开仓库（只读）。'],
    ['with these permissions:', '具有以下权限：'],
    ['access to metadata', '访问元数据'],
    ['access to administration, checks, code, deployments, and pull requests', '访问管理、检查、代码、部署和拉取请求'],
    ['Installing & Authorizing', '正在安装并授权'],
    ['Next: you\'ll be redirected to', '下一步：你将被重定向到'],

    // 议题列表与筛选器
    ['Assigned to me', '分配给我'],
    ['Assignees', '受理人'],
    ['Author', '作者'],
    ['Collapse sidebar', '折叠侧边栏'],
    ['Created by me', '由我创建'],
    ['Issue filters', '议题筛选器'],
    ['Issues sidebar navigation', '议题侧边栏导航'],
    ['Open Issues sidebar navigation', '打开议题侧边栏导航'],
    ['Labels', '标签'],
    ['Mentioned', '被提及'],
    ['Milestones', '里程碑'],
    ['More Actions', '更多操作'],
    ['No results', '没有结果'],
    ['Recent activity', '最近活动'],
    ['Search Issues', '搜索议题'],
    ['Search results', '搜索结果'],
    ['Try adjusting your search filters.', '请尝试调整搜索筛选条件。'],
    ['Views', '视图'],
    ['Filter all issues', '筛选所有议题'],
    ['Filter by assignees', '按受理人筛选'],
    ['Filter by author', '按作者筛选'],
    ['Filter by label', '按标签筛选'],
    ['Filter by milestone', '按里程碑筛选'],
    ['Filter by project', '按项目筛选'],
    ['0 list items of 0 selected', '已选择 0 / 0 个列表项'],
    ['0 of 0 selected', '已选择 0 / 0 项'],
    ['全选 list items: Search results', '全选列表项：搜索结果'],
  ]);

  /**
   * GitHub 经常为了模板排版在同一个文本节点中插入换行和缩进。
   * 生成一份空白归一化索引，使词典中的单行句子也能匹配多行 HTML 文本。
   */
  const normalizedTranslations = new Map(
    [...translations].map(([source, translated]) => [
      source.replace(/\s+/g, ' ').trim(),
      translated,
    ])
  );

  /**
   * 部分匹配翻译。
   *
   * 用于带用户名、数字或其他动态变量的句子。
   * 越具体的规则应当放得越靠前。
   */
  const monthNumbers = {
    jan: 1,
    feb: 2,
    mar: 3,
    apr: 4,
    may: 5,
    jun: 6,
    jul: 7,
    aug: 8,
    sep: 9,
    oct: 10,
    nov: 11,
    dec: 12,
  };

  const partialTranslations = [
    [/(\d[\d,]*)\s*\/\s*(\d[\d,]*)\s+characters\b/gi, '$1 / $2 个字符'],
    [/\bContribute back to ([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+) by adding your own branch\./g, '通过添加自己的分支向 $1 贡献代码。'],
    [/\bFork your own copy of ([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)\b/g, '派生你自己的 $1 副本'],
    [/\b(\d[\d,]*)\s+stars?\b/gi, '$1 个星标'],
    [/\b(\d[\d,]*)\s+watching\b/gi, '$1 人关注'],
    [/\b(\d[\d,]*)\s+forks?\b/gi, '$1 个复刻'],
    [/\bContribution activity in ([A-Za-z0-9_.\/-]+)/g, '在 $1 中的贡献活动'],
    [/\bActivity\s+in\s+([A-Za-z0-9_.\/-]+)/g, '在 $1 中的活动'],
    [/\bActivity\s+in\s*$/g, '活动：'],
    [/\b([A-Za-z0-9_.-]+)\s+has\s+no\s+activity\s+in\s+([A-Za-z0-9_.\/-]+)\s+yet\s+for\s+this\s+period\./g, '$1 在此期间尚未在 $2 中有活动。'],
    [/\b([A-Za-z0-9_.-]+)\s+has\s+no\s+activity\s+in\s*$/g, '$1 在此期间尚未在 '],
    [/\b([A-Za-z0-9_.-]+)\s+had\s+no\s+activity\s+in\s+([A-Za-z0-9_.\/-]+)\s+during\s+this\s+period\./g, '$1 在此期间未在 $2 中有活动。'],
    [/\b([A-Za-z0-9_.-]+)\s+had\s+no\s+activity\s+in\s*$/g, '$1 在此期间未在 '],
    [/^\s*during\s+this\s+period\./g, '中有活动。'],
    [/\b(\d[\d,]*)\s+contributions?\s+in\s+the\s+last\s+year\s+in\s+([A-Za-z0-9_.\/-]+)/gi, '过去一年在 $2 有 $1 次贡献'],
    [/过去一年有\s+(\d[\d,]*)\s+次贡献\s+in\s+([A-Za-z0-9_.\/-]+)/g, '过去一年在 $2 有 $1 次贡献'],
    [/Turning off the 活动概览 will hide the section on your profile\./g, '关闭活动概览后，你的个人资料中将隐藏此部分。'],
    // 个人资料和贡献时间线的完整动态句
    [/(@[A-Za-z0-9_.-]+)\s+opened\s+pull\s+requests\s+that\s+have\s+been\s+merged\./gi, '$1 开启了已合并的拉取请求。'],
    [/\b(\d+)%\s+unlocked\b/gi, '已解锁 $1%'],
    [/\b(\d+)(?:st|nd|rd|th)\s+pull\s+request\s+merged\b/gi, '第 $1 个拉取请求已合并'],
    [/\bJoined\s+the\s+([A-Za-z0-9_.-]+)\s+organization\b/gi, '加入了 $1 组织'],
    [/\b([A-Za-z0-9_.-]+)\s+had\s+no\s+activity\s+during\s+this\s+period\./gi, '$1 在此期间没有活动。'],
    [/\bLink\s+to\s+social\s+profile\s+(\d+)\b/gi, '社交资料链接 $1'],
    [/\band\s+(\d[\d,]*)\s+other\s+repositories\b/gi, '以及其他 $1 个仓库'],
    [/\bActivity\s+overview\b/gi, '活动概览'],
    [/\b(\d[\d,]*)\s+contributions?\s+in\s+the\s+last\s+year\b/gi, '过去一年有 $1 次贡献'],
    [/\b(\d[\d,]*)\s+contributions?\s+in\s+(\d{4})\b/gi, '$2 年有 $1 次贡献'],
    [/\bLists\s*\((\d[\d,]*)\)/gi, '列表 ($1)'],
    [/\bCreated\s+(\d[\d,]*)\s+commits?\s+in\s+(\d[\d,]*)\s+repositor(?:y|ies)\b/gi, '在 $2 个仓库中创建了 $1 次提交'],
    [/\bCreated\s+(\d[\d,]*)\s+repositor(?:y|ies)\b/gi, '创建了 $1 个仓库'],
    [/\bOpened\s+(\d[\d,]*)\s+pull requests?\s+in\s+(\d[\d,]*)\s+repositor(?:y|ies)\b/gi, '在 $2 个仓库中开启了 $1 个拉取请求'],
    [/\b(\d[\d,]*)\s+contributions?\s+in\s+private\s+repositories\b/gi, '$1 次私有仓库贡献'],
    [/\b(\d[\d,]*)\s+following\b/gi, '正在关注 $1 人'],

    // 时间线标题与日期
    [
      /\b(\d[\d,]*)\s+contributions?\s+on\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d+)(?:st|nd|rd|th)\./gi,
      (_, count, month, day) =>
        `${monthNumbers[month.slice(0, 3).toLowerCase()]} 月 ${day} 日有 ${count} 次贡献。`,
    ],
    [
      /\bNo\s+contributions?\s+on\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d+)(?:st|nd|rd|th)\./gi,
      (_, month, day) =>
        `${monthNumbers[month.slice(0, 3).toLowerCase()]} 月 ${day} 日没有贡献。`,
    ],
    [
      /\bUpdated\s+on\s+(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{1,2}),\s+(\d{4})\b/gi,
      (_, month, day, year) =>
        `更新于 ${year} 年 ${monthNumbers[month.slice(0, 3).toLowerCase()]} 月 ${day} 日`,
    ],
    [
      /\bUpdated\s+on\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2})\b/gi,
      (_, month, day) =>
        `更新于 ${monthNumbers[month.toLowerCase()]} 月 ${day} 日`,
    ],
    [
      /\bUnlocked\s+on\s+(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{1,2}),\s+(\d{4})\b/gi,
      (_, month, day, year) =>
        `于 ${year} 年 ${monthNumbers[month.slice(0, 3).toLowerCase()]} 月 ${day} 日解锁`,
    ],
    [
      /\bon\s+(Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|Nov(?:ember)?|Dec(?:ember)?)\s+(\d{1,2}),\s+(\d{4})\b/gi,
      (_, month, day, year) =>
        `${year} 年 ${monthNumbers[month.slice(0, 3).toLowerCase()]} 月 ${day} 日`,
    ],
    [
      /\bon\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2})\b/gi,
      (_, month, day) =>
        `${monthNumbers[month.toLowerCase()]} 月 ${day} 日`,
    ],
    [
      /\b(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})\b/gi,
      (_, month, year) =>
        `${year} 年 ${monthNumbers[month.slice(0, 3).toLowerCase()]} 月`,
    ],
    [
      /\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2})\b/gi,
      (_, month, day) =>
        `${monthNumbers[month.toLowerCase()]} 月 ${day} 日`,
    ],

    // 动态和通知
    [/\bstarted following\s+you\b/gi, '开始关注你'],

    /**
     * GitHub 可能把结构拆成：
     *
     * <span>started following </span>
     * <a>you</a>
     *
     * 此规则会顺便移除 following 后面的英文空格。
     */
    [/\bstarted following\b[ \t\r\n]*/gi, '开始关注'],

    [/\bis following you\b/gi, '正在关注你'],
    [/\bfollowed you\b/gi, '关注了你'],
    [/\bmentioned you\b/gi, '提到了你'],
    [/\bassigned you\b/gi, '指派给了你'],
    [/\brequested your review\b/gi, '请求你审核'],
    [/\binvited you\b/gi, '邀请了你'],
    [/\bcommented on\b/gi, '评论了'],
    [/\bcreated an issue\b/gi, '创建了一个议题'],
    [/\bopened an issue\b/gi, '开启了一个议题'],
    [/\bclosed an issue\b/gi, '关闭了一个议题'],
    [/\breopened an issue\b/gi, '重新开启了一个议题'],
    [/\bopened a pull request\b/gi, '创建了一个拉取请求'],
    [/\bclosed a pull request\b/gi, '关闭了一个拉取请求'],
    [/\bmerged a pull request\b/gi, '合并了一个拉取请求'],

    // 数量
    [/\b(\d[\d,]*)\s+commits?\b/gi, '$1 次提交'],
    [/\b(\d[\d,]*)\s+contributors?\b/gi, '$1 位贡献者'],
    [/\b(\d[\d,]*)\s+releases?\b/gi, '$1 个发行版'],
    [/\b(\d[\d,]*)\s+branches?\b/gi, '$1 个分支'],
    [/\b(\d[\d,]*)\s+tags?\b/gi, '$1 个标签'],
    [/\b(\d[\d,]*)\s+issues?\b/gi, '$1 个议题'],
    [/\b(\d[\d,]*)\s+pull requests?\b/gi, '$1 个拉取请求'],
    [/\b(\d[\d,]*)\s+comments?\b/gi, '$1 条评论'],
    [/\b(\d[\d,]*)\s+files?\s+changed\b/gi, '$1 个文件发生更改'],
    [/\b(\d[\d,]*)\s+followers?\b/gi, '$1 关注'],
    [/\b(\d[\d,]*)\s+repositories\b/gi, '$1 个仓库'],

    // 时间
    [/\b(\d+)\s+seconds?\s+ago\b/gi, '$1 秒前'],
    [/\b(\d+)\s+minutes?\s+ago\b/gi, '$1 分钟前'],
    [/\b(\d+)\s+hours?\s+ago\b/gi, '$1 小时前'],
    [/\b(\d+)\s+days?\s+ago\b/gi, '$1 天前'],
    [/\b(\d+)\s+weeks?\s+ago\b/gi, '$1 周前'],
    [/\b(\d+)\s+months?\s+ago\b/gi, '$1 个月前'],
    [/\b(\d+)\s+years?\s+ago\b/gi, '$1 年前'],
    [/\bjust now\b/gi, '刚刚'],
    [/\byesterday\b/gi, '昨天'],
    [/\btoday\b/gi, '今天'],
    [/\blast week\b/gi, '上周'],
    [/\blast month\b/gi, '上个月'],
    [/\blast year\b/gi, '去年'],
    [/\bUnlocked\b/gi, '已解锁'],

    // 主页动态可能与用户名位于同一文本节点
    [/\bmade this repository public\b/gi, '将此仓库设为公开'],
    [/\bcreated a repository\b/gi, '创建了一个仓库'],
    [/\bstarred a repository\b/gi, '收藏了一个仓库'],

    // 搜索快捷键会根据平台和页面变化
    [/\bType\s+(.+?)\s+to search\b/gi, '输入 $1 进行搜索'],

    // 常见句子
    [/\bView all (\d+) comments\b/gi, '查看全部 $1 条评论'],
    [/\bShow (\d+) more\b/gi, '再显示 $1 项'],
    [/^\s*Updated\s*$/gi, '更新于'],

    // 转移仓库页面中的动态仓库名称
    [/\bTransfer repository:\s*/gi, '转移仓库：'],
    [/\bType\s+(.+?)\s+to confirm\.\b/gi, '输入 $1 以确认。'],
    [/\bMoving repository to (.+?)\.\s+This may take a few minutes\.\b/gi, '正在将仓库转移到 $1。此过程可能需要几分钟。'],
    [/^\s*Settings:\s+(.+?)\s*$/g, '设置：$1'],

    // GitHub 设置页会将说明和链接拆成多个文本节点；这些规则兼容拆分、引号和标点差异
    [/Learn more about template repositories\.?/gi, '详细了解模板仓库。'],
    [/Issues integrate lightweight task tracking into your repository\.\s*Keep projects on track with issue labels and milestones, and reference them in commit messages\.?/gi, '议题为仓库提供轻量级任务跟踪。使用议题标签和里程碑推进项目，并可在提交消息中引用议题。'],
    [/Discussions is the space for your community to have conversations, ask questions and post answers without opening issues\.?/gi, '讨论区供社区交流、提问和回答，无需创建议题。'],
    [/Projects on GitHub are created at the repository owner[’']s level \(organization or user\) and can be linked to a repository[’']s Projects tab\.\s*Projects are suitable for cross-repository development efforts such as feature work, complex product roadmaps or even Issue triage\.?/gi, 'GitHub 项目在仓库所有者（组织或用户）层级创建，并可链接到仓库的“项目”选项卡。项目适合跨仓库开发，例如功能开发、复杂产品路线图或议题分类。'],
    [/When merging pull requests, you can allow any combination of merge commits, squashing, or rebasing\.\s*At least one option must be enabled\.\s*If you have linear history requirement enabled on any protected branch, you must enable squashing or rebasing\.?/gi, '合并拉取请求时，可以任意组合使用合并提交、压缩合并或变基合并。必须至少启用一种方式。如果受保护分支启用了线性历史记录要求，则必须启用压缩合并或变基合并。'],
    [/Enabling this setting will require contributors to sign off on commits made through GitHub[’']s web interface\.\s*Signing off is a way for contributors to affirm that their commit complies with the repository[’']s terms, commonly the Developer Certificate of Origin \(DCO\)\.?/gi, '启用此设置后，贡献者必须签署通过 GitHub 网页界面创建的提交。签署表示贡献者确认其提交符合仓库条款，通常指开发者原创证书（DCO）。'],
    [/Learn more about signing off on commits\.?/gi, '详细了解提交签署。'],
    [/Enabling this setting will allow anyone who can view this repository to add\s*/gi, '启用此设置后，任何能查看此仓库的人都可以添加'],
    [/\.\s*Existing commit comments are not affected by this setting and will remain viewable, editable, and deletable\.?/gi, '。现有提交评论不受此设置影响，仍可查看、编辑和删除。'],
    [/Existing commit comments are not affected by this setting and will remain viewable, editable, and deletable\.?/gi, '现有提交评论不受此设置影响，仍可查看、编辑和删除。'],
    [/commit comments\b/gi, '提交评论'],
    [/Include this code in the\s*/gi, '将此代码纳入'],
    [/GitHub Archive Program\.?/gi, 'GitHub 存档计划。'],
    [/Learn more about this setting\.?/gi, '详细了解此设置'],
    [/and send us your\s*/gi, '并向我们发送'],
    [/Transfer this repository to another user or to an organization where you have the ability to create repositories\.?/gi, '将此仓库转移给其他用户或你有权创建仓库的组织。'],

    // 仓库访问权限页面中的动态名称和计数
    [/^\s*Add people to\s+(.+?)\s*$/gi, '向 $1 添加成员'],
    [/^\s*Add teams to\s+(.+?)\s*$/gi, '向 $1 添加团队'],
    [/^\s*Remove\s+(.+?)\s+from this repository\s*$/gi, '从此仓库中移除 $1'],
    [/^\s*Admin as owner of the\s+(.+?)\s+organization\.\s*$/gi, '作为 $1 组织所有者的管理员。'],
    [/^\s*Install & Authorize on your organization\s+(.+?)\s*$/gi, '在你的组织 $1 中安装并授权'],
    [/^\s*(\d[\d,]*)\s+actors?\s*$/gi, '$1 个参与者'],
    [/^\s*(\d[\d,]*)\s+suggestions?\.?\s*$/gi, '$1 条建议。'],
    [/^\s*(\d[\d,]*)\s+teams?\s*$/gi, '$1 个团队'],
    [/^\s*(\d[\d,]*)\s+members?\s*$/gi, '$1 名成员'],
    [/^\s*(\d[\d,]*)\s+entit(?:y|ies)\s*$/gi, '$1 个对象'],
    [/^\s*(\d[\d,]*)\s+results? loaded\s*$/gi, '已加载 $1 条结果'],
    [/^\s*(\d[\d,]*)\s+list items? of\s*(\d[\d,]*)\s+selected\s*$/gi, '已选择 $2 / $1 个列表项'],
    [/^\s*(\d[\d,]*)\s+of\s*(\d[\d,]*)\s+selected\s*$/gi, '已选择 $1 / $2 项'],
    [/^(\d{4})-(\d{2})-(\d{2}),\s*(\d+)\.\s*(Passes|Failures|Bypasses)\.?$/gi, (_, year, month, day, count, status) => {
      const names = { Passes: '通过', Failures: '失败', Bypasses: '绕过' };
      return `${year} 年 ${Number(month)} 月 ${Number(day)} 日，${count} 次${names[status]}`;
    }],
    [/^(Passes|Failures|Bypasses),\s*line\s*(\d+)\s*of\s*(\d+)\s*with\s*(\d+)\s*data points\.?$/gi, (_, status, line, total, points) => {
      const names = { Passes: '通过', Failures: '失败', Bypasses: '绕过' };
      return `${names[status]}，第 ${line} / ${total} 条线，共 ${points} 个数据点。`;
    }],
    [/^The chart has 1 X axis displaying Actor\.$/gi, '图表包含 1 个 X 轴，显示执行者。'],
    [/^The chart has 1 X axis displaying Time\. Data range: (.+?)\.$/gi, '图表包含 1 个 X 轴，显示时间。数据范围：$1。'],
    [/^The chart has 1 Y axis displaying Number of bypasses\. Data ranges from (.+?)\.$/gi, '图表包含 1 个 Y 轴，显示绕过次数。数据范围：$1。'],
    [/^The chart has 1 Y axis displaying Values\. Data ranges from (.+?)\.$/gi, '图表包含 1 个 Y 轴，显示数值。数据范围：$1。'],

    // 组织主页、仓库、Teams 和 People 页面
    ['GitHub Copilot billing for', 'GitHub Copilot 计费方式已改为按使用量计费，适用于'],
    [/\bGitHub Copilot billing for (.+?) is now usage-based\.\s+Set a per-user budget to manage costs\./gi, 'GitHub Copilot 计费方式已改为按使用量计费，适用于 $1。请设置每位用户的预算以管理费用。'],
    ['Set your budget', '设置预算'],
    ['We think you’re gonna like it here.', '我们相信你会喜欢这里。'],
    ['We’ve suggested some tasks here in your organization\'s overview to help you get started.', '我们在组织概览中为你推荐了一些任务，帮助你开始使用。'],
    ['Invite your people', '邀请成员'],
    ['Invite your first member', '邀请你的第一位成员'],
    ['Find people by their GitHub username or email address.', '通过 GitHub 用户名或电子邮件地址查找成员。'],
    ['Customize members\' permissions', '自定义成员权限'],
    ['Set everyone’s base permissions for your code.', '设置所有成员对代码的基本权限。'],
    ['Collaborative coding', '协作编码'],
    ['See more about collaborative coding', '详细了解协作编码'],
    ['Create a pull request', '创建拉取请求'],
    ['Propose and collaborate on changes to a repository.', '提出仓库更改并进行协作。'],
    ['Create a branch protection rule', '创建分支保护规则'],
    ['Enforce certain workflows for one or more branches.', '为一个或多个分支强制执行特定工作流。'],
    ['Automation and CI/CD', '自动化和 CI/CD'],
    ['See more about automation and CI/CD', '详细了解自动化和 CI/CD'],
    ['Auto-assign new issues', '自动分配新议题'],
    ['Try automatically assigning work with GitHub Actions.', '尝试使用 GitHub Actions 自动分配工作。'],
    ['Run a continuous integration test', '运行持续集成测试'],
    ['Validate your code using a CI workflow.', '使用 CI 工作流验证代码。'],
    ['Discover new GitHub features', '探索 GitHub 新功能'],
    ['See all features', '查看所有功能'],
    ['Client apps', '客户端应用'],
    ['Project management', '项目管理'],
    ['Team administration', '团队管理'],
    ['View as:', '查看方式：'],
    ['You are viewing the README and pinned repositories as a public user.', '你正在以公共用户身份查看 README 和置顶仓库。'],
    ['You can use', '你可以使用'],
    ['create a README file', '创建 README 文件'],
    ['pin repositories', '置顶仓库'],
    ['visible to anyone.', '让任何人都能看见。'],
    ['hide the tasks we\'ve suggested', '隐藏我们推荐的任务'],
    ['and bring them back later.', '稍后重新显示。'],
    ['Set up discussions to engage with your community!', '设置讨论区，与社区成员交流！'],
    ['Turn on discussions', '开启讨论'],
    ['Create new repository', '创建新仓库'],
    ['Invite someone', '邀请成员'],
    ['Search repositories', '搜索仓库'],
    ['Last pushed', '最近推送'],
    ['1 repository', '1 个仓库'],
    ['ProTip!', '提示！'],
    ['Using a comma within certain filters will aggregate the results.', '在某些筛选条件中使用逗号会合并结果。'],
    ['Search members...', '搜索成员...'],
    ['Export', '导出'],
    ['Invite member', '邀请成员'],
    ['Organization permissions', '组织权限'],
    ['Members', '成员'],
    ['Outside collaborators', '外部协作者'],
    ['Pending collaborators', '待处理的协作者'],
    ['Invitations', '邀请'],
    ['Failed invitations', '失败的邀请'],
    ['Security Managers', '安全管理员'],
    ['You are the only owner of this organization! We recommend a minimum of two people within each organization have the owner role.', '你是此组织唯一的所有者！我们建议每个组织至少有两名成员拥有所有者角色。'],
    ['Two-factor authentication', '双重身份验证'],
    ['Membership', '成员资格'],
    ['Membership via:', '加入方式：'],
    ['direct assignment', '直接分配'],
    ['Private', '私有'],
    ['Owner', '所有者'],
    ['teams', '个团队'],
    ['roles', '个角色'],
    ['Seamless communication with teams', '与团队无缝沟通'],
    ['Teams are a great way for groups of people to communicate and work on code together. Take a look at why they’re great.', 'Teams 是多人沟通和协作开发代码的好方法。来看看它们为何如此出色。'],
    ['Flexible repository access', '灵活的仓库访问权限'],
    ['You can add repositories to your teams with more flexible levels of access (Admin, Write, Read).', '你可以将仓库添加到团队，并设置更灵活的访问级别（管理、写入、读取）。'],
    ['Request to join teams', '请求加入团队'],
    ['Members can quickly request to join any team. An owner or team maintainer can approve the request.', '成员可以快速请求加入任何团队。所有者或团队维护者可以批准请求。'],
    ['Team mentions', '团队提及'],
    ['Use team @mentions (ex. @github/design for the entire team) in any comment, issue, or pull request.', '在评论、议题或拉取请求中使用团队 @提及（例如 @github/design 可提及整个团队）。'],
    ['New team', '新建团队'],
    ['Learn more about teams', '详细了解团队'],
  ];

  /**
   * 不翻译的标签。
   *
   * INPUT 会单独处理按钮 value、placeholder 等属性，
   * 但不会直接遍历其文本。
   */
  const ignoredTags = new Set([
    'SCRIPT',
    'STYLE',
    'NOSCRIPT',
    'TEXTAREA',
    'CODE',
    'PRE',
    'KBD',
    'SAMP',
    'SVG',
    'PATH',
  ]);

  /**
   * 不翻译的区域。
   *
   * .markdown-body 会覆盖：
   * - README
   * - Issue / PR 正文
   * - 评论正文
   * - Release 正文
   * - Wiki 正文
   *
   * 下面再添加一些选择器，避免 GitHub 改版或个别页面结构不同。
   */
  const ignoredSelectors = [
    // 代码
    'pre',
    'code',
    '.blob-code',
    '.highlight',
    '.react-code-text',
    '[data-code-marker]',
    '[data-testid="code-cell"]',

    // Markdown 和用户生成内容
    '.markdown-body',
    '.comment-body',
    '.js-comment-body',
    '.issue-body',
    '.release-body',
    '[data-testid="issue-body"]',
    '[data-testid="comment-body"]',
    '[data-testid="release-body"]',
    '[data-testid="markdown-body"]',

    // 仓库文件正文
    '.blob-wrapper',
    '.blob-code-content',
    '[data-testid="blob-content"]',

    // 编辑区域
    'textarea',
    '[contenteditable="true"]',
    '[role="textbox"][contenteditable="true"]',
  ].join(',');

  /**
   * 需要翻译的元素属性。
   */
  const translatedAttributes = [
    'aria-label',
    'aria-placeholder',
    'title',
    'placeholder',
    'data-content',
    'data-placeholder',
    'data-confirm',
    'label',
  ];

  const compactTabStyles = `
    a[data-tab-item] {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: flex-start !important;
      flex: 0 0 auto !important;
      width: auto !important;
      min-width: max-content !important;
      column-gap: 6px !important;
      padding-inline: 12px !important;
    }

    a[data-tab-item] > [data-component] {
      flex: 0 0 auto !important;
      margin-inline: 0 !important;
    }

    a[data-tab-item] > [data-component="counter"] {
      margin-left: 2px !important;
    }

    :where(nav, div):has(> a[data-tab-item]) {
      justify-content: flex-start !important;
      column-gap: 4px !important;
    }

    :where(
      [class*="prc-Overlay-"],
      [class*="prc-ActionMenu-"]
    ):has(ul[data-component="ActionList"][role="menu"]) {
      --overlay-width: max-content !important;
      width: fit-content !important;
      min-width: 0 !important;
      max-width: min(420px, calc(100vw - 24px)) !important;
    }

    :where(
      [class*="prc-Overlay-"],
      [class*="prc-ActionMenu-"]
    ) ul[data-component="ActionList"][role="menu"] {
      width: max-content !important;
      min-width: 200px !important;
      max-width: min(420px, calc(100vw - 24px)) !important;
      overflow-x: hidden !important;
    }

    :where(
      [class*="prc-Overlay-"],
      [class*="prc-ActionMenu-"]
    ) ul[data-component="ActionList"][role="menu"]
      [data-component="ActionList.Item.Label"] {
      white-space: nowrap !important;
    }

    [data-github-zh-more-button="true"] {
      display: inline-flex !important;
      align-items: center !important;
      justify-content: center !important;
      line-height: 1 !important;
    }

  `;

  /**
   * 短时间内可能出现很多 DOM 更新。
   * 使用 Set 保存所有待处理根节点，避免只处理最后一个节点。
   */
  const pendingRoots = new Set();
  const observedRoots = new WeakSet();
  const editablePlaceholderTexts = new Set([
    'Ask anything or type @ to add context',
    'Ask Copilot...',
    'Ask Copilot…',
    'Find a repository...',
    'Find a repository…',
    'Find a repository',
    'Enter file contents here',
    'Find or create a branch...',
    'Find or create a branch…',
    'Search or create a new tag',
    'Search or create a new tag...',
    'Search or create a new tag…',
    'Attach files by dragging & dropping, selecting or pasting them.',
  ]);

  let scheduled = false;
  let translating = false;

  function shouldIgnore(element) {
    if (!(element instanceof Element)) {
      return false;
    }

    if (ignoredTags.has(element.tagName)) {
      return true;
    }

    return Boolean(element.closest(ignoredSelectors));
  }

  /**
   * 标签、项目、里程碑、仓库和用户等名称由用户或仓库数据决定。它们常出现在
   * GitHub 动态创建的下拉菜单中，不能因为恰好与某个界面词汇同名而被翻译。
   */
  function isVariableGitHubContent(element, value = '') {
    if (!(element instanceof Element)) return false;

    if (element.closest('[role="listbox"], [class*="SuggestionsList"]')) {
      return true;
    }

    const isDynamicPickerMenu = Boolean(
      element.closest(
        [
          '[class*="LabelPicker"] [role="menu"]',
          '[class*="ListProjectFilter"] [role="menu"]',
          '[class*="ListMilestoneFilter"] [role="menu"]',
          '[class*="ListAssigneeFilter"] [role="menu"]',
          '[class*="ListAuthorFilter"] [role="menu"]',
          '[class*="repoPicker"] [role="menu"]',
          '[class*="RepositoryPicker"] [role="menu"]',
        ].join(',')
      )
    );

    if (isDynamicPickerMenu) {
      const fixedPickerText = new Set([
        'Filter by issue type', 'Filter types', 'No type',
        'Issues with no type', 'Filter assignees', 'No assignees',
        'Filter milestones', 'No milestone', 'Filter projects',
        'No projects were found', 'Please try a different search query.',
        'Filter labels', 'No labels',
      ]);
      return !fixedPickerText.has(value.trim());
    }

    const href = element.closest('a[href]')?.getAttribute('href') ?? '';

    return /\/(?:issues|pull)\/\d+(?:[/?#]|$)/.test(href) ||
      /\/(?:labels|milestone|projects)\//.test(href) ||
      /^\/[^/?#]+\/[^/?#]+\/?(?:[?#]|$)/.test(href);
  }

  function isEditableControl(element) {
    return (
      element instanceof Element &&
      element.matches(
        'input, textarea, [contenteditable="true"], [role="textbox"]'
      )
    );
  }

  function isWithinEditableControl(element) {
    return Boolean(
      element instanceof Element &&
      element.closest(
        'textarea, [contenteditable="true"], [role="textbox"]'
      )
    );
  }

  function hasPlaceholderAttribute(element) {
    return (
      element instanceof Element &&
      ['placeholder', 'aria-placeholder', 'data-placeholder'].some(
        attribute => element.hasAttribute(attribute)
      )
    );
  }

  /**
   * 完整匹配。
   */
  function translateExact(value) {
    if (!value) return null;

    const trimmed = value.trim();

    if (!trimmed) return null;

    return (
      translations.get(trimmed) ??
      normalizedTranslations.get(trimmed.replace(/\s+/g, ' ')) ??
      null
    );
  }

  /**
   * 部分匹配。
   */
  function translatePartial(value) {
    if (!value) return null;

    let result = value;

    for (const [pattern, replacement] of partialTranslations) {
      /**
       * 此数组也允许放置仅作完整匹配的字符串规则。
       * 字符串不能像正则一样设置 lastIndex；在严格模式下那会抛出
       * TypeError，并中断整页翻译。
       */
      if (typeof pattern === 'string') {
        if (result.trim() === pattern) {
          result = replacePreservingWhitespace(result, replacement);
        }

        continue;
      }

      /**
       * 带 g 标志的正则可能保留 lastIndex。
       * 每次使用前重置，防止偶发漏匹配。
       */
      pattern.lastIndex = 0;
      result = result.replace(pattern, replacement);
    }

    return result !== value ? result : null;
  }

  /**
   * 保留完整匹配文本前后的空白。
   */
  function replacePreservingWhitespace(original, translated) {
    const leading = original.match(/^\s*/)?.[0] ?? '';
    const trailing = original.match(/\s*$/)?.[0] ?? '';

    return `${leading}${translated}${trailing}`;
  }

  /**
   * 获取文档顺序中的前一个文本节点。
   */
  function getPreviousTextNode(node) {
    let current = node;

    while (current && current !== document.body) {
      if (!current.previousSibling) {
        current = current.parentNode;
        continue;
      }

      current = current.previousSibling;

      while (current.lastChild) {
        current = current.lastChild;
      }

      if (current instanceof Text) {
        return current;
      }
    }

    return null;
  }

  /**
   * GitHub 把一条短语拆成多个元素时，元素之间的换行和
   * 缩进会成为独立文本节点。仅对指定的前置短语移除空白。
   */
  function removeWhitespaceBeforePhrase(node, previousPhrases) {
    const whitespaceNodes = [];
    let previous = getPreviousTextNode(node);

    while (previous && !previous.nodeValue?.trim()) {
      whitespaceNodes.push(previous);
      previous = getPreviousTextNode(previous);
    }

    const previousText = previous?.nodeValue?.trim();

    if (!previousPhrases.includes(previousText)) {
      return false;
    }

    for (const whitespaceNode of whitespaceNodes) {
      whitespaceNode.nodeValue = '';
    }

    return true;
  }

  /**
   * 该句的中文语序与英文相反。当后半句是链接时，将整句
   * 放入链接文本，避免生硬的分段翻译。
   */
  function translateSplitPopularProjects(node, translated) {
    const whitespaceNodes = [];
    let previous = getPreviousTextNode(node);

    while (previous && !previous.nodeValue?.trim()) {
      whitespaceNodes.push(previous);
      previous = getPreviousTextNode(previous);
    }

    if (previous?.nodeValue?.trim() !== 'Popular projects among') {
      return false;
    }

    previous.nodeValue = '';

    for (const whitespaceNode of whitespaceNodes) {
      whitespaceNode.nodeValue = '';
    }

    const trailing = node.nodeValue?.match(/\s*$/)?.[0] ?? '';
    node.nodeValue = `${translated}${trailing}`;

    return true;
  }

  /**
   * GitHub 的贡献图标签使用了按英文宽度计算的 dx。
   * 翻译后根据实际文字宽度重新对齐四个方向的百分比和标签中心。
   */
  function scheduleActivityOverviewAlignment(element) {
    const svg = element.closest(
      'svg.js-activity-overview-graph'
    );

    if (!svg) return;

    requestAnimationFrame(() => {
      for (const direction of [
        'top',
        'right',
        'bottom',
        'left',
      ]) {
        const percentage = svg.querySelector(
          `.js-highlight-percent-${direction}`
        );
        const label = svg.querySelector(
          `.js-highlight-label-${direction}`
        );

        if (
          !percentage?.isConnected ||
          !label?.isConnected ||
          !percentage.textContent?.trim() ||
          typeof percentage.getComputedTextLength !== 'function' ||
          typeof label.getComputedTextLength !== 'function'
        ) {
          continue;
        }

        const percentageDx = Number.parseFloat(
          percentage.getAttribute('dx')
        );

        if (!Number.isFinite(percentageDx)) continue;

        const percentageWidth = percentage.getComputedTextLength();
        const labelWidth = label.getComputedTextLength();
        const anchor = label.getAttribute('text-anchor');
        let alignedDx = percentageDx;

        if (anchor === 'start') {
          alignedDx += (percentageWidth - labelWidth) / 2;
        } else if (anchor === 'end') {
          alignedDx += (labelWidth - percentageWidth) / 2;
        }

        label.setAttribute('dx', String(alignedDx));
      }
    });
  }

  /**
   * 翻译普通文本节点。
   */
  function translateTextNode(node) {
    if (!(node instanceof Text)) return;

    const parent = node.parentElement;
    const original = node.nodeValue;

    if (!original || !original.trim()) return;

    const isKnownEditablePlaceholder =
      Boolean(parent) &&
      editablePlaceholderTexts.has(original.trim()) &&
      (
        isWithinEditableControl(parent) ||
        original.trim() ===
          'Attach files by dragging & dropping, selecting or pasting them.'
      );

    if (
      !parent ||
      (shouldIgnore(parent) && !isKnownEditablePlaceholder)
    ) {
      return;
    }

    if (isVariableGitHubContent(parent, original)) return;

    // GitHub 的筛选器会把查询语法渲染为普通文本节点；不可翻译其中的
    // `updated`、`@today` 等关键字，否则会导致查询条件失效。
    if (
      parent.closest(
        '[data-type="filter-expression"], .styled-input-content, .Input-module__Box_3__M5GVB'
      )
    ) {
      return;
    }

    // 优先完整匹配
    let exactTranslation = translateExact(original);

    const key = original.trim();
    const isGlobalHeader = Boolean(parent.closest('header'));
    const isIntegrationPermission = Boolean(
      parent.closest('.integrations-permission')
    );
    const isSelectionMenu = Boolean(
      parent.closest('[role="menu"], [role="dialog"]')
    );
    const isRepositoryListDialog = Boolean(
      parent.closest(
        '[id*="user-list"][id*="dialog"], [aria-labelledby*="user-list"]'
      )
    );

    if (isIntegrationPermission && key === 'and') {
      exactTranslation = '和';
    } else if (isIntegrationPermission && key === 'write') {
      exactTranslation = '写入';
    } else if (key === 'Type' && isGlobalHeader) {
      exactTranslation = '输入';
    } else if (isSelectionMenu && key === 'Name') {
      exactTranslation = '名称';
    } else if (isSelectionMenu && key === 'Stars') {
      exactTranslation = '星标数';
    } else if (
      (isSelectionMenu || isRepositoryListDialog) &&
      key === 'Lists'
    ) {
      exactTranslation = '收藏列表';
    } else if (
      (isSelectionMenu || isRepositoryListDialog) &&
      key === 'Create list'
    ) {
      exactTranslation = '创建收藏列表';
    }

    if (exactTranslation) {
      if (
        [
          'Code review',
          'Issues',
          'Pull requests',
          'Commits',
        ].includes(key)
      ) {
        scheduleActivityOverviewAlignment(parent);
      }

      if (
        key === 'people you follow' &&
        translateSplitPopularProjects(
          node,
          '你关注的人中的热门项目'
        )
      ) {
        return;
      }

      if (
        key === 'More' &&
        parent.closest('button, [role="button"], summary')
      ) {
        const button = parent.closest(
          'button, [role="button"], summary'
        );

        button.setAttribute(
          'data-github-zh-more-button',
          'true'
        );

        node.nodeValue = replacePreservingWhitespace(
          original,
          '更多'
        );
        return;
      }

      /**
       * started following 后面通常紧跟独立的 you 元素。
       * 不保留原节点末尾的英文空格。
       */
      if (
        key === 'started following' ||
        key === 'starred' ||
        key === 'Upgrade' ||
        key === 'Joined the'
      ) {
        const leading = original.match(/^\s*/)?.[0] ?? '';
        node.nodeValue = `${leading}${exactTranslation}`;
      } else if (
        key === 'you' &&
        removeWhitespaceBeforePhrase(
          node,
          ['started following', '开始关注']
        )
      ) {
        const trailing = original.match(/\s*$/)?.[0] ?? '';
        node.nodeValue = `${exactTranslation}${trailing}`;
      } else if (
        key === 'a repository' &&
        removeWhitespaceBeforePhrase(
          node,
          ['starred', '收藏了']
        )
      ) {
        const trailing = original.match(/\s*$/)?.[0] ?? '';
        node.nodeValue = `${exactTranslation}${trailing}`;
      } else if (
        key === 'to access more models and higher limits.' &&
        removeWhitespaceBeforePhrase(
          node,
          ['Upgrade', '升级']
        )
      ) {
        const trailing = original.match(/\s*$/)?.[0] ?? '';
        node.nodeValue = `${exactTranslation}${trailing}`;
      } else if (key === 'organization') {
        const trailing = original.match(/\s*$/)?.[0] ?? '';
        node.nodeValue = `${exactTranslation}${trailing}`;
      } else {
        node.nodeValue = replacePreservingWhitespace(
          original,
          exactTranslation
        );
      }

      return;
    }

    // 完整匹配失败后进行部分匹配
    const partialTranslation = translatePartial(original);

    if (partialTranslation !== null) {
      node.nodeValue = partialTranslation;
    }
  }

  /**
   * 只扫描可编辑区域中的固定占位提示，不修改用户输入。
   */
  function translateEditablePlaceholderText(root) {
    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT
    );

    let node;

    while ((node = walker.nextNode())) {
      if (editablePlaceholderTexts.has(node.nodeValue?.trim())) {
        translateTextNode(node);
      }
    }
  }

  /**
   * 翻译元素属性。
   */
  function translateElementAttributes(element) {
    if (!(element instanceof Element)) return;
    if (
      shouldIgnore(element) &&
      !isEditableControl(element) &&
      !hasPlaceholderAttribute(element)
    ) {
      return;
    }

    for (const attribute of translatedAttributes) {
      const original = element.getAttribute(attribute);

      if (!original) continue;
      if (isVariableGitHubContent(element, original)) continue;

      const exactTranslation = translateExact(original);

      if (exactTranslation) {
        element.setAttribute(
          attribute,
          replacePreservingWhitespace(original, exactTranslation)
        );
        continue;
      }

      const partialTranslation = translatePartial(original);

      if (partialTranslation !== null) {
        element.setAttribute(attribute, partialTranslation);
      }
    }

    /**
     * input 按钮的可见文字通常储存在 value 中。
     */
    if (
      element instanceof HTMLInputElement &&
      ['button', 'submit', 'reset'].includes(element.type)
    ) {
      const original = element.value;

      const exactTranslation = translateExact(original);

      if (exactTranslation) {
        element.value = exactTranslation;
        return;
      }

      const partialTranslation = translatePartial(original);

      if (partialTranslation !== null) {
        element.value = partialTranslation;
      }
    }
  }

  /**
   * 让个人页标签按翻译后的内容宽度紧凑排列。
   */
  function injectCompactTabStyles(root) {
    if (!root?.querySelector) return;

    const existingStyle = root.querySelector(
      '#github-zh-compact-tabs'
    );

    if (existingStyle) {
      existingStyle.textContent = compactTabStyles;
      return;
    }

    const style = document.createElement('style');
    style.id = 'github-zh-compact-tabs';
    style.textContent = compactTabStyles;

    if (root instanceof Document) {
      (root.head || root.documentElement).append(style);
    } else {
      root.append(style);
    }
  }

  /**
   * 文件编辑器会把附件提示放在被忽略的编辑区容器中。
   * 通过固定的文件输入框定位提示，避免触碰用户编辑内容。
   */
  function translateFileAttachmentHint(root) {
    const inputs = [];
    const hints = [];

    if (
      root instanceof Element &&
      root.matches('span.default')
    ) {
      hints.push(root);
    }

    if ('querySelectorAll' in root) {
      hints.push(...root.querySelectorAll('span.default'));
    }

    for (const hint of hints) {
      if (
        hint.textContent?.trim() ===
        'Attach files by dragging & dropping, selecting or pasting them.'
      ) {
        hint.textContent = '可通过拖放、选择或粘贴来附加文件。';
      }
    }

    if (
      root instanceof Element &&
      root.matches('#blob-dragged-file-input')
    ) {
      inputs.push(root);
    }

    if ('querySelectorAll' in root) {
      inputs.push(
        ...root.querySelectorAll('#blob-dragged-file-input')
      );
    }

    for (const input of inputs) {
      let container = input.parentElement;

      for (let depth = 0; container && depth < 10; depth += 1) {
        if (
          container.textContent?.includes(
            'Attach files by dragging & dropping, selecting or pasting them.'
          )
        ) {
          const walker = document.createTreeWalker(
            container,
            NodeFilter.SHOW_TEXT
          );
          let node;

          while ((node = walker.nextNode())) {
            if (
              node.nodeValue?.includes(
                'Attach files by dragging & dropping, selecting or pasting them.'
              )
            ) {
              node.nodeValue = node.nodeValue.replace(
                'Attach files by dragging & dropping, selecting or pasting them.',
                '可通过拖放、选择或粘贴来附加文件。'
              );
            }
          }

          break;
        }

        container = container.parentElement;
      }
    }
  }

  /**
   * 翻译一个节点及其子树。
   */
  function translateTree(root) {
    if (!root) return;

    if (root instanceof Text) {
      translateTextNode(root);
      return;
    }

    if (
      !(root instanceof Document) &&
      !(root instanceof DocumentFragment) &&
      !(root instanceof Element)
    ) {
      return;
    }

    translateFileAttachmentHint(root);

    if (
      root instanceof Document ||
      (root instanceof DocumentFragment && 'host' in root)
    ) {
      injectCompactTabStyles(root);
    }

    if (root instanceof Element) {
      if (shouldIgnore(root)) {
        if (
          isEditableControl(root) ||
          hasPlaceholderAttribute(root)
        ) {
          translateElementAttributes(root);
        }

        if (isWithinEditableControl(root)) {
          translateEditablePlaceholderText(root);
        }

        return;
      }

      translateElementAttributes(root);

      if (root.shadowRoot) {
        observeRoot(root.shadowRoot);
        translateTree(root.shadowRoot);
      }
    }

    const walker = document.createTreeWalker(
      root,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (node instanceof Element && shouldIgnore(node)) {
            if (
              isEditableControl(node) ||
              hasPlaceholderAttribute(node)
            ) {
              return NodeFilter.FILTER_ACCEPT;
            }

            /**
             * 整棵子树都不再遍历。
             * 因此 README、评论、代码内部不会触发部分匹配。
             */
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        },
      }
    );

    let node;

    while ((node = walker.nextNode())) {
      if (node instanceof Text) {
        translateTextNode(node);
      } else if (node instanceof Element) {
        translateElementAttributes(node);

        if (isEditableControl(node)) {
          translateEditablePlaceholderText(node);
        }

        if (node.shadowRoot) {
          observeRoot(node.shadowRoot);
          translateTree(node.shadowRoot);
        }
      }
    }
  }

  /**
   * 找到一个适合翻译的根节点。
   *
   * 若收到文本节点，则使用其父元素；
   * 若节点已经离开页面，则退回 document.body。
   */
  function normalizeRoot(root) {
    if (root instanceof Text) {
      return root.parentElement || document.body;
    }

    if (
      root instanceof Element ||
      root instanceof Document ||
      root instanceof DocumentFragment
    ) {
      return root;
    }

    return document.body;
  }

  /**
   * 合并同一帧中的多次翻译请求。
   */
  function scheduleTranslation(root = document.body) {
    const normalizedRoot = normalizeRoot(root);

    if (normalizedRoot) {
      pendingRoots.add(normalizedRoot);
    }

    if (scheduled) return;

    scheduled = true;

    requestAnimationFrame(() => {
      scheduled = false;

      if (translating) {
        scheduleTranslation(document.body);
        return;
      }

      translating = true;

      try {
        const roots = [...pendingRoots];
        pendingRoots.clear();

        /**
         * 若有整个 document/body，则不需要再逐个扫描其子节点。
         */
        const fullPageRoot = roots.find(
          item =>
            item === document ||
            item === document.documentElement ||
            item === document.body
        );

        if (fullPageRoot) {
          translateTree(fullPageRoot);
        }

        for (const item of roots) {
          if (item === fullPageRoot) continue;

          if (
            item instanceof Document ||
            item instanceof DocumentFragment ||
            item.isConnected
          ) {
            translateTree(item);
          }
        }
      } finally {
        translating = false;
      }
    });
  }

  /**
   * 处理普通 DOM 和 Shadow DOM 中的动态内容。
   */
  function handleMutations(mutations) {
    if (translating) return;

    for (const mutation of mutations) {
      if (mutation.type === 'characterData') {
        scheduleTranslation(
          mutation.target.parentElement || mutation.target.getRootNode()
        );

        continue;
      }

      if (mutation.type === 'attributes') {
        scheduleTranslation(mutation.target);
        continue;
      }

      if (mutation.type === 'childList') {
        for (const addedNode of mutation.addedNodes) {
          if (
            addedNode instanceof Element ||
            addedNode instanceof Text ||
            addedNode instanceof DocumentFragment
          ) {
            scheduleTranslation(addedNode);
          }
        }
      }
    }
  }

  /**
   * MutationObserver 不会跨越 Shadow DOM 边界，因此每个根节点
   * 都需要单独监听。
   */
  function observeRoot(root) {
    if (!root || observedRoots.has(root)) return;

    const observer = new MutationObserver(handleMutations);

    observer.observe(root, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: translatedAttributes,
    });

    observedRoots.add(root);
  }

  /**
   * 开始监听 GitHub 动态内容。
   */
  function startObserver() {
    if (!document.documentElement) {
      requestAnimationFrame(startObserver);
      return;
    }

    injectCompactTabStyles(document);
    observeRoot(document.documentElement);

    scheduleTranslation(document.documentElement);
  }

  /**
   * 捕获组件之后创建的 Shadow Root。
   */
  const originalAttachShadow = Element.prototype.attachShadow;

  if (typeof originalAttachShadow === 'function') {
    Element.prototype.attachShadow = function (...args) {
      const shadowRoot = originalAttachShadow.apply(this, args);

      observeRoot(shadowRoot);
      scheduleTranslation(shadowRoot);

      return shadowRoot;
    };
  }

  /**
   * GitHub 站内导航不会总是触发完整页面刷新。
   */
  const navigationEvents = [
    'turbo:load',
    'turbo:render',
    'pjax:end',
    'pageshow',
    'popstate',
  ];

  for (const eventName of navigationEvents) {
    window.addEventListener(
      eventName,
      () => {
        scheduleTranslation(document.body);

        /**
         * 部分组件会在导航完成后继续异步加载。
         */
        setTimeout(() => {
          scheduleTranslation(document.body);
        }, 100);

        setTimeout(() => {
          scheduleTranslation(document.body);
        }, 500);

        setTimeout(() => {
          scheduleTranslation(document.body);
        }, 1500);
      },
      true
    );
  }

  /**
   * pushState 和 replaceState 默认不会触发 popstate。
   */
  for (const methodName of ['pushState', 'replaceState']) {
    const originalMethod = history[methodName];

    if (typeof originalMethod !== 'function') continue;

    history[methodName] = function (...args) {
      const result = originalMethod.apply(this, args);

      queueMicrotask(() => {
        scheduleTranslation(document.body);
      });

      return result;
    };
  }

  startObserver();
})();
