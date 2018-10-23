define({
    AS_AppEvents_dd38fcb480cd41cc9fb7b795e6eea3f3: function AS_AppEvents_dd38fcb480cd41cc9fb7b795e6eea3f3(eventobject) {
        var ksidTemp = kony.store.getItem("ksid");
        kony.print("ksidTem from devicestore: " + ksidTemp);
        kony.print("inside mfInitSuccess: " + mfInitSuccess);
        if ((mfInitSuccess == true) && ksidTemp === undefined || ksidTemp == null || ksidTemp == "" || ksidTemp.length <= 0) {
            kony.print("KSID is empty, hence going to register...");
            registerPush();
        }
    },
    AS_AppEvents_c5ba95be571d4786b7683b7f73b464fd: function AS_AppEvents_c5ba95be571d4786b7683b7f73b464fd(eventobject) {
        initializeMobileFabricService();
    },
    AS_AppEvents_cf5c645f8387463bbc97192365d380c0: function AS_AppEvents_cf5c645f8387463bbc97192365d380c0(eventobject) {
        return appServiceSNAP.call(this, eventobject);
    }
});