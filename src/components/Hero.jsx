import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react';

const Hero = () => {
	return (
		<Box w={'full'} minH={'90vh'} mt={'10vh'} position={'relative'}>
			<Container maxW={'container.xl'}>
				<Flex gap={10} align={'center'} h={'90vh'}>
					<Box
						w={{ md: '45%', base: '100%' }}
						backgroundColor={{ base: '#ffffff7c', md: '' }}
						p={{ md: 0, base: 5 }}
					>
						<Heading
							color={'#043A3A'}
							fontSize={{ md: '76px', base: '50px' }}
							lineHeight={{ md: '76px', base: '50px' }}
							fontFamily={'Bricolage Grotesque'}
							borderRadius={'10px'}
							width={'max-content'}
						>
							Crafting{' '}
							<Box as={'span'} color={'#2FB95D'}>
								Green <br />
							</Box>{' '}
							Masterpieces
						</Heading>
						<Text fontFamily={'Mulish'} py={5}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Vivamus hendrerit suscipit egestas. Nunc eget congue
							ante. Vivamus ut sapien et ex volutpat tincidunt eget at
							felis vivamus hendrerit suscipit egestas consectetur
							adipiscing elit.
						</Text>
						<Flex gap={4}>
							<Button
								borderRadius={'20px'}
								p={'20px 35px'}
								color={'#fff'}
								bgColor={'#2FB95D'}
								_hover={{ bg: '#043A3A' }}
							>
								Get Started
							</Button>
							<Button
								borderRadius={'20px'}
								p={'20px 35px'}
								color={'#fff'}
								bgColor={'#043A3A'}
								_hover={{ bg: '#2FB95D' }}
							>
								Learn More
							</Button>
						</Flex>
					</Box>
					<Box
						minW={{ md: '40%', base: '100%' }}
						h={'90vh'}
						bgImage={'url(/hero1.png)'}
						backgroundSize={'cover'}
						backgroundPosition={'center'}
						position={'absolute'}
						right={'0'}
						zIndex={{ base: '-1' }}
					></Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Hero;
