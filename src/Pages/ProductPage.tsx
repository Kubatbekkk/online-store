import React from 'react';
import Layout from '../Layout/Layout';
import Breadcrumbs from 'src/Components/BreadcrumbComponent';
import ProductTitle from 'src/Components/ProductTitle';
import ProductPhotos from 'src/Components/ProductPhotos';
import ProductBuy from 'src/Components/ProductBuy';
import products from 'src/data/data';
import { Flex, Box, Container, useColorModeValue } from '@chakra-ui/react';
import ProductInfo from 'src/Components/ProductInfo';

function ProductPage() {
  const id = Number(window.location.pathname.split('/').pop());
  const product = products.find((el) => el.id === id);
  if (!product) {
    return 'Not found';
  }
  return (
    <Layout>
      <Box>
        <Container maxW='6xl'>
          <Flex justifyContent='space-between' alignItems='center'>
            <Box
              boxShadow='base'
              bg={useColorModeValue('gray.50', 'gray.900')}
              w='100%'
              borderRadius={16}
            >
              <Flex
                minWidth='max-content'
                alignItems='center'
                justifyContent='center'
                py={7}
              >
                <Breadcrumbs {...product}></Breadcrumbs>
              </Flex>

              <ProductTitle {...product}></ProductTitle>
              <Box w='100%'>
                <Flex>
                  <Box></Box>
                  <Box></Box>
                  <Box></Box>
                </Flex>
              </Box>

              <Box>
                <Flex w='100%' mx='auto' p={5}>
                  <ProductPhotos {...product}></ProductPhotos>
                  <ProductInfo {...product}></ProductInfo>
                  <ProductBuy {...product}></ProductBuy>
                </Flex>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>
    </Layout>
  );
}

export default ProductPage;
