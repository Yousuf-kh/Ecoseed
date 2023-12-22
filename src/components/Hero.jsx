import {
	Box,
	Button,
	Container,
	Flex,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';

const Hero = () => {
	return (
		<Box w={'full'} minH={{ md: '90vh', base: '' }} mt={2}>
			<Container maxW={'container.xl'}>
				<Flex
					bgColor={{ md: '#fff', base: '#79d5ee6e' }}
					borderRadius={'20px'}
					p={{ md: '', base: 5 }}
					align={'center'}
					minH={{ md: '90vh', base: '' }}
					justify={'space-between'}
				>
					<Box w={'55%'}>
						<Text fontSize={'14px'} color={'#3D3D3D'}>
							Welcome to GreenShop
						</Text>
						<Heading
							fontFamily={'sans-serif'}
							fontWeight={'800'}
							fontSize={{ md: '70px', base: '24px' }}
							color={'#333'}
							textTransform={'uppercase'}
						>
							Let’s Make a <br /> Better{' '}
							<Box as={'span'} color={'#46A358'}>
								Planet
							</Box>
						</Heading>
						<Text
							display={{ md: 'block', base: 'none' }}
							color={'#727272'}
							pt={2}
						>
							We are an online plant shop offering a wide range of
							cheap and trendy plants. Use our plants to create an
							unique Urban Jungle. Order your favorite plants!
						</Text>
						<Button
							bgColor={'#46A358'}
							mt={{ md: 5, base: 2 }}
							color={'#fff'}
						>
							SHOP NOW
						</Button>
					</Box>
					<Box w={'45%'}>
						<Image src={'/hero.png'} />
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Hero;
