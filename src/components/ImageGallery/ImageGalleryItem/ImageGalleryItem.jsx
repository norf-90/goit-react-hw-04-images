import React, { useState } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import Modal from 'components/Modal/Modal';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ renderData, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { webformatURL, largeImageURL } = renderData;

  const toggleModal = () => setIsModalOpen(prevValue => !prevValue);

  return (
    <Item>
      <Image src={webformatURL} alt={title} onClick={toggleModal} />
      {isModalOpen && (
        <Modal toggleModal={toggleModal}>
          <img src={largeImageURL} alt={title} />
        </Modal>
      )}
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  renderData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,

  title: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
