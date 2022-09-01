import { refs } from './refs';
export const btnScrollTop = document.querySelector('#scrollTop');

btnScrollTop.addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

// const body = document.querySelector('body');

setInterval(function displayBtnScrollTop() {
  if (window.scrollY >= 100) {
    btnScrollTop.style.display = 'flex';
  } else {
    btnScrollTop.style.display = 'none';
  }
}, 250);