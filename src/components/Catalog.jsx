import {
	Box,
	Button,
	Container,
	Grid,
	Heading,
	Text,
} from '@chakra-ui/react';
import Card from './Card';

const Catalog = () => {
	return (
		<Box w={'full'} py={5} textAlign={'center'}>
			<Container maxW={'container.xl'}>
				<Box marginInline={'auto'} w={'60%'}>
					<Heading
						color={'#2FB95D'}
						textAlign={'center'}
						fontFamily={'Bricolage Grotesque'}
						fontSize={'55px'}
						lineHeight={'55px'}
						pt={5}
					>
						Landscape Design <br />
						<Box color={'#043A3A'} as={'span'}>
							Beyond Expectations
						</Box>
					</Heading>
					<Text
						textAlign={'center'}
						py={5}
						color={'#525252'}
						fontFamily={'Mulish'}
						fontSize={'16px'}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Vivamus hendrerit suscipit egestas. Nunc eget congue ante.
						Vivamus ut sapien et ex volutpat tincidunt eget at felis
						vivamus hendrerit.
					</Text>
				</Box>

				<Grid gridTemplateColumns={'repeat(3,1fr)'} gap={10}>
					<Card />
					<Card />
					<Card />
				</Grid>
				<Button
					mt={5}
					_hover={{ bg: '#2FB95D' }}
					bgColor={'#043A3A'}
					color={'#fff'}
				>
					See More
				</Button>
			</Container>
		</Box>
	);
};

export default Catalog;
