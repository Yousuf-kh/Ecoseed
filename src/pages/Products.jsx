import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import Card from '../components/Card';

const Products = () => {
	const i = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<Box w={'full'} mt={'12vh'}>
			<Container maxW={'full'}>
				<Heading color={'#46A358'} textAlign={'center'} p={5}>
					All Products
				</Heading>
				<Grid gridTemplateColumns={'repeat(4,1fr)'}>
					{i.map((c, i) => (
						<Card key={i} />
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Products;
