import React from 'react';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import { List } from './ImageGallery.styled';
import PropTypes from 'prop-types';

const ImageGallery = ({ searchName, images }) => {
  return (
    <List>
      {images.map(image => {
        const { id, webformatURL, largeImageURL } = image;
        const renderData = { id, webformatURL, largeImageURL };
        return (
          <ImageGalleryItem
            key={id}
            renderData={renderData}
            title={`${searchName} picture`}
          />
        );
      })}
    </List>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,

  searchName: PropTypes.string.isRequired,
};

export default ImageGallery;
