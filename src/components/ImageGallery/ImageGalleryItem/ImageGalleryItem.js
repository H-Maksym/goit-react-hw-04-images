import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledImageGalleryItem, ImageItem } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';
import InnerModal from 'components/InnerModal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  handleIconClose = e => {
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <StyledImageGalleryItem onClick={this.toggleModal}>
          <ImageItem alt="" src={webformatURL} loading="lazy" />
        </StyledImageGalleryItem>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <InnerModal
              toggleModal={this.toggleModal}
              largeImageURL={largeImageURL}
            />
          </Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  // id: PropTypes.string.isRequired,
  // name: PropTypes.string.isRequired,
  // number: PropTypes.string.isRequired,
  onOpenModal: PropTypes.func,
};
