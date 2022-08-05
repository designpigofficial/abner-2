import * as React from 'react';

import {
  Button,
  Box,
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react';
import Card from '../components/Card'

import Container from '@/components/Container';
import Layout from '@/components/layout';


const ProjectsPage = () => {
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
            Our Work
          </Heading>
          <Box>
            <Card />
            <Card />
            <Card />
            <Card />
          </Box>
          <HStack>
            <Button
              as='a'
              href='/contact'
              target='_blank'
              rel='noopener noreferrer'
              size='sm'
              colorScheme='green'
            >
              Hire Me
            </Button>
          </HStack>
        </VStack>
      </Container>
    </Layout>
  );
};

export default ProjectsPage;
