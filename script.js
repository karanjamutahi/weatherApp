var ready = false;

// var temp;
// var tempf;

if (ready === false){
//document hasn't loaded yet

}

$(document).ready(function(){

ready = true;

var longitude = 0;
var latitude  =0 ;

$.ajax({
cache:false
});

$.getJSON("http://ip-api.com/json", function(coords){
latitude = coords.lat;
longitude = coords.lon;
console.log(coords);
console.log(latitude);
console.log(longitude);




        key = 'c44251d51d44f26a9a2c3283edbb1ffb';
         apiURL = "http://api.openweathermap.org/data/2.5/weather?lat="+latitude+"&lon="+longitude+"&units=metric&APPID="+key;
        console.log(apiURL);
        console.log(typeof apiURL);

$.getJSON(apiURL ,function(weather){
console.log(weather);

town = weather.name;
temp = weather.main.temp;
windSpeed = weather.wind.speed;
description = weather.weather[0].description;
icon = weather.weather[0].id;

$("#location").html(town);
$("#weatherIcon").attr("class","owf owf-"+icon+" owf-5x text-center");
$("#temphold").html(temp +"  &#8451;");
$("#windhold").html(windSpeed + "  kph");
$("#timehold").html(description);
});

//    /*
counter = 0;
function tempConvert(){
    ++counter;
    console.log("clicked "+counter+" times" );
   tempf = ((temp*(9/5)) + 32).toFixed(2) ;
   console.log(tempf);

if (counter%2 === 1){
$("#temphold").html(tempf + "  &#8457;");
$("#converter").html("&#8451;");
console.log("Changed to Farenheit");
}

else{
    $("#temphold").html(temp +"  &#8451;");
    $("#converter").html("&#8457;");
    console.log("Changed back to celsius");
}
    
}
 // End of the function 

$("#converter").click(tempConvert);
//     */


    });
});


// console.log('Coords = ('+longitude+','+latitude+')');


// });