define({
    ClickChangeColoruQuestionYes: function(BtnName, QuestionNumber) {
        var form = kony.application.getCurrentForm();
        var paramBtn = BtnName;
        this.ValidateComment(form, paramBtn, QuestionNumber)
            /*
            if(form.FlxContainer[paramBtn].skin == "SknBtnNoSelect"){
              form.FlxContainer[paramBtn].skin = "SknBtnSelect";
            }else{
              form.FlxContainer[paramBtn].skin = "SknBtnNoSelect";
            }*/
    },
    ValidateComment: function(form, paramBtn, QuestionNumer) {
            for (var key in ObjectCommentQuestion[QuestionNumer]) {
                if (key == paramBtn) {
                    ObjectCommentQuestion[key] = true
                    form.FlxContainer[key].skin = "SknBtnSelect";
                } else {
                    ObjectCommentQuestion[key] = false
                    form.FlxContainer[key].skin = "SknBtnNoSelect";
                }
            }
        }
        //Type your controller code here 
});