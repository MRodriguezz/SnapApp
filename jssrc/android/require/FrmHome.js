define("FrmHome", function() {
    return function(controller) {
        function addWidgetsFrmHome() {
            this.setDefaultUnit(kony.flex.DP);
            var FlxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0jb494706ed1645",
                "top": "0dp",
                "width": "100.08%",
                "zIndex": 1
            }, {}, {});
            FlxContainer.setDefaultUnit(kony.flex.DP);
            var FlxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "93%",
                "id": "FlxContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "skin": "CopyslFbox0af10da62a31443",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxContent.setDefaultUnit(kony.flex.DP);
            var SgmHome = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "Image0a344106f7a1a44": "ic_basics.png",
                    "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                    "LblHomeName": "SNAP Basics",
                    "LblHomeName2": "Learn about the programs"
                }, {
                    "Image0a344106f7a1a44": "nav_applying.png",
                    "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                    "LblHomeName": "Applying for SNAP",
                    "LblHomeName2": "How, what & Where?"
                }, {
                    "Image0a344106f7a1a44": "nav_keeping.png",
                    "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                    "LblHomeName": "Keeping SNAP Benefits",
                    "LblHomeName2": "How Reporting Affects Benefits"
                }, {
                    "Image0a344106f7a1a44": "nav_card.png",
                    "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                    "LblHomeName": "Using Your EBT Card",
                    "LblHomeName2": "Shopping, Segurity & Customer Service"
                }, {
                    "Image0a344106f7a1a44": "nav_food_resources.png",
                    "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                    "LblHomeName": "More Food Resources",
                    "LblHomeName2": "Food Programs, Pantries & Farmers' Markets"
                }, {
                    "Image0a344106f7a1a44": "nav_tips.png",
                    "Image0e230499ae4fb4d": "ic_chevron_right_grey.png",
                    "LblHomeName": "SNAP Smart Tips",
                    "LblHomeName2": "Ge The Most Out of Your Benefits"
                }],
                "groupCells": false,
                "id": "SgmHome",
                "isVisible": true,
                "left": "0dp",
                "maxWidth": "100%",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_a25e3eb440314bd08a1e36fe25e78098,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "Copyseg0fcb5ae96f4574f",
                "rowSkin": "Copyseg0dd51400560e54f",
                "rowTemplate": "FlexContent",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "b0b0b00f",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "FlexContainer0a68915ab028646": "FlexContainer0a68915ab028646",
                    "FlexContent": "FlexContent",
                    "Image0a344106f7a1a44": "Image0a344106f7a1a44",
                    "Image0e230499ae4fb4d": "Image0e230499ae4fb4d",
                    "LblHomeName": "LblHomeName",
                    "LblHomeName2": "LblHomeName2"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxContent.add(SgmHome);
            var FlxHeader = new Header1.FlxHeader({
                "clipBounds": true,
                "height": "8.50%",
                "id": "FlxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "CopyslFbox0a956e973ffb743",
                "top": "0dp",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            FlxHeader.Background.isVisible = false;
            FlxHeader.Background.src = "back_header.png";
            FlxHeader.isVisible = true;
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
            Flxmenu.BackgroundFooter.src = "corinto_header.png";
            Flxmenu.isVisible = false;
            Flxmenu.Segment0a79a394297f846.data = [{
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
                "LblName": "Help"
            }];
            Flxmenu.Segment0a79a394297f846.isVisible = true;
            Flxmenu.Segment0a79a394297f846.left = "0dp";
            Flxmenu.Segment0a79a394297f846.top = "0dp";
            this.add(FlxContainer, Flxmenu);
        };
        return [{
            "addWidgets": addWidgetsFrmHome,
            "enabledForIdleTimeout": false,
            "id": "FrmHome",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_c9ac8e55f74a4bff85061094fb8b8824,
            "skin": "CopyslForm0dc294f9b895249"
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