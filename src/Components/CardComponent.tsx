import React from 'react';
import {
  Heading, CardBody, Image, Stack, Card, Text, Divider, CardFooter, ButtonGroup, Button,
} from '@chakra-ui/react';
import type { Product } from '../Types/ProductType';

export default function CardComponent({ product }) {
  const {
    title, description, price, thumbnail,
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
            $
            {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="1">
          <Button variant="solid" colorScheme="blue" size="sm">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue" size="sm">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
