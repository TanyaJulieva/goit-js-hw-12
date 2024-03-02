import axios from 'axios';

const elem = {
  loader: document.querySelector('.js-loader'),
  loaderLoadMore: document.querySelector('.js-loader-load-more'),
};

async function getImages(page, quantity, query) {
  try {
    const searchParams = new URLSearchParams({
      page: page,
      per_page: quantity,
      key: '42470360-53d39d66a700555aa13e5c54c',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });

    const response = await axios.get(
      `https://pixabay.com/api/?${searchParams}`
    );
    return response.data;
  } catch (error) {
    alert('Error while fetching images from pixabay!');
  } finally {
    elem.loader.classList.replace('loader', 'hidden');
    elem.loaderLoadMore.classList.replace('loader-load-more', 'hidden');
  }
}

export { getImages };
