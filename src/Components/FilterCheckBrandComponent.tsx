import { Stack, Checkbox } from '@chakra-ui/react';
import React, { useState } from 'react';
import useStoreState from 'src/hooks/useStoreState';

export default function FilterCheckBoxComponent({ checkBrand }) {
  const [checked, setChecked] = useState([]);
  const [state] = useStoreState();

  const brands = [...new Set(state.products.map((item) => item.brand))];

  const handleToggle = (value: unknown) => {
    const currentIndex = checked.indexOf(value);
    const ifCheckedList = [...checked];

    if (currentIndex === -1) {
      ifCheckedList.push(value);
    } else {
      ifCheckedList.splice(currentIndex, 1);
    }
    setChecked(ifCheckedList);
    checkBrand(ifCheckedList);
  };
  return (
    <Stack>
      {
       brands.map((brand, index) => (
         <Checkbox
           key={index + 1}
           onChange={() => handleToggle(brand)}
         >
           {brand}
         </Checkbox>
       ))
      }
    </Stack>
  );
}
