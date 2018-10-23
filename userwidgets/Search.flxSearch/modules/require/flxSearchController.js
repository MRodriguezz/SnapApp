define(function() {
    
  return {
    searchHomeData: function(){
      try{
        kony.print("inside SearchHomeData");
        var resultset = searchData.SNAPSearchIndex;	//	temporary
        var searchText = checkNullUndefinedEmpty(this.view.TxtBoxSearch.text.toLowerCase());
        var searchArray = searchText.split(" ");
        var segmentData = [];
        var usedNameDirectory = [];
        //	divide text in words to search seperately
        for(var i=0; i<searchArray.length; i++)
        {
          var element = searchArray[i].trim();
          //	result to search into
          if(element !== "")
          {
            for (var j=0; j<resultset.length; j++)
            {
              // search index of element in input resultset
              //kony.print("SearchHomeData usedNameDirectory : "+JSON.stringify(usedNameDirectory));

              kony.print("resultset[j].question search : "+resultset[j].question);
              var result = resultset[j].searchterms.toLowerCase().indexOf(element);
              var question = checkNullUndefinedEmpty(resultset[j].question);
              var snapurl = checkNullUndefinedEmpty(resultset[j].snapContentURL);

              if(result !== -1 && result !== "-1" )
              {
                if(resultset[j].contentType == "search") {
                  //	navigate to specific url
                  if(usedNameDirectory.indexOf(question) === -1)
                  {
                    segmentData.push({"NameDirectory":question, "lblURL":snapurl, "imgchevron":"ic_chevron_right_grey.png"});
                    usedNameDirectory.push(question);
                  }  
                } 
                else if (resultset[j].contentType == "navigation") {
                  //	navigate to respective page 
                  if(question.indexOf("County Agency Directory") == 0) 
                  {
                    kony.print("resultset[j].question : County Agency Directory");
                    if(usedNameDirectory.indexOf(question) === -1)
                    {
                      segmentData.push({"NameDirectory":question, "imgchevron":"ic_chevron_right_grey.png"});
                      usedNameDirectory.push(question);
                    }  
                  } 
                  else if(question.indexOf("My Notes") == 0) 
                  {
                    kony.print("question : My Notes");
                    if(usedNameDirectory.indexOf(question) === -1)
                    {
                      segmentData.push({"NameDirectory":question, "imgchevron":"ic_chevron_right_grey.png"});
                      usedNameDirectory.push(question);
                    }  
                  } 
                  else if(question.indexOf("Reprot Suspected Fraud") === 0) 
                  {
                    kony.print("question : Reprot Suspected Fraud");
                    if(usedNameDirectory.indexOf(question) === -1)
                    {
                      segmentData.push({"NameDirectory":question, "imgchevron":"ic_chevron_right_grey.png"});
                      usedNameDirectory.push(question);
                    }  
                  } 
                  else if(question.indexOf("Comment on this App") === 0) 
                  {
                    kony.print("question : Comment on this App");
                    if(usedNameDirectory.indexOf(question) === -1)
                    {
                      segmentData.push({"NameDirectory":question, "imgchevron":"ic_chevron_right_grey.png"});
                      usedNameDirectory.push(question);
                    }  
                  }
                  else
                  {
                    kony.print("question : "+question);
                  }  
                }
              }
            }              
          }  
          else
          {
            kony.print("empty element : "+element);
            return;
          }
        }
        //	assign the data to segment
        kony.print("SearchHomeData segmentData : "+JSON.stringify(segmentData));
        if(segmentData.length>0)
        {
          this.view.SgSearchData.isVisible = true;
          this.view.SgSearchData.widgetDataMap = {NameDirectory:"NameDirectory", lblURL:"lblURL", imgchevron:"imgchevron"};
          this.view.SgSearchData.onRowClick = this.searchSegmentRowClick;
          this.view.SgSearchData.data = segmentData;
        }
        else
        {
          alert("No matching information, please try again !");
        }
      } 
      catch(e){
        kony.print("SearchHomeData catch : "+e);
      }
    },

    searchSegmentRowClick: function(eventobject){
      try{
        kony.print("SearchSegmentRowClick eventobject : "+JSON.stringify(eventobject));
        var selectedItems = eventobject.selectedItems[0];
        var URL = checkNullUndefinedEmpty(selectedItems.lblURL);
        var directoryName = checkNullUndefinedEmpty(selectedItems.NameDirectory);
        kony.print("URL : "+URL+", directoryName : "+directoryName);

        if(URL !== "")
        {
          var item = {"screenname":directoryName, "url":URL};
          var navToProspect = new kony.mvc.Navigation("FrmHomeDescription");
          navToProspect.navigate(item);
        }
        else
        {
          kony.print("directoryName : "+directoryName);
          if(directoryName === "County Agency Directory") {
            var navToProspect = new kony.mvc.Navigation("FrmDirectory");
            navToProspect.navigate();
          } else if(directoryName === "My Notes") {
            var navToProspect = new kony.mvc.Navigation("FrmMyNotes");
            navToProspect.navigate();
          } else if(directoryName === "Reprot Suspected Fraud") {
            var fraudUrl = "http://www.jfs.ohio.gov/fraud/index.stm";
            kony.application.openURL(fraudUrl);
          } else if(directoryName === "Comment on this App") {
            var navToProspect = new kony.mvc.Navigation("FrmComments");
            navToProspect.navigate();
          }              
        }
      }
      catch(e){
        kony.print("SearchSegmentRowClick catch : "+e);
      }
    },

    hideSearch: function() {
      try{
        this.view.setVisibility(false);
        this.view.SgSearchData.isVisible = false;
        this.view.SgSearchData.removeAll();
        this.view.TxtBoxSearch.text = "";
        kony.print("flxSearchController HideSearch ");
      }
      catch(e){
        kony.print("flxSearchController HideSearch catch : "+e);
      }
    }	
  };
});