import React from 'react';
import { ModalBody, Flex, Image, Input } from '@chakra-ui/react';
import CardNumberInput from 'src/Components/CardNumberInput';
import ValidThruInput from 'src/Components/ValidThruInput';



export default function CreditCard() {
  return (
    <ModalBody
      mb={5}
      background='linear-gradient(90deg,rgb(33,113,175) 6%,rgb(9,9,101) 34%,rgb(0,212,212) 100%)'
      border='2px solid lightblue'
      width='55%'
      height='7rem'
      mx='auto'
      borderRadius='0.5rem'
    >
      <Flex alignItems='center' justifyContent='center' margin='7% auto 10%'>
        <Image
          src='https://i.guim.co.uk/img/media/b73cc57cb1d46ae742efd06b6c58805e8600d482/16_0_2443_1466/master/2443.jpg?width=700&quality=85&auto=format&fit=max&s=fb1dca6cdd4589cd9ef2fc941935de71'
          alt='credit card initial logo'
          backgroundColor='white'
          w='10%'
          borderRadius='0.25rem'
          p='0.3rem'
        ></Image>
        <CardNumberInput></CardNumberInput>
      </Flex>
      <Flex
        alignItems='center'
        justifyContent='space-between'
        m='0 auto'
        mb='5%'
        w='100%'
      >
        <Flex
          color='white'
          alignItems='center'
          justifyContent='center'
          fontSize='xs'
        >
          VALID:
          <ValidThruInput></ValidThruInput>
        </Flex>
        <Flex
          color='white'
          alignItems='center'
          justifyContent='center'
          fontSize='xs'
        >
          CVV:
          <Input
            w='60%'
            height='1rem'
            background='white'
            borderRadius='0.25rem'
            textAlign='center'
            ml='2%'
            color='black'
            placeholder='Code'
            fontWeight='700'
          ></Input>
        </Flex>
      </Flex>
    </ModalBody>
  );
}
