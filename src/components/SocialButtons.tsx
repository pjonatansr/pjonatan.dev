import { Flex, HStack, StackDivider, ButtonGroup } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

export const SocialButtons = () => {
  return (<Flex
    mt='2'
    flexDirection="column"
    bgColor="#fff8"
    borderRadius={'md'}
    boxShadow="0px 0px 5px 5px rgba(0,0,0,0.1)"
  >
    <HStack
      p={2}
      spacing={2}
      justify="center"

      divider={
        <StackDivider borderColor='blackAlpha.500' />
      }
    >
      <SocialIcon url="mailto:this.pablo@gmail.com" />
      <ButtonGroup>
        <SocialIcon url="https://www.linkedin.com/in/pjrocha/?locale=en_US" />
        <SocialIcon url="https://github.com/pjonatansr" />
        <SocialIcon url="https://twitter.com/pjonatansr" />
      </ButtonGroup>
    </HStack>
  </Flex>);
};
