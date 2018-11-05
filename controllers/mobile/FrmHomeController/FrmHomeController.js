
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
    this.setSwipeActions();
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
  setSwipeActions:function(){
//     this.view.flxMenuTap.onTouchStart = this.flxMenuTapTouchStart.bind(this);
//     this.view.flxMenuTap.onTouchMove = this.flxMenuTapTouchMove.bind(this);
//     this.view.flxMenuTap.onTouchEnd = this.flxMenuTapTouchEnd.bind(this);
       this.view.flxContHomeNav.addGestureRecognizer(2,{fingers: 1},this.onHomeSwipe.bind(this));
  },
  onHomeSwipe: function(widgetRef,gestureInfo,context){
    alert(gestureInfo.swipeDirection);
    if(gestureInfo.swipeDirection==4){
      this.moveElementsModifyingTop("Flxmenu", "0%");
    }
  },
  flxMenuTapTouchStart: function(eventObj,x,y){
    this.moveInit.call(this, eventObj, x, y);
  },
  flxMenuTapTouchMove: function(eventObj,x,y){
    this.moveMoving.call(this, eventObj, x, y);
  },
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
  //Created by:CruzAmbrocio
  //Date_10-03-18
  //----------------------------------------------------------------------------
  screenWidth: function(){
    var deviceInfo =  kony.os.deviceInfo();
    return deviceInfo["screenWidth"];
  },
  //----------------------------------------------------------------------------
  //Created by:CruzAmbrocio
  //Date_10-03-18
  //----------------------------------------------------------------------------
  screenHeight: function(){
    var deviceInfo =  kony.os.deviceInfo();
    return deviceInfo["screenHeight"];
  },
  //----------------------------------------------------------------------------
  //Created by:CruzAmbrocio
  //Date_10-03-18
  //----------------------------------------------------------------------------
  moveInit:function(eventObj, x, y) {
    var cY = this.percentScreen("y", y);
    var valueYTotal = String(cY + "%");
    this.view.lblTestGesture.text = valueYTotal;
    //alert(this.view.lblTestGesture.text = valueYTotal);
  },
  //----------------------------------------------------------------------------
  //Created by:CruzAmbrocio
  //Date_10-03-18
  //----------------------------------------------------------------------------
  moveMoving:function(eventObj, x, y) {
    var cY = this.percentScreen("y", y);
    var valueYTotal = String(cY + "%");
  },
  //----------------------------------------------------------------------------
  //Created by:CruzAmbrocio
  //Date_10-03-18
  //----------------------------------------------------------------------------
  moveEnd:function(eventObj, x, y) {
    var pForm = kony.application.getCurrentForm();
    var cY = this.percentScreen("y", y);
    
    if(cY <= 8.5) {
      this.moveElementsModifyingTop("Flxmenu", "0%");
     
    /*} else if(cY >= 15.5) {
      this.moveElementsModifyingTop("Flxmenu", "50%");*/
      
    } else if(cY >= 8.5 && cY <= 95.5) {
      this.moveElementsModifyingTop("Flxmenu", "-100%");
    }
  },
  //----------------------------------------------------------------------------
  //Created by:CruzAmbrocio
  //Date_10-03-18
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