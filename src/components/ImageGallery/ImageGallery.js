import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem';
import { StyledImageGallery } from './ImageGallery.styled';

export default function ImageGallery({ images }) {
  return (
    <StyledImageGallery>
      {images.map(({ webformatURL, largeImageURL }, idx) => {
        return (
          <ImageGalleryItem
            key={idx}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        );
      })}
    </StyledImageGallery>
  );
}
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};
