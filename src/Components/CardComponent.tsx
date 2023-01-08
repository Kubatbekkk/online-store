import React from 'react';
import {
  Heading, CardBody, Image, Stack, Card, Text, Divider, CardFooter, ButtonGroup, Button,
} from '@chakra-ui/react';
import { numFormat } from 'src/utils/numFormat';
import { Product } from 'src/Types/ProductType';

export default function CardComponent({ product, handleAddToCart, handleRemoveFromCart }: {
  product: Product, handleAddToCart: Function, handleRemoveFromCart: Function
}) {
  const {
    title, description, price, thumbnail, cartCount,
  } = product;
  return (
    <Card
      maxW="262"
    >
      <CardBody>
        <Image
          objectFit="cover"
          src={thumbnail}
          alt={title}
          borderRadius="sm"
          height={160}
          maxH={170}
        />
        <Stack mt="2" spacing="1">
          <Heading size="sm">{title}</Heading>
          <Text isTruncated>
            {description}
          </Text>
          <Text color="blue.600" fontSize="md">
            {numFormat.format(price)}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="1">
          <Button
            variant="solid"
            colorScheme="blue"
            size="sm"
            onClick={() => handleAddToCart(product.id)}
            hidden={cartCount !== 0}
          >
            Add to cart
          </Button>
          <Button
            variant="outline"
            colorScheme="red"
            size="sm"
            onClick={() => handleRemoveFromCart(product.id)}
            hidden={cartCount === 0}
          >
            Remove from cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
