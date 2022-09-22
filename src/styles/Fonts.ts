import { createGlobalStyle } from 'styled-components';

import SedanRegularTTF from '../assets/fonts/sedan/Sedan-Regular.ttf';
import SedanRegularWOFF from '../assets/fonts/sedan/Sedan-Regular.woff';
import SedanItalicTTF from '../assets/fonts/sedan/Sedan-Italic.ttf';
import SedanItalicWOFF from '../assets/fonts/sedan/Sedan-Italic.woff';

import PoppinsRegularTTF from '../assets/fonts/poppins/Poppins-Regular.ttf';
import PoppinsRegularWOFF from '../assets/fonts/poppins/Poppins-Regular.woff';
import PoppinsItalicTTF from '../assets/fonts/poppins/Poppins-Italic.ttf';
import PoppinsItalicWOFF from '../assets/fonts/poppins/Poppins-Italic.woff';

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Sedan';
  font-style: normal;
  font-weight: normal;
  src: local('Sedan Regular'), url(${SedanRegularWOFF}) format('woff'), url(${SedanRegularTTF}) format('ttf');  
  font-display: swap;
}

@font-face {
  font-family: 'Sedan';
  font-style: italic;
  font-weight: normal;
  src: local('Sedan Italic'), url(${SedanItalicWOFF}) format('woff'), url(${SedanItalicTTF}) format('ttf');
  font-display: swap;
}

@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: normal;
  src: local('Poppins Regular'), url(${PoppinsRegularWOFF}) format('woff'), url(${PoppinsRegularTTF}) format('ttf');
  font-display: swap;
}

@font-face {
  font-family: 'Poppins';
  font-style: italic;
  font-weight: normal;
  src: local('Poppins Italic'), url(${PoppinsItalicWOFF}) format('woff'), url(${PoppinsItalicTTF}) format('ttf');
  font-display: swap;
}
`;
