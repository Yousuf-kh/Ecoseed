import {
	Box,
	Container,
	Flex,
	Heading,
	Input,
	Text,
	Textarea,
} from '@chakra-ui/react';
import { CiLocationOn } from 'react-icons/ci';
import { FaPhone } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
	return (
		<Box w={'full'} py={6}>
			<Container maxW={'container.xl'}>
				<Flex
					align={'center'}
					gap={10}
					flexDir={{ md: 'row', base: 'column' }}
				>
					<Box w={{ md: '50%', base: '100%' }}>
						<Heading>Contact US</Heading>

						<Input my={2} type={'text'} placeholder='Your Name' />
						<Input my={2} type={'number'} placeholder='Your Number' />
						<Textarea my={2} placeholder='Your Message' />
					</Box>

					<Box w={{ md: '50%', base: '100%' }}>
						<Flex align={'center'} gap={4} py={3}>
							<CiLocationOn fontSize={'40px'} />
							<Text>Tashkent ,Uzbekistan</Text>
						</Flex>

						<Flex align={'center'} gap={4} py={3}>
							<FaPhone fontSize={'30px'} />
							<Text>+(22) 123-45-67</Text>
						</Flex>

						<Flex align={'center'} gap={4} py={3}>
							<MdEmail fontSize={'40px'} />
							<Text>qanaqadur@gmail.com</Text>
						</Flex>
					</Box>
				</Flex>
			</Container>
		</Box>
	);
};

export default Contact;
