import * as React from 'react';

import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';

import Container from '@/components/Container';
import Layout from '@/components/layout';


const AboutPage = () => {
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
            About us
          </Heading>
          <HStack>
            <Button
              as='a'
              href='https://github.com/designpigofficial'
              target='_blank'
              rel='noopener noreferrer'
              size='sm'
              colorScheme='green'
            >
              Github
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Layout>
  );
};

export default AboutPage;
