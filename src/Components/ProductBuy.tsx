import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import type { Product } from 'src/Types/ProductType';

export default function ProductBuy(product: Product) {
  return (
    <Flex w='20%' alignItems='center' justifyContent='center' textAlign='center'>
      <Box w='90%' fontSize='200%'>
        ${product.price}
        <Button display='block' w='100%' my={5} colorScheme='blue'>
          ADD TO CART
        </Button>
        <Button display='block' w='100%' my={5} colorScheme='blue'>
          BUY NOW
        </Button>
      </Box>
    </Flex>
  );
}
