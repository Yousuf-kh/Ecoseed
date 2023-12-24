import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Box,
	Container,
	Grid,
} from '@chakra-ui/react';
import Card from './Card';

const Catalog = () => {
	const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	return (
		<Box w={'full'} py={2}>
			<Container maxW={'container.xl'}>
				<Tabs color={'green'}>
					<TabList color={'green'}>
						<Tab color={'green'}>One</Tab>
						<Tab color={'green'}>Two</Tab>
						<Tab color={'green'}>Three</Tab>
					</TabList>

					<TabPanels>
						<TabPanel>
							<Grid
								gridTemplateColumns={{
									md: 'repeat(4,1fr)',
									base: 'repeat(2,1fr)',
								}}
								gap={5}
							>
								{i.map((c, i) => (
									<Card w={''} key={i} />
								))}
							</Grid>
						</TabPanel>
						<TabPanel>
							<Grid
								gridTemplateColumns={{
									md: 'repeat(4,1fr)',
									base: 'repeat(2,1fr)',
								}}
								gap={5}
							>
								<Card />
								<Card />
								<Card />
							</Grid>
						</TabPanel>
						<TabPanel>
							<Grid
								gridTemplateColumns={{
									md: 'repeat(4,1fr)',
									base: 'repeat(2,1fr)',
								}}
								gap={5}
							>
								<Card />
								<Card />
								<Card />
								<Card />
								<Card />
							</Grid>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Container>
		</Box>
	);
};

export default Catalog;
