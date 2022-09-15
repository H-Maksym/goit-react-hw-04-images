import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
  border-radius: 15px;
`;

export const StyledFilterInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const StyledFilterLabel = styled.label`
  /* position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${p => p.theme.colors.form.formText};
  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.form};
  text-transform: ${p => p.theme.textTransform.cap};
  font-weight: ${p => p.theme.fontWeights.medium}; */
`;
/* export const StyledSearchButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`; */

export const StyledSearchButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  color: orange;

  background-color: initial;
  /* background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg'); */
  /* background-size: 40%; */
  /* background-repeat: no-repeat; */
  /* background-position: center; */
  /* opacity: 0.6; */
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    color: #2ee59d;
    /* background-color: #2ee59d; */
    /* opacity: 1; */
  }
`;
