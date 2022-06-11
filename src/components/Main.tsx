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
          backgroundImage={"url('/stars.gif')"}
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

                <Image
                  boxSize="250px"
                  border={'1px solid #0005'}
                  objectFit="cover"
                  borderRadius="full"
                  m="4"
                  src={'/beach.jpg'}
                  alt="cool"
                />
              ) : (
                <Image
                  boxSize="250px"
                  border={'1px solid #0005'}
                  objectFit="cover"
                  borderRadius="full"
                  m="4"
                  src="/avatar.jpg"
                  alt="Avatar Pablo Jonatan"
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
