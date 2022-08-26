// Refs
const backdropEl = document.querySelector('.backdrop');
const btnCloseModal = document.querySelector('.js-btn-close');
const cardEl = document.querySelector('.js-card')
// Cl El
console.log(backdropEl);
console.log(btnCloseModal);
console.log(cardEl);
//Evt
cardEl.addEventListener('click', onOpenModal);
btnCloseModal.addEventListener('click', onCloseModal);
backdropEl.addEventListener('click', onBackdropClick)


// Ф-ция открывает модальное окно с инфармацией о выбраном фильме, при нажатии на карточу с фильмом 
function onOpenModal() {
    // console.log("Modal is open!");
    window.addEventListener('keydown', onEscKeyPress);
    backdropEl.classList.remove('backdrop__is-hidden');
}
// Ф-ция закрывает модальное окно с инфармацией о фильме, при нажатии на кнопку закрытия
function onCloseModal() {
    // console.log("Modal is close!");
    window.removeEventListener('keydown', onEscKeyPress);
    backdropEl.classList.add('backdrop__is-hidden');
}
// Ф-ция закрывает модальное окно с инфармацией о фильме, при нажатии вне модалки (на бэкдроп)
function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
        // console.log("This function onBackdropClick");
        onCloseModal();
    }
}
// Ф-ция закрывает модальное окно с инфармацией о фильме, при нажатии на Esc
function onEscKeyPress(evt) {
    const ESC_KEY_CODE = 'Escape';

    if (evt.code === ESC_KEY_CODE) {
        onCloseModal();
    }
}