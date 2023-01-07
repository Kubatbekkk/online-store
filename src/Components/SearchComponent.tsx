/* eslint-disable react/no-children-prop */
import {
  InputGroup, InputLeftElement, Input,
} from '@chakra-ui/react';
import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { ProductListState } from 'src/Store';

export default function SearchComponent({ handleSearch, searchValue }) {
  return (
    <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon fontSize={14} color="gray.200" mb={1.5} mr={0.5} />}
      />
      <Input
        key="search"
        type="search"
        placeholder="Search"
        value={searchValue}
        size="sm"
        maxW={200}
        borderRadius={5}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch((e.target.value))}
      />
    </InputGroup>
  );
}
