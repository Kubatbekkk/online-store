import {
  Box, Heading, Flex, Text,
} from '@chakra-ui/react';
import React from 'react';
import type { Product } from 'src/Types/ProductType';
import SearchComponent from 'src/Components/SearchComponent';
import SelectSortComponent from 'src/Components/SelectSortComponent';
import ProductCard from '../Components/CardComponent';

export default function ProductsList({
  products, handleSearch, handleSort, handleAddToCart,
}) {
  return (
    <Box>
      <Box py={3} textAlign="center">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <SelectSortComponent handleSort={handleSort} />
          </Box>
          <Box>
            <Heading as="h3" size="md" fontWeight="medium">

              {' '}
              {products.length === 0
                ? (<Text color="blue.400">Loading...</Text>)
                : (
                  <Text animation="ease-in">
                    Found:
                    {products.length}
                  </Text>
                )}
            </Heading>
          </Box>
          <Box>
            <SearchComponent handleSearch={handleSearch} />
          </Box>
        </Flex>
      </Box>
      <div>
        <Flex gap={6} flexWrap="wrap">
          {products.map((product: Product) => <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />)}
        </Flex>
      </div>
    </Box>
  );
}
