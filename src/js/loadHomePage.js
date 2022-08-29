import { refs } from './refs';
import { fetchData } from './getPopularFilms';
import { enableLoader, disableLoader } from './loader.js';
import { renderMarkupPopularFilms } from './renderMarkupPopularFilms';

import { createPagination, up } from './pagination';
import { refs, userSearch } from './refs'
import { getGenresList } from './getGenresList';
import storage from './storage';

//----измененный код для работы с пагинацией, ниже закоменченный оригинал----
window.addEventListener('DOMContentLoaded', loadHomePage);

export async function loadHomePage(e) {
  enableLoader();

  try {
    //   Записываем в localStorage список жанров
    getGenresList();

    const response = await fetchData();
    storage.save(refs.LS_KEY_POPULAR_MOVIE, response.results);

    renderMarkupPopularFilms(response.results);
    disableLoader();

    const totalResult = response.total_results;
    let currentPage = response.page;
    console.log(currentPage);

    const pagination = createPagination();
    pagination.setItemsPerPage(20);
    // pagination.setTotalItems(totalResult);
    pagination.reset(totalResult)
    pagination.movePageTo(currentPage);

    pagination.on('afterMove', e => {
      const currentPage = e.page;
      console.log(currentPage);
      window.scrollTo({ top: 240, behavior: 'smooth' });
      getOtherPopular(currentPage);
      // up();
    })

  } catch (err) {
    console.log(err);
    disableLoader();


  } 
}
export function clearPreviousResults() {
  if ( refs.gallerySetEL.hasChildNodes() === true) {
     refs.gallerySetEL.innerHTML = '';
  }
  return;
}

async function getOtherPopular(currentPage) {
  try {
    const response = await fetchData(currentPage);
    const data = response.results;
    storage.save(refs.LS_KEY_POPULAR_MOVIE, response.results);
    console.log(data);

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



