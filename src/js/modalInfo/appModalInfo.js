import { refs } from '../refs';
import storage from '../storage';
import { generateMarkupModalInfo } from './markupModalInfo';

const DELAY = 250;

// Слушатели
refs.gallerySetEL.addEventListener('click', onOpenModalInfo);
refs.closeBtnModalInfo.addEventListener('click', onCloseModalInfo);
refs.backdropEl.addEventListener('click', onBackdropClick);

// Ф-ция открывает модальное окно с инфармацией о выбраном фильме, при нажатии на иконку с фильмом
// (нужно на карточу с фильмом - ! не выходит поймать evt на LI, что бы взять id с LI, а не IMG!)
async function onOpenModalInfo(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const loadPopMovies = await storage.load(refs.LS_KEY_POPULAR_MOVIE);
  let idMovie = Number(evt.target.dataset.id);
  const selectedMovie = loadPopMovies.find(
    loadMovie => loadMovie.id === idMovie
  );
  appendInfoForModalMarkup(selectedMovie);

  window.addEventListener('keydown', onEscKeyPress);
  refs.backdropEl.classList.remove('backdrop__is-hidden');
}

// Ф-ция закрывает модальное окно с инфармацией о фильме, при нажатии на кнопку закрытия
function onCloseModalInfo() {
  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdropEl.classList.add('backdrop__is-hidden');
  clearInfoForModalMarkup();
}
// Ф-ция закрывает модальное окно с инфармацией о фильме, при нажатии вне модалки (на бэкдроп)
function onBackdropClick(evt) {
  if (evt.currentTarget === evt.target) {
    onCloseModalInfo();
  }
}
// Ф-ция закрывает модальное окно с инфармацией о фильме, при нажатии на Esc
function onEscKeyPress(evt) {
  const ESC_KEY_CODE = 'Escape';

  if (evt.code === ESC_KEY_CODE) {
    onCloseModalInfo();
  }
}

// Ф-ция добавляет разметку с информацией в модальное окно
function appendInfoForModalMarkup(selectedMovie) {
  refs.containerModalInfo.insertAdjacentHTML(
    'beforeend',
    generateMarkupModalInfo(selectedMovie)
  );
}

// Ф-ция очищает разметку с информацией в модальном окне (DELAY = $Duration)
function clearInfoForModalMarkup() {
  setTimeout(() => {
    refs.containerModalInfo.innerHTML = '';
  }, DELAY);
}
