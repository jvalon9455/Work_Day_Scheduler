console.log("You got this!")

var m = moment();
var toDoListHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// add current date to browser
$(document).ready(function () {
    var currentDate = $("#currentDayDisplay");
    $("#currentDayDisplay").text(m.format("dddd MMM Do YYYY"));
    
})

// create global variables 



var mainContainer = $(".container");
mainContainer.addClass()




// loop the array and create columns and rows for seperate time schedule
for (var i = 0; i < toDoListHours.length; i++) {

    // created new rows for time/text/and save button
    var hour = new Date().getHours();
    var newRow = $("<div>");
    newRow.addClass("row time-block");
    mainContainer.append(newRow);
    //console.log(toDoListHours);
    console.log(hour);
    // column for time
    var timeColumn = $("<div>");
    timeColumn.addClass("col-sm-2 hour");

    // add time to time blocks
   /* if (toDoListHours[i] < hour){
        timeColumn.text(toDoListHours[i] + ":00");
        timeColumn.attr("style", "background-color:lightGrey");
   */
    newRow.append(timeColumn);

    // column for text/description area
    var eventBlock = $("<textarea>");
    eventBlock.addClass("description col-sm-8 textarea");
    newRow.append(eventBlock);

    // column for save button
    var saveBtn = $("<button>");
    saveBtn.addClass("col-sm-2 saveBtn");
    newRow.append(saveBtn);

    // changes text area color based on current time
    colorBlock(hour);

}
// function to change text area color based on current time
function colorBlock(hour){
 if(toDoListHours[i] < hour){
     eventBlock.addClass('past');
 }
 else if(toDoListHours[i] == hour){
     eventBlock.addClass('present');
 }
 else{
     eventBlock.addClass('future');
 }
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