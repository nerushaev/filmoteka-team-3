const list = document.querySelector(".pagination-list");
let totalPages = 20;

let page = 10;

list.innerHTML = createPagination(totalPages, page);

function createPagination(totalPages, page){
  let liTag = '';
  let active;

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
  
  for (let pageLength = beforePage; pageLength <= afterPage; pageLength++) {
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

  list.innerHTML = liTag; 
  return liTag; 
}
//  createPagination(20, 5)