define(function (require, exports, module) {
    'use strict';

    var ProjectManager = brackets.getModule('project/ProjectManager');

    module.exports = function (execute) {
        var clean = function (terminalId) {
            execute(terminalId, 'clear');
        };

        var cd = function (terminalId) {
            var projectRoot = ProjectManager.getProjectRoot().fullPath;
            execute(terminalId, 'cd "' + projectRoot + '"');
        };
        
        var startServer = function (terminalId) {
            execute(terminalId, 'meteor');
        };


        return {
            clean: clean,
            cd: cd,
            startServer: startServer

        };
    };


});
