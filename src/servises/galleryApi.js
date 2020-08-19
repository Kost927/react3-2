import axios from 'axios';

const fetchGalleryWithQuery = (searchQuery, page) => {
  const apiKey = '17518041-b69c9768f70601e4a7571331a';
  return axios
    .get(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${apiKey}`,
    )
    .then(response => response.data.hits);
};

export default {
  fetchGalleryWithQuery,
};
