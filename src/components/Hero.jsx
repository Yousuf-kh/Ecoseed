import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

const Hero = () => {
	return (
		<Box w={'full'} h={'90vh'} mt={'10vh'}>
			<Flex gap={10} align={'center'}>
				<Box
					minW={'40%'}
					h={'90vh'}
					bgImage={'url(/hero.png)'}
					backgroundSize={'cover'}
					backgroundPosition={'center'}
				></Box>
				<Box>
					<Heading
						color={'#043A3A'}
						fontSize={'76px'}
						lineHeight={'70px'}
						fontFamily={'Bricolage Grotesque'}
					>
						Crafting{' '}
						<Box as={'span'} color={'#2FB95D'}>
							Green
						</Box>{' '}
						Masterpieces
					</Heading>
					<Text fontFamily={'Mulish'} py={5}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus hendrerit suscipit egestas. Nunc eget congue ante.
						Vivamus ut sapien et ex volutpat tincidunt eget at felis
						vivamus hendrerit suscipit egestas consectetur adipiscing
						elit.
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
			</Flex>
		</Box>
	);
};

export default Hero;
