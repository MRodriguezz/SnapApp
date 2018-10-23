define({
    // Animation for the navigation of the views
    NavigateHomeDescription: function() {
            var item = this.view.SgmHome.selectedRowItems;
            // alert(item[0]);
            //alert(typeof item[0].LblName);
            //alert(LabelNameHomeDescription);
            LabelNameHomeDescription = item[0].LblHomeName;
            LabelNameHomeDescription2 = item[0].LblHomeName2;
            var ntf = new kony.mvc.Navigation("FrmHomeDescription");
            ntf.navigate();
        }
        //Type your controller code here 
});