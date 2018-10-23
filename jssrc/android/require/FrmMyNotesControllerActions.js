define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onRowClick defined for SgmMyNotes **/
    AS_Segment_f8b17e6f12754bb1a96d558646877f74: function AS_Segment_f8b17e6f12754bb1a96d558646877f74(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.EditNote();
    },
    /** onClick defined for ClickNewNote **/
    AS_FlexContainer_abca0beb1e4c4e6d869feb155d701ad2: function AS_FlexContainer_abca0beb1e4c4e6d869feb155d701ad2(eventobject) {
        var self = this;
        this.NewNote()
    },
    /** preShow defined for FrmMyNotes **/
    AS_Form_i170db45e2b34cb290fe85b18184f37a: function AS_Form_i170db45e2b34cb290fe85b18184f37a(eventobject) {
        var self = this;
        this.CleanSegment()
    }
});