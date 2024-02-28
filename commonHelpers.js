import{S as u,i as d}from"./assets/vendor-7659544d.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const l={input:document.querySelector(".input-js"),loader:document.querySelector(".js-loader")};async function m(){try{const s="42470360-53d39d66a700555aa13e5c54c",r="https://pixabay.com/api/",o=l.input.value,a=`${r}?key=${s}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`,e=await fetch(a);if(!e.ok)throw new Error("Image error!");return await e.json()}catch{alert("Error while fetching images from pixabay!")}finally{l.loader.remove()}}function f(s){return s.map(({webformatURL:r,largeImageURL:o,tags:a,likes:e,views:t,comments:n,downloads:c})=>`<li class="gallery-item">
          <a href="${o}" class="gallery-link">
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
              <p class="quantity">${n}</p>
            </li>
            <li class="action">
              <h2 class="actions-name">Downloads</h2>
              <p class="quantity">${c}</p>
            </li>
          </ul>
          </a>  
        </li>`).join("")}const i={input:document.querySelector(".input-js"),form:document.querySelector(".form-js"),list:document.querySelector(".gallery-js"),loader:document.querySelector(".js-loader")};i.loader.classList.add("hidden");i.form.addEventListener("submit",y);const p=new u(".gallery a",{captionsData:"alt",captionDelay:250});function y(s){i.loader.classList.remove("hidden"),s.preventDefault(),i.list.childElementCount>0&&(i.list.innerHTML=""),m().then(r=>{const o=r.hits;if(o.length===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#FAFAFB",position:"bottomCenter"});return}i.list.innerHTML=f(o),p.refresh()}),s.currentTarget.reset()}
//# sourceMappingURL=commonHelpers.js.map
