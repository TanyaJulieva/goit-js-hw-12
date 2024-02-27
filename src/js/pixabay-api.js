const elem = {
    input: document.querySelector('.input-js'),
    loader: document.querySelector('.js-loader'),
  };
  
  function getImages() {
    const key = '42470360-53d39d66a700555aa13e5c54c';
    const baseUrl = 'https://pixabay.com/api/';
    const query = elem.input.value;
    const link = `${baseUrl}?key=${key}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`;
  
    return fetch(link)
      .then(response => {
        if (!response.ok) {
          throw new Error('Image error!');
        }
        return response.json();
      })
  
      .catch(error => {
        alert('Error while fetching images from pixabay!');
      })
      .finally(()=> elem.loader.remove())
  }
  
  
  
  export { getImages };