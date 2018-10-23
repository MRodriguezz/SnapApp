define(function() {
    var controller = require("InsertNote/Note/userNoteController");
    var actions = require("InsertNote/Note/NoteControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});