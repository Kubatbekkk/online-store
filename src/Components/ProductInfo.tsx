import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import type { Product } from 'src/Types/ProductType';

export default function ProductInfo(product: Product) {
  return (
    <Box w='40%'>
      <Box
        margin='1% auto'
        border='2px solid lightblue'
        borderRadius='0.25rem'
        overflow='hidden'
        textAlign='center'
      >
        <Heading as='h3' textAlign='center' padding='1%'>Description:</Heading>
        <Text>{product.description}</Text>
      </Box>
      <Box
        margin='1% auto'
        border='2px solid lightblue'
        borderRadius='0.25rem'
        overflow='hidden'
        textAlign='center'
      >
        <Heading as='h3' textAlign='center' padding='1%'>Discount Percentage:</Heading>
        <Text>{product.discountPercentage}</Text>
      </Box>
      <Box
        margin='1% auto'
        border='2px solid lightblue'
        borderRadius='0.25rem'
        overflow='hidden'
        textAlign='center'
      >
        <Heading as='h3' textAlign='center' padding='1%'>Rating:</Heading>
        <Text>{product.rating}</Text>
      </Box>
      <Box
        margin='1% auto'
        border='2px solid lightblue'
        borderRadius='0.25rem'
        overflow='hidden'
        textAlign='center'
      >
        <Heading as='h3' textAlign='center' padding='1%'>Stock:</Heading>
        <Text>{product.stock}</Text>
      </Box>
      <Box
        margin='1% auto'
        border='2px solid lightblue'
        borderRadius='0.25rem'
        overflow='hidden'
        textAlign='center'
      >
        <Heading as='h3' textAlign='center' padding='1%'>Brand:</Heading>
        <Text>{product.brand}</Text>
      </Box>
      <Box
        margin='1% auto'
        border='2px solid lightblue'
        borderRadius='0.25rem'
        overflow='hidden'
        textAlign='center'
      >
        <Heading as='h3' textAlign='center' padding='1%'>Category:</Heading>
        <Text>{product.category}</Text>
      </Box>
    </Box>
  );
}
