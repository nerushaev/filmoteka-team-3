import { refs } from "../refs";
import { renderMarkupGenres } from '../parseGenres';

export function generateMarkupModalInfo({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genre_ids, id,

  overview }) {
  return `<div class="tumb__screen">
      ${poster_path ? `<img id="${id}" class="film-screen" src="${refs.IMG_URL}${poster_path}" alt="${title}" />` : ''}
      </div>

      <div class="film-container--descr">
        ${title ? `<h2  class="film-title">${title}</h2>` : original_title}
        <table class="film-description">
          <tr>
            ${!vote_average && !vote_count ? '' :  `<th class="title-description">Vote / Votes</th>
            <td>
              ${vote_average ? `<span class="description-vote">${vote_average.toFixed(1)}</span> / ` : ''}
              ${vote_count ? `<span class="description-votes">${vote_count}</span>` : ''}
            </td>
          </tr>`}
          <tr>
            ${popularity ? `<th class="title-description">Popularity</th>
            <td>${popularity.toFixed(1)}</td>` : ''}
          </tr>
          <tr>
            ${original_title ? `<th class="title-description description-title-original">Original Title</th>
            <td class="title-original-description">${original_title}</td>` : ''}
          </tr>
          <tr>
            ${!genre_ids || genre_ids.length === 0 ? '' : `<th class="title-description description-genre">Genre</th>
            <td>${renderMarkupGenres(genre_ids)}</td>`}
          </tr>
        </table>
        ${ overview ? `<p class="film-delineation--title">About</p>
        <p class="film-delineation">${overview}</p>` : ''}
        
      </div>`
};
