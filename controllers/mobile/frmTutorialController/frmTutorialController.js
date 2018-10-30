define({
  /*********************************************************************
  **********************************************************************
  - Swipe function that detects the value of the screen and the position 
    in which the content is found by changing the tutorial indicators.
  **********************************************************************
  **********************************************************************/
  swipeTutorial:function() {
    var valPositionSwipe = kony.os.deviceInfo().screenWidth;
    var contPositionScrollX = this.view.flxScrollSwipeTuto.contentOffsetMeasured.x;
    
    if(contPositionScrollX <= 0) {
      //Status skin dots indicators
      this.setSkinDots("sknFlxIndicatorActive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", 
                       "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive");
      // Title of the swipe tutorial header card
      this.view.lblTextSwipeTuto00.isVisible = true;
      
    } else if(contPositionScrollX == valPositionSwipe) {
      this.setSkinDots("sknFlxIndicatorDesactive", "sknFlxIndicatorActive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive",
                       "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive" ,"sknFlxIndicatorDesactive");
       // Title of the swipe tutorial header card
      this.view.lblTextSwipeTuto00.isVisible = false;
      this.view.lblTextSwipeTuto01.isVisible = false;
   
    } else if(contPositionScrollX == valPositionSwipe * 2) {
      this.setSkinDots("sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorActive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive",
                       "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive" ,"sknFlxIndicatorDesactive");
      // Title of the swipe tutorial header card
      this.view.lblTextSwipeTuto01.isVisible = true;
      this.view.lblTextSwipeTuto02.isVisible = false;
    
    } else if(contPositionScrollX == valPositionSwipe * 3) {
      this.setSkinDots("sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorActive", "sknFlxIndicatorDesactive",
                       "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive");
      // Title of the swipe tutorial header card
      this.view.lblTextSwipeTuto01.isVisible = false;
      this.view.lblTextSwipeTuto02.isVisible = true;
      this.view.lblTextSwipeTuto03.isVisible = false;
    
    } else if(contPositionScrollX == valPositionSwipe * 4) {
      this.setSkinDots("sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorActive",
                       "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive");
       // Title of the swipe tutorial header card
      this.view.lblTextSwipeTuto02.isVisible = false;
      this.view.lblTextSwipeTuto03.isVisible = true;
      this.view.lblTextSwipeTuto04.isVisible = false;
    
    } else if(contPositionScrollX == valPositionSwipe * 5) {
      this.setSkinDots("sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive",
                       "sknFlxIndicatorActive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive");
       // Title of the swipe tutorial header card
      this.view.lblTextSwipeTuto03.isVisible = false;
      this.view.lblTextSwipeTuto04.isVisible = true;
      
    } else if(contPositionScrollX == valPositionSwipe * 6) {
      this.setSkinDots("sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive",
                       "sknFlxIndicatorDesactive", "sknFlxIndicatorActive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive");
       // Title of the swipe tutorial header card
      //this.view.lblTextSwipeTuto03.isVisible = false;
      this.view.lblTextSwipeTuto04.isVisible = false;
      this.view.lblTextSwipeTuto05.isVisible = false;
    
    } else if(contPositionScrollX == valPositionSwipe * 7) {
      this.setSkinDots("sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive",
                       "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorActive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive");
       // Title of the swipe tutorial header card
      //this.view.lblTextSwipeTuto04.isVisible = true;
      this.view.lblTextSwipeTuto05.isVisible = true;
      this.view.lblTextSwipeTuto06.isVisible = false;
      
    } else if(contPositionScrollX == valPositionSwipe * 8) {
      this.setSkinDots("sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive",
                       "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorActive", "sknFlxIndicatorDesactive");
       // Title of the swipe tutorial header card
      this.view.lblTextSwipeTuto05.isVisible = false;
      this.view.lblTextSwipeTuto06.isVisible = true;
      
    } else if(contPositionScrollX == valPositionSwipe * 9) {
      this.setSkinDots("sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive",
                       "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorDesactive", "sknFlxIndicatorActive");
       // Title of the swipe tutorial header card
      //this.view.lblTextSwipeTuto05.isVisible = false;
      this.view.lblTextSwipeTuto06.isVisible = false;
    } 
    //this.view.btnCloseTutorial.text = contPositionScrollX;
  }, 
  /*********************************************************************
  **********************************************************************
  - Function that serves to put the state in which is the indicator of 
    the swipe tutorial.
  **********************************************************************
  **********************************************************************/
  setSkinDots:function(dotIndicator00, dotIndicator01, dotIndicator02, dotIndicator03, dotIndicator04, 
                        dotIndicator05, dotIndicator06, dotIndicator07, dotIndicator08, dotIndicator09) {
    // Status dots indicators
    this.view.flxSwipeIndicator00.skin = dotIndicator00;
    this.view.flxSwipeIndicator01.skin = dotIndicator01;
    this.view.flxSwipeIndicator02.skin = dotIndicator02;
    this.view.flxSwipeIndicator03.skin = dotIndicator03;
    this.view.flxSwipeIndicator04.skin = dotIndicator04;
    this.view.flxSwipeIndicator05.skin = dotIndicator05;
    this.view.flxSwipeIndicator06.skin = dotIndicator06;
    this.view.flxSwipeIndicator07.skin = dotIndicator07;
    this.view.flxSwipeIndicator08.skin = dotIndicator08;
    this.view.flxSwipeIndicator09.skin = dotIndicator09;
  },
  /*********************************************************************
  **********************************************************************
  - Function that serves to reset the values of the scroll swipe tutorial.
  **********************************************************************
  **********************************************************************/
  resetTutorial:function() {
    //this.view.flxContSwipeTuto.isVisible = false;
    this.view.flxScrollSwipeTuto.setContentOffset({x:"0%"}, true);
    this.view.lblTextSwipeTuto00.isVisible = true;
    this.view.lblTextSwipeTuto01.isVisible = false;
    this.view.lblTextSwipeTuto02.isVisible = false;
    this.view.lblTextSwipeTuto03.isVisible = false;
    this.view.lblTextSwipeTuto04.isVisible = false;
    this.view.lblTextSwipeTuto05.isVisible = false;
    this.view.lblTextSwipeTuto06.isVisible = false;
    // Navegation to FrmHome Screen
    var ntf = new kony.mvc.Navigation("FrmHome");
    ntf.navigate();
  }
 });