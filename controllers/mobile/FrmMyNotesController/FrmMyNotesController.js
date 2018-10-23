define({ 

  NewNote:function (){
    //alert("asd");
    var form = kony.application.getCurrentForm();
    form.Note.isVisible= true;
    moveBoxNotes("0%", 0, 0.8);
    form.Note.TxtArea.text = "";
    form.Note.TxtAreaNote.text = "";
  },

  CleanSegment:function (){
    var form2 = kony.application.getCurrentForm();
    form2.FlxContainer.FlxContent.SgmMyNotes.removeAll();
    form2.FlxContainer.FlxContent.FlxNoteDontNote.isVisible = true;
  },

  EditNote:function (){
    var item = this.view.SgmMyNotes.selectedRowItems;
    var Form = kony.application.getCurrentForm();
    ///alert(item[0]);
    Form.Note.FlxContentWriteNote.TxtArea = item[0].LblNoteName;
    Form.Note.FlxContentWriteNote.TxtAreaNote =item[0].LblDescription;
    Form.Note.isVisible= true;
  },

  
/**
* Name		:	my notes functions
* Author	:	Kony
* Purpose	:	below functions handle my notes functionality
**/

  getNotesFromStore:function ()
  {
    try{
      var notesJSON = kony.store.getItem("notesJSON");
      var form = kony.application.getCurrentForm();
      form.Note.isVisible= false;      
      if(notesJSON === null || notesJSON === undefined || notesJSON.length === 0)
      {
        kony.print("if getNotesFromStore notesJSON ");
        notesJSON = "";
        this.view.LblDontNote.isVisible = true;
        this.view.SgmMyNotes.isVisible = false;
      }
      else
      {
        kony.print("else getNotesFromStore notesJSON : "+JSON.stringify(notesJSON));
        this.view.LblDontNote.isVisible = false;
        this.view.SgmMyNotes.isVisible = true;
        this.view.SgmMyNotes.widgetDataMap = {LblDescription : "value", LblNoteDate : "key", LblNoteName : "title", imgChevron : "imgChevron"};
        this.view.SgmMyNotes.setData(notesJSON);
      }
    }
    catch(e){
      kony.print("getNotesFromStore catch : "+e);
    }
  },


  editNote:function ()
  {
    try{
      var Form = kony.application.getCurrentForm();
      kony.print("editNote this.view.SgmMyNotes.selectedRowItems : "+JSON.stringify(this.view.SgmMyNotes.selectedRowItems));
      var prevtitle = this.view.SgmMyNotes.selectedRowItems[0]["title"]; 
      var prevnote = this.view.SgmMyNotes.selectedRowItems[0]["value"];
      Form.Note.FlxContentWriteNote.TxtArea.text = checkNullUndefinedEmpty(prevtitle);		
      Form.Note.FlxContentWriteNote.TxtAreaNote.text = checkNullUndefinedEmpty(prevnote);		
      Form.Note.isVisible= true;
    }
    catch(e){
      kony.print("editNote catch : "+e);
    }
  },



});