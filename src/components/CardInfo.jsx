import { Box, Container, Heading, Text } from '@chakra-ui/react';
import Card from './Card';

const CardInfo = () => {
	return (
		<Box w={'full'} mt={'10vh'}>
			<Container maxW={'container.lg'}>
				<Card />
				<Heading color={'#46A358'}>Name of Tovar</Heading>
				<Text>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Doloribus quo sed dignissimos eum excepturi aliquam omnis
					consequuntur aspernatur nihil beatae?
				</Text>
			</Container>
		</Box>
	);
};

export default CardInfo;
