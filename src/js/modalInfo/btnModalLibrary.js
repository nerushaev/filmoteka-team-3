import { refs } from "../refs";
import { renderMarkupGenres } from '../parseGenres';

const btnQueueLibrary = document.querySelector('#btn__info--queue');
const btnWatchedLibrary = document.querySelector('#btn__info--watched');
btnQueueLibrary.addEventListener('click', addToQueueList)
btnWatchedLibrary.addEventListener('click', addToWatchedList)
console.log(btnQueueLibrary)
const arrIdQueue = []
const arrIdWatched = []

function addToQueueList(){
const filmIdQueue = Number(document.querySelector('.film-screen').id)
console.log(filmIdQueue)

const arrFilms = JSON.parse(localStorage.getItem(refs.LS_KEY_POPULAR_MOVIE));
let arrayId = arrFilms.find(obj => obj.id === filmIdQueue)
let a = arrIdQueue.push(arrayId)
localStorage.setItem(refs.LS_KEY_QUERY_MOVIE, JSON.stringify(arrIdQueue))
}

function addToWatchedList(){
    const filmIdWatched = Number(document.querySelector('.film-screen').id)
    console.log(filmIdWatched)
    
    const arrFilms = JSON.parse(localStorage.getItem(refs.LS_KEY_POPULAR_MOVIE));
    let arrayId = arrFilms.find(obj => obj.id === filmIdWatched)
    let a = arrIdWatched.push(arrayId)
    localStorage.setItem(refs.LS_KEY_WATCH_MOVIE, JSON.stringify(arrIdWatched))

}