import React, { useState } from 'react';

import { Input } from '@chakra-ui/react';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export default function DeliveryAddressInput() {
  const [input, setInput] = useState('');
  const [inputDirty, setInputDirty] = useState(false);
  const [inputError, setInputError] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
    const regExp = /([A-Za-zА-Яа-яЁё]{5,}\s?\b){3,}/;
    setInputError(!regExp.test(String(e.target.value)));
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'input':
        setInputDirty(true);
        break;
    }
  };

  return (
    <FormControl mt={3} isRequired>
      <Input
        name='input'
        value={input}
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => blurHandler(e)}
        placeholder='Delivery address (required)'
      />
      {inputDirty && inputError ? (
        <FormHelperText color='red'>
          Please, enter your delivery address to process the order
        </FormHelperText>
      ) : (
        <FormErrorMessage color='red'>
          Delivery address is required.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
