import React from 'react';
import {
  Box, Container, Flex, Heading, useColorModeValue, Link,
} from '@chakra-ui/react';
// import { Link as WLink } from 'wouter';
import Cart from './CartComponent';

export default function Navbar() {
  return (
    <Box boxShadow="base" bg={useColorModeValue('gray.50', 'gray.900')} position="static">
      <Container maxW="5xl">
        <Flex h={16} justifyContent="space-between" alignItems="center">

          <Link href="/" color="darkblue" _hover={{ color: 'blue.500', textDecoration: 'none' }}>
            <Box><Heading size="sm" fontWeight="medium">RSTech</Heading></Box>
          </Link>
          <Heading size="sm" fontWeight="medium">CartTotal: _</Heading>
          <Link href="/cart" _hover={{ textDecoration: 'none' }}>
            <Cart />
          </Link>

        </Flex>
      </Container>
    </Box>
  );
}
