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
refs.daily.firstElementChild.classList.add('tab--active')
const markupBtns = btns(daily);
refs.btns.insertAdjacentHTML('beforeend', markupBtns);
refs.btns.firstElementChild.classList.add('daily--active');
const markupHourly = hrly(hourly);
refs.hourly.insertAdjacentHTML('beforeend', markupHourly);
const markupLogo = logo();
refs.root.insertAdjacentHTML('afterbegin', markupLogo);

const tabSwitcher = function (event) {
  event.preventDefault();

  if (event.target.nodeName !== 'A') {
    console.log('Ne tuda');
    return;
  };

  const activeBtn = refs.btns.querySelector('.daily--active');

  if (activeBtn) {
    activeBtn.classList.remove('daily--active');
    const tabId = activeBtn.getAttribute('href').slice(1);
    const tab = refs.daily.querySelector(`#${tabId}`);
    tab.classList.remove('tab--active');
  };

  const controlItem = event.target;
  const tabId = controlItem.getAttribute('href').slice(1);
  controlItem.classList.add('daily--active');

  const tab = refs.daily.querySelector(`#${tabId}`);
  tab.classList.add('tab--active');
}

refs.btns.addEventListener('click', tabSwitcher);