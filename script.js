var cities = []
displayCurrentWeather();

function displayCurrentWeather() {
    var city = ""
    // var apiKey = "e78a402fb6fdf0ea50fb514a66a36948"
    jQueryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=51.507322&lon=-0.127647&appid=e78a402fb6fdf0ea50fb514a66a36948";
    // Date Displays
    $("#cityName").prepend(moment().format('L'));
    $("#nextDay").html(moment().add(1, 'days').format('L'));
    $("#day2").html(moment().add(2, 'days').format('L'));
    $("#day3").html(moment().add(3, 'days').format('L'));
    $("#day4").html(moment().add(4, 'days').format('L'));
    $("#day5").html(moment().add(5, 'days').format('L'));



    $.ajax({
        url: jQueryURL,
        method: "GET"
    }).then(function (weather) {

        console.log(weather)


        // Main Card
        var iconId = (weather.current.weather[0].icon)
        var iconurl = "http://openweathermap.org/img/w/" + iconId + ".png";
        $('#wIcon').attr('src', iconurl);
        var tempF = (weather.current.temp - 273.15) * 1.80 + 32;
        $("#temp").html("Temperature: " + tempF);
        var humidity = (weather.current.humidity)
        $("#hum").html("Humidity: " + humidity)
        var wind = (weather.current.wind_speed)
        $("#wind").html("Wind Speed: " + wind)
        var uv = (weather.current.uvi)
        $("#uv").html("UV Index: " + uv)

        // Next Day
        var iconId1 = (weather.daily[0].weather[0].icon)
        var iconurl1 = "http://openweathermap.org/img/w/" + iconId1 + ".png";
        $('#wIcon1').attr('src', iconurl1);
        var tempF1 = (weather.daily[0].temp.day - 273.15) * 1.80 + 32;
        $("#temp1").html("Temperature: " + tempF1)
        var humidity1 = (weather.daily[0].humidity)
        $("#hum1").html("Humidity: " + humidity1)

        // 2 Days Ahead
        var iconId2 = (weather.daily[1].weather[0].icon)
        var iconurl2 = "http://openweathermap.org/img/w/" + iconId2 + ".png";
        $('#wIcon2').attr('src', iconurl2);
        var tempF2 = (weather.daily[1].temp.day - 273.15) * 1.80 + 32;
        $("#temp2").html("Temperature: " + tempF2)
        var humidity2 = (weather.daily[1].humidity)
        $("#hum2").html("Humidity: " + humidity2)

        //    3 Days Ahead
        var iconId3 = (weather.daily[2].weather[0].icon)
        var iconurl3 = "http://openweathermap.org/img/w/" + iconId3 + ".png";
        $('#wIcon3').attr('src', iconurl3);
        var tempF3 = (weather.daily[2].temp.day - 273.15) * 1.80 + 32;
        $("#temp3").html("Temperature: " + tempF3)
        var humidity3 = (weather.daily[2].humidity)
        $("#hum3").html("Humidity: " + humidity3)
        // 4 Days Ahead
        var iconId4 = (weather.daily[3].weather[0].icon)
        var iconurl4 = "http://openweathermap.org/img/w/" + iconId4 + ".png";
        $('#wIcon4').attr('src', iconurl4);
        var tempF4 = (weather.daily[3].temp.day - 273.15) * 1.80 + 32;
        $("#temp4").html("Temperature: " + tempF4)
        var humidity4 = (weather.daily[3].humidity)
        $("#hum4").html("Humidity: " + humidity4)
        // 5 Days Ahead
        var iconId5 = (weather.daily[4].weather[0].icon)
        var iconurl5 = "http://openweathermap.org/img/w/" + iconId5 + ".png";
        $('#wIcon5').attr('src', iconurl5);
        var tempF5 = (weather.daily[4].temp.day - 273.15) * 1.80 + 32;
        $("#temp5").html("Temperature: " + tempF5)
        var humidity5 = (weather.daily[4].humidity)
        $("#hum5").html("Humidity: " + humidity5)
    });

}

$("#current-city").on("click", function (event) {
    event.preventDefault();

console.log(this);

});



// function renderButtons() {
//     console.log(this);
//     $("#city-list").empty();

//     for (var i = 0; i < cities.length; i++) {
//         var cb = $("<button>");
//         cb.addClass("city-btn");
//         cb.attr("data-name", cities[i]);
//         cb.text(cities[i]);
//         $("#city-list").append(cb);
//     }
// }





//     var city = $(this).val().trim()
//     cities.push(city)
//     renderButtons();
// });

// $(document).on("click", "#current-city", displayCurrentWeather);

// renderButtons();
// lat=" + lat + "&" + "lon=" + lon +