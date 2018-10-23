define(function() {
    var controller = require("MenuMaps/flxMenuOption/userflxMenuOptionController");
    var actions = require("MenuMaps/flxMenuOption/flxMenuOptionControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});