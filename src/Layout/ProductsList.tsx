import { Box, Heading, Flex } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import SelectSortComponent from 'src/Components/SelectSortComponent';

export default function ProductsList({ label, children }:
{ label: ReactNode, children: ReactNode }) {
  return (
    <Box>
      <Box py={4} textAlign="center">
        <Flex alignItems="center">
          <SelectSortComponent />
          <Heading as="h3" size="md" fontWeight="medium">
            {label}
            _
          </Heading>
        </Flex>
      </Box>
      <div>
        {children}
        {' '}
      </div>
    </Box>
  );
}
