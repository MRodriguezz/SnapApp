//Type your code here
var LabelNameHomeDescription = "z";
var LabelNameHomeDescription2 = "z";
// variable Buttom Comment
var ObjectCommentQuestion = {
    "Question1": {
        "BtnFirstQuestionYes": false,
        "BtnFirstQuestionNo": false,
        "BtnFirstQuestionLoking": false
    },
    "Question2": {
        "BtnQuestion2Very": false,
        "BtnQuestion2Somewhat": false,
        "BtnQuestion2NotVery": false,
        "BtnQuestion2NotAll": false
    },
    "Question3": {
        "BtnQuestion3Basics": false,
        "BtnQuestion3Benefits": false,
        "BtnQuestion3Food": false,
        "BtnQuestion3NearMe": false,
        "BtnQuestion3Suspected": false,
        "BtnQuestion3Applying": false,
        "BtnQuestion3Card": false,
        "BtnQuestion3Tips": false,
        "BtnQuestion3Agency": false,
        "BtnQuestion3Other": false
    },
    "Question4": {
        "BtnQuestion4Very": false,
        "BtnQuestion4Somewhat": false,
        "BtnQuestion4NotVery": false,
        "BtnQuestion4NotAll": false
    },
    "Question5": {
        "BtnQuestion5Yes": false,
        "BtnQuestion5No": false,
        "BtnQuestion5Maybe": false
    },
    "Question6": {
        "BtnQuestion6Yes": false,
        "BtnQuestion6No": false
    }
}

