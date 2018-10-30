define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for SgmHome **/
    AS_Segment_h867ace5f3f641e0956a2a448d548328: function AS_Segment_h867ace5f3f641e0956a2a448d548328(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.NavigateHomeDescription()
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
    },
    /** onTouchStart defined for flxMenuTap **/
    AS_FlexContainer_i090cc00318f41e8a0f35b67c9de664b: function AS_FlexContainer_i090cc00318f41e8a0f35b67c9de664b(eventobject, x, y) {
        var self = this;
        this.moveInit.call(this, eventobject, x, y);
    },
    /** onTouchMove defined for flxMenuTap **/
    AS_FlexContainer_a75852c1b63148b8aee23f0c69b638b7: function AS_FlexContainer_a75852c1b63148b8aee23f0c69b638b7(eventobject, x, y) {
        var self = this;
        this.moveMoving.call(this, eventobject, x, y);
    },
    /** onTouchEnd defined for flxMenuTap **/
    AS_FlexContainer_beffece1d2754200bb08634a82b6c31e: function AS_FlexContainer_beffece1d2754200bb08634a82b6c31e(eventobject, x, y) {
        var self = this;
        this.moveEnd.call(this, eventobject, x, y);
    }
});