import { Stack, Checkbox } from '@chakra-ui/react';
import React, { useState } from 'react';
import brands from 'src/data/brandList';

export default function FilterCheckBoxComponent({ checkBrand }) {
  const [checked, setChecked] = useState([]);

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
           checked={checked.indexOf(brand[index]) !== -1}
         >
           {brand}
         </Checkbox>
       ))
      }
    </Stack>
  );
}
