define({
    fetchWhatsNearMe: function() {
        try {
            var inputparams = {};
            var headerParams = {};
            var intgService = null;
            intgService = client.getIntegrationService("fetchSnapData");
            intgService.invokeOperation("getWhatsNearMe", headerParams, inputparams, this.fetchWhatsNearMeSuccessCallback, this.fetchWhatsNearMeErrorCallback);
        } catch (e) {
            kony.print("fetchWhatsNearMe exception: : " + e);
        }
    },
    fetchWhatsNearMeSuccessCallback: function(response) {
        var locationData = response.locations;
        //save the original list in memory to use for filtering
        setLocationData(locationData);
        this.setDataOnMap(locationData);
        kony.application.dismissLoadingScreen();
    },
    fetchWhatsNearMeErrorCallback: function(result) {
        alert("Failed to Fetch Locations");
        kony.application.dismissLoadingScreen();
    },
    setDataOnMap: function(data) {
        var farmers = "ic_map_farmers_no_perk.png";
        var agency = "ic_map_agency.png";
        var perk = "ic_map_farmers_perk.png";
        var wic = "ic_map_wic.png";
        if (kony.os.deviceInfo().name == "iPhone") {
            farmers = "ic_map_farmers_no_perk2.png";
            agency = "ic_map_agency2.png";
            perk = "ic_map_farmers_perk2.png";
            wic = "ic_map_wic2.png";
        }
        try {
            this.view.MapNear.widgetDataMapForCallout = {
                ImgLocation: "ImgLocation",
                ImgNumberLocation: "ImgNumberLocation",
                ImgTime: "ImgTime",
                ImgSee: "ImgSee",
                ImgShare: "ImgShare",
                ImgTraingle: "ImgTraingle",
                lblTitle: "lblTitle",
                lblDesc: "lblDesc",
                lblAdrs: "lblAdrs",
                lblPhoneNo: "lblPhoneNo",
                lblTimings: "lblTimings",
                imgNext: "imgNext"
            };
            var list = [];
            for (var i = 0; i < data.length; i++) {
                var streetNumber = data[i].Number;
                var streetName = data[i].StreetAddress;
                var city = data[i].City;
                var state = "OH";
                var zip = data[i].ZipCode;
                if (zip === "") {
                    zip = data[i].Zip;
                }
                var locationType = data[i].LocationType;
                var imageType = null;
                var title = null;
                var description = null;
                var hours = "";
                var address = streetNumber + " " + streetName + "\n" + city + ", " + state + " " + zip;
                if (locationType === "Farmers_Market") {
                    imageType = perk;
                    title = data[i].MarketName;
                    description = "Farmers Market PP";
                    hours = data[i].Combined;
                } else if (locationType === "Groceries_List") {
                    imageType = agency;
                    title = data[i].GroceryStoreName;
                    description = "Grocery Store";
                    hours = data[i].HoursofOperation;
                } else if (locationType === "Farmers_Market-Non-PP") {
                    imageType = farmers;
                    title = data[i].FarmersMarketName;
                    description = "Farmers Market Non-PP";
                    hours = data[i].Combined;
                } else if (locationType === "WIC_Clinics") {
                    imageType = wic;
                    title = data[i].WICProgram;
                    description = "";
                    streetName = data[i].Address;
                    if (data[i].Address2 !== "") {
                        streetName += "\n" + data[i].Address2;
                    }
                    address = streetName + "\n" + city + ", " + state + " " + zip;
                    var hours1 = data[i].HoursofOperation1;
                    var hours2 = data[i].HoursofOperation2;
                    var hours3 = data[i].HoursofOperation3;
                    var hours4 = data[i].HoursofOperation4;
                    if (hours1 !== "") hours += hours1;
                    if (hours2 !== "") hours += hours2;
                    if (hours3 !== "") hours += hours3;
                    if (hours4 !== "") hours += hours4;
                }
                list.push({
                    "lat": checkNullUndefinedEmpty(data[i].Latitude),
                    "lon": checkNullUndefinedEmpty(data[i].Longitude),
                    "image": imageType,
                    "showcallout": true,
                    "calloutData": {
                        lblTitle: checkNullUndefinedEmpty(title),
                        lblDesc: checkNullUndefinedEmpty(description),
                        lblAdrs: checkNullUndefinedEmpty(address),
                        lblPhoneNo: checkNullUndefinedEmpty(data[i].Phone),
                        lblTimings: checkNullUndefinedEmpty(hours),
                        ImgLocation: "ic_map_location.png",
                        ImgNumberLocation: "ic_map_phone.png",
                        ImgTime: "ic_map_time.png",
                        ImgSee: "ic_photos.png",
                        ImgShare: "ic_more.png",
                        ImgTraingle: "traingle_map.png"
                    }
                });
            }
            this.view.MapNear.locationData = list;
        } catch (e) {
            kony.print("setDataOnMap catch : " + e);
        }
    },
    filterMapData: function() {
        try {
            var data = getLocationData();
            var countyDirectorySelection = this.view.flxMenuOption.switchCountyDirectory.selectedIndex;
            var farmersMarketWithPPSelection = this.view.flxMenuOption.switchFarmersMarketWithPP.selectedIndex;
            var farmersMarketWithoutPPSelection = this.view.flxMenuOption.switchFarmersMarketWithoutPP.selectedIndex;
            var wicClinicSelection = this.view.flxMenuOption.switchWicClinic.selectedIndex;
            var selections = [];
            //0 = enabled, 1 = disabled
            if (countyDirectorySelection === 0) selections.push("County_Directory");
            if (farmersMarketWithPPSelection === 0) selections.push("Farmers_Market");
            if (farmersMarketWithoutPPSelection === 0) selections.push("Farmers_Market-Non-PP");
            if (wicClinicSelection === 0) selections.push("WIC_Clinics");
            var filteredData = [];
            for (var i = 0; i < data.length; i++) {
                var locationType = data[i].LocationType;
                if (selections.indexOf(locationType) !== -1) {
                    filteredData.push(data[i]);
                }
            }
            this.setDataOnMap(filteredData);
        } catch (e) {
            kony.print("filterMapData catch : " + e);
        }
    }
});