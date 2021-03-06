/*jshint maxlen:false */

define({
    ADD_ENDLINE_TO_THE_END_OF_FILE:     "在文件末尾添加空行",
    ADD_TO_GITIGNORE:                   "添加到 .gitignore",
    AGREE_TO_STORE_PASSWORDS:           "同意以纯文本方式保存密码",
    AMEND_COMMIT:                       "修改上一次提交",
    AMEND_COMMIT_FORBIDDEN:             "不能修改已经上传的提交",
    BASH_NOT_AVAILABLE:                 "Bash 不存在或者配置有误",
    BASIC_CONFIGURATION:                "基本设置",
    BRACKETS_GIT_ERROR:                 "Brackets Git 遇到了一个错误\u2026",
    BRANCH_NAME:                        "分支名称",
    BUTTON_CANCEL:                      "取消",
    BUTTON_CHANGELOG:                   "显示更改（Changelog）",
    BUTTON_CLOSE:                       "关闭",
    BUTTON_DEFAULTS:                    "重置默认值",
    BUTTON_OK:                          "确认",
    BUTTON_REPORT:                      "报告错误",
    BUTTON_SAVE:                        "保存",
    BUTTON_COMMIT:                      "提交",
    BUTTON_INIT:                        "初始化 Git 仓库",
    BUTTON_CLONE:                       "克隆远程 Git 仓库",
    CHANGELOG:                          "更改记录（Changelog）",
    CHECK_GIT_SETTINGS:                 "检查 Git 设置",
    COMMIT:                             "提交",
    COMMIT_ALL_SHORTCUT:                "提交所有修改",
    COMMIT_CURRENT_SHORTCUT:            "提交当前文件",
    COMMIT_MESSAGE_PLACEHOLDER:         "在此编辑提交信息\u2026",
    CLONE_REPOSITORY:                   "克隆远程仓库",
    CREATE_NEW_BRANCH:                  "新建分支",
    CUSTOM_TERMINAL_COMMAND:            "自定义终端命令（例如 gnome-terminal --window --working-directory=$1）",
    DEBUG:                              "调试",
    DEBUG_MODE_SETTING:                 "启用调试模式",
    DELETE_FILE:                        "删除文件",
    DIFF:                               "运行 Diff 查看更改",
    ENTER_PASSWORD:                     "输入密码：",
    ENTER_USERNAME:                     "输入用户名：",
    ENTER_REMOTE_GIT_URL:               "输入远程 Git 地址",
    ERROR_TERMINAL_NOT_FOUND:           "在您的系统里找不到预设置的终端，您可以在设置中手动定义终端命令。",
    EXTENSION_WAS_UPDATED_TITLE:        "扩展已经更新到 {0} 版本",
    FEATURES:                           "特性",
    FILE_DELETED:                       "已删除",
    FILE_MODIFIED:                      "已修改",
    FILE_NEWFILE:                       "新加入",
    FILE_RENAMED:                       "重命名",
    FILE_STAGED:                        "被跟踪的文件",
    FILE_UNTRACKED:                     "未被跟踪的文件",
    FOR_MAC_LINUX_USERS:                "对于 Mac/Linux 用户",
    FOR_WINDOWS_USERS:                  "对于 Windows 用户",
    GIT_COMMIT:                         "Git 提交\u2026",
    GIT_CONFIGURATION:                  "Git 配置",
    GIT_DIFF:                           "Git diff &mdash;",
    GIT_IS_IN_PATH:                     "Git 可以在直接调用 (即在系统路径内，对 Mac 可能无效)",
    GIT_PULL_RESPONSE:                  "Git Pull 的回应",
    GIT_PUSH_RESPONSE:                  "Git Push 的回应",
    GIT_SETTINGS:                       "Git 设置\u2026",
    GOTO_PREVIOUS_GIT_CHANGE:           "回到前一个修改位置",
    GOTO_NEXT_GIT_CHANGE:               "跳到下一个修改位置",
    LAUNCH_BASH_SHORTCUT:               "运行终端的快捷键",
    LOADING:                            "加载中\u2026",
    LIST_MODIFIED_FILES:                "列出修改的文件",
    MARK_MODIFIED_FILES_IN_TREE:        "在文件树（File tree）中标记修改的文件",
    NOTHING_TO_COMMIT:                  "没有更改，不需要提交。",
    PANEL_COMMAND:                      "显示 Git 面板",
    PANEL_SHORTCUT:                     "显示/关闭 Git 面板",
    PASSWORDS:                          "密码",
    PATH_TO_GIT_EXECUTABLE:             "Git 执行文件路径",
    PATH_TO_GIT_MSYSGIT:                "msysgit 的路径",
    PULL_SHORTCUT:                      "Git Pull",
    PUSH_SHORTCUT:                      "Git Push",
    Q_DELETE_FILE:                      "你确认要删除 <span class='dialog-filename'>{0}</span> 文件吗？",
    Q_RESTART_BRACKETS:                 "希望现在重启 Brackets 并应用更改吗？",
    Q_UNDO_CHANGES:                     "确认重置对 <span class='dialog-filename'>{0}</span> 文件的更改？",
    REMOVE_FROM_GITIGNORE:              "从 .gitignore 中删除",
    RESTART:                            "重新启动",
    SAVE_PASSWORD_QUESTION:             "保存用户名和密码？",
    SET_ORIGIN_URL:                     "设置 origin 的地址",
    SHORTCUTS:                          "快捷键",
    SHORTCUTS_HINT:                     "提示：用“-”分割按键",
    SHOW_BASH_TERMINAL_BUTTON:          "在面板中显示终端按钮",
    SHOW_REPORT_BUG_BUTTON:             "在面板中显示错误报告按钮",
    STRIP_WHITESPACE_FROM_COMMITS:      "去除提交信息后的空白字符",
    TOOLTIP_BUG:                        "报告错误",
    TOOLTIP_OPEN_BASH:                  "打开终端",
    TOOLTIP_PULL:                       "从远程拉取代码",
    TOOLTIP_PUSH:                       "推送到远程服务器",
    TOOLTIP_CLOSE_NOT_MODIFIED:         "关闭没有修改的文件",
    TOOLTIP_INIT:                       "初始化 Git 仓库",
    TOOLTIP_CLONE:                      "克隆远程仓库",
    TOOLTIP_COMMIT:                     "提交所选择的文件",
    TOOLTIP_SHOW_UNTRACKED:             "显示未被跟踪的文件",
    TOOLTIP_HIDE_UNTRACKED:             "隐藏未被跟踪的文件",
    TOOLTIP_REFRESH_PANEL:              "刷新面板",
    TOOLTIP_HIDE_HISTORY:               "隐藏历史记录",
    TOOLTIP_SHOW_HISTORY:               "显示历史记录",
    TOOLTIP_PICK_REMOTE:                "选择首选的远程地址",
    UNDO_CHANGES:                       "撤销更改",
    URL:                                "地址",
    USE_CODE_INSPECTION:                "使用代码检查",
    USE_GIT_GUTTER:                     "使用 Git gutter 标记修改记录",
    USING_GIT_VERSION:                  "Git 版本"
});
