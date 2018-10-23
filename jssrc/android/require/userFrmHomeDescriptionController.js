define({
    LoadData: function() {
            var urlConfig;
            var hostLocal = "192.168.0.21:8080";
            var hostRemote = "ec2-54-208-62-197.compute-1.amazonaws.com";
            var host = hostRemote;
            var baseURL = "http://" + host + "/snap-web/";
            //  alert(LabelNameHomeDescription);
            var Current = kony.application.getCurrentForm();
            //Hedear
            Current.FlxHeaderInfo.LblHeader2Title.text = LabelNameHomeDescription;
            Current.FlxHeaderInfo.LblHeader2Title2.text = LabelNameHomeDescription2;
            //menu
            Current.FlxMenu2.LblHomeDescription.text = LabelNameHomeDescription;
            Current.FlxMenu2.LblHomeDescription2.text = LabelNameHomeDescription2;
            if (LabelNameHomeDescription == "SNAP Basics") {
                Current.FlxHeaderInfo.ImgLogo.src = "ic_header_basics.png";
                Current.FlxHeaderInfo.ImgHeader2Down.src = "nav_notch_down_red.png";
                Current.skin = "SknFrmTwoStepGradientRedWhite";
                //Hedaer
                Current.FlxMenu2.FlxBackground.skin = "SknFlxRed";
                Current.FlxMenu2.flxFooter.ImgUpMenu.src = "nav_notch_up_red.png";
                urlConfig = {
                    URL: baseURL + "snap_basics.html",
                    requestMethod: constants.BROWSER_REQUEST_METHOD_GET
                };
            } else if (LabelNameHomeDescription == "Applying for SNAP") {
                Current.FlxHeaderInfo.ImgLogo.src = "ic_header_applying.png";
                Current.FlxHeaderInfo.ImgHeader2Down.src = "nav_notch_down_grey.png";
                Current.skin = "SknFrmTwoStepGradientGreyWhite";
                //Hedaer
                Current.FlxMenu2.FlxBackground.skin = "SknFlxGrey";
                Current.FlxMenu2.flxFooter.ImgUpMenu.src = "nav_notch_up_grey.png";
                urlConfig = {
                    URL: baseURL + "applying_for_snap.html",
                    requestMethod: constants.BROWSER_REQUEST_METHOD_GET
                };
            } else if (LabelNameHomeDescription == "Keeping SNAP Benefits") {
                Current.FlxHeaderInfo.ImgLogo.src = "ic_header_keep.png";
                Current.FlxHeaderInfo.ImgHeader2Down.src = "nav_notch_down_green.png";
                Current.skin = "SknFrmTwoStepGradientGreenWhite";
                //Hedaer
                Current.FlxMenu2.FlxBackground.skin = "SknFlxGreen";
                Current.FlxMenu2.flxFooter.ImgUpMenu.src = "nav_notch_up_green.png";
                urlConfig = {
                    URL: baseURL + "snap_reporting.html",
                    requestMethod: constants.BROWSER_REQUEST_METHOD_GET
                };
            } else if (LabelNameHomeDescription == "Using Your EBT Card") {
                Current.FlxHeaderInfo.ImgLogo.src = "ic_header_card.png";
                Current.FlxHeaderInfo.ImgHeader2Down.src = "nav_notch_down_lightblue.png";
                Current.skin = "SknFrmTwoStepGradientSkyBlueWhite";
                //Hedaer
                Current.FlxMenu2.FlxBackground.skin = "SknFlxSkyBlue";
                Current.FlxMenu2.flxFooter.ImgUpMenu.src = "nav_notch_up_lightblue.png";
                urlConfig = {
                    URL: baseURL + "using_your_ebt_card.html",
                    requestMethod: constants.BROWSER_REQUEST_METHOD_GET
                };
            } else if (LabelNameHomeDescription == "More Food Resources") {
                Current.FlxHeaderInfo.ImgLogo.src = "ic_header_resources.png";
                Current.FlxHeaderInfo.ImgHeader2Down.src = "nav_notch_down.png";
                Current.skin = "SknFrmTwoStepGradientDarkRedWhite";
                //Hedaer
                Current.FlxMenu2.FlxBackground.skin = "SknFlxDarkRed";
                Current.FlxMenu2.flxFooter.ImgUpMenu.src = "nav_notch_up.png";
                urlConfig = {
                    URL: baseURL + "more_food_resources.html",
                    requestMethod: constants.BROWSER_REQUEST_METHOD_GET
                };
            } else if (LabelNameHomeDescription == "SNAP Smart Tips") {
                Current.FlxHeaderInfo.ImgLogo.src = "ic_header_tips.png";
                Current.FlxHeaderInfo.ImgHeader2Down.src = "nav_notch_down_yellow.png";
                Current.skin = "SknFrmTwoStepGradientYellowWhite";
                //Hedaer
                Current.FlxMenu2.FlxBackground.skin = "SknFlxYellow";
                Current.FlxMenu2.flxFooter.ImgUpMenu.src = "nav_notch_up_yellow.png";
                urlConfig = {
                    URL: baseURL + "smart_tips.html",
                    requestMethod: constants.BROWSER_REQUEST_METHOD_GET
                };
            }
            this.view.contentBrowser.requestURLConfig = urlConfig;
            //alert(LabelNameHomeDescription2);
        }
        //Type your controller code here 
});