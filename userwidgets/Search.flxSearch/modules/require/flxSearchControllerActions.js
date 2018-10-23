define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDone defined for TxtBoxSearch **/
    AS_TextField_ed98a1144b6a4d8ca10558e6ded1d84c: function AS_TextField_ed98a1144b6a4d8ca10558e6ded1d84c(eventobject, changedtext) {
        var self = this;
        kony.print("SgSearchData onTxtBoxDone");
        this.searchHomeData();
    },
    /** onClick defined for FlxClickCancel **/
    AS_FlexContainer_fe9d369c49454fd8bdcc6f7da68cb03c: function AS_FlexContainer_fe9d369c49454fd8bdcc6f7da68cb03c(eventobject) {
        var self = this;
        this.hideSearch();
    },
    /** onClick defined for flxSearch **/
    AS_FlexContainer_d3b63b488d0742e18a3c6f59ae44392e: function AS_FlexContainer_d3b63b488d0742e18a3c6f59ae44392e(eventobject) {
        var self = this;
        kony.print("Search.flxSearch onclick");
    }
});