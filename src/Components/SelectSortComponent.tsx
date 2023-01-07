import { Stack, Select } from '@chakra-ui/react';
import React from 'react';

export default function SelectSortComponent({ handleSort }: { handleSort: Function }) {
  return (
    <Stack spacing={3}>
      <Select
        placeholder="sort"
        size="sm"
        borderRadius={5}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSort(e.target.value)}
      >
        <option value="lowest">lowest</option>
        <option value="highest">highest</option>
        <option value="nameA">name (a-z)</option>
        <option value="nameZ">name (z-a)</option>
      </Select>
    </Stack>
  );
}
