import axios from 'axios';
import { refs, userSearch } from './refs'
import { disableLoader } from './loader';



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
    // if (!parametrs.query) {
    //   userSearch.formNotificationErr.classList.remove('hidden');
    //   disableLoader();
    //   return;
    // } else {
    //   if (!userSearch.formNotificationErr.classList.contains('hidden')) {
    //     userSearch.formNotificationErr.classList.add('hidden');
    //     return;
    //   }

      const response = await axios.get(`${refs.SEARCH_URL}?${parametrs}`);
      return response.data;
      console.log(response);
  }
    catch (err) {
      console.log(err);
  }
}


