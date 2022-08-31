import { getMovie } from "./getMovie";
import { disableLoader, enableLoader } from "./loader";
import { refs, userSearch } from './refs';
import { renderMarkupPopularFilms } from "./renderMarkupPopularFilms";
import storage from "./storage";
import { createPagination, scrollUp } from './pagination';
import { clearPreviousResults } from './loadHomePage';

// Добавляем слушателей на иконку и инпут
userSearch.searchButton.addEventListener('click', loadQueryFilms);
userSearch.userSearchInputRef.addEventListener('keydown', onEnterKeyPress)

// console.log(userSearch.formNotificationErr);

// Функция запроса фильма 
async function loadQueryFilms() {
  // Включаем лоадер
  enableLoader();
  try {
    // Выполняем запрос по введенной информации
    const response = await getMovie();
    //Если приходит 0 выключаем лоадер и выходим из функции
    if (response.total_results <= 0) {
    // Добавляем плашку с ошибкой
      userSearch.formNotificationErr.classList.remove('hidden');
      disableLoader();
      return;
    } // Если запрос не пустой, проверяем на месте ли плашка, если да - убираем
    else {
      if (!userSearch.formNotificationErr.classList.contains('hidden')) {
        userSearch.formNotificationErr.classList.add('hidden');
      }
    // Сохраняем полученую информацию в локал сторедж
    storage.save(refs.LS_KEY_POPULAR_MOVIE, response.results);
    console.log(response);
    // Обнуляем разметку
    refs.homePageGallery.innerHTML = "";
    // Рендерим из полученого массива объектов карточки
    renderMarkupPopularFilms(response.results);
    // Выключаем лоадер
    disableLoader();
    // Сохраняем общее колличество результатов
    const totalResult = response.total_results;
    // Сохраняем общее колличество страниц
    let currentPage = response.page;
    console.log(currentPage);
    
    const pagination = createPagination();
    pagination.setItemsPerPage(20);
    pagination.setTotalItems(totalResult);
    pagination.movePageTo(currentPage);
      
    pagination.on('afterMove', e => {
      const currentPage = e.page;
      console.log(currentPage);
      onSearchPagination(currentPage)
      scrollUp();
    })
      
    }
  }
 catch (err) {
    console.log(err);
    disableLoader();
    userSearch.formNotificationErr.classList.remove('hidden');
  } 
}

async function onSearchPagination(currentPage) {
  const response = await getMovie(currentPage);
  const data = response.results;

  storage.save(refs.LS_KEY_POPULAR_MOVIE, response.results);
  console.log(data);

  clearPreviousResults();
  renderMarkupPopularFilms(data);
}

function onEnterKeyPress(event) {
  if (event.code === 'Enter') {
  event.preventDefault();
      loadQueryFilms();
  }
}


//-----loadQueryFilms без пагинации-----

// async function loadQueryFilms() {
//   enableLoader();
//   try {
//     const response = await getMovie();
//     storage.save(refs.LS_KEY_POPULAR_MOVIE, response.results);
//     console.log(response);
//     if (response.total_results <= 0) {
//       userSearch.formNotificationErr.classList.remove('hidden');
//       disableLoader();
//     } else {
//     if (!userSearch.formNotificationErr.classList.contains('hidden')) {
//       userSearch.formNotificationErr.classList.add('hidden');
//     }
//     refs.homePageGallery.innerHTML = "";
//     renderMarkupPopularFilms(response.results);
//     disableLoader();
//     }
//   }
//   catch (err) {
//     console.log(err);
//   }
// }
