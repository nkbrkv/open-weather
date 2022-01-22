import {url, config} from './modules/config';
import Weather from './modules/weather';
import Header from './modules/header';
import Props from './modules/props';
import getWeatherData from './modules/fetch';

document.addEventListener('DOMContentLoaded', () => {
   
    
    getWeatherData(url).then(data => {
        console.log(data)
        let temp = data.main.temp,
            city = data.name,
            state = data.weather[0].description,
            stateID = data.weather[0].id,
            date = data.dt,
            feelsLike = data.main.feels_like,
            pressure = data.main.pressure,
            humidity = data.main.humidity,
            wind = data.wind.speed;

        new Header(city, state, temp, config).render();
        new Props(feelsLike, pressure, humidity, wind, config).render();
        for(let i = 0; i < 5; i++) {
            new Weather(date, state, temp, stateID).render();
        }
        
    });

    // function selectPicture(stateID) {
    //     const id = (stateID + '');
    //     switch(id[0]) {
    //         case 2: return svg.thunderstorm;
    //         case 3: return svg.drizzle;
    //         case 5: return svg.rain;
    //         case 6: return svg.snow;
    //         case 7: return svg.atmosphere;
    //         case 8: 
    //             if (stateID == 800) return 1233;
    //             else return svg.clouds;
    //     }
    // }

    // console.log(selectPicture(800))
    
});