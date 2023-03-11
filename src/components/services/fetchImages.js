export const fetchImages = (value, page) => {
  const API_KEY = '32728432-4d3846f56f533eef252fc55ae';
  const baseUrl = `https://pixabay.com/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(baseUrl);
};
