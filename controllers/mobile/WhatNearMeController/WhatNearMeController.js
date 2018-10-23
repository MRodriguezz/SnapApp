define({ 
  
  getCurrentLocation:function() {
    var positionoptions = {timeout: 15000};
    kony.location.getCurrentPosition(this.getCurrentLocationSuccess, this.getCurrentLocationFailure, positionoptions );     
  },
  
  getCurrentLocationSuccess:function(position) {
    setCurrentPosition(position);
    this.fetchWhatsNearMe();
  },
  
  getCurrentLocationFailure:function(positionerror) {
	this.displayLocationErrorMessages(positionerror.code); 
  },  
  
  fetchWhatsNearMe:function() {
    kony.model.ApplicationContext.showLoadingScreen("Loading");

    this.view.flxMenuOption.switchCountyDirectory.selectedIndex = 0;
    this.view.flxMenuOption.switchFarmersMarketWithPP.selectedIndex = 0;
    this.view.flxMenuOption.switchFarmersMarketWithoutPP.selectedIndex = 0;
    this.view.flxMenuOption.switchWicClinic.selectedIndex = 0;
    
    try
    {
      var inputparams = {};
      var headerParams = {};
      var intgService = null;
      var position = getCurrentPosition();
      if(position !== null) {
        inputparams = {"origins": position.coords.latitude + "," + position.coords.longitude};
      }

      intgService = client.getIntegrationService("fetchSnapData");
      intgService.invokeOperation("getWhatsNearMe",headerParams,inputparams,
                                  this.fetchWhatsNearMeSuccessCallback, this.fetchWhatsNearMeErrorCallback);
    }
    catch(e)
    {
      kony.print("fetchWhatsNearMe exception: : " + e);
    }
  }, 
  
  fetchWhatsNearMeSuccessCallback:function(response) {
    setLocationData(response.locations); 
    this.fetchCountyDirectoryData();
  },

  fetchWhatsNearMeErrorCallback:function(result) {
    alert("Failed to Fetch Locations");
    kony.application.dismissLoadingScreen();
  },
  
  fetchCountyDirectoryData:function() {
      var inputparams = {};
      var headerParams = {};
      var intgService = null;
      var position = getCurrentPosition();
      if(position !== null) {
        inputparams = {"origins": position.coords.latitude + "," + position.coords.longitude};
      }    
      intgService = client.getIntegrationService("fetchSnapData");
      intgService.invokeOperation("countyDirectory",headerParams,inputparams,
                                  this.fetchCountyDirectorySuccessCallback, this.fetchCountyDirectoryErrorCallback);
  }, 
  
  fetchCountyDirectorySuccessCallback:function(result) {
    setCountyDirectory(result.CountyDirectory);
    this.setDataOnMap(locationData, countyDirectory);
  },

  fetchCountyDirectoryErrorCallback:function(result) {
    alert("Failed to Fetch County Directory");
    kony.application.dismissLoadingScreen();
  },   
 
  setDataOnMap: function (data, countyDirectory) {
    
    var dataSize = data.length;
    var countyDirectorySize = countyDirectory.length;
    
    kony.print("Locations: " + dataSize + ", County Directories: " + countyDirectorySize);
    
    var farmers = "ic_map_farmers_no_perk.png";
    var agency = "ic_map_agency.png";
    var perk = "ic_map_farmers_perk.png";
    var wic = "ic_map_wic.png";
    
    if(kony.os.deviceInfo().name == "iPhone"){
      farmers = "ic_map_farmers_no_perk2.png";
      agency = "ic_map_agency2.png";
      perk = "ic_map_farmers_perk2.png";
      wic = "ic_map_wic2.png";
    }    
    
    try{	
      this.view.MapNear.widgetDataMapForCallout= {
        ImgLocation: "ImgLocation", 
        ImgNumberLocation: "ImgNumberLocation",
        ImgTime: "ImgTime",
        ImgSee: "ImgSee",
        ImgShare: "ImgShare",
        ImgTraingle: "ImgTraingle",
        
        lblTitle:"lblTitle",
        lblDesc:"lblDesc",
        lblAdrs:"lblAdrs",
        lblPhoneNo:"lblPhoneNo",
        lblTimings:"lblTimings",
        imgNext:"imgNext"
      };
      var list = [];
      
      //add locationData to list
      for(var i =0; i < data.length; i++) {

        var streetNumber = data[i].Number;
        var streetName = data[i].StreetAddress;
        var city = data[i].City;
        var state = "OH";
        var zip = data[i].ZipCode;
        
        if(zip === "") {
          zip = data[i].Zip;
        }
        
        var locationType = data[i].LocationType;
        var imageType = null;
        var title = null;
        var distance = data[i].Distance;
        var hours = "";
        var address = streetNumber + " " + streetName + "\n" + city + ", " + state + " " + zip;
        var description = "";
        
        if(locationType === "Farmers_Market") {
          imageType = perk;
		  title = data[i].MarketName;
          hours = data[i].Combined;
          description = "Farmer's Market PP";
        }
        else if(locationType === "Groceries_List") {
          imageType = agency;
          title = data[i].GroceryStoreName;
          hours = data[i].HoursofOperation;
          description = "Grocery Store";
        }
        else if(locationType === "Farmers_Market-Non-PP") {
          imageType = farmers;
          title = data[i].FarmersMarketName;
          hours = data[i].Combined;
          description = "Farmer's Market Non-PP";
        }        
        else if(locationType === "WIC_Clinics") {
          imageType = wic;
          title = data[i].WICProgram;
          description = "WIC Clinic";
          streetName = data[i].Address;
          if(data[i].Address2 !== "") {
            streetName += "\n" + data[i].Address2;
          }
          address = streetName + "\n" + city + ", " + state + " " + zip;
          var hours1 = data[i].HoursofOperation1;
          var hours2 = data[i].HoursofOperation2;
          var hours3 = data[i].HoursofOperation3;
          var hours4 = data[i].HoursofOperation4;
          if(hours1 !== "") 
            hours += hours1;
          if(hours2 !== "") 
            hours += hours2;
          if(hours3 !== "") 
            hours += hours3;
          if(hours4 !== "")
            hours += hours4;
        }
        
        if(distance !== "") {
        	description += " - " + distance + " away";
        }        
        
        list.push({
          "lat": checkNullUndefinedEmpty(data[i].Latitude) ,
          "lon": checkNullUndefinedEmpty(data[i].Longitude),
          "image": imageType,
          "showcallout": true,
          "calloutData":{     
            lblTitle:checkNullUndefinedEmpty(title),
            lblDesc:checkNullUndefinedEmpty(description),
            lblAdrs:checkNullUndefinedEmpty(address),
            lblPhoneNo:checkNullUndefinedEmpty(data[i].Phone),
            lblTimings:checkNullUndefinedEmpty(hours),

            ImgLocation: "ic_map_location.png", 
          	ImgNumberLocation: "ic_map_phone.png",
          	ImgTime: "ic_map_time.png",
          	ImgSee: "ic_photos.png",
          	ImgShare: "ic_more.png",
          	ImgTraingle: "traingle_map.png"            
          }	
        });
      }
       
      //add countyDirectory data to list
      for(var j = 0; j < countyDirectory.length; j++) {

        var phone = "";
        var phone1 = countyDirectory[j].phone1;
        var phone2 = countyDirectory[j].phone2;
        var distanceToAgency = countyDirectory[j].Distance;
        var agencyDescription = "County Agency";
        if(phone1 !== "") {
			phone = phone1;
        }
        else if(phone2 !== "") {
          phone = phone2;
        }
        
        if(distanceToAgency !== "") {
        	agencyDescription += " - " + distanceToAgency + " away";
        }        
      	
        list.push({
          "lat": checkNullUndefinedEmpty(countyDirectory[j].latitude) ,
          "lon": checkNullUndefinedEmpty(countyDirectory[j].longitude),
          "image": agency,
          "showcallout": true,
          "calloutData":{     
            lblTitle:checkNullUndefinedEmpty(countyDirectory[j].agencyName),
            lblDesc:checkNullUndefinedEmpty(agencyDescription),
            lblAdrs:checkNullUndefinedEmpty(countyDirectory[j].address),
            lblPhoneNo:checkNullUndefinedEmpty(phone),
            lblTimings:checkNullUndefinedEmpty(countyDirectory[j].hours),
            ImgLocation: "ic_map_location.png", 
          	ImgNumberLocation: "ic_map_phone.png",
          	ImgTime: "ic_map_time.png",
          	ImgSee: "ic_photos.png",
          	ImgShare: "ic_more.png",
          	ImgTraingle: "traingle_map.png"            
          }	
        });
        
      }
      this.view.MapNear.locationData=list;
      var position = getCurrentPosition();
      if(position !== null) {
		 this.setCurrentLocationPin(position);
      }
      kony.application.dismissLoadingScreen();
    }
    catch(e)
    {
      kony.print("setDataOnMap catch : " + e);
    }
  },


  filterMapData : function ()
  {
    try{

      var data = getLocationData();
      var countyDirectory = getCountyDirectory();
      
      var countyDirectorySelection = this.view.flxMenuOption.switchCountyDirectory.selectedIndex;
      var farmersMarketWithPPSelection = this.view.flxMenuOption.switchFarmersMarketWithPP.selectedIndex;
      var farmersMarketWithoutPPSelection = this.view.flxMenuOption.switchFarmersMarketWithoutPP.selectedIndex;
      var wicClinicSelection = this.view.flxMenuOption.switchWicClinic.selectedIndex;
      
      var selections = [];
      //0 = enabled, 1 = disabled
      if(countyDirectorySelection === 0) 
        selections.push("County_Directory");
      if(farmersMarketWithPPSelection === 0)
        selections.push("Farmers_Market");
      if(farmersMarketWithoutPPSelection === 0)
        selections.push("Farmers_Market-Non-PP");
      if(wicClinicSelection === 0)
        selections.push("WIC_Clinics");
      
      var filteredData = [];
      for(var i =0; i < data.length; i++)
      {
      	var locationType = data[i].LocationType;
        
        if(selections.indexOf(locationType) !== -1) {
          filteredData.push(data[i]);
        }
      }
      
      var filteredCountyDirectory = [];
      if(countyDirectorySelection === 0) {
        filteredCountyDirectory = countyDirectory;
      }
      
      this.setDataOnMap(filteredData, filteredCountyDirectory);
      
    }
    catch(e)
    {
      kony.print("filterMapData catch : " + e);
    }
  },

  setCurrentLocationPin:function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    
    //testing purpose only
    //latitude = "40.071168";
    //longitude = "-82.523855";     
    
    var pin1 = 
      {
      id : "id1", // id is mandatory for every pin
      lat: latitude,
      lon: longitude,
      name : "Current Location",
      image : "pinb.png",
      showCallout : true
    };
    
    this.view.MapNear.addPin(pin1);
    this.view.MapNear.navigateToLocation(pin1, true, true); 
  },  
  
  locateMe:function() {
    var positionoptions = {timeout: 15000};
    kony.location.getCurrentPosition(this.locateMeSuccesscallback, this.locateMeErrorcallback, positionoptions );     
  },
  
  locateMeSuccesscallback:function(position)
  {
    setCurrentPosition(position);
    this.setCurrentLocationPin(position);
  },

  locateMeErrorcallback:function(positionerror)
  {
	this.displayLocationErrorMessages(positionerror.code); 
  },
  
  displayLocationErrorMessages:function(errorCode) {
    var errorMessage = "";
    if(errorCode === 1) {
    	errorMessage = "Please turn on location services";  
    }
    else if(errorCode === 2) {
    	errorMessage = "Couldn’t find your location, please try again";
    }
    else if(errorCode === 3) {
		errorMessage = "An error occurred, please try again";      
    }
    alert(errorMessage);
  } 
  
});