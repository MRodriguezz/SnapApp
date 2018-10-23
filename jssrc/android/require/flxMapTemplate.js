define("flxMapTemplate", function() {
    return function(controller) {
        var flxMapTemplate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "270dp",
            "id": "flxMapTemplate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0h04eb86c8f3943",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxMapTemplate.setDefaultUnit(kony.flex.DP);
        var FlexContainer0bb561057974747 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "48%",
            "clipBounds": true,
            "height": "95%",
            "id": "FlexContainer0bb561057974747",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopyslFbox0f6f0cf7366254f",
            "width": "80%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0bb561057974747.setDefaultUnit(kony.flex.DP);
        var FlexContainer0df525c598a954a = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "64dp",
            "id": "FlexContainer0df525c598a954a",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "skin": "slFbox",
            "top": "0dp",
            "width": "100.04%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0df525c598a954a.setDefaultUnit(kony.flex.DP);
        var lblTitle = new kony.ui.Label({
            "id": "lblTitle",
            "isVisible": true,
            "left": "4%",
            "skin": "CopydefLabel0b8a23b62e76c45",
            "text": "Miller Street Farmers' Market",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "8dp",
            "width": "80%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDesc = new kony.ui.Label({
            "id": "lblDesc",
            "isVisible": true,
            "left": "4%",
            "skin": "CopydefLabel0b6de7e8344544b",
            "text": "Farmers' Market - 2.6  miles away",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        FlexContainer0df525c598a954a.add(lblTitle, lblDesc);
        var FlexContainer0f74b740f99084c = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "FlexContainer0f74b740f99084c",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0ea4cc87fc16c4d",
            "top": "59dp",
            "width": "100.04%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0f74b740f99084c.setDefaultUnit(kony.flex.DP);
        FlexContainer0f74b740f99084c.add();
        var FlexContainer0b3b91376579f42 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "115dp",
            "id": "FlexContainer0b3b91376579f42",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "66dp",
            "width": "99.96%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0b3b91376579f42.setDefaultUnit(kony.flex.DP);
        var lblAdrs = new kony.ui.Label({
            "id": "lblAdrs",
            "isVisible": true,
            "left": "16%",
            "skin": "CopydefLabel0jf17902f135541",
            "text": "15 w. Fourth St. , AShland, OH 45456465466",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": "65%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var ImgLocation = new kony.ui.Image2({
            "height": "25dp",
            "id": "ImgLocation",
            "isVisible": true,
            "left": "4%",
            "skin": "slImage",
            "src": "ic_map_location.png",
            "top": "6dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblPhoneNo = new kony.ui.Label({
            "id": "lblPhoneNo",
            "isVisible": true,
            "left": "48dp",
            "skin": "CopydefLabel0e785500bb2ec40",
            "text": "(419) 54654654",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "55dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var ImgNumberLocation = new kony.ui.Image2({
            "height": "25dp",
            "id": "ImgNumberLocation",
            "isVisible": true,
            "left": "4%",
            "skin": "slImage",
            "src": "ic_map_phone.png",
            "top": "54dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTimings = new kony.ui.Label({
            "id": "lblTimings",
            "isVisible": true,
            "left": "51dp",
            "skin": "CopydefLabel0d47fe0e50b4047",
            "text": "Mon fri 7:30am - 4:30PM",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "84dp",
            "width": "40%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var ImgTime = new kony.ui.Image2({
            "height": "25dp",
            "id": "ImgTime",
            "isVisible": true,
            "left": "4%",
            "skin": "slImage",
            "src": "ic_map_time.png",
            "top": "84dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var FlexContainer0a595eaae467741 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "FlexContainer0a595eaae467741",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "40dp",
            "onClick": controller.AS_FlexContainer_i075c4d0f8114675b46deeb9a0129b18,
            "skin": "slFbox",
            "top": "54dp",
            "width": "39.03%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0a595eaae467741.setDefaultUnit(kony.flex.DP);
        FlexContainer0a595eaae467741.add();
        FlexContainer0b3b91376579f42.add(lblAdrs, ImgLocation, lblPhoneNo, ImgNumberLocation, lblTimings, ImgTime, FlexContainer0a595eaae467741);
        var CopyFlexContainer0b89c59a640304d = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "CopyFlexContainer0b89c59a640304d",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0ea4cc87fc16c4d",
            "top": "189dp",
            "width": "100.04%",
            "zIndex": 1
        }, {}, {});
        CopyFlexContainer0b89c59a640304d.setDefaultUnit(kony.flex.DP);
        CopyFlexContainer0b89c59a640304d.add();
        var FlexContainer0f5d1241150f34e = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "55dp",
            "id": "FlexContainer0f5d1241150f34e",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "slFbox",
            "top": "192dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0f5d1241150f34e.setDefaultUnit(kony.flex.DP);
        var ImgSee = new kony.ui.Image2({
            "centerY": "51%",
            "height": "30dp",
            "id": "ImgSee",
            "isVisible": true,
            "left": "4%",
            "skin": "slImage",
            "src": "ic_photos.png",
            "top": "3dp",
            "width": "30dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Label0d375670c13ac4d = new kony.ui.Label({
            "centerY": "50%",
            "id": "Label0d375670c13ac4d",
            "isVisible": true,
            "left": "53dp",
            "skin": "CopydefLabel0e366124f661440",
            "text": "See photos",
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
        var ImgShare = new kony.ui.Image2({
            "centerY": "50%",
            "height": "25dp",
            "id": "ImgShare",
            "isVisible": true,
            "right": "4%",
            "skin": "slImage",
            "src": "ic_more.png",
            "top": "9dp",
            "width": "25dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FlexContainer0f5d1241150f34e.add(ImgSee, Label0d375670c13ac4d, ImgShare);
        FlexContainer0bb561057974747.add(FlexContainer0df525c598a954a, FlexContainer0f74b740f99084c, FlexContainer0b3b91376579f42, CopyFlexContainer0b89c59a640304d, FlexContainer0f5d1241150f34e);
        var ImgTraingle = new kony.ui.Image2({
            "centerX": "50%",
            "height": "30dp",
            "id": "ImgTraingle",
            "isVisible": true,
            "left": "147dp",
            "skin": "CopyslImage0e44f26aaa7e248",
            "src": "traingle_map.png",
            "top": "244dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxMapTemplate.add(FlexContainer0bb561057974747, ImgTraingle);
        return flxMapTemplate;
    }
})