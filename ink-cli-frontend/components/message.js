import React from 'react';
import { Box, Color, Text } from 'ink';

export const Message = ({ msg }) => (
	<Box marginLeft={5} marginY={1}>
		<Text>
			<Color green>{msg}</Color>
		</Text>
	</Box>
);
