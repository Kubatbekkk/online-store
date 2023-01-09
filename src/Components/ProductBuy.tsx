import React, {useState} from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import type { Product } from 'src/Types/ProductType';
import { useDisclosure } from '@chakra-ui/react';
import NumberInput from 'src/Components/NumberInput';
import NameInput from 'src/Components/NameInput';
import EmailInput from 'src/Components/EmailInput';
import DeliveryAddressInput from 'src/Components/DeliveryAddressInput';
import CreditCard from 'src/Components/CreditCardComponent';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

export default function ProductBuy(product: Product) {
  const [formValid, setFormValid] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex
      w='20%'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
    >
      <Box w='90%' fontSize='200%'>
        ${product.price}
        <Button display='block' w='100%' my={5} colorScheme='blue'>
          ADD TO CART
        </Button>
        <Button
          onClick={onOpen}
          display='block'
          w='100%'
          my={5}
          colorScheme='blue'
        >
          BUY NOW
        </Button>
        <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Personal details</ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <NameInput></NameInput>

              <NumberInput></NumberInput>
              <DeliveryAddressInput></DeliveryAddressInput>
              <EmailInput></EmailInput>
            </ModalBody>

            <ModalHeader mb={5}>Credit card details</ModalHeader>
            <CreditCard></CreditCard>

            <ModalFooter>
              <Button margin='0 auto' colorScheme='blue' onClick={onClose}>
                CONFIRM
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Flex>
  );
}
