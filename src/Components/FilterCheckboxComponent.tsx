import { Stack, Checkbox } from '@chakra-ui/react';
import React from 'react';
import useStoreState from 'src/hooks/useStoreState';

export default function FilterCheckBoxComponent() {
  const [state, dispatch] = useStoreState();
  const { filteredProducts } = state;
  const categories = [...new Set(filteredProducts.map((product) => product.category))];
  return (
    <Stack>
      {
       categories.map((category, index) => <Checkbox key={index + 1}>{category}</Checkbox>)
      }
    </Stack>
  );
}
