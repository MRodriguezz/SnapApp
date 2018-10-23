define("FrmDirectory", function() {
    return function(controller) {
        function addWidgetsFrmDirectory() {
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
            var FlexContainer0e2fb9e4669a843 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93%",
                "id": "FlexContainer0e2fb9e4669a843",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0gdcf6bf80a584d",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0e2fb9e4669a843.setDefaultUnit(kony.flex.DP);
            var segDirectory = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [
                    [{
                            "lblHeaderDirectory": "A"
                        },
                        [{
                            "NameDirectory": "Allen"
                        }, {
                            "NameDirectory": "Ashland"
                        }, {
                            "NameDirectory": "Athens"
                        }, {
                            "NameDirectory": "auglaize"
                        }, {
                            "NameDirectory": "Alf"
                        }]
                    ],
                    [{
                            "lblHeaderDirectory": "B"
                        },
                        [{
                            "NameDirectory": "Belmont"
                        }, {
                            "NameDirectory": "Brown"
                        }, {
                            "NameDirectory": "Butler"
                        }]
                    ],
                    [{
                            "lblHeaderDirectory": "C"
                        },
                        [{
                            "NameDirectory": "Carrol"
                        }, {
                            "NameDirectory": "Champaing"
                        }, {
                            "NameDirectory": "Clark"
                        }, {
                            "NameDirectory": "char"
                        }]
                    ]
                ],
                "groupCells": false,
                "height": "100%",
                "id": "segDirectory",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_fbbce89efa844791ba5c4aca4e4bd617,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0c6ac0fafcd2941",
                "rowTemplate": "FlxContet",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "sectionHeaderTemplate": "FlxConten",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "FlexContainer0cc96ed320b8e48": "FlexContainer0cc96ed320b8e48",
                    "FlexContainer0hd2bf2967ab24c": "FlexContainer0hd2bf2967ab24c",
                    "FlxConten": "FlxConten",
                    "FlxContet": "FlxContet",
                    "NameDirectory": "NameDirectory",
                    "lblHeaderDirectory": "lblHeaderDirectory"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0e2fb9e4669a843.add(segDirectory);
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
            FlxHeader.LblHome.text = "COUNTY AGENCY DIRECTORY";
            FlxContainer.add(FlexContainer0e2fb9e4669a843, FlxHeader);
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
            Flxmenu.LblHomeDescription.text = "COUNTY AGENCY DIRECTORY";
            this.add(FlxContainer, Flxmenu);
        };
        return [{
            "addWidgets": addWidgetsFrmDirectory,
            "enabledForIdleTimeout": false,
            "id": "FrmDirectory",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0b5c48f3aa49140"
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