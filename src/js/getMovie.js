import axios from 'axios';
import { refs, userSearch } from './refs'

userSearch.searchButton.addEventListener('click', getMovie);

async function getMovie(e) {
  const parametrs = new URLSearchParams({
    query: userSearch.userSearchInputRef.value,
    api_key: `${refs.API_KEY}`,
  });
  const response = await axios.get(`${refs.SEARCH_URL}?${parametrs}`)
    .then(response => console.log(response.data.results))
    .catch(error => console.log(error))
}


