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

const quantityElem = 15;
let currentPage;
let currentQuery;

function handlerSubmit(evt) {
  elem.loader.classList.replace('hidden', 'loader');
  evt.preventDefault();

  const query = evt.target.elements.query.value.trim();
  currentPage = 1;

  if (query === '') {
    iziToast.show({
      message: 'Please, fill in the request field!',
      backgroundColor: '#EF4040',
      messageColor: '#FAFAFB',
      position: 'topCenter',
    });
    elem.loader.classList.replace('loader', 'hidden');
    return;
  }

  elem.list.innerHTML = '';

  getImages(currentPage, quantityElem, query).then(data => {
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

    if (images.length < quantityElem) {
      elem.loadMoreBtn.classList.replace('load-more', 'hidden');
      return;
    }

    elem.loadMoreBtn.classList.replace('hidden', 'load-more');
    gallery.refresh();

    currentQuery = query;
  });

  evt.currentTarget.reset();
}

elem.loadMoreBtn.addEventListener('click', handlerLoadMore);

function handlerLoadMore() {
  elem.loaderLoadMore.classList.replace('hidden', 'loader-load-more');

  currentPage += 1;

  getImages(currentPage, quantityElem, currentQuery).then(data => {
    const images = data.hits;

    elem.list.insertAdjacentHTML('beforeend', createMarkup(images));

    gallery.refresh();

    const hightItem = Math.round(
      elem.list.children[0].getBoundingClientRect().height
    );

    window.scrollBy({
      top: hightItem * 2,
      behavior: 'smooth',
    });

    if (elem.list.childElementCount >= data.totalHits) {
      elem.loadMoreBtn.classList.replace('load-more', 'hidden');
      iziToast.show({
        message: `We're sorry, but you've reached the end of search results.`,
        backgroundColor: '#EF4040',
        messageColor: '#FAFAFB',
        position: 'bottomCenter',
      });
    }
  });
}
