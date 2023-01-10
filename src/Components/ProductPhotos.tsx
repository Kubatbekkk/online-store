import React from 'react';
import { Box, Image, Flex } from '@chakra-ui/react';
import type { Product } from 'src/Types/ProductType';

export default function ProductPhotos(product: Product) {
  const [imageIndex, setImageIndex] = React.useState(0);
  const { images } = product;

  return (
    <Flex>
      <Box w="25%">
        {images.map((img, index) => (
          <Image
            w="80%"
            maxH="60px"
            objectFit="contain"
            border="1px"
            cursor="pointer"
            borderRadius="0.5rem"
            src={img}
            alt="thumbnail of the product"
            key={index}
            onClick={() => setImageIndex(index)}
          />
        ))}
      </Box>
      <Box w="100%">
        <Flex alignItems="center" justifyContent="center" w="70%">
          <Image
            border="1px"
            borderRadius="0.5rem"
            maxW="40vh"
            w="auto"
            maxWidth="100%"
            src={images[imageIndex]}
            alt="Main photo of the product"
          />
        </Flex>
      </Box>
    </Flex>
  );
}
