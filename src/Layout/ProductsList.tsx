import { Box, Heading } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function ProductsList({ label, children }:
{ label: ReactNode, children: ReactNode }) {
  return (
    <Box>
      <Box py={4} textAlign="center">
        <Heading as="h3" size="md" fontWeight="medium">
          {label}
          _
        </Heading>
      </Box>
      <div>
        {children}
        {' '}
      </div>
    </Box>
  );
}
