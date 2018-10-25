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
        this.screenWidth();
        this.screenHeight();
    },
    /** postShow defined for FrmHome **/
    AS_Form_j0cf5c209ca8414b88747757196ed3dc: function AS_Form_j0cf5c209ca8414b88747757196ed3dc(eventobject) {
        return initializeGlobalMenu.call(this, null);
    },
    /** onTouchStart defined for FlxContainer **/
    AS_FlexContainer_d3002ca27392463bbec94fc7db8a374e: function AS_FlexContainer_d3002ca27392463bbec94fc7db8a374e(eventobject, x, y) {
        this.circleInit.call(this, eventobject, x, y);
    },
    /** onTouchMove defined for FlxContainer **/
    AS_FlexContainer_fa1cab32216043dc84bddc06e10b3203: function AS_FlexContainer_fa1cab32216043dc84bddc06e10b3203(eventobject, x, y) {
        this.moveCircle.call(this, eventobject, x, y);
    },
    /** onTouchEnd defined for FlxContainer **/
    AS_FlexContainer_d20039ecc85e46b6951855dd34bd9e2a: function AS_FlexContainer_d20039ecc85e46b6951855dd34bd9e2a(eventobject, x, y) {
        this.circleEnd.call(this, eventobject, x, y);
    }
});