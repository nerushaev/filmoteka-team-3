import { refs } from './refs';

export function renderMarkupGenres(idFilmGenre) {
  const genresList = localStorage.getItem(refs.STORAGE_KEY);
  const genresListFind = JSON.parse(genresList).genresData;
// console.log("genresListFind",genresListFind);
  // console.log(idFilmGenre);

  const numberGenres = idFilmGenre.length;
  
  const ganres = idFilmGenre.map((element) =>
    (genresListFind.find(genre => genre.id == element)).name).join(', ')
  // console.log(ganres);

  return (ganres);  
  }
