import React, { useState } from 'react';
import { Box, Image, Flex, background } from '@chakra-ui/react';
import type { Product } from 'src/Types/ProductType';

export default function ProductPhotos(product: Product) {
  // const handleTab = (index: number) => alert(index);
  const [image, handleTab] = useState(0);
  // product = this.state;
  return (
    <Flex>
      <Box w='25%'>
        {product.images.map((img, index) => (
          <Image
            {...handleTab}
            w='80%'
            maxH='60px'
            objectFit='contain'
            border='1px'
            cursor='pointer'
            borderRadius='0.5rem'
            src={img}
            alt='thumbnail of the product'
            key={index}
            onClick={() => {}}
          ></Image>
        ))}
      </Box>
      <Box w='100%'>
        <Flex alignItems='center' justifyContent='center' w='70%'>
          <Image
            border='1px'
            borderRadius='0.5rem'
            maxW='40vh'
            w='auto'
            maxWidth='100%'
            src={product.images[0]}
            alt='Main photo of the product'
          ></Image>
        </Flex>
      </Box>
    </Flex>
  );
}
