import { Stack, Checkbox } from '@chakra-ui/react';
import React, { useState } from 'react';
import categories from 'src/data/categoryList';

export default function FilterCheckBoxComponent({ checkCategory }: { checkCategory: Function }) {
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const ifCheckedList = [...checked];

    if (currentIndex === -1) {
      ifCheckedList.push(value);
    } else {
      ifCheckedList.splice(currentIndex, 1);
    }
    setChecked(ifCheckedList);
    checkCategory(ifCheckedList);
  };
  return (
    <Stack>
      {
       categories.map((category) => (
         <Checkbox
           key={category._id}
           onChange={() => handleToggle(category.name)}
         >
           {category.name}
         </Checkbox>
       ))
      }
    </Stack>
  );
}
