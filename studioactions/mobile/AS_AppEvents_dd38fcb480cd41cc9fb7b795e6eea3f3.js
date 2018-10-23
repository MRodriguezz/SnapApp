function AS_AppEvents_dd38fcb480cd41cc9fb7b795e6eea3f3(eventobject) {
    var ksidTemp = kony.store.getItem("ksid");
    kony.print("ksidTem from devicestore: " + ksidTemp);
    kony.print("inside mfInitSuccess: " + mfInitSuccess);
    if ((mfInitSuccess == true) && ksidTemp === undefined || ksidTemp == null || ksidTemp == "" || ksidTemp.length <= 0) {
        kony.print("KSID is empty, hence going to register...");
        registerPush();
    }
}