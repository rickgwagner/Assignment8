/*jslint browser: true*/
/*global $, jQuery, alert*/

function hideAll(jQuery) {
    "use strict";
    $("#first, #second, #third").hide(0);
}
$(document).ready(hideAll);

$(document).ready(function () {
    "use strict";
    $("#first").show();
    $("ul li a:first").addClass("active");

    $("a").on("click", function () {
        var clicked = $(this).attr("href");
        hideAll();
        $(clicked).show();
        $("a.active").removeClass("active");
        $(this).addClass("active");
    });
});