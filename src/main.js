import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import { getImages } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

const elem = {
  form: document.querySelector('.form-js'),
  list: document.querySelector('.gallery-js'),
  loader: document.querySelector('.js-loader'),
  loadMoreBtn: document.querySelector('.js-load-more'),
  loaderLoadMore: document.querySelector('.js-loader-load-more'),
};

elem.form.addEventListener('submit', handlerSubmit);

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let currentPage;
let currentQuery;

function handlerSubmit(evt) {
  elem.loader.classList.remove('hidden');
  evt.preventDefault();

  const query = evt.target.elements.query.value;

  elem.list.innerHTML = '';

  getImages(currentPage, query).then(data => {
    const images = data.hits;

    if (images.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
        position: 'bottomCenter',
      });
      return;
    }

    elem.list.insertAdjacentHTML('beforeend', createMarkup(images));

    elem.loadMoreBtn.classList.replace('load-more-hidden', 'load-more');
    gallery.refresh();

    currentQuery = query;
    currentPage = 1;
  });

  evt.currentTarget.reset();
  
}

elem.loadMoreBtn.addEventListener('click', handlerLoadMore);

function handlerLoadMore() {
  // elem.loaderLoadMore.classList.remove('hidden');
  currentPage += 1;
  

  console.log(currentPage);

  getImages(currentPage, currentQuery).then(data => {
    const images = data.hits;

    elem.list.insertAdjacentHTML('beforeend', createMarkup(images));

    gallery.refresh();

    console.log(data.totalHits);

    // if(data.totalHits >= 500) {
    //   elem.loadMoreBtn.classList.replace('load-more', 'hidden')
    // }
  })
  elem.loader.remove()

}
