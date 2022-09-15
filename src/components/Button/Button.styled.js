import styled from 'styled-components';

// export const StyledButton = styled.button`
//   padding: ${p => `${p.theme.space[3]}px`};
//   min-width: ${p => `${p.theme.space[7]}px`};
//   text-transform: ${p => p.theme.textTransform.cap};
//   font-size: ${p => p.theme.fontSizes.m};
//   font-weight: ${p => p.theme.fontWeights.semiBold};
//   line-height: ${p => p.theme.lineHeights.form};
//   letter-spacing: ${p => p.theme.letterSpacing.m};
//   color: ${p => p.theme.colors.button.text};
//   background-color: ${p => p.theme.colors.button.primaryBtnBackground};
//   border: ${p => {
//     if (p.type === 'submit') {
//       return p.theme.borders.normal + p.theme.colors.button.btnShadow;
//     } else {
//       return p.theme.borders.none;
//     }
//   }};

//   border-radius: ${p => p.theme.radii.xl};

//   box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
//   transition: all 0.3s ease 0s;
//   outline: ${p => p.theme.borders.none};

//   :hover:not(:disabled) {
//     background-color: ${p => p.theme.colors.button.accentBtnBackground};
//     box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
//     color: ${p => p.theme.colors.white};
//     transform: translateY(${p => ` ${p.theme.space[3] * -1}px`});
//   }
// `;

export const StyledButton = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  background-color: #3f51b5;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 0;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: #303f9f;
  }
`;
