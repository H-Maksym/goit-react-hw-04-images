import PropTypes from 'prop-types';
import Box from 'components/Box';

export default function InnerModal({ largeImageURL }) {
  return (
    <>
      <Box position="relative">
        {/* {title && <h3>{title}</h3>} */}
        <img src={largeImageURL} alt="" />
      </Box>
    </>
  );
}

InnerModal.propTypes = {
  title: PropTypes.string,
  toggleModal: PropTypes.func,
};
