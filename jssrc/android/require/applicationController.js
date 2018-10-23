define({
    AS_AppEvents_bc9daeca991c4de4baa9b0123eca1140: function AS_AppEvents_bc9daeca991c4de4baa9b0123eca1140(eventobject) {
        var self = this;
        return intializeMobileFabricService.call(this);
    },
    AS_AppEvents_cf5c645f8387463bbc97192365d380c0: function AS_AppEvents_cf5c645f8387463bbc97192365d380c0(eventobject) {
        var self = this;
        return appServiceSNAP.call(this, eventobject);
    },
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("Header1.FlxHeader", "FlxHeader", "FlxHeaderController");
        kony.application.registerMaster({
            "namespace": "Header1",
            "classname": "FlxHeader",
            "name": "Header1.FlxHeader"
        });
        kony.mvc.registry.add("Header2.FlxHeaderInfo", "FlxHeaderInfo", "FlxHeaderInfoController");
        kony.application.registerMaster({
            "namespace": "Header2",
            "classname": "FlxHeaderInfo",
            "name": "Header2.FlxHeaderInfo"
        });
        kony.mvc.registry.add("InsertNote.Note", "Note", "NoteController");
        kony.application.registerMaster({
            "namespace": "InsertNote",
            "classname": "Note",
            "name": "InsertNote.Note"
        });
        kony.mvc.registry.add("Menu.Flxmenu", "Flxmenu", "FlxmenuController");
        kony.application.registerMaster({
            "namespace": "Menu",
            "classname": "Flxmenu",
            "name": "Menu.Flxmenu"
        });
        kony.mvc.registry.add("Menu2.FlxMenu2", "FlxMenu2", "FlxMenu2Controller");
        kony.application.registerMaster({
            "namespace": "Menu2",
            "classname": "FlxMenu2",
            "name": "Menu2.FlxMenu2"
        });
        kony.mvc.registry.add("MenuMaps.flxMenuOption", "flxMenuOption", "flxMenuOptionController");
        kony.application.registerMaster({
            "namespace": "MenuMaps",
            "classname": "flxMenuOption",
            "name": "MenuMaps.flxMenuOption"
        });
        kony.mvc.registry.add("FlxConten", "FlxConten", "FlxContenController");
        kony.mvc.registry.add("FlxContet", "FlxContet", "FlxContetController");
        kony.mvc.registry.add("FlxContentHeader", "FlxContentHeader", "FlxContentHeaderController");
        kony.mvc.registry.add("FlxContent", "FlxContent", "FlxContentController");
        kony.mvc.registry.add("FlxContentNote", "FlxContentNote", "FlxContentNoteController");
        kony.mvc.registry.add("FlexContent", "FlexContent", "FlexContentController");
        kony.mvc.registry.add("flxMapTemplate", "flxMapTemplate", "flxMapTemplateController");
        kony.mvc.registry.add("FrmComments", "FrmComments", "FrmCommentsController");
        kony.mvc.registry.add("FrmDirectory", "FrmDirectory", "FrmDirectoryController");
        kony.mvc.registry.add("FrmDirectoryDescription", "FrmDirectoryDescription", "FrmDirectoryDescriptionController");
        kony.mvc.registry.add("FrmEnter", "FrmEnter", "FrmEnterController");
        kony.mvc.registry.add("FrmHome", "FrmHome", "FrmHomeController");
        kony.mvc.registry.add("FrmHomeDescription", "FrmHomeDescription", "FrmHomeDescriptionController");
        kony.mvc.registry.add("FrmMyNotes", "FrmMyNotes", "FrmMyNotesController");
        kony.mvc.registry.add("FrmSettings", "FrmSettings", "FrmSettingsController");
        kony.mvc.registry.add("FrmSplash", "FrmSplash", "FrmSplashController");
        kony.mvc.registry.add("FrmTerms", "FrmTerms", "FrmTermsController");
        kony.mvc.registry.add("WhatNearMe", "WhatNearMe", "WhatNearMeController");
        setAppBehaviors();
    },
    postAppInitCallBack: function() {
        return applicationController.AS_AppEvents_bc9daeca991c4de4baa9b0123eca1140();
    },
    appmenuseq: function() {
        new kony.mvc.Navigation("FrmSplash").navigate();
    }
});