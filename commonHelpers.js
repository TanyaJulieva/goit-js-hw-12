import{a as g,S as y,i as c}from"./assets/vendor-b42c18af.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const d={loader:document.querySelector(".js-loader"),loaderLoadMore:document.querySelector(".js-loader-load-more")};async function u(a,r){try{const s=new URLSearchParams({page:a,per_page:15,key:"42470360-53d39d66a700555aa13e5c54c",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await g.get(`https://pixabay.com/api/?${s}`)).data}catch{alert("Error while fetching images from pixabay!")}finally{d.loader.classList.replace("loader","hidden"),d.loaderLoadMore.classList.replace("loader-load-more","hidden")}}function m(a){return a.map(({webformatURL:r,largeImageURL:s,tags:l,likes:e,views:t,comments:i,downloads:f})=>`<li class="gallery-item">
          <a href="${s}" class="gallery-link">
          <div class="thumb">
          <img src="${r}" alt="${l}" class="gallery-image" width="360"/>
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
              <p class="quantity">${f}</p>
            </li>
          </ul>
          </a>  
        </li>`).join("")}const o={form:document.querySelector(".form-js"),list:document.querySelector(".gallery-js"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more"),loaderLoadMore:document.querySelector(".js-loader-load-more")};o.form.addEventListener("submit",L);const h=new y(".gallery a",{captionsData:"alt",captionDelay:250});let n,p;function L(a){o.loader.classList.replace("hidden","loader"),a.preventDefault();const r=a.target.elements.query.value.trim();if(r===""){c.show({message:"Please, fill in the request field!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"topCenter"}),o.loader.classList.replace("loader","hidden");return}o.list.innerHTML="",u(n,r).then(s=>{const l=s.hits;if(l.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"bottomCenter"});return}o.list.insertAdjacentHTML("beforeend",m(l)),o.loadMoreBtn.classList.replace("hidden","load-more"),h.refresh(),p=r,n=1}),a.currentTarget.reset()}o.loadMoreBtn.addEventListener("click",b);function b(){o.loaderLoadMore.classList.replace("hidden","loader-load-more"),n+=1,u(n,p).then(a=>{const r=a.hits;o.list.insertAdjacentHTML("beforeend",m(r)),h.refresh();const s=Math.round(o.list.children[0].getBoundingClientRect().height);window.scrollBy({top:s*2,behavior:"smooth"}),o.list.childElementCount>=a.totalHits&&(o.loadMoreBtn.classList.replace("load-more","hidden"),c.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"bottomCenter"}))})}
//# sourceMappingURL=commonHelpers.js.map
