import React from 'react';
import {
  Heading, CardBody, Image, Stack, Card, Text, Divider, CardFooter, ButtonGroup, Button, Flex,
} from '@chakra-ui/react';
import { numFormat } from 'src/utils/numFormat';
import { Product } from 'src/Types/ProductType';
import { Link } from 'wouter';

export default function CardComponent({ product, handleAddToCart, handleRemoveFromCart }: {
  product: Product, handleAddToCart: Function, handleRemoveFromCart: Function
}) {
  const {
    title, description, price, thumbnail, cartCount, id,
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
          <Flex justifyContent="space-between">
            <Link href={`/product/${id}`} className="details-link">Details</Link>
            <Text color="blue.600" fontSize="md">
              {numFormat.format(price)}
            </Text>
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="1">
          <Button
            variant="solid"
            colorScheme="blue"
            size="sm"
            onClick={() => handleAddToCart(1)}
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
