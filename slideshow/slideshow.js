/*jslint browser: true*/
/*global $, jQuery, alert*/

function hideAll(jQuery) {
    "use strict";
    $("#one, #two, #three, #four, #five").hide(0);
}
$(document).ready(hideAll);

$(document).ready(function () {
    "use strict";
    $("#one").fadeIn("slow");

    $("a").on("click", function () {
        var clicked = $(this).attr("href");
        hideAll();
        $(clicked).fadeIn("slow");
        $("a.active").removeClass("active");
        $(this).addClass("active");
    });
});