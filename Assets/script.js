// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
  
  // This var is to display today's day and date
  var todayDate = dayjs().format('DD/MM/YYYY')
  $("#currentDay").html(todayDate);
  var save = JSON.parse(window.localStorage.getItem("saveTasks"))


  $(".saveBtn").on("click", function () {
   
    // Get nearby values of the description in JQuery
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
   
    //This var is to display the correct time and day using day.js
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

  timeTracker();
})