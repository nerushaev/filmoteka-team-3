import axios from 'axios';
import { refs } from './refs';

async function getGenresList() {
    const response = await axios.get(`${refs.GENRES_URL}?api_key=${refs.API_KEY}&language=en-US`)
        .then(data => {
            const genresData = data.data.genres;           
            console.log(genresData);
            localStorage.setItem('genres_key', JSON.stringify({ genresData }));
            }
          )
          .catch(error => console.log(error));
}

getGenresList();





