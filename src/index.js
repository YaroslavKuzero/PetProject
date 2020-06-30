import './styles.scss';
import curr from './templates/current-weather.hbs';
import day from './templates/daily-weather.hbs';
import btns from './templates/date-btns.hbs';
import hrly from './templates/hourly-weather.hbs';
import logo from './templates/logo.hbs';
import { current, daily, hourly } from './js/format-data';

const refs = {
  root: document.querySelector('.root'),
  current: document.querySelector('.current'),
  daily: document.querySelector('.daily__wrapper'),
  hourly: document.querySelector('.hourly'),
  btns: document.querySelector('.btn-box'),
}

const markupCurrent = curr(current);
refs.current.insertAdjacentHTML("beforeend", markupCurrent);
const markupDaily = day(daily);
refs.daily.insertAdjacentHTML("beforeend", markupDaily);
const markupBtns = btns(daily);
refs.btns.insertAdjacentHTML('beforeend', markupBtns);
const markupHourly = hrly(hourly);
refs.hourly.insertAdjacentHTML('beforeend', markupHourly);
const markupLogo = logo();
refs.root.insertAdjacentHTML('afterbegin', markupLogo);