import { refs } from "../refs";
import { storage } from '../storage';

const btnQueueLibrary = document.querySelector('#btn__info--queue');
const btnWatchedLibrary = document.querySelector('#btn__info--watched');
btnQueueLibrary.addEventListener('click', addToQueueList)
btnWatchedLibrary.addEventListener('click', addToWatchedList)

function addToQueueList(){

const arrIdQueue = JSON.parse(localStorage.getItem(refs.LS_KEY_QUERY_MOVIE) || `[]`)
const filmIdQueue = Number(document.querySelector('.film-screen').id)
const arrFilms = JSON.parse(localStorage.getItem(refs.LS_KEY_POPULAR_MOVIE));
let arrayId = arrFilms.find(obj => obj.id === filmIdQueue)
const idStorageQueue = arrIdQueue.find(obj => obj.id === filmIdQueue)

if(!btnQueueLibrary.classList.contains('active-btn')){
btnQueueLibrary.classList.add('active-btn')
btnQueueLibrary.textContent = 'Remove from queue'
arrIdQueue.push(arrayId)
localStorage.setItem(refs.LS_KEY_QUERY_MOVIE, JSON.stringify(arrIdQueue))}
else {
btnQueueLibrary.classList.remove('active-btn')
btnQueueLibrary.textContent = 'Add to queue'
let indexMovie = arrIdQueue.indexOf(idStorageQueue)
arrIdQueue.splice(indexMovie, 1);
localStorage.setItem(refs.LS_KEY_QUERY_MOVIE, JSON.stringify(arrIdQueue))
  const card = document.querySelector(`[data-id2="${filmIdQueue}"]`);
  // console.log(card);
  if (refs.galleryContainerLibrary) {
    card.remove();
  }

  const childNodesGallery = refs.galleryContainerLibrary.childNodes;
  if (childNodesGallery.length === 0) {
    // console.log("aaa");
    refs.galleryMessage.classList.remove('hidden');
  }
}
}


function addToWatchedList() {

const arrIdWatched = JSON.parse(localStorage.getItem(refs.LS_KEY_WATCH_MOVIE) || `[]`)
const filmIdWatched = Number(document.querySelector('.film-screen').id)
const idStorageWatched = arrIdWatched.find(obj => obj.id === filmIdWatched)
const arrFilms = JSON.parse(localStorage.getItem(refs.LS_KEY_POPULAR_MOVIE))
let arrayId = arrFilms.find(obj => obj.id === filmIdWatched)

if(btnWatchedLibrary.classList.contains('active-btn') === false){
btnWatchedLibrary.classList.add('active-btn')
btnWatchedLibrary.textContent = 'Remove from watched'
arrIdWatched.push(arrayId) 
localStorage.setItem(refs.LS_KEY_WATCH_MOVIE, JSON.stringify(arrIdWatched))}
else{
btnWatchedLibrary.classList.remove('active-btn')
btnWatchedLibrary.textContent = 'Add to watched'
let indexMovie = arrIdWatched.indexOf(idStorageWatched)
arrIdWatched.splice(indexMovie, 1);
localStorage.setItem(refs.LS_KEY_WATCH_MOVIE, JSON.stringify(arrIdWatched))
  const card = document.querySelector(`[data-id2="${filmIdWatched}"]`);
  if (refs.galleryContainerLibrary) {
    card.remove();
  }
  
  const childNodesGallery = refs.galleryContainerLibrary.childNodes;
  if (childNodesGallery.length === 0) {
    // console.log("aaa");
    refs.galleryMessage.classList.remove('hidden');
  }
}
}


