import {
	Box,
	Container,
	Flex,
	Heading,
	Image,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	Text,
} from '@chakra-ui/react';
import { IoLanguageSharp } from 'react-icons/io5';

const Header = () => {
	const navs = [
		{
			name: 'Home',
			path: '/',
		},
		{
			name: 'Catalog',
			path: '/catalog',
		},
		{
			name: 'About',
			path: '/about',
		},
		{
			name: 'Contact',
			path: '/contact',
		},
	];

	return (
		<Box
			w={'full'}
			h={'10vh'}
			bgColor={'#043A3A'}
			position={'fixed'}
			top={'0'}
			zIndex={'99'}
		>
			<Container maxW={'container.xl'}>
				<Flex justify={'space-between'} align={'center'} h={'10vh'}>
					<Heading fontSize={'30px'} color={'#fff'}>
						EcoSeed
						<Box fontSize={'18px'} as={'span'} color={'#2FB95D'}>
							brand
						</Box>
					</Heading>

					<Flex gap={5} align={'center'}>
						{navs.map((c, i) => (
							<Text cursor={'pointer'} color={'#fff'} key={i}>
								{c.name}
							</Text>
						))}
					</Flex>

					<Menu>
						<MenuButton bg={'#2FB95D'} p={3} borderRadius={'10px'}>
							<IoLanguageSharp color={'#fff'} fontSize={'20px'} />
						</MenuButton>
						<MenuList>
							<MenuItem minH='48px'>
								<Image
									boxSize='2rem'
									borderRadius='full'
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1024px-United-kingdom_flag_icon_round.svg.png'
									alt='Fluffybuns the destroyer'
									mr='12px'
								/>
								<span>English</span>
							</MenuItem>
							<MenuItem minH='40px'>
								<Image
									boxSize='2rem'
									borderRadius='full'
									src='https://cdn-icons-png.flaticon.com/512/323/323300.png'
									alt='Simon the pensive'
									mr='12px'
								/>
								<span>Russian</span>
							</MenuItem>
							<MenuItem minH='40px'>
								<Image
									boxSize='2rem'
									borderRadius='full'
									src='https://cdn-icons-png.flaticon.com/512/197/197416.png'
									alt='Simon the pensive'
									mr='12px'
								/>
								<span>Uzbek</span>
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
