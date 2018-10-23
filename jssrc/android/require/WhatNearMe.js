define("WhatNearMe", function() {
    return function(controller) {
        function addWidgetsWhatNearMe() {
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
            var MapNear = new kony.ui.Map({
                "calloutTemplate": "flxMapTemplate",
                "calloutWidth": 44,
                "defaultPinImage": "pinb.png",
                "height": "93%",
                "id": "MapNear",
                "isVisible": true,
                "left": "0dp",
                "provider": constants.MAP_PROVIDER_GOOGLE,
                "top": "7.00%",
                "widgetDataMapForCallout": {
                    "CopyFlexContainer0b89c59a640304d": "CopyFlexContainer0b89c59a640304d",
                    "Flex0c5e400ce10be4a": "Flex0c5e400ce10be4a",
                    "FlexContainer0a595eaae467741": "FlexContainer0a595eaae467741",
                    "FlexContainer0b3b91376579f42": "FlexContainer0b3b91376579f42",
                    "FlexContainer0bb561057974747": "FlexContainer0bb561057974747",
                    "FlexContainer0df525c598a954a": "FlexContainer0df525c598a954a",
                    "FlexContainer0f5d1241150f34e": "FlexContainer0f5d1241150f34e",
                    "FlexContainer0f74b740f99084c": "FlexContainer0f74b740f99084c",
                    "flxMapTemplate": "flxMapTemplate",
                    "ImgLocation": "ImgLocation",
                    "ImgNumberLocation": "ImgNumberLocation",
                    "ImgSee": "ImgSee",
                    "ImgShare": "ImgShare",
                    "ImgTime": "ImgTime",
                    "ImgTraingle": "ImgTraingle",
                    "Label0aa0c1c72483246": "Label0aa0c1c72483246",
                    "Label0b5171d85ac804d": "Label0b5171d85ac804d",
                    "Label0b70160165ad142": "Label0b70160165ad142",
                    "Label0c1ddc5c567bb4b": "Label0c1ddc5c567bb4b",
                    "Label0d375670c13ac4d": "Label0d375670c13ac4d",
                    "lblAdrs": "lblAdrs",
                    "lblDesc": "lblDesc",
                    "LblNumberMap": "LblNumberMap",
                    "lblPhoneNo": "lblPhoneNo",
                    "lblTimings": "lblTimings",
                    "lblTitle": "lblTitle"
                },
                "width": "100%",
                "zIndex": 1
            }, {}, {
                "mode": constants.MAP_VIEW_MODE_NORMAL,
                "showZoomControl": true,
                "zoomLevel": 5
            });
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
            FlxHeader.Background.src = "back_blue_header.png";
            FlxHeader.top = "0dp";
            FlxHeader.Image0i7393cecf87540.src = "nav_down_blue.png";
            FlxHeader.LblHome.text = "WHAT'S NEAR ME?";
            FlxHeader.search.isVisible = false;
            var FlexContainer0e62f594b7bbc4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "2%",
                "clipBounds": true,
                "height": "60dp",
                "id": "FlexContainer0e62f594b7bbc4a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "onClick": controller.AS_FlexContainer_f559ec4a45f547c4857eb53c36369c84,
                "skin": "buttonCircule",
                "width": "60dp",
                "zIndex": 20
            }, {}, {});
            FlexContainer0e62f594b7bbc4a.setDefaultUnit(kony.flex.DP);
            var Image0b555601abfee41 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "35dp",
                "id": "Image0b555601abfee41",
                "isVisible": true,
                "skin": "slImage",
                "src": "ic_key.png",
                "top": "0dp",
                "width": "35dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0e62f594b7bbc4a.add(Image0b555601abfee41);
            var FlexContainer0fdbce89d215b4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "2%",
                "clipBounds": true,
                "height": "57dp",
                "id": "FlexContainer0fdbce89d215b4c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "right": "3%",
                "skin": "CopybuttonCircule0dca2a0d40a8841",
                "width": "16.00%",
                "zIndex": 20
            }, {}, {});
            FlexContainer0fdbce89d215b4c.setDefaultUnit(kony.flex.DP);
            var Image0a2df543d88ca44 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "40dp",
                "id": "Image0a2df543d88ca44",
                "isVisible": true,
                "skin": "slImage",
                "src": "ic_central_location.png",
                "width": "40dp",
                "zIndex": 20
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0fdbce89d215b4c.add(Image0a2df543d88ca44);
            FlxContainer.add(MapNear, FlxHeader, FlexContainer0e62f594b7bbc4a, FlexContainer0fdbce89d215b4c);
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
            Flxmenu.BackgroundFooter.src = "back_blue_header.png";
            Flxmenu.isVisible = false;
            Flxmenu.ImgUp.src = "nav_up_blue.png";
            Flxmenu.LblHomeDescription.text = "WHAT'S NEAR ME?";
            var flxMenuOption = new MenuMaps.flxMenuOption({
                "clipBounds": true,
                "height": "100%",
                "id": "flxMenuOption",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxMenuOption.isVisible = false;
            flxMenuOption.switchCountyDirectory.onSlide = controller.AS_Switch_fa99cce0369941c2b2774bf6e8350047;
            flxMenuOption.switchFarmersMarketWithPP.onSlide = controller.AS_Switch_c850efe2b32f4253aa887c90c47691cc;
            flxMenuOption.switchFarmersMarketWithoutPP.onSlide = controller.AS_Switch_icdaeb4ee26f4f60a1716ecdb398d721;
            flxMenuOption.switchWicClinic.onSlide = controller.AS_Switch_a42158a0f7f54c36a50373d50ca7f7b1;
            this.add(FlxContainer, Flxmenu, flxMenuOption);
        };
        return [{
            "addWidgets": addWidgetsWhatNearMe,
            "enabledForIdleTimeout": false,
            "id": "WhatNearMe",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_i90cbe9088a4496c88d67eb65f2f6d36,
            "skin": "CopyslForm0g9b3c82e34b349"
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