/*jslint browser: true*/
/*global $, jQuery, alert*/

// 1. Notice the markup that I’ve included for you in the web page. There is a text box that will display the value of each button click and 16 different buttons each of which represents a major key on a basic calculator. Begin by referencing the jQuery library and then immediately wire up the jQuery .ready() function.
$(document).ready(function () {
    "use strict";
    
// 2. This first part will require you to stylize all of the buttons programmatically. Using jQuery make each button the same width and height, give each button a unique background color, border style, width and color. Also, give the display a unique background color, set the font color and size, and set a unique border style, width, and color.    
    $(":button").css("width", "55px").css("height", "55px").css("margin", "0 0 6px");
    $(":input").css("fontSize", "16px").css("color", "red");
    $(":text").css("width", "256px").css("height", "40px").css("margin-bottom", "7px").css("fontSize", "25px").css("color", "blue").css("border", "2px dotted #8e468e").css("background-color", "#cdf2c6").css("padding-left", "10px");
    $("#result").attr("placeholder", "CalcuTron 5000");
    $("body").css("background-color", "#CCCCCC");
    $("#container").css("width", "255px").css("height", "258px").css("background-color", "#c6f0f2").css("border", "8px double #f8922b");
    
    $("#equal").css("margin-top", "7px").css("width", "269px").css("height", "40px").css("background-color", "#f4e317").css("border", "6px inset #afa743");
    
    $("#seven").css("color", "#d38989").css("background-color", "#95493f").css("margin-top", "12px").css("margin-left", "10px").css("border", "2px solid #d38989");
    $("#eight").css("color", "#9ae89a").css("background-color", "#567c56").css("border", "2px solid #9ae89a");
    $("#nine").css("color", "#9ad6e8").css("background-color", "#56667c").css("border", "2px solid #9ad6e8");
    $("#divide").css("color", "#d69ae8").css("background-color", "#6d567c").css("border", "2px dashed #d69ae8");
    
    $("#four").css("color", "#e8df9a").css("background-color", "#967a2f").css("margin-left", "10px").css("border", "2px solid #e8df9a");
    $("#five").css("color", "#9ab5e8").css("background-color", "#34296d").css("border", "2px solid #9ab5e8");
    $("#six").css("color", "#e89abb").css("background-color", "#770f0b").css("border", "2px solid #e89abb");
    $("#multiply").css("color", "#52ef52").css("background-color", "#588121").css("border", "2px dashed #52ef52");
    
    $("#one").css("color", "#b9e5de").css("background-color", "#2b7e68").css("margin-left", "10px").css("border", "2px solid #b9e5de");
    $("#two").css("color", "#e8d39a").css("background-color", "#5c4519").css("border", "2px solid #e8d39a");
    $("#three").css("color", "#bcf4f4").css("background-color", "#1a535d").css("border", "2px solid #bcf4f4");
    $("#subtract").css("color", "#f2d1ef").css("background-color", "#711863").css("border", "2px dashed #f2d1ef");
    
    $("#zero").css("color", "#e89ae2").css("background-color", "#801945").css("margin-left", "10px").css("border", "2px solid #e89ae2");
    $("#period").css("color", "#be9ae8").css("background-color", "#3b1d58").css("border", "2px solid #be9ae8");
    $("#add").css("color", "#e2e89a").css("background-color", "#5a6424").css("border", "2px dashed #e2e89a");
    
    $("#C").css("color", "#efd375").css("background-color", "#c6680a").css("border", "2px dashed #efd375");
    
// 3. Reference the “bubble capture” code from assignment 6. Rewrite this code so that it uses jQuery events and makes use of jQuery DOM manipulation techniques to set the display based on button selections made.
    
    $(":button").click(function () {
        var currentButton = $(this).val();
        if (currentButton === "=") {
            var getField = $("#result").val();
            var parsed = eval(getField);
            $("#result")[0].value = parsed;
        } else {
            $("#result")[0].value += $(this).val();
        }
    }
        );
});

//    BORDER STYLES  none hidden dotted dashed solid double groove ridge inset outset initial inherit

//    BACKUP COPY OF PREVIOUS WORKING CALC
//    var body = document.querySelector("body");
//    body.addEventListener("click", function (event) {
//        var currentButton =  event.target.id.toString();
//        if (currentButton === "equal") {
//            var grabField = document.getElementById("result").value;
//            var makeString = grabField.toString();
//            var finalAnswer = window.eval(makeString);
//            document.getElementById("result").value = finalAnswer;
//        } else {
//            this.val = document.getElementById(event.target.id);
//            document.getElementById("result").value += this.val.value;
//        }
//    }
//        );