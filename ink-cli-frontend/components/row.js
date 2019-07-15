import React from 'react';
import { Text, Color, Box } from 'ink';

const Divider = ({ count, char }) => <Text>{char.repeat(count)}</Text>;

export const Row = ({ cols, styles }) => {
	const [col1, col2] = cols;
	const [color = '#ffffff', bold = false] = styles;
	return (
		<Box width={100} marginLeft={20} flexDirection='column'>
			<Box>
				<Divider count={100} char='-' />
			</Box>
			<Box>
				<Color hex={color}>
					<Box width='10%'>
						<Text bold={bold}>{col1}</Text>
					</Box>
					<Box width='60%'>
						<Text bold={bold}>{col2}</Text>
					</Box>
				</Color>
			</Box>
		</Box>
	);
};
