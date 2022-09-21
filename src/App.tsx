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

function navigate(lat: number, lng: number) {
	if (
		navigator.platform.indexOf('iPhone') !== -1 ||
		navigator.platform.indexOf('iPad') !== -1 ||
		navigator.platform.indexOf('iPod') !== -1
	) {
		function iOSversion() {
			if (/iP(hone|od|ad)/.test(navigator.platform)) {
				// supports iOS 2.0 and later
				var v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
				return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
			}
		}
		var ver = iOSversion() || [0];

		var protocol = 'http://';
		if (ver[0] >= 6) {
			protocol = 'maps://';
		}
		window.location =
			protocol + 'maps.apple.com/maps?place=' + lat + ',' + lng + '&amp;ll=';
	} else {
		window.open('http://maps.google.com?place=' + lat + ',' + lng + '&amp;ll=');
	}
}

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
				<Text
					size='xs' // 40,68907° N, 46,38296° E
					// 
					// https://www.google.com/maps/place/%22Gold+Imperial%22+restoranı/@40.6894334,46.3830687,698m/data=!3m1!1e3!4m12!1m6!3m5!1s0x403f517da0c7bbc9:0x86d4aed2be8da797!2zSW1wZXJpYWwgxZ5hZGzEsXEgU2FyYXnEsQ!8m2!3d40.6907473!4d46.3841047!3m4!1s0x0:0xa5ed77983bea13ca!8m2!3d40.6889967!4d46.3828501
					marginTop='md' // /@40.6894334,46.3830687,698m/data=!3m1!1e3!4m12!1m6!3m5!1s0x403f517da0c7bbc9:0x86d4aed2be8da797!2zSW1wZXJpYWwgxZ5hZGzEsXEgU2FyYXnEsQ!8m2!3d40.6907473!4d46.3841047!3m4!1s0x0:0xa5ed77983bea13ca!8m2!3d40.6889967!4d46.3828501
					onClick={() => navigate(40.68907, 46.38296)}
					hoverable
					info
				>
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
