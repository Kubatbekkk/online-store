import React, { useState } from 'react';

import { Input } from '@chakra-ui/react';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export default function ValidThruInput() {
  const [input, setInput] = useState('');
  const [inputDirty, setInputDirty] = useState(false);
  const [inputError, setInputError] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
    const regExp = /^(?:[0-1][1-2])\/(?:[0-2]\d|3[0-1])$/;
    setInputError(!regExp.test(e.target.value));
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'input':
        setInputDirty(true);
        break;
    }
  };
  // вариант 1
  const addSlash = (input) => {
    let newStr = '';
    let len = input.length;
    for (let i = 0; i < len; i++) {
      newStr = newStr + input[i];
      while (newStr.length % 2 === 0) {
        newStr = newStr + '/';
      }
    }
    return newStr.substr(0, newStr.length - 1);
  };

  return (
    <FormControl isRequired>
      <Input
        name='input'
        onChange={() => (e) => {
          inputHandler(e);
          addSlash(input);
          // setInput(
          //   input.length === 3 && !input.includes('/')
          //     ? `${input.substring(0, 2)}/${input.substring(2)}`
          //     : input
          // );
        }}
        value={input}
        onBlur={(e) => blurHandler(e)}
        fontWeight='700'
        w='70%'
        height='1rem'
        placeholder='valid thru'
        borderRadius='0.25rem'
        textAlign='center'
        border='1px solid lightblue'
        outline='none'
        marginLeft='2%'
        color='black'
        background='white'
      ></Input>
      {inputDirty && inputError ? (
        <FormHelperText color='red'>
          Please, enter a valid thru date to process the order
        </FormHelperText>
      ) : (
        <FormErrorMessage color='red'>
          A valid thru date is required.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
