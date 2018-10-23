/*var screenWD ;
var screenHG;*/
function setGesture() {
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
}