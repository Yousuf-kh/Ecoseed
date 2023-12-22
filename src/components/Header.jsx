import {
	Box,
	Container,
	Flex,
	Image,
	Text,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
} from '@chakra-ui/react';
import { IoLanguageSharp } from 'react-icons/io5';

const Header = () => {
	const navs = [
		{
			name: 'Home',
			path: '/home',
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
		<Box w={'full'} h={'10vh'}>
			<Container maxW={'container.xl'} bgColor={'#fff'}>
				<Flex align={'center'} justify={'space-between'}>
					<Image src='/logo.png' w={'120px'} />

					<Flex display={{ md: 'flex', base: 'none' }} gap={7}>
						{navs.map((c, i) => (
							<Text cursor={'pointer'} key={i}>
								{c.name}
							</Text>
						))}
					</Flex>

					<Menu>
						<MenuButton
							p={2}
							bg={'#46A358'}
							color={'#fff'}
							borderRadius={'10px'}
						>
							<IoLanguageSharp fontSize={'20px'} />
						</MenuButton>
						<MenuList>
							<MenuItem minH='48px'>
								<Image
									boxSize='2rem'
									borderRadius='full'
									src='https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png'
									alt='Fluffybuns the destroyer'
									mr='12px'
								/>
								<Text>Russian</Text>
							</MenuItem>
							<MenuItem minH='40px'>
								<Image
									boxSize='2rem'
									borderRadius='full'
									src='https://upload.wikimedia.org/wikipedia/commons/4/42/Flag_of_the_United_Kingdom.png'
									alt='Simon the pensive'
									mr='12px'
								/>
								<Text>English</Text>
							</MenuItem>
							<MenuItem minH='40px'>
								<Image
									boxSize='2rem'
									borderRadius='full'
									src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Flag_of_Uzbekistan.png/1200px-Flag_of_Uzbekistan.png'
									alt='Simon the pensive'
									mr='12px'
								/>
								<Text>Uzbek</Text>
							</MenuItem>
						</MenuList>
					</Menu>
				</Flex>
			</Container>
		</Box>
	);
};

export default Header;
