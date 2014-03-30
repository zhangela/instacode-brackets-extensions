define(function (require, exports, module) {
    "use strict";

    var ProjectManager = brackets.getModule("project/ProjectManager");
    var NativeApp = brackets.getModule("utils/NativeApp");
    var FileSystem = brackets.getModule("filesystem/FileSystem");
    var vmAppsPath = "/vagrant/apps";

    var hostAppsPath;
    // brackets.app.getUserDocumentsDirectory() is
    // C:/Users/Oleksandr/Documents or
    // /Users/sashko/Documents
    hostAppsPath = brackets.app.getUserDocumentsDirectory() + "/InstaCode/vagrant_env/apps";

    var killServerCommand = "kill -9 `ps ax | grep node | grep meteor | awk '{print $1}'`";

    module.exports = function (terminalManager) {
        var execute = terminalManager.command.bind(terminalManager);

        var clean = function (terminalId) {
            execute(terminalId, 'clear');
        };

        var cd = function (terminalId) {
            var appName = ProjectManager.getProjectRoot().name;

            var vmProjectPath = vmAppsPath + "/" + appName;
            execute(terminalId, 'cd "' + vmProjectPath + '"');
        };
        
        var createApp = function(terminalId) {
            
            //always create new app in project root
            var appName = prompt("What's the name of your app?", "MyAwesomeApp");
            appName = appName.replace(/ /g, "_");
            
            if (appName) {
                execute(terminalId, 'cd "' + vmAppsPath + '"');

                var vmProjectPath = vmAppsPath + "/" + appName;

                var commands = [
                    "meteor create " + appName,
                    "meteor create /home/vagrant/.instacode/apps/" + appName,
                    "clear",
                    "cd " + vmProjectPath
                ];

                execute(terminalId, commands.join("; "));

                //timeout to allow "meteor create" to complete and create the directory
                setTimeout(function() {
                    ProjectManager.openProject(hostAppsPath + "/" + appName);
                }, 1000);
            }
        };

        var selectApp = function(terminalId) {
            FileSystem.showOpenDialog(false, true, "Select App", hostAppsPath, [], function(error, paths) {
                if (paths && paths.length > 0) {
                    var hostProjectPath = paths[0];
                    ProjectManager.openProject(hostProjectPath);
                    var hostProjectPathSplits = hostProjectPath.split("/");
                    var projectName = hostProjectPathSplits[hostProjectPathSplits.length - 1];
                    execute(terminalId, "cd " + vmAppsPath + "/" + projectName);
                }
            });
        };
        
        var openBrowser = function() {
            NativeApp.openURLInDefaultBrowser("http://localhost:3000/");
        };
        
        var startServer = function (terminalId) {
            terminalManager.createTerminal();

            var appName = ProjectManager.getProjectRoot().name;

            var vmProjectPath = vmAppsPath + "/" + appName;
            var mountpoint = vmProjectPath + "/.meteor";
            var mountCommand = "sudo mount --bind /home/vagrant/.instacode/apps/" + appName + "/.meteor " + mountpoint;

            var commands = [
                killServerCommand,
                "cd " + vmProjectPath,
                "mountpoint -q " + mountpoint + " || " + mountCommand,
                "clear",
                "meteor"
            ];

            execute(terminalId, commands.join("; "));

            setTimeout(function () {
                openBrowser(terminalId);
            }, 1000);
            
        };
        
        var deployApp = function(terminalId) {
            
            var appName = ProjectManager.getProjectRoot().name;
            var currentProjectPath = ProjectManager.getProjectRoot().fullPath;
            execute(terminalId, killServerCommand + '; cd ' + currentProjectPath + '; meteor deploy ' + appName);
            NativeApp.openURLInDefaultBrowser("http://" + appName + ".meteor.com");
        };

        
        return {
            clean: clean,
            cd: cd,
            createApp: createApp,
            startServer: startServer,
            openBrowser: openBrowser,
            deployApp: deployApp,
            selectApp: selectApp
        };
    };
});
