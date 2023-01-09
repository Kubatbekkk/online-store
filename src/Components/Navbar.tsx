import React from 'react';
import {
  Box, Container, Flex, Heading, useColorModeValue, Link, Text,
} from '@chakra-ui/react';
import { numFormat } from 'src/utils/numFormat';
import Cart from './CartComponent';

export default function Navbar({ totalItems, totalAmount }: { totalItems: number, totalAmount: number }) {
  return (
    <Box boxShadow="base" bg={useColorModeValue('gray.50', 'gray.900')}>
      <Container maxW="6xl">
        <Flex h={16} justifyContent="space-between" alignItems="center">

          <Link href="/" color="darkblue" _hover={{ color: 'blue.500', textDecoration: 'none' }}>
            <Box><Heading size="sm" fontWeight="medium">RSTech</Heading></Box>
          </Link>
          <Heading size="sm" fontWeight="medium">
            <Text>
              Cart Total:
              {' '}
              {numFormat.format(totalAmount)}
            </Text>
          </Heading>
          <Link href="/cart" _hover={{ textDecoration: 'none' }}>
            <Cart totalItems={totalItems} />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
