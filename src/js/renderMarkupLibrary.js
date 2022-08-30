import { refs } from './refs';
import { renderGenresHomePage } from './formattedGenresOnHomePage';
import storage from './storage';

refs.watchedBtnLibrary.addEventListener('click', onWatchedLibrary);
refs.queueBtnLibrary.addEventListener('click', onQueueLibrary);

function onWatchedLibrary(evt) {
    evt.preventDefault();
    refs.watchedBtnLibrary.classList.add('btn__is-active');
    refs.queueBtnLibrary.classList.remove('btn__is-active');

    console.log(refs.galleryContainerLibrary);


    const data = storage.load(refs.LS_KEY_WATCH_MOVIE);
    console.log(data);
    renderMarkupLibrary(data);

}

function onQueueLibrary(evt) {
   evt.preventDefault();
    refs.queueBtnLibrary.classList.add('btn__is-active');
    refs.watchedBtnLibrary.classList.remove('btn__is-active');
 
    const data = storage.load(refs.LS_KEY_QUERY_MOVIE);
    console.log(data);
    renderMarkupLibrary(data);
}

function renderMarkupLibrary(data) {
    console.log('data', data);
  const markup = data
    .map(({ id, poster_path, genre_ids, release_date, title, vote_average }) => {
      return `<li class="gallery__item">
                <a  class="gallery__item__link"  target="_blank" rel="noopener noreferrer">
                   ${
                     poster_path
                       ? `<img class="gallery__item__img" data-id="${id}" src="${refs.IMG_URL}${poster_path}" alt="${title}">`
                       : `<img class="gallery__item__img" data-id="${id}" src="https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg" alt="${title}">`
                   } 
                    <div class="gallery__item__text">
                        ${
                          title
                            ? `<h3 class="gallery__item__title">${title}</h3>`
                            : `<h3 class="gallery__item__title">${original_name}</h3>`
                        }
                        <div class="gallery__item__descr">
                           ${
                             genre_ids
                               ? `<p class="genre">${renderGenresHomePage(
                                   genre_ids
                                 )}`
                               : ''
                           } ${
        release_date
          ? `| <span class="genre">  ${release_date.slice(0, 4)}</span>`
          : ''
      } </p>    
       <span class="rating">${vote_average}</span>
                        </div>
                    </div>
                </a>
            </li>`;
    })
    .join('');

    console.log(markup);
    refs.galleryContaunerLibrary.insertAdjacentHTML("afterbegin", markup);
       // ('beforeend', markup);
}
