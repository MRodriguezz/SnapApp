//Type your code here
var LabelNameHomeDescription = "z";
var LabelNameHomeDescription2 = "z";

// variable Button Comment

var ObjectCommentQuestion = {
  "Question1":{
      "BtnFirstQuestionYes":false,
    "BtnFirstQuestionNo":false,
    "BtnFirstQuestionLoking":false
    },  "Question2":{
      "BtnQuestion2Very":false,
    "BtnQuestion2Somewhat":false,
      "BtnQuestion2NotVery":false,
    "BtnQuestion2NotAll":false
    },  "Question3":{
      "BtnQuestion3Basics":false,
      "BtnQuestion3Benefits":false,
      "BtnQuestion3Food":false,
      "BtnQuestion3NearMe":false,
      "BtnQuestion3Suspected":false,
      "BtnQuestion3Applying":false,
      "BtnQuestion3Card":false,
      "BtnQuestion3Tips":false,
      "BtnQuestion3Agency":false,
      "BtnQuestion3Other":false
    },  "Question4":{
      "BtnQuestion4Very":false,
    "BtnQuestion4Somewhat":false,
      "BtnQuestion4NotVery":false,
    "BtnQuestion4NotAll":false

  },  "Question5":{
      "BtnQuestion5Yes":false,
    "BtnQuestion5No":false,
    "BtnQuestion5Maybe":false

  },  "Question6":{
      "BtnQuestion6Yes":false,
    "BtnQuestion6No":false

  }};

 function animMoveElementsDown() {
   var CurrentForm = kony.application.getCurrentForm();
   CurrentForm.Flxmenu.isVisible= true;
   try {
     CurrentForm.Flxmenu.animate(
       kony.ui.createAnimation(
         {"100": {
           "top":"0%","stepConfig":{
             "timingFunction":kony.anim.EASE
           }
         }
         }
       ),
       {"delay":0,"iterationCount":1,"fillMode":
        kony.anim.FILL_MODE_FORWARDS,"duration":0.5},
       {"animationEnd" : function() {
       }
       }
     );
   } catch (e) {
   }


 }

 function animMoveElementsDownMenu2() {
   var CurrentForm = kony.application.getCurrentForm();
   CurrentForm.FlxMenu2.isVisible= true;
   try {
     CurrentForm.FlxMenu2.animate(
       kony.ui.createAnimation(
         {"100": {
           "top":"0%","stepConfig":{
             "timingFunction":kony.anim.EASE
           }
         }
         }
       ),
       {"delay":0,"iterationCount":1,"fillMode":
        kony.anim.FILL_MODE_FORWARDS,"duration":0.5},
       {"animationEnd" : function() {
       }
       }
     );
   } catch (e) {
   }


 }
var locationData = null;
var countyDirectory = null;

function setCurrentPosition(currentPosition) {
  this.currentPosition = currentPosition;
}

function getCurrentPosition() {
  return this.currentPosition;
}

function setLocationData(locationData) {
  this.locationData = locationData;
}

function getLocationData() {
  return this.locationData;
}

function getCountyDirectory() {
  return this.countyDirectory;
}

function setCountyDirectory(countyDirectory) {
  this.countyDirectory = countyDirectory;
}

function animMoveElementsDown() {
  var CurrentForm = kony.application.getCurrentForm();
  CurrentForm.Flxmenu.isVisible= true;
  try {
    CurrentForm.Flxmenu.animate(
      kony.ui.createAnimation(
        {"100": {
          "top":"0%","stepConfig":{
            "timingFunction":kony.anim.EASE
          }
        }
        }
      ),
      {"delay":0,"iterationCount":1,"fillMode":
       kony.anim.FILL_MODE_FORWARDS,"duration":0.5},
      {"animationEnd" : function() {
      }
      }
    );
  } catch (e) {
  }


}

function animMoveElementsDownMenu2() {
  var CurrentForm = kony.application.getCurrentForm();
  CurrentForm.FlxMenu2.isVisible= true;
  try {
    CurrentForm.FlxMenu2.animate(
      kony.ui.createAnimation(
        {"100": {
          "top":"0%","stepConfig":{
            "timingFunction":kony.anim.EASE
          }
        }
        }
      ),
      {"delay":0,"iterationCount":1,"fillMode":
       kony.anim.FILL_MODE_FORWARDS,"duration":0.5},
      {"animationEnd" : function() {
      }
      }
    );
  } catch (e) {
  }


}




function MenuVisible() {
  var form = kony.application.getCurrentForm();
  form.flxMenuOption.isVisible= true;
}

/*function opacityBoxMap(widget, opacity, delay, time) {
  var curentForm = kony.application.getCurrentForm();
  try {
    curentForm.flxMenuOption.FlexContainer0c23c3dd563fd42.animate(
      kony.ui.createAnimation(
        {"100":
         {"stepConfig":
          {"timingFunction":kony.anim.EASE
          },
          "opacity": opacity
         }
        } 
      ),
      {"delay":0.25,"iterationCount":1,"fillMode":kony.anim.FILL_MODE_FORWARDS,"duration":0.2},
      {"animationEnd" : function(){
      }
      }
    );
  } catch (e) {
  }
}
*/

function CallMap(){
}


function initializeMobileFabricService() {
  kony.print("Inside initializeMobileFabricService");
  kony.application.showLoadingScreen("sknLoading", "", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);

  var appkey = "cb9508bd065879ccd20d0fa812d80934";
  var appsecret = "b20de422928c4d715fd28d01185f18c3";
  var service_url = "https://mobile-dev.jfs.ohio.gov/authService/100000002/appconfig";

  //     var appkey = "d0251e99561a7dfe465af7f0d8ce351";
  //     var appsecret = "248034581011cf5d7fd7abbe0ac1487d";
  //     var service_url = "http://192.168.0.6:8080/authService/100000002/appconfig";

  client = new kony.sdk();
  kony.print("Inside client initiated...");
  client.init(appkey, appsecret, service_url, function(response) {
    try {
      kony.print("Mobile Fabric has been successfully initiated.");
      kony.print("Inside Mobile Fabric successResponse: " + JSON.stringify(response));
      kony.application.dismissLoadingScreen();
      mfInitSuccess = true;
      setupPushCallbacks();
      //fetchSNAPData();
      //fetchCountyDirectoryData();
    } catch (e) {
      log("Exception is in successcallback: " + e);
    }
  }, function(response) {
    try {
      kony.print("Mobile Fabric has failed to initialize");
      kony.print("Inside Mobile Fabric errorResponse: " + JSON.stringify(response));
      kony.application.dismissLoadingScreen();
    } catch (e) {
      log("Exception is errorcallback: " + e);
    }
  });
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
  form.Flxmenu.animate(
    kony.ui.createAnimation(
      {"100": {
        "top":'-93%',"stepConfig":{
          "timingFunction":kony.anim.EASE
        }
      }
      }
    ),
    {"delay":0,"iterationCount":1,"fillMode":
     kony.anim.FILL_MODE_FORWARDS,"duration":0.5},
    {"animationEnd" : function() {
      form.Flxmenu.isVisible= false;
    }
    }
  );

}

function onRowClickCallBck(seguiWidget, sectionNumber, rowNumber, selectedState) {
	ClickRow(seguiWidget);
}

function ClickRow(seguiWidget) {
    var item = seguiWidget.selectedRowItems;
	kony.print("Selected LblName: " + item[0].LblName);
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
    } else if (item[0].LblName == "Settings") {
        var navToProspect = new kony.mvc.Navigation("FrmSettings");
        navToProspect.navigate();
    } else if (item[0].LblName == "Report Suspected Fraud") {
      var fraudUrl = "http://www.jfs.ohio.gov/fraud/index.stm";
      kony.application.openURL(fraudUrl);
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
  intgService.invokeOperation("SNAPAppData",headerParams,inputparams,fetchSNAPDataSuccessCallback, fetchSNAPDataErrorCallback);
}

function fetchSNAPDataSuccessCallback(result) {
  kony.print("Inside fetchSNAPDataSuccessCallback: "+JSON.stringify(result));
  var searchContent = result.snapConent;
  var htmlData = "";
  for (i = 0; i < searchContent.length; i++) {
    contentType = searchContent[i]["section"];
    if(contentType == "snapBasics") {

    } else if(contentType == "ebtCard") {

    }
    htmlData = searchContent[i]["htmlcontent"];
  }
  frmSNAPDetails.browserSnapDetails.htmlString = htmlData;
  frmSNAPDetails.show();
  kony.application.dismissLoadingScreen();
}

function fetchSNAPDataErrorCallback(result) {
  kony.print("Inside fetchSNAPDataErrorCallback: "+JSON.stringify(result));
  kony.application.dismissLoadingScreen();
}


function checkNullUndefinedEmpty(data)
{
  try
  {
    if(data === null || data === undefined || data === "")
    {
      //kony.print("if isNullUndefinedOrEmpty : "+data);
      return "";
    }
    else
    {
      //kony.print("else isNullUndefinedOrEmpty : "+data);
      return data;
    }
  }
  catch(e)
  {
    kony.print("checkNullUndefinedEmpty catch : "+e);
  }
}

function appServiceSNAP(params) {
  kony.print("Inside App service invoked: "+JSON.stringify(params));
  var redirectURL = "";
  var temp = params.launchparams;
  if(temp.hasOwnProperty('ru')) {
    kony.print("Inside params has RU");
    redirectURL = params.launchparams.ru;
    if(redirectURL !== null) {
      kony.print("Inside redirectURL for : "+redirectURL);
      kony.application.openURL(redirectURL);
    }
  } else {
    kony.print("redirectURL is empty!!!");
  }
}

function VisibleSearch(View){
    var form = kony.application.getCurrentForm();
  //alert(View)
  //alert(form.FlxHeader.FlxSearch.TxtBoxSearch.skin)
  if(View == "home"){
    form.FlxHeader.FlxSearch.skin = "SknFlxHeaderDarkRed";
    form.FlxHeader.FlxSearch.TxtBoxSearch.skin = "TxtBoxSearchDarkRed";
  }else if(View == "Directory"){
    form.FlxHeader.FlxSearch.skin = "SknFlxHeaderBlue";
    form.FlxHeader.FlxSearch.TxtBoxSearch.skin = "SknTxtBoxSearchBlues";
    form.FlxHeader.FlxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusBlue";

      //alert(form.FlxHeader.FlxSearch.TxtBoxSearch.skin)
  }

  form.FlxHeader.FlxSearch.isVisible=  true;
}
function HideSearch() {
  var form = kony.application.getCurrentForm();
  form.FlxHeader.FlxSearch.isVisible=  false;
}

function VisibleSearchHearder2(View){
    var form = kony.application.getCurrentForm();
  //alert(View)
  //alert(form.FlxHeader.FlxSearch.TxtBoxSearch.skin)
  /*if(View == "home"){
    form.FlxHeader.FlxSearch.skin = "SknFlxHeaderDarkRed";
    form.FlxHeader.FlxSearch.TxtBoxSearch.skin = "TxtBoxSearchDarkRed";
  }else if(View == "Directory"){
    form.FlxHeader.FlxSearch.skin = "SknFlxHeaderBlue";
    form.FlxHeader.FlxSearch.TxtBoxSearch.skin = "SknTxtBoxSearchBlues";
    form.FlxHeader.FlxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusBlue";

      //alert(form.FlxHeader.FlxSearch.TxtBoxSearch.skin)
  }*/

  form.FlxHeaderInfo.FlxSearch.isVisible=  true;
}
function HideSearchHearder2() {
  var form = kony.application.getCurrentForm();
  form.FlxHeaderInfo.FlxSearch.isVisible=  false;
}



//Type your code here

