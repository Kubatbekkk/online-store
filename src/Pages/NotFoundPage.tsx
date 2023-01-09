import { Heading, Flex, Box } from '@chakra-ui/react';

import React from 'react';
import Layout from '../Layout/Layout';

function NotFoundPage() {
  return (
    <Layout>
      <Flex
        minWidth='max-content'
        alignItems='center'
        justifyContent='center'
        minHeight='70vh'
      >
        <Box>
          <Heading className='heading-404' as='h1' size='3xl'>
            Page Not Found! (404)
          </Heading>
        </Box>
      </Flex>
    </Layout>
  );
}

export default NotFoundPage;
