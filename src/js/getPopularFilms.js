import axios from 'axios';
import { refs } from './refs';

export async function fetchData() {
  const parametrs = new URLSearchParams({
    api_key: `${refs.API_KEY}`,
    page: 1,
  });
  try {
    const response = await axios.get(`${refs.POPULAR_URL}?${parametrs}`)
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
  
