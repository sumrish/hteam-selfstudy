import {  Container, InputGroup, Card, CardBody, Img, Stack,
  InputRightElement,InputLeftElement,Input, Checkbox, Link, Button, extendTheme, 
  useColorModeValue, FormControl, Center, IconButton} from "@chakra-ui/react";
  import { LockIcon, EmailIcon , ViewIcon, ViewOffIcon} from '@chakra-ui/icons'
  import { useState } from "react";


export default function Login() {
 const cardStyle = {
   opacity: 0.60
 }

 const [showPass, setShowPass] = useState(false);
 const handleShowPass = () => setShowPass(!showPass);

 return (

   <Container 
              bgGradient= 'linear(to-l, #3779B2, gray.400, #D88FBC)' 
              maxWidth='100vw' minHeight="100vh" 
              position={'absolute'}
              alignItems='center'
              >
     <Container maxWidth='50vw' minHeight="20vh" ></Container>
     
       <Container >
         <Card bgColor='#E7DEEA'
               maxWidth='30vw' minHeight="44vh" 
               borderRadius={'30px'} sx={cardStyle} 
               marginStart={16}
               transform="translateY(-50%, -50%)"
               >
                  <Img borderRadius='full' 
             boxSize='150px' alignSelf={'center'}
             src="/img/user.png" alt="user-image" marginTop={-20}
             ></Img>
           <CardBody
           
          //  alignContent='center'
          //  align='center'
            >
           <Container  minHeight="6vh" ></Container>
             <Stack spacing={4}>

              <FormControl id="email">
               <InputGroup>
                 <InputLeftElement
                   pointerEvents='none'
                   color='gray.300'
                   fontSize='1.4em'
                   children={<EmailIcon  color='#1A5276' />}
                 />
                 <Input bg='#1A5276'  marginLeft={10} marginEnd={10} type='email' placeholder='Email ID' textColor={'white'}/>
               </InputGroup>
              </FormControl>

              <FormControl id="password">

               <InputGroup>
                 <InputLeftElement
                   pointerEvents='none'
                   color='gray.300'
                   fontSize='1.2em'
                   children={<LockIcon color='#1A5276'/>}
                 />
                 <Input bg='#1A5276' marginLeft={10} marginEnd={10} type={showPass ? "text" : "password"} placeholder='Password' textColor={'white'} />
                 <InputRightElement>
                    <IconButton
                      size={"sm"}
                      aria-label={"password"}
                      marginEnd={20}
                      icon={ 
                          showPass ? <ViewIcon /> : <ViewOffIcon />
                       }
                       _hover={{
                        bg: "gray.500",
                    }}
                      color = 'gray.300'
                      isRound
                      onClick={handleShowPass}
                      bg={'#1A5276'}
                    />
                </InputRightElement>
               </InputGroup>
              </FormControl>
             </Stack>

             <Stack spacing={28} mt={10} isInline>
                <Checkbox ml={16} size='sm' color="gray.600" colorScheme={"facebook"} borderColor="gray.600" defaultChecked>Remeber me</Checkbox>
                <Link color="gray.600" fontSize={14} fontStyle={'italic'}>Forgot Password?</Link>
             </Stack>

             <Container maxWidth='50vw' minH={4} ></Container>

             <Center h='50px' color='white'>
                <Button width={40} height={10} bg={useColorModeValue("blue.700", "facebook.800")} textColor={"white"}
                 _hover={{
                  bg: "gray.500",
              }} > LOGIN</Button>
            </Center>
            
           </CardBody>
         </Card>
       </Container>
   </Container>
 )
}
