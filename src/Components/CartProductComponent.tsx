import React from 'react';
import {
  HStack, Flex, Stack, Box, Image,
} from '@chakra-ui/react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { numFormat } from 'src/utils/numFormat';

export default function CartProductComponent({
  product, index, handleAddToCart, handleRemoveFromCart,
}) {
  const {
    title, thumbnail, price, stock, cartCount,
  } = product;

  return (
    <Box mb={3} mt={1}>
      <Stack>
        <HStack justifyContent="space-between">
          <Box w={5} fontWeight="medium">{index + 1}</Box>
          <Image src={thumbnail} alt={title} maxH="80px" w="100px" objectFit="cover" objectPosition="center" />
          <Box w="100px">
            <Stack>
              <Box>
                {title}
              </Box>
              <Box>
                In stock:
                {' '}
                {stock}
              </Box>
            </Stack>

          </Box>
          <Box>{numFormat.format(price)}</Box>
          <Flex alignItems="center" gap={2}>
            <Box as="button" onClick={() => handleRemoveFromCart(1)}><AiOutlineMinusCircle /></Box>
            <Box>{cartCount}</Box>
            <Box as="button" onClick={() => handleAddToCart(1)}><AiOutlinePlusCircle /></Box>
          </Flex>
          <Box>{numFormat.format(cartCount * price)}</Box>
        </HStack>
      </Stack>
    </Box>
  );
}
