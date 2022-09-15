import styled from 'styled-components';

export const StyledTitle = styled.h1`
  /* .visually-hidden { */
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
  /* } */

  /* text-align: center;
  color: ${p => p.theme.colors.text.sectionTitle};
  font-size: ${p => p.theme.fontSizes.xxl}; 
  line-height: ${p => p.theme.lineHeights.sectionTitle};
  letter-spacing: ${p => p.theme.letterSpacing.m}; */
`;
