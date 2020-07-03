import refs from './refs';

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

export default tabSwitcher;