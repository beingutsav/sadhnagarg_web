import {
    useDisclosure,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    FormControl,
    FormLabel,
    ModalFooter,
    Input,
    FormErrorMessage
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  
  interface ModalProps {
    buttonText: string;
  }
  
  type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  
  const ModalComponent: React.FC<ModalProps> = ({ buttonText }: ModalProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
  
    const [formData, setFormData] = useState<FormData>({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };
  
    const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault();
  
      // Perform validation
      const validationErrors: { [key: string]: string } = {};
      if (!formData.name) {
        validationErrors.name = "Name is required";
      }
      if (!formData.phone) {
        validationErrors.phone = "Phone Number is required";
      }
      if (!formData.email) {
        validationErrors.email = "Email is required";
      }
      // Add more validation rules as needed
  
      // Update the errors state
      setErrors(validationErrors);
  
      // If there are no validation errors, submit the form
      if (Object.keys(validationErrors).length === 0) {
        // Handle form submission logic here
        console.log("Form submitted successfully:", formData);
        onClose(); // Close the modal after successful submission
      }
    };
  
    return (
      <>
        <Button colorScheme="green" size="md" onClick={onOpen}>
          {buttonText}
        </Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Contact Us</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl isInvalid={!!errors.name}>
                <FormLabel>Name</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              </FormControl>
  
              <FormControl mt={4} isInvalid={!!errors.phone}>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  placeholder="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.phone}</FormErrorMessage>
              </FormControl>
  
              <FormControl mt={4} isInvalid={!!errors.email}>
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Message</FormLabel>
                <Input
                  placeholder="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button onClick={ (e : React.FormEvent<HTMLButtonElement>) => handleSubmit(e)} colorScheme="blue" mr={3}>
                Send
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default ModalComponent;
  