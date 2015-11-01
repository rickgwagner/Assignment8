/*jslint browser: true*/
/*global $, jQuery, alert*/

// 1. Notice the markup that I’ve included for you in the web page. There is a text box that will display the value of each button click and 16 different buttons each of which represents a major key on a basic calculator. Begin by referencing the jQuery library and then immediately wire up the jQuery .ready() function.

$(document).ready(function () {
    "use strict";
    
// 2. This first part will require you to stylize all of the buttons programmatically. Using jQuery make each button the same width and height, give each button a unique background color, border style, width and color. Also, give the display a unique background color, set the font color and size, and set a unique border style, width, and color.
    
    $(":input").css("fontSize", "16px");
    $(":button").css("width", "55px").css("height", "55px").css("margin", "0 0 6px").css("color", "#689668").css("background-color", "#c3edc3").css("border", "2px solid #056c05");
    $(":text").css("width", "256px").css("height", "40px").css("margin-bottom", "7px").css("fontSize", "25px").css("color", "#00b23e").css("border", "2px dotted #8e468e").css("background-color", "#c3edc3").css("padding-left", "10px");
    $("#result").attr("placeholder", "CalcuTron 5000");
    $("body").css("background-color", "#CCCCCC");
    $("#container").css("width", "255px").css("height", "260px").css("background-color", "#def2c6").css("border", "8px double #055731");
    
    $("#equal").css("margin-top", "7px").css("width", "269px").css("height", "40px").css("color", "#a6f59c").css("background-color", "#689668").css("border", "6px outset #43af47");
    $("#seven").css("margin-top", "12px");
    $("#seven, #four, #one, #zero").css("margin-left", "10px");
    
    $("#divide, #multiply, #subtract, #add").css("color", "#c3edc3").css("background-color", "#689668").css("border", "4px dashed #056c05");
//  Could not resist adding a clear key in the empty slot
    $("#C").css("color", "#056c05").css("background-color", "#0bd690").css("border", "4px solid #efd375");
    
// 3. Reference the “bubble capture” code from assignment 6. Rewrite this code so that it uses jQuery events and makes use of jQuery DOM manipulation techniques to set the display based on button selections made.
    
    $(":button").click(function () {
        var currentButton = $(this).val();
        if (currentButton === "=") {
            var getField = $("#result").val();
            var parsed = eval(getField);
            $("#result").val(parsed);
        } else if (currentButton === "clear") {
            $("#result").val("");
        } else {
            $("#result").val($("#result").val() + currentButton);
        }
    }
        );
});