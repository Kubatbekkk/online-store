import {
  Box, HStack, Icon, Text,
} from '@chakra-ui/react';
import React from 'react';

import { SlHandbag } from 'react-icons/sl';

export default function Cart() {
  return (
    <HStack spacing={1}>
      <Box bg="red.500" h={5} w={5} borderRadius={50}>
        <Text align="center" fontWeight="medium">1</Text>
      </Box>
      <Box>
        <Icon as={SlHandbag} w={8} h={8} color="blue.900" />
      </Box>
    </HStack>
  );
}
