
$(document).ready(function(){

// Dislpay current date and time
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));

// Save button
$(".saveBtn").on("click", function(){
var textValue=$(this).siblings(".form-control").val();
var listItem = $(this).parent().data("hour");
localStorage.setItem(listItem, textValue);
});

//Clear button
$(".trashBtn").on("click", function(){
    var textValue=$(this).siblings(".form-control").val();
    var listItem = $(this).parent().data("hour");
    localStorage.removeItem(listItem, textValue); 
    if(localStorage.getItem(listItem) == undefined) {
    $(this).siblings('.form-control').val("");
}
});

// Loop to get item from local storage
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
for (var i = 0; i < x.length; i++) {
    var dataHour = localStorage.getItem(x[i]);  
    $("#form" + x[i]).text(dataHour);
}

//Compare hour slots with current time and add class
var currentTime=parseInt(moment().format('HH'));
 
$(".form-control").each(function(){

var time=parseInt($(this).attr("name"));

if(time==currentTime){   
$(this).addClass("present");
$(this).removeClass("past");
$(this).removeClass("future");
};
if(time < currentTime){   
$(this).removeClass("present");
$(this).addClass("past");
$(this).removeClass("future");   
};
if(time > currentTime){    
$(this).removeClass("present");
$(this).removeClass("past");
$(this).addClass("future");        
};
});

})