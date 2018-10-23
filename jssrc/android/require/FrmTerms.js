define("FrmTerms", function() {
    return function(controller) {
        function addWidgetsFrmTerms() {
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
                "skin": "CopyslFbox0a7099ce713eb4f",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxContent.setDefaultUnit(kony.flex.DP);
            var FlxScrollContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "FlxScrollContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxScrollContainer.setDefaultUnit(kony.flex.DP);
            var FlxTerms = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlxTerms",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxTerms.setDefaultUnit(kony.flex.DP);
            var LblTitle = new kony.ui.Label({
                "id": "LblTitle",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0e58fc35280b34a",
                "text": "Terms of Use",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var LblTermsDescription = new kony.ui.Label({
                "id": "LblTermsDescription",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0j00087a811014e",
                "text": "Visitors to this mobile application (app) should be aware of the following information. ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "43dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var LblTermsDescription2 = new kony.ui.Label({
                "bottom": "26dp",
                "id": "LblTermsDescription2",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0j00087a811014e",
                "text": "This app is intended for informational and educational purposes only.  It is not, and is not intended, to advise any user about their specific eligibility for SNAP or any other state or federal benefits.  Users should consult with their caseworker to determine eligibility or to answer fact-specific questions.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "85dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            FlxTerms.add(LblTitle, LblTermsDescription, LblTermsDescription2);
            var FlxLineDivisor = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4dp",
                "id": "FlxLineDivisor",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c363ecd6a5aa46",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxLineDivisor.setDefaultUnit(kony.flex.DP);
            FlxLineDivisor.add();
            var FlxCopyright = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "26dp",
                "clipBounds": true,
                "id": "FlxCopyright",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "4dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxCopyright.setDefaultUnit(kony.flex.DP);
            var LblTitleCopyRight = new kony.ui.Label({
                "id": "LblTitleCopyRight",
                "isVisible": true,
                "left": "4.00%",
                "skin": "CopydefLabel0e58fc35280b34a",
                "text": "Copyright",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var RichText0fb4e3ab0ef664d = new kony.ui.RichText({
                "id": "RichText0fb4e3ab0ef664d",
                "isVisible": true,
                "left": "4%",
                "linkSkin": "defRichTextLink",
                "skin": "CopydefRichTextNormal0e9942f6bbe3140",
                "text": "Use of the material on this app for any purpose other than to promote information and education may constitute a copyright infringement.  This app and its contents may not be reproduced or used for unauthorized purposes without prior written permission, which may be obtained by submitting a request to <span style=\"color:#2d78ff\">egal@odjfs.ohio.gov.</span> This mobile app may contain copyrighted work created under contract with government agencies, etc. ",
                "top": "54dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxCopyright.add(LblTitleCopyRight, RichText0fb4e3ab0ef664d);
            var FlxLineDivisor2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4dp",
                "id": "FlxLineDivisor2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c363ecd6a5aa46",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxLineDivisor2.setDefaultUnit(kony.flex.DP);
            FlxLineDivisor2.add();
            var FlxPrivacy = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlxPrivacy",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxPrivacy.setDefaultUnit(kony.flex.DP);
            var LblTitlePrivacy = new kony.ui.Label({
                "id": "LblTitlePrivacy",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0e58fc35280b34a",
                "text": "Privacy Notice",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "24dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var LblPrivacyDescription = new kony.ui.Label({
                "id": "LblPrivacyDescription",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0e51c3f1ec6514d",
                "text": "What we collect",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var LblTitle2Privacy = new kony.ui.Label({
                "bottom": "26dp",
                "id": "LblTitle2Privacy",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0j00087a811014e",
                "text": "This app will not collect any personal, sensitive data, including any EBT account numbers, social security numbers, or other personally identifying information. This app will use log files and web cookies to capture generic, internet-user information each time you view a page on this app. We may collect information about your location in order to assist you in using our services better.  For example, using GPS or your IP address or even detecting cell towers nearby, we can direct you to the closest farmers’ market where EBT is accepted. ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "17dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var LblTitleinformation = new kony.ui.Label({
                "id": "LblTitleinformation",
                "isVisible": true,
                "left": "3.00%",
                "skin": "CopydefLabel0e51c3f1ec6514d",
                "text": "What we do with the information collected",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "-10dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var LblInformation = new kony.ui.Label({
                "bottom": "26dp",
                "id": "LblInformation",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0j00087a811014e",
                "text": "This app will not collect any personal, sensitive data, including any EBT account numbers, social security numbers, or other personally identifying information. This app will use log files and web cookies to capture generic, internet-user information each time you view a page on this app. ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var LblInformation2 = new kony.ui.Label({
                "bottom": "26dp",
                "id": "LblInformation2",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0j00087a811014e",
                "text": "We may collect information about your location in order to assist you in using our services better.  For example, using GPS or your IP address or even detecting cell towers nearby, we can direct you to the closest farmers’ market where EBT is accepted.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            FlxPrivacy.add(LblTitlePrivacy, LblPrivacyDescription, LblTitle2Privacy, LblTitleinformation, LblInformation, LblInformation2);
            var FlxLineDivisor3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4dp",
                "id": "FlxLineDivisor3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c363ecd6a5aa46",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxLineDivisor3.setDefaultUnit(kony.flex.DP);
            FlxLineDivisor3.add();
            var FlexContainer0iffe17994dda45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlexContainer0iffe17994dda45",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainer0iffe17994dda45.setDefaultUnit(kony.flex.DP);
            var CopyLblTitlePrivacy0cbff933a54e249 = new kony.ui.Label({
                "id": "CopyLblTitlePrivacy0cbff933a54e249",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0e58fc35280b34a",
                "text": "Non-discrimination statement",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "24dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Label0a249be73b60549 = new kony.ui.Label({
                "id": "Label0a249be73b60549",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0id1a3853f3d14c",
                "text": "The U.S. Department of Agriculture (USDA) prohibits discrimination in all of its programs and activities on the basis of race, color, national origin, age, disability, and where applicable, sex (including gender identity and expression), marital status, familial status, parental status, religion, sexual orientation, political beliefs, genetic information, reprisal, or because all or part of an individual’s income is derived from and public assistance program.  (Not all prohibited bases apply to all programs.)  Persons with disabilities who require alternative means of communication of program information (Braille, large print, audiotape, etc.) should contact USDA’S TARGET Center at (202) 720-2600 (Voice and TDD)To file a complaint of discrimination, write to USDA, Assistant Secretary for Civil Rights, Office of the Assistant Secretary for Civil Rights, 1400 Independence Avenue, S.W., Stop 9410, Washington, D.C. 20250-9410, or call toll-free at (866) 632-9992 (English) or (800) 877-8339 (TDD) or (866) 377-8642 (English Federal-relay) or (800) 845-6136 (Spanish Federal-relay).  USDA is an equal opportunity provider and employer. In accordance with Federal law and U.S. Department of Agriculture policy, this institution is prohibited from discriminating on the basis of race, color, national origin, sex, age or disability.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "29dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var RichText0b1ae3d718d234d = new kony.ui.RichText({
                "bottom": 26,
                "id": "RichText0b1ae3d718d234d",
                "isVisible": true,
                "left": "4%",
                "linkSkin": "defRichTextLink",
                "skin": "CopydefRichTextNormal0a42e95ecf4804a",
                "text": "If you wish to file a Civil Rights program complaint of discrimination, complete the USDA Program Discrimination Complaint Form, found online at \n <span  style=\"color:#2d78ff\">http://www.ascr.usda.gov/complaint_filing_cust.html</span> ,or at any USDA office, or call (866) 632-9992 to request this form.  You may also write a letter containing all of the information requested in the form.  Send your completed complaint form or letter to us by mail at U.S. Department of Agriculture, Director, Office of Adjudication, 1400 Independence Avenue, S.W., Washington, D.C. 20250-9410, by fax (202)690-7442 or email  <span style=\"color:#2d78ff\">program.intake@usda.gov</span> USDA is an equal opportunity provider and employers.",
                "top": "24dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0iffe17994dda45.add(CopyLblTitlePrivacy0cbff933a54e249, Label0a249be73b60549, RichText0b1ae3d718d234d);
            var FlxLineDivisor4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4dp",
                "id": "FlxLineDivisor4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c363ecd6a5aa46",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxLineDivisor4.setDefaultUnit(kony.flex.DP);
            FlxLineDivisor4.add();
            var CopyFlxTerms0edc73bd667864e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "CopyFlxTerms0edc73bd667864e",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyFlxTerms0edc73bd667864e.setDefaultUnit(kony.flex.DP);
            var CopyLblTitle0c2dc3ce09f1a45 = new kony.ui.Label({
                "id": "CopyLblTitle0c2dc3ce09f1a45",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0e58fc35280b34a",
                "text": "Funding",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "24dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLblTermsDescription0ib39678f9f5145 = new kony.ui.Label({
                "bottom": "26dp",
                "id": "CopyLblTermsDescription0ib39678f9f5145",
                "isVisible": true,
                "left": "4%",
                "skin": "CopydefLabel0j00087a811014e",
                "text": "This project has been funded at least in part with Federal funds from the U.S. Department of Agriculture. The contents of this publication do not necessarily reflect the views or policies of the U.S. Department of Agriculture, nor does the mention of trade names, commercial products, or organizations imply endorsement by the U.S. Government.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "16dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyFlxTerms0edc73bd667864e.add(CopyLblTitle0c2dc3ce09f1a45, CopyLblTermsDescription0ib39678f9f5145);
            FlxScrollContainer.add(FlxTerms, FlxLineDivisor, FlxCopyright, FlxLineDivisor2, FlxPrivacy, FlxLineDivisor3, FlexContainer0iffe17994dda45, FlxLineDivisor4, CopyFlxTerms0edc73bd667864e);
            FlxContent.add(FlxScrollContainer);
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
            FlxHeader.LblHome.centerX = "50.00%";
            FlxHeader.LblHome.centerY = "41.00%";
            FlxHeader.LblHome.text = "PRIVACY & TERMS";
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
            Flxmenu.isVisible = false;
            Flxmenu.LblHomeDescription.text = "PRIVACY & TERMS";
            this.add(FlxContainer, Flxmenu);
        };
        return [{
            "addWidgets": addWidgetsFrmTerms,
            "enabledForIdleTimeout": false,
            "id": "FrmTerms",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0a206889c478843"
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