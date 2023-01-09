/* eslint-disable max-len */
import {
  Box, Heading, Flex, Text,
} from '@chakra-ui/react';
import React from 'react';
import type { Product } from 'src/Types/ProductType';
import SearchComponent from 'src/Components/SearchComponent';
import SelectSortComponent from 'src/Components/SelectSortComponent';
import ProductCard from '../Components/CardComponent';
import * as actions from '../Actions';

export default function ProductsList({
  products, handleSort, handleAddToCart, state, dispatch, handleRemoveFromCart,
}) {
  const { searchValue } = state;

  return (
    <Box>
      <Box py={3} textAlign="center">
        <Flex alignItems="center" justifyContent="space-between">
          <Box>
            <SelectSortComponent handleSort={handleSort} />
          </Box>
          <Box>
            <Heading as="h3" size="md" fontWeight="medium">
              <Text animation="ease-in">
                Found:
                {products.length}
              </Text>
            </Heading>
          </Box>
          <Box>
            <SearchComponent
              handleSearch={(searchValue) => {
                dispatch(actions.findItemFromList(searchValue));
              }}
              searchValue={searchValue}
            />
          </Box>
        </Flex>
      </Box>
      <div>
        <Flex gap={6} flexWrap="wrap">
          {products.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
              handleAddToCart={(cartCount: number) => handleAddToCart(product.id, cartCount)}
              handleRemoveFromCart={(cartCount: number) => handleRemoveFromCart(product.id, cartCount)}
            />
          ))}
        </Flex>
      </div>
    </Box>
  );
}
