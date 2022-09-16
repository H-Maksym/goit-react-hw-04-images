import React from 'react';
import PropTypes from 'prop-types';
import { StyledImageGalleryItem, ImageItem } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';
import InnerModal from 'components/InnerModal';
import useToggleModal from 'hooks/toggleModal/';

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal(false);
  return (
    <>
      <StyledImageGalleryItem onClick={openModal}>
        <ImageItem alt="" src={webformatURL} loading="lazy" />
      </StyledImageGalleryItem>

      {isOpen && (
        <Modal
          handleBackdropClick={handleBackdropClick}
          handleKeyDown={handleKeyDown}
          closeModal={closeModal}
        >
          <InnerModal largeImageURL={largeImageURL} />
        </Modal>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  // id: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // number: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func,
};