var countyData = {
	"CountyDirectory": [{
			"county": "Adams",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "38.773701",
			"longitude": "-83.561180",
			"address": "482 Rice Dr., P.O. Box 386, West Union, OH 45693-0386",
			"phone1": "(937) 544-2371",
			"phone2": "",
			"fax": "(937) 544-5406 TTY/TTD: (800) 750-0750 ext.269",
			"hours": "Mon-Thu 7a - 4:45p, Fri 7-11a; closed 11:30a -12:15p daily. Holiday week: Mon-Fri 7a-3:45p",
			"website": ""
		},{
			"county": "Allen",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.713680",
			"longitude": "-84.114820",
			"address": "1501 S. Dixie Hwy., P.O. Box 4506, Lima, OH 45802-4506",
			"phone1": "(419) 228-2621",
			"phone2": "",
			"fax": "(419) 227-2448 TTY/TTD: (419) 999-0370",
			"hours": "Mon-Fri 7:30a-4:30p",
			"website": ""
		},{
			"county": "Ashland",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.870796",
			"longitude": "-82.315933",
			"address": "15 W. Fourth St., Ashland, OH 44805-2137",
			"phone1": "(419) 282-5000",
			"phone2": "(800) 589-8141",
			"fax": "(419) 282-5010 TTY/TTD: (419) 282-5002",
			"hours": "Mon-Fri 7:30a-4:30p",
			"website": "http://www.ashlandjfs.org"
		},{
			"county": "Ashtabula",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.880830",
			"longitude": "-80.742040",
			"address": "2924 Donahoe Dr., Ashtabula, OH 44004-4540",
			"phone1": "(440) 998-1110",
			"phone2": "(800) 935-0242",
			"fax": "(440) 998-1538",
			"hours": "Mon-Fri 8a-4:30p",
			"website": "http://www.acdjfs.org"
		},{
			"county": "Athens",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.397270",
			"longitude": "-82.124520",
			"address": "13183 St. Rte. 13, Millfield, OH 45761-9901",
			"phone1": "(740) 797-2523",
			"phone2": "(800) 762-3775",
			"phone3": "(800) 338-4484",
			"fax": "(740) 797-2447",
			"hours": "Mon-Fri 8a-5p",
			"website": "http://www.jfs.athensoh.org"
		},{
			"county": "Auglaize",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.571140",
			"longitude": "-84.183090",
			"address": "12 N. Wood St., Wapakoneta, OH 45895",
			"phone1": "(419) 739-6505",
			"phone2": "(419) 739-6506",
			"fax": "(419) 739-6506",
			"hours": "Mon-Fri 7a-4:30p",
			"website": "http://www2.auglaizecounty.org"
		},{
			"county": "Belmont",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.083220",
			"longitude": "-80.907570",
			"address": "310 Fox Shannon Pl., St. Clairsville, OH 43950-0428",
			"phone1": "(740) 695-1075",
			"phone2": "",
			"fax": "(740) 695-5251",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Brown",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "38.875470",
			"longitude": "-83.900030",
			"address": "775 Mt. Orab Pike, Georgetown, OH 45121-0289",
			"phone1": "(937) 378-6104",
			"phone2": "",
			"fax": "(937) 378-4753",
			"hours": "Mon-Fri 7a-5p",
			"website": "http://www.BrownCountyJFS.com"
		},{
			"county": "Butler",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.400680",
			"longitude": "-84.564880",
			"address": "315 High St., 9th Fl., Hamilton, OH 45012-4000",
			"phone1": "(513) 887-5600",
			"phone2": "(800) 582-4267",
			"fax": "(513) 887-4296/4334 TTY/TTD: (513) 887-4322",
			"hours": "Mon-Fri 7a-5p",
			"website": ""
		},{
			"county": "Carroll",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.572570",
			"longitude": "-81.085030",
			"address": "55 E. Main St., Carrollton, OH 44615",
			"phone1": "(330) 627-2571",
			"phone2": "",
			"fax": "(330) 627-3904",
			"hours": "Mon-Fri 7:45a-4:30p",
			"website": "http://www.carrollcountyjfs.com"
		},{
			"county": "Champaign",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.091100",
			"longitude": "-83.757520",
			"address": "1512 S. US Hwy. 68, Ste. N100, Urbana, OH 43078-0353",
			"phone1": "(937) 484-1500",
			"phone2": "",
			"fax": "(937) 484-1506 TTY/TTD: (937) 484-15",
			"hours": "Mon-Fri 8:30a-4:30p",
			"website": ""
		},{
			"county": "Clark",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.930460",
			"longitude": "-83.787980",
			"address": "1345 Lagonda Ave., Springfield, OH 45503",
			"phone1": "(937) 327-1700",
			"phone2": "(800) 516-3463",
			"fax": "",
			"hours": "Mon-Fri 8a-4:30p",
			"website": "http://www.clarkdjfs.org"
		},{
			"county": "Clermont",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.083000",
			"longitude": "-84.144030",
			"address": "2400 Clermont Center Dr., Batavia, OH 45103",
			"phone1": "(513) 732-7111",
			"phone2": "",
			"fax": "(513) 732-7216",
			"hours": "Mon-Fri 8a-4:30p",
			"website": "http://www.djfs.clermontcountyohio.gov"
		},{
			"county": "Clinton",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.432270",
			"longitude": "-83.832470",
			"address": "1025 S. South St., Ste. 200, Wilmington, OH 45177",
			"phone1": "(937) 382-0963",
			"phone2": "",
			"fax": "(937) 382-7039",
			"hours": "Mon-Fri 7:30a-4:30p",
			"website": ""
		},{
			"county": "Columbiana",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.786380",
			"longitude": "-80.773850",
			"address": "7989 Dickey Dr., Ste. 2, Lisbon, OH 44432",
			"phone1": "(330) 424-1471",
			"phone2": "",
			"fax": "(330) 424-0925",
			"hours": "Mon-Fri 8a-4:30p, first Thu 8a-6:30p",
			"website": "http://www.columbianacountyjfs.org"
		},{
			"county": "Coshocton",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.266950",
			"longitude": "-81.858670",
			"address": "725 Pine St., Coshocton, OH 43812",
			"phone1": "(740) 622-1020",
			"phone2": "",
			"fax": "(740) 622-8642",
			"hours": "Mon-Fri 7a-4p",
			"website": "http://www.coshoctonjfs.org"
		},{
			"county": "Crawford",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.809860",
			"longitude": "-82.973010",
			"address": "224 Norton Way, Bucyrus, OH 44820-1831",
			"phone1": "(419) 562-0015",
			"phone2": "",
			"fax": "(419) 562-1056",
			"hours": "Mon-Fri 7:30a-4p",
			"website": ""
		},{
			"county": "Cuyahoga",
			"agencyName": "CDJFS - County Health and Human Services, Cuyahoga Job and Family Services",
			"latitude": "41.504740",
			"longitude": "-81.681210",
			"address": "Virgil E. Brown Building, 1641 Payne Ave., Ste. 520, Cleveland, OH 44114",
			"phone1": "(216) 881-5554",
			"phone2": "(216) 987-8183",
			"fax": "",
			"hours": "",
			"website": "http://www.employment.cuyahogacounty.us"
		},{
			"county": "Cuyahoga",
			"agencyName": "CDJFS - County Health and Human Services, Senior and Adult Services",
			"latitude": "41.46495",
			"longitude": "-81.586426",
			"address": "Mt. Pleasant Community Center, 13815 Kinsman Rd., Cleveland, OH 44120",
			"phone1": "(216) 420-6755",
			"phone2": "",
			"fax": "(216) 420-6735",
			"hours": "",
			"website": "http://www.dsas.cuyahogacounty.us"
		},{
			"county": "Darke",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.123520",
			"longitude": "-84.621140",
			"address": "631 Wagner Ave., Greenville, OH 45331",
			"phone1": "(937) 548-4132",
			"phone2": "",
			"fax": "548-4928 TTY/TTD: (937) 548-4132",
			"hours": "Mon-Fri 8a-4p",
			"website": ""
		},{
			"county": "Defiance",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.427450",
			"longitude": "-84.396250",
			"address": "06879 Evansport Rd,. Ste. A, Defiance, OH 43512-0639",
			"phone1": "(419) 782-3881",
			"phone2": "(800) 342-0160",
			"fax": "(419) 782-1717",
			"hours": "Mon-Thur 8a-4:30p",
			"website": ""
		},{
			"county": "Delaware",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.303260",
			"longitude": "-83.066840",
			"address": "140 N. Sandusky St., 2nd Fl., Delaware, OH 43015-1789",
			"phone1": "(740) 833-2300",
			"phone2": "(800) 899-3180",
			"phone3": "(844) 640-6446",
			"fax": "(740) 833-2299",
			"hours": "Mon-Fri 8:15a-4:30p",
			"website": "http://www.delawaredjfs.org"
		},{
			"county": "Erie",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.435590",
			"longitude": "-82.701760",
			"address": "221 W. Parish St., Sandusky, OH 44870-4886",
			"phone1": "(419) 626-6781",
			"phone2": "",
			"fax": "(419) 626-5854 TTY/TTD: (419) 626-6781",
			"hours": "Mon-Fri 8a-4:30p",
			"website": "http://www.eriecounty.oh.gov"
		},{
			"county": "Fairfield",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.714500",
			"longitude": "-82.605920",
			"address": "239 W. Main St., Lancaster, OH 43130",
			"phone1": "(740) 652-7889",
			"phone2": "(800) 450-8845",
			"fax": "(740) 687-6810 TTY/TTD: (740) 681-7211",
			"hours": "Mon-Fri 8a-4p, Before/after hours by appointment",
			"website": "http://www.fcjfs.org"
		},{
			"county": "Fairfield",
			"agencyName": "CDJFS - Social Service and Eligibility",
			"latitude": "39.714500",
			"longitude": "-82.605920",
			"address": "239 W. Main St., Lancaster, OH 43130",
			"phone1": "(740) 652-7889",
			"phone2": "(800) 450-8845",
			"fax": "(740) 689-4848 TTY/TTD: (740) 652-7632",
			"hours": "Mon-Fri 8a-4p, Before/after hours by appointment",
			"website": "http://www.fcjfs.org"
		},{
			"county": "Fayette",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.535130",
			"longitude": "-83.439440",
			"address": "133 S. Main St., Washington Court House, OH 43160",
			"phone1": "(740) 335-0350,",
			"phone2": "(800) 845-3272",
			"fax": "(740) 333-3572",
			"hours": "Mon-Fri 7:30a-4:30p",
			"website": ""
		},{
			"county": "Franklin",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.056960",
			"longitude": "-82.973020",
			"address": "1721 Northland Park Ave., Columbus, OH 43229",
			"phone1": "(614) 233-2000",
			"phone2": "",
			"fax": "(614) 233-2398",
			"hours": "Mon-Fri 8a-5p. The third Wednesday of each month, the North Opportunity Center is closed until 1p. The third Tuesday of each month, the East Opportunity Center is closed until 1p. The second Thursday of each month, the West Opportunity Center is closed until 1p.",
			"website": "https://jfs.franklincountyohio.gov/"
		},{
			"county": "Fulton",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.541607",
			"longitude": "-84.135223",
			"address": "604 S. Shoop Ave., Ste. 200, Wauseon, OH 43567",
			"phone1": "(419) 337-0010,",
			"phone2": "(800) 344-3575",
			"fax": "(419) 337-0061 TTY/TTD: (419) 337-7630",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Gallia",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "38.815280",
			"longitude": "-82.196630",
			"address": "848 Third Ave., Gallipolis, OH 45631-1661",
			"phone1": "(740) 446-3222 ext. 229",
			"phone2": "",
			"fax": "(740) 446-8942",
			"hours": "Mon-Thu 7a-5p, closed Fri",
			"website": "http://www.gallianet.net"
		},{
			"county": "Geauga",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.507100",
			"longitude": "-81.189970",
			"address": "12480 Ravenwood Dr., P.O. Box 309, Chardon, OH 44024-9009",
			"phone1": "(440) 285-9141",
			"phone2": "(800) 209-7590",
			"fax": "(440) 286-6654 TTY/TTD: (440) 285-9141, After Hours Emergency: (440) 285-5665",
			"hours": "Mon-Fri 8a-4:30p",
			"website": "http://www.geaugajfs.org"
		},{
			"county": "Greene",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.666590",
			"longitude": "-83.943090",
			"address": "541 Ledbetter Rd., Xenia, OH 45385-3699",
			"phone1": "(937) 562-6000,",
			"phone2": "(800) 361-4450",
			"fax": "(937) 562-6177, (937) 562-6475",
			"hours": "Mon-Fri 7:30a-5p",
			"website": ""
		},{
			"county": "Guernsey",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.027748",
			"longitude": "-81.578046",
			"address": "324 Highland Ave., Cambridge, OH 43725",
			"phone1": "(740) 432-2381",
			"phone2": "",
			"fax": "(740) 432-1952",
			"hours": "Mon 7:30a-6p, Tue-Fri 7:30a-4:30p",
			"website": "http://www.gcdjfs.com"
		},{
			"county": "Hamilton",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.108092",
			"longitude": "-84.510323",
			"address": "222 E. Central Pkwy., Cincinnati, OH 45202",
			"phone1": "(513) 946-1000",
			"phone2": "",
			"fax": "(513) 946-1076 TTY/TTD: (513) 946-1295",
			"hours": "Mon-Fri 7a-5p",
			"website": "http://www.hcjfs.org"
		},{
			"county": "Hancock",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.023846",
			"longitude": "-80.560959",
			"address": "7814 Cty. Rd. 140, P.O. Box 270, Findlay, OH 45839-0270",
			"phone1": "(419) 422-0182,",
			"phone2": "(844) 640-6446",
			"fax": "(419) 422-1081",
			"hours": "",
			"website": "http://www.hancockjfs.org"
		},{
			"county": "Hardin",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.647062",
			"longitude": "-83.60877",
			"address": "175 W. Franklin St., Ste. 150, Kenton, OH 43326-9902",
			"phone1": "(419) 675-1130,",
			"phone2": "(800) 442-7346",
			"fax": "(419) 675-1100 TTY/TTD: (419) 675-3630, After Hours Emergency: (419) 673-1268",
			"hours": "Mon-Thu 8a-4:30p, Fri 8:00a-2:30p",
			"website": "htpp://http://co.hardin.oh.us/index.php"
		},{
			"county": "Harrison",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.288796",
			"longitude": "-80.985101",
			"address": "520 North Main Street, Cadiz, OH 43907-1276",
			"phone1": "(740) 942-2171",
			"phone2": "(800) 960-7820",
			"fax": "(740) 942-2370, After Hours Emergency: (740) 942-2428",
			"hours": "Mon-Fri 8:30a-4:30p",
			"website": ""
		},{
			"county": "Hocking",
			"agencyName": "CDJFS - South Central Ohio Job and Family Services",
			"latitude": "39.537873",
			"longitude": "-82.41649",
			"address": "389 W. Front St., Logan, OH 43138",
			"phone1": "(855) 726-5237",
			"phone2": "",
			"fax": "(740) 772-7552 TTY/TTD: (330) 674-0966",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Hocking",
			"agencyName": "CDJFS - South Central Ohio Job and Family Services - Income Maintenance",
			"latitude": "39.537873",
			"longitude": "-82.41649",
			"address": "389 W. Front St., Logan, OH 43138",
			"phone1": "(740) 380-4026",
			"phone2": "(855) 726-5237",
			"fax": "(740) 385-1911 TTY/TTD: (330) 674-0966",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Holmes",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.555199",
			"longitude": "-81.920645",
			"address": "85 N. Grant St., P.O. Box 72, Millersburg, OH 44654-0072",
			"phone1": "(330) 674-1111,",
			"phone2": "(800) 971-7979",
			"fax": "(330) 674-0770 TTY/TTD: (330) 674-0966",
			"hours": "Mon-Fri 7:30a-4:30p",
			"website": ""
		},{
			"county": "Huron",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.22354",
			"longitude": "-82.607724",
			"address": "185 Shady Lane Dr., Norwalk, OH 44857-2373",
			"phone1": "(419) 668-8126",
			"phone2": "(800) 668-5175",
			"fax": "(419) 668-4738 TTY/TTD: (419) 668-8126",
			"hours": "Mon-Fri 8a-4:30p",
			"website": "http://www.huroncountydjfs.org"
		},{
			"county": "Jackson",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.048545",
			"longitude": "-82.641758",
			"address": "25 E. South St., Jackson, OH 45640-1638",
			"phone1": "(740) 286-4181",
			"phone2": "",
			"fax": "(740) 286-4775 TTY/TTD: (740) 286-5246",
			"hours": "Mon-Tue & Thu-Fri 8a-4:30p, Wed 7:30a-5:30p",
			"website": ""
		},{
			"county": "Jefferson",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.048545",
			"longitude": "-82.641758",
			"address": "125 S. Fifth St., Steubenville, OH 43952-2885",
			"phone1": "(740) 282-0961",
			"phone2": "",
			"fax": "(740) 282-7425",
			"hours": "Mon-Fri 8a-4p",
			"website": "http://www.jcdjfs.com"
		},{
			"county": "Knox",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.3934",
			"longitude": "-82.4857",
			"address": "117 E. High St., 4th Fl., Mount Vernon, OH 43050-3400",
			"phone1": "(740) 397-7177",
			"phone2": "(844) 640-6446",
			"fax": "(740) 392-8882/1249",
			"hours": "Mon-Fri 7:30a-4:30p",
			"website": ""
		},{
			"county": "Lake",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.7245",
			"longitude": "-81.2457",
			"address": "177 Main St., Painesville, OH 44077-9967",
			"phone1": "(440) 350-4000",
			"phone2": "",
			"fax": "(440) 350-4399 TTY/TTD: (440) 350-3321",
			"hours": "Mon-Tue & Thu-Fri 8a-4:30p, Wed 7:30a-6p",
			"website": ""
		},{
			"county": "Lawrence",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "38.5367",
			"longitude": "-82.6829",
			"address": "1100 S. Seventh St., P.O. Box 539, Ironton, OH 45638-0539",
			"phone1": "(740) 532-3324",
			"phone2": "",
			"fax": "(740) 534-9072 TTY/TTD: (740) 532-3080",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Licking",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.04609",
			"longitude": "-82.395046",
			"address": "74 S. Second St., P.O. Box 5030, Newark, OH 43058-5030",
			"phone1": "(740) 670-8999,",
			"phone2": "(888) 895-2790",
			"fax": "(740) 670-8992 TTY/TTD: Available on request",
			"hours": "Mon-Fri 7a-5p",
			"website": "http://lickingcountyjfs.com"
		},{
			"county": "Logan",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.361114",
			"longitude": "-83.757",
			"address": "211 E. Columbus Ave., Bellefontaine, OH 43311-9935",
			"phone1": "(937) 599-5165",
			"phone2": "",
			"fax": "(937) 592-4395",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Lorain",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.418159",
			"longitude": "-82.140712",
			"address": "42485 N. Ridge Rd., Elyria, OH 44035-1057",
			"phone1": "(440) 323-5726",
			"phone2": "(440) 244-4150",
			"fax": "(440) 323-3422 TTY/TTD: (440) 284-4125",
			"hours": "Mon & Wed-Fri 7:30a-4:30p, Tue 7:30a-6:30p",
			"website": "http://www.lcdjfs.com/"
		},{
			"county": "Lucas",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.667315",
			"longitude": "-83.573305",
			"address": "3210 Monroe St., Toledo, OH 43606",
			"phone1": "(419) 213-8999",
			"phone2": "",
			"fax": "(419) 213-8820",
			"hours": "Mon-Fri 8:30 a-4:30p",
			"website": "http://www.lucasjfs.org"
		},{
			"county": "Madison",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.875233",
			"longitude": "-83.455144",
			"address": "200 Midway St., London, OH 43140-1356",
			"phone1": "(740) 852-4770",
			"phone2": "(800) 852-0243",
			"fax": "(740) 852-4756 TTY/TTD: (800) 852-0243",
			"hours": "Mon & Wed-Fri 8-4; Tue 8-5",
			"website": ""
		},{
			"county": "Mahoning",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.5575",
			"longitude": "-89.4609",
			"address": "345 Oak Hill Ave., mail to P.O. Box 600, Youngstown, OH 44501-0600",
			"phone1": "(330) 740-2600 ext. 8615",
			"phone2": "(800) 548-7175",
			"fax": "(330) 740-2523 TTY/TTD: (330) 884-6180",
			"hours": "7:15a-4:30p, other hours by appt.",
			"website": ""
		},{
			"county": "Marion",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.600162",
			"longitude": "-83.137061",
			"address": "363 W. Fairground St., Marion, OH 43302-1759",
			"phone1": "(740) 387-8560",
			"phone2": "(844) 640-6446",
			"fax": "(740) 387-2175",
			"hours": "Mon-Fri 8a-4:30p",
			"website": "http://www.mcjfs.com"
		},{
			"county": "Medina",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.151732",
			"longitude": "-81.867144",
			"address": "",
			"phone1": "(330) 722-9300",
			"phone2": "(800) 783-5070",
			"fax": "(330) 722-3383",
			"hours": "Mon-Fri 7:30a-4:30p",
			"website": "http://www.mcjfs.us"
		},{
			"county": "Meigs",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.002569",
			"longitude": "-82.049061",
			"address": "175 Race St., P.O. Box 191, Middleport, OH 45760-0191",
			"phone1": "(740) 992-2117 ext. 102",
			"phone2": "(800) 992-2608",
			"fax": "(740) 992-7500 TTY/TTD: (740) 992-2117",
			"hours": "Mon-Wed & Fri 8a-4:30p, Thu 8a-5:30p",
			"website": "http://www.meigsdjfs.net"
		},{
			"county": "Mercer",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.5489",
			"longitude": "-84.5702",
			"address": "220 W. Livingston St., Ste. 10, Celina, OH 45822-1671",
			"phone1": "(419) 586-5106",
			"phone2": "",
			"fax": "(419) 586-5643",
			"hours": "Mon 7:30a-5p, Tue-Thu 8a-4:30p, Fri 8a-3p",
			"website": ""
		},{
			"county": "Miami",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.40717",
			"longitude": "-83.69914",
			"address": "2040 N. County Rd. 25-A, Troy, OH 45373-1310",
			"phone1": "(937) 440-3471",
			"phone2": "",
			"fax": "(937) 335-2225",
			"hours": "Mon 7a-6p, Tue-Fri 8a-5p",
			"website": ""
		},{
			"county": "Monroe",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.7626",
			"longitude": "-81.1154",
			"address": "100 Home Ave., Woodsfield, OH 43793-1234",
			"phone1": "(740) 472-1602",
			"phone2": "(800) 472-1602",
			"phone3": "(800) 638-0758",
			"fax": "(740) 472-5781",
			"hours": "Mon-Thu 7a-4:30p",
			"website": ""
		},{
			"county": "Montgomery",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.742726",
			"longitude": "-84.196225",
			"address": "1111 S. Edwin C. Moses Blvd., Dayton, OH 45422-3600",
			"phone1": "(937) 225-4148",
			"phone2": "",
			"fax": "(937) 225-4188 TTY/TTD: (937) 496-6652",
			"hours": "Mon-Fri 8a-5p",
			"website": ""
		},{
			"county": "Montgomery",
			"agencyName": "CDJFS - Social Service and Income Support",
			"latitude": "39.742726",
			"longitude": "-84.196225",
			"address": "1111 S. Edwin C. Moses Blvd., Dayton, OH 45422-3600",
			"phone1": "(937) 225-4148",
			"phone2": "",
			"fax": "(937) 225-4188 TTY/TTD: (937) 496-6652",
			"hours": "Mon-Fri 8a-5",
			"website": ""
		},{
			"county": "Morgan",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.648813",
			"longitude": "-81.851343",
			"address": "155 E. Main St., Rm. 009, McConnelsville, OH 43756",
			"phone1": "(740) 962-4616",
			"phone2": "(888) 257-9159",
			"fax": "(740) 962-5344 TTY/TTD: (740) 962-2754",
			"hours": "Mon-Fri 7:30a-4p",
			"website": ""
		},{
			"county": "Morrow",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.54896",
			"longitude": "-82.848268",
			"address": "619 W. Marion Rd., Mt. Gilead, OH 43338-1280",
			"phone1": "(419) 947-9111",
			"phone2": "(844) 640-6446",
			"fax": "(419) 947-5447 TTY/TTD: (740) 962-2754",
			"hours": "Mon-Fri 8a-4:30p",
			"website": "http://www.morrowjfs.com"
		},{
			"county": "Muskingum",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.931887",
			"longitude": "-82.008834",
			"address": "445 Woodlawn Ave., P.O. Box 100, Zanesville, OH 43702-0100",
			"phone1": "(740) 454-0161",
			"phone2": "(800) 242-0029",
			"fax": "(740) 454-0067 TTY/TTD: (740) 454-5188",
			"hours": "Mon-Fri 7a-5p",
			"website": "http://www.muskingumcountyjfs.com"
		},{
			"county": "Noble",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.765176",
			"longitude": "-81.538873",
			"address": "46049 Marietta Rd., Caldwell, OH 43724-0250",
			"phone1": "(740) 732-2392",
			"phone2": "(800) 905-2732",
			"fax": "(740) 732-4108 TTY/TTD: (800) 750-0750",
			"hours": "Mon-Fri 7:30a-4p",
			"website": "http://www.ncdjfs.org"
		},{
			"county": "Ottawa",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.5128",
			"longitude": "-83.1466",
			"address": "8043 W. St. Rte. 163, Ste. 200, Oak Harbor, OH 43449",
			"phone1": "(419) 898-3688",
			"phone2": "",
			"fax": "(419) 898-2436 TTY/TTD: (419) 898-3688",
			"hours": "Mon-Fri 8a-4:30p",
			"website": "http://ottawacountyjfs.org"
		},{
			"county": "Paulding",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.152642",
			"longitude": "-84.577973",
			"address": "252 Dooley Dr., Paulding, OH 45879",
			"phone1": "(419) 399-3756",
			"phone2": "(419) 399-3791",
			"fax": "(419) 399-4674",
			"hours": "Mon-Thur 8a-4:30p",
			"website": ""
		},{
			"county": "Perry",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.712758",
			"longitude": "-82.206782",
			"address": "212 S. Main St., P.O. Box 311, New Lexington, OH 43764-0311",
			"phone1": "(740) 342-3551",
			"phone2": "(800) 551-3551",
			"fax": "(740) 342-5491 TTY/TTD: (740) 342-3551",
			"hours": "Mon-Fri 7a-4:30p",
			"website": ""
		},{
			"county": "Pickaway",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.604856",
			"longitude": "-82.94915",
			"address": "110 Island Rd., P.O. Box 610, Circleville, OH 43113",
			"phone1": "(740) 474-7588",
			"phone2": "(800) 822-5437",
			"fax": "(740) 477-1023 TTY/TTD: (740) 474-7588/3105",
			"hours": "Mon-Fri 7:30a-4p",
			"website": "http://www.pickawayjfs.org"
		},{
			"county": "Pike",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.1159",
			"longitude": "-83.0066",
			"address": "230 Waverly Plaza, Ste. 700, Waverly, OH 45690",
			"phone1": "(740) 947-2171",
			"phone2": "",
			"fax": "(740) 947-7628 TTY/TTD: (740) 947-5380",
			"hours": "Mon, Wed & Fri 8a-4:30p; Tue & Thu 7a-4:30p",
			"website": ""
		},{
			"county": "Portage",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.152864",
			"longitude": "-81.244997",
			"address": "449 S. Meridian St., Ravenna, OH 44266-1208",
			"phone1": "(330) 297-3750",
			"phone2": "",
			"fax": "(330) 298-1107",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Preble",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.759945",
			"longitude": "-84.646887",
			"address": "1500 Park Ave., Eaton, OH 45320",
			"phone1": "(937) 456-6205",
			"phone2": "",
			"fax": "(937) 456-5591",
			"hours": "Mon-Fri 7:30a-4:30p",
			"website": "http://www.prebco.org"
		},{
			"county": "Putnam",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.021555",
			"longitude": "-84.064084",
			"address": "575 Ottawa-Glandorf Rd., Ste. 1, Ottawa, OH 45875",
			"phone1": "(419) 538-4580",
			"phone2": "(800) 523-5799",
			"fax": "(419) 538-6829",
			"hours": "Mon-Thu 7a-4:30p, Fri 7a-12p",
			"website": "http://www.putnamcountyohio.gov/"
		},{
			"county": "Richland",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.758922",
			"longitude": "-82.509305",
			"address": "171 Park Ave. E., Mansfield, OH 44902",
			"phone1": "(419) 774-5400",
			"phone2": "",
			"fax": "(419) 774-0051 TTY/TTD: (419) 774-5415",
			"hours": "Mon-Fri 8a-4p",
			"website": ""
		},{
			"county": "Ross",
			"agencyName": "CDJFS - South Central Ohio Job and Family Services",
			"latitude": "39.335871",
			"longitude": "-83.003033",
			"address": "475 Western Ave., Ste. B, P.O. Box 469, Chillicothe, OH 45601",
			"phone1": "(855) 726-5237",
			"phone2": "",
			"fax": "(740) 722-7552 TTY/TTD: (330) 674-0966",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Ross",
			"agencyName": "CDJFS - South Central Ohio Job and Family Services - Income Maintenance",
			"latitude": "39.335871",
			"longitude": "-83.003033",
			"address": "475 Western Ave., Ste. B, P.O. Box 469, Chillicothe, OH 45601",
			"phone1": "(740) 773-2651",
			"phone2": "(855) 726-5237",
			"fax": "(740) 385-1911 TTY/TTD: (330) 674-0966",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Sandusky",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.355993",
			"longitude": "-83.080652",
			"address": "2511 Countryside Dr., Fremont, OH 43420-9987",
			"phone1": "(419) 334-3891",
			"phone2": "(844) 640-6446",
			"fax": "(419) 332-2156 TTY/TTD: (419) 334-8231",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Scioto",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "38.736124",
			"longitude": "-83.000234",
			"address": "710 Court St., P.O. Box 1347, Portsmouth, OH 45662-1347",
			"phone1": "(740) 354-6661",
			"phone2": "",
			"fax": "(740) 353-2576",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Seneca",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.1145",
			"longitude": "-83.178",
			"address": "900 E. Cty. Rd. 20, Tiffin, OH 44883",
			"phone1": "(419) 447-5011",
			"phone2": "(800) 825-5011",
			"fax": "(419) 447-5345 TTY/TTD: (419) 448-7036",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Shelby",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.28366",
			"longitude": "-84.156779",
			"address": "227 S. Ohio Ave., Sidney, OH 45365",
			"phone1": "(937) 498-4981",
			"phone2": "",
			"fax": "(937) 498-7396",
			"hours": "Mon & Wed-Fri 7:30a-4p, Tue 7:30a-6pm",
			"website": ""
		},{
			"county": "Stark",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.79688",
			"longitude": "-81.373983",
			"address": "221 Third St., S.E., Canton, OH 44702-1293",
			"phone1": "(330) 452-4661",
			"phone2": "",
			"fax": "(330) 451-8928, (330) 451-8925 TTY/TTD: (330) 451-8879",
			"hours": "Mon-Fri 8a-4:30p",
			"website": "http://www.co.stark.oh.us/internet/HOME.DisplayPage?v_page=djfs_newMainDJFS"
		},{
			"county": "Summit",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.055893",
			"longitude": "-81.528353",
			"address": "1180 S. Main St., Ste. 102, Akron, OH 44301-1256",
			"phone1": "(330) 643-8200",
			"phone2": "(800) 573-8080",
			"fax": "(866) 351-8292",
			"hours": "Mon-Fri 7a-5:30p",
			"website": "http://www.summitdjfs.org"
		},{
			"county": "Trumbull",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.238568",
			"longitude": "-80.817875",
			"address": "280 N. Park Ave., Warren, OH 44481-1109",
			"phone1": "(330) 675-2000",
			"phone2": "",
			"fax": "(330) 675-2102",
			"hours": "Mon-Fri 7:30a-4:30p",
			"website": "http://hs.co.trumbull.oh.us"
		},{
			"county": "Tuscarawas",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.488753",
			"longitude": "-81.482087",
			"address": "389 16th St. S.W., New Philadelphia, OH 44663-6401",
			"phone1": "(330) 339-7791",
			"phone2": "(800) 431-2347",
			"fax": "(330) 339-6388 TTY/TTD: (800) 750-0750",
			"hours": "8a-4:30p, after hours by appt.",
			"website": "http://www.tcjfs.org"
		},{
			"county": "Union",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.2364",
			"longitude": "-83.3671",
			"address": "940 London Ave., Ste. 1800, P.O. Box 389, Marysville, OH 43040-0389",
			"phone1": "(937) 644-1010",
			"phone2": "(800) 248-2347",
			"fax": "(937) 644-8700 TTY/TTD: (937) 644-1010",
			"hours": "Mon-Fri 7:30a-5p",
			"website": ""
		},{
			"county": "Van Wert",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.869535",
			"longitude": "-84.582176",
			"address": "114 E. Main St., P.O. Box 595, Van Wert, OH 45891-0595",
			"phone1": "(419) 238-5430",
			"phone2": "(800) 830-0953",
			"fax": "(419) 238-6045 TTY/TTD: (419) 238-5498, After Hours Emergency: Sheriff: (419) 238-3866",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Vinton",
			"agencyName": "CDJFS - South Central Ohio Job and Family Services",
			"latitude": "39.275059",
			"longitude": "-82.476955",
			"address": "30975 Industrial Park Dr., McArthur, OH 45651",
			"phone1": "(855) 726-5237",
			"phone2": "",
			"fax": "",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Vinton",
			"agencyName": "South Central Ohio Job and Family Services - Income Maintenance",
			"latitude": "39.275059",
			"longitude": "-82.476955",
			"address": "30975 Industrial Park Dr., McArthur, OH 45651",
			"phone1": "(740) 773-2651",
			"phone2": "(855) 726-5237",
			"fax": "(740) 385-1911 TTY/TTD: (330) 674-0966",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Warren",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.427199",
			"longitude": "-84.204703",
			"address": "416 S. East St., Lebanon, OH 45036",
			"phone1": "(513) 695-1420",
			"phone2": "",
			"fax": "(513) 695-2940",
			"hours": "Mon-Fri 7a-5p",
			"website": "http://www.co.warren.oh.us"
		},{
			"county": "Washington",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "39.42806",
			"longitude": "-81.474642",
			"address": "1115 Gilman Ave., Marietta, OH 45750",
			"phone1": "(740) 373-5513",
			"phone2": "",
			"fax": "(740) 374-7692 TTY/TTD: (740) 373-5513",
			"hours": "Mon-Fri 7:30a-4:30p",
			"website": "http://www.wcdjfs.org"
		},{
			"county": "Wayne",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.798632",
			"longitude": "-81.944844",
			"address": "356 W. North St., P.O. Box 76, Wooster, OH 44691-0076",
			"phone1": "(330) 287-5800",
			"phone2": "(877) 612-5800",
			"fax": "(330) 287-5899 TTY/TTD: (330) 264-2065",
			"hours": "Mon-Fri 7:30a-4:30p",
			"website": "http://www.wayneohio.org/jobandfamily/index.php"
		},{
			"county": "Williams",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.473179",
			"longitude": "-84.551532",
			"address": "117 W. Butler St., Bryan, OH 43506-1650",
			"phone1": "(419) 636-6725",
			"phone2": "",
			"fax": "(419) 636-8843",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""
		},{
			"county": "Wood",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "41.355381",
			"longitude": "-83.613822",
			"address": "1928 E. Gypsy Lane Rd., P.O. Box 679, Bowling Green, OH 43402-9396",
			"phone1": "(419) 352-7566",
			"phone2": "(844) 640-6446",
			"fax": "(419) 353-6091 TTY/TTD: (419) 352-4606",
			"hours": "Mon-Fri 8a-4:30p",
			"website": ""			
		},{
			"county": "Wyandot",
			"agencyName": "CDJFS - County Department of Job and Family Services",
			"latitude": "40.826212",
			"longitude": "-83.280531",
			"address": "120 E. Johnson St., Upper Sandusky, OH 43351",
			"phone1": "(419) 294-4977",
			"phone2": "(800) 320-5211",
			"fax": "(419) 294-3501 TTY/TTD: (419) 209-0796",
			"hours": "Mon-Fri 8a-4p",
			"website": "html://www.co.wyandot.oh.us/jfs/index.htm"
		}
	],
  "opstatus": 0,
  "httpStatusCode": 200
};

/*	Search JSON data */
var searchData =
{
    "opstatus": 0,
    "SNAPSearchIndex": [
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/snap_basics/what_is_snap.html",
            "searchterms": "SNAP, Supplemental, Nutrition, Assistance, Program, What, Eligible, Benefits, Qualify, food, assistance, stamps, EBT",
            "question": "What is SNAP?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/snap_basics/am_I_eligible_for_snap.html",
            "searchterms": "SNAP, Supplemental, Nutrition, Assistance, Program, Am, Eligible, Benefits, Eligibility, Household, Size, Gross, Monthly, Income, Elderly, Disabled, Expenses, Qualify, estimate",
            "question": "Am I eligible for SNAP?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/applying_for_snap/where_do_I_apply.html",
            "searchterms": "Where, Apply, Application, Online, Benefits",
            "question": "Where do I apply?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/applying_for_snap/what_do_I_need_to_apply.html",
            "searchterms": "What, Need, Apply, Application, Submit, Interview, Verification, verify, 7200, Process, Authorized, Representative, Household, Expenses, expense, income, Proof, Qualify, sign, signature, reschedule, caseworker, identity, social security, SSN, birth certificate, passport, driver's, drivers, license, tax, taxes, lease, utility, bill, bills, receipt, receipts, pay, stubs, support, unemployment, mortgage, rent, medical, residence",
            "question": "What do I need to apply?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/applying_for_snap/what_if_I_need_help_to_apply.html",
            "searchterms": "What, Need, Help, Apply, Language, English, Translator, translate, interpret, interpreter, Questions, Application, Hearing, Impaired, Visually, Blind, sight, Deaf, Disability, disabled, uthorized, Representative, represent, Permission, friend, lawyer, relative",
            "question": "What if I need help to apply?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/applying_for_snap/what_happens_after_I_apply.html",
            "searchterms": "What, Happens, After, Apply, Application, Complete, Completed, Review, Submit, Submitted",
            "question": "What happens after I apply?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/applying_for_snap/how_soon_will_I_get_snap.html",
            "searchterms": "How, Soon, Will, Get, SNAP, Apply, Application, Receive, Benefits, Date, Status, Day, Days, Long, approve, deny, quick, quickly",
            "question": "How soon will I get SNAP?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/applying_for_snap/how_do_I_get_my_snap_benefits.html",
            "searchterms": "How, Do, Get, Receive, Benefits, SNAP, My, Approve, Approval, Card, EBT, Ohio, Direction, Account, Initial, Amount, unspent",
            "question": "How do I get my SNAP benefits?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/applying_for_snap/how_long_can_I_keep_getting_snap.html",
            "searchterms": "How, Long, Keep, Get, Getting, Length, Period, Amount, Time, SNAP, Benefits, Limit, Receive, Qualify, Continue, Eligibility, Requirements",
            "question": "How long can I keep getting SNAP benefits?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/snap_reporting/when_should_I_report.html",
            "searchterms": "When, Should, Report, Move, Address, Changes, Change, Keep, Benefits, SNAP, Household, Income, Increases, Decreases, More, Less, Gross, Monthly, Income, Hours, Work, Fall, Below, Hours, Per, Month, Able, Bodied, Adult, Without Dependents, ABAWD, Interim, Online, Letter, Certified, Certification, Period, Form, Mail, Stop, End, Request, Contact, Notice, Join, Additional, People ",
            "question": "When should I report?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/snap_reporting/how_should_I_report.html",
            "searchterms": "How, Should, Report, Reporting, Interim, Form, Mail, Return, Online, Complete, Change, Call, Caseworker, Increase, Decrease, Work, Income, Gross, Reduction, Work, Hours",
            "question": "How should I report?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/snap_reporting/what_changes_affect_my_snap_benefit_amt.html",
            "searchterms": "What, Changes, Affect, Effect, SNAP, Benefit, Amount, Income, New, Job, Expenses, Household, Size, People, hours, move, moves, baby",
            "question": "What changes affect my SNAP benefit amount?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/snap_reporting/why_should_I_report.html",
            "searchterms": "Why, Should, Report, Changes, Timely, Required, Change, SNAP, Benefit, Correct, Benefits, Reporting, Terminate, Repay, Pay, Back, Ineligible, Don't, Overpayment, overpay, overpaid, wrong, incorrect, underpay, underpaid, underissued, bother",
            "question": "Why should I report?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/snap_reporting/how_soon_will_my_caseworker_act_on_info_I_report.html",
            "searchterms": "How, Soon, Time, Period, Long, Quickly, Will, Caseworker, Act, Information, Report, Reported, Change, Changes, Days, Why, Should, Bother, Notice, Adverse, Action, Mistake, Error, SNAP, Benefit, Benefits, Amount, disagree, hearing, hearings",
            "question": "How soon will my caseworker act on information I report?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/using_your_ebt_card/getting_started_with_your_ebt_card.html",
            "searchterms": "When, get, receive, start, EBT, SNAP, benefit, Ohio, Direction, card, how, activate, create, PIN, Personal, Identification, Number, what, phone, forget, reset",
            "question": "Getting Started with Your EBT Card",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/using_your_ebt_card/where_can_I_use_my_card.html",
            "searchterms": "Where, Can, Use, Card, Ohio, Direction, EBT, Sign, Food, Stores, SNAP, Benefit, Benefits, Accept, Take, Shop, Grocery, Market, Farmer, Farmers, Produce, Discount, Quest, Outside, Other, State, States",
            "question": "Where can I use my card?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/using_your_ebt_card/how_do_I_use_my_card.html",
            "searchterms": "How, Do, Use, Card, Ohio, Direction, EBT, Sign, Food, Stores, SNAP, Benefit, Benefits, Accept, Take, Shop, Grocery, Market, Finished, Shopping, Swipe, PIN, Purchase, Purchases, cashier, unused, unspent, expire, keep, throw away, reuse",
            "question": "How do I use my card?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/using_your_ebt_card/what_can_I_buy_with_snap.html",
            "searchterms": "What, Can, Buy, With, SNAP, Benefit, Benefits, Food, Meat, Seafood, Poultry, Eggs, Milk, Cheese, Yogurt, Ice, Cream, Dairy, Products, Fruit, Vegetables, Bread, Cereal, Baby, Formula, Food, Snack, Beverage, allowed, use, spend",
            "question": "What can I buy with SNAP?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/using_your_ebt_card/what_cant_I_buy_with_snap.html",
            "searchterms": "What, Can't, Cannot, Use, Buy, SNAP, Benefit, Benefits, Pet, Paper, Product, Diaper, Soap, Hygiene, Beer, Wine, Liquor, Cigarette, Tobacco, Vitamin, Medicine, Drug, Resell, Trade, Cash, Exchange, Exchanging, Sell, Selling, Trafficking, Fraud, Report, Prohibited",
            "question": "What can’t I buy with SNAP?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/using_your_ebt_card/what_is_snap_trafficking.html",
            "searchterms": "What, SNAP, Trafficking, Selling, Sell, Trading, Trade, Benefit, Benefits, Cash, Resell, Felony, Disqualified, disqualification, Jail, Jailed, Prosecuted, Prosecute, Guilty, Violate, Violation, buy, buying, traffic, pay, paid",
            "question": "What is SNAP trafficking?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/using_your_ebt_card/protecting_your_card.html",
            "searchterms": "PIN, valid, EBT, card, Ohio Direction, learn, learned, tell, steal, stolen, take, takes, secure, security, lost, lose, authorized, authorize, user, permit, permission, shop, shops, help, secret",
            "question": "EBT Card and PIN Security",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/using_your_ebt_card/what_if_my_card_doesnt_work.html",
            "searchterms": "What, Card, Ohio, Direction, EBT, Does Not, Doesn't, Work, Damage, Damaged, PIN, Locked, Incorrectly, Wrong, Denied, deny, Transaction, Customer, Service, Help, magnetic, strip, stripe, bent, broken",
            "question": "What if my card doesn't work?",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/using_your_ebt_card/ebt_card_customer_service.html",
            "searchterms": "EBT, card, customer, service, help, call, doesn't, does not, work, stolen, lost, damage, damaged, new, need, replace, replacement, lock, locked, change, PIN, personal, identification, number, activate, account, balance, phone, address, move, how, use, transaction",
            "question": "EBT Card Customer Service",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/more_food_resources/food_for_new_and_expected_moms.html",
            "searchterms": "WIC, women, infants, infant, children, child, baby, babies, nutrition, program, pregnant, breastfeed, breastfeeding, expecting, expectant, kid, kids, five, 5, health, education, foods, food, cereal, eggs, milk, fruit, fruits, vegetable, vegetables, formula, new, moms, mom, mothers",
            "question": "Food for New and Expectant Moms",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/more_food_resources/food_for_children.html",
            "searchterms": "WIC, women, infants, infant, children, child, baby, babies, nutritious, nutrition, program, programs, healthy, food, assitance, help, five, 5, school, schools, breakfast, lunch, free, reduced, students, 18, meals, meal, kid, kids, apply, application, summer, teen, teens",
            "question": "Food for Children",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/more_food_resources/food_for_senior_citizens.html",
            "searchterms": "senior, seniors, old, aged, retired, 60, farmers, farmers', farmer's, farm, farmer, market, markets, nutrition, nutritious, fruits, fruit, vegetables, vegetable, herbs, honey, low, income, commodity, supplemental, supplement, food, package, packages, box, foodbanks, bank, pantry, pantries",
            "question": "Food for Senior Citizens",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/more_food_resources/find_a_food_pantry.html",
            "searchterms": "find, food, pantry, pantries, where, area, city, county, near, nearby, locate, location, located, resource, resources, foodbank, bank, help, free, source, need",
            "question": "Find a Food Pantry",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/more_food_resources/find_a_farmers_market.html",
            "searchterms": "find, farm, farmer, farmer's, farmers' where, area, city, county, near, nearby, locate, located, location, accept, discount, discounted, double, produce, perks, perk, dollar, dollars, purchase, buy, fruit, fruits, vegetable, vegetables, fresh, resource, resources, souce",
            "question": "Find a Farmers' Market",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/smart_tips/dont_throw_your_ebt_card_away.html",
            "searchterms": "Don't, throw, away, EBT, card, reuse, reusable, keep, account, receive, new ",
            "question": "Don't Throw Your EBT Card Away",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/smart_tips/guard_your_ebt_card_and_protect_your_pin.html",
            "searchterms": "safeguard, card, PIN, personal, identification, number, use, used, EBT, permission, permit, give, authorize, authorized, learns, steal, steals, change",
            "question": "Safeguard Your SNAP Benefits",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/smart_tips/avoid_having_to_repay_snap_benefits.html",
            "searchterms": "avoid, repay, repayment, accurate, correct, right, report, reported, increase, increases, decrease, decreases, move, moving, work, hours, ABAWD, able, bodied, adult, dependents, check, caseworker, household, change, changes, calculate, calculates, calculated, recalculate, recalculates, recalculated, benefit, benefits, amount, amounts, new, timely, mistake, mistakes, pay, back, overpayment, overpaid, wrong, money, owe",
            "question": "Avoid Having to Repay SNAP Benefits",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/smart_tips/it_is_against_the_law_to_trade.html",
            "searchterms": "What, SNAP, Trafficking, Selling, Sell, Trading, Trade, Benefit, Benefits, Cash, Resell, Felony, Disqualified, disqualification, Jail, Jailed, Prosecuted, Prosecute, prosecution, criminal, crime, Guilty, Violate, Violation, buy, buying, traffic, pay, paid, social, media, post, facebook, message, offer, offers, report, fraud, exchange, money",
            "question": "It is Against the Law to Buy, Sell or Trade SNAP Benefits",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/smart_tips/tips_for_food_shopping_on_a_budget.html",
            "searchterms": "food, shop, shopping, budget, low, income, limited, dollar, dollars, broke, poor, idea, ideas, help, stretch, stretching, grocery, groceries, store, stores, coupon, coupons, specials, save, saving, savings, money, tight, tip, tips, ideas, suggestions, help, thrifty, cheap, afford, affordable",
            "question": "Tips for Food Shopping on a Budget",
            "contentType": "search"
        },
        {
            "snapContentURL": "http://ec2-54-208-62-197.compute-1.amazonaws.com/snap-web/search/smart_tips/recipies_food_facts_and_more.html",
            "searchterms": "recipe, recipes, food, foods, facts, help, tip, tips, suggestions, help, idea, ideas, grocery, groceries, store, stores, shop, shopping, make, meal, meals, plan, cook, cooking, snack, snacks, kids, plate, picky, family, breakfast, lunch, dinner, supper, healthy, nutritious, nutrition ",
            "question": "Recipes, Food Facts & More",
            "contentType": "search"
        },
        {
            "snapContentURL": "",
            "searchterms": "county, family, job, services, department, agency, local, where, location, locations, located, locate, address, find, list, directory",
            "question": "County Agency Directory",
            "contentType": "navigation"
        },
        {
            "snapContentURL": "",
            "searchterms": "report, fraud, suspected, suspicious, suspicion, buy, buying, sell, selling, offer, offers, trade, pay, facebook, online, EBT, cash, money, lie, cheat",
            "question": "Reprot Suspected Fraud",
            "contentType": "navigation"
        },
        {
            "snapContentURL": "",
            "searchterms": "comment, feedback, suggest, suggestion, rate, rating, content, improve, request",
            "question": "Comment on this App",
            "contentType": "navigation"
        },
        {
            "snapContentURL": "",
            "searchterms": "note, notes, memo, memos, info, information, contacts, remember, remind, reminder",
            "question": "My Notes",
            "contentType": "navigation"
        }
    ],
    "httpStatusCode": 0
}    ;