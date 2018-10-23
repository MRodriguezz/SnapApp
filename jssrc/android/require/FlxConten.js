define("FlxConten", function() {
    return function(controller) {
        var FlxConten = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "30dp",
            "id": "FlxConten",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        FlxConten.setDefaultUnit(kony.flex.DP);
        var FlexContainer0hd2bf2967ab24c = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0hd2bf2967ab24c",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0e08acec01b4a41",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0hd2bf2967ab24c.setDefaultUnit(kony.flex.DP);
        var lblHeaderDirectory = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblHeaderDirectory",
            "isVisible": true,
            "left": "4%",
            "skin": "CopydefLabel0d0e3491a38c544",
            "text": "A",
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
        FlexContainer0hd2bf2967ab24c.add(lblHeaderDirectory);
        FlxConten.add(FlexContainer0hd2bf2967ab24c);
        return FlxConten;
    }
})