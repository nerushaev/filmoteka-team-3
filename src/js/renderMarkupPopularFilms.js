import { refs } from './refs';
import { renderGenresHomePage } from './formattedGenresOnHomePage';

export function renderMarkupPopularFilms(data) {
  const markup = data
    .map(({ id, poster_path, genre_ids, release_date, title }) => {
      return `<li class="gallery__item">
                <a  class="gallery__item__link" data-id="${id}" target="_blank" rel="noopener noreferrer">
                   ${
                     poster_path
                       ? `<img class="gallery__item__img" src="${refs.IMG_URL}${poster_path}" alt="${title}">`
                       : `<img class="gallery__item__img" src="https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg" alt="${title}">`
                   } 
                    <div class="gallery__item__text" data-id="${id}">
                        ${
                          title
                            ? `<h3 class="gallery__item__title">${title}</h3>`
                            : `<h3 class="gallery__item__title">${original_name}</h3>`
                        }
                        <div class="gallery__item__descr" data-id="${id}">
                           ${
                             genre_ids
                               ? `<p class="genre" data-id="${id}">${renderGenresHomePage(
                                   genre_ids
                                 )}`
                               : ''
                           } ${
        release_date
          ? `| <span class="genre">  ${release_date.slice(0, 4)}</span>`
          : ''
      } </p>                            
                        </div>
                    </div>
                </a>
            </li>`;
    })
    .join('');

  refs.homePageGallery.insertAdjacentHTML('beforeend', markup);
}
