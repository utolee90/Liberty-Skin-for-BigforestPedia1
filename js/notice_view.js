$('.liberty-notice').on('closed.bs.alert', function () {
    var msgcheck = $.cookie("alertcheck");
    if (msgcheck == undefined) {
        $.cookie("alertcheck", "yes", {expires: 1, path: "/", domain: "librewiki.net", secure: false});
    }
});
