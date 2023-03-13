import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  GlobalStyles,
  Searchbar,
  Loader,
  ImageGallery,
  LoadMoreButton,
  ErrorMessage,
  fetchImages,
} from './index';

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [status, setStatus] = useState('idle');
  const [totalHits, setTotalHits] = useState(0);
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const abortController = useRef();

  useEffect(() => {
    if (searchName === '') return;
    setStatus('pending');
    fetchImages(searchName, page, abortController)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        const { hits, totalHits } = data;
        if (totalHits === 0) throw new Error('Nothing found');
        setStatus('resolved');
        setTotalHits(totalHits);
        setImages(prevImages => (page > 1 ? [...prevImages, ...hits] : hits));
      })
      .catch(() => {
        setStatus('rejected');
      });
  }, [page, searchName]);

  const renderData = useMemo(() => {
    if (status === 'resolved') {
      return images.map(({ id, webformatURL, largeImageURL }) => ({
        id,
        webformatURL,
        largeImageURL,
      }));
    }
  }, [images, status]);

  const handleSubmit = searchName => {
    setSearchName(searchName);
    setPage(1);
  };

  const increasePage = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <Searchbar onSubmit={handleSubmit} />
      {status === 'pending' && <Loader />}
      {status === 'resolved' && (
        <ImageGallery images={renderData} searchName={searchName} />
      )}
      {totalHits > page * 12 && status === 'resolved' && (
        <LoadMoreButton onClick={increasePage} />
      )}

      {status === 'rejected' && <ErrorMessage />}
      <GlobalStyles />
    </>
  );
};

export default App;
