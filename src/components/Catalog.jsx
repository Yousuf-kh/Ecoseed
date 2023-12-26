import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Box,
	Container,
	Grid,
	Button,
} from '@chakra-ui/react';
import Card from './Card';
import { Link } from 'react-router-dom';
import { gardens } from '../helper';

const Catalog = () => {
	return (
		<Box w={'full'} py={2}>
			<Container maxW={'container.xl'}>
				<Tabs color={'green'}>
					<TabList color={'green'}>
						<Tab color={'green'}>Category First</Tab>
						<Tab color={'green'}>Category Second</Tab>
					</TabList>

					<TabPanels>
						<TabPanel>
							<Grid
								gridTemplateColumns={{
									md: 'repeat(3,1fr)',
									base: 'repeat(1,1fr)',
								}}
								gap={5}
							>
								{gardens
									.reverse()
									.slice(0, 3)
									.map((c, i) => (
										<Link key={i} to={'/product'}>
											<Card
												img={c.img}
												segment={c.segment}
												ProductName={c.name}
											/>
										</Link>
									))}
							</Grid>
						</TabPanel>
						<TabPanel>
							<Grid
								gridTemplateColumns={{
									md: 'repeat(3,1fr)',
									base: 'repeat(1,1fr)',
								}}
								gap={5}
							>
								{gardens
									.reverse()
									.slice(0, 4)
									.map((c, i) => (
										<Link key={i} to={'/product'}>
											<Card
												img={c.img}
												segment={c.segment}
												ProductName={c.name}
											/>
										</Link>
									))}
							</Grid>
						</TabPanel>
					</TabPanels>
				</Tabs>
				<Link to={'/catalog'}>
					<Button bg={'#46A358'} color={'#fff'}>
						More
					</Button>
				</Link>
			</Container>
		</Box>
	);
};

export default Catalog;
