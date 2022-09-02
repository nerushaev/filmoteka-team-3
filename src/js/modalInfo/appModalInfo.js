import { refs } from '../refs';
import storage from '../storage';
import { generateMarkupModalInfo } from './markupModalInfo';
// import { checkLocalStorage } from './btnModalLibrary';
 
const btnQueueLibrary = document.querySelector('#btn__info--queue');
const btnWatchedLibrary = document.querySelector('#btn__info--watched');

const DELAY = 250;

// Слушатели
refs.gallerySetEL.addEventListener('click', onOpenModalInfo);
const galleryContainer = refs.galleryContainerLibrary;
if (galleryContainer) {
    galleryContainer.addEventListener('click', onOpenModalInfo)
}
refs.closeBtnModalInfo.addEventListener('click', onCloseModalInfo);
refs.backdropEl.addEventListener('click', onBackdropClick);

// Ф-ция открывает модальное окно с инфармацией о выбраном фильме, при нажатии на иконку с фильмом

async function onOpenModalInfo(evt) {
    if (evt.target.nodeName === 'UL') {
        return;
    }

    let allMovie = [];

    const loadPopMovies = await storage.load(refs.LS_KEY_POPULAR_MOVIE);
    const watchMovies = await storage.load(refs.LS_KEY_WATCH_MOVIE);
    const quereMovies = await storage.load(refs.LS_KEY_QUERY_MOVIE);

    allMovie.push(...loadPopMovies);

    if (watchMovies && quereMovies) {
        allMovie.push(...watchMovies);
        allMovie.push(...quereMovies);
    } else if (watchMovies) {
        allMovie.push(...watchMovies);
    } else if (quereMovies) {
        allMovie.push(...quereMovies);
    }

    let idMovie = Number(evt.target.parentNode.dataset.id);
    const selectedMovie = allMovie.find(loadMovie => loadMovie.id === idMovie);

    appendInfoForModalMarkup(selectedMovie);
    // console.log(allMovie);
    checkQueryStorage(quereMovies);
    checkWatchedStorage(watchMovies);
    document.body.classList.add('stop-scrolling');
    window.addEventListener('keydown', onEscKeyPress);
    refs.backdropEl.classList.remove('backdrop__is-hidden');
}

// Ф-ция закрывает модальное окно с инфармацией о фильме, при нажатии на кнопку закрытия
export function onCloseModalInfo() {
    window.removeEventListener('keydown', onEscKeyPress);
    refs.backdropEl.classList.add('backdrop__is-hidden');
    document.body.classList.remove('stop-scrolling');
    clearInfoForModalMarkup();
}
// Ф-ция закрывает модальное окно с инфармацией о фильме, при нажатии вне модалки (на бэкдроп)
export function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
        onCloseModalInfo();
    }
}
// Ф-ция закрывает модальное окно с инфармацией о фильме, при нажатии на Esc
export function onEscKeyPress(evt) {
    const ESC_KEY_CODE = 'Escape';

    if (evt.code === ESC_KEY_CODE) {
        onCloseModalInfo();
    }
}

// Ф-ция добавляет разметку с информацией в модальное окно
export function appendInfoForModalMarkup(data) {
    refs.containerModalInfo.insertAdjacentHTML('beforeend', generateMarkupModalInfo(data));
}

// Ф-ция очищает разметку с информацией в модальном окне (DELAY = $Duration)
export function clearInfoForModalMarkup() {
    setTimeout(() => {
        refs.containerModalInfo.innerHTML = '';
    }, DELAY);
}

async function checkQueryStorage(allMovies) {
    const filmIdQueue = Number(document.querySelector('.film-screen').id)

    const haveMovies = allMovies.find(obj => obj.id === filmIdQueue);

    if (haveMovies) {
    btnQueueLibrary.classList.add('active-btn');
    btnQueueLibrary.textContent = 'Remove from queue'
    } else {
    btnQueueLibrary.classList.remove('active-btn');
    btnQueueLibrary.textContent = 'Add to queue';
    }

}

async function checkWatchedStorage(data) {
    const filmIdQueue = Number(document.querySelector('.film-screen').id)

    const haveMovies = data.find(obj => obj.id === filmIdQueue);

    if (haveMovies) {
    btnWatchedLibrary.classList.add('active-btn');
    btnWatchedLibrary.textContent = 'Remove from watched'
    } else {
    btnWatchedLibrary.classList.remove('active-btn');
    btnWatchedLibrary.textContent = 'Add to watched';
    }
}