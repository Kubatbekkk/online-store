import { Box, HStack, Button } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function FilterSidebar({ children }: { children: ReactNode }) {
  return (
    <Box>
      <HStack justifyContent="space-between" my={3}>
        <Button colorScheme="red" variant="outline" size="sm" letterSpacing={2}>Reset Filters</Button>
        <Button colorScheme="cyan" variant="outline" size="sm" letterSpacing={2}>Copy Link</Button>
      </HStack>
      <section>
        {children}
      </section>
    </Box>
  );
}
