import type { CSSProperties } from 'react';
import styled from 'styled-components';
import { BaseComponent } from 'styles';

const fontSize = {
	xs: 12,
	sm: 20,
	md: 24,
	lg: 30,
	xl: 40,
};

const fontWeigth = {
	normal: 400,
	medium: 500,
	bold: 600,
};

const textTransform = {
	low: 'lowercase',
	up: 'uppercase',
	cap: 'capitalize',
	un: 'unset',
};

const marginMap = {
	default: '0',
	xs: '8px',
	sm: '12px',
	md: '16px',
	lg: '20px',
	xl: '24px',
};

interface TypographyProps extends BaseComponent {
	hoverable?: boolean;
	transform?: keyof typeof textTransform;
	weigth?: keyof typeof fontWeigth;
	size?: keyof typeof fontSize;
	align?: CSSProperties['textAlign'];
	color?: 'primary' | 'secondary';
	italic?: boolean;
	info?: boolean;
	margin?: keyof typeof marginMap;
	marginTop?: keyof typeof marginMap;
	marginBottom?: keyof typeof marginMap;
	marginLeft?: keyof typeof marginMap;
	marginRight?: keyof typeof marginMap;
	marginVertical?: keyof typeof marginMap;
	marginHorizontal?: keyof typeof marginMap;
	padding?: keyof typeof marginMap;
	paddingTop?: keyof typeof marginMap;
	paddingBottom?: keyof typeof marginMap;
	paddingLeft?: keyof typeof marginMap;
	paddingRight?: keyof typeof marginMap;
	paddingVertical?: keyof typeof marginMap;
	paddingHorizontal?: keyof typeof marginMap;
}

const toRem = (size: number): `${number}rem` => `${size / 16}rem`;

export const Text = styled.span<TypographyProps>`
	font-family: ${({ info }) => (info ? 'Poppins' : 'Sedan')}, serif;
	font-weight: ${({ weigth = 'normal' }) => fontWeigth[weigth]};
	font-size: ${({ size = 'md' }) => toRem(fontSize[size])};
	font-style: ${({ italic }) => (italic ? 'italic' : 'normal')};
	line-height: 1.3;
	color: ${({ theme, color = 'secondary' }) =>
		color === 'primary' ? theme.textBrown : theme.text};
	text-transform: ${({ transform = 'un' }) => textTransform[transform]};
	text-decoration: none;
	text-align: ${({ align = 'initial' }) => align};
	margin-top: ${({ margin = 'default', marginVertical, marginTop }) =>
		marginMap[marginTop ?? marginVertical ?? margin]};
	margin-bottom: ${({ margin = 'default', marginVertical, marginBottom }) =>
		marginMap[marginBottom ?? marginVertical ?? margin]};
	margin-left: ${({ margin = 'default', marginHorizontal, marginLeft }) =>
		marginMap[marginLeft ?? marginHorizontal ?? margin]};
	margin-right: ${({ margin = 'default', marginHorizontal, marginRight }) =>
		marginMap[marginRight ?? marginHorizontal ?? margin]};
	padding: 0;
	padding-top: ${({ padding = 'default', paddingVertical, paddingTop }) =>
		marginMap[paddingTop ?? paddingVertical ?? padding]};
	padding-bottom: ${({ padding = 'default', paddingVertical, paddingBottom }) =>
		marginMap[paddingBottom ?? paddingVertical ?? padding]};
	padding-left: ${({ padding = 'default', paddingHorizontal, paddingLeft }) =>
		marginMap[paddingLeft ?? paddingHorizontal ?? padding]};
	padding-right: ${({ padding = 'default', paddingHorizontal, paddingRight }) =>
		marginMap[paddingRight ?? paddingHorizontal ?? padding]};
	${({ hoverable, theme }) =>
		hoverable
			? `
		cursor: pointer;
		:hover {
			color: ${theme.textBrown};
		}
	`
			: ''}
`;
