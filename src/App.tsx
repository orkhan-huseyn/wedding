import { useState, CSSProperties } from 'react';
import { ThemeProvider } from 'styled-components';
import { FontStyles, GlobalStyle, light, dark, Theme, colors } from 'styles';
import { Text, Box, Divider } from 'components';
import topLeft from 'assets/images/top-left.png';
import topRight from 'assets/images/top-right-angel.png';
import bottomRight from 'assets/images/bottom-right.png';
import bottomLeft from 'assets/images/bottom-left.png';
import { ReactComponent as LocationIcon } from 'assets/images/location.svg';
import frame from 'assets/images/frame.png';
import caledar from '/caledar.ics';

const location = 'https://goo.gl/maps/8HYdXvnnn3EFF2ku5';

const frameStyle: CSSProperties = {
	backgroundImage: `url(${frame})`,
};

const containerStyle: CSSProperties = {
	backgroundImage: `url(${topLeft}), url(${topRight}), url(${bottomRight}), url(${bottomLeft})`,
	backgroundSize: '164px 214px, 130px 160px, 164px 214px, 160px 180px',
	// backgroundPosition: '0px 0px, 103% -5px, 105% 103%, 0px 102%',
	backgroundPosition: '-5px 3px, 102% 3px, 105% 103%, 0px 102%',
	backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
	padding: '10px 20px',
	marginTop: '-30px',
};

function App() {
	const [theme, changeTheme] = useState<Theme>(light);

	return (
		<ThemeProvider theme={theme}>
			<FontStyles />
			<GlobalStyle />
			<Box.Flex
				place='center'
				direction='column'
				maxWidth='477px'
				minWidth='450px'
				// minWidth='415px'
				minHeight='680px'
				maxHeight='750px'
				fillAvailable
				style={containerStyle}
			>
				<Text transform='up' marginBottom='lg'>
					You are invited to the
				</Text>

				<Box.Flex place='center' width='243px' height='97px' style={frameStyle}>
					<Text
						color='primary'
						size='xl'
						style={{
							animation: '4s ease 0s infinite alternate none running hearbeat',
						}}
					>
						Wedding
					</Text>
				</Box.Flex>

				<Text transform='up' size='sm'>
					of
				</Text>
				<Text
					transform='up'
					size='lg'
					paddingBottom='lg'
					italic
					style={{
						borderBottom: `1px solid ${colors.brown}`,
					}}
				>
					Aytaj &amp; Aykhan
				</Text>

				<Text
					as='a'
					size='sm'
					weigth='bold'
					align='center'
					marginTop='lg'
					href={caledar}
					hoverable
					download
				>
					1 October, 2022
					<Divider height='6px' />
					At 5 o'clock PM
					<Divider height='6px' />
					Imperial Restaurant
				</Text>
				<Text as='a' href={location} marginTop='md' size='xs' hoverable info>
					<LocationIcon
						aria-labeledby='location'
						style={{
							transform: 'translateY(7px)',
							position: 'relative',
							animation: '1s ease 0s infinite alternate none running bounce',
						}}
					/>{' '}
					Taghi Arani, Ganja city
				</Text>
			</Box.Flex>
		</ThemeProvider>
	);
}

export default App;
