import React, { useState, useEffect } from 'react';

import {
  Input,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export default function NameInput() {
  const [input, setInput] = useState('');
  const [inputDirty, setInputDirty] = useState(false);
  const [inputError, setInputError] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
    // setFormValid(e.target.value);
    const regExp = /^[A-Za-zА-Яа-яЁё]{3,}(\s[A-Za-zА-Яа-яЁё]{3,}){1,}$/;
    setInputError(!regExp.test(String(e.target.value)));
  };
  // useEffect(() => {
  //   if (inputError) {
  //     setFormValid(false);
  //   } else {
  //     setFormValid(true);
  //   }
  // }, [inputError]);

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
        name="input"
        value={input}
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => blurHandler(e)}
        placeholder="Name and Surname (required)"
      />
      {inputDirty && inputError ? (
        <FormHelperText color="red">
          Please, enter your name and surname to process the order
        </FormHelperText>
      ) : (
        <FormErrorMessage color="red">
          Name and surname are required.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
