//Type your controller code here 
define({ 
 navigateToHome:function (){

    /*var ntf = new kony.mvc.Navigation("FrmHome");
    ntf.navigate("FrmHome");*/
   var ntf = new kony.mvc.Navigation("frmTutorial");
    ntf.navigate("frmTutorial");
  },
  navigateToPrivacy:function (){

    var ntf = new kony.mvc.Navigation("FrmTerms");
    ntf.navigate("FrmTerms");
  }
});