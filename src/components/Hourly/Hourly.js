import React, { Component } from 'react';
import './Hourly.scss';
import { hourly } from '../../js/format-data';
import shortid from 'shortid';

class Hourly extends Component {
  render() {
    return (
      <div className="hourly">
        {hourly.map(hour => (
          <div className="hourly-box" key={shortid.generate()}>
            <div className="hourly__time"><span>{hour.dt}</span></div>
            <div className="hourly__date"><span>{hour.dd}</span></div>
            <div className="hourly__weather"><img src={hour.weather.icon} alt={hour.weather.main} /></div>
            <div className="hourly__temperature"><i className="wi wi-thermometer"></i><span>{hour.temp}</span></div>
            <div className="hourly__feelslike">Feels Like <span>{hour.feels_like}</span></div>
            <div className="hourly__pressure"><i className="wi wi-barometer"></i><span>{hour.pressure}</span></div>
            <div className="hourly__humidity"><i className="wi wi-humidity"></i><span>{hour.humidity}</span></div>
            <div className="hourly__dew-point"><i className="wi wi-raindrop"></i><span>{hour.dew_point}</span></div>
            <div className="hourly__windspeed">
              <i className="wi wi-gale-warning"></i><span>{hour.wind_speed}</span>
            </div>
            <div className="current__wind-dir"><i className={'wi wi-wind towards-' + hour.wind_deg + '-deg'}></i><span>{hour.wind_deg}˚</span></div>
          </div>
        ))}
      </div>
    );
  }
}

export default Hourly;