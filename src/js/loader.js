const divLoaderEl = document.querySelector('#loader');

function enableLoader() {
   
    divLoaderEl.classList.remove('done');
};

function disableLoader() {
   
    divLoaderEl.classList.add('done');
};

export { enableLoader, disableLoader };