import {
  Box, Flex, Heading, Text, Image
} from "@chakra-ui/react"

export const About = () => {
  return (
    <Flex
      justifyContent={'center'}
      p={'1rem'}
      minHeight={'92vh'}
    >
      <Flex
        justifyContent={'center'}
        bgColor={'#eaeaeae5'}
      >
        <Box
          p={'0.5rem'}
          w={['90%', '80%', '80%', '60%', '60%']}
        >
          <Heading
            textAlign={'center'}
            p={'1rem'}
          >
            About me
          </Heading>

          <Text
            pb={'1rem'}
          >
            7+ years working on web applications, experienced in implementation, testing, deploy and maintenance of software systems and wide expertise about payment methods.
            Proficient in various platforms and languages. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team. Always looking for challenges that can bring some knowledge.
          </Text>
          <Flex
            justifyContent={'center'}
          >

            <Image
              alt="cool"
              src={'/cool.gif'}
            ></Image>
          </Flex>
        </Box>

      </Flex>
    </Flex>
  )
}