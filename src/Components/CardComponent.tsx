import React from 'react';
import {
  Heading, CardBody, Image, Stack, Card, Text, Divider, CardFooter, ButtonGroup, Button,
} from '@chakra-ui/react';

export default function CardComponent() {
  return (
    <Card
      maxW="262"
    >
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="sm"
        />
        <Stack mt="2" spacing="1">
          <Heading size="sm">Living room Sofa</Heading>
          <Text isTruncated>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design with a
            sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="md">
            $450
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
