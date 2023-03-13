import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ImgContainer } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    const onEsc = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };

    window.addEventListener('keydown', onEsc);

    return () => {
      window.removeEventListener('keydown', onEsc);
    };
  }, [toggleModal]);

  const onCloseModal = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };

  return createPortal(
    <Overlay onClick={onCloseModal}>
      <ImgContainer>{children}</ImgContainer>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
