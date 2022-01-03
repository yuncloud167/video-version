$(window).on("load", function() {
    var preLoder = $(".loader-wrapper");
    preLoder.delay(700).fadeOut(0);
    $("body").addClass("loaded");
});