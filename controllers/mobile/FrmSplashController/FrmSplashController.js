define({ 
opacitySplash:function (){
    var self = this;
    self.view.ImgOhio.animate(
      kony.ui.createAnimation(
         {"100":
          {"stepConfig":
           {"timingFunction":kony.anim.EASE
           },
           "opacity": 1
          }
         }
       ),
       {"delay":0.5,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":2,
           "direction": kony.anim.DIRECTION_ALTERNATE},
       {"animationEnd" : function() {
         var ntf = new kony.mvc.Navigation("FrmEnter");
         ntf.navigate();
         }
        }
      );
   }
  

 //Type your controller code here 

 });