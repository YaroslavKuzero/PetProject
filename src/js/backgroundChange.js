import refs from './refs';
import data from '../weather-data.json';
import day_clear from '../images/day_clear.JPG';
import day_cloudy from '../images/day_cloudy.JPG';
import day_drizzle from '../images/day_drizzle.JPG';
import day_fog from '../images/day_fog.JPG';
import day_frost from '../images/day_frost.JPG';
import day_gale from '../images/day_gale.JPG';
import day_hot from '../images/day_hot.JPG';
import day_rain from '../images/day_rain.JPG';
import day_snow from '../images/day_snow.JPG';
import day_sunny from '../images/day_sunny.JPG';
import day_thunderstorm from '../images/day_thunderstorm.JPG';
import day_wind from '../images/day_wind.JPG';
import night_clear from '../images/night_clear.JPG';
import night_cloudy from '../images/night_cloudy.JPG';
import night_drizzle from '../images/night_drizzle.JPG';
import night_fog from '../images/night_fog.JPG';
import night_frost from '../images/night_frost.JPG';
import night_gale from '../images/night_gale.JPG';
import night_rain from '../images/night_rain.JPG';
import night_snow from '../images/night_snow.JPG';
import night_thunderstorm from '../images/night_thunderstorm.JPG';
import night_wind from '../images/night_wind.JPG';


const now = Date.now();

const backgroundChange = function () {
  if (now > (data.current.sunrise * 1000) && now < (data.current.sunset * 1000)) {
    switch (data.current.weather[0].main) {
      case 'Thunderstorm':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${day_thunderstorm})`;
        break;
      case 'Clouds':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${day_cloudy})`;
        break;
      case 'Clear':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${day_clear})`;
        break;
      case 'Rain':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${day_rain})`;
        break;
      case 'Drizzle':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${day_drizzle})`;
        break;
      case 'Snow':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${day_snow})`;
        break;
      case 'Fog':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${day_fog})`;
        break;
    }
  };

  if (now < (data.current.sunrise * 1000) || now > (data.current.sunset * 1000)) {
    switch (data.current.weather[0].main) {
      case 'Thunderstorm':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${night_thunderstorm})`;
        break;
      case 'Clouds':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${night_cloudy})`;
        break;
      case 'Clear':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${night_clear})`;
        break;
      case 'Rain':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${night_rain})`;
        break;
      case 'Drizzle':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${night_drizzle})`;
        break;
      case 'Snow':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${night_snow})`;
        break;
      case 'Fog':
        refs.body.style.backgroundImage = `linear-gradient(rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${night_fog})`;
        break;
    }
  }
}

export default backgroundChange;