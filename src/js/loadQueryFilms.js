import { getMovie } from "./getMovie";
import { disableLoader, enableLoader } from "./loader";
import { refs, userSearch } from './refs';
import { renderMarkupPopularFilms } from "./renderMarkupPopularFilms";
import storage from "./storage";
import { createPagination } from './pagination';
import { clearPreviousResults } from './loadHomePage';

userSearch.searchButton.addEventListener('click', loadQueryFilms);
userSearch.userSearchInputRef.addEventListener('keypress', onEnterKeyPress)

console.log(userSearch.formNotificationErr);

async function loadQueryFilms() {
  enableLoader();
  try {
    const response = await getMovie();
    storage.save(refs.LS_KEY_QUERY_MOVIE, response.results);
    console.log(response);

    if (response.total_results <= 0) {
      userSearch.formNotificationErr.classList.remove('hidden');
      disableLoader();
    } else {
      if (!userSearch.formNotificationErr.classList.contains('hidden')) {
        userSearch.formNotificationErr.classList.add('hidden');
      }
      
    refs.homePageGallery.innerHTML = "";
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
      onSearchPagination(currentPage)
      // up();
    })
    }
  }
 catch (err) {
    console.log(err);

  } 
}

async function onSearchPagination(currentPage) {
  const response = await getMovie(currentPage);
  const data = response.results;

  storage.save(refs.LS_KEY_QUERY_MOVIE, response.results);
  console.log(data);

    clearPreviousResults();

    renderMarkupPopularFilms(data);
}



//-----loadQueryFilms без пагинации-----

// async function loadQueryFilms() {
//   enableLoader();
//   try {
//     const response = await getMovie();
//     storage.save(refs.LS_KEY_POPULAR_MOVIE, response.results);
//     console.log(response);
//     if (response.total_results <= 0) {
//       userSearch.formNotificationErr.classList.remove('hidden');
//       disableLoader();
//     } else {
//     if (!userSearch.formNotificationErr.classList.contains('hidden')) {
//       userSearch.formNotificationErr.classList.add('hidden');
//     }
//     refs.homePageGallery.innerHTML = "";
//     renderMarkupPopularFilms(response.results);
//     disableLoader();
//     }
//   }
//   catch (err) {
//     console.log(err);
//   }
// }

function onEnterKeyPress(event) {
  if (event.code === 'Enter') {
  event.preventDefault();
      loadQueryFilms();
  }
  return;
}