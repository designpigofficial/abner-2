import * as React from 'react';

import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

import Container from '@/components/Container';
import Layout from '@/components/layout';


const ContactPage = () => {
  return (
    <Layout>
      <Container as='main'>
        <VStack
          as='section'
          justify='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={6}
        >
          <Heading as='h1' color='primary' textAlign='center'>
            Contact me here
          </Heading>
          <HStack>
            <FormControl>
              <FormLabel>Name:</FormLabel>
              <Input type='text' />
              <FormHelperText>What should we call you?</FormHelperText>
              <FormLabel>Email:</FormLabel>
              <Input type='email' />
              <FormHelperText>What's your email address?</FormHelperText>
              <FormLabel>Phone:</FormLabel>
              <Input type='phone' />
              <FormHelperText>Care to share your number?</FormHelperText>
            </FormControl>
            <Button
              as='a'
              href='/contact'
              target='_blank'
              rel='noopener noreferrer'
              size='sm'
              colorScheme='green'
            >
              Submit
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Layout>
  );
};

export default ContactPage;
