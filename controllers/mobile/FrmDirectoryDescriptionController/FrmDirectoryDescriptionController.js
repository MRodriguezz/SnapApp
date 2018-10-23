define({ 

  onNavigate:function(param)
  {
    try{    
      var PhoneNumTapped = 1;
      kony.print("FrmDirectory context object : "+JSON.stringify(param));

      var phoneno1 = checkNullUndefinedEmpty(param[0].phone1);
      var phoneno2 = checkNullUndefinedEmpty(param[0].phone2);
      var latitude = param[0].latitude;
      var longitude = param[0].longitude;  
      var website = checkNullUndefinedEmpty(param[0].website);
      var faxno = checkNullUndefinedEmpty(param[0].fax);
      var hours = checkNullUndefinedEmpty(param[0].hours);
      var list = [];
      list.push(
        {
          "lat":latitude, 
          "lon":longitude, 
          "image":"ic_map_agency2.png", 
          "showcallout":false, 
          "name": "Current Position", 
          "desc": ""
        });
      kony.print("phoneno1 : "+phoneno1+", phoneno2 : "+phoneno2);
      var richtextData = "";
      if(phoneno1 !== "") {
        this.view.lblPhone1.text = phoneno1;
        this.view.lblPhone1.onTouchEnd = this.contactCounty;
      }

      if(phoneno2 !== "") {
        this.view.lblPhoneNumberSeparator.setVisibility(true);
        this.view.lblPhone2.setVisibility(true);
        this.view.lblPhone2.text = phoneno2;
        this.view.lblPhone2.onTouchEnd = this.contactCounty;
      } else {
        this.view.lblPhoneNumberSeparator.setVisibility(false);
        this.view.lblPhone2.setVisibility(false);
      }

      if(website !== ""){
        this.view.flxWebsite.setVisibility(true);
        this.view.lblWebsite.text	   =	website;
        this.view.lblWebsite.onTouchEnd = function(){
          var website = checkNullUndefinedEmpty(this.text);
          kony.print("lblWebsite website : "+website);
          kony.application.openURL(website);
        };
      }
      else{
        this.view.flxWebsite.setVisibility(false);
      }

      if(faxno !== ""){
        this.view.flxFax.setVisibility(true);
        this.view.lblFax.text	=	faxno;
      }
      else{
        this.view.flxFax.setVisibility(false);
      }

      if(hours !== ""){
        this.view.flxHours.setVisibility(true);
        this.view.lblHours.text =	hours;
      }
      else{
        this.view.flxHours.setVisibility(false);
      }

      this.view.lblAgencyName.text   =	checkNullUndefinedEmpty(param[0].agencyName);
      this.view.lblAddress.text	   =	checkNullUndefinedEmpty(param[0].address);
      this.view.mapDirectoryDesc.locationData = list;
    }
    catch(e){
      kony.print("FrmHomeController HideSearch catch : "+e);
    }
  },  

  ClickRowDirectoryBack:function() {
    var navToProspect = new kony.mvc.Navigation("FrmDirectory");
    navToProspect.navigate();
  },

  contactCounty: function(eventobj) {
    var phoneno = checkNullUndefinedEmpty(eventobj.text);
    kony.print("eventobj : "+eventobj);
    kony.print("phoneno : "+phoneno);
    kony.phone.dial(phoneno);         
  },

});