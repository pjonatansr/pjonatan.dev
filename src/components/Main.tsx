import { Image, Flex, Stack, Heading } from "@chakra-ui/react";
import { SocialButtons } from './SocialButtons';

export function Main() {
  return <Flex
    alignItems="center"
    flexDirection="column"
    px={'12px'}
  >
    <Stack
      spacing={2}
      align='center'
      backgroundColor='#ffffff50'
      p='4'
    >
      <Heading as='h1' size='3xl' isTruncated>
        Pablo Jonatan
      </Heading>
      <Image
        borderRadius="full"
        boxSize="250px"
        objectFit="cover"
        src="https://unavatar.io/twitter/pjonatansr"
        alt="Pablo Jonatan"
        m="4" />
      <Heading as='h2' size='xl'>
        Software Engineer
      </Heading>
      <SocialButtons />
    </Stack>
  </Flex>;
}
