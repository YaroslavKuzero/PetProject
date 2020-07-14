import React from 'react';
import "./Button.scss";

const Button = ({ day }) => {
  return (
    <a className="dbtn" href={'#daily-' + day.dt}>{day.dt}</a>
  )
}

export default Button;