import {
  HStack, Flex, Heading, Select, Button, Badge, Box,
} from '@chakra-ui/react';
import React from 'react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';

export default function CartBlockHeaderComponent() {
  return (
    <Box>
      <HStack justifyContent="space-between" mb={5}>
        <Flex alignItems="center">
          <Heading as="h3" size="sm" fontWeight="medium" mr={2} letterSpacing="tighter">
            ITEMS:
          </Heading>
          <Select size="sm" outline="none">
            <option value="">select</option>
            <option value="">1</option>
            <option value="">2</option>
          </Select>
        </Flex>
        <Flex alignItems="center">
          <Heading as="h3" size="sm" fontWeight="medium" mr={2} letterSpacing="tighter">
            PAGE:
          </Heading>
          <Flex gap={2} alignItems="center">
            <Button size="sm" outline="none">
              <CgChevronLeft />
            </Button>
            <Badge fontSize={16} bg="transparent">1</Badge>
            <Button size="sm" outline="none">
              <CgChevronRight />
            </Button>
          </Flex>
        </Flex>
      </HStack>

    </Box>
  );
}
