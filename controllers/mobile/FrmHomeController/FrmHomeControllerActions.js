define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for SgmHome **/
    AS_Segment_h867ace5f3f641e0956a2a448d548328: function AS_Segment_h867ace5f3f641e0956a2a448d548328(eventobject, sectionNumber, rowNumber) {
        this.NavigateHomeDescription()
    },
    /** init defined for FrmHome **/
    AS_Form_b2b712d3b9f4474895fe1c24cfe8b203: function AS_Form_b2b712d3b9f4474895fe1c24cfe8b203(eventobject) {
        //this.setGesturestoStocks();
        setGesture();
    },
    /** preShow defined for FrmHome **/
    AS_Form_j6a9c0a83a514324989bf06e55c8621c: function AS_Form_j6a9c0a83a514324989bf06e55c8621c(eventobject) {
        this.HideSearch();
        /*this.screenWidth();
this.screenHeight();*/
    },
    /** postShow defined for FrmHome **/
    AS_Form_j0cf5c209ca8414b88747757196ed3dc: function AS_Form_j0cf5c209ca8414b88747757196ed3dc(eventobject) {
        return initializeGlobalMenu.call(this, null);
    },
    /** onTouchStart defined for flxTrackPad **/
    AS_FlexContainer_e2018e2046a84e7bacb7b892c6a374bf: function AS_FlexContainer_e2018e2046a84e7bacb7b892c6a374bf(eventobject, x, y) {
        this.circleInit.call(this, eventobject, x, y);
    },
    /** onTouchMove defined for flxTrackPad **/
    AS_FlexContainer_bb884bc7be0c4123bdb6c8d2c832fc88: function AS_FlexContainer_bb884bc7be0c4123bdb6c8d2c832fc88(eventobject, x, y) {
        this.moveCircle.call(this, eventobject, x, y);
    },
    /** onTouchEnd defined for flxTrackPad **/
    AS_FlexContainer_d97767f5f7fe4e4bae981e01d227d183: function AS_FlexContainer_d97767f5f7fe4e4bae981e01d227d183(eventobject, x, y) {
        this.circleEnd.call(this, eventobject, x, y);
    }
});