import React from 'react';
import './Day.scss';
import shortid from 'shortid';

const Day = ({ day }) => {
  return (
    <div className="daily-box" key={shortid.generate()}>
      <div className="daily__date"></div>
      <div className="daily__weather"><img src={day.weather.icon} alt={day.weather.main} /></div>
      <div className="daily__sunrise"><i className="wi wi-sunrise"></i><span>{day.sunrise}</span></div>
      <div className="daily__sunset"><i className="wi wi-sunset"></i><span>{day.sunset}</span></div>
      <div className="daily__temperature">
        <div className="dayt"><i className="wi wi-thermometer"></i><span>{day.temp}</span></div>
      </div>
      <div className="daily__feelslike">
        <div className="fday">Feels Like <span>{day.feels_like}</span></div>
      </div>
      <div className="daily__pressure"><i className="wi wi-barometer"></i><span>{day.pressure}</span></div>
      <div className="daily__humidity"><i className="wi wi-humidity"></i><span>{day.humidity}</span></div>
      <div className="daily__dew-point"><i className="wi wi-raindrop"></i><span>{day.dew_point}</span></div>
      <div className="daily__windspeed"><i className="wi wi-gale-warning"></i> <span>{day.wind_speed}</span></div>
      <div className="daily__wind-dir"><i className={'wi wi-wind towards-' + day.wind_deg + '-deg'}></i><span>{day.wind_deg}˚</span></div>
    </div>
  );
}

export default Day;