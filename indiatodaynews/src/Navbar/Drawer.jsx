import { useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useContext } from 'react'
 import { AppContext } from '../Context/AppContext'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    
    Stack,
    Box,
    FormLabel,
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    Select, 
    Textarea
  } from '@chakra-ui/react'
import {AddIcon} from '@chakra-ui/icons'
import {useNavigate} from "react-router-dom"

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginUser, authState } = useContext(AppContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault()
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })
      .then((res) => res.json())
      .then((res) => {
        if(res.token){
          loginUser(res.token);
          navigate("/myfeed")
        }
        
      })
      .catch((err) => {
        console.log(err)
      });
    };
    return (
      <>
        <Button leftIcon={<AddIcon />} colorScheme='red.500' variant='outline' onClick={onOpen}>
          Login
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px'>
              Create a new account
            </DrawerHeader>
      <form onSubmit={handleSubmit}>
      <DrawerBody>
              <Stack spacing='24px'>
                 
                <Box>
                  <FormLabel htmlFor='username'>Name</FormLabel>
                  <Input
                    
                    ref={firstField}
                    id='username'
                    placeholder='Please enter user Name'
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor='useremail'>Email</FormLabel>
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    ref={firstField}
                    id='useremail'
                    type='email'
                    placeholder='Please enter user Email'
                  />
                </Box>
                <Box>
                  <FormLabel htmlFor='userpassword'>Password</FormLabel>
                  <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    ref={firstField}
                    id='userpassword'
                    placeholder='Please enter user Password'
                  />
                </Box>
  
                <Box>
                  <FormLabel htmlFor='owner'>Select Country</FormLabel>
                  <Select id='owner' defaultValue='india'>
                    <option value='india'>India</option>
                    <option value='usa'>USA</option>
                  </Select>
                </Box>
  
               
              </Stack>
            </DrawerBody>
  
            <DrawerFooter borderTopWidth='1px'>
              {/* <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button> */}
              <Button colorScheme='blue' type="submit">Submit</Button>
            </DrawerFooter>
        </form> 
           
          </DrawerContent>
        </Drawer>
      </>
    )
  }

  export default DrawerExample