define(function() {
    return function(controller) {
        var FlxHeaderInfo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "17%",
            "id": "FlxHeaderInfo",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0a7c168f687914a",
            "top": "0dp",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        FlxHeaderInfo.setDefaultUnit(kony.flex.DP);
        var FlxBack = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "22%",
            "clipBounds": true,
            "height": "44dp",
            "id": "FlxBack",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_d30ddeca10ac4a678e91d280c01f89c7,
            "skin": "CopyslFbox0g4eb9ba1acf84e",
            "width": "40dp",
            "zIndex": 2
        }, {}, {});
        FlxBack.setDefaultUnit(kony.flex.DP);
        var Back = new kony.ui.Image2({
            "centerY": "46%",
            "height": "40dp",
            "id": "Back",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "ic_chevron_back.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlxBack.add(Back);
        var ImgLogo = new kony.ui.Image2({
            "centerX": "50%",
            "height": "32dp",
            "id": "ImgLogo",
            "isVisible": true,
            "skin": "slImage",
            "src": "ic_header_basics.png",
            "top": "6%",
            "width": "32dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var LblHeader2Title = new kony.ui.Label({
            "bottom": "42%",
            "centerX": "50%",
            "id": "LblHeader2Title",
            "isVisible": true,
            "skin": "CopydefLabel0j20c7ebc455e44",
            "text": "SNAP Basics",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var LblHeader2Title2 = new kony.ui.Label({
            "bottom": "24%",
            "centerX": "50%",
            "id": "LblHeader2Title2",
            "isVisible": true,
            "skin": "CopydefLabel0aedbc5431c1944",
            "text": "Learn About Program Eligibility",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 2
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var ImgHeader2Down = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "89%",
            "height": "24dp",
            "id": "ImgHeader2Down",
            "isVisible": true,
            "skin": "CopyslImage0dfa4e1b884f243",
            "src": "nav_notch_down_red.png",
            "width": "24%",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var FlexContainer0aeef50ac137947 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "103dp",
            "id": "FlexContainer0aeef50ac137947",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0j52183c6a4d04a",
            "top": "0dp",
            "width": "99.96%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0aeef50ac137947.setDefaultUnit(kony.flex.DP);
        FlexContainer0aeef50ac137947.add();
        var ImgHeader2Search = new kony.ui.Image2({
            "height": "30dp",
            "id": "ImgHeader2Search",
            "isVisible": true,
            "right": "3%",
            "skin": "slImage",
            "src": "ic_search.png",
            "top": "6dp",
            "width": "30dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var FlxClickMenu = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "32dp",
            "id": "FlxClickMenu",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "156dp",
            "onClick": controller.AS_FlexContainer_ga7b217c35c34842b6c3ca0a76a6cd16,
            "skin": "slFbox",
            "top": "90dp",
            "width": "13.79%",
            "zIndex": 2
        }, {}, {});
        FlxClickMenu.setDefaultUnit(kony.flex.DP);
        FlxClickMenu.add();
        FlxHeaderInfo.add(FlxBack, ImgLogo, LblHeader2Title, LblHeader2Title2, ImgHeader2Down, FlexContainer0aeef50ac137947, ImgHeader2Search, FlxClickMenu);
        return FlxHeaderInfo;
    }
})