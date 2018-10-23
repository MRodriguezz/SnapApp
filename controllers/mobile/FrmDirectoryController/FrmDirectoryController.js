define({ 
  
  onNavigate:function(param)
  {
  	this.fetchCountyDirectoryData();	
  },
  
  fetchCountyDirectoryData:function() {
    try
    {
      var inputparams = {};
      var headerParams = {};
      var intgService = null;

      intgService = client.getIntegrationService("fetchSnapData");
      intgService.invokeOperation("countyDirectory",headerParams,inputparams,
                                  this.fetchCountyDirectorySuccessCallback, this.fetchCountyDirectoryErrorCallback);
    }
    catch(e)
    {
      kony.print("fetchCountyDirectoryData frmDirectoryControllder catch : "+e);
    }
  }, 
  
  fetchCountyDirectorySuccessCallback:function(result) {
    kony.print("inside fetchCountyDirectorySuccessCallback: "+JSON.stringify(result));
    var countyDirectoryResult = result;
   	this.SetDataForDirectory(countyDirectoryResult);
    kony.application.dismissLoadingScreen();
  },

  fetchCountyDirectoryErrorCallback:function(result) {
    kony.print("Inside fetchCountyDirectoryErrorCallback: "+JSON.stringify(result));
    kony.application.dismissLoadingScreen();
  },  
  
  SetDataForDirectory:function(countyDirectoryResult){
    kony.print("inside SetDataForDirectory");
    var data = [];
    if(countyDirectoryResult.CountyDirectory !== null && countyDirectoryResult.CountyDirectory !== undefined && countyDirectoryResult.CountyDirectory !== "") {
      kony.print("inside CountyDirectory");
	  kony.print("segment widget:"+this.view.segDirectory);
      this.view.segDirectory.widgetDataMap = {lblHeaderDirectory : "lblHeaderDirectory",NameDirectory:"county", hours: "hours" ,address: "address" ,latitude: "latitude" ,phone2: "phone2" ,fax: "fax" ,agencyName: "agencyName" ,longitude: "longitude" ,phone1: "phone1",website:"website"};			//	, DescriptionData:""

      data = this.makeHeaderDataForDirectory(countyDirectoryResult.CountyDirectory); 
      kony.print("inside data:"+JSON.stringify(data));
      this.view.segDirectory.setData(data);
      //this.view.segDirectory.setData(data);   
      kony.print("inside done setting data.");
    }
    else
    {
      alert("Unable to get County Directory Data");
    }
  },

  /****		to make data segment data in dictionary format	*****/  
  makeHeaderDataForDirectory:function(data){
    kony.print("inside makeHeaderDataForDirectory");
    var segmentData = [];
    try{
      //	copy of directory data passed as param
      var directorydata = JSON.parse(JSON.stringify(data));		
      if(directorydata !== null && directorydata !== undefined && directorydata.length !== 0)
      {
        // 	pushing data in array for segment 
        for(var i = 0; i < directorydata.length; i++)
        {
          var countyname = checkNullUndefinedEmpty(directorydata[i].county);
          //	check if any element is present in segmentData
          if(segmentData.length !== 0 )
          {
            var matchingElementIndex = "";
            for(var j=0; j<segmentData.length; j++)
            {
              /***	finding if header is matching with the first letter of the countyname	***/
              if(segmentData[j][0].lblHeaderDirectory == countyname.charAt(0))
              {
                matchingElementIndex = j;
                break;
              }
//               else
//               {
//                 kony.print("not countyname : "+countyname.charAt(0));
//               }
            }

            /***	pushing data into same segDirectory when matching otherwise into new when not matching		***/
            if(matchingElementIndex !== "")
            {
//              kony.print("matching segDirectory index element : "+JSON.stringify(segmentData[matchingElementIndex][0]));
              segmentData[matchingElementIndex][1].push(directorydata[i]);
            }
            else
            {
//              kony.print("not matching element countyname : "+countyname);
              segmentData.push([{"lblHeaderDirectory":countyname.charAt(0)},[directorydata[i]]]);
            }
          }
          else
          {
            //	push first element to segmentData when it is empty
//            kony.print("countyname : "+countyname);
            segmentData.push([{"lblHeaderDirectory":countyname.charAt(0)},[directorydata[i]]]);
          }
//          kony.print("makeHeaderDataForDirectory segmentData : "+JSON.stringify(segmentData));
        }  
      }
      else
      {
        kony.print("directorydata is empty");
      }  
    }
    catch(e)
    {
      kony.print("makeHeaderDataForDirectory catch "+e);
    }  
    return segmentData;
  },
  
  ClickRowDirectory:function() {
    var item = this.view.segDirectory.selectedRowItems;
  //  kony.print("item : "+JSON.stringify(item));

    var navToProspect = new kony.mvc.Navigation("FrmDirectoryDescription");
    navToProspect.navigate(item);

  },  

});