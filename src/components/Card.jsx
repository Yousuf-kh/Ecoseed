import { Box, Image, Text } from '@chakra-ui/react';

const Card = () => {
	return (
		<Box p={4} borderRadius={'20px'}>
			<Image mx={'auto'} src={'/image 1.png'} />
			<Text color={'#3D3D3D'}>Barberton Daisy</Text>
			<Text color={'#46A358'}>$119.00</Text>
		</Box>
	);
};

export default Card;
