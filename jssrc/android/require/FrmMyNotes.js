define("FrmMyNotes", function() {
    return function(controller) {
        function addWidgetsFrmMyNotes() {
            this.setDefaultUnit(kony.flex.DP);
            var FlxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxContainer.setDefaultUnit(kony.flex.DP);
            var FlxContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93%",
                "id": "FlxContent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "CopyslFbox0df35cb8d308f49",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxContent.setDefaultUnit(kony.flex.DP);
            var BtnNewNote = new kony.ui.Button({
                "bottom": "3%",
                "centerX": "50%",
                "focusSkin": "defBtnFocus",
                "height": "8%",
                "id": "BtnNewNote",
                "isVisible": false,
                "right": "4%",
                "skin": "CopydefBtnNormal0hf95a790d45b42",
                "text": "New Note",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var SgmMyNotes = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "data": [{
                    "Image0e230499ae4fb4d": "",
                    "LblDescription": "",
                    "LblNoteDate": "",
                    "LblNoteName": ""
                }],
                "groupCells": false,
                "id": "SgmMyNotes",
                "isVisible": false,
                "left": "0dp",
                "maxWidth": "99.75%",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_f8b17e6f12754bb1a96d558646877f74,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "FlxContentNote",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "aaaaaa00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "FlxContainerNotes": "FlxContainerNotes",
                    "FlxContentNote": "FlxContentNote",
                    "Image0e230499ae4fb4d": "Image0e230499ae4fb4d",
                    "LblDescription": "LblDescription",
                    "LblNoteDate": "LblNoteDate",
                    "LblNoteName": "LblNoteName"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var FlxNoteDontNote = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "25%",
                "clipBounds": true,
                "height": "10%",
                "id": "FlxNoteDontNote",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "skin": "slFbox",
                "top": "84dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlxNoteDontNote.setDefaultUnit(kony.flex.DP);
            var LblDontNote = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "LblDontNote",
                "isVisible": true,
                "skin": "CopydefLabel0f63edcafd27844",
                "text": "You Don't have any notes yet",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            FlxNoteDontNote.add(LblDontNote);
            FlxContent.add(BtnNewNote, SgmMyNotes, FlxNoteDontNote);
            var FlxHeader = new Header1.FlxHeader({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8.50%",
                "id": "FlxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            FlxHeader.Image0i7393cecf87540.src = "nav_down_blue.png";
            FlxHeader.LblHome.text = "MY NOTES";
            FlxHeader.search.isVisible = false;
            var ClickNewNote = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "2%",
                "clipBounds": true,
                "height": "56dp",
                "id": "ClickNewNote",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "onClick": controller.AS_FlexContainer_abca0beb1e4c4e6d869feb155d701ad2,
                "right": "4%",
                "skin": "CopyslFbox0e6587597a9524c",
                "width": "56dp",
                "zIndex": 1
            }, {}, {});
            ClickNewNote.setDefaultUnit(kony.flex.DP);
            var ImgNewNote = new kony.ui.Image2({
                "bottom": "0%",
                "centerX": "50%",
                "centerY": "50%",
                "height": "28dp",
                "id": "ImgNewNote",
                "isVisible": true,
                "right": "0%",
                "skin": "slImage",
                "src": "ic_add_white.png",
                "width": "28dp",
                "zIndex": 20
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            ClickNewNote.add(ImgNewNote);
            FlxContainer.add(FlxContent, FlxHeader, ClickNewNote);
            var Note = new InsertNote.Note({
                "clipBounds": true,
                "height": "100%",
                "id": "Note",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "CopyslFbox0bacc723a8dc241",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            Note.isVisible = false;
            var Flxmenu = new Menu.Flxmenu({
                "clipBounds": true,
                "height": "100%",
                "id": "Flxmenu",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "skin": "sknFlxWhite",
                "top": "-93%",
                "width": "100%"
            }, {}, {});
            Flxmenu.BackgroundFooter.isVisible = true;
            Flxmenu.BackgroundFooter.src = "back_blue_header.png";
            Flxmenu.isVisible = false;
            Flxmenu.ImgUp.src = "nav_up_blue.png";
            Flxmenu.LblHomeDescription.text = "MY NOTES";
            this.add(FlxContainer, Note, Flxmenu);
        };
        return [{
            "addWidgets": addWidgetsFrmMyNotes,
            "enabledForIdleTimeout": false,
            "id": "FrmMyNotes",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "preShow": controller.AS_Form_i170db45e2b34cb290fe85b18184f37a,
            "skin": "CopyslForm0e796b02572754f"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});