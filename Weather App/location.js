var x = document.querySelector(".city-name");
var date = new Date();
var hour = date.getHours();


document.getElementById("btn-choice").addEventListener("click", function () {
    getweather($("#city-input").val());
});
document.getElementById("city-input").addEventListener("keypress", function (event) {
    if (event.keyCode == 13) {
        getweather($("#city-input").val());
        console.log("asd");
        $("#city-input").val("");
    }
}, false);


function getweather(city) {
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&appid=3a04b53f7b6d2edbaad0c1e9b9d783f1",
        function (response) {
            console.log(response);
            var city2 = city;
            var country = response.sys.country;
            var weather = response.weather[0].main;
            var temp = response.main.temp;
            var pressure = response.main.pressure;
            var windSpeed = response.wind.speed;
            console.log(city2 + " " + country + " " + weather + " " + temp + " " + pressure + " " + windSpeed);
            weatherSet(city2, country, weather, temp, pressure, windSpeed);
        });
}

function weatherSet(city, country, weather, temp, pressure, windSpeed) {
    console.log(weather);
    if (weather == "Clear") {
        $("#weather-video").html("<video autoplay muted loop " + 'id="myVideo"><source  src="videos/clearNight.mp4" type="video/mp4"></video>');
    }
    if (weather == "Clear" && (hour <= 20 && hour >= 6)) {
        $("#weather-video").html("<video autoplay muted loop " + 'id="myVideo"><source  src="videos/clearDay.mp4" type="video/mp4"></video>');
    }
    if (weather == "Rain") {
        $("#weather-video").html("<video autoplay muted loop " + 'id="myVideo"><source  src="videos/rain.mp4" type="video/mp4"></video>');
    }
    if (weather == "Clouds") {
        $("#weather-video").html("<video autoplay muted loop " + 'id="myVideo"><source  src="videos/cloudsNight.mp4" type="video/mp4"></video>');
    }
    if (weather == "Clouds" && (hour <= 20 && hour >= 6)) {
        $("#weather-video").html("<video autoplay muted loop " + 'id="myVideo"><source  src="videos/clouds.mp4" type="video/mp4"></video>');
    }
    if (weather == "Snow") {
        $("#weather-video").html("<video autoplay muted loop " + 'id="myVideo"><source  src="videos/snow.mp4" type="video/mp4"></video>');
    }
    if (weather == "Mist") {
        $("#weather-video").html("<video autoplay muted loop " + 'id="myVideo"><source  src="videos/mist.mp4" type="video/mp4"></video>');
    }
    if (weather == "Thunderstorm") {
        $("#weather-video").html("<video autoplay muted loop " + 'id="myVideo"><source  src="videos/thunderstorm.mp4" type="video/mp4"></video>');
    }
       
    $("#city-info").html(city + " " + country);
    $("#wheat-info").html(weather);
    $("#temp-info").html(temp + " &deg;C");
    $("#pressure-info").html(pressure + " hPa");
    $("#windSpeed-info").html(windSpeed + " m/s");
    $("#weather-info").show();
}
