import { fetchData } from './getPopularFilms';  
import { enableLoader, disableLoader } from './loader.js';
import { renderMarkupPopularFilms } from './renderMarkupPopularFilms';

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