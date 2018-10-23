define({ 

  onNavigate:function(param)
  {
    try{    
      if(param)
      {
        kony.print("if HomeDescController onNavigate param : "+JSON.stringify(param));
        LabelNameHomeDescription = "";
        LabelNameHomeDescription2 = "";        
        this.view.FlxHeaderInfo.LblHeader2Title.info = param;
      }
      else
      {
        kony.print("else HomeDescController onNavigate");
      }
    }
    catch(e){
      kony.print("FrmHomeDescController HideSearch catch : "+e);
    }  
  },

  LoadData:function (){
    try{    
      var urlConfig;
      var hostRemote = "https://mobile-dev.jfs.ohio.gov";
      var baseURL = hostRemote + "/snap-web/";

      //  alert(LabelNameHomeDescription);
      var Current = kony.application.getCurrentForm();
      //Hedear
      Current.FlxHeaderInfo.LblHeader2Title.text = LabelNameHomeDescription;
      Current.FlxHeaderInfo.LblHeader2Title2.text = LabelNameHomeDescription2;
      //menu
      Current.FlxMenu2.LblHomeDescription.text = LabelNameHomeDescription;
      Current.FlxMenu2.LblHomeDescription2.text = LabelNameHomeDescription2;

      this.view.FlxHeaderInfo.ImgLogo.setVisibility(true);
      this.view.FlxHeaderInfo.LblHeader2Title2.setVisibility(true);        

      if(LabelNameHomeDescription == "SNAP Basics") {
        Current.FlxHeaderInfo.ImgLogo.src = "ic_header_basics.png";
        Current.FlxHeaderInfo.ImgHeader2Down.src = "nav_notch_down_red.png";
        Current.skin = "SknFrmTwoStepGradientRedWhite";
        //search color
        Current.FlxHeaderInfo.FlxSearch.skin = "SknFlxHeaderRed";
        Current.FlxHeaderInfo.FlxSearch.TxtBoxSearch.skin = "TxtBoxSearchRed";
        Current.FlxHeaderInfo.FlxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusRed";
		//search component
        Current.flxSearch.flxHeaderSearchBox.skin = "SknFlxHeaderRed";
        Current.flxSearch.TxtBoxSearch.skin = "TxtBoxSearchRed";
        Current.flxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusRed";           
        //Hedaer
        Current.FlxMenu2.FlxBackground.skin = "SknFlxRed";
        Current.FlxMenu2.flxFooter.ImgUpMenu.src = "nav_notch_up_red.png";
        urlConfig = { URL: baseURL + "snap_basics.html", 
                     requestMethod:constants.BROWSER_REQUEST_METHOD_GET };
		this.view.contentBrowser.requestURLConfig = urlConfig;
      }
      else if(LabelNameHomeDescription == "Applying for SNAP"){
        Current.FlxHeaderInfo.ImgLogo.src = "ic_header_applying.png";
        Current.FlxHeaderInfo.ImgHeader2Down.src = "nav_notch_down_grey.png";
        Current.skin = "SknFrmTwoStepGradientGreyWhite";
        //search color
        Current.FlxHeaderInfo.FlxSearch.skin = "SknFlxHeaderGrey";
        Current.FlxHeaderInfo.FlxSearch.TxtBoxSearch.skin = "TxtBoxSearchGrey";
        Current.FlxHeaderInfo.FlxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusGrey";
		//search component
        Current.flxSearch.flxHeaderSearchBox.skin = "SknFlxHeaderGrey";
        Current.flxSearch.TxtBoxSearch.skin = "TxtBoxSearchGrey";
        Current.flxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusGrey";        
        //Hedaer
        Current.FlxMenu2.FlxBackground.skin = "SknFlxGrey";
        Current.FlxMenu2.flxFooter.ImgUpMenu.src = "nav_notch_up_grey.png";
        urlConfig = { URL: baseURL + "applying_for_snap.html", 
                     requestMethod:constants.BROWSER_REQUEST_METHOD_GET };
		this.view.contentBrowser.requestURLConfig = urlConfig;
      }
      else if(LabelNameHomeDescription == "Keeping SNAP Benefits"){
        Current.FlxHeaderInfo.ImgLogo.src = "ic_header_keep.png";
        Current.FlxHeaderInfo.ImgHeader2Down.src = "nav_notch_down_green.png";
        Current.skin = "SknFrmTwoStepGradientGreenWhite";
        //search color
        Current.FlxHeaderInfo.FlxSearch.skin = "SknFlxHeaderGreen";
        Current.FlxHeaderInfo.FlxSearch.TxtBoxSearch.skin = "TxtBoxSearchGreen";
        Current.FlxHeaderInfo.FlxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusGreen";
		//search component
        Current.flxSearch.flxHeaderSearchBox.skin = "SknFlxHeaderGreen";
        Current.flxSearch.TxtBoxSearch.skin = "TxtBoxSearchGreen";
        Current.flxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusGreen";
        //Hedaer
        Current.FlxMenu2.FlxBackground.skin = "SknFlxGreen";
        Current.FlxMenu2.flxFooter.ImgUpMenu.src = "nav_notch_up_green.png";
        urlConfig = { URL: baseURL + "snap_reporting.html", 
                     requestMethod:constants.BROWSER_REQUEST_METHOD_GET };
		this.view.contentBrowser.requestURLConfig = urlConfig;
      }
      else if(LabelNameHomeDescription == "Using Your EBT Card"){
        Current.FlxHeaderInfo.ImgLogo.src = "ic_header_card.png";
        Current.FlxHeaderInfo.ImgHeader2Down.src = "nav_notch_down_lightblue.png";
        Current.skin = "SknFrmTwoStepGradientSkyBlueWhite";
        //search color
        Current.FlxHeaderInfo.FlxSearch.skin = "SknFlxHeaderSkyBlue";
        Current.FlxHeaderInfo.FlxSearch.TxtBoxSearch.skin = "TxtBoxSearchSkyBlue";
        Current.FlxHeaderInfo.FlxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusSkyBlue";
		//search component
        Current.flxSearch.flxHeaderSearchBox.skin = "SknFlxHeaderSkyBlue";
        Current.flxSearch.TxtBoxSearch.skin = "TxtBoxSearchSkyBlue";
        Current.flxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusSkyBlue";
        //Hedaer
        Current.FlxMenu2.FlxBackground.skin = "SknFlxSkyBlue";
        Current.FlxMenu2.flxFooter.ImgUpMenu.src = "nav_notch_up_lightblue.png";
        urlConfig = { URL: baseURL + "using_your_ebt_card.html", 
                     requestMethod:constants.BROWSER_REQUEST_METHOD_GET };
		this.view.contentBrowser.requestURLConfig = urlConfig;
      }
      else if(LabelNameHomeDescription == "More Food Resources"){
        Current.FlxHeaderInfo.ImgLogo.src = "ic_header_resources.png";
        Current.FlxHeaderInfo.ImgHeader2Down.src = "nav_notch_down.png";
        Current.skin = "SknFrmTwoStepGradientDarkRedWhite";
        //search color
        Current.FlxHeaderInfo.FlxSearch.skin = "SknFlxHeaderDarkRed";
        Current.FlxHeaderInfo.FlxSearch.TxtBoxSearch.skin = "TxtBoxSearchDarkRed";
        Current.FlxHeaderInfo.FlxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusDarkRed";
		//search component
        Current.flxSearch.flxHeaderSearchBox.skin = "SknFlxHeaderDarkRed";
        Current.flxSearch.TxtBoxSearch.skin = "TxtBoxSearchDarkRed";
        Current.flxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusDarkRed";
        //Hedaer
        Current.FlxMenu2.FlxBackground.skin = "SknFlxDarkRed";
        Current.FlxMenu2.flxFooter.ImgUpMenu.src = "nav_notch_up.png";
        urlConfig = { URL: baseURL + "more_food_resources.html", 
                     requestMethod:constants.BROWSER_REQUEST_METHOD_GET };
		this.view.contentBrowser.requestURLConfig = urlConfig;
      }
      else if(LabelNameHomeDescription == "SNAP Smart Tips"){
        Current.FlxHeaderInfo.ImgLogo.src = "ic_header_tips.png";
        Current.FlxHeaderInfo.ImgHeader2Down.src = "nav_notch_down_yellow.png";
        Current.skin = "SknFrmTwoStepGradientYellowWhite";
        //search color
        Current.FlxHeaderInfo.FlxSearch.skin = "SknFlxHeaderYellow";
        Current.FlxHeaderInfo.FlxSearch.TxtBoxSearch.skin = "TxtBoxSearchYellow";
        Current.FlxHeaderInfo.FlxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusYellow";
		//search component
        Current.flxSearch.flxHeaderSearchBox.skin = "SknFlxHeaderYellow";
        Current.flxSearch.TxtBoxSearch.skin = "TxtBoxSearchYellow";
        Current.flxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusYellow";
        //Hedaer
        Current.FlxMenu2.FlxBackground.skin = "SknFlxYellow";
        Current.FlxMenu2.flxFooter.ImgUpMenu.src = "nav_notch_up_yellow.png";
        urlConfig = { URL: baseURL + "smart_tips.html", 
                     requestMethod:constants.BROWSER_REQUEST_METHOD_GET };
		this.view.contentBrowser.requestURLConfig = urlConfig;
      }
      else
      {
        this.view.FlxHeaderInfo.ImgLogo.setVisibility(false);
        this.view.FlxHeaderInfo.LblHeader2Title2.setVisibility(false);
        this.view.FlxHeaderInfo.ImgHeader2Down.src = "nav_notch_down.png";
        this.view.skin = "SknFrmTwoStepGradientDarkRedWhite";
        //search color
        this.view.FlxHeaderInfo.FlxSearch.skin = "SknFlxHeaderDarkRed";
        this.view.FlxHeaderInfo.FlxSearch.TxtBoxSearch.skin = "TxtBoxSearchDarkRed";
        this.view.FlxHeaderInfo.FlxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusDarkRed";
		//search component
        this.view.flxSearch.flxHeaderSearchBox.skin = "SknFlxHeaderDarkRed";
        this.view.flxSearch.TxtBoxSearch.skin = "TxtBoxSearchDarkRed";
        this.view.flxSearch.TxtBoxSearch.focusSkin = "SknTxtBoxSearchFocusDarkRed";
        //Header
        this.view.FlxMenu2.FlxBackground.skin = "SknFlxDarkRed";
        
		var param = this.view.FlxHeaderInfo.LblHeader2Title.info;
        var url = checkNullUndefinedEmpty(param.url);
        kony.print("url : "+url);
        var urlConfig = {URL: url,requestMethod:constants.BROWSER_REQUEST_METHOD_GET}; 
        kony.print("urlConfig : "+JSON.stringify(urlConfig));
        this.view.FlxHeaderInfo.LblHeader2Title.text = checkNullUndefinedEmpty(param.screenname);
        this.view.contentBrowser.requestURLConfig = urlConfig;
      }  

      //this.view.contentBrowser.requestURLConfig = urlConfig;

      //alert(LabelNameHomeDescription2);
    }
    catch(e){
      kony.print("FrmHomeDescController onLoad catch : "+e);
    }  
  }
  //Type your controller code here 

});