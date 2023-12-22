import {
	Tabs,
	TabList,
	TabPanels,
	Tab,
	TabPanel,
	Box,
	Container,
} from '@chakra-ui/react';

const Catalog = () => {
	return (
		<Box w={'full'}>
			<Container maxW={'container.xl'}>
				<Tabs>
					<TabList>
						<Tab>One</Tab>
						<Tab>Two</Tab>
						<Tab>Three</Tab>
					</TabList>

					<TabPanels>
						<TabPanel>
							<p>one!</p>
						</TabPanel>
						<TabPanel>
							<p>two!</p>
						</TabPanel>
						<TabPanel>
							<p>three!</p>
						</TabPanel>
					</TabPanels>
				</Tabs>
			</Container>
		</Box>
	);
};

export default Catalog;
