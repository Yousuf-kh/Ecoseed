import { Box, Center, Container, Text } from '@chakra-ui/react';

const Footer = () => {
	return (
		<Box w={'full'} py={4} borderTop={'1px solid #ccc'}>
			<Container maxW={'container.xl'}>
				<Center>
					<Text>yousuff.ac | 2023</Text>
				</Center>
			</Container>
		</Box>
	);
};

export default Footer;
