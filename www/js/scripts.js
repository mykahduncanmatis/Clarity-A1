var app = new Framework7({
    // App root element
    el: '#app',
    // ... other parameters
  });
  var mainView = app.views.create('.view-main')
  
//Plan
//terrarium on the home screen
//light on/off
//temperature
//food
//humidity
//icons for the functions

//if #bug is clicked then food level increases
//humidity decreases over time
//tempurature decreases over time

//humidity
var humidity = 50;
var dry = 0;
var soggy = 100;



var neardeath = false; //frog is healthy




function dryout() {
    humidity--; //every time this func runs, water level decreases by 1
    console.log(humidity)
    checkhealth();
    var humiditytimer = setTimeout(dryout,500); // for timing (example on w3 schools setTimeout()) in milliseconds
  }
  
  dryout() //call function after it is declared
  

function checkhealth() {
    //if(humidity <= nowater || humidity >= drowing) {
        neardeath = true;
        console.log("help");
    //}
    //else(neardeath && humidity > dry) {
    //    neardeath = false;

   // }
}

$("#drops").on("click", function() {
    humidity += 20;
})