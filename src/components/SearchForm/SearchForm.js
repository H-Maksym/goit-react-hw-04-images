import React from 'react';
import PropTypes from 'prop-types';
import {
  // StyledFilterLabel,
  StyledFilterInput,
  StyledForm,
  StyledSearchButton,
  // StyledSearchButtonLabel,
} from './SearchForm.styled';
import { BsSearch } from 'react-icons/bs';

// import Box from 'components/Box';

export default function SearchForm({ onClick }) {
  return (
    <StyledForm onSubmit={onClick}>
      <StyledSearchButton type="submit" aria-label="search button">
        <BsSearch size="32px" />
      </StyledSearchButton>

      <StyledFilterInput
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        // value={searchValue}
        // onClick={this.handleValueChange}
      />
    </StyledForm>
  );
}

SearchForm.propTypes = {
  onClick: PropTypes.func,
};
