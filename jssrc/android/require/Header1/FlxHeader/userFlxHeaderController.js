define(function() {
    return {
        VisibleSearch: function() {
            var form = kony.application.getCurrentForm();
            form.FlxHeader.FlxSearch.isVisible = true;
        }
    };
});