define(function() {
    return function(controller) {
        var FlxMenu2 = new kony.ui.FlexContainer({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "FlxMenu2",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0add2aa3a477b47",
            "top": "-86%",
            "width": "100%"
        }, {}, {});
        FlxMenu2.setDefaultUnit(kony.flex.DP);
        var Segment0a79a394297f846 = new kony.ui.SegmentedUI2({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50.04%",
            "data": [{
                "Image0c88a9c534e8344": "nav_home.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "",
                "LblName": "Home"
            }, {
                "Image0c88a9c534e8344": "ic_basics.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "",
                "LblName": "SNAP Basics"
            }, {
                "Image0c88a9c534e8344": "nav_applying.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "",
                "LblName": "Applying for SNAP"
            }, {
                "Image0c88a9c534e8344": "nav_keeping.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "",
                "LblName": "Keeping SNAP Benefits"
            }, {
                "Image0c88a9c534e8344": "nav_card.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "",
                "LblName": "Using Your EBT Card"
            }, {
                "Image0c88a9c534e8344": "nav_food_resources.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "",
                "LblName": "More Food Resources"
            }, {
                "Image0c88a9c534e8344": "nav_tips.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "Label",
                "LblName": "SNAP Smart Tips"
            }, {
                "Image0c88a9c534e8344": "nav_county_directory.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "",
                "LblName": "County Agency Directory"
            }, {
                "Image0c88a9c534e8344": "nav_near.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "",
                "LblName": "What's near me?"
            }, {
                "Image0c88a9c534e8344": "nav_notes.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "",
                "LblName": "My Notes"
            }, {
                "Image0c88a9c534e8344": "nav_report.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "Label",
                "LblName": "Report Suspected Fraud"
            }, {
                "Image0c88a9c534e8344": "nav_comment.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "",
                "LblName": "Comment on this App"
            }, {
                "Image0c88a9c534e8344": "nav_settings.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "",
                "LblName": "Settings"
            }, {
                "Image0c88a9c534e8344": "nav_help.png",
                "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                "Label0de7590c086f34a": "Label",
                "LblName": "How to Use this App"
            }],
            "groupCells": false,
            "height": "88.87%",
            "id": "Segment0a79a394297f846",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_e70ab2e27672414a86f5bcd6adce0a3a,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "Copyseg0b45f6f7bfabc4a",
            "rowTemplate": "FlxContent",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorRequired": false,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "FlexContainer0aff3c7fe796548": "FlexContainer0aff3c7fe796548",
                "FlxContent": "FlxContent",
                "Image0c88a9c534e8344": "Image0c88a9c534e8344",
                "Image0e230499ae4fb4d": "Image0e230499ae4fb4d",
                "Label0de7590c086f34a": "Label0de7590c086f34a",
                "LblName": "LblName"
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var FlexContainer0f0a9504ca42e4c = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "33dp",
            "id": "FlexContainer0f0a9504ca42e4c",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": 0,
            "skin": "CopyslFbox0jcb2ffa045a74d",
            "top": "86.5%",
            "width": "99.95%",
            "zIndex": 2
        }, {}, {});
        FlexContainer0f0a9504ca42e4c.setDefaultUnit(kony.flex.DP);
        var Label0fc7c9a5fb7184d = new kony.ui.Label({
            "centerY": "54%",
            "id": "Label0fc7c9a5fb7184d",
            "isVisible": true,
            "left": "3%",
            "skin": "CopydefLabel0h91cddb5049145",
            "text": "Privacy & Terms",
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
        var Label0f3a096890e024c = new kony.ui.Label({
            "id": "Label0f3a096890e024c",
            "isVisible": true,
            "left": "319dp",
            "skin": "CopydefLabel0i2dfa04e0bbd40",
            "text": "V1.0.0",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "11dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        FlexContainer0f0a9504ca42e4c.add(Label0fc7c9a5fb7184d, Label0f3a096890e024c);
        var flxFooter = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "9.50%",
            "id": "flxFooter",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onClick": controller.AS_FlexContainer_a03d385d1a2841f88247ffecd03eb5c1,
            "skin": "CopyslFbox0j77e0d470c1948",
            "width": "100%",
            "zIndex": 2
        }, {}, {});
        flxFooter.setDefaultUnit(kony.flex.DP);
        var BackgroundFooter = new kony.ui.Image2({
            "height": "119dp",
            "id": "BackgroundFooter",
            "isVisible": false,
            "left": "0dp",
            "skin": "slImage",
            "src": "back_header.png",
            "top": "-14dp",
            "width": "377dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var ImgUpMenu = new kony.ui.Image2({
            "centerX": "50.31%",
            "centerY": "22.53%",
            "height": "24dp",
            "id": "ImgUpMenu",
            "isVisible": true,
            "left": "175dp",
            "skin": "slImage",
            "src": "nav_notch_up_red.png",
            "top": "28dp",
            "width": "24dp",
            "zIndex": 2
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var FlxBackground = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "85.50%",
            "id": "FlxBackground",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "SknFlxRed",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        FlxBackground.setDefaultUnit(kony.flex.DP);
        var searchDescription = new kony.ui.Image2({
            "centerX": "95%",
            "centerY": "52%",
            "height": "30dp",
            "id": "searchDescription",
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
        var LblHomeDescription = new kony.ui.Label({
            "centerX": "50.05%",
            "centerY": "43.82%",
            "id": "LblHomeDescription",
            "isVisible": true,
            "skin": "CopydefLabel0ba1f6d0cf0de45",
            "text": "SNAP Basics",
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
        var LblHomeDescription2 = new kony.ui.Label({
            "centerX": "49%",
            "centerY": "73.82%",
            "id": "LblHomeDescription2",
            "isVisible": true,
            "skin": "CopydefLabel0f471c8403cec46",
            "text": "Learn about the programs",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "85%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        FlxBackground.add(searchDescription, LblHomeDescription, LblHomeDescription2);
        var FlxClickTerms = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "31dp",
            "id": "FlxClickTerms",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "6dp",
            "onClick": controller.AS_FlexContainer_fbff876ffe4a4387a25b0d776e359e15,
            "skin": "slFbox",
            "top": "-24dp",
            "width": "30.67%",
            "zIndex": 1
        }, {}, {});
        FlxClickTerms.setDefaultUnit(kony.flex.DP);
        FlxClickTerms.add();
        flxFooter.add(BackgroundFooter, ImgUpMenu, FlxBackground, FlxClickTerms);
        var FlexContainer0bc66d251265941 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "91%",
            "clipBounds": true,
            "height": "28dp",
            "id": "FlexContainer0bc66d251265941",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "skin": "CopyslFbox0ba6c32fd72c846",
            "top": "558dp",
            "width": "100.00%",
            "zIndex": 1
        }, {}, {});
        FlexContainer0bc66d251265941.setDefaultUnit(kony.flex.DP);
        FlexContainer0bc66d251265941.add();
        FlxMenu2.add(Segment0a79a394297f846, FlexContainer0f0a9504ca42e4c, flxFooter, FlexContainer0bc66d251265941);
        return FlxMenu2;
    }
})