import { refs } from './refs';

console.log(refs.backdropEl);
console.log(refs.modalInfoEL);
console.log(refs.closeBtnModalInfo);
console.log(refs.watchedBtnModalInfo);
console.log(refs.queueBtnModalInfo);
console.log(refs.imitationCard);

// Слушатели
refs.imitationCard.addEventListener('click', onOpenModalInfo);
refs.closeBtnModalInfo.addEventListener('click', onCloseModalInfo);
refs.backdropEl.addEventListener('click', onBackdropClick)


// Ф-ция открывает модальное окно с инфармацией о выбраном фильме, при нажатии на карточу с фильмом 
function onOpenModalInfo() {
    window.addEventListener('keydown', onEscKeyPress);
    refs.backdropEl.classList.remove('backdrop__is-hidden');
}
// Ф-ция закрывает модальное окно с инфармацией о фильме, при нажатии на кнопку закрытия
function onCloseModalInfo() {
    window.removeEventListener('keydown', onEscKeyPress);
    refs.backdropEl.classList.add('backdrop__is-hidden');
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