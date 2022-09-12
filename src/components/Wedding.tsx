import { Text, Box } from './shared';
import frame from 'assets/images/frame.png';

export const Wedding = () => {
	return (
		<Box.Flex
			place='center'
			width='243px'
			height='97px'
			style={{
				backgroundImage: `url(${frame})`,
			}}
		>
			<Text color='primary' size='xl'>
				Wedding
			</Text>
		</Box.Flex>
	);
};
