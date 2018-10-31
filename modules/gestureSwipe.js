// It is responsible for knowing what kind of gesture is used
function setGesture() {
  var currentForm = kony.application.getCurrentForm();
  currentForm.setGestureRecognizer(2, {fingers:1,taps:1}, setGestureSwipe);
}
// Animation for the navigation of the views
function setGestureSwipe(myWidget, gestureInfo) {
  alert("direction :"+ gestureInfo.swipeDirection);
  var currentForm = kony.application.getCurrentForm();
  
  // Validation of the position of the swipe direction
  if(gestureInfo.swipeDirection == 4) {
    currentForm.Flxmenu.animate(
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
    currentForm.Flxmenu.animate(
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