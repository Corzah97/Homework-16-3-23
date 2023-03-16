// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // This var is to display today's day and date
  var todayDate = dayjs().format('DD/MM/YYYY')
  $("#currentDay").html(todayDate);
  var save = JSON.parse(window.localStorage.getItem("saveTasks"))


  $(".saveBtn").on("click", function () {
    var saveTasks = JSON.parse(window.localStorage.getItem("saveTasks")) || []
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    console.log("click")

    saveTasks.push({
      time, text

    })
    window.localStorage.setItem("saveTasks", JSON.stringify(saveTasks));
  })


  function timeTracker() {

    var timeNow = dayjs().hour();
    console.log(typeof timeNow)
    // Looping over time blocks
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").split("hour-")[1]);
     console.log(typeof blockTime)
      // To check time and add the background classes for indicators

      if (blockTime > timeNow) {
        $(this).addClass("future");
        
      }

      else if (blockTime === timeNow) {
        
        $(this).addClass("present");
      }

      else {
       
        $(this).addClass("past");
        
      }

    })

  }
  $(".description").each(function( index, value ) {
    var id = $(this).parent().attr("id");
    for (let i = 0; i < save.length; i++) {
      const element = save[i];
      if (id == element.time){
        $(this).text(element.text)
      }
      
    }
  });
  // $("#hour8 .description").val(localStorage.getItem("hour8"));
  // $("#hour9 .description").val(localStorage.getItem("hour9"));
  // $("#hour10 .description").val(localStorage.getItem("hour10"));
  // $("#hour11 .description").val(localStorage.getItem("hour11"));
  // $("#hour12 .description").val(localStorage.getItem("hour12"));
  // $("#hour13 .description").val(localStorage.getItem("hour13"));
  // $("#hour14 .description").val(localStorage.getItem("hour14"));
  // $("#hour15 .description").val(localStorage.getItem("hour15"));
  // $("#hour16 .description").val(localStorage.getItem("hour16"));
  // $("#hour17 .description").val(localStorage.getItem("hour17"));
  // $("#hour18 .description").val(localStorage.getItem("hour18"));
  // $("#hour19 .description").val(localStorage.getItem("hour19"));
  // $("#hour20 .description").val(localStorage.getItem("hour20"));


  timeTracker();
})