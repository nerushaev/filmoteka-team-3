import { refs } from "../refs";

const btnQueueLibrary = document.querySelector('#btn__info--queue');
const btnWatchedLibrary = document.querySelector('#btn__info--watched');
btnQueueLibrary.addEventListener('click', addToQueueList)
btnWatchedLibrary.addEventListener('click', addToWatchedList)

function addToQueueList(){
const arrIdQueue = JSON.parse(localStorage.getItem(refs.LS_KEY_QUERY_MOVIE) || `[]`)
const filmIdQueue = Number(document.querySelector('.film-screen').id)
const sss = arrIdQueue.find(obj => obj.id === filmIdQueue)
if(sss){
console.log('fffffffff')
return
}
const arrFilms = JSON.parse(localStorage.getItem(refs.LS_KEY_POPULAR_MOVIE));
let arrayId = arrFilms.find(obj => obj.id === filmIdQueue)
arrIdQueue.push(arrayId)
localStorage.setItem(refs.LS_KEY_QUERY_MOVIE, JSON.stringify(arrIdQueue))
}

function addToWatchedList(){ 
const arrIdWatched = JSON.parse(localStorage.getItem(refs.LS_KEY_WATCH_MOVIE) || `[]`)
const filmIdWatched = Number(document.querySelector('.film-screen').id)
const sss = arrIdWatched.find(obj => obj.id === filmIdWatched)
if(sss){
console.log('fffffffff')
return
}
    const arrFilms = JSON.parse(localStorage.getItem(refs.LS_KEY_POPULAR_MOVIE))
    let arrayId = arrFilms.find(obj => obj.id === filmIdWatched)
    arrIdWatched.push(arrayId) 
    localStorage.setItem(refs.LS_KEY_WATCH_MOVIE, JSON.stringify(arrIdWatched))
}

