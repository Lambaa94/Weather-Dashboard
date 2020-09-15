
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
renderButtons();






function displayCurrentWeather(city) {





    $("#currentCityName").html(city)
    var APIKey = "e78a402fb6fdf0ea50fb514a66a36948"
    jQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    // Date Displays
    $(".cityName").html(moment().format('L'));
    $("#nextDay").html(moment().add(1, 'days').format('L'));
    $("#day2").html(moment().add(2, 'days').format('L'));
    $("#day3").html(moment().add(3, 'days').format('L'));
    $("#day4").html(moment().add(4, 'days').format('L'));
    $("#day5").html(moment().add(5, 'days').format('L'));



    $.ajax({
        url: jQueryURL,
        method: "GET"
    }).then(function (weather) {



        var lat = weather.coord.lat
        var lon = weather.coord.lon

        oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey
        $.ajax({
            url: oneCall,
            method: "GET"
        }).then(function (response) {

            console.log(response)

            // Main Card
            var iconId = (response.current.weather[0].icon)
            var iconurl = "http://openweathermap.org/img/w/" + iconId + ".png";
            $('#wIcon').attr('src', iconurl);
            var tempF = (response.current.temp - 273.15) * 1.80 + 32;
            $("#temp").html("Temperature: " + tempF.toFixed(2));
            var humidity = (response.current.humidity)
            $("#hum").html("Humidity: " + humidity)
            var wind = (response.current.wind_speed)
            $("#wind").html("Wind Speed: " + wind)
            var uv = (response.current.uvi)
            $("#uv").html("UV Index: " + uv)

            if (uv <= 2) {
                $("#uv").attr("class", "badge badge-success")
            }
            else if ((uv <= 7)) {
                $("#uv").attr("class", "badge badge-warning")
            }
            else {
                $("#uv").attr("class", "badge badge-danger")
            }
            // Next Day
            var iconId1 = (response.daily[0].weather[0].icon)
            var iconurl1 = "http://openweathermap.org/img/w/" + iconId1 + ".png";
            $('#wIcon1').attr('src', iconurl1);
            var tempF1 = (response.daily[0].temp.day - 273.15) * 1.80 + 32;
            $("#temp1").html("Temperature: " + tempF1.toFixed(2))
            var humidity1 = (response.daily[0].humidity)
            $("#hum1").html("Humidity: " + humidity1)

            // 2 Days Ahead
            var iconId2 = (response.daily[1].weather[0].icon)
            var iconurl2 = "http://openweathermap.org/img/w/" + iconId2 + ".png";
            $('#wIcon2').attr('src', iconurl2);
            var tempF2 = (response.daily[1].temp.day - 273.15) * 1.80 + 32;
            $("#temp2").html("Temperature: " + tempF2.toFixed(2))
            var humidity2 = (response.daily[1].humidity)
            $("#hum2").html("Humidity: " + humidity2)

            //    3 Days Ahead
            var iconId3 = (response.daily[2].weather[0].icon)
            var iconurl3 = "http://openweathermap.org/img/w/" + iconId3 + ".png";
            $('#wIcon3').attr('src', iconurl3);
            var tempF3 = (response.daily[2].temp.day - 273.15) * 1.80 + 32;
            $("#temp3").html("Temperature: " + tempF3.toFixed(2))
            var humidity3 = (response.daily[2].humidity)
            $("#hum3").html("Humidity: " + humidity3)
            // 4 Days Ahead
            var iconId4 = (response.daily[3].weather[0].icon)
            var iconurl4 = "http://openweathermap.org/img/w/" + iconId4 + ".png";
            $('#wIcon4').attr('src', iconurl4);
            var tempF4 = (response.daily[3].temp.day - 273.15) * 1.80 + 32;
            $("#temp4").html("Temperature: " + tempF4.toFixed(2))
            var humidity4 = (response.daily[3].humidity)
            $("#hum4").html("Humidity: " + humidity4)
            // 5 Days Ahead
            var iconId5 = (response.daily[4].weather[0].icon)
            var iconurl5 = "http://openweathermap.org/img/w/" + iconId5 + ".png";
            $('#wIcon5').attr('src', iconurl5);
            var tempF5 = (response.daily[4].temp.day - 273.15) * 1.80 + 32;
            $("#temp5").html("Temperature: " + tempF5.toFixed(2))
            var humidity5 = (response.daily[4].humidity)
            $("#hum5").html("Humidity: " + humidity5)

        });
    });
}

function renderButtons() {

    $("#city-list-prepend").empty();

    for (var i = 0; i < searchHistory.length; i++) {
        var recentCity = $("#city-list-prepend")
        newRow = $("<li>")
        var cb = $("<button>")
        var hr = $("<br>")
        cb.addClass("city-btn btn btn-success");
        cb.text(searchHistory[i]).val();
        newRow.append(cb)
        $(recentCity).prepend(cb)
        $(recentCity).prepend(hr)
    }
}

if (searchHistory.length > 0) {
    displayCurrentWeather(searchHistory[searchHistory.length - 1]);
}

$("#clear-history").on("click", function () {
    localStorage.clear();
    $("#city-list-prepend").empty();

})

$("#searchBtn").on("click", function (event) {
    event.preventDefault();
    var searchCity = $("#userInput").val();
    console.log(searchCity);

    if ((searchCity === "") || (searchHistory === 404)) {
        console.log("Field must be entered")

    } else {

        searchHistory.push(searchCity)
        localStorage.setItem("search", JSON.stringify(searchHistory));
        displayCurrentWeather(searchCity);
        location.reload();

    }

});

$(".city-btn").on("click", function (event) {
    event.preventDefault();
    var recentCityBtn = $(this).text();
    console.log(recentCityBtn)

    displayCurrentWeather(recentCityBtn)
})

