define(function() {
    var controller = require("Menu/Flxmenu/userFlxmenuController");
    var actions = require("Menu/Flxmenu/FlxmenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});