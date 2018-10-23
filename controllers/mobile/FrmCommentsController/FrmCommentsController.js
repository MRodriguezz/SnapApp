define({ 

  ClickChangeColoruQuestionYes:function (BtnName,QuestionNumber){

    var form = kony.application.getCurrentForm();

    var paramBtn = BtnName;

    this.ValidateComment(form,paramBtn,QuestionNumber)

    /*
      if(form.FlxContainer[paramBtn].skin == "SknBtnNoSelect"){
        form.FlxContainer[paramBtn].skin = "SknBtnSelect";
      }else{
        form.FlxContainer[paramBtn].skin = "SknBtnNoSelect";
      }*/


  },
  ValidateComment:function (form,paramBtn,QuestionNumer){
    for (var key in ObjectCommentQuestion[QuestionNumer]) {
      if(key == paramBtn){
        ObjectCommentQuestion[QuestionNumer][key] = true
        form.FlxContainer[key].skin = "SknBtnSelect";
      }else{
        ObjectCommentQuestion[QuestionNumer][key] = false
        form.FlxContainer[key].skin = "SknBtnNoSelect";
      }
    }
  },

  getAnswerFromQuestion:function(QuestionNumer){
    try{
      kony.print("getAnswerFromQuestion QuestionNumer : "+QuestionNumer);

      for(var key in ObjectCommentQuestion[QuestionNumer]){
        kony.print("key : "+key);
        kony.print("value : "+ObjectCommentQuestion[QuestionNumer][key]);
        var value = ObjectCommentQuestion[QuestionNumer][key];

        if(value === true)
        {
          kony.print("getAnswerFromQuestion if : "+key+" is true ");
          var btntext = checkNullUndefinedEmpty(this.view[key].text);
          kony.print("getAnswerFromQuestion btntext : "+btntext);
          return btntext;
        }
        else
        {
          kony.print("getAnswerFromQuestion if : "+key+" is false ");
        }
      }
      return "";
    }
    catch(e){
      kony.print("getAnswerFromQuestion catch : "+e);
    }

  },

  validateQuestionsOnSave: function(){
    try{
      kony.print("validateQuestionsOnSave");
      var answerToQuestion1, answerToQuestion2, answerToQuestion3, answerToQuestion4, answerToQuestion5, answerToQuestion6 = [],
          comment1 = "", comment2 = "", canProceedToSave = false;

      kony.print("getAnswerFromQuestion ObjectCommentQuestion : "+JSON.stringify(ObjectCommentQuestion));

      answerToQuestion1	= checkNullUndefinedEmpty(this.getAnswerFromQuestion("Question1"));
      answerToQuestion2	= checkNullUndefinedEmpty(this.getAnswerFromQuestion("Question2"));
      answerToQuestion3	= checkNullUndefinedEmpty(this.getAnswerFromQuestion("Question3"));
      answerToQuestion4	= checkNullUndefinedEmpty(this.getAnswerFromQuestion("Question4"));
      answerToQuestion5	= checkNullUndefinedEmpty(this.getAnswerFromQuestion("Question5"));
      answerToQuestion6	= checkNullUndefinedEmpty(this.getAnswerFromQuestion("Question6"));

      kony.print("validateQuestionsOnSave answerToQuestions : "+answerToQuestion1+"\n"+answerToQuestion2+"\n"+answerToQuestion3+"\n"+answerToQuestion4+"\n"+answerToQuestion5+"\n"+answerToQuestion6);

      comment1 = checkNullUndefinedEmpty(this.view.TxtAreaQuestion6.text);
      comment2 = checkNullUndefinedEmpty(this.view.TxtAreaQuestion7.text);

      kony.print("validateQuestionsOnSave comment1 : "+comment1);
      kony.print("validateQuestionsOnSave comment2 : "+comment2);

	  if(answerToQuestion1 !== "")
        canProceedToSave = true;
      else if(answerToQuestion2 !== "")
        canProceedToSave = true;
      else if(answerToQuestion3 !== "")
        canProceedToSave = true;
      else if(answerToQuestion4 !== "")
        canProceedToSave = true;
      else if(answerToQuestion5 !== "")
        canProceedToSave = true;
      else if(answerToQuestion6 !== "")
        canProceedToSave = true;
      else
        kony.print("validateQuestionsOnSave no answer selected");

      kony.print("validateQuestionsOnSave canProceedToSave : "+canProceedToSave);
      if(canProceedToSave){
        
        /*****	we can call service here with answers and comments  ****/
        
      }
      else{

        alert("Please answer atleast one question !");
        
      }
    }
    catch(e){
      kony.print("validateQuestionsOnSave catch : "+e);
    }
  }
});