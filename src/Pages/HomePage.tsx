import React from 'react';
import {
  Box, Container, Grid, GridItem, Flex,
} from '@chakra-ui/react';
import FilterSidebar from 'src/Components/FilterSidebar';
import Layout from 'src/Layout/Layout';
import ProductsList from 'src/Layout/ProductsList';
import FilterCard from 'src/Components/FilterCard';
import RangeSliderByPrice from 'src/Components/RangeSliderByPrice';
import RangeSliderByStock from 'src/Components/RangeSliderByStock';
import FilterCheckCategoryComponent from 'src/Components/FilterCheckCategoryComponent';
import useStoreState from 'src/hooks/useStoreState';
import FilterCheckBrandComponent from 'src/Components/FilterCheckBrandComponent';
import * as actions from '../Actions';
// ['smartphones', 'laptops', 'fragrances', 'skincare', 'groceries', 'home-decoration']

export default function HomePage() {
  const [state, dispatch] = useStoreState();

  return (
    <Layout>
      <Box>
        <Container maxW="6xl">
          <Grid
            templateColumns="repeat(4, 1fr)"
            gap={4}
          >
            <GridItem colSpan={1}>
              <FilterSidebar>
                <Flex direction="column" gap={4}>
                  <FilterCard title="Category">
                    <FilterCheckCategoryComponent checkCategory={(filters: string[] | []) => {
                      dispatch(actions.filterCategoryCheckBox(filters));
                    }}
                    />
                  </FilterCard>
                  <FilterCard title="Brand">
                    <FilterCheckBrandComponent checkBrand={(filters: string[] | []) => {
                      dispatch(actions.filterBrandCheckBox(filters));
                    }}
                    />
                  </FilterCard>
                  {/* <FilterCard title="Price"><RangeSliderByPrice /></FilterCard>
                  <FilterCard title="Stock"><RangeSliderByStock /></FilterCard> */}
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
                handleRemoveFromCart={
                  (productId: number) => {
                    dispatch(actions.removeFromCart(productId));
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
