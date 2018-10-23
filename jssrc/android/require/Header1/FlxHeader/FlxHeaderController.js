define(function() {
    var controller = require("Header1/FlxHeader/userFlxHeaderController");
    var actions = require("Header1/FlxHeader/FlxHeaderControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});