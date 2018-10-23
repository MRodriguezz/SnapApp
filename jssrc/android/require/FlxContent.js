define("FlxContent", function() {
    return function(controller) {
        var FlxContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "FlxContent",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        FlxContent.setDefaultUnit(kony.flex.DP);
        var FlexContainer0aff3c7fe796548 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "53dp",
            "id": "FlexContainer0aff3c7fe796548",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0aff3c7fe796548.setDefaultUnit(kony.flex.DP);
        var Image0c88a9c534e8344 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "40dp",
            "id": "Image0c88a9c534e8344",
            "isVisible": true,
            "left": "4%",
            "skin": "slImage",
            "src": "nav_home.png",
            "top": "5dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var LblName = new kony.ui.Label({
            "centerY": "50%",
            "id": "LblName",
            "isVisible": true,
            "left": "65dp",
            "skin": "CopydefLabel0d9dd47b915754b",
            "text": "Home",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
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
            "centerX": "94%",
            "centerY": "50%",
            "height": "42dp",
            "id": "Image0e230499ae4fb4d",
            "isVisible": false,
            "left": "327dp",
            "skin": "slImage",
            "src": "ic_chevron_right_grey.png",
            "top": "17dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0aff3c7fe796548.add(Image0c88a9c534e8344, LblName, Image0e230499ae4fb4d);
        var Label0de7590c086f34a = new kony.ui.Label({
            "id": "Label0de7590c086f34a",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0jbd5e97b98ad43",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 0,
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        FlxContent.add(FlexContainer0aff3c7fe796548, Label0de7590c086f34a);
        return FlxContent;
    }
})