import { Box, Heading, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import SearchComponent from 'src/Components/SearchComponent';
import SelectSortComponent from 'src/Components/SelectSortComponent';

export default function ProductsList({ label, children }:
{ label: ReactNode, children: ReactNode }) {
  return (
    <Box>
      <Box py={3} textAlign="center">
        <Flex alignItems="center" justifyContent="space-between">
          <Box><SelectSortComponent /></Box>
          <Box>
            <Heading as="h3" size="md" fontWeight="medium">
              <pre>
                {label}
                _
              </pre>
            </Heading>
          </Box>
          <Box>
            <SearchComponent />
          </Box>
        </Flex>
      </Box>
      <div>
        {children}
        {' '}
      </div>
    </Box>
  );
}
