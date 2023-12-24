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
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	useDisclosure,
} from '@chakra-ui/react';
import { useState } from 'react';
import { IoLanguageSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

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
			path: '#about',
		},
		{
			name: 'Contact',
			path: '#about',
		},
	];

	const { isOpen, onOpen, onClose } = useDisclosure();
	const [placement, setPlacement] = useState('left');

	return (
		<Box
			w={'full'}
			bg={'#fff'}
			position={'fixed'}
			top={0}
			zIndex={'99'}
			boxShadow={'-1px 14px 20px 0px rgba(0, 0, 0, 0.2)'}
		>
			<Container maxW={'container.xl'} bgColor={'#fff'}>
				<Flex align={'center'} justify={'space-between'}>
					<Box display={{ md: 'block', base: 'none' }}>
						<Link to={'/'}>
							<Image src='/logo.png' w={'120px'} />
						</Link>
					</Box>

					<Box
						display={{ md: 'none', base: 'block' }}
						onClick={onOpen}
						cursor={'pointer'}
					>
						<Link to={'/'}>
							<Image src='/logo.png' w={'100px'} />
						</Link>
					</Box>

					<Drawer
						placement={placement}
						onClose={onClose}
						isOpen={isOpen}
					>
						<DrawerOverlay />
						<DrawerContent>
							<DrawerBody>
								{navs.map((c, i) => (
									<Link to={c.path} cursor={'pointer'} key={i}>
										<Text
											py={5}
											textAlign={'center'}
											bgColor={'gray.100'}
											borderRadius={'10px'}
											my={2}
										>
											{c.name}
										</Text>
									</Link>
								))}
							</DrawerBody>
						</DrawerContent>
					</Drawer>

					<Flex display={{ md: 'flex', base: 'none' }} gap={7}>
						{navs.map((c, i) => (
							<Link to={c.path} cursor={'pointer'} key={i}>
								<Text>{c.name}</Text>
							</Link>
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
