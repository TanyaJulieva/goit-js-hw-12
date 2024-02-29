import axios from 'axios';

const elem = {
  input: document.querySelector('.input-js'),
  loader: document.querySelector('.js-loader'),
};

async function getImages(currentPage, query) {
  try {
    const searchParams = new URLSearchParams({
      page: currentPage,
      per_page: 15,
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
    elem.loader.remove();
  }
}

export { getImages };
