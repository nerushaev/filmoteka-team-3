import { refs } from './refs';
import { renderGenresHomePage } from './formattedGenresOnHomePage';
import storage from './storage';
// import notify from 


refs.watchedBtnLibrary.addEventListener('click', onWatchedLibrary);
refs.queueBtnLibrary.addEventListener('click', onQueueLibrary);

let watchedLength = 0;
// let queueLength = 0;

libraryStart();

function libraryStart() {

  try {
    watchedLength = (storage.load(refs.LS_KEY_WATCH_MOVIE)).length;
  } catch (error) {
    watchedLength = 0;
  };

  if (watchedLength === 0) {
    refs.galleryMessage.classList.remove('hidden');
  } else if (watchedLength !== 0) {
  
    const data = storage.load(refs.LS_KEY_WATCH_MOVIE);
    refs.galleryMessage.classList.add('hidden');
    refs.galleryContainerLibrary.innerHTML = '';
    renderMarkupLibrary(data);
  }
}


async function onWatchedLibrary(evt) {
    evt.preventDefault();
    refs.watchedBtnLibrary.classList.add('btn__is-active');
    refs.queueBtnLibrary.classList.remove('btn__is-active');
  
  refs.galleryContainerLibrary.innerHTML = '';
  refs.galleryMessage.classList.add('hidden');
  
  const dataWat = await storage.load(refs.LS_KEY_WATCH_MOVIE);
  const childNodesGallery = refs.galleryContainerLibrary.childNodes;

  renderMarkupLibrary(dataWat);

  if (childNodesGallery.length === 0) {
    // console.log("aaa");
    refs.galleryMessage.classList.remove('hidden');
  }
  

}

async function onQueueLibrary(evt) {
   evt.preventDefault();
   refs.queueBtnLibrary.classList.add('btn__is-active');
    refs.watchedBtnLibrary.classList.remove('btn__is-active');

    
  refs.galleryContainerLibrary.innerHTML = '';
  refs.galleryMessage.classList.add('hidden');

  const dataQue = await storage.load(refs.LS_KEY_QUERY_MOVIE);
  const childNodesGallery = refs.galleryContainerLibrary.childNodes;

  renderMarkupLibrary(dataQue);
  
    if (childNodesGallery.length === 0) {
    // console.log("aaa");
    refs.galleryMessage.classList.remove('hidden');
  }
}

function renderMarkupLibrary(data) {
   // console.log('data', data);
  const markup = data
    .map(({ id, poster_path, genre_ids, release_date, title, vote_average }) => {
      return `<li class="gallery__item" data-id2="${id}">
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
       <span class="rating">${vote_average.toFixed(1)}</span>
                        </div>
                    </div>
                </a>
            </li>`;
    })
    .join('');
  refs.galleryContainerLibrary.insertAdjacentHTML("afterbegin", markup);
  
}


