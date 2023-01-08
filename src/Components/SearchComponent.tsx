/* eslint-disable react/no-children-prop */
import {
  InputGroup, InputLeftElement, Input,
} from '@chakra-ui/react';
import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import { useLocation } from 'wouter';
import useStoreState from 'src/hooks/useStoreState';

export default function SearchComponent({ handleSearch, searchValue }: {
  handleSearch: Function, searchValue: string
}) {
  // const [state, dispatch] = useStoreState();
  // const [location, setLocation] = useLocation();
  // const url = new URL(document.location);
  // if (url.searchParams.has('searchValue')) {
  //   const temp = url.searchParams.get('searchValue');
  //   setLocation(`/?search=${temp}`);
  // } else if (state.searchValue) {
  //   setLocation(`/?search=${searchValue}`);
  //   url.searchParams.set('searchValue', location);
  // } else if (location !== '' && !searchValue) {
  //   setLocation('/');
  // }
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearch(e.target.value)}

      />
    </InputGroup>
  );
}
