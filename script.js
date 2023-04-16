let weather = {
    "apiKey": "0d11dae3c53e4c00ab7a827674dcd31f",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid="
        + this.apiKey
        )
            .then((Response) => Response.json())
            .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, temp_min, temp_max, pressure } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        console.log(icon);
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        console.log(icon);
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = Math.round(temp) + "°C";
        document.querySelector(".min").innerText = "Lowest Temperature: " + Math.round(temp_min) + "°C";
        document.querySelector(".max").innerText = "Highest Temperature: " + Math.round(temp_max) + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";
        document.querySelector(".pressure").innerText = "Air Pressure : " + pressure + " hPa";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + document.querySelector(".search-bar").value + "')"
    },
    search: function(){this.fetchWeather(document.querySelector(".search-bar").value);}
};

document.querySelector(".search button")
.addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter") weather.search();
});

weather.fetchWeather("Athens");
document.querySelector(".search-bar").value = "Athens";