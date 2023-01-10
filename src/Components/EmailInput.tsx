import React, { useState, useEffect } from 'react';

import {
  Input,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export default function EmailInput() {
  const [input, setInput] = useState('');
  const [inputDirty, setInputDirty] = useState(false);
  const [inputError, setInputError] = useState(false);

  const inputHandler = (e) => {
    setInput(e.target.value);
    const regExp = /([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*@([A-zА-я])+([0-9\-_\+\.])*([A-zА-я0-9\-_\+\.])*[\.]([A-zА-я])+/;
    setInputError(!regExp.test(String(e.target.value)));
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
    <FormControl mt={3} mb={5} isRequired>
      <Input
        name="input"
        value={input}
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => blurHandler(e)}
        placeholder="Email address (required)"
      />
      {inputDirty && inputError ? (
        <FormHelperText color="red">
          Please, enter a vaild email to process the order
        </FormHelperText>
      ) : (
        <FormErrorMessage color="red">
          Your email adress is required.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
