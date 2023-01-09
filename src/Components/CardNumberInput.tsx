import React, { useState } from 'react';

import { Input } from '@chakra-ui/react';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export default function CardNumberInput() {
  const [input, setInput] = useState('');
  const [inputDirty, setInputDirty] = useState(false);
  const [inputError, setInputError] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
    const regExp = new RegExp('^([0-9]{4}[s-]?){3}([0-9]{4})$');
    setInputError(!regExp.test(e.target.value));
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'input':
        setInputDirty(true);
        break;
    }
  };
  return (
    <FormControl isRequired>
      <Input
        name='input'
        value={input}
        type='number'
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => blurHandler(e)}
        placeholder='Card number'
        background='white'
        w='80%'
        borderRadius='0.25rem'
        textAlign='center'
        border='1px solid lightblue'
        outline='none'
        marginLeft='2%'
        fontSize='xl'
        color='black'
        fontWeight='700'
      ></Input>
      {inputDirty && inputError ? (
        <FormHelperText color='red'>
          Please, enter a valid card number to process the order
        </FormHelperText>
      ) : (
        <FormErrorMessage color='red'>
          A valid card number is required.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
