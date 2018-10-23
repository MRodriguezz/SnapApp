define(function() {
    return function(controller) {
        var Note = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "Note",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0bacc723a8dc241",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        Note.setDefaultUnit(kony.flex.DP);
        var FlxContainerInsertNote = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlxContainerInsertNote",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlxContainerInsertNote.setDefaultUnit(kony.flex.DP);
        var FlxHeaderNote = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "6%",
            "id": "FlxHeaderNote",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0ac745b8e67bf4d",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlxHeaderNote.setDefaultUnit(kony.flex.DP);
        var ImgCloseNote = new kony.ui.Image2({
            "height": "30dp",
            "id": "ImgCloseNote",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "ic_close_notes.png",
            "top": "13%",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var LblDoneNote = new kony.ui.Label({
            "id": "LblDoneNote",
            "isVisible": true,
            "right": "4%",
            "skin": "CopydefLabel0bc45e5b438b341",
            "text": "Done",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "17%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var FlxClickClose = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "33dp",
            "id": "FlxClickClose",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6dp",
            "onClick": controller.AS_FlexContainer_a5d2de5f07f741eab3f057c850033649,
            "skin": "slFbox",
            "top": "5dp",
            "width": "10.70%",
            "zIndex": 1
        }, {}, {});
        FlxClickClose.setDefaultUnit(kony.flex.DP);
        FlxClickClose.add();
        FlxHeaderNote.add(ImgCloseNote, LblDoneNote, FlxClickClose);
        var FlxContentWriteNote = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "93.94%",
            "id": "FlxContentWriteNote",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "6%",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlxContentWriteNote.setDefaultUnit(kony.flex.DP);
        var TxtArea = new kony.ui.TextArea2({
            "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "CopydefTextAreaFocus0c12805c2d82944",
            "height": "35dp",
            "id": "TxtArea",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
            "numberOfVisibleLines": 3,
            "placeholder": "Enter title",
            "skin": "CopydefTextAreaNormal0je2533e8cffc4b",
            "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
            "top": "10dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [2, 2, 2, 2],
            "paddingInPixel": false
        }, {
            "placeholderSkin": "defTextAreaPlaceholder"
        });
        var FlxLineDivisor2 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "4dp",
            "id": "FlxLineDivisor2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0c363ecd6a5aa46",
            "top": "1%",
            "width": "90%",
            "zIndex": 1
        }, {}, {});
        FlxLineDivisor2.setDefaultUnit(kony.flex.DP);
        FlxLineDivisor2.add();
        var TxtAreaNote = new kony.ui.TextArea2({
            "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
            "centerX": "50%",
            "focusSkin": "CopydefTextAreaFocus0ibc1394eec6c45",
            "height": "85%",
            "id": "TxtAreaNote",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
            "numberOfVisibleLines": 3,
            "placeholder": "Enter note",
            "skin": "CopydefTextAreaNormal0a1054220872f4e",
            "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
            "top": "14dp",
            "width": "90%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [2, 2, 2, 2],
            "paddingInPixel": false
        }, {
            "placeholderSkin": "defTextAreaPlaceholder"
        });
        FlxContentWriteNote.add(TxtArea, FlxLineDivisor2, TxtAreaNote);
        FlxContainerInsertNote.add(FlxHeaderNote, FlxContentWriteNote);
        var FlxClickDone = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "38dp",
            "id": "FlxClickDone",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_d36533b01772430bbc103e26b9e52e79,
            "right": "1%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "19.07%",
            "zIndex": 1
        }, {}, {});
        FlxClickDone.setDefaultUnit(kony.flex.DP);
        FlxClickDone.add();
        Note.add(FlxContainerInsertNote, FlxClickDone);
        return Note;
    }
})