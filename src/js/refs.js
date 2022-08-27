const refs = {
  API_KEY: 'ade224e438a5cac910232dacab4d697a',
  POPULAR_URL: 'https://api.themoviedb.org/3/trending/movie/day',
  GENRES_URL: 'https://api.themoviedb.org/3/genre/movie/list',
  SEARCH_URL: 'https://api.themoviedb.org/3/search/movie',

  backdropEl: document.querySelector('.js-backdrop'),
  modalInfoEL: document.querySelector('.js-modal__info'),
  containerModalInfo: document.querySelector('.js-film__container--info'),
  closeBtnModalInfo: document.querySelector('.js-btn__info--close'),
  watchedBtnModalInfo: document.querySelector('.js-btn__info--watched'),
  queueBtnModalInfo: document.querySelector('.js-btn__info--queue'),
  imitationCard: document.querySelector('.js-card'),

  IMG_URL: 'https://image.tmdb.org/t/p/w500'
};



const userSearch = {
  userSearchInputRef: document.querySelector('.header__input'),
  searchButton: document.querySelector('.form-icon')
};

export { refs, userSearch };