import {
  Badge,
  Box, HStack, Icon, Text, useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';

import { SlHandbag } from 'react-icons/sl';

export default function Cart() {
  return (
    <HStack spacing={-2}>
      <Badge bg={useColorModeValue('red.500', 'red.900')} h={7} w={7} borderRadius={50} zIndex={1}>
        <Text
          fontWeight="medium"
          color="whiteAlpha.900
        "
          textAlign="center"
          fontSize={14}
          alignItems="center"
          pt={1}
        >
          10
        </Text>
      </Badge>
      <Box>
        <Icon as={SlHandbag} w={8} h={8} color="blue.900" />
      </Box>
    </HStack>
  );
}
