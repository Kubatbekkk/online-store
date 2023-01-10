/* eslint-disable max-len */
import {
  Box,
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Container,
  Divider, Flex, Heading, Input, SimpleGrid, Stack, Text,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Layout from 'src/Layout/Layout';
import useStoreState from 'src/hooks/useStoreState';
import CartProductComponent from 'src/Components/CartProductComponent';
import CartBlockHeaderComponent from 'src/Components/CartBlockHeaderComponent';
import {
  addToCart, init, removeFromCart, stop,
} from 'src/Actions';
import { ProductListState } from 'src/Store';

function getProductById(state: ProductListState, productId: number) {
  return state.products.find((product) => product.id === productId);
}

function getTotalItems(state) {
  return state.totalItems;
}
function getTotalAmount(state) {
  return state.totalAmount;
}

export default function CartPage() {
  const [state, dispatch] = useStoreState();
  useEffect(() => {
    dispatch(init());
    return () => {
      dispatch(stop());
    };
  }, [dispatch]);
  const { cart } = state;
  return (
    <Layout>
      <Container maxW="6xl">
        <Breadcrumb spacing="1rem" mb={4}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/cart">Cart</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>

        <SimpleGrid columns={[1, null, 2]} spacing="40px" minChildWidth="400px">
          <Box>
            <CartBlockHeaderComponent />
            <Divider />
            {[...Object.keys(cart)].map((productId, index) => (
              <CartProductComponent
                key={productId}
                product={getProductById(state, parseInt(productId, 10))}
                index={index}
                handleAddToCart={(cartCount) => { dispatch(addToCart(parseInt(productId, 10), cartCount)); }}
                handleRemoveFromCart={(cartCount) => { dispatch(removeFromCart(parseInt(productId, 10), cartCount)); }}
              />
            ))}

          </Box>
          <Box>
            <Stack mb="20px">
              <Heading my={2.5} as="h2" size="md" textAlign="center" letterSpacing="wider">
                YOUR ORDER
              </Heading>
              <Divider />
              <Flex justifyContent="space-between">
                <Text>ITEMS:</Text>
                <Box>{getTotalItems(state)}</Box>
              </Flex>
              <Flex justifyContent="space-between">
                <Text>TOTAL SUM:</Text>
                <Box>{getTotalAmount(state)}</Box>
              </Flex>
            </Stack>
            <Divider />
            <Stack mt="10px">
              <Flex justifyContent="space-between" gap={3} alignItems="center" my="16px">
                <Input placeholder="Enter promo code" maxW="250px" />
                <Box fontSize="14px">Promo for test: 'RS', 'EPM'</Box>
                <Button>CHECK</Button>
              </Flex>
              <Text>info</Text>
              <Button bg="red.200">PLACE AN ORDER</Button>
            </Stack>
          </Box>

        </SimpleGrid>
      </Container>
    </Layout>
  );
}
