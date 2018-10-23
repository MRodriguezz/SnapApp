define(function() {
    var controller = require("Header2/FlxHeaderInfo/userFlxHeaderInfoController");
    var actions = require("Header2/FlxHeaderInfo/FlxHeaderInfoControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});