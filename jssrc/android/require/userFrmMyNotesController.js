define({
    NewNote: function() {
        //alert("asd");
        var form = kony.application.getCurrentForm();
        form.Note.isVisible = true;
        form.Note.TxtArea.text = "";
        form.Note.TxtAreaNote.text = "";
    },
    CleanSegment: function() {
        var form2 = kony.application.getCurrentForm();
        form2.FlxContainer.FlxContent.SgmMyNotes.removeAll();
        form2.FlxContainer.FlxContent.FlxNoteDontNote.isVisible = true;
    },
    EditNote: function() {
            var item = this.view.SgmMyNotes.selectedRowItems;
            var Form = kony.application.getCurrentForm();
            ///alert(item[0]);
            Form.Note.FlxContentWriteNote.TxtArea = item[0].LblNoteName;
            Form.Note.FlxContentWriteNote.TxtAreaNote = item[0].LblDescription;
            Form.Note.isVisible = true;
        }
        //Type your controller code here 
});