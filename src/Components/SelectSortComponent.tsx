import { Stack, Select } from '@chakra-ui/react';
import React from 'react';

export default function SelectSortComponent() {
  return (
    <Stack spacing={3}>
      <Select placeholder="sort" size="sm" borderRadius={5}>
        <option value="ascending">ascending</option>
        <option value="ascending">descending</option>
        <option value="name (z-a)">name (z-a)</option>
        <option value="name (z-a)">name (a-z)</option>
      </Select>
    </Stack>
  );
}
