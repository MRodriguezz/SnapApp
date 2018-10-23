function AS_Form_hb3296baad734e1fbb3ab08587a343ff(eventobject) {
    try {
        var urlConfig = this.view.FlxHeaderInfo.LblHeader2Title.info;
        this.view.contentBrowser.requestURLConfig = urlConfig;
    } catch (e) {
        kony.print("HomeDescription postshow : " + e);
    }
}