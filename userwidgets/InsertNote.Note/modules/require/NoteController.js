define(function() {

  return {
    CloseNewNote:function (){
      var basicConfig = {message: "Discard changes?" , alertType:constants.ALERT_TYPE_CONFIRMATION, yesLabel:"Yes", noLabel:"No", alertHandler: this.ConfirmCancel};
      var platformSpecificProperties = {};
      kony.ui.Alert(basicConfig, platformSpecificProperties);
    },

    ConfirmCancel:function(response){
      kony.print("ConfirmCancel response : "+response);
      if(response){
        var form = kony.application.getCurrentForm();
        form.SgmMyNotes.selectedRowIndex = null;	//	as cancel is pressed
        form.Note.isVisible= false;
      }
    },
    
    DoneNote:function (){
      var form2 = kony.application.getCurrentForm();
      form2.FlxContainer.FlxContent.SgmMyNotes.isVisible = true;
      form2.FlxContainer.FlxContent.FlxNoteDontNote.isVisible = false;
      var dataObj = {
        "LblNoteName":form2.Note.TxtArea.text,
        "LblDescription":form2.Note.TxtAreaNote.text,
        "LblNoteDate":"9/12/2018",
        "template": "FlxContentNote"
      };

      //form2.FlxContainer.FlxContent.SgmMyNotes.removeAll();
      //----------------------------
      form2.FlxContainer.FlxContent.SgmMyNotes.addDataAt(dataObj, 0, 0);

      this.CloseNewNote();
    },


    onDoneAddNotes:function()
    {
      try{
        var form2 = kony.application.getCurrentForm();
        var newtitle = checkNullUndefinedEmpty(form2.Note.TxtArea.text); 
        var newNote = checkNullUndefinedEmpty(form2.Note.TxtAreaNote.text);
        if(newtitle.trim() === "" && newNote.trim() === "")
        {
          kony.print("onDoneAddNotes if ");
          alert("Cannot save empty text");
        }
        else
        {
          kony.print("onDoneAddNotes else ");
          form2.FlxContainer.FlxContent.SgmMyNotes.isVisible = true;
          form2.FlxContainer.FlxContent.FlxNoteDontNote.isVisible = false;       
          moveBoxNotes("-100%", 0, 0.8);
          this.addNotesToStore();
          this.getNotesFromStore();
        }
      }
      catch(e){
        kony.print("onDoneAddNotes catch : "+e);
      }
    },


    getNotesFromStore:function ()
    {
      try{
        var form2 = kony.application.getCurrentForm();
        var notesJSON = kony.store.getItem("notesJSON");
        form2.Note.isVisible= false;
        if(notesJSON === null || notesJSON === undefined || notesJSON.length === 0)
        {
          kony.print("if notecontroller getNotesFromStore notesJSON ");
          notesJSON = "";
          form2.LblDontNote.isVisible = true;
          form2.SgmMyNotes.isVisible = false;
        }
        else
        {
          kony.print("else notecontroller getNotesFromStore notesJSON : "+JSON.stringify(notesJSON));
          form2.LblDontNote.isVisible = false;
          form2.SgmMyNotes.isVisible = true;
          form2.SgmMyNotes.widgetDataMap = {LblDescription : "value", LblNoteDate : "key", LblNoteName : "title", imgChevron:"imgChevron"};
          form2.SgmMyNotes.setData(notesJSON);
        }
      }
      catch(e){
        kony.print("notecontroller getNotesFromStore catch : "+e);
      }
    },    


    addNotesToStore:function ()
    {
      try{
        var form2 = kony.application.getCurrentForm();
        var notesJSON = kony.store.getItem("notesJSON");
        var newTitle = checkNullUndefinedEmpty(form2.Note.TxtArea.text);
        var newNote = checkNullUndefinedEmpty(form2.Note.TxtAreaNote.text);
        var currentdate = new Date(); 
        var currentmonth = currentdate.getMonth()+1;
        var formatteddate = currentmonth+"/"+currentdate.getDate()+"/"+currentdate.getFullYear()+"";		//	mm/dd/yyyy
        kony.print("addNotesToStore notesJSON : "+JSON.stringify(notesJSON));
        kony.print("addNotesToStore newNote : "+newNote);
        kony.print("addNotesToStore currentdate : "+currentdate);
        kony.print("addNotesToStore formatteddate : "+formatteddate);
        if(notesJSON !== null && notesJSON !== undefined && notesJSON.length !== 0)
        {
          // check if selectedRowIndex is null / segment pressed or not
          var selectedIndex = (checkNullUndefinedEmpty(form2.SgmMyNotes.selectedRowIndex)==="") ? "": checkNullUndefinedEmpty(form2.SgmMyNotes.selectedRowIndex[1]);
          if(selectedIndex !== "")
          {
            kony.print("if addNotesToStore selectedIndex : "+selectedIndex);
            var prevnote = notesJSON[selectedIndex].value; 
            var prevtitle = notesJSON[selectedIndex].title;
            if(prevtitle !== newTitle || prevnote !== newNote)		//	only when either one of new note / title is not matching with prev note / title
            {
              kony.print("addNotesToStore : prev note & tile not matching with new note / title");
              notesJSON[selectedIndex].key = formatteddate;
              notesJSON[selectedIndex].value = newNote;
              notesJSON[selectedIndex].title = newTitle;            
            }
            else
            {
              kony.print("addNotesToStore : both prev note & tile are matching with new note / title");
            }  
          }
          else
          {
            kony.print("else addNotesToStore selectedIndex : "+selectedIndex);
            notesJSON.push({"key" : formatteddate, "value" : newNote, "title" : newTitle, "imgChevron":"ic_chevron_right_grey.png"});
          }
        }
        else
        {
          kony.print("else addNotesToStore notesJSON : "+JSON.stringify(notesJSON));
          notesJSON = [];
          notesJSON.push({"key" : formatteddate,"value" : newNote, "title" : newTitle, "imgChevron":"ic_chevron_right_grey.png"});
        }
        kony.print("final addNotesToStore notesJSON : "+JSON.stringify(notesJSON));
        kony.store.setItem("notesJSON", notesJSON);
      }
      catch(e){
        kony.print("addNotesToStore catch : "+e);
      }
    }    
  };
});