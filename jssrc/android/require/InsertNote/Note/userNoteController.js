define(function() {
    return {
        CloseNewNote: function() {
            //alert("asd");
            var form = kony.application.getCurrentForm();
            form.Note.isVisible = false;
        },
        DoneNote: function() {
            var form2 = kony.application.getCurrentForm();
            form2.FlxContainer.FlxContent.SgmMyNotes.isVisible = true;
            form2.FlxContainer.FlxContent.FlxNoteDontNote.isVisible = false;
            var dataObj = {
                "LblNoteName": form2.Note.TxtArea.text,
                "LblDescription": form2.Note.TxtAreaNote.text,
                "LblNoteDate": "9/12/2018",
                "template": "FlxContentNote"
            };
            //form2.FlxContainer.FlxContent.SgmMyNotes.removeAll();
            //----------------------------
            form2.FlxContainer.FlxContent.SgmMyNotes.addDataAt(dataObj, 0, 0);
            this.CloseNewNote();
        }
    };
});