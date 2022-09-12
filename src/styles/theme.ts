import { DefaultTheme } from 'styled-components';
import { colors } from './colors';

export const light: Theme = {
	background: colors.white,
	text: colors.black,
	textBrown: colors.brown,
};

export const dark: Theme = {
	background: '#333333',
	text: '#FEFEFE',
	textBrown: '#DEDEDE',
};

export interface Theme extends DefaultTheme {
	background: string;
	text: string;
	textBrown: string;
}

export interface BaseComponent {
	theme: Theme;
}
