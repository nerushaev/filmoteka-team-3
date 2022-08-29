import { refs } from "../refs";
import { renderMarkupGenres } from '../parseGenres';

export function generateMarkupModalInfo({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  original_title,
  genre_ids,
  overview }) {
  return `<img class="film-screen" src="${refs.IMG_URL}${poster_path}" alt="${title}">
      <div class="film-container--descr">
        ${title ? `<h2 class="film-title">${title}</h2>` : original_title}
        <table class="film-description">
          <tr>
            <th class="title-description">Vote / Votes</th>
            <td>
              ${vote_average ? `<span class="description-vote">${vote_average.toFixed(1)}</span> / ` : ''}
              ${vote_count ? `<span class="description-votes">${vote_count}</span>` : ''}
            </td>
          </tr>
          <tr>
            ${popularity ? `<th class="title-description">Popularity</th>
            <td>${popularity.toFixed(1)}</td>` : ''}
          </tr>
          <tr>
            ${original_title ? `<th class="title-description">Original Title</th>
            <td class="title-original-description">${original_title}</td>` : ''}
          </tr>
          <tr>
            ${genre_ids ? `<th class="title-description">Genre</th>
            <td>${renderMarkupGenres(genre_ids)}</td>` : ''}
          </tr>
        </table>
        ${ overview ? `<p class="film-delineation--title">About</p>
        <p class="film-delineation">${overview}</p>` : ''}
        <div class="film-description--btns">
          <button id="btn__info--watched"
            class="film-description--btn js-btn__info--watched"
            type="button"
          >
            add to Watched
          </button>
          <button id="btn__info--queue"
            class="film-description--btn js-btn__info--queue"
            type="button"
          >
            add to queue
          </button>
        </div>
      </div>`
};
