import {
  Box, Container, Grid, GridItem, Flex,
} from '@chakra-ui/react';
import React from 'react';
import FilterSidebar from 'src/Components/FilterSidebar';
import Layout from 'src/Layout/Layout';
import ProductsList from 'src/Layout/ProductsList';
import FilterCard from 'src/Components/FilterCard';
import RangeSliderByPrice from 'src/Components/RangeSliderByPrice';
import ProductCard from '../Components/CardComponent';

export default function HomePage() {
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
                  {/* <FilterCard title="Category">' '</FilterCard> */}
                  {/* <FilterCard title="Brand">' '</FilterCard> */}
                  <FilterCard title="Price"><RangeSliderByPrice /></FilterCard>
                  {/* <FilterCard title="Stock">' '</FilterCard> */}
                </Flex>
              </FilterSidebar>
            </GridItem>
            <GridItem colSpan={3} w="100%">
              <ProductsList label="Found: ">
                <Flex gap={6} flexWrap="wrap">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </Flex>
              </ProductsList>
            </GridItem>
          </Grid>
        </Container>
      </Box>
    </Layout>
  );
}
