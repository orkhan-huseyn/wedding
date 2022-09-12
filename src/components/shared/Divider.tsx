import styled from 'styled-components';
import { colors } from 'styles';

interface DividerProps {
	height?: `${number}px`;
	color?: keyof typeof colors;
}

export const Divider = styled.div<DividerProps>`
	height: ${({ height = '0px' }) => height};
	background-color: ${({ color }) =>
		colors[color as keyof typeof colors] ?? 'transparent'};
`;
