define(function (require, exports, module) {
    "use strict";

    var ProjectManager = brackets.getModule("project/ProjectManager");
    var NativeApp = brackets.getModule("utils/NativeApp");

    var vmAppsPath = "/vagrant/apps";

    var hostAppsPath;
    if (brackets.platform === "win") {
        hostAppsPath = "/Users/sashko/git/InstaCode/apps"; // XXX this is wrong
    } else if (brackets.platform === "mac") {
        var username = brackets.app.getUserDocumentsDirectory().split("/")[2];
        hostAppsPath = "/Users/" + username + "/git/InstaCode/apps";
    }

    var killServerCommand = "kill -9 `ps ax | grep node | grep meteor | awk '{print $1}'`";

    module.exports = function (execute) {
        var clean = function (terminalId) {
            execute(terminalId, 'clear');
        };

        var cd = function (terminalId) {
            execute(terminalId, 'cd "' + vmAppsPath + '"');
            ProjectManager.openProject(hostAppsPath);
        };
        
        var createApp = function(terminalId) {
            
            //always create new app in project root
            var appName = prompt("What's the name of your app?", "MyAwesomeApp");
            appName = appName.replace(/ /g, "_");
            
            if (appName) {
                cd(terminalId);

                var vmProjectPath = vmAppsPath + "/" + appName;

                var commands = [
                    "meteor create " + appName,
                    "meteor create /home/vagrant/.instacode/apps/" + appName,
                    "sudo mount --bind /home/vagrant/.instacode/apps/" + appName + "/.meteor " + vmProjectPath + "/.meteor",
                    "cd " + vmProjectPath,
                    "clear"
                ];

                execute(terminalId, commands.join(";"));

                //timeout to allow "meteor create" to complete and create the directory
                setTimeout(function() {
                    ProjectManager.openProject(hostAppsPath + "/" + appName);
                }, 1000);
            }
        };
        
        var openBrowser = function(terminalId) {
            NativeApp.openURLInDefaultBrowser("http://localhost:3000/");
        };
        
        var startServer = function (terminalId) {
            var currentProjectPath = ProjectManager.getProjectRoot().fullPath;
            execute(terminalId, killServerCommand + '; cd ' + currentProjectPath + ' ; clear; meteor');
            openBrowser(terminalId);
        };
        
        return {
            clean: clean,
            cd: cd,
            createApp: createApp,
            startServer: startServer,
            openBrowser: openBrowser
        };
    };
});
