/*var screenWD ;
var screenHG;*/
//-----------------------------------------------------------------------------  
//-----------------------------------------------------------------------------  
/* This returns the value of the point in the screen that is localized the selection
  of the user converting the values from DPs to percentages */
function percentScreen(sideMessured, val1){
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
}
//-----------------------------------------------------------------------------  
//----------------------------------------------------------------------------- 
//-----------------------------------------------------------------------------  
//-----------------------------------------------------------------------------  
/* This returns width zise value of the screen  */
function screenWidth(){
  var deviceInfo =  kony.os.deviceInfo();
  return deviceInfo["screenWidth"];
}
//-----------------------------------------------------------------------------  
//-----------------------------------------------------------------------------  
//-----------------------------------------------------------------------------  
//-----------------------------------------------------------------------------  
/* This returns height zise value of the screen */
function screenHeight(){
  var deviceInfo =  kony.os.deviceInfo();
  return deviceInfo["screenHeight"];
}
//-----------------------------------------------------------------------------  
//----------------------------------------------------------------------------- 
//-----------------------------------------------------------------------------  
//-----------------------------------------------------------------------------  
/* this is called when the touch of the user init */
function circleInit(eventObj, x, y) {
  var cX = percentScreen("x", x);
  var cY = percentScreen("y", y);
}
//-----------------------------------------------------------------------------  
//----------------------------------------------------------------------------- 
//-----------------------------------------------------------------------------  
//-----------------------------------------------------------------------------   
/* this is called when the user the touch of the user is moving and change the centerX anc centerY values to move 
  and simulte that the option selected by the user is following this touch move */
function moveCircle(eventObj, x, y) {
  //this.view.lblRR.text = "x***"+this.view.frmOptionDrag1.centerX+"/"+"y***"+this.view.frmOptionDrag1.centerY;
  var currentForm = kony.application.getCurrentForm();
  var cX = percentScreen("x", x);
  var cY = percentScreen("y", y);
  var valueXTotal = String(cX + "%");
  var valueYTotal = String(cY + "%");
  //var nameSel = String(selectedName);
  
  currentForm.Flxmenu["flxContMenuScroll"]["centerX"] = valueXTotal;
  currentForm.Flxmenu["flxContMenuScroll"]["centerY"] = valueYTotal;

  currentForm.lblTestGesture.text = currentForm["flxContMenuScroll"]["centerX"];
  currentForm.lblTestGesture.text = currentForm["flxContMenuScroll"]["centerY"];
}
//-----------------------------------------------------------------------------  
//-----------------------------------------------------------------------------  
//-----------------------------------------------------------------------------  
//-----------------------------------------------------------------------------   
/* this is called when the user end the touch of the option*/
function circleEnd(eventObj, x, y) {
  var cX = percentScreen("x", x);
  var cY = percentScreen("y", y);
}

/*function setGesture() {
  var currentForm = kony.application.getCurrentForm();
  currentForm.setGestureRecognizer(2, {fingers:1,taps:1}, setGestureSwipe);
}
// Animation for the navigation of the views
function setGestureSwipe(myWidget, gestureInfo) {
  //alert(" Tap Gesture detected");
  //alert("direction :"+ gestureInfo.swipeDirection);
  
  var currentForm = kony.application.getCurrentForm();
  //var swipeDirection = gestureInfo.swipeDirection;
  
  if(gestureInfo.swipeDirection == 4) {
    currentForm.Flxmenu.flxContMenuScroll.animate(
      kony.ui.createAnimation({
        "100": {
          "top": "0%",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
      }, {
        "animationEnd": function(){}
      });
  }
  else if(gestureInfo.swipeDirection == 3) {
    currentForm.Flxmenu.flxContMenuScroll.animate(
      kony.ui.createAnimation({
        "100": {
          "top": "-100%",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 1
      }, {
        "animationEnd": function(){}
      });
  }
}*/