import {
  Text,
  Image,
  Flex,
  Stack,
  Heading,
  Box,
  Center,
  VStack,
  ListItem,
  ListIcon,
  List
} from "@chakra-ui/react";
import { useState } from "react";
import "@fontsource/rampart-one"
import "@fontsource/vt323"
import "@fontsource/sacramento"
import { ArrowRightIcon } from "@chakra-ui/icons";

export const Main = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);
  return (
    <Flex
      boxShadow="0px 0px 5px 5px rgba(0,0,0,0.1)"
      borderRadius={'md'}
      bgColor={'#fff8'}
      flexDirection="column"
    >
      <Stack
        spacing={2}
        align={'center'}
        pt={'4'}
      >
        <Heading
          fontFamily={'heading'}
          size={'2xl'}
          textShadow={"0 0 2px #8081, 0 0 3px #8081, 0 0 4px #8081, 0 0 5px #8081, 0 0 6px #8081, 0 0 7px #8081, 0 0 8px #8081"}

        >
          Pablo Jonatan
        </Heading>
        <Box
          borderRadius={'100%'}
          border={'2px solid #0005'}
          backgroundImage={"url('https://data.whicdn.com/images/336000881/original.gif')"}
          backgroundSize={'800px'}
          backgroundRepeat={'repeat'}
          transition={'all 0.1s ease 0s'}
          _hover={{
            cursor: 'no-drop'
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {
            isHovering
              ? (
                <Box
                  bgColor='white'
                  border={'1px solid #0005'}
                  borderRadius="full"
                  m="4"
                  objectFit="cover"
                  boxSize="250px"
                  opacity={'0.8'}
                >
                  <Center>
                    <VStack>
                      <Text
                        mt='5'
                        mb={-5}
                        fontWeight={'bold'}
                        fontFamily={'cursive'}
                        fontSize="5xl"
                      >
                        About me
                      </Text>
                      <Center
                      >
                        <List
                        >
                          <ListItem>
                            <ListIcon as={
                              ArrowRightIcon
                            } color='green.500' />
                            I&#39;m Learning Web3;
                          </ListItem>
                          <ListItem>
                            <ListIcon as={
                              ArrowRightIcon
                            } color='green.500' />
                            I worked with AngularJS;
                          </ListItem>
                          <ListItem>
                            <ListIcon as={
                              ArrowRightIcon
                            } color='green.500' />
                            JavaScript was my 1st lang;
                          </ListItem>
                          <ListItem>
                            <ListIcon as={
                              ArrowRightIcon
                            } color='green.500' />
                            I used to work with Groovy.</ListItem>
                        </List >
                      </Center>
                    </VStack>
                  </Center>
                </Box>
              ) : (
                <Image
                  boxSize="250px"
                  border={'1px solid #0005'}
                  objectFit="cover"
                  src="https://unavatar.io/twitter/pjonatansr"
                  alt="Avatar Pablo Jonatan"
                  borderRadius="full"
                  m="4"
                />
              )
          }
        </Box>
        <Heading
          size='xl'
          fontFamily={'heading2'}
        >
          Software Engineer
        </Heading>
      </Stack >

    </Flex >
  );
}
