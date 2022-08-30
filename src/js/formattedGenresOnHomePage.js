import { refs } from './refs';

export function renderGenresHomePage(idFilmGenre) {
  const genresList = localStorage.getItem(refs.STORAGE_KEY);
  const genresListFind = JSON.parse(genresList).genresData;
  const ganres = idFilmGenre.map(
    element => genresListFind.find(genre => genre.id == element).name
  );

  if (ganres.length > 3) {
    ganres.splice(3);
    ganres[2] = 'Other';
  } else if (ganres.length === 0) {
    ganres[0] = 'Genre unknown';
  }

  return ganres.join(', ');
}
