import React from 'react';
import "./Button.scss";

const Button = ({ name }) => {
  return (
    <a className="dbtn" href={'#daily-' + name}>{name}</a>
  )
}

export default Button;