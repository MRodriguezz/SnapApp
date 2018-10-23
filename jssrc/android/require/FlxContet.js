define("FlxContet", function() {
    return function(controller) {
        var FlxContet = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "FlxContet",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        FlxContet.setDefaultUnit(kony.flex.DP);
        var FlexContainer0cc96ed320b8e48 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0cc96ed320b8e48",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0cc96ed320b8e48.setDefaultUnit(kony.flex.DP);
        var NameDirectory = new kony.ui.Label({
            "centerY": "50%",
            "id": "NameDirectory",
            "isVisible": true,
            "left": "4%",
            "skin": "CopydefLabel0a184e0505aef41",
            "text": "Ashland",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        FlexContainer0cc96ed320b8e48.add(NameDirectory);
        FlxContet.add(FlexContainer0cc96ed320b8e48);
        return FlxContet;
    }
})