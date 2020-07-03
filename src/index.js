import './styles.scss';
import curr from './templates/current-weather.hbs';
import day from './templates/daily-weather.hbs';
import btns from './templates/date-btns.hbs';
import hrly from './templates/hourly-weather.hbs';
import logo from './templates/logo.hbs';
import { current, daily, hourly } from './js/format-data';
import refs from './js/refs';
import tabSwitcher from './js/tabSwitcher';
import backgroundChange from './js/backgroundChange';

refs.current.insertAdjacentHTML("beforeend", curr(current));
refs.daily.insertAdjacentHTML("beforeend", day(daily));
refs.btns.insertAdjacentHTML('beforeend', btns(daily));
refs.hourly.insertAdjacentHTML('beforeend', hrly(hourly));
refs.root.insertAdjacentHTML('afterbegin', logo());
refs.btns.firstElementChild.firstElementChild.classList.add('daily--active');
refs.daily.firstElementChild.classList.add('tab--active')

refs.btns.addEventListener('click', tabSwitcher);

backgroundChange();