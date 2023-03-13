export const fetchImages = (value, page, abortController) => {
  const API_KEY = '32728432-4d3846f56f533eef252fc55ae';

  if (abortController.current) {
    abortController.current.abort();
  }

  abortController.current = new AbortController();
  const baseUrl = `https://pixabay.com/api/?q=${value}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(baseUrl, { signal: abortController.current.signal });
};
