import{a as f,S as y,i as c}from"./assets/vendor-b42c18af.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const g={input:document.querySelector(".input-js"),loader:document.querySelector(".js-loader")};async function d(s,o){try{const a=new URLSearchParams({page:s,per_page:15,key:"42470360-53d39d66a700555aa13e5c54c",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await f.get(`https://pixabay.com/api/?${a}`)).data}catch{alert("Error while fetching images from pixabay!")}finally{g.loader.remove()}}function u(s){return s.map(({webformatURL:o,largeImageURL:a,tags:n,likes:e,views:t,comments:i,downloads:p})=>`<li class="gallery-item">
          <a href="${a}" class="gallery-link">
          <div class="thumb">
          <img src="${o}" alt="${n}" class="gallery-image" width="360"/>
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
              <p class="quantity">${p}</p>
            </li>
          </ul>
          </a>  
        </li>`).join("")}const r={form:document.querySelector(".form-js"),list:document.querySelector(".gallery-js"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more"),loaderLoadMore:document.querySelector(".js-loader-load-more")};r.form.addEventListener("submit",L);const m=new y(".gallery a",{captionsData:"alt",captionDelay:250});let l,h;function L(s){r.loader.classList.remove("hidden"),s.preventDefault();const o=s.target.elements.query.value;r.list.innerHTML="",d(l,o).then(a=>{const n=a.hits;if(n.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"bottomCenter"});return}r.list.insertAdjacentHTML("beforeend",u(n)),r.loadMoreBtn.classList.replace("load-more-hidden","load-more"),m.refresh(),h=o,l=1}),s.currentTarget.reset()}r.loadMoreBtn.addEventListener("click",b);function b(){r.loaderLoadMore.classList.remove("hidden"),l+=1,d(l,h).then(s=>{const o=s.hits;r.list.insertAdjacentHTML("beforeend",u(o)),console.dir(r.list.children[0]),m.refresh();const a=Math.round(r.list.children[0].getBoundingClientRect().height);window.scrollBy(0,a*2),r.list.childElementCount>=s.totalHits&&(r.loadMoreBtn.classList.replace("load-more","hidden"),c.show({message:"We're sorry, but you've reached the end of search results.",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"bottomCenter"}))}),r.loader.remove()}
//# sourceMappingURL=commonHelpers.js.map
