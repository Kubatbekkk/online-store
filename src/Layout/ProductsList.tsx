import { Box, Heading, Flex } from '@chakra-ui/react';
import React from 'react';
import type { Product } from 'src/Types/ProductType';
import SearchComponent from 'src/Components/SearchComponent';
import SelectSortComponent from 'src/Components/SelectSortComponent';
import ProductCard from '../Components/CardComponent';

export default function ProductsList({
  label, products, handleSearch, handleSort,
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
              <pre>
                {label}
                {products.length}
              </pre>
            </Heading>
          </Box>
          <Box>
            <SearchComponent handleSearch={handleSearch} />
          </Box>
        </Flex>
      </Box>
      <div>
        <Flex gap={6} flexWrap="wrap">
          {products.map((product: Product) => <ProductCard key={product.id} product={product} />)}
        </Flex>
      </div>
    </Box>
  );
}
