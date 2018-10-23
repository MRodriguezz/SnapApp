define("FrmSettings", function() {
    return function(controller) {
        function addWidgetsFrmSettings() {
            this.setDefaultUnit(kony.flex.DP);
            var FlxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxContainer.setDefaultUnit(kony.flex.DP);
            var FlxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93%",
                "id": "FlxContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0ca26cd29ba264c",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxContent.setDefaultUnit(kony.flex.DP);
            var FlxServices = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "FlxServices",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "99.96%",
                "zIndex": 1
            }, {}, {});
            FlxServices.setDefaultUnit(kony.flex.DP);
            var LblLocation = new kony.ui.Label({
                "id": "LblLocation",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0i6cc51c090cc4d",
                "text": "Location services",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "17dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Switch0a6f957b03b1845 = new kony.ui.Switch({
                "height": "32dp",
                "id": "Switch0a6f957b03b1845",
                "isVisible": true,
                "left": "306dp",
                "leftSideText": "ON",
                "rightSideText": "OFF",
                "selectedIndex": 0,
                "skin": "CopydefSwitchNormal0a6f6e0cd130145",
                "top": "14dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxServices.add(LblLocation, Switch0a6f957b03b1845);
            var FlxPush = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "FlxPush",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "60dp",
                "width": "99.96%",
                "zIndex": 1
            }, {}, {});
            FlxPush.setDefaultUnit(kony.flex.DP);
            var LblPush = new kony.ui.Label({
                "id": "LblPush",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0i6cc51c090cc4d",
                "text": "Push Notifications",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "17dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopySwitch0fbca8bfe10244e = new kony.ui.Switch({
                "height": "32dp",
                "id": "CopySwitch0fbca8bfe10244e",
                "isVisible": true,
                "left": "306dp",
                "leftSideText": "ON",
                "rightSideText": "OFF",
                "selectedIndex": 0,
                "skin": "CopydefSwitchNormal0gda07f21818e42",
                "top": "14dp",
                "width": "50dp",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxPush.add(LblPush, CopySwitch0fbca8bfe10244e);
            FlxContent.add(FlxServices, FlxPush);
            var FlxHeader = new Header1.FlxHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8.50%",
                "id": "FlxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            FlxHeader.Image0i7393cecf87540.src = "nav_down_darkgreen.png";
            FlxHeader.LblHome.text = "SETTINGS";
            FlxHeader.search.centerX = "93.33%";
            FlxHeader.search.centerY = "53.46%";
            FlxHeader.search.isVisible = false;
            FlxContainer.add(FlxContent, FlxHeader);
            var Flxmenu = new Menu.Flxmenu({
                "clipBounds": true,
                "height": "100%",
                "id": "Flxmenu",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "sknFlxWhite",
                "top": "-93%",
                "width": "100%"
            }, {}, {});
            Flxmenu.BackgroundFooter.left = "0dp";
            Flxmenu.BackgroundFooter.src = "back_darkgreen.png";
            Flxmenu.BackgroundFooter.top = "-14dp";
            Flxmenu.isVisible = false;
            Flxmenu.ImgUp.src = "nav_up_darkgreen.png";
            Flxmenu.LblHomeDescription.text = "SETTINGS";
            this.add(FlxContainer, Flxmenu);
        };
        return [{
            "addWidgets": addWidgetsFrmSettings,
            "enabledForIdleTimeout": false,
            "id": "FrmSettings",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0ed922f01aebd45"
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