define("FrmEnter", function() {
    return function(controller) {
        function addWidgetsFrmEnter() {
            this.setDefaultUnit(kony.flex.DP);
            var FlxMainCointainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "FlxMainCointainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "skin": "slFbox",
                "top": "15dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxMainCointainer.setDefaultUnit(kony.flex.DP);
            var ImgWelcome = new kony.ui.Image2({
                "centerX": "50.07%",
                "centerY": "50.02%",
                "height": "100.00%",
                "id": "ImgWelcome",
                "isVisible": true,
                "left": "95dp",
                "skin": "slImage",
                "src": "back_start.jpg",
                "top": "155dp",
                "width": "149.31%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var LblWelcome = new kony.ui.Label({
                "bottom": "5%",
                "centerX": "50%",
                "id": "LblWelcome",
                "isVisible": true,
                "skin": "CopydefLabel0ef46311116644c",
                "text": "Privacy & Terms",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var LblDisclaimer = new kony.ui.Label({
                "centerX": "50.05%",
                "centerY": "25.00%",
                "id": "LblDisclaimer",
                "isVisible": true,
                "left": "37dp",
                "skin": "CopydefLabel0jb423c7b29d141",
                "text": "Welcome to Ohio's Mobile App for Information about SNAP ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "90dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var FlexContainer0e31a3a735da540 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "85%",
                "clipBounds": true,
                "height": "50dp",
                "id": "FlexContainer0e31a3a735da540",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "23dp",
                "onTouchStart": controller.AS_FlexContainer_aae4b167e917465784b4d3bc55660fae,
                "skin": "slFbox",
                "width": "87.49%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0e31a3a735da540.setDefaultUnit(kony.flex.DP);
            var BtnEnter = new kony.ui.Button({
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "CopydefBtnNormal0ede3cc65fec447",
                "height": "50dp",
                "id": "BtnEnter",
                "isVisible": true,
                "left": "35dp",
                "onClick": controller.AS_Button_gae5bdfa4d3e4193b057040a25e84302,
                "skin": "CopydefBtnNormal0ede3cc65fec447",
                "text": "Enter",
                "top": "516dp",
                "width": "304dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0e31a3a735da540.add(BtnEnter);
            FlxMainCointainer.add(ImgWelcome, LblWelcome, LblDisclaimer, FlexContainer0e31a3a735da540);
            this.add(FlxMainCointainer);
        };
        return [{
            "addWidgets": addWidgetsFrmEnter,
            "enabledForIdleTimeout": false,
            "id": "FrmEnter",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_i5af3678b15b4874ba78ec4799672f99,
            "skin": "CopyslForm0a90c3a488ded42"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});