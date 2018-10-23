define("FrmComments", function() {
    return function(controller) {
        function addWidgetsFrmComments() {
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
            var FlxScrollContent = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "93%",
                "horizontalScrollIndicator": true,
                "id": "FlxScrollContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0b30dcccba9b941",
                "top": "7%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            FlxScrollContent.setDefaultUnit(kony.flex.DP);
            var FlxInfoComment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20%",
                "id": "FlxInfoComment",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxInfoComment.setDefaultUnit(kony.flex.DP);
            var LblTitleComment = new kony.ui.Label({
                "id": "LblTitleComment",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0ia6245774c5548",
                "text": "We Want to hear from you!",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var LblDescriptionComment = new kony.ui.Label({
                "id": "LblDescriptionComment",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0e24a2129ad284c",
                "text": "Please help us to keep improving our app by answering a few questions.  No personal information will be collected from your responses and all your answers are anonymous",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "28%",
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            FlxInfoComment.add(LblTitleComment, LblDescriptionComment);
            var FlxFirtsQuestion = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlxFirtsQuestion",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxFirtsQuestion.setDefaultUnit(kony.flex.DP);
            var LblFirstQuestionTitle = new kony.ui.Label({
                "centerX": "50%",
                "id": "LblFirstQuestionTitle",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0h5bb390cbdd04b",
                "text": "Were you able to find what you were looking for?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var FlxQuestionYes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestionYes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_ja214ac513ca466ebbcaef78565d889e,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "15dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestionYes.setDefaultUnit(kony.flex.DP);
            var BtnFirstQuestionYes = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnFirstQuestionYes",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "Yes",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlxClickQuestionYes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestionYes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_ef723496566b4081b7d3737995d471fa,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestionYes.setDefaultUnit(kony.flex.DP);
            FlxClickQuestionYes.add();
            FlxQuestionYes.add(BtnFirstQuestionYes, FlxClickQuestionYes);
            var FlxQuestionNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestionNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_c972a6f4833a417eb3b84d45de6f52b2,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestionNo.setDefaultUnit(kony.flex.DP);
            var BtnFirstQuestionNo = new kony.ui.Button({
                "centerX": "50.04%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnFirstQuestionNo",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "No",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlxClickQuestionNo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestionNo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_b7290c5dc0a3414baa3a6cb87267b08c,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestionNo.setDefaultUnit(kony.flex.DP);
            FlxClickQuestionNo.add();
            FlxQuestionNo.add(BtnFirstQuestionNo, FlxClickQuestionNo);
            var FlxQuestionLoking = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "26dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestionLoking",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_e0917c17378240759e94c62fbf590b0e,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestionLoking.setDefaultUnit(kony.flex.DP);
            var BtnFirstQuestionLoking = new kony.ui.Button({
                "bottom": "26dp",
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnFirstQuestionLoking",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "I wasn't looking for anything specific",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlxClickQuestionLoking = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestionLoking",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_f1a9df19b75d433b97eb7b849123cbc4,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestionLoking.setDefaultUnit(kony.flex.DP);
            FlxClickQuestionLoking.add();
            FlxQuestionLoking.add(BtnFirstQuestionLoking, FlxClickQuestionLoking);
            FlxFirtsQuestion.add(LblFirstQuestionTitle, FlxQuestionYes, FlxQuestionNo, FlxQuestionLoking);
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
            var FlxQuestion2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlxQuestion2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion2.setDefaultUnit(kony.flex.DP);
            var FblQuestion2Title = new kony.ui.Label({
                "centerX": "50%",
                "id": "FblQuestion2Title",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0h5bb390cbdd04b",
                "text": "Was this app helpful?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var FlxQuestion2Very = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion2Very",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_b72c4c22f34c4554b312d89f50a5785b,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "15dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion2Very.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion2Very = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion2Very",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_f0d21148ff36453fae635d6bc51f6fe5,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion2Very.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion2Very.add();
            var BtnQuestion2Very = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion2Very",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "Very",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion2Very.add(FlxClickQuestion2Very, BtnQuestion2Very);
            var FlxQuestion2Somewhat = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion2Somewhat",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_ab663effa27a4af48bbe2f1cf2e17fe0,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion2Somewhat.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion2Somewhat = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion2Somewhat",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_d4c98c95efda469bb253dba76bc12d9d,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion2Somewhat.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion2Somewhat.add();
            var BtnQuestion2Somewhat = new kony.ui.Button({
                "centerX": "50.04%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion2Somewhat",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "Somewhat",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion2Somewhat.add(FlxClickQuestion2Somewhat, BtnQuestion2Somewhat);
            var FlxQuestion2NotVery = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion2NotVery",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_a1e62e9fe556438b979375d166b6eb34,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion2NotVery.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion2Notvery = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion2Notvery",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_b2476e06c8f14f69aa505c4e00aa8494,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion2Notvery.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion2Notvery.add();
            var BtnQuestion2NotVery = new kony.ui.Button({
                "bottom": "26dp",
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion2NotVery",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "Not very",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion2NotVery.add(FlxClickQuestion2Notvery, BtnQuestion2NotVery);
            var FlxQuestion2NotAll = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "26dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion2NotAll",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_af8e3213eb444e049674ac411e7180ce,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion2NotAll.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion2NotAll = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion2NotAll",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_i0bb504eb5804bdcb2d1a772c79706fd,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion2NotAll.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion2NotAll.add();
            var BtnQuestion2NotAll = new kony.ui.Button({
                "bottom": "26dp",
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion2NotAll",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "Not at all",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion2NotAll.add(FlxClickQuestion2NotAll, BtnQuestion2NotAll);
            FlxQuestion2.add(FblQuestion2Title, FlxQuestion2Very, FlxQuestion2Somewhat, FlxQuestion2NotVery, FlxQuestion2NotAll);
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
            var FlxQuestion3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlxQuestion3",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion3.setDefaultUnit(kony.flex.DP);
            var FblQuestion3Title = new kony.ui.Label({
                "centerX": "50%",
                "id": "FblQuestion3Title",
                "isVisible": true,
                "skin": "CopydefLabel0h5bb390cbdd04b",
                "text": "What part(s) of this app did you find the most helpful?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var LblQuetion3Description = new kony.ui.Label({
                "centerX": "49%",
                "id": "LblQuetion3Description",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0bbe78c63fa7149",
                "text": "You may check more than one option.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var FlxQuestion3Button = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "26dp",
                "clipBounds": true,
                "id": "FlxQuestion3Button",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion3Button.setDefaultUnit(kony.flex.DP);
            var FlxQuestionButton = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlxQuestionButton",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "5dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            FlxQuestionButton.setDefaultUnit(kony.flex.DP);
            var FlxQuestion3Basics = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion3Basics",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_b29bac0f74ba4d24bd00cef359723207,
                "right": "4%",
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "15dp",
                "width": "76%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion3Basics.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion3Basics = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion3Basics",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_ba6a9c9e6957403795f660f3c6d49b86,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion3Basics.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion3Basics.add();
            var BtnQuestion3Basics = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion3Basics",
                "isVisible": true,
                "right": "0%",
                "skin": "SknBtnNoSelect",
                "text": "SNAP Basics",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion3Basics.add(FlxClickQuestion3Basics, BtnQuestion3Basics);
            var FlxQuestion3Benefits = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion3Benefits",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_j72ab326dfa54471979032281957410d,
                "right": "4%",
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "14dp",
                "width": "76%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion3Benefits.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion3Benefits = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion3Benefits",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_e8b5702094514a938c715b5cf70d190e,
                "skin": "slFbox",
                "top": "2dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion3Benefits.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion3Benefits.add();
            var BtnQuestion3Benefits = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion3Benefits",
                "isVisible": true,
                "right": "0%",
                "skin": "SknBtnNoSelect",
                "text": "Keeping SNAP Beneits",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion3Benefits.add(FlxClickQuestion3Benefits, BtnQuestion3Benefits);
            var FlxQuestion3Food = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion3Food",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_aeed6f03257741d59b0ce2051b49b995,
                "right": "4%",
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "76%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion3Food.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion3Food = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion3Food",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_e839d004fd424d2ea0b070ff712d29e2,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion3Food.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion3Food.add();
            var BtnQuestion3Food = new kony.ui.Button({
                "bottom": "26dp",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion3Food",
                "isVisible": true,
                "right": "0%",
                "skin": "SknBtnNoSelect",
                "text": "More Food Resources",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion3Food.add(FlxClickQuestion3Food, BtnQuestion3Food);
            var FlxQuestion3Near = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion3Near",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_c6ba587f6b4e47d4a71e8f3c8e9ac32c,
                "right": "4%",
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "76%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion3Near.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion3Near = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion3Near",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_h9efb1966f734f08b56fede0df14707c,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion3Near.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion3Near.add();
            var BtnQuestion3NearMe = new kony.ui.Button({
                "bottom": "0dp",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion3NearMe",
                "isVisible": true,
                "right": "0%",
                "skin": "SknBtnNoSelect",
                "text": "What’s Near Me",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion3Near.add(FlxClickQuestion3Near, BtnQuestion3NearMe);
            var FlxQuestion3Suspected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion3Suspected",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_d3d0c12cae3c4440b31e82a5033a13d1,
                "right": "4%",
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "76%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion3Suspected.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion3Suspected = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion3Suspected",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_ged410026b354c84bb30b91814e21b8c,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion3Suspected.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion3Suspected.add();
            var BtnQuestion3Suspected = new kony.ui.Button({
                "bottom": "0dp",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion3Suspected",
                "isVisible": true,
                "right": "0%",
                "skin": "SknBtnNoSelect",
                "text": "Report Suspected Fraud",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion3Suspected.add(FlxClickQuestion3Suspected, BtnQuestion3Suspected);
            FlxQuestionButton.add(FlxQuestion3Basics, FlxQuestion3Benefits, FlxQuestion3Food, FlxQuestion3Near, FlxQuestion3Suspected);
            var FlxQuestionButton2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlxQuestionButton2",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "188dp",
                "skin": "slFbox",
                "top": "5dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            FlxQuestionButton2.setDefaultUnit(kony.flex.DP);
            var FlxQuestion3Applying = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion3Applying",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_bee13e06b1d2473c88626a9ecc460c0a,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "15dp",
                "width": "76%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion3Applying.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion3Applying = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion3Applying",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_df56ef36b9d640618dc48b9917508a93,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion3Applying.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion3Applying.add();
            var BtnQuestion3Applying = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion3Applying",
                "isVisible": true,
                "left": "0%",
                "skin": "SknBtnNoSelect",
                "text": "Applying for SNAP ",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion3Applying.add(FlxClickQuestion3Applying, BtnQuestion3Applying);
            var FlxQuestion3Card = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion3Card",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_je184ed784294c79b7c19fe935475b6c,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "13dp",
                "width": "76%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion3Card.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion3Card = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion3Card",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_e6f1ea51437a43e29c0d1efb66bd622c,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion3Card.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion3Card.add();
            var BtnQuestion3Card = new kony.ui.Button({
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion3Card",
                "isVisible": true,
                "left": "0%",
                "skin": "SknBtnNoSelect",
                "text": "Using Your EBT Card",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion3Card.add(FlxClickQuestion3Card, BtnQuestion3Card);
            var FlxQuestion3Tips = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion3Tips",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_f52ad3bacd4e439a944a881a8a5f4e99,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "76%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion3Tips.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion3Tips = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion3Tips",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_e55769fed5e54e679704135c106e41d1,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion3Tips.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion3Tips.add();
            var BtnQuestion3Tips = new kony.ui.Button({
                "bottom": "26dp",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion3Tips",
                "isVisible": true,
                "left": "0%",
                "skin": "SknBtnNoSelect",
                "text": "SNAP  Smart Tips",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion3Tips.add(FlxClickQuestion3Tips, BtnQuestion3Tips);
            var FlxQuestion3Agency = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion3Agency",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_f8a57a8648a647198e76b935a542f7b3,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "76%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion3Agency.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion3Agency = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion3Agency",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_ebde1a68bd7a40319c2225e61e6a96cc,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion3Agency.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion3Agency.add();
            var BtnQuestion3Agency = new kony.ui.Button({
                "bottom": "26dp",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion3Agency",
                "isVisible": true,
                "left": "0%",
                "skin": "SknBtnNoSelect",
                "text": "County Agency Directory",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion3Agency.add(FlxClickQuestion3Agency, BtnQuestion3Agency);
            var FlxQuestion3Other = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion3Other",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "onClick": controller.AS_FlexContainer_d17c78fb09d642ffa72fa8a86218f83d,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "76%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion3Other.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion3Other = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion3Other",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_h834dd1a67c14372a220fb0ade46ca10,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion3Other.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion3Other.add();
            var BtnQuestion3Other = new kony.ui.Button({
                "bottom": "26dp",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion3Other",
                "isVisible": true,
                "left": "0%",
                "skin": "SknBtnNoSelect",
                "text": "Other",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion3Other.add(FlxClickQuestion3Other, BtnQuestion3Other);
            FlxQuestionButton2.add(FlxQuestion3Applying, FlxQuestion3Card, FlxQuestion3Tips, FlxQuestion3Agency, FlxQuestion3Other);
            FlxQuestion3Button.add(FlxQuestionButton, FlxQuestionButton2);
            FlxQuestion3.add(FblQuestion3Title, LblQuetion3Description, FlxQuestion3Button);
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
            var FlxQuestion4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlxQuestion4",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion4.setDefaultUnit(kony.flex.DP);
            var LblQuestion4Title = new kony.ui.Label({
                "centerX": "50%",
                "id": "LblQuestion4Title",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0h5bb390cbdd04b",
                "text": "Was this app easy to use?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var FlxQuestion4Very = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion4Very",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_e1419895896b4d1fb799d69c2390551b,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion4Very.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion4Very = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion4Very",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_a4c266593e32405791df54feb3c1572f,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion4Very.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion4Very.add();
            var BtnQuestion4Very = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion4Very",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "Very",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion4Very.add(FlxClickQuestion4Very, BtnQuestion4Very);
            var FlxQuestion4Somewhat = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "51%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion4Somewhat",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_b2f998c9d0d6409e985980310eb53d06,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion4Somewhat.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion4Somewhat = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion4Somewhat",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_e8ff3c4c81944f0fb345b03a10196251,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion4Somewhat.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion4Somewhat.add();
            var BtnQuestion4Somewhat = new kony.ui.Button({
                "centerX": "50.04%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion4Somewhat",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "Somewhat",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion4Somewhat.add(FlxClickQuestion4Somewhat, BtnQuestion4Somewhat);
            var FlxQuestion4NotVery = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "51%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion4NotVery",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_g313194b7b09497797c0c31b6f6b838e,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion4NotVery.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion4NotVery = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion4NotVery",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_j35ea866e0ca45a3a85f5c2a13d4dafa,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion4NotVery.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion4NotVery.add();
            var BtnQuestion4NotVery = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion4NotVery",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "Not very",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion4NotVery.add(FlxClickQuestion4NotVery, BtnQuestion4NotVery);
            var FlxQuestion4NotAll = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 26,
                "centerX": "51%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion4NotAll",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_h6e87fd2ca3d413cafcd4d7725dfceb6,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion4NotAll.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion4NotAll = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion4NotAll",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_c68439212d01490f9e96b2c0fada6032,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion4NotAll.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion4NotAll.add();
            var BtnQuestion4NotAll = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion4NotAll",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "Not at all",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion4NotAll.add(FlxClickQuestion4NotAll, BtnQuestion4NotAll);
            FlxQuestion4.add(LblQuestion4Title, FlxQuestion4Very, FlxQuestion4Somewhat, FlxQuestion4NotVery, FlxQuestion4NotAll);
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
            var FlxQuestion5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlxQuestion5",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion5.setDefaultUnit(kony.flex.DP);
            var LblQuestion5Title = new kony.ui.Label({
                "centerX": "50%",
                "id": "LblQuestion5Title",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0h5bb390cbdd04b",
                "text": "Will you use the app again?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var FlxQuestion5Yes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion5Yes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_jb05e52880514b209d42b0b12e2147a8,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "15dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion5Yes.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion5Yes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion5Yes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_ffa236a87fce4b75885eed2cd54b4125,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion5Yes.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion5Yes.add();
            var BtnQuestion5Yes = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion5Yes",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "Yes",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion5Yes.add(FlxClickQuestion5Yes, BtnQuestion5Yes);
            var FlxQuestion5No = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion5No",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_a255e54fddac4e63895e7d2c5fd33210,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion5No.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion5No = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion5No",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_f49483aa196e41dbb1234dd03722ef94,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion5No.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion5No.add();
            var BtnQuestion5No = new kony.ui.Button({
                "centerX": "50.04%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion5No",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "No",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion5No.add(FlxClickQuestion5No, BtnQuestion5No);
            var FlxQuestion5Maybe = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "26dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion5Maybe",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_d2fe95d740074a878dfedc8454c82791,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion5Maybe.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion5Maybe = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion5Maybe",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_f5ec840537c1407884ee1741762df76f,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion5Maybe.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion5Maybe.add();
            var BtnQuestion5Maybe = new kony.ui.Button({
                "bottom": "0dp",
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion5Maybe",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "Maybe",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion5Maybe.add(FlxClickQuestion5Maybe, BtnQuestion5Maybe);
            FlxQuestion5.add(LblQuestion5Title, FlxQuestion5Yes, FlxQuestion5No, FlxQuestion5Maybe);
            var FlxLineDivison5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4dp",
                "id": "FlxLineDivison5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c363ecd6a5aa46",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxLineDivison5.setDefaultUnit(kony.flex.DP);
            FlxLineDivison5.add();
            var FlxQuestion6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlxQuestion6",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion6.setDefaultUnit(kony.flex.DP);
            var LblQuestion6Title = new kony.ui.Label({
                "centerX": "50%",
                "id": "LblQuestion6Title",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0h5bb390cbdd04b",
                "text": "Will you use the app again?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var FlxQuestion6yes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion6yes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_a2f9081e77b94135a937f37920acaa19,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "15dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion6yes.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion6Yes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion6Yes",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_f5f26982ba80473abffc68a797bfa0d3,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion6Yes.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion6Yes.add();
            var BtnQuestion6Yes = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion6Yes",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "Yes",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion6yes.add(FlxClickQuestion6Yes, BtnQuestion6Yes);
            var FlxQuestion6No = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "26dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "47dp",
                "id": "FlxQuestion6No",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_b3cf201b4a81421fbc64017790b3c244,
                "skin": "CopyslFbox0d7bac2818a3245",
                "top": "11dp",
                "width": "80%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion6No.setDefaultUnit(kony.flex.DP);
            var FlxClickQuestion6No = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxClickQuestion6No",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3dp",
                "onClick": controller.AS_FlexContainer_g4acc78c03d3421dbf9c3a423b6e5fbc,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlxClickQuestion6No.setDefaultUnit(kony.flex.DP);
            FlxClickQuestion6No.add();
            var BtnQuestion6No = new kony.ui.Button({
                "centerX": "50.04%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion6No",
                "isVisible": true,
                "skin": "SknBtnNoSelect",
                "text": "No",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion6No.add(FlxClickQuestion6No, BtnQuestion6No);
            var LblQuestion6Happened = new kony.ui.Label({
                "id": "LblQuestion6Happened",
                "isVisible": true,
                "left": "11%",
                "skin": "CopydefLabel0f77117a8aeb241",
                "text": "If you did, what happened? ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "6dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var TxtAreaQuestion6 = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "bottom": 26,
                "focusSkin": "defTextAreaFocus",
                "height": "120dp",
                "id": "TxtAreaQuestion6",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "11%",
                "numberOfVisibleLines": 3,
                "placeholder": "Tell us what happended...",
                "skin": "CopydefTextAreaNormal0a8de3fe255af43",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "5dp",
                "width": "79%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            FlxQuestion6.add(LblQuestion6Title, FlxQuestion6yes, FlxQuestion6No, LblQuestion6Happened, TxtAreaQuestion6);
            var FlxLineDivison6 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "4dp",
                "id": "FlxLineDivison6",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0c363ecd6a5aa46",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxLineDivison6.setDefaultUnit(kony.flex.DP);
            FlxLineDivison6.add();
            var FlxQuestion7 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "FlxQuestion7",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxQuestion7.setDefaultUnit(kony.flex.DP);
            var blQuestion7Title = new kony.ui.Label({
                "centerX": "50%",
                "id": "blQuestion7Title",
                "isVisible": true,
                "skin": "CopydefLabel0h5bb390cbdd04b",
                "text": "Do you have any suggestions for improving this app?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "20dp",
                "width": "88%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var TxtAreaQuestion7 = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "bottom": 26,
                "focusSkin": "defTextAreaFocus",
                "height": "120dp",
                "id": "TxtAreaQuestion7",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "11%",
                "numberOfVisibleLines": 3,
                "placeholder": "Tell us what happended...",
                "skin": "CopydefTextAreaNormal0a8de3fe255af43",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "5dp",
                "width": "79%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            var BtnQuestion7Send = new kony.ui.Button({
                "bottom": "26dp",
                "centerX": "50.04%",
                "focusSkin": "defBtnFocus",
                "height": "47dp",
                "id": "BtnQuestion7Send",
                "isVisible": true,
                "skin": "SknBtnSelect",
                "text": "Send",
                "top": "-6dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlxQuestion7.add(blQuestion7Title, TxtAreaQuestion7, BtnQuestion7Send);
            FlxScrollContent.add(FlxInfoComment, FlxFirtsQuestion, FlxLineDivisor, FlxQuestion2, FlxLineDivisor2, FlxQuestion3, FlxLineDivisor3, FlxQuestion4, FlxLineDivisor4, FlxQuestion5, FlxLineDivison5, FlxQuestion6, FlxLineDivison6, FlxQuestion7);
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
            FlxHeader.Background.src = "back_darkgreen.png";
            FlxHeader.Image0i7393cecf87540.src = "nav_down_darkgreen.png";
            FlxHeader.LblHome.text = "COMMENT ON THIS APP";
            FlxHeader.search.isVisible = false;
            FlxContainer.add(FlxScrollContent, FlxHeader);
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
            Flxmenu.BackgroundFooter.src = "back_darkgreen.png";
            Flxmenu.isVisible = false;
            Flxmenu.ImgUp.src = "nav_up_darkgreen.png";
            Flxmenu.LblHomeDescription.text = "COMMENT ON THIS APP";
            this.add(FlxContainer, Flxmenu);
        };
        return [{
            "addWidgets": addWidgetsFrmComments,
            "enabledForIdleTimeout": false,
            "id": "FrmComments",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "CopyslForm0dd9636f8ed084a"
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