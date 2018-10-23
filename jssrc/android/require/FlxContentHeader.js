define("FlxContentHeader", function() {
    return function(controller) {
        var FlxContentHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7dp",
            "id": "FlxContentHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        FlxContentHeader.setDefaultUnit(kony.flex.DP);
        var FlexContainer0cd3a910f86ac49 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0cd3a910f86ac49",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0c363ecd6a5aa46",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0cd3a910f86ac49.setDefaultUnit(kony.flex.DP);
        FlexContainer0cd3a910f86ac49.add();
        var Label0da61cd67b7b14b = new kony.ui.Label({
            "id": "Label0da61cd67b7b14b",
            "isVisible": true,
            "left": "22dp",
            "skin": "defLabel",
            "text": "Label",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        FlxContentHeader.add(FlexContainer0cd3a910f86ac49, Label0da61cd67b7b14b);
        return FlxContentHeader;
    }
})