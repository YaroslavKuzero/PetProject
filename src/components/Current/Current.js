import React, { Component } from 'react';
import './Current.scss';
import { current } from '../../js/format-data';

class Current extends Component {


  render() {
    return (
      <div className="current">
        <div className="current__city">Kherson, UA</div>
        <div className="current__time">{current.dt}</div>
        <div className="current__weather"><img src={current.weather.icon} alt={current.weather.main} /></div>
        <div className="current__sunrise"><i className="wi wi-sunrise"></i><span>{current.sunrise}</span></div>
        <div className="current__sunset"><i className="wi wi-sunset"></i><span>{current.sunset}</span></div>
        <div className="current__temperature"><i className="wi wi-thermometer"></i><span>{current.temp}</span></div>
        <div className="current__feelslike">Feels Like <span>{current.feels_like}</span></div>
        <div className="current__pressure"><i className="wi wi-barometer"></i><span>{current.pressure}</span></div>
        <div className="current__humidity"><i className="wi wi-humidity"></i><span>{current.humidity}</span></div>
        <div className="current__dew_point"><i className="wi wi-raindrop"></i> <span>{current.dew_point}</span></div>
        <div className="current__visibility"><i className="wi wi-horizon"></i><span>{current.visibility}</span></div>
        <div className="current__windspeed"><i className="wi wi-gale-warning"></i><span>{current.wind_speed}</span></div>
        <div className="current__wind-dir"><i className="wi wi-wind towards-{{wind_deg}}-deg"></i>{current.wind_deg}˚</div>
      </div>);
  }
}

export default Current;