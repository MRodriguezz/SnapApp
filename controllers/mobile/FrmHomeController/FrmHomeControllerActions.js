define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for SgmHome **/
    AS_Segment_h867ace5f3f641e0956a2a448d548328: function AS_Segment_h867ace5f3f641e0956a2a448d548328(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.NavigateHomeDescription()
    },
    /** onTouchStart defined for FlxContainer **/
    AS_FlexContainer_ce7a59c7eaf04be691b2e114bd05e7f2: function AS_FlexContainer_ce7a59c7eaf04be691b2e114bd05e7f2(eventobject, x, y) {
        var self = this;
        this.moveInit.call(this, eventobject, x, y);
    },
    /** onTouchMove defined for FlxContainer **/
    AS_FlexContainer_ad8473e85e564f7a9d8e536122f41325: function AS_FlexContainer_ad8473e85e564f7a9d8e536122f41325(eventobject, x, y) {
        var self = this;
        this.moveMoving.call(this, eventobject, x, y);
    },
    /** onTouchEnd defined for FlxContainer **/
    AS_FlexContainer_c5725408b8c44d5fa346b34ae468c8cf: function AS_FlexContainer_c5725408b8c44d5fa346b34ae468c8cf(eventobject, x, y) {
        var self = this;
        this.moveEnd.call(this, eventobject, x, y);
    },
    /** init defined for FrmHome **/
    AS_Form_b2b712d3b9f4474895fe1c24cfe8b203: function AS_Form_b2b712d3b9f4474895fe1c24cfe8b203(eventobject) {
        var self = this;
        //this.setGesturestoStocks();
        //setGesture();
    },
    /** preShow defined for FrmHome **/
    AS_Form_j6a9c0a83a514324989bf06e55c8621c: function AS_Form_j6a9c0a83a514324989bf06e55c8621c(eventobject) {
        var self = this;
        this.HideSearch();
        /*this.screenWidth();
this.screenHeight();*/
    },
    /** postShow defined for FrmHome **/
    AS_Form_j0cf5c209ca8414b88747757196ed3dc: function AS_Form_j0cf5c209ca8414b88747757196ed3dc(eventobject) {
        var self = this;
        return initializeGlobalMenu.call(this, null);
    }
});