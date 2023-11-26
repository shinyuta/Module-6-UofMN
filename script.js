let submitBtn = document.querySelector('#submitBtn');
let forecast = document.querySelector('.forecast');
let citySearch = document.querySelector('#city');
let forecastDates = document.querySelector('.date');
let currentCity = document.querySelector('#current-city');
let currentTemp = document.querySelector('#temp-current');
let currentWind = document.querySelector('#wind-current');
let currentHumid = document.querySelector('#humid-current');
let forecastDate = document.querySelector('.date');
let forecastTemp = document.querySelector('#temp-forecast');
let forecastWind = document.querySelector('#wind-forecast');
let forecastHumid = document.querySelector('#humid-forecast');
let cityBtn = document.querySelector(".cityButton1");
let cityBtn2 = document.querySelector(".cityButton2");
let cityBtn3 = document.querySelector(".cityButton3");
let errorMessage = document.querySelector(".error");

// day 1
let date1 = document.querySelector('.date1')
let day1Temp = document.querySelector('#temp-forecast1');
let day1Wind = document.querySelector('#wind-forecast1');
let day1Humidity = document.querySelector('#humid-forecast1');

// day 2 
let date2 = document.querySelector('.date2')
let day2Temp = document.querySelector('#temp-forecast2');
let day2Wind = document.querySelector('#wind-forecast2');
let day2Humidity = document.querySelector('#humid-forecast2');

//day 3
let date3 = document.querySelector('.date3')
let day3Temp = document.querySelector('#temp-forecast3');
let day3Wind = document.querySelector('#wind-forecast3');
let day3Humidity = document.querySelector('#humid-forecast3');

// day 4
let date4 = document.querySelector('.date4')
let day4Temp = document.querySelector('#temp-forecast4');
let day4Wind = document.querySelector('#wind-forecast4');
let day4Humidity = document.querySelector('#humid-forecast4');

// day 5
let date5 = document.querySelector('.date5')
let day5Temp = document.querySelector('#temp-forecast5');
let day5Wind = document.querySelector('#wind-forecast5');
let day5Humidity = document.querySelector('#humid-forecast5');

let city;
let ApiKey= "16e3645c07b823d041161b6fafe4317e";

let now = dayjs();
let day1 = now.add(1, 'day');
let day2 = now.add(2, 'day');
let day3 = now.add(3, 'day');
let day4 = now.add(4, 'day');
let day5 = now.add(5, 'day');

submitBtn.addEventListener('click', function(){
        let city = citySearch.value;
        console.log(city);
        currentWeather(city);
});

cityBtn.addEventListener('click', function() {
    let city = cityBtn.innerText;
    console.log(city);
    currentWeather(city);
});

cityBtn2.addEventListener('click', function() {
    let city = cityBtn2.innerText;
    console.log(city);
    currentWeather(city);
});

cityBtn3.addEventListener('click', function() {
    let city = cityBtn3.innerText;
    console.log(city);
    currentWeather(city);
});

function currentWeather(city){
    
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${ApiKey}&units=imperial`)
        .then(function (response){
            if (response.ok){
                errorMessage.textContent = null;
            return response.json();
            } else{
                errorMessage.textContent = "City doesn't exist! :("
            }
        })
        .then(function (data){
            console.log(data)

            currentCity.textContent = data.city.name + ' / ' + now.format("MMMM DD, YYYY");
            currentTemp.textContent = Math.round(data.list[0].main.temp)+ '°F';
            currentWind.textContent = Math.round(data.list[0].wind.speed)+ ' mph';
            currentHumid.textContent = Math.round(data.list[0].main.humidity)+ ' %';

            date1.textContent = day1.format('ddd D');
            day1Temp.textContent = Math.round(data.list[1].main.temp)+ '°F';
            day1Wind.textContent = Math.round(data.list[1].wind.speed)+ ' mph';
            day1Humidity.textContent = Math.round(data.list[1].main.humidity)+ ' %';

            date2.textContent = day2.format('ddd D');;
            day2Temp.textContent = Math.round(data.list[2].main.temp)+ '°F';
            day2Wind.textContent = Math.round(data.list[2].wind.speed)+ ' mph';
            day2Humidity.textContent = Math.round(data.list[2].main.humidity)+ ' %';

            date3.textContent = day3.format('ddd D');;
            day3Temp.textContent = Math.round(data.list[3].main.temp)+ '°F';
            day3Wind.textContent = Math.round(data.list[3].wind.speed)+ ' mph';
            day3Humidity.textContent = Math.round(data.list[3].main.humidity)+ ' %';

            date4.textContent = day4.format('ddd D');;
            day4Temp.textContent = Math.round(data.list[4].main.temp)+ '°F';
            day4Wind.textContent = Math.round(data.list[4].wind.speed)+ ' mph';
            day4Humidity.textContent = Math.round(data.list[4].main.humidity)+ ' %';

            date5.textContent = day5.format('ddd D');;
            day5Temp.textContent = Math.round(data.list[5].main.temp)+ '°F';
            day5Wind.textContent = Math.round(data.list[5].wind.speed)+ ' mph';
            day5Humidity.textContent = Math.round(data.list[5].main.humidity)+ ' %';
            
        })
        .catch(function(error){
            console.log('Error occurred. Meow')
        });
};