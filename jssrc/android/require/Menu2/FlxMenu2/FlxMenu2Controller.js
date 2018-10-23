define(function() {
    var controller = require("Menu2/FlxMenu2/userFlxMenu2Controller");
    var actions = require("Menu2/FlxMenu2/FlxMenu2ControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});