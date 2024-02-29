import{a as f,S as g,i as d}from"./assets/vendor-b42c18af.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c={input:document.querySelector(".input-js"),loader:document.querySelector(".js-loader"),loaderLoadMore:document.querySelector(".js-loader-load-more")};async function u(a,o){try{const s=new URLSearchParams({page:a,per_page:15,key:"42470360-53d39d66a700555aa13e5c54c",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await f.get(`https://pixabay.com/api/?${s}`)).data}catch{alert("Error while fetching images from pixabay!")}finally{c.loader.classList.replace("loader","hidden"),c.loaderLoadMore.classList.replace("loader-load-more","hidden")}}function m(a){return a.map(({webformatURL:o,largeImageURL:s,tags:l,likes:e,views:r,comments:n,downloads:y})=>`<li class="gallery-item">
          <a href="${s}" class="gallery-link">
          <div class="thumb">
          <img src="${o}" alt="${l}" class="gallery-image" width="360"/>
          </div>
          <ul class="actions">
            <li class="action">
              <h2 class="actions-name">Likes</h2>
              <p class="quantity">${e}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Views</h2>
              <p class="quantity">${r}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Comments</h2>
              <p class="quantity">${n}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Downloads</h2>
              <p class="quantity">${y}</p>
            </li>
          </ul>
          </a>  
        </li>`).join("")}const t={form:document.querySelector(".form-js"),list:document.querySelector(".gallery-js"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more"),loaderLoadMore:document.querySelector(".js-loader-load-more")};t.form.addEventListener("submit",L);const h=new g(".gallery a",{captionsData:"alt",captionDelay:250});let i,p;function L(a){t.loader.classList.replace("hidden","loader"),a.preventDefault();const o=a.target.elements.query.value;t.list.innerHTML="",u(i,o).then(s=>{const l=s.hits;if(l.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"bottomCenter"});return}t.list.insertAdjacentHTML("beforeend",m(l)),t.loadMoreBtn.classList.replace("hidden","load-more"),h.refresh(),p=o,i=1}),a.currentTarget.reset()}t.loadMoreBtn.addEventListener("click",q);function q(){t.loaderLoadMore.classList.replace("hidden","loader-load-more"),i+=1,u(i,p).then(a=>{const o=a.hits;t.list.insertAdjacentHTML("beforeend",m(o)),console.dir(t.list.children[0]),h.refresh();const s=Math.round(t.list.children[0].getBoundingClientRect().height);window.scrollBy(0,s*2),t.list.childElementCount>=a.totalHits&&(t.loadMoreBtn.classList.replace("load-more","hidden"),d.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"bottomCenter"}))}),t.loader.remove()}
//# sourceMappingURL=commonHelpers.js.map
