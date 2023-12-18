import { Box, Heading, Image, Text } from '@chakra-ui/react';

const Card = () => {
	return (
		<Box
			borderRadius={'10px'}
			overflow={'hidden'}
			transition={'.4s ease'}
			_hover={{
				transform: 'scale(1.1)',
				boxShadow: '-13px 12px 8px 0px rgba(34, 60, 80, 0.2)',
			}}
		>
			<Image
				src={
					'https://media.istockphoto.com/id/482367571/photo/planting.jpg?s=612x612&w=0&k=20&c=eZWuEvX-4S-VOFFfbnpAv_tF1Q7z1t3osKB31LLZX4s='
				}
				objectFit={'cover'}
			/>
			<Box bgColor={'#2FB95D'} textAlign={'center'} p={3}>
				<Heading color={'#fff'} fontSize={'30px'}>
					Name Product
				</Heading>
				<Text color={'#043A3A'} fontWeight={'600'} fontSize={'16px'}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Vel, beatae. Nulla aperiam sequi ipsa quibusdam.
				</Text>
			</Box>
		</Box>
	);
};

export default Card;
