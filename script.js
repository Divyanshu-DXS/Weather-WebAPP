const apiKey="2b018edfc441d4f32e61268072270608";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric"; 
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response=await fetch(apiUrl+`&q=${city}`+`&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";

    }

    document.querySelector(".city-name").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/H";
    
    if(data.weather[0].main == 'Clouds'){
    weatherIcon.src="/Images/clouds.png";
    } 
    else
    if(data.weather[0].main == 'Clear'){
        weatherIcon.src="/Images/clear.png";
    }
    else
    if(data.weather[0].main == 'Snow'){
        weatherIcon.src="/Images/snow.png";
    }
    else
    if(data.weather[0].main == 'Rain'){
        weatherIcon.src="/Images/rain.png";
    }
    else
    if(data.weather[0].main == 'mist'){
        weatherIcon.src="/Images/mist.png";
    }
    
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";

}

searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);
});
