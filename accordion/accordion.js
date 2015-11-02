/*jslint browser: true*/
/*global $, jQuery, alert*/

function hideAllSlow(jQuery) {
    "use strict";
    $("#first, #second, #third, #fourth, #fifth").slideUp("slow");
}

function hideAllFast(jQuery) {
    "use strict";
    $("#first, #second, #third, #fourth, #fifth").hide(0);
}

$(document).ready(hideAllFast);

$(document).ready(function () {
    "use strict";
    $("a").on("click", function () {
        event.preventDefault();
        var clicked = $(this).attr("href");
        hideAllSlow();
        $(clicked).slideDown("slow");
        $("a.active").removeClass("active");
        $(this).addClass("active");
    });
    
});