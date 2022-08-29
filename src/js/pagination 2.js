import { fetchData } from './getPopularFilms.js';
import { storage } from './storage.js'

const pagList = document.querySelector(".pagination-list");
const li = document.querySelector('.pagination-item')

// let totalPages = '';

// let page = 1;

// async function getData(callback) {
//     const response = await fetchData(); 
//   let totalPages = response.total_pages;
//   callback(totalPages)
//   return totalPages;
// }
// totalPages = getData.response.totalPages;
// console.log(totalPages);
// pagList.innerHTML = createPagination(totalPages, page);


// function createPagination(totalPages, page) {

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
//     } 

//  fetch(API).then((res) => res.json()).then((data) => {temp = data.main.temp});





// getData(createPagination)
    
// async function getData() {
//   try {
//     const response = await fetchData(); 
//     let totalPages = response.total_pages;
//     console.log(totalPages);
//     return totalPages;
//     } catch (error) {
//       console.log(error);
//   }
// }

let totalPages = getData();
console.log(totalPages);

addEventListener.pagList('click', createPagination())

async function createPagination(evt) {
  let liTag = '';
  let active;
  let totalPages = await fetchData();

    let beforePage = page - 1;
    let afterPage = page + 1;
    
    if(page > 1){ 
      liTag += `<li class="pagination-item btn-prev" onclick="createPagination(totalPages, ${page - 1})"><span class="arrow">
      </span></li>`;
    }
    if(page > 2){ 
      liTag += `<li class="pagination-item first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
      if(page > 3){ 
        liTag += `<li class="pagination-item dots"><span>...</span></li>`;
      }
    }
    if (page == totalPages) {
      beforePage = beforePage - 2;
    } else if (page == totalPages - 1) {
      beforePage = beforePage - 1;
    }
    if (page == 1) {
      afterPage = afterPage + 2;
    } else if (page == 2) {
      afterPage  = afterPage + 1;
    }

    for (let pageLength = beforePage; pageLength <= afterPage; pageLength +=1) {
      if (pageLength > totalPages) { 
        continue;
      }
      if (pageLength == 0) { 
        pageLength = pageLength + 1;
      }
      if(page == pageLength){ 
        active = "active";
      }else{ 
        active = "";
      }
      liTag += `<li class="pagination-item numb ${active}" onclick="createPagination(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
      // console.log(pageLength);
    }
    if(page < totalPages - 1){ 
      if(page < totalPages - 2){ 
        liTag += `<li class="pagination-item dots"><span>...</span></li>`;
      }
      liTag += `<li class="pagination-item last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }
    if (page < totalPages) { 
      liTag += `<li class="pagination-item btn-next" onclick="createPagination(totalPages, ${page + 1})"><span class="arrow"></span></li>`;
    }
    console.log(pagList);
    pagList.innerHTML = liTag; 
    return liTag; 
}

createPagination(20, 5)




// pagList.innerHTML = createPagination(totalPages, page);

// function createPagination(totalPages, page) {
//   // try {
//   //   const response = await fetchData(); 

//   //   let totalPagess = response.total_pages;
//   //   console.log(totalPagess);
//   // } catch (error) {
//   //   console.log(error);
//   // }

//   let liTag = '';
//   let active;

//   let beforePage = page - 1;
//   let afterPage = page + 1;
  
//   if(page > 1){ 
//     liTag += `<li class="pagination-item btn-prev" onclick="createPagination(totalPages, ${page - 1})"><span class="arrow">
//     </span></li>`;
//   }
//   if(page > 2){ 
//     liTag += `<li class="pagination-item first numb" onclick="createPagination(totalPages, 1)"><span>1</span></li>`;
//     if(page > 3){ 
//       liTag += `<li class="pagination-item dots"><span>...</span></li>`;
//     }
//   }
//   if (page == totalPages) {
//     beforePage = beforePage - 2;
//   } else if (page == totalPages - 1) {
//     beforePage = beforePage - 1;
//   }
//   if (page == 1) {
//     afterPage = afterPage + 2;
//   } else if (page == 2) {
//     afterPage  = afterPage + 1;
//   }
  
//   for (let pageLength = beforePage; pageLength <= afterPage; pageLength++) {
//     if (pageLength > totalPages) { 
//       continue;
//     }
//     if (pageLength == 0) { 
//       pageLength = pageLength + 1;
//     }
//     if(page == pageLength){ 
//       active = "active";
//     }else{ 
//       active = "";
//     }
//     liTag += `<li class="pagination-item numb ${active}" onclick="createPagination(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
//   }
//   if(page < totalPages - 1){ 
//     if(page < totalPages - 2){ 
//       liTag += `<li class="pagination-item dots"><span>...</span></li>`;
//     }
//     liTag += `<li class="pagination-item last numb" onclick="createPagination(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
//   }
//   if (page < totalPages) { 
//     liTag += `<li class="pagination-item btn-next" onclick="createPagination(totalPages, ${page + 1})"><span class="arrow"></span></li>`;
//   }

//  pagList.innerHTML = liTag; 
//   return liTag; 

// }
// console.log(createPagination(20, 5));
// //  createPagination(20, 5)