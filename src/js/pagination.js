import Pagination from 'tui-pagination';
// import { loadHomePage } from './loadHomePage';


//========ПЕРВЫЙ ВАРИАНТ (подключение библиотеки TUI PAGINATION)======

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

export function scrollUp() {
  window.scrollTo({ top: 240, behavior: 'smooth' });
}
//-------ДАЛЬНЕЙШАЯ РАБОТА В ФАЙЛЕ loadHomePage-------


// =======ВТОРОЙ ВАРИАНТ (НЕ СРАБАТЫВАЕТ onclick)============

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




