var cities = []
displayCurrentWeather();

function displayCurrentWeather() {
    var city = "London"
    // var apiKey = "e78a402fb6fdf0ea50fb514a66a36948"
    jQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=e78a402fb6fdf0ea50fb514a66a36948";
    

    $.ajax({
        url: jQueryURL,
        method: "GET"
    }).then(function(weather) {
        
        console.log(weather)
        var tempF = (weather.main.temp - 273.15) * 1.80 + 32;
        $("#temp").html(tempF);
        var humidity = (weather.main.humidity)
        $("#hum").html(humidity)
        var wind = (weather.wind.speed)
        $("#wind").html(wind)
        var uv = (weather.uvi)
        $("#uv").html(uv)
    
       


    });

}

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



// $("#current-city").on("click", function (event) {
//     event.preventDefault();
// console.log(this);
//     var city = $(this).val().trim()
//     cities.push(city)
//     renderButtons();
// });

// $(document).on("click", "#current-city", displayCurrentWeather);

// renderButtons();
// lat=" + lat + "&" + "lon=" + lon +