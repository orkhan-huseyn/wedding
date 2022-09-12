import styled from 'styled-components';
import type { CSSProperties } from 'react';

type Square = {
	width?: `${number}px`;
	minWidth?: `${number}px`;
	maxWidth?: `${number}px`;
	height?: `${number}px`;
	minHeight?: `${number}px`;
	maxHeight?: `${number}px`;
	margin?: CSSProperties['margin'];
	padding?: CSSProperties['padding'];
	fillAvailable?: boolean;
};

type FlexNGrid = {
	justify?: CSSProperties['justifyContent'];
	align?: CSSProperties['alignItems'];
	place?: CSSProperties['placeItems'];
	direction?: CSSProperties['flexDirection'];
	gap?: CSSProperties['gap'];
};

type Grid = {
	columns?: CSSProperties['gridTemplateColumns'];
	rows?: CSSProperties['gridTemplateRows'];
	areas?: CSSProperties['gridTemplateAreas'];
} & FlexNGrid;

type Flex = {} & FlexNGrid;

const BaseBox = styled.div<Square>`
	display: block;
	${({ width }) => (width ? `width: ${width}` : '')};
	${({ minWidth }) => (minWidth ? `min-width: ${minWidth}` : '')};
	${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}` : '')};
	${({ height }) => (height ? `height: ${height}` : '')};
	${({ minHeight }) => (minHeight ? `min-height: ${minHeight}` : '')};
	${({ maxHeight }) => (maxHeight ? `max-height: ${maxHeight}` : '')};
	${({ margin }) => (margin ? `margin: ${margin}` : '')};
	${({ padding }) => (padding ? `padding: ${padding}` : '')};
	${({ fillAvailable }) =>
		fillAvailable
			? `
		height: 100vh;
		height: -moz-available;
		height: -webkit-fill-available;
		height: fill-available;
	`
			: ''}
`;

export const Box = {
	Block: BaseBox,
	Flex: styled(BaseBox)<Flex>`
		display: flex;
		${({ justify }) => (justify ? `justify-content: ${justify}` : '')};
		${({ align }) => `align-items: ${align}`};
		${({ place }) =>
			place ? `justify-content: ${place}; align-items: ${place}` : ''};
		${({ direction }) => (direction ? `flex-direction: ${direction}` : '')};
		${({ gap }) => (gap ? `gap: ${gap}` : '')};
	`,
	Grid: styled(BaseBox)<Grid>`
		display: grid;
		${({ justify }) => (justify ? `justify-content: ${justify}` : '')};
		${({ align }) => `align-items: ${align}`};
		${({ place }) =>
			place ? `justify-content: ${place}; align-items: ${place}` : ''};
		${({ direction }) => (direction ? `flex-direction: ${direction}` : '')};
		${({ columns }) => (columns ? `grid-template-columns: ${columns}` : '')};
		${({ rows }) => (rows ? `grid-template-rows: ${rows}` : '')};
		${({ areas }) => (areas ? `grid-template-areas: ${areas}` : '')};
	`,
};
