console.log("You got this!")

var m = moment();
var toDoListHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

$(document).ready(function () {
    
    var currentDayDisplay = $("#currentDay");
    $("#currentDay").text(m.format("MMMM Do YYYY"));
})

// create global variables 



var mainContainer = $(".container");




// loop the array and create columns and rows for seperate time schedule
for (var i = 0; i < toDoListHours.length; i++) {
    var newRow = $("<div>");
    newRow.addClass("row time-block");
    mainContainer.append(newRow);
    console.log(toDoListHours);

    var timeColumn = $("<div>");
    timeColumn.addClass("col-sm-2 hour");
    newRow.append(timeColumn);

    var eventBlock = $("<div>");
    eventBlock.addClass("col-sm-8 textarea");
    newRow.append(eventBlock);

    var saveBtn = $("<div>");
    saveBtn.addClass("col-sm-2 saveBtn");
    newRow.append(saveBtn);




}


// ```
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```