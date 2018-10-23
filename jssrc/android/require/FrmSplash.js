define("FrmSplash", function() {
    return function(controller) {
        function addWidgetsFrmSplash() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMainContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxMainContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "5dp",
                "skin": "SnkflxBGMainColor",
                "top": "10dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMainContainer.setDefaultUnit(kony.flex.DP);
            var ImgOhio = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "40%",
                "height": "245dp",
                "id": "ImgOhio",
                "isVisible": true,
                "left": "40dp",
                "skin": "slImage",
                "src": "ohio.png",
                "top": "15dp",
                "width": "290dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMainContainer.add(ImgOhio);
            this.add(flxMainContainer);
        };
        return [{
            "addWidgets": addWidgetsFrmSplash,
            "enabledForIdleTimeout": false,
            "id": "FrmSplash",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_d92b0df5eea849d992ff3a4ba438e796,
            "preShow": controller.AS_Form_a2717534c35a486e95ccca1220182083,
            "skin": "snkfrmBGMainColor"
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