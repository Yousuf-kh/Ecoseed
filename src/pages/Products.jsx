import { Box, Container, Grid, Heading } from '@chakra-ui/react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import { gardens } from '../helper';

const Products = () => {
	return (
		<Box w={'full'} mt={'12vh'}>
			<Container maxW={'full'}>
				<Heading color={'#46A358'} textAlign={'center'} p={5}>
					All Products
				</Heading>
				<Grid
					gridTemplateColumns={{
						md: 'repeat(4,1fr)',
						base: 'repeat(2,1fr)',
					}}
				>
					{gardens.map((c, i) => (
						<Link key={i} to={'/product'}>
							<Card
								img={c.img}
								segment={c.segment}
								ProductName={c.name}
							/>
						</Link>
					))}
				</Grid>
			</Container>
		</Box>
	);
};

export default Products;
