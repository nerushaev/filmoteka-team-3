import { refs } from "../refs";
import { renderMarkupGenres } from '../parseGenres';

const btnQueueLibrary = document.querySelector('#btn__info--queue');
const btnWatchedLibrary = document.querySelector('#btn__info--watched');
btnQueueLibrary.addEventListener('click', addToQueueList)
btnWatchedLibrary.addEventListener('click', addToWatchedList)

const arrIdQueue = []
const arrIdWatched = []

function addToQueueList(){
const filmIdQueue = document.querySelector('.film-screen').id
console.log(filmIdQueue)
let arrayId = arrIdQueue.push(filmIdQueue)
console.log(arrIdQueue)
localStorage.setItem(refs.LS_KEY_QUERY_MOVIE, JSON.stringify(arrIdQueue))
}

function addToWatchedList(){
    const filmIdWatched = document.querySelector('.film-screen').id
    console.log(filmIdWatched)
    let arrayId = arrIdWatched.push(filmIdWatched)
    console.log(arrIdWatched)
    localStorage.setItem(refs.LS_KEY_WATCH_MOVIE, JSON.stringify(arrIdWatched)) 
}