import {
  Box, Flex, Heading, Text, Image
} from "@chakra-ui/react"

export const About = () => {
  return (
    <Flex
      pt={4}
      minHeight={'92vh'}
      direction={'column'}
      justifyContent={['flex-start', 'center']}
      w={['90%', '90%', '60%', '60%', '60%']}
      h={'fit-content'}
    >
      <Flex
        border={'1px solid #dcdcdcff'}
        borderRadius={'md'}
        boxShadow="0px 0px 5px 5px rgba(0,0,0,0.1)"
        direction={'column'}
        alignItems={'center'}
        p={'1rem'}
        bgColor={'#eaeaeae5'}
      >

        <Heading
          pb={'2rem'}
        >
          About me
        </Heading>

        <Text
          pb={'2rem'}
        >
          7+ years working on web applications, experienced in implementation, testing, deploy and maintenance of software systems and wide expertise about payment methods.
          Proficient in various platforms and languages. Able to effectively self-manage during independent projects, as well as collaborate as part of a productive team. Always looking for challenges that can bring some knowledge.
        </Text>
        <Image
          alt="cool"
          src={'/cool.gif'}
          width={'50%'}
        />

      </Flex>
    </Flex>

  )
}