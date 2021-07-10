import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormLabel,
  FormControl,
  Input,
  Button,
  Textarea,
} from "@chakra-ui/react";

const NewThreadModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Thread</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>Subject</FormLabel>
            <Input placeholder="Subject" />
          </FormControl>
          <FormControl mt={2}>
            <FormLabel>Initial Post</FormLabel>
            <Textarea placeholder="Initial post" />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} colorScheme="blue" mr={3}>
            Add
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NewThreadModal;
