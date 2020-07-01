import data from '../weather-data.json';
import { getDate, getShortDate, getTime } from './format-time';
const currentData = data.current;
const dailyData = [...data.daily];
const hourlyData = [...data.hourly];

const current = {
  dt: `${getDate(Date.now())}`,
  sunrise: `${getTime(currentData.sunrise)} LT`,
  sunset: `${getTime(currentData.sunset)} LT`,
  temp: `${Math.round(currentData.temp)} ˚C`,
  feels_like: `${Math.round(currentData.feels_like)} ˚C`,
  pressure: `${currentData.pressure} hpa`,
  humidity: `${currentData.humidity} %`,
  dew_point: `${currentData.dew_point}`,
  visibility: `${currentData.visibility} m`,
  wind_speed: `${currentData.wind_speed} m/s`,
  wind_deg: `${currentData.wind_deg}`,
  weather: {
    main: `${currentData.weather[0].main}`,
    icon: `http://openweathermap.org/img/wn/${currentData.weather[0].icon}@2x.png`,
  }
}

const daily = [];
dailyData.forEach(item => {
  const dailyItem = {
    dt: `${getShortDate(item.dt * 1000)}`,
    sunrise: `${getTime(item.sunrise * 1000)} LT`,
    sunset: `${getTime(item.sunset)} LT`,
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

const hourly = [];
hourlyData.forEach(item => {
  item.dt = item.dt * 1000;
  const hourlyItem = {
    dd: `${getShortDate(item.dt)}`,
    dt: `${getTime(item.dt)}`,
    sunrise: `${getTime(item.sunrise)} LT`,
    sunset: `${getTime(item.sunset)} LT`,
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

export { current, daily, hourly };