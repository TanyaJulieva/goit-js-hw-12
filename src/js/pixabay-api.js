const elem = {
  input: document.querySelector('.input-js'),
  loader: document.querySelector('.js-loader'),
};

async function getImages() {
  try {
    const key = '42470360-53d39d66a700555aa13e5c54c';
    const baseUrl = 'https://pixabay.com/api/';
    const query = elem.input.value;
    const link = `${baseUrl}?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;

    const response = await fetch(link);

    if (!response.ok) {
      throw new Error('Image error!');
    }

    const data = await response.json();

    return data;
  } catch (error) {
    alert('Error while fetching images from pixabay!');
  } finally {
    elem.loader.remove();
  }
}

export { getImages };
