define({ 
  // Animation for the navigation of the views
  onNavigate:function(prevformname)
  {
    try{ 
      if(prevformname === "FrmHome")
        {
          kony.print("FrmHomeController onNavigate ");
          this.view.flxSearch.isVisible = false;
          this.view.flxSearch.SgSearchData.removeAll();
          this.view.flxSearch.flxHeaderSearchBox.TxtBoxSearch.text = "";
          //search component
          this.view.flxSearch.flxHeaderSearchBox.skin = "SknFlxHeaderDarkRed";
          this.view.flxSearch.TxtBoxSearch.skin = "TxtBoxSearchDarkRed";
          this.view.flxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusDarkRed";        
        }
    }
    catch(e){
      kony.print("FrmHomeController onNavigate catch : "+e);
    } 
  },
  
  NavigateHomeDescription:function (){

    var item = this.view.SgmHome.selectedRowItems;
    // alert(item[0]);
    //alert(typeof item[0].LblName);
    //alert(LabelNameHomeDescription);
    LabelNameHomeDescription = item[0].LblHomeName;
    LabelNameHomeDescription2 = item[0].LblHomeName2;

    var ntf = new kony.mvc.Navigation("FrmHomeDescription");
    ntf.navigate();
  },

  HideSearch: function() {
    try{
//       var form = kony.application.getCurrentForm();
//       form.FlxHeader.FlxSearch.isVisible = false;
//       form.SgSearchData.isVisible = false;
//       form.SgmHome.isVisible = true;
//       form.SgSearchData.removeAll();
//       form.FlxHeader.TxtBoxSearch.text = "";
    }
    catch(e){
      kony.print("FrmHomeController HideSearch catch : "+e);
    }
  },
  
  
  
   //-----------------------------------------------------------------------------  
  //-----------------------------------------------------------------------------  
  /* This returns the value of the point in the screen that is localized the selection
  of the user converting the values from DPs to percentages */
  percentScreen: function(sideMessured, val1){
    var val2="";
    switch(sideMessured) {
      case "x":
        val2 = this.screenWidth();
        break;
      case "y":
        val2 = this.screenHeight();
        break;
      default:
        break;
    }
    var total = ((val1 *100) / val2).toFixed(1) ;
    return total;
  },
  //-----------------------------------------------------------------------------  
  //----------------------------------------------------------------------------- 
  
  //-----------------------------------------------------------------------------  
  //-----------------------------------------------------------------------------  
  /* This returns width zise value of the screen  */
  screenWidth: function(){
    var deviceInfo =  kony.os.deviceInfo();
    return deviceInfo["screenWidth"];
  },
  //-----------------------------------------------------------------------------  
  //-----------------------------------------------------------------------------  

  //-----------------------------------------------------------------------------  
  //-----------------------------------------------------------------------------  
  /* This returns height zise value of the screen */
  screenHeight: function(){
    var deviceInfo =  kony.os.deviceInfo();
    return deviceInfo["screenHeight"];

  },
  //-----------------------------------------------------------------------------  
  //----------------------------------------------------------------------------- 
      //-----------------------------------------------------------------------------  
  //-----------------------------------------------------------------------------  
  /* this is called when the touch of the user init */
  circleInit:function(eventObj, x, y) {
    var cX = this.percentScreen("x", x);
    var cY = this.percentScreen("y", y);

       // this.view.flxSecContainerTrackPad.parent.forceLayout();
  },
  //-----------------------------------------------------------------------------  
  //----------------------------------------------------------------------------- 
  //-----------------------------------------------------------------------------  
  //-----------------------------------------------------------------------------   
  /* this is called when the user the touch of the user is moving and change the centerX anc centerY values to move 
  and simulte that the option selected by the user is following this touch move */
  moveCircle:function(eventObj, x, y) {
    //this.view.lblRR.text = "x***"+this.view.frmOptionDrag1.centerX+"/"+"y***"+this.view.frmOptionDrag1.centerY;
    var cX = this.percentScreen("x", x);
    var cY = this.percentScreen("y", y);
    var valueXTotal = String(cX + "%");
    var valueYTotal = String(cY + "%");
    //var nameSel = String(selectedName);
    this.view["flxSecContainerTrackPad"]["centerX"] = valueXTotal;
    this.view["flxSecContainerTrackPad"]["centerY"] = valueYTotal;
  },
  //-----------------------------------------------------------------------------  
  //-----------------------------------------------------------------------------  
  //-----------------------------------------------------------------------------  
  //-----------------------------------------------------------------------------   
  /* this is called when the user end the touch of the option*/
  circleEnd: function(eventObj, x, y) {
    var cX = this.percentScreen("x", x);
    var cY = this.percentScreen("y", y);
  }
});