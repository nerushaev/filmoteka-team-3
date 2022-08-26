import { refs } from './refs';
import axios from 'axios';

async function getGenres() {
  const genres = await axios.get(`${refs.GENRES_URL}?api_key=${refs.API_KEY}`)
    .then(genres => {console.log(genres)})
    .catch(error => console.log(error))
};

getGenres();