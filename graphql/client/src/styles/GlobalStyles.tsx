import { createGlobalStyle } from 'styled-components';
import reset from './reset';

export const GlobalStyle = createGlobalStyle`
  * {
    ${reset};
    font-size:62.5%;
    font-family: 'Roboto', sans-serif;
  }
`;
