
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
    this.view.init = this.onInit.bind(this);
    this.view.preShow = this.onPreShow.bind(this);
    this.view.postShow= this.onPostShow.bind(this);
    this.setBindings();
  },
  setBindings: function(){
    this.view.SgmHome.onRowClick = this.onOptionClick.bind(this);
    this.view.Flxmenu.segDataHomeMenu.onRowClick = this.view.Flxmenu.clickRow;
    this.valPlatformCondition();
  },
  onInit: function(){
    //this.setGesturestoStocks();
	//setGesture();
  },
  onPreShow: function(){
    this.HideSearch();
    /*this.screenWidth();
    this.screenHeight();*/
  },
  onPostShow:function(){
//     initializeGlobalMenu();
  },
  onOptionClick:function(){
    this.NavigateHomeDescription();
  },
  
  valPlatformCondition:function() {
    var deviceOS = kony.os.deviceInfo().name;
    
    if(deviceOS == "android") {
      this.view.flxContHomeNav.onTouchEnd = this.flxMenuTapTouchEnd.bind(this);
      // Function that is responsible for uploading the menu to its current position
      this.view.Flxmenu.flxContHomeNavFooter.onTouchEnd = this.flxMenuTapTouchEnd.bind(this);
      
    } else if(deviceOS == "iPhone") {
      this.view.flxContHomeNav.addGestureRecognizer(2,{fingers: 1},this.onMenuSwipeDown.bind(this));
      this.view.Flxmenu.flxContHomeNavFooter.addGestureRecognizer(2,{fingers: 1},this.moveMenuSwipeUp.bind(this));
    }
  },
  
  
  // Swipe function to return the menu to its original position
  // Iphone function
  moveMenuSwipeUp:function(widgetRef,gestureInfo,context) {
    //alert(gestureInfo.swipeDirection);
    if(gestureInfo.swipeDirection == 3){
      this.moveElementsModifyingTop("Flxmenu", "-100%");
    }
  },
  // Swipe function that is responsible for moving the menu down
  // Iphone function
  onMenuSwipeDown:function(widgetRef,gestureInfo,context) {
    //alert(gestureInfo.swipeDirection);
    if(gestureInfo.swipeDirection == 4){
      this.moveElementsModifyingTop("Flxmenu", "0%");
    }
  },
  
  // functions that is responsible for moving the menu on the android platform
  // Android function
  flxMenuTapTouchEnd: function(eventObj,x,y){
    this.moveEnd.call(this, eventObj, x, y);
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
  percentScreen: function(sideMessured, val1) {
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
  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------
  screenWidth: function(){
    var deviceInfo =  kony.os.deviceInfo();
    return deviceInfo["screenWidth"];
  },
  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------
  screenHeight: function(){
    var deviceInfo =  kony.os.deviceInfo();
    return deviceInfo["screenHeight"];
  },
  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------
  moveEnd:function(eventObj, x, y) {
    var pForm = kony.application.getCurrentForm();
    var cY = this.percentScreen("y", y);
    
    // Validation that is responsible for measuring the percentage so that the swipe of the menu is activated
    if(cY <= 8.5) {
      this.moveElementsModifyingTop("Flxmenu", "0%");
     
    } else if(cY >= 8.5 && cY <= 95.5) {
      this.moveElementsModifyingTop("Flxmenu", "-100%");
    }
  },
  //----------------------------------------------------------------------------
  //----------------------------------------------------------------------------
  moveElementsModifyingTop:function(widget, distance) {
    try {
      this.view.Flxmenu.animate(
        kony.ui.createAnimation({
          "100": {
            "top": distance,
            "stepConfig": {
              "timingFunction":kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.8
        }, {
          "animationEnd": function(){
          }
        });
    } catch(err) {
    }
  }
});