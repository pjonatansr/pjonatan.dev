import { Image, Flex, Stack, Heading, border } from "@chakra-ui/react";
import { SocialButtons } from './SocialButtons';

export const Main = () => {
  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      px={'12px'}
    >
      <Stack
        spacing={2}
        align='center'
        p='4'
      >
        <Heading
          size='3xl'
          style={{
            "textShadow": "0 0 2px #fff, 0 0 3px #fff5, 0 0 4px #fff5, 0 0 5px #fff5, 0 0 6px #fff5, 0 0 7px #fff5, 0 0 8px #fff5;"
          }}
        >
          Pablo Jonatan
        </Heading>
        <Flex
          style={{
            backgroundImage:
              'radial-gradient(circle, #f5deb355, #8085), linear-gradient(to bottom, #8085, #f5deb355)',
            backgroundSize: '1px',
            backgroundColor: '#e5e5f7',
            borderRadius: '50%',
            border: '1px solid #8085'
          }}
        >
          <Image
            style={{
              transition: 'all 0.5s ease-in-out 0s'
            }}
            _hover={{
              transform: 'rotateY(180deg)'
            }}
            boxSize="250px"
            border={'1px solid #8085'}
            objectFit="cover"
            src="https://unavatar.io/twitter/pjonatansr"
            alt="Avatar Pablo Jonatan"
            borderRadius="full"

            m="4"
          />
        </Flex>
        <Heading as='h2' size='xl'>
          Software Engineer
        </Heading>
        <SocialButtons />
      </Stack >
    </Flex >
  );
}
