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
import initProductListStore from '../Store';
import * as actions from '../Actions';
import { Api } from '../Api';

const store = initProductListStore({ api: Api });

export default function HomePage() {
  const [state, setState] = useState(store.getState());
  useEffect(() => {
    const action = actions.init();
    store.dispatch(action);
    setState(store.getState());
    return store.subscribe(() => setState(store.getState()));
  }, []);
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
                  <FilterCard title="Category"><FilterCheckBoxComponent /></FilterCard>
                  <FilterCard title="Brand"><FilterCheckBoxComponent /></FilterCard>
                  <FilterCard title="Price"><RangeSliderByPrice /></FilterCard>
                  <FilterCard title="Stock"><RangeSliderByStock /></FilterCard>
                </Flex>
              </FilterSidebar>
            </GridItem>
            <GridItem colSpan={3} w="100%">
              <ProductsList label="Found: " products={state.products} />
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
