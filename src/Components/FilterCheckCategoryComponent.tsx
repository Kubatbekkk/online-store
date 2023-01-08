import { Stack, Checkbox } from '@chakra-ui/react';
import React, { useState } from 'react';

export default function FilterCheckBoxComponent({ checkCategory }: { checkCategory: Function }) {
  const [checked, setChecked] = useState([]);
  const categories: { _id: number, name: string }[] = [
    {
      _id: 1,
      name: 'smartphones',
    },
    {
      _id: 2,
      name: 'laptops',
    },
    {
      _id: 3,
      name: 'fragrances',
    },
    {
      _id: 4,
      name: 'skincare',
    },
    {
      _id: 5,
      name: 'groceries',
    },
    {
      _id: 6,
      name: 'home-decoration',
    },

  ];
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
