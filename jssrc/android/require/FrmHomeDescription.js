define("FrmHomeDescription", function() {
    return function(controller) {
        function addWidgetsFrmHomeDescription() {
            this.setDefaultUnit(kony.flex.DP);
            var FlxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0b6eae89792d24c",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxContainer.setDefaultUnit(kony.flex.DP);
            var FlxHeaderInfo = new Header2.FlxHeaderInfo({
                "clipBounds": true,
                "height": "17%",
                "id": "FlxHeaderInfo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "CopyslFbox0a7c168f687914a",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxHeaderInfo.ImgLogo.height = "34dp";
            FlxHeaderInfo.ImgLogo.top = "7%";
            FlxHeaderInfo.ImgLogo.width = "34dp";
            FlxHeaderInfo.LblHeader2Title.bottom = "41%";
            FlxHeaderInfo.LblHeader2Title2.bottom = "23%";
            FlxHeaderInfo.LblHeader2Title2.text = "Learn About Program Eligibility";
            var FlxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "84.50%",
                "id": "FlxContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c8d6684df2d54d",
                "top": "15.80%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxContent.setDefaultUnit(kony.flex.DP);
            var contentBrowser = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": false,
                "height": "100%",
                "id": "contentBrowser",
                "isVisible": true,
                "left": "0dp",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxContent.add(contentBrowser);
            FlxContainer.add(FlxHeaderInfo, FlxContent);
            var FlxMenu2 = new Menu2.FlxMenu2({
                "clipBounds": true,
                "height": "100%",
                "id": "FlxMenu2",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "CopyslFbox0add2aa3a477b47",
                "top": "-86%",
                "width": "100%"
            }, {}, {});
            this.add(FlxContainer, FlxMenu2);
        };
        return [{
            "addWidgets": addWidgetsFrmHomeDescription,
            "enabledForIdleTimeout": false,
            "id": "FrmHomeDescription",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_jc64dc28b9d44df8bbcb54b223b80e58,
            "skin": "SknFrmTwoStepGradientRedWhite"
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