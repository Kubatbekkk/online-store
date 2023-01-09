import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import type { Product } from 'src/Types/ProductType';

export default function ProductTitle(product: Product) {
  return (
    <Box w='100%' border='1px' borderColor='gray.200' textAlign={'center'}>
      <Heading py={2} as='h1' size='xl'>
        {product.title}
      </Heading>
    </Box>
  );
}
