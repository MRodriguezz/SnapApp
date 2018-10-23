define(function() {
    return function(controller) {
        var flxMenuOption = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "flxMenuOption",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMenuOption.setDefaultUnit(kony.flex.DP);
        var FlexContainer0c23c3dd563fd42 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0c23c3dd563fd42",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0c23c3dd563fd42.setDefaultUnit(kony.flex.DP);
        var FlexContainer0ef40ba8687fe48 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0ef40ba8687fe48",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onClick": controller.AS_FlexContainer_e25ffa54a01f44b29a5c95dc7b1f2cc1,
            "skin": "CopyslFbox0id9030750b9647",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0ef40ba8687fe48.setDefaultUnit(kony.flex.DP);
        var FlexContainer0ea19035e0ff741 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "74.96%",
            "clipBounds": true,
            "height": "50%",
            "id": "FlexContainer0ea19035e0ff741",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0c45ab7cbcab644",
            "top": "50%",
            "width": "100.00%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0ea19035e0ff741.setDefaultUnit(kony.flex.DP);
        var FlexContainer0c35f5fdcec2d48 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "71dp",
            "id": "FlexContainer0c35f5fdcec2d48",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100.00%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0c35f5fdcec2d48.setDefaultUnit(kony.flex.DP);
        var Label0c27726fff06b4d = new kony.ui.Label({
            "id": "Label0c27726fff06b4d",
            "isVisible": true,
            "left": "57dp",
            "skin": "CopydefLabel0c8201e666d9f4d",
            "text": "County Departament of job & family Services Office",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "18dp",
            "width": "66%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var Image0bdfe1dc2f00c4b = new kony.ui.Image2({
            "height": "40dp",
            "id": "Image0bdfe1dc2f00c4b",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "ic_map_agency.png",
            "top": "17dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var switchCountyDirectory = new kony.ui.Switch({
            "height": "40dp",
            "id": "switchCountyDirectory",
            "isVisible": true,
            "leftSideText": "ON",
            "right": "5%",
            "rightSideText": "OFF",
            "selectedIndex": 0,
            "skin": "CopydefSwitchNormal0f3a8084c2b4948",
            "top": "20dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0c35f5fdcec2d48.add(Label0c27726fff06b4d, Image0bdfe1dc2f00c4b, switchCountyDirectory);
        var CopyFlexContainer0e519af23e12445 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "71dp",
            "id": "CopyFlexContainer0e519af23e12445",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "71dp",
            "width": "100.00%",
            "zIndex": 1
        }, {}, {});
        CopyFlexContainer0e519af23e12445.setDefaultUnit(kony.flex.DP);
        var CopyLabel0dbe074bb666847 = new kony.ui.Label({
            "id": "CopyLabel0dbe074bb666847",
            "isVisible": true,
            "left": "57dp",
            "skin": "CopydefLabel0c8201e666d9f4d",
            "text": "Farmers' market or Store with Produce Perk",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "18dp",
            "width": "66%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var CopyImage0i3636fea296d41 = new kony.ui.Image2({
            "height": "40dp",
            "id": "CopyImage0i3636fea296d41",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "ic_map_farmers_perk.png",
            "top": "17dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var switchFarmersMarketWithPP = new kony.ui.Switch({
            "height": "32dp",
            "id": "switchFarmersMarketWithPP",
            "isVisible": true,
            "leftSideText": "ON",
            "right": "5%",
            "rightSideText": "OFF",
            "selectedIndex": 0,
            "skin": "CopydefSwitchNormal0c89e2f6add3146",
            "top": "20dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFlexContainer0e519af23e12445.add(CopyLabel0dbe074bb666847, CopyImage0i3636fea296d41, switchFarmersMarketWithPP);
        var CopyFlexContainer0i43c7b3ca20247 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "71dp",
            "id": "CopyFlexContainer0i43c7b3ca20247",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "142dp",
            "width": "100.00%",
            "zIndex": 1
        }, {}, {});
        CopyFlexContainer0i43c7b3ca20247.setDefaultUnit(kony.flex.DP);
        var CopyLabel0ae16c170dd814a = new kony.ui.Label({
            "id": "CopyLabel0ae16c170dd814a",
            "isVisible": true,
            "left": "57dp",
            "skin": "CopydefLabel0c8201e666d9f4d",
            "text": "Farmers’ Market Accepting EBT but not Produce Perks",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "18dp",
            "width": "66%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var CopyImage0de55f33917484a = new kony.ui.Image2({
            "height": "40dp",
            "id": "CopyImage0de55f33917484a",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "ic_map_farmers_no_perk.png",
            "top": "17dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var switchFarmersMarketWithoutPP = new kony.ui.Switch({
            "height": "32dp",
            "id": "switchFarmersMarketWithoutPP",
            "isVisible": true,
            "leftSideText": "ON",
            "right": "5.00%",
            "rightSideText": "OFF",
            "selectedIndex": 0,
            "skin": "CopydefSwitchNormal0b1b61fa28fc148",
            "top": "20dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFlexContainer0i43c7b3ca20247.add(CopyLabel0ae16c170dd814a, CopyImage0de55f33917484a, switchFarmersMarketWithoutPP);
        var CopyFlexContainer0bf03835bb36a41 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "71dp",
            "id": "CopyFlexContainer0bf03835bb36a41",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "205dp",
            "width": "100.00%",
            "zIndex": 1
        }, {}, {});
        CopyFlexContainer0bf03835bb36a41.setDefaultUnit(kony.flex.DP);
        var CopyLabel0jc45a09945b04e = new kony.ui.Label({
            "id": "CopyLabel0jc45a09945b04e",
            "isVisible": true,
            "left": "57dp",
            "skin": "CopydefLabel0c8201e666d9f4d",
            "text": "WIC Clinic",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "22dp",
            "width": "66%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var CopyImage0jee97100893b4f = new kony.ui.Image2({
            "height": "40dp",
            "id": "CopyImage0jee97100893b4f",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "ic_map_wic.png",
            "top": "17dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var switchWicClinic = new kony.ui.Switch({
            "height": "32dp",
            "id": "switchWicClinic",
            "isVisible": true,
            "leftSideText": "ON",
            "right": "5%",
            "rightSideText": "OFF",
            "selectedIndex": 0,
            "skin": "CopydefSwitchNormal0e7ea34c0898844",
            "top": "20dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyFlexContainer0bf03835bb36a41.add(CopyLabel0jc45a09945b04e, CopyImage0jee97100893b4f, switchWicClinic);
        var Button0aa3c513601e54e = new kony.ui.Button({
            "bottom": "2%",
            "focusSkin": "CopydefBtnNormal0dfea9bc1cc384d",
            "height": "13%",
            "id": "Button0aa3c513601e54e",
            "isVisible": true,
            "left": "9%",
            "onClick": controller.AS_Button_d95f3e9f855e4f98808e9e12d57fa9fe,
            "skin": "CopydefBtnNormal0dfea9bc1cc384d",
            "text": "Close",
            "width": "82%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0ea19035e0ff741.add(FlexContainer0c35f5fdcec2d48, CopyFlexContainer0e519af23e12445, CopyFlexContainer0i43c7b3ca20247, CopyFlexContainer0bf03835bb36a41, Button0aa3c513601e54e);
        FlexContainer0ef40ba8687fe48.add(FlexContainer0ea19035e0ff741);
        FlexContainer0c23c3dd563fd42.add(FlexContainer0ef40ba8687fe48);
        flxMenuOption.add(FlexContainer0c23c3dd563fd42);
        return flxMenuOption;
    }
})