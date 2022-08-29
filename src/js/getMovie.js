import axios from 'axios';
import { refs, userSearch } from './refs'



export async function getMovie(currentPage) {
  if (currentPage === undefined) {
    currentPage = 1;
  }
  const parametrs = new URLSearchParams({
    query: userSearch.userSearchInputRef.value,
    api_key: `${refs.API_KEY}`,
    page:`${currentPage}`,
  });
    try {
      const response = await axios.get(`${refs.SEARCH_URL}?${parametrs}`);
      return response.data;
      console.log(response);
    }
    catch (err) {
      console.log(err);
  }
}


