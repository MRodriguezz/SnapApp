define(function() {
    return function(controller) {
        var FlxHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "8.50%",
            "id": "FlxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onClick": controller.AS_FlexContainer_ee36521a34944b4b9e8fbc71b20c0e2e,
            "skin": "CopyslFbox0a956e973ffb743",
            "top": "0dp",
            "width": "100%",
            "zIndex": 20
        }, {}, {});
        FlxHeader.setDefaultUnit(kony.flex.DP);
        var Background = new kony.ui.Image2({
            "height": "119dp",
            "id": "Background",
            "isVisible": false,
            "left": "0dp",
            "skin": "slImage",
            "src": "back_header.png",
            "top": "-46dp",
            "width": "377dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Image0i7393cecf87540 = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "75%",
            "height": "24dp",
            "id": "Image0i7393cecf87540",
            "isVisible": true,
            "skin": "slImage",
            "src": "nav_notch_down.png",
            "top": "28dp",
            "width": "24dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var LblHome = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "41%",
            "id": "LblHome",
            "isVisible": true,
            "skin": "CopydefLabel0ba1f6d0cf0de45",
            "text": "HOME",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var search = new kony.ui.Image2({
            "centerX": "93%",
            "centerY": "45%",
            "height": "30dp",
            "id": "search",
            "isVisible": true,
            "left": "290dp",
            "skin": "slImage",
            "src": "ic_search.png",
            "top": "-16dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var FlexContainer0eb303a2da5ab4f = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "FlexContainer0eb303a2da5ab4f",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "164dp",
            "skin": "slFbox",
            "top": "32dp",
            "width": "12.64%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0eb303a2da5ab4f.setDefaultUnit(kony.flex.DP);
        FlexContainer0eb303a2da5ab4f.add();
        var FlexContainer0b5c1313bf14043 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "59%",
            "clipBounds": true,
            "height": "44dp",
            "id": "FlexContainer0b5c1313bf14043",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "2%",
            "onClick": controller.AS_FlexContainer_bab3ba2660164a6082730d3bc00f694e,
            "skin": "CopyslFbox0g4eb9ba1acf84e",
            "width": "12.48%",
            "zIndex": 2
        }, {}, {});
        FlexContainer0b5c1313bf14043.setDefaultUnit(kony.flex.DP);
        var Back = new kony.ui.Image2({
            "centerY": "40%",
            "height": "40dp",
            "id": "Back",
            "isVisible": true,
            "left": "2%",
            "skin": "slImage",
            "src": "ic_chevron_back.png",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0b5c1313bf14043.add(Back);
        var FlxSearch = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "60%",
            "id": "FlxSearch",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopyslFbox0c06f60eef59f4d",
            "top": "4dp",
            "width": "94%",
            "zIndex": 2
        }, {}, {});
        FlxSearch.setDefaultUnit(kony.flex.DP);
        var TextField0ac7fb6fdafea4d = new kony.ui.TextBox2({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "defTextBoxFocus",
            "height": "35dp",
            "id": "TextField0ac7fb6fdafea4d",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "35dp",
            "placeholder": "Placeholder",
            "secureTextEntry": false,
            "skin": "CopydefTextBoxNormal0gc32ddcb9b4a4c",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "243dp",
            "zIndex": 1
        }, {
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
            "placeholderSkin": "defTextBoxPlaceholder",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        });
        var ImgSearchflx = new kony.ui.Image2({
            "centerX": "5%",
            "centerY": "49%",
            "height": "30dp",
            "id": "ImgSearchflx",
            "isVisible": true,
            "left": "290dp",
            "skin": "slImage",
            "src": "ic_search.png",
            "top": "-16dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Label0d0f1e27dc31b4c = new kony.ui.Label({
            "id": "Label0d0f1e27dc31b4c",
            "isVisible": true,
            "left": "288dp",
            "skin": "CopydefLabel0c0a9cb76f1e040",
            "text": "Cancel",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        FlxSearch.add(TextField0ac7fb6fdafea4d, ImgSearchflx, Label0d0f1e27dc31b4c);
        var FlxClickSearch = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "36dp",
            "id": "FlxClickSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "onClick": controller.AS_FlexContainer_d33445619dff4b4c82dcceec133287b8,
            "right": "1%",
            "skin": "CopyslFbox0d42a9af4e0de44",
            "top": "3dp",
            "width": "10.88%",
            "zIndex": 2
        }, {}, {});
        FlxClickSearch.setDefaultUnit(kony.flex.DP);
        FlxClickSearch.add();
        FlxHeader.add(Background, Image0i7393cecf87540, LblHome, search, FlexContainer0eb303a2da5ab4f, FlexContainer0b5c1313bf14043, FlxSearch, FlxClickSearch);
        return FlxHeader;
    }
})