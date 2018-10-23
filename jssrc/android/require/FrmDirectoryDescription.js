define("FrmDirectoryDescription", function() {
    return function(controller) {
        function addWidgetsFrmDirectoryDescription() {
            this.setDefaultUnit(kony.flex.DP);
            var FlxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0eb36803e733841",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxContainer.setDefaultUnit(kony.flex.DP);
            var FlexContainer0eee0a54245734b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "93%",
                "id": "FlexContainer0eee0a54245734b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "top": "7%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlexContainer0eee0a54245734b.setDefaultUnit(kony.flex.DP);
            var FlexContainer0f1a5ad30d66f42 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "0dp",
                "clipBounds": true,
                "id": "FlexContainer0f1a5ad30d66f42",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "right": "0dp",
                "skin": "CopyslFbox0b43cb679319943",
                "top": "65%",
                "zIndex": 2
            }, {}, {});
            FlexContainer0f1a5ad30d66f42.setDefaultUnit(kony.flex.DP);
            var lblAddress = new kony.ui.Label({
                "id": "lblAddress",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0bef02c025b5f47",
                "text": "15 W. Fourth ST., AShland, OH 44805-21384",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "96%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyFlexContainer0h191f495005643 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "CopyFlexContainer0h191f495005643",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_cc5f64fdff2542778a59e26e2839bd34,
                "right": "0dp",
                "skin": "slFbox",
                "top": "1dp",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0h191f495005643.setDefaultUnit(kony.flex.DP);
            var lblPhoneTitle = new kony.ui.Label({
                "id": "lblPhoneTitle",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0a65d8052fc2043",
                "text": "Phone/Ext:",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var FlexContainer0e1a119faf64a49 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "22dp",
                "id": "FlexContainer0e1a119faf64a49",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "105dp",
                "onClick": controller.AS_FlexContainer_dceb2587a0c349d5b8af4b406aaf179b,
                "right": "1dp",
                "skin": "slFbox",
                "top": "0dp",
                "zIndex": 1
            }, {}, {});
            FlexContainer0e1a119faf64a49.setDefaultUnit(kony.flex.DP);
            var lblPhone1 = new kony.ui.Label({
                "id": "lblPhone1",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0f97ba0ce072048",
                "text": "(937) 544-2371",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhoneNumberSeparator = new kony.ui.Label({
                "id": "lblPhoneNumberSeparator",
                "isVisible": false,
                "left": "2dp",
                "skin": "CopydefLabel0df0afcee82714b",
                "text": ",",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPhone2 = new kony.ui.Label({
                "id": "lblPhone2",
                "isVisible": false,
                "left": "5dp",
                "skin": "CopydefLabel0f97ba0ce072048",
                "text": "(937) 544-2371",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            FlexContainer0e1a119faf64a49.add(lblPhone1, lblPhoneNumberSeparator, lblPhone2);
            CopyFlexContainer0h191f495005643.add(lblPhoneTitle, FlexContainer0e1a119faf64a49);
            var flxFax = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxFax",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_a918308c3c644c7ba338657f3b4047f6,
                "right": "0dp",
                "skin": "slFbox",
                "top": "1dp",
                "zIndex": 1
            }, {}, {});
            flxFax.setDefaultUnit(kony.flex.DP);
            var lblFaxTitle = new kony.ui.Label({
                "id": "lblFaxTitle",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0abf575946c9744",
                "text": "Fax:",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblFax = new kony.ui.Label({
                "id": "lblFax",
                "isVisible": true,
                "left": "52dp",
                "right": "1dp",
                "skin": "CopydefLabel0bef02c025b5f47",
                "text": "(419) 2883-454 TTY: (419)282-545",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFax.add(lblFaxTitle, lblFax);
            var flxHours = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxHours",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_ef36573f6acb4083a64c3e4c5f14a64b,
                "right": "0dp",
                "skin": "slFbox",
                "top": "1dp",
                "zIndex": 1
            }, {}, {});
            flxHours.setDefaultUnit(kony.flex.DP);
            var lblHoursTitle = new kony.ui.Label({
                "id": "lblHoursTitle",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0b2c28a855d4648",
                "text": "Hours:",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblHours = new kony.ui.Label({
                "id": "lblHours",
                "isVisible": true,
                "left": "73dp",
                "right": "1dp",
                "skin": "CopydefLabel0gca6d42ff86f48",
                "text": "Mon-fri 7:30am 4:30PM",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHours.add(lblHoursTitle, lblHours);
            var flxWebsite = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxWebsite",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_j84f431d6dd14cff8730c23f12553607,
                "right": "0dp",
                "skin": "slFbox",
                "top": "1dp",
                "zIndex": 1
            }, {}, {});
            flxWebsite.setDefaultUnit(kony.flex.DP);
            var lblWebSiteTitle = new kony.ui.Label({
                "id": "lblWebSiteTitle",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0ccd60c0c6f7e4c",
                "text": "WebSite:",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblWebsite = new kony.ui.Label({
                "id": "lblWebsite",
                "isVisible": true,
                "left": "91dp",
                "right": "1dp",
                "skin": "CopydefLabel0f97ba0ce072048",
                "text": "www.ashland.org",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxWebsite.add(lblWebSiteTitle, lblWebsite);
            var LblNumber = new kony.ui.Label({
                "id": "LblNumber",
                "isVisible": false,
                "left": "107dp",
                "skin": "CopydefLabel0c82e3a61b85c4a",
                "text": "(800)98454-5465",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            FlexContainer0f1a5ad30d66f42.add(lblAddress, CopyFlexContainer0h191f495005643, flxFax, flxHours, flxWebsite, LblNumber);
            var CopyFlexContainer0iaa3014f84e644 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11%",
                "id": "CopyFlexContainer0iaa3014f84e644",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0b43cb679319943",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlexContainer0iaa3014f84e644.setDefaultUnit(kony.flex.DP);
            var lblAgencyName = new kony.ui.Label({
                "id": "lblAgencyName",
                "isVisible": true,
                "left": "4%",
                "right": "12dp",
                "skin": "CopydefLabel0b66f1e9d897142",
                "text": "CDJFS - County Deparment of Job and Family Services",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": "93%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyFlexContainer0iaa3014f84e644.add(lblAgencyName);
            var mapDirectoryDesc = new kony.ui.Map({
                "calloutWidth": 80,
                "defaultPinImage": "pinb.png",
                "height": "54%",
                "id": "mapDirectoryDesc",
                "isVisible": true,
                "left": "0dp",
                "provider": constants.MAP_PROVIDER_GOOGLE,
                "top": "11%",
                "width": "100%",
                "zIndex": 2
            }, {}, {
                "mode": constants.MAP_VIEW_MODE_NORMAL,
                "showZoomControl": true,
                "zoomLevel": 15
            });
            FlexContainer0eee0a54245734b.add(FlexContainer0f1a5ad30d66f42, CopyFlexContainer0iaa3014f84e644, mapDirectoryDesc);
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
            FlxHeader.Back.zIndex = 1;
            FlxHeader.Background.isVisible = false;
            FlxHeader.Background.src = "back_blue_header.png";
            FlxHeader.FlexContainer0b5c1313bf14043.centerY = "50%";
            FlxHeader.FlexContainer0b5c1313bf14043.isVisible = true;
            FlxHeader.FlexContainer0b5c1313bf14043.top = "1dp";
            FlxHeader.FlexContainer0b5c1313bf14043.zIndex = 2;
            FlxHeader.Image0i7393cecf87540.src = "nav_down_blue.png";
            FlxHeader.LblHome.isVisible = true;
            FlxHeader.LblHome.text = "COUNTY AGENCY DIRECTORY";
            FlxHeader.search.isVisible = false;
            FlxContainer.add(FlexContainer0eee0a54245734b, FlxHeader);
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
            "addWidgets": addWidgetsFrmDirectoryDescription,
            "enabledForIdleTimeout": false,
            "id": "FrmDirectoryDescription",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0e7c87c24550d4e"
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