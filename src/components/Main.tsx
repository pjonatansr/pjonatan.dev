import { Image, Flex, Stack, Heading, border, background, Box } from "@chakra-ui/react";
import { SocialButtons } from './SocialButtons';
import "@fontsource/rampart-one/400.css"
import "@fontsource/vt323"

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
        pt='4'
      >
        <Heading
          fontFamily={'heading'}
          size={'2xl'}
          style={{
            "textShadow": "0 0 2px #8085, 0 0 3px #8085, 0 0 4px #8085, 0 0 5px #8085, 0 0 6px #8085, 0 0 7px #8085, 0 0 8px #8085"
          }}
        >
          Pablo Jonatan
        </Heading>
        <Box
          style={{
            borderRadius: '100%',
            border: '2px solid #0005',
            backgroundImage: "url('https://data.whicdn.com/images/336000881/original.gif')",
            backgroundSize: '800px',
            backgroundRepeat: 'repeat'
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
            border={'1px solid #0005'}
            objectFit="cover"
            src="https://unavatar.io/twitter/pjonatansr"
            alt="Avatar Pablo Jonatan"
            borderRadius="full"
            m="4"
          />
        </Box>
        <Heading size='xl' fontFamily={'heading2'}>
          Software Engineer
        </Heading>
        <SocialButtons />
      </Stack >
    </Flex >
  );
}
