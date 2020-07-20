import data from '../weather-data.json';
import moment from 'moment';

const currentData = data.current;
const dailyData = [...data.daily];
const hourlyData = [...data.hourly];

const current = {
  dt: `${moment().format("ddd DD MMMM YYYY")
    }`,
  sunrise: `${moment(currentData.sunrise * 1000).format("HH:mm")} LT`,
  sunset: `${moment(currentData.sunset * 1000).format("HH:mm")} LT`,

  temp: `${Math.round(currentData.temp)} ˚C`,
  feels_like: `${Math.round(currentData.feels_like)} ˚C`,
  pressure: `${currentData.pressure} hpa`,
  humidity: `${currentData.humidity} % `,
  dew_point: `${currentData.dew_point} `,
  visibility: `${currentData.visibility} m`,
  wind_speed: `${currentData.wind_speed} m / s`,
  wind_deg: `${currentData.wind_deg} `,
  weather: {
    main: `${currentData.weather[0].main} `,
    icon: `http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`,
  }
}

const formatedjsoncurrent = JSON.stringify(current) //object



const daily = [];
dailyData.forEach(item => {
  const dailyItem = {
    dt: `${moment(item.dt * 1000).format("DD MMMM")}`,
    sunrise: `${moment(item.sunrise * 1000).format("HH:mm")} LT`,
    sunset: `${moment(item.sunset * 1000).format("HH:mm")} LT`,

    temp: `${Math.round(item.temp.day)} ˚C`,
    feels_like: `${Math.round(item.feels_like.day)} ˚C`,
    pressure: `${item.pressure} hpa`,
    humidity: `${item.humidity} %`,
    dew_point: `${item.dew_point}`,
    wind_speed: `${item.wind_speed} m/s`,
    wind_deg: `${item.wind_deg}`,
    weather: {
      main: `${item.weather[0].main}`,
      icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
    }
  }
  daily.push(dailyItem);
});

const formatedjsondaily = JSON.stringify(daily)  //array of objects


const hourly = [];
hourlyData.forEach(item => {
  item.dt = item.dt * 1000;
  const hourlyItem = {

    dd: `${moment(item.dt).format("DD MMMM")}`,
    dt: `${moment(item.dt).format("HH:mm")}`,
    sunrise: `${moment(item.sunrise).format("HH:mm")} LT`,
    sunset: `${moment(item.sunset).format("HH:mm")} LT`,

    temp: `${Math.round(item.temp)} ˚C`,
    feels_like: `${Math.round(item.feels_like)} ˚C`,
    pressure: `${item.pressure} hpa`,
    humidity: `${item.humidity} %`,
    dew_point: `${item.dew_point}`,
    wind_speed: `${item.wind_speed} m/s`,
    wind_deg: `${item.wind_deg}`,
    weather: {
      main: `${item.weather[0].main}`,
      icon: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`,
    }
  }

  hourly.push(hourlyItem);
})


const formatedjsonhourly = JSON.stringify(hourly) //array of objects


export { current, daily, hourly };