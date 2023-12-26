import { Box, Image, Text } from '@chakra-ui/react';

const Card = ({ ProductName, segment, img }) => {
	return (
		<Box p={4} borderRadius={'20px'}>
			<Image mx={'auto'} src={img} />
			<Text color={'#3D3D3D'}>{ProductName}</Text>
			<Text color={'#46A358'}>{segment}</Text>
		</Box>
	);
};

export default Card;
