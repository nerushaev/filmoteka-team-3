import { refs } from './refs';
import { renderMarkupGenres } from './parseGenres';

export function renderMarkupPopularFilms(data) {
  const markup = data.map(
      ({id,
        poster_path,
        genre_ids,
        release_date,
        title,
    }) => {
      return `<li class="gallery__item">
                <a  class="gallery__item__link"  target="_blank" rel="noopener noreferrer">
                    <img class="gallery__item__img" data-id="${id}" src="${refs.IMG_URL}${poster_path}" alt="${title}">
                    <div class="gallery__item__text">
                        <h3 class="gallery__item__title">${title}</h3>
                        <div class="gallery__item__descr">
                            <p class="genre">${renderMarkupGenres(genre_ids)} | ${release_date.slice(0, 4)}</p>                            
                        </div>
                    </div>
                </a>
            </li>`;
      }).join('');

  refs.homePageGallery.insertAdjacentHTML('beforeend', markup);    
}