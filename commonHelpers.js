import{a as y,S as L,i as c}from"./assets/vendor-b42c18af.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const u={loader:document.querySelector(".js-loader"),loaderLoadMore:document.querySelector(".js-loader-load-more")};async function m(a,r,l){try{const s=new URLSearchParams({page:a,per_page:r,key:"42470360-53d39d66a700555aa13e5c54c",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await y.get(`https://pixabay.com/api/?${s}`)).data}catch{alert("Error while fetching images from pixabay!")}finally{u.loader.classList.replace("loader","hidden"),u.loaderLoadMore.classList.replace("loader-load-more","hidden")}}function h(a){return a.map(({webformatURL:r,largeImageURL:l,tags:s,likes:e,views:t,comments:i,downloads:g})=>`<li class="gallery-item">
          <a href="${l}" class="gallery-link">
          <div class="thumb">
          <img src="${r}" alt="${s}" class="gallery-image" width="360"/>
          </div>
          <ul class="actions">
            <li class="action">
              <h2 class="actions-name">Likes</h2>
              <p class="quantity">${e}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Views</h2>
              <p class="quantity">${t}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Comments</h2>
              <p class="quantity">${i}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Downloads</h2>
              <p class="quantity">${g}</p>
            </li>
          </ul>
          </a>  
        </li>`).join("")}const o={form:document.querySelector(".form-js"),list:document.querySelector(".gallery-js"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more"),loaderLoadMore:document.querySelector(".js-loader-load-more")};o.form.addEventListener("submit",b);const p=new L(".gallery a",{captionsData:"alt",captionDelay:250}),d=15;let n,f;function b(a){o.loader.classList.replace("hidden","loader"),a.preventDefault();const r=a.target.elements.query.value.trim();if(n=1,r===""){c.show({message:"Please, fill in the request field!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"topCenter"}),o.loader.classList.replace("loader","hidden");return}o.list.innerHTML="",m(n,d,r).then(l=>{const s=l.hits;if(s.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"bottomCenter"});return}if(o.list.insertAdjacentHTML("beforeend",h(s)),s.length<d){o.loadMoreBtn.classList.replace("load-more","hidden");return}o.loadMoreBtn.classList.replace("hidden","load-more"),p.refresh(),f=r}),a.currentTarget.reset()}o.loadMoreBtn.addEventListener("click",q);function q(){o.loaderLoadMore.classList.replace("hidden","loader-load-more"),n+=1,m(n,d,f).then(a=>{const r=a.hits;o.list.insertAdjacentHTML("beforeend",h(r)),p.refresh();const l=Math.round(o.list.children[0].getBoundingClientRect().height);window.scrollBy({top:l*2,behavior:"smooth"}),o.list.childElementCount>=a.totalHits&&(o.loadMoreBtn.classList.replace("load-more","hidden"),c.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"bottomCenter"}))})}
//# sourceMappingURL=commonHelpers.js.map
