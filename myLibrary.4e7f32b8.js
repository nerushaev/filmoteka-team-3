var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},s=e.parcelRequired7c6;null==s&&((s=function(e){if(e in a)return a[e].exports;if(e in r){var s=r[e];delete r[e];var t={id:e,exports:{}};return a[e]=t,s.call(t.exports,t,t.exports),t.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,a){r[e]=a},e.parcelRequired7c6=s),s("999qs"),s("krGWQ");var t=s("krGWQ"),n=s("3Hr66"),i=s("5uEKZ");s("2nhTy"),t.refs.watchedBtnLibrary.addEventListener("click",(async function(e){e.preventDefault(),t.refs.watchedBtnLibrary.classList.add("btn__is-active"),t.refs.queueBtnLibrary.classList.remove("btn__is-active"),t.refs.galleryContainerLibrary.innerHTML="";const a=await i.default.load(t.refs.LS_KEY_WATCH_MOVIE);if(!a)return void t.refs.galleryMessage.classList.remove("hidden");o(a)})),t.refs.queueBtnLibrary.addEventListener("click",(async function(e){e.preventDefault(),t.refs.queueBtnLibrary.classList.add("btn__is-active"),t.refs.watchedBtnLibrary.classList.remove("btn__is-active"),t.refs.galleryContainerLibrary.innerHTML="";const a=await i.default.load(t.refs.LS_KEY_QUERY_MOVIE);if(console.log(a),0===a.length)return void t.refs.galleryMessage.classList.remove("hidden");o(a)}));let l=0,d=0;function o(e){const a=e.map((({id:e,poster_path:a,genre_ids:r,release_date:s,title:i,vote_average:l})=>`<li class="gallery__item">\n                <a  class="gallery__item__link" data-id="${e}" target="_blank" rel="noopener noreferrer">\n                   ${a?`<img class="gallery__item__img" src="${t.refs.IMG_URL}${a}" alt="${i}">`:`<img class="gallery__item__img" src="https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg" alt="${i}">`} \n                    <div class="gallery__item__text" data-id="${e}">\n                        ${i?`<h3 class="gallery__item__title">${i}</h3>`:`<h3 class="gallery__item__title">${original_name}</h3>`}\n                        <div class="gallery__item__descr" data-id="${e}">\n                           ${r?`<p class="genre" data-id="${e}">${(0,n.renderGenresHomePage)(r)}`:""} ${s?`| <span class="genre">  ${s.slice(0,4)}</span>`:""} </p>    \n       <span class="rating">${l.toFixed(1)}</span>\n                        </div>\n                    </div>\n                </a>\n            </li>`)).join("");t.refs.galleryContainerLibrary.insertAdjacentHTML("afterbegin",a)}!function(){try{l=i.default.load(t.refs.LS_KEY_WATCH_MOVIE).length}catch(e){l=0}try{d=i.default.load(t.refs.LS_KEY_QUERY_MOVIE).length}catch(e){d=0}if(0===l&&0===d)t.refs.galleryMessage.classList.remove("hidden");else if(0!=l){t.refs.galleryMessage.classList.add("hidden"),t.refs.galleryContainerLibrary.innerHTML="";const e=i.default.load(t.refs.LS_KEY_WATCH_MOVIE);console.log(e.length),o(e)}}(),s("2nhTy"),s("bTcpz"),s("bg8ey"),s("3mYqn");
//# sourceMappingURL=myLibrary.4e7f32b8.js.map