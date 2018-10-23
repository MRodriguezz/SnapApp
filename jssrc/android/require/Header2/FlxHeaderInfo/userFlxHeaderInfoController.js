define(function() {
    return {
        specialBack: function() {
            var previousForm = kony.application.getPreviousForm().id;
            //alert(previousForm)
            var ntf = new kony.mvc.Navigation(previousForm);
            ntf.navigate();
        }
    };
});