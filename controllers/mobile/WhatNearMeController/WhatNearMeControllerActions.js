define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for FlexContainer0e62f594b7bbc4a **/
    AS_FlexContainer_f559ec4a45f547c4857eb53c36369c84: function AS_FlexContainer_f559ec4a45f547c4857eb53c36369c84(eventobject) {
        var self = this;
        MenuVisible();
        moveBoxMap("50%", 0, 0.8);
    },
    /** onSlide defined for switchCountyDirectory **/
    AS_Switch_e2de54a9efa34608a85c856cee4b5a5c: function AS_Switch_e2de54a9efa34608a85c856cee4b5a5c(eventobject) {
        var self = this;
        return self.filterMapData.call(this);
    },
    /** onSlide defined for switchFarmersMarketWithPP **/
    AS_Switch_if9aa9ee70bb44069780c314444501cc: function AS_Switch_if9aa9ee70bb44069780c314444501cc(eventobject) {
        var self = this;
        return self.filterMapData.call(this);
    },
    /** onSlide defined for switchFarmersMarketWithoutPP **/
    AS_Switch_bbeae6fd81134eeab8ea3c279485f3fc: function AS_Switch_bbeae6fd81134eeab8ea3c279485f3fc(eventobject) {
        var self = this;
        return self.filterMapData.call(this);
    },
    /** onSlide defined for switchWicClinic **/
    AS_Switch_ece37df1ea5b48f983cd6cd17485770f: function AS_Switch_ece37df1ea5b48f983cd6cd17485770f(eventobject) {
        var self = this;
        return self.filterMapData.call(this);
    },
    /** preShow defined for WhatNearMe **/
    AS_Form_i90cbe9088a4496c88d67eb65f2f6d36: function AS_Form_i90cbe9088a4496c88d67eb65f2f6d36(eventobject) {
        var self = this;
        return self.getCurrentLocation.call(this);
    }
});