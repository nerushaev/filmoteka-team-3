
import { fetchData } from './getPopularFilms';
import Pagination from 'tui-pagination';
import { renderMarkupPopularFilms } from './renderMarkupPopularFilms';
// import 'tui-pagination/dist/tui-pagination.min.css';
import { loadHomePage } from './loadHomePage';
import { fetchData } from './getPopularFilms';


// =======ПЕРВЫЙ ВАРИАНТ (НЕ СРАБАТЫВАЕТ onclick)============

// const pagList = document.querySelector(".pagination-list");
// const li = document.querySelector('.pagination-item')

// // let totalPages = '';

// let page = 1;

// async function getData() {
//   const response = await fetchData(); 
//   let totalPages = response.total_pages;
//   // console.log(totalPages);
//   console.log(response);

//   pagList.innerHTML = createPagination(totalPages, page);

//     function createPagination(totalPages, page) {

//     let liTag = '';
//     let active;

//     let beforePage = page - 1;
//     let afterPage = page + 1;
    
//     if(page > 1){ 
//       liTag += `<li class="pagination-item btn-prev" onclick="createPagination(totalPages, ${page - 1})"><span class="arrow">
//       </span></li>`;
//     }
//     if(page > 2){ 
//       liTag += `<li class="pagination-item first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
//       if(page > 3){ 
//         liTag += `<li class="pagination-item dots"><span>...</span></li>`;
//       }
//     }
//     if (page == totalPages) {
//       beforePage = beforePage - 2;
//     } else if (page == totalPages - 1) {
//       beforePage = beforePage - 1;
//     }
//     if (page == 1) {
//       afterPage = afterPage + 2;
//     } else if (page == 2) {
//       afterPage  = afterPage + 1;
//     }

//     for (let pageLength = beforePage; pageLength <= afterPage; pageLength +=1) {
//       if (pageLength > totalPages) { 
//         continue;
//       }
//       if (pageLength == 0) { 
//         pageLength = pageLength + 1;
//       }
//       if(page == pageLength){ 
//         active = "active";
//       }else{ 
//         active = "";
//       }
//       liTag += `<li class="pagination-item numb ${active}" onclick="createPagination(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
//       // console.log(pageLength);
//     }
//     if(page < totalPages - 1){ 
//       if(page < totalPages - 2){ 
//         liTag += `<li class="pagination-item dots"><span>...</span></li>`;
//       }
//       liTag += `<li class="pagination-item last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
//     }
//     if (page < totalPages) { 
//       liTag += `<li class="pagination-item btn-next" onclick="createPagination(totalPages, ${page + 1})"><span class="arrow"></span></li>`;
//     }

//     pagList.innerHTML = liTag; 
//     return liTag; 
//   } 
// }
// getData()




//========ВТОРОЙ ВАРИАНТ (подключение библиотеки TUI PAGINATION)======

const list = document.querySelector('.gallery__set');
const form = document.querySelector('.header__form');
const input = document.querySelector('.header__input')
console.log(input);

const options = {
  totalItems: 0,
  itemsPerPage: 20,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
      '</a>'
  }
};

export const createPagination = () => {
  const container = document.getElementById('tui-pagination-container')
  const pagination = new Pagination(container, options);
  return pagination;
}
//-------ДАЛЬНЕЙШАЯ РАБОТА В ФАЙЛЕ loadHomePage-------



// const page = pagination.getCurrentPage();
// console.log(page);

// fetchData(page).then(({ results, total_pages, total_results }) => {
//   // renderMarkupPopularFilms(results);
//   pagination.reset(total_results)
    
// });


// pagination.on('afterMove', popular)

// function popular(e) {
//   // list.innerHTML = '';
//   const currentPage = e.page
//   console.log(currentPage);

//   fetchData(e.page).then(({ results, total_pages, total_results }) => {
//     list.innerHTML = '';
//     up();
//     renderMarkupPopularFilms(results);
//     // pagination.reset(total_results)
//   });
// }

// form.addEventListener('submit', handleSubmit)

// function handleSubmit(e) {
//   e.preventDefault();;
//   console.log(e.currentTaget.elements);
//   const { query } = e.currentTaget.elements
//   console.log(query);

// }

let scrollUp;

export function up() {
  if ((window.innerHeight + window.pageYOffset) < document.documentElement.scrollHeight) {
    window.scrollBy(0, 1); scrollUp = setTimeout('up()', 20);
  } else clearTimeout(scrollUp);
  return false;
}













//=======ТРЕТИЙ ВАРИАНТ (КАСТОМНЫЙ)=======
// async function getData() {
//   const response = await fetchData()
//   console.log(response);
//   return response;
// }
// getData()

// async function main() {
//   const postsData = await getData();
//   const currentPage = 1;
//   let rows = postsData.total_pages;
//   console.log(rows);
  
//   function displayList(arrData, rowPerPage, page) {
//     const postsEl = document.querySelector('.posts');
//     postsEl.innerHTML = "";
//     page--;

//     const start = rowPerPage * page;
//     const end = start + rowPerPage;
//     const paginatedData = arrData.slice(start, end);

//     paginatedData.forEach((el) => {
//       const postEl = document.createElement("div");
//       postEl.classList.add("post");
//       postEl.innerText = `${el.id}`;
//       postsEl.appendChild(postEl);
//     })
//   }

//   function displayPagination(arrData,rowsPerPage) {
//     const paginationEl = document.querySelector('.pagination');
//     const pagesCount = Math.ceil(arrData.length/rowsPerPage)
//     console.log(paginationEl);
//     const ulEl = document.createElement('ul');
//     ulEl.classList.add('pagination__list')

//     for (let i = 0; i < pagesCount; i += 1){
//       const liEl = displayPaginationBtn(i+1)
//       ulEl.appendChild(liEl)
//     }
//     paginationEl.appendChild(ulEl)

//   }
//   function displayPaginationBtn() { 
//     const liEl = document.createElement('li');
//     liEl.classList.add('pagination__item');
//     liEl.innerText = page;
//     return liEl;

//   }
  
//   displayList(postsData, rows, currentPage)
//   displayPagination(postsData,rows)
// }
// main()



//  createPagination(20, 5)*/
