import{a as f,S as h,i as y}from"./assets/vendor-b42c18af.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const g={input:document.querySelector(".input-js"),loader:document.querySelector(".js-loader")};async function c(o,r){try{const s=new URLSearchParams({page:o,per_page:15,key:"42470360-53d39d66a700555aa13e5c54c",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return(await f.get(`https://pixabay.com/api/?${s}`)).data}catch{alert("Error while fetching images from pixabay!")}finally{g.loader.remove()}}function u(o){return o.map(({webformatURL:r,largeImageURL:s,tags:a,likes:e,views:t,comments:l,downloads:p})=>`<li class="gallery-item">
          <a href="${s}" class="gallery-link">
          <div class="thumb">
          <img src="${r}" alt="${a}" class="gallery-image" width="360"/>
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
              <p class="quantity">${l}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Downloads</h2>
              <p class="quantity">${p}</p>
            </li>
          </ul>
          </a>  
        </li>`).join("")}const n={form:document.querySelector(".form-js"),list:document.querySelector(".gallery-js"),loader:document.querySelector(".js-loader"),loadMoreBtn:document.querySelector(".js-load-more"),loaderLoadMore:document.querySelector(".js-loader-load-more")};n.form.addEventListener("submit",L);const d=new h(".gallery a",{captionsData:"alt",captionDelay:250});let i,m;function L(o){n.loader.classList.remove("hidden"),o.preventDefault();const r=o.target.elements.query.value;n.list.innerHTML="",c(i,r).then(s=>{const a=s.hits;if(a.length===0){y.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"bottomCenter"});return}n.list.insertAdjacentHTML("beforeend",u(a)),n.loadMoreBtn.classList.replace("load-more-hidden","load-more"),d.refresh(),m=r,i=1}),o.currentTarget.reset()}n.loadMoreBtn.addEventListener("click",q);function q(){i+=1,console.log(i),c(i,m).then(o=>{const r=o.hits;n.list.insertAdjacentHTML("beforeend",u(r)),d.refresh(),console.log(o.totalHits)}),n.loader.remove()}
//# sourceMappingURL=commonHelpers.js.map
