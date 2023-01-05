import { Box, HStack, Button } from '@chakra-ui/react';
import React, { ReactNode } from 'react';

export default function FilterSidebar({ children }: { children: ReactNode }) {
  return (
    <Box>
      <HStack justifyContent="space-between" my={2}>
        <Button colorScheme="red" variant="outline">Reset Filters</Button>
        <Button colorScheme="cyan" variant="outline">Copy Link</Button>
      </HStack>
      <section>
        {children}
      </section>
    </Box>
  );
}