function animMoveElementsDown() {
    var CurrentForm = kony.application.getCurrentForm();
    CurrentForm.Flxmenu.isVisible = true;
    try {
        CurrentForm.Flxmenu.animate(kony.ui.createAnimation({
            "100": {
                "top": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        }, {
            "animationEnd": function() {}
        });
    } catch (e) {}
}

function animMoveElementsDownMenu2() {
    var CurrentForm = kony.application.getCurrentForm();
    CurrentForm.FlxMenu2.isVisible = true;
    try {
        CurrentForm.FlxMenu2.animate(kony.ui.createAnimation({
            "100": {
                "top": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        }, {
            "animationEnd": function() {}
        });
    } catch (e) {}
}
var isManual = true;
var locationData = null;

function setLocationData(locationData) {
    this.locationData = locationData;
}

function getLocationData() {
    return this.locationData;
}

function animMoveElementsDown() {
    var CurrentForm = kony.application.getCurrentForm();
    CurrentForm.Flxmenu.isVisible = true;
    try {
        CurrentForm.Flxmenu.animate(kony.ui.createAnimation({
            "100": {
                "top": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        }, {
            "animationEnd": function() {}
        });
    } catch (e) {}
}

function animMoveElementsDownMenu2() {
    var CurrentForm = kony.application.getCurrentForm();
    CurrentForm.FlxMenu2.isVisible = true;
    try {
        CurrentForm.FlxMenu2.animate(kony.ui.createAnimation({
            "100": {
                "top": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.5
        }, {
            "animationEnd": function() {}
        });
    } catch (e) {}
}

function MenuVisible() {
    var form = kony.application.getCurrentForm();
    form.flxMenuOption.isVisible = true;
}

function CallMap() {
    /*
      var selectedNumber = kony.application.getCurrentForm()
    kony.phone.dial(selectedNumber.LblNumberMap.text);*/
}
/**
 * Name		:	mobile fabric service
 * Author	:	Kony
 * Purpose	:	This function initializes connection with mf
 **/
function intializeMobileFabricService() {
    if (isManual) {
        kony.application.showLoadingScreen("sknLoading", "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
        var appkey = "3d959de5e771c9b56754c1faaca2fd7b";
        var appsecret = "916ce6257d6186fca0ff88fdabcda54";
        var service_url = "https://mobile-dev.jfs.ohio.gov/authService/100000002/appconfig";
        //     var appkey = "bbc4c5853063d7993dc2d08f4e098cee";
        //     var appsecret = "88ba1eda1a3eb392ff64dc52cb373a11";
        //     var service_url = "http://192.168.0.15:8080/authService/100000002/appconfig";
        client = new kony.sdk();
        client.init(appkey, appsecret, service_url, function(response) {
            try {
                kony.print("Mobile Fabric has been successfully initiated.");
                kony.print("Inside successResponse: " + JSON.stringify(response));
                kony.application.dismissLoadingScreen();
                //fetchSNAPData();
                //fetchCountyDirectoryData();
            } catch (e) {
                log("Exception is in successcallback: " + e);
            }
        }, function(response) {
            try {
                kony.print("Mobile Fabric has failed to initialize");
                kony.print("Inside errorResponse: " + JSON.stringify(response));
                kony.application.dismissLoadingScreen();
            } catch (e) {
                log("Exception is errorcallback: " + e);
            }
        });
    }
}

function initializeGlobalMenu(segmentMenu) {
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
            "LblName": "Help"
        }],
        "groupCells": false,
        "height": "88.87%",
        "id": "Segment0a79a394297f846",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": onRowClickCallBck,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
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
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    var form = kony.application.getCurrentForm();
    form.Flxmenu.add(Segment0a79a394297f846);
}

function animMoveElementsUps() {
    var form = kony.application.getCurrentForm();
    form.Flxmenu.animate(kony.ui.createAnimation({
        "100": {
            "top": '-93%',
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
    }, {
        "animationEnd": function() {
            form.Flxmenu.isVisible = false;
        }
    });
}

function onRowClickCallBck(seguiWidget, sectionNumber, rowNumber, selectedState) {
    ClickRow(seguiWidget);
}

function ClickRow(seguiWidget) {
    var item = seguiWidget.selectedRowItems;
    this.animMoveElementsUps();
    if (item[0].LblName == "County Agency Directory") {
        var navToProspect = new kony.mvc.Navigation("FrmDirectory");
        navToProspect.navigate();
    } else if (item[0].LblName == "What's near me?") {
        var navToProspect = new kony.mvc.Navigation("WhatNearMe");
        navToProspect.navigate();
    } else if (item[0].LblName == "Home") {
        var navToProspect = new kony.mvc.Navigation("FrmHome");
        navToProspect.navigate();
    } else if (item[0].LblName == "SNAP Basics") {
        LabelNameHomeDescription = "SNAP Basics";
        LabelNameHomeDescription2 = "Learn About Program Eligibility";
        var navToProspect = new kony.mvc.Navigation("FrmHomeDescription");
        navToProspect.navigate();
    } else if (item[0].LblName == "Applying for SNAP") {
        LabelNameHomeDescription = "Applying for SNAP";
        LabelNameHomeDescription2 = "How, What & Where?";
        var navToProspect = new kony.mvc.Navigation("FrmHomeDescription");
        navToProspect.navigate();
    } else if (item[0].LblName == "Keeping SNAP Benefits") {
        LabelNameHomeDescription = "Keeping SNAP Benefits";
        LabelNameHomeDescription2 = "Who Reporting Affects Benefits";
        var navToProspect = new kony.mvc.Navigation("FrmHomeDescription");
        navToProspect.navigate();
    } else if (item[0].LblName == "Using Your EBT Card") {
        LabelNameHomeDescription = "Using Your EBT Card";
        LabelNameHomeDescription2 = "Shopping, Security & Customer Service";
        var navToProspect = new kony.mvc.Navigation("FrmHomeDescription");
        navToProspect.navigate();
    } else if (item[0].LblName == "More Food Resources") {
        LabelNameHomeDescription = "More Food Resources";
        LabelNameHomeDescription2 = "Food Programs, Pantries & Farmers’ Markets";
        var navToProspect = new kony.mvc.Navigation("FrmHomeDescription");
        navToProspect.navigate();
    } else if (item[0].LblName == "SNAP Smart Tips") {
        LabelNameHomeDescription = "SNAP Smart Tips";
        LabelNameHomeDescription2 = "Get the Most Out of Your Benefits";
        var navToProspect = new kony.mvc.Navigation("FrmHomeDescription");
        navToProspect.navigate();
    } else if (item[0].LblName == "My Notes") {
        var navToProspect = new kony.mvc.Navigation("FrmMyNotes");
        navToProspect.navigate();
    }
}
/**
 * Name		:	mobile fabric services
 * Author	:	Kony
 * Purpose	:	below functions get SNAP data and uses it
 **/
function fetchSNAPData() {
    var inputparams = {};
    var headerParams = {};
    var intgService = client.getIntegrationService("fetchSnapData");
    intgService.invokeOperation("SNAPAppData", headerParams, inputparams, fetchSNAPDataSuccessCallback, fetchSNAPDataErrorCallback);
}

function fetchSNAPDataSuccessCallback(result) {
    kony.print("Inside fetchSNAPDataSuccessCallback: " + JSON.stringify(result));
    var searchContent = result.snapConent;
    var htmlData = "";
    for (i = 0; i < searchContent.length; i++) {
        contentType = searchContent[i]["section"];
        if (contentType == "snapBasics") {} else if (contentType == "ebtCard") {}
        htmlData = searchContent[i]["htmlcontent"];
    }
    frmSNAPDetails.browserSnapDetails.htmlString = htmlData;
    frmSNAPDetails.show();
    kony.application.dismissLoadingScreen();
}

function fetchSNAPDataErrorCallback(result) {
    kony.print("Inside fetchSNAPDataErrorCallback: " + JSON.stringify(result));
    kony.application.dismissLoadingScreen();
}

function checkNullUndefinedEmpty(data) {
    try {
        if (data === null || data === undefined || data === "") {
            //kony.print("if isNullUndefinedOrEmpty : "+data);
            return "";
        } else {
            //kony.print("else isNullUndefinedOrEmpty : "+data);
            return data;
        }
    } catch (e) {
        kony.print("checkNullUndefinedEmpty catch : " + e);
    }
}

function appServiceSNAP(params) {
    kony.print("Inside App service invoked: " + JSON.stringify(params));
    var redirectURL = "";
    var temp = params.launchparams;
    if (temp.hasOwnProperty('ru')) {
        kony.print("Inside params has RU");
        redirectURL = params.launchparams.ru;
        if (redirectURL !== null) {
            kony.print("Inside redirectURL for : " + redirectURL);
            kony.application.openURL(redirectURL);
        }
    } else {
        kony.print("redirectURL is empty!!!");
    }
}