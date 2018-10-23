define(function() {
    return {
        animMoveElementsUps: function() {
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
        },
        ClickRow: function() {
            var item = this.view.Segment0a79a394297f846.selectedRowItems;
            // alert(item[0].LblName);
            //alert(typeof item[0].LblName);
            this.animMoveElementsUps();
            if (item[0].LblName == "County Agency Directory") {
                var navToProspect = new kony.mvc.Navigation("FrmDirectory");
                navToProspect.navigate();
            } else if (item[0].LblName == "What's near me?") {
                var navToProspect = new kony.mvc.Navigation("WhatNearMe");
                navToProspect.navigate();
                //alert("nueva vista")
            } else if (item[0].LblName == "Home") {
                var navToProspect = new kony.mvc.Navigation("FrmHome");
                navToProspect.navigate();
                //alert("nueva vista")
            } else if (item[0].LblName == "SNAP Basics") {
                //alert("BAsic")
                LabelNameHomeDescription = "SNAP Basics";
                LabelNameHomeDescription2 = "Learn About Program Eligibility";
                var navToProspect = new kony.mvc.Navigation("FrmHomeDescription");
                navToProspect.navigate();
                //alert("nueva vista")
            } else if (item[0].LblName == "Applying for SNAP") {
                LabelNameHomeDescription = "Applying for SNAP";
                LabelNameHomeDescription2 = "How, What & Where?";
                var navToProspect = new kony.mvc.Navigation("FrmHomeDescription");
                navToProspect.navigate();
                //alert("nueva vista")
            } else if (item[0].LblName == "Keeping SNAP Benefits") {
                LabelNameHomeDescription = "Keeping SNAP Benefits";
                LabelNameHomeDescription2 = "Who Reporting Affects Benefits";
                var navToProspect = new kony.mvc.Navigation("FrmHomeDescription");
                navToProspect.navigate();
                //alert("nueva vista")
            } else if (item[0].LblName == "Using Your EBT Card") {
                LabelNameHomeDescription = "Using Your EBT Card";
                LabelNameHomeDescription2 = "Shopping, Security & Customer Service";
                var navToProspect = new kony.mvc.Navigation("FrmHomeDescription");
                navToProspect.navigate();
                //alert("nueva vista")
            } else if (item[0].LblName == "More Food Resources") {
                LabelNameHomeDescription = "More Food Resources";
                LabelNameHomeDescription2 = "Food Programs, Pantries & Farmers’ Markets";
                var navToProspect = new kony.mvc.Navigation("FrmHomeDescription");
                navToProspect.navigate();
                //alert("nueva vista")
            } else if (item[0].LblName == "SNAP Smart Tips") {
                LabelNameHomeDescription = "SNAP Smart Tips";
                LabelNameHomeDescription2 = "Get the Most Out of Your Benefits";
                var navToProspect = new kony.mvc.Navigation("FrmHomeDescription");
                navToProspect.navigate();
                //alert("nueva vista")
            } else if (item[0].LblName == "My Notes") {
                var navToProspect = new kony.mvc.Navigation("FrmMyNotes");
                navToProspect.navigate();
                //alert("nueva vista")
            } else if (item[0].LblName == "Comment on this App") {
                var navToProspect = new kony.mvc.Navigation("FrmComments");
                navToProspect.navigate();
                //alert("nueva vista")
            } else if (item[0].LblName == "Settings") {
                var navToProspect = new kony.mvc.Navigation("FrmSettings");
                navToProspect.navigate();
                //alert("nueva vista")
            }
        },
        TermsForm: function() {
            var navToProspect = new kony.mvc.Navigation("FrmTerms");
            navToProspect.navigate();
        }
    };
});