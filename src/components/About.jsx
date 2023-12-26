import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';

const About = () => {
	return (
		<Box id='#about' w={'full'} py={5}>
			<Container maxW={'container.xl'}>
				<Flex
					justify={'space-between'}
					flexDir={{ md: 'row', base: 'column' }}
					align={'center'}
				>
					<Box w={{ md: '50%', base: '100%' }}>
						<Heading py={5} color={'#46A358'}>
							About our company
						</Heading>

						<Text>
							Syngenta is a leading science-based agtech company. We
							help millions of farmers around the world to grow safe
							and nutritious food, while taking care of the planet.
						</Text>
						<br />
						<Text>
							Syngenta is a global company with headquarters in
							Uzbekistan. 30,000 employees, in more than 90 countries
							are working to transform how crops are grown and
							protected.
						</Text>
					</Box>
					<Image
						src='/logo.jpg'
						py={5}
						w={{ md: '45%', base: '100%' }}
					/>
				</Flex>
			</Container>
		</Box>
	);
};

export default About;
