import * as React from 'react';

import {
  Button,
  Box,
  Heading,
  HStack,
  Text,
  VStack,
  FormControl,
  FormLabel,
  Input,
  StackDivider,
  Textarea,
} from '@chakra-ui/react';

import Container from '@/components/Container';
import Layout from '@/components/layout';
import { title } from 'process';

function Feature({ title, desc, ...rest }) {
  return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      <Heading fontSize='xl'>{title}</Heading>
      <Text mt={4}>{desc}</Text>
    </Box>
  )
}


function ContactPage() {
  return (
    <Layout>
      <Container as='main'>
        <VStack
          as='section'
          display='flex'
          justify='center'
          alignItems='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={10}
        >
          <Heading as='h1' color='primary' textAlign='center'>
            Contact me here
          </Heading>
          <HStack>
            <FormControl>
              <FormLabel>Name:</FormLabel>
              <Input type='text' />
              <FormLabel>Email:</FormLabel>
              <Input type='email' />
              <FormLabel>Phone:</FormLabel>
              <Input type='phone' />
              <FormLabel>Message:</FormLabel>
              <Textarea></Textarea>
            </FormControl>
          </HStack>
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
        </VStack>
        <VStack
          divider={<StackDivider borderColor='gray.200' />}
          spacing={4}
          align='stretch'
        >
          <Feature title={"Give us a call at..."} desc={"303.414.9536"}>

          </Feature>
          <Feature title={"Email us at..."} desc={"dedrickgrey2@gmail.com"}>

          </Feature>
          </VStack>
        </Container>
    </Layout>
  );
}

export default ContactPage;
