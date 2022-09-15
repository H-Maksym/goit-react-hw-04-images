import React from 'react';
import PropTypes from 'prop-types';
import { StyledSearchBar } from './Searchbar.styled';

export default function SearchBar({ children }) {
  return <StyledSearchBar>{children}</StyledSearchBar>;
}

SearchBar.propTypes = {
  children: PropTypes.node,
};
