/* eslint-disable react/no-children-prop */
import {
  InputGroup, InputLeftElement, Input, InputRightElement,
} from '@chakra-ui/react';
import React from 'react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';

export default function SearchComponent() {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon fontSize={14} color="gray.200" mb={1.5} mr={0.5} />}
      />
      <Input type="search" placeholder="Search" size="sm" maxW={200} borderRadius={5} />
      <InputRightElement
        children={<CloseIcon color="gray.200" fontSize={10} mb={1.5} />}
      />
    </InputGroup>
  );
}