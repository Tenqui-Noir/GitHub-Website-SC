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
    ['Dashboard', '仪表板'],
    ['Pull requests', '拉取请求'],
    ['Issues', '议题'],
    ['Codespaces', '代码空间'],
    ['Marketplace', '市场'],
    ['Explore', '探索'],

    // Copilot 和通用导航
    ['Ask anything or type @ to add context', '询问任何问题，或输入 @ 添加上下文'],
    ['Type', '输入'],
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
    ['Organizations', '组织'],
    ['Enterprises', '企业'],
    ['Sponsors', '赞助'],
    ['Find a repository...', '查找仓库...'],
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
    ['China', '中国'],
    ['Achievements', '成就'],
    ['Pinned', '置顶'],
    ['Customize your pins', '自定义置顶项目'],
    ['Contribution settings', '贡献设置'],
    ['Learn how we count contributions', '了解我们如何计算贡献'],
    ['Less', '少'],
    ['More', '多'],
    ['Contribution activity', '贡献活动'],
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

    // 编辑个人资料
    ['Name', '姓名'],
    ['Bio', '简介'],
    ['You can @mention other users and organizations to link to them.', '你可以使用 @ 提及其他用户和组织，以链接到他们。'],
    ['You can', '你可以使用'],
    ['other users and organizations to link to them.', '提及其他用户和组织，并链接到他们。'],
    ['Pronouns', '代词'],
    ["Don't specify", '不指定'],
    ['Company', '公司'],
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
    ['Choose a license', '选择许可证'],
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
  ]);

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
    // 个人资料和贡献时间线的完整动态句
    [/\bJoined\s+the\s+([A-Za-z0-9_.-]+)\s+organization\b/gi, '加入了 $1 组织'],
    [/\b([A-Za-z0-9_.-]+)\s+had\s+no\s+activity\s+during\s+this\s+period\./gi, '$1 在此期间没有活动。'],
    [/\bLink\s+to\s+social\s+profile\s+(\d+)\b/gi, '社交资料链接 $1'],
    [/\b(\d[\d,]*)\s+contributions?\s+in\s+the\s+last\s+year\b/gi, '过去一年有 $1 次贡献'],
    [/\bCreated\s+(\d[\d,]*)\s+commits?\s+in\s+(\d[\d,]*)\s+repositor(?:y|ies)\b/gi, '在 $2 个仓库中创建了 $1 次提交'],
    [/\bCreated\s+(\d[\d,]*)\s+repositor(?:y|ies)\b/gi, '创建了 $1 个仓库'],
    [/\bOpened\s+(\d[\d,]*)\s+pull requests?\s+in\s+(\d[\d,]*)\s+repositor(?:y|ies)\b/gi, '在 $2 个仓库中开启了 $1 个拉取请求'],
    [/\b(\d[\d,]*)\s+contributions?\s+in\s+private\s+repositories\b/gi, '$1 次私有仓库贡献'],
    [/\b(\d[\d,]*)\s+following\b/gi, '正在关注 $1 人'],

    // 时间线标题与日期
    [
      /\bon\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2})\b/gi,
      (_, month, day) =>
        `于 ${monthNumbers[month.toLowerCase()]} 月 ${day} 日`,
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

    // 主页动态可能与用户名位于同一文本节点
    [/\bmade this repository public\b/gi, '将此仓库设为公开'],
    [/\bcreated a repository\b/gi, '创建了一个仓库'],
    [/\bstarred a repository\b/gi, '收藏了一个仓库'],

    // 搜索快捷键会根据平台和页面变化
    [/\bType\s+(.+?)\s+to search\b/gi, '输入 $1 进行搜索'],

    // 常见句子
    [/\bView all (\d+) comments\b/gi, '查看全部 $1 条评论'],
    [/\bShow (\d+) more\b/gi, '再显示 $1 项'],
    [/\bUpdated\b/gi, '更新于'],
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

    ul[data-component="ActionList"][role="menu"] {
      width: max-content !important;
      min-width: 200px !important;
      max-width: min(420px, calc(100vw - 24px)) !important;
      overflow-x: hidden !important;
    }

    :where(
      [class*="prc-Overlay-"],
      [class*="prc-ActionMenu-"],
      div,
      section
    ):has(
      > ul[data-component="ActionList"][role="menu"]
    ) {
      --overlay-width: max-content !important;
      width: fit-content !important;
      min-width: 0 !important;
      max-width: min(420px, calc(100vw - 24px)) !important;
    }

    ul[data-component="ActionList"][role="menu"]
      [data-component="ActionList.Item.Label"] {
      white-space: nowrap !important;
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

    return translations.get(trimmed) ?? null;
  }

  /**
   * 部分匹配。
   */
  function translatePartial(value) {
    if (!value) return null;

    let result = value;

    for (const [pattern, replacement] of partialTranslations) {
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
   * 翻译普通文本节点。
   */
  function translateTextNode(node) {
    if (!(node instanceof Text)) return;

    const parent = node.parentElement;
    const original = node.nodeValue;

    if (!original || !original.trim()) return;

    const isKnownEditablePlaceholder =
      Boolean(parent) &&
      isWithinEditableControl(parent) &&
      editablePlaceholderTexts.has(original.trim());

    if (
      !parent ||
      (shouldIgnore(parent) && !isKnownEditablePlaceholder)
    ) {
      return;
    }

    // 优先完整匹配
    const exactTranslation = translateExact(original);

    if (exactTranslation) {
      const key = original.trim();

      if (
        key === 'people you follow' &&
        translateSplitPopularProjects(
          node,
          '你关注的人中的热门项目'
        )
      ) {
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
