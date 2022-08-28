import { refs } from './refs';
import { fetchData } from './getPopularFilms';
import { enableLoader, disableLoader } from './loader.js';
import { renderMarkupPopularFilms } from './renderMarkupPopularFilms';
import { getGenresList } from './getGenresList';
import storage from './storage';

window.addEventListener('DOMContentLoaded', loadHomePage);

async function loadHomePage() {
  enableLoader();

  try {
    //   Записываем в localStorage список жанров
    getGenresList();

    const response = await fetchData();
    storage.save(refs.LS_KEY_POPULAR_MOVIE, response.results);

    renderMarkupPopularFilms(response.results);
    disableLoader();
  } catch (err) {
    console.log(err);
    disableLoader();
  }
}
