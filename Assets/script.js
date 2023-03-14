// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// This var is to display today's day and date
var todayDate = moment().format('dddd, MMM, YYYY');
$("currentday").html(todayDate);

$(document).ready(function () {

  $("saveBtn").on("click", function () {

    var text = $(this).siblings(".description").val();
    var text = $(this).parent().attr("id");

    localStorage.setItem(time,text);
  })
 

 function timeTracker() {

  var timeNow = moment().hour();

  // Looping over time blocks
  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);

    // To check time and add the background classes for indicators

    if (blockTime < timeNow) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    }

    else if (blockTime === timeNow) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }

    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }

  })

}

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
$("#hour18 .description").val(localStorage.getItem("hour18"));
$("#hour19 .description").val(localStorage.getItem("hour19"));
$("#hour20 .description").val(localStorage.getItem("hour20"));


timeTracker();
})