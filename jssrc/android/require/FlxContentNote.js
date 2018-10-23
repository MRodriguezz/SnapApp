define("FlxContentNote", function() {
    return function(controller) {
        var FlxContentNote = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100dp",
            "id": "FlxContentNote",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0c83d77d5cd2a44",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        FlxContentNote.setDefaultUnit(kony.flex.DP);
        var FlxContainerNotes = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlxContainerNotes",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "CopyslFbox0e5b8c73fc36f46",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlxContainerNotes.setDefaultUnit(kony.flex.DP);
        var LblNoteName = new kony.ui.Label({
            "id": "LblNoteName",
            "isVisible": true,
            "left": "5%",
            "skin": "CopydefLabel0i94e696ebefe46",
            "text": "This is my new note.",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var LblDescription = new kony.ui.Label({
            "height": "45dp",
            "id": "LblDescription",
            "isVisible": true,
            "left": "5%",
            "skin": "CopydefLabel0b56928a91bf545",
            "text": "OpenSans-Regular-12pt-#4d4d4d>But I must explain to you how all this mistaken",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": "82%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var LblNoteDate = new kony.ui.Label({
            "bottom": "2dp",
            "id": "LblNoteDate",
            "isVisible": true,
            "left": "5%",
            "skin": "CopydefLabel0j89523eeb19242",
            "text": "08/08/2018",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var Image0e230499ae4fb4d = new kony.ui.Image2({
            "height": "42dp",
            "id": "Image0e230499ae4fb4d",
            "isVisible": true,
            "skin": "slImage",
            "src": "ic_chevron_right_grey.png",
            "top": "25%",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlxContainerNotes.add(LblNoteName, LblDescription, LblNoteDate, Image0e230499ae4fb4d);
        FlxContentNote.add(FlxContainerNotes);
        return FlxContentNote;
    }
})