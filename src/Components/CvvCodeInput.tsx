import React, { useState, useEffect } from 'react';

import { Input } from '@chakra-ui/react';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export default function CvvCodeInput() {
  const [input, setInput] = useState('');
  const [inputDirty, setInputDirty] = useState(false);
  const [inputError, setInputError] = useState(false);

  const inputHandler = (e) => {
    if (!inputDirty && e.target.value.length === 3) {
      setInputDirty(true);
    }
    setInput(e.target.value);
    const regExp = /^[0-9]{3}$/;
    setInputError(!regExp.test(e.target.value));
  };

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
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => blurHandler(e)}
        placeholder='Code'
        maxLength={3}
        w='60%'
        height='1rem'
        background='white'
        borderRadius='0.25rem'
        textAlign='center'
        ml='2%'
        color='black'
        fontWeight='700'
      />
      {inputDirty && inputError ? (
        <FormHelperText color='red'>
          Please, enter CVV code to process the order
        </FormHelperText>
      ) : (
        <FormErrorMessage color='red'>CVV is required.</FormErrorMessage>
      )}
    </FormControl>
  );
}
