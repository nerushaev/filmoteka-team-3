!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,n){a[e]=n},n.parcelRequired7c6=r),r("cmGV1"),r("4Nugj");var s=r("bpxeT"),c=r("2TvXO"),i=r("4Nugj"),l=r("5WCHM"),o=r("jzQFI");function d(){return(d=e(s)(e(c).mark((function n(t){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i.refs.watchedBtnLibrary.classList.add("btn__is-active"),i.refs.queueBtnLibrary.classList.remove("btn__is-active"),console.log(i.refs.galleryContainerLibrary),e.next=6,o.default.load(i.refs.LS_KEY_WATCH_MOVIE);case 6:a=e.sent,console.log(a),_(a);case 9:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function u(){return(u=e(s)(e(c).mark((function n(t){var a;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),i.refs.queueBtnLibrary.classList.add("btn__is-active"),i.refs.watchedBtnLibrary.classList.remove("btn__is-active"),e.next=5,o.default.load(i.refs.LS_KEY_QUERY_MOVIE);case 5:a=e.sent,console.log(a),_(a);case 8:case"end":return e.stop()}}),n)})))).apply(this,arguments)}function _(e){console.log("data",e);var n=e.map((function(e){var n=e.id,t=e.poster_path,a=e.genre_ids,r=e.release_date,s=e.title,c=e.vote_average;return'<li class="gallery__item">\n                <a  class="gallery__item__link"  target="_blank" rel="noopener noreferrer">\n                   '.concat(t?'<img class="gallery__item__img" data-id="'.concat(n,'" src="').concat(i.refs.IMG_URL).concat(t,'" alt="').concat(s,'">'):'<img class="gallery__item__img" data-id="'.concat(n,'" src="https://sd.keepcalms.com/i-w600/keep-calm-poster-not-found.jpg" alt="').concat(s,'">'),' \n                    <div class="gallery__item__text">\n                        ').concat('<h3 class="gallery__item__title">'.concat(s||original_name,"</h3>"),'\n                        <div class="gallery__item__descr">\n                           ').concat(a?'<p class="genre">'.concat((0,l.renderGenresHomePage)(a)):""," ").concat(r?'| <span class="genre">  '.concat(r.slice(0,4),"</span>"):"",' </p>    \n       <span class="rating">').concat(c.toFixed(1),"</span>\n                        </div>\n                    </div>\n                </a>\n            </li>")})).join("");console.log(n),i.refs.galleryContainerLibrary.insertAdjacentHTML("afterbegin",n)}i.refs.watchedBtnLibrary.addEventListener("click",(function(e){return d.apply(this,arguments)})),i.refs.queueBtnLibrary.addEventListener("click",(function(e){return u.apply(this,arguments)}))}();
//# sourceMappingURL=myLibrary.692795f2.js.map
