import axios from 'axios';
import { refs } from './refs'

async function fetchData() {
  const parametrs = new URLSearchParams({
    media_type: "movie",
    api_key: `${refs.API_KEY}`,
    page: 1,
  });
  const response = await axios.get(`${refs.BASE_URL}?${parametrs}`)
    .then(value => console.log(value))
    .catch(error => console.log(error))
}

fetchData();
