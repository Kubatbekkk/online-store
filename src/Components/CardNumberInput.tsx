import React, { useState, useEffect } from 'react';

import {
  Input,
  FormControl,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react';

export default function CardNumberInput(
  { setFirstCardNumber },
  // { setFormValid }
) {
  const [input, setInput] = useState('');
  const [inputDirty, setInputDirty] = useState(false);
  const [inputError, setInputError] = useState(false);

  const inputHandler = (e) => {
    setFirstCardNumber(e.target.value[0]);
    // setFormValid(e.target);
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
        value={input}
        type="number"
        maxLength={16}
        onChange={(e) => inputHandler(e)}
        onBlur={(e) => blurHandler(e)}
        placeholder="Card number"
        background="white"
        w="80%"
        borderRadius="0.25rem"
        textAlign="center"
        border="1px solid lightblue"
        outline="none"
        marginLeft="2%"
        fontSize="xl"
        color="black"
        fontWeight="700"
      />
      {inputDirty && inputError ? (
        <FormHelperText color="red">
          Please, enter a valid card number to process the order
        </FormHelperText>
      ) : (
        <FormErrorMessage color="red">
          A valid card number is required.
        </FormErrorMessage>
      )}
    </FormControl>
  );
}
