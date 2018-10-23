define("FlexContent", function() {
    return function(controller) {
        var FlexContent = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "85dp",
            "id": "FlexContent",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0a4688a960dc141",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        FlexContent.setDefaultUnit(kony.flex.DP);
        var FlexContainer0a68915ab028646 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "FlexContainer0a68915ab028646",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0b411c651d0bb46",
            "top": "5dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0a68915ab028646.setDefaultUnit(kony.flex.DP);
        var LblHomeName = new kony.ui.Label({
            "id": "LblHomeName",
            "isVisible": true,
            "left": "84dp",
            "skin": "CopydefLabel0id734fba16b648",
            "text": "SNAP Basics",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var LblHomeName2 = new kony.ui.Label({
            "id": "LblHomeName2",
            "isVisible": true,
            "left": "85dp",
            "skin": "CopydefLabel0a73a83fd8a6149",
            "text": "Learn about the programs",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "38dp",
            "width": "65%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var Image0e230499ae4fb4d = new kony.ui.Image2({
            "centerX": "92%",
            "centerY": "50%",
            "height": "42dp",
            "id": "Image0e230499ae4fb4d",
            "isVisible": true,
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
        var Image0a344106f7a1a44 = new kony.ui.Image2({
            "centerY": "50%",
            "height": "60dp",
            "id": "Image0a344106f7a1a44",
            "isVisible": true,
            "left": "4%",
            "skin": "slImage",
            "src": "ic_basics.png",
            "top": "5dp",
            "width": "60dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0a68915ab028646.add(LblHomeName, LblHomeName2, Image0e230499ae4fb4d, Image0a344106f7a1a44);
        FlexContent.add(FlexContainer0a68915ab028646);
        return FlexContent;
    }
})