import { getMovie } from "./getMovie";
import { disableLoader, enableLoader } from "./loader";
import { refs, userSearch } from './refs';
import { renderMarkupPopularFilms } from "./renderMarkupPopularFilms";

userSearch.searchButton.addEventListener('click', loadQueryFilms);

async function loadQueryFilms() {
  enableLoader();
  try {
    const response = await getMovie();
    console.log(response);
    refs.homePageGallery.innerHTML = "";
    renderMarkupPopularFilms(response.results);
    disableLoader();
  }
  catch (err) {
    console.log(err);
  }
}