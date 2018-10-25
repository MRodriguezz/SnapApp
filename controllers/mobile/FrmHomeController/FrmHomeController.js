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
    //var cX = this.percentScreen("x", x);
    var cY = this.percentScreen("y", y);
    var valueYTotal = String(cY + "%");
    this.view.lblTestGesture.text = valueYTotal;

  },
  //-----------------------------------------------------------------------------  
  //----------------------------------------------------------------------------- 
  //-----------------------------------------------------------------------------  
  //-----------------------------------------------------------------------------   
  /* this is called when the user the touch of the user is moving and change the centerX anc centerY values to move 
  and simulte that the option selected by the user is following this touch move */
  moveCircle:function(eventObj, x, y) {
    var cY = this.percentScreen("y", y);
    var valueYTotal = String(cY + "%");
    /*var valueYTotal = (cY/2)-50;
    valueYTotal = Number(valueYTotal);*/
    
    /*if(valueYTotal <= 50) {
      valueYTotal = String(valueYTotal + "%");
      valueYTotal = String(valueYTotal);
      this.view.lblTestGesture.text = valueYTotal;
      this.view["Flxmenu"]["top"] = valueYTotal;
    }*/
    /*if(valueYTotal >= 50 && valueYTotal <= 57) {
      valueYTotal = String(valueYTotal + "%");
      valueYTotal = String(valueYTotal);
      this.view.lblTestGesture2.text = valueYTotal;
      this.view["Flxmenu"]["top"] = valueYTotal;
    }*/
    /*if(valueYTotal <= 50) {
      valueYTotal = String(valueYTotal + "%");
      valueYTotal = String(valueYTotal);
      this.view.lblTestGestur3.text = valueYTotal;
      this.view["Flxmenu"]["top"] = valueYTotal;
    }*/
  },
  
  //-----------------------------------------------------------------------------  
  //-----------------------------------------------------------------------------  
  //-----------------------------------------------------------------------------  
  //-----------------------------------------------------------------------------   
  /* this is called when the user end the touch of the option*/
  circleEnd: function(eventObj, x, y) {
    //var cX = this.percentScreen("x", x);
    var cY = this.percentScreen("y", y);
    var valueYTotal = (cY/2)-50;
    valueYTotal = Number(valueYTotal);
    
    if(valueYTotal <= 8.5) {
      this.moveElementsModifyingTop("Flxmenu", "0%");
      
    } else if(valueYTotal >= 11) {
      this.moveElementsModifyingTop("Flxmenu", "50%");
      
    } else if(valueYTotal > 8.5 && valueYTotal < 11){
      this.moveElementsModifyingTop("Flxmenu", "-30%");
    }
  },
  
  moveElementsModifyingTop:function(widget, distance) {
    var pForm = kony.application.getCurrentForm();
    try {
      this.view.Flxmenu.animate(
        kony.ui.createAnimation({
          "100":{
            "top":distance,
            "stepConfig":{
              "timingFunction":kony.anim.EASE
            }
          }
        }),{
          "delay":0,
          "iterationCount":1,
          "fillMode":kony.anim.FILL_MODE_FORWARDS,
          "duration":1
        },{
          "animationEnd":function() {
            if(distance === "0%") {
              //pForm.Flxmenu.top = "-100%";
            
            } else if(distance === "-30%") {
              //pForm.Flxmenu.top = "0%";
            }
             // kony.print("Animation end");
            }
          });
      } catch(err) {
      }
    }
  
});