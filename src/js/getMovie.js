import axios from 'axios';
import { refs, userSearch } from './refs'



export async function getMovie(e) {
  const parametrs = new URLSearchParams({
    query: userSearch.userSearchInputRef.value,
    api_key: `${refs.API_KEY}`,
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


