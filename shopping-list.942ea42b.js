!function(){function n(n,t,e,o){Object.defineProperty(n,t,{get:e,set:o,enumerable:!0,configurable:!0})}function t(n){return n&&n.__esModule?n.default:n}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},i={},a=e.parcelRequired7c6;null==a&&((a=function(n){if(n in o)return o[n].exports;if(n in i){var t=i[n];delete i[n];var e={id:n,exports:{}};return o[n]=e,t.call(e.exports,e,e.exports),e.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,t){i[n]=t},e.parcelRequired7c6=a),a.register("iE7OH",(function(t,e){var o,i;n(t.exports,"register",(function(){return o}),(function(n){return o=n})),n(t.exports,"resolve",(function(){return i}),(function(n){return i=n}));var a={};o=function(n){for(var t=Object.keys(n),e=0;e<t.length;e++)a[t[e]]=n[t[e]]},i=function(n){var t=a[n];if(null==t)throw new Error("Could not resolve bundle with id "+n);return t}})),a.register("aNJCr",(function(t,e){var o;n(t.exports,"getBundleURL",(function(){return o}),(function(n){return o=n}));var i={};function a(n){return(""+n).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}o=function(n){var t=i[n];return t||(t=function(){try{throw new Error}catch(t){var n=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(n)return a(n[2])}return"/"}(),i[n]=t),t}})),a("iE7OH").register(JSON.parse('{"jSFKT":"shopping-list.942ea42b.js","iBapZ":"icons.abbade11.svg","5uWXW":"amazon.35e2295a.webp","bt2Tw":"amazon@2x.52597b7e.webp","4Sit1":"apple-books.8b0c3eb8.webp","d1Pnb":"apple-books@2x.6fa174b5.webp","cfiU8":"index.ed88a67c.js"}')),a("9o45G"),a("fk8Hr");var s,r=a("aijKs"),c=a("4Nugj");c=a("4Nugj");s=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("5uWXW");var l;l=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("bt2Tw");var p;p=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("4Sit1");var u;u=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("d1Pnb");var d;d=a("aNJCr").getBundleURL("jSFKT")+a("iE7OH").resolve("iBapZ");var _=c.refs.shoppingContentList;function f(n,t){return n.find((function(n){return n.name.toLowerCase()===t})).url}r=a("aijKs");function g(n,t){var e=n.target.closest(".shopping-content__delete-btn");e&&(!function(n,t){var e=t.findIndex((function(t){return t._id===n}));t.splice(e,1)}(e.closest(".shopping-content__item").dataset.id,t),(0,r.saveToLS)("dates of books",t),H())}var h,v=c.refs.emptyContent,b=c.refs.shoppingContentList,m=null!==(h=(0,r.loadFromLS)("dates of books"))&&void 0!==h?h:[];function H(){var n;0!==m.length?v.classList.add("visually-hidden"):v.classList.remove("visually-hidden"),n=m.map((function(n){var e=n._id,o=n.book_image,i=n.list_name,a=n.title,r=n.author,c=n.buy_links,_=f(c,"amazon"),g=f(c,"apple books");return'<li class="shopping-content__item" data-id="'.concat(e,'">\n                <img class="shopping-content__image" src="').concat(o,'" alt="').concat(a,'" />\n                <div class="shopping-content__box">\n                    <div class="shopping-content__header-wrapper">\n                        <div class="shopping-content__head-box">\n                            <h3 class="shopping-content__title">').concat(a,'</h3>\n                            <span class="shopping-content__list-name">').concat(i,'</span>\n                        </div>\n                        <button class="shopping-content__delete-btn" type="button">\t\t\t\t\t\n                            <svg class="shopping-content__icon-trash">\n\t\t\t\t\t\t        <use href="').concat(t(d),'#icon-trash"></use>\n\t\t\t\t\t        </svg>\n                        </button>\n                    </div>\n                    <p class="shopping-content__description">\n                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quo facere quibusdam\n                        necessitatibus ex odio quaerat mollitia modi minima\n                    </p>\n                    <div class="shopping-content__bottom-wrapper">\n                        <span class="shopping-content__author">').concat(r,'</span>\n                        <ul class="shopping-content__company-list">\n                            <li class="shopping-content__company-item">\n                                <a href="').concat(_,'" class="shopping-content__company-link" target="_blank">\n                                    <img\n                                        class="shopping-content__company-img"\n                                        srcset="').concat(t(s)," 1x, ").concat(t(l),' 2x"\n                                        src="').concat(t(s),'"\n                                        alt="Amazon"\n                                        width="32"\n                                        height="11"\n                                        loading="lazy"\n                                    />\n                                </a>\n                            </li>\n                            <li class="shopping-content__company-item">\n                                <a href="').concat(g,'" class="shopping-content__company-link" target="_blank">\n                                    <img\n                                        class="shopping-content__company-img"\n                                        srcset="').concat(t(p)," 1x, ").concat(t(u),' 2x"\n                                        src="').concat(t(p),'"\n                                        alt="Apple books"\n                                        width="16"\n                                        height="16"\n                                        loading="lazy"\n                                    />\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </li>')})).join(""),_.innerHTML=n}H(),b.addEventListener("click",(function(n){return g(n,m)}))}();
//# sourceMappingURL=shopping-list.942ea42b.js.map