import axios from 'axios';
import { refs } from './refs';
import {enableLoader, disableLoader} from './loader.js';

export async function fetchData() {
  const parametrs = new URLSearchParams({
    api_key: `${refs.API_KEY}`,
    page: 1,
  });
  try {
    const response = await axios.get(`${refs.POPULAR_URL}?${parametrs}`)
    return response.data;
  } catch (err) {
    console.log(err);
  }
}


window.addEventListener("DOMContentLoaded", loadHomePage);

async function loadHomePage() {
  enableLoader();
  try {
    const response = await fetchData();    
    renderMarkupPopularFilms(response.results);
    disableLoader();
  } catch (err) {
    console.log(err);
    disableLoader();
  } 

}

const homePageGallery = document.querySelector(".gallery__set");

function renderMarkupPopularFilms(data) {
  const markup = data.map(
      ({
        backdrop_path,
        genre_ids,
        release_date,
        title,
      }) => {
      return `<li class="gallery__item">
                <a  class="gallery__item__link" target="_blank" rel="noopener noreferrer">
                    <img src="${refs.IMG_URL}${backdrop_path}" alt="${title}" class="gallery__item__img">
                    <div class="gallery__item__text">
                        <h3 class="gallery__item__title">${title}</h3>
                        <div class="gallery__item__descr">
                            <span class="genre">${genre_ids}</span>
                            <span class="slash">|</span>
                            <span class="year">${release_date.slice(0, 4)}</span>
                        </div>
                    </div>
                </a>
            </li>`;
      }).join('');

  homePageGallery.insertAdjacentHTML('beforeend', markup);
}