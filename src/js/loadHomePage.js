import { fetchData } from './getPopularFilms';
import { enableLoader, disableLoader } from './loader.js';
import { renderMarkupPopularFilms } from './renderMarkupPopularFilms';

import { createPagination, scrollUp } from './pagination';
import { refs, userSearch } from './refs';
import { getGenresList } from './getGenresList';
import storage from './storage';
 
const CURRENT_PAGE = 'current-page';
//----измененный код для работы с пагинацией, ниже закоменченный оригинал----
window.addEventListener('DOMContentLoaded', loadHomePage);

export async function loadHomePage(e) {
  enableLoader();

  try {
    //   Записываем в localStorage список жанров
    getGenresList();

    const response = await fetchData();
    // console.log(response);
    storage.save(refs.LS_KEY_POPULAR_MOVIE, response.results);

    renderMarkupPopularFilms(response.results);
    disableLoader();

    const totalResult = response.total_results;
    let currentPage = response.page;
    // console.log(currentPage);

    // storage.save(CURRENT_PAGE, currentPage);
    if (response.total_pages >= 2) {
  const pagination = createPagination();
    pagination.setItemsPerPage(20);
    pagination.setTotalItems(totalResult);
    pagination.movePageTo(currentPage);

    pagination.on('afterMove', e => {
      const currentPage = e.page;
      // console.log(currentPage);
      getOtherPopular(currentPage);
      scrollUp();

    });
}
    

  } catch (err) {
    console.log(err);
    disableLoader();
  }
}

export function clearPreviousResults() {
  if (refs.gallerySetEL.hasChildNodes() === true) {
    refs.gallerySetEL.innerHTML = '';
  }
  return;
}

async function getOtherPopular(currentPage) {
  try {
    const response = await fetchData(currentPage);
    const data = response.results;
    storage.save(refs.LS_KEY_POPULAR_MOVIE, response.results);
    // console.log(data);

    // storage.save(CURRENT_PAGE, currentPage);

    clearPreviousResults();
    renderMarkupPopularFilms(data);
  } catch (error) {
    console.log(error);
  }
}

//---изначальный код----

// window.addEventListener("DOMContentLoaded", loadHomePage);

// export async function loadHomePage() {
//   enableLoader();
//   try {
//     const response = await fetchData();
//     renderMarkupPopularFilms(response.results);
//     disableLoader();
//   } catch (err) {
//     console.log(err);
//     disableLoader();
//   }

// }
