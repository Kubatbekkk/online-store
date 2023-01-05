import { Stack, Checkbox } from '@chakra-ui/react';
import React from 'react';

export default function FilterCheckBoxComponent() {
  return (
    <Stack>
      <Checkbox>Smartphones</Checkbox>
      <Checkbox>Laptops</Checkbox>
      <Checkbox>Fragrances</Checkbox>
      <Checkbox>Skincare</Checkbox>
      <Checkbox>Groceries</Checkbox>
      <Checkbox>Tops</Checkbox>
      <Checkbox isDisabled defaultChecked>
        Checkbox
      </Checkbox>
    </Stack>
  );
}
