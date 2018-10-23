// Function to animate the card switches on the map screen
function moveBoxMap(distance, delay, time) {
  var currentForm = kony.application.getCurrentForm();
  try {
    currentForm.flxMenuOption.FlexContainer0ea19035e0ff741.animate(
      kony.ui.createAnimation(
        {"100": {
          "top":distance,"stepConfig":{
            "timingFunction":kony.anim.EASE
          }
        }
        }
      ),
      {"delay":delay,"iterationCount":1,"fillMode":
       kony.anim.FILL_MODE_FORWARDS,"duration":time},
      {"animationEnd" : function() {
      }
      }
    );
  } catch (e) {
  }
}
// Function to animate the notes card on the notes form screen
function moveBoxNotes(distance, delay, time) {
  var currentForm = kony.application.getCurrentForm();
  try {
    currentForm.Note.FlxContainerInsertNote.animate(
      kony.ui.createAnimation(
        {"100": {
          "top":distance,"stepConfig":{
            "timingFunction":kony.anim.EASE
          }
        }
        }
      ),
      {"delay":delay,"iterationCount":1,"fillMode":
       kony.anim.FILL_MODE_FORWARDS,"duration":time},
      {"animationEnd" : function() {
      }
      }
    );
  } catch (e) {
  }
}