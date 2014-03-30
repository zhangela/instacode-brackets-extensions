define(function (require, exports, module) {
    'use strict';

    var ProjectManager = brackets.getModule('project/ProjectManager');
    var appsPath = "/Users/zhangela/projects/test_apps";
    var killServerCommand = "kill -9 `ps ax | grep node | grep meteor | awk '{print $1}'`";

    module.exports = function (execute) {
        var clean = function (terminalId) {
            execute(terminalId, 'clear');
        };

        var cd = function (terminalId) {
            execute(terminalId, 'cd "' + appsPath + '"');
        };
        
        var createApp = function(terminalId) {
            
            //always create new app in project root
            cd(terminalId);
            var appName = prompt("What's the name of your app?","MyAwesomeApp");
            appName = appName.replace(/ /g,"_");
            var currentProjectPath = appsPath + "/" + appName;
            execute(terminalId, 'meteor create ' + appName + " &> /dev/null; cd " + currentProjectPath + "; clear");
            
            //timeout to allow "meteor create" to complete and create the directory
            setTimeout(function() {
                ProjectManager.openProject(currentProjectPath);
            }, 500);
        };
        
        var startServer = function (terminalId) {
            var currentProjectPath = ProjectManager.getProjectRoot().fullPath;
            execute(terminalId, killServerCommand + '; cd ' + currentProjectPath + ' ; clear; meteor');
        };
        


        return {
            clean: clean,
            cd: cd,
            createApp: createApp,
            startServer: startServer

        };
    };


});
