import React, { useState, useEffect } from 'react';

import {
  Input,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export default function ValidThruInput() {
  const [input, setInput] = useState('');
  const [inputDirty, setInputDirty] = useState(false);
  const [inputError, setInputError] = useState(false);

  const inputHandler = (e) => {
    if (!inputDirty && e.target.value.length === 5) {
      setInputDirty(true);
    }
    const { value } = e.target;
    if (value.length === 2 && !value.includes('/')) {
      setInput(`${value}/`);
    } else {
      setInput(value);
    }

    const regExp = /^(?:[0-1][1-2])\/(?:[0-2]\d|3[0-1])$/;
    setInputError(!regExp.test(value));
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
    <FormControl isRequired>
      <Input
        name="input"
        onChange={(e) => {
          inputHandler(e);
        }}
        value={input}
        onBlur={(e) => blurHandler(e)}
        fontWeight="700"
        maxLength={5}
        w="70%"
        height="1rem"
        placeholder="valid thru"
        borderRadius="0.25rem"
        textAlign="center"
        border="1px solid lightblue"
        outline="none"
        marginLeft="2%"
        color="black"
        background="white"
      />
      {inputDirty && inputError ? (
        <FormHelperText color="red">
          Please, enter a valid thru date to process the order
        </FormHelperText>
      ) : (
        <FormErrorMessage color="red">
          A valid thru date is required.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
