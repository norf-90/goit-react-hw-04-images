import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ImgContainer } from './Modal.styled';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEsc);
  }

  onEsc = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };

  onCloseModal = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.onCloseModal}>
        <ImgContainer>{this.props.children}</ImgContainer>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
