import React, { useState, useEffect } from 'react';

import {
  Input,
} from '@chakra-ui/react';

import {
  FormControl,  
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export default function NumberInput() {
  const [input, setInput] = useState('');
  const [inputDirty, setInputDirty] = useState(false);
  const [inputError, setInputError] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
    const regExp = new RegExp('^[\+][(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
    setInputError(!regExp.test(e.target.value)); 
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'input':
        setInputDirty(true);
        break;
    }
  };
  // useEffect(() => {
  //   if (inputError) {
  //     setFormValid(false);
  //   } else {
  //     setFormValid(true);
  //   }
  // }, [inputError]);

  return (
    <FormControl isRequired mt={3}>
      <Input
        name='input'
        value={input}
        onChange={e => inputHandler(e)}
        onBlur={(e) => blurHandler(e)}
        placeholder='Phone number (required)'
      />
      {inputDirty && inputError ? (
        <FormHelperText color='red'>
          Please, enter your phone number to process the order
        </FormHelperText>
      ) : (
        <FormErrorMessage color='red'>
          Phone number is required.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
