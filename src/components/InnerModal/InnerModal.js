import React from 'react';
import PropTypes from 'prop-types';
import { IoIosClose } from 'react-icons/io';
import ButtonIcon from 'components/ButtonIcon';
import Box from 'components/Box';

export default function InnerModal({ largeImageURL, toggleModal }) {
  return (
    <>
      <Box position="relative">
        {/* {title && <h3>{title}</h3>} */}
        <img src={largeImageURL} alt="" />
        <Box position="absolute" top="0" right="15px">
          <ButtonIcon
            type="button"
            onClick={toggleModal}
            aria-label="close modal"
          >
            <IoIosClose size="48px" />
          </ButtonIcon>
        </Box>
      </Box>
    </>
  );
}

InnerModal.propTypes = {
  title: PropTypes.string,
  toggleModal: PropTypes.func,
};
