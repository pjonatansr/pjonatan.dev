import { Flex, HStack, StackDivider, ButtonGroup } from "@chakra-ui/react";
import { SocialIcon } from "react-social-icons";

export const SocialButtons = () => {
  return <Flex
    p="1"
    flexDirection="column"
  >
    <HStack
      spacing='2'
      divider={
        <StackDivider borderColor='blackAlpha.500' />
      }
    >
      <ButtonGroup>
        <SocialIcon url="mailto:this.pablo@gmail.com" />
      </ButtonGroup>
      <ButtonGroup>
        <SocialIcon url="https://www.linkedin.com/in/pjrocha/?locale=en_US" />
        <SocialIcon url="https://github.com/pjonatansr" />
        <SocialIcon url="https://twitter.com/pjonatansr" />
      </ButtonGroup>
    </HStack>
  </Flex>;
};
