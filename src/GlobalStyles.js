'use client';

import { createGlobalStyle } from 'styled-components';
import { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`

    body {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.45) 100%), #200818;
    backdrop-filter: blur(1px);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
