import React, { useEffect, useState } from 'react';
import {
  Box, Container, Grid, GridItem, Flex,
} from '@chakra-ui/react';
import FilterSidebar from 'src/Components/FilterSidebar';
import Layout from 'src/Layout/Layout';
import ProductsList from 'src/Layout/ProductsList';
import FilterCard from 'src/Components/FilterCard';
import RangeSliderByPrice from 'src/Components/RangeSliderByPrice';
import RangeSliderByStock from 'src/Components/RangeSliderByStock';
import FilterCheckBoxComponent from 'src/Components/FilterCheckboxComponent';
import { ProductListState } from 'src/Store';
import * as actions from '../Actions';

export default function HomePage({
  state,
  dispatch,
}: {
  state: ProductListState;
  dispatch: (action) => void;
}) {
  return (
    <Layout totalItems={state.totalItems}>
      <Box>
        <Container maxW="6xl">
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={4}
          >
            <GridItem colSpan={1}>
              <FilterSidebar>
                <Flex direction="column" gap={4}>
                  <FilterCard title="Category"><FilterCheckBoxComponent /></FilterCard>
                  <FilterCard title="Brand"><FilterCheckBoxComponent /></FilterCard>
                  <FilterCard title="Price"><RangeSliderByPrice /></FilterCard>
                  <FilterCard title="Stock"><RangeSliderByStock /></FilterCard>
                </Flex>
              </FilterSidebar>
            </GridItem>
            <GridItem colSpan={3} w="100%">
              <ProductsList
                state={state}
                dispatch={dispatch}
                products={state.filteredProducts}
                handleSort={
                  (sortType: actions.SortUnionType) => {
                    dispatch((actions.sortProducts(sortType)));
                  }
                }
                handleAddToCart={
                  (productId: number) => {
                    dispatch(actions.addToCart(productId));
                  }
                }
              />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
