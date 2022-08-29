import { getMovie } from "./getMovie";
import { disableLoader, enableLoader } from "./loader";
import { refs, userSearch } from './refs';
import { renderMarkupPopularFilms } from "./renderMarkupPopularFilms";
import storage from "./storage";

userSearch.searchButton.addEventListener('click', loadQueryFilms);
userSearch.userSearchInputRef.addEventListener('keypress', onEnterKeyPress)

console.log(userSearch.formNotificationErr);

async function loadQueryFilms() {
  enableLoader();
  try {
    const response = await getMovie();
    storage.save(refs.LS_KEY_POPULAR_MOVIE, response.results);
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
    }
  }
  catch (err) {
    console.log(err);
  }
}

function onEnterKeyPress(event) {
  if (event.code === 'Enter') {
  event.preventDefault();
      loadQueryFilms();
  }
  return;
}