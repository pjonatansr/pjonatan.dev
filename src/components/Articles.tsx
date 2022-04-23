import { Link, Text, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Heading, Flex, VStack } from "@chakra-ui/react";

export const Articles = () => {
  return (
    <VStack
      mt={'2'}
      bgColor="#fff5"
      borderRadius={'md'}
      boxShadow="0px 0px 5px 5px rgba(0,0,0,0.1)"
      alignItems={'left'}
    >

      <Accordion
        defaultIndex={[0]}
        allowToggle

      >
        <AccordionItem
          border={'none'}
        >
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                <Text
                  fontWeight={'bold'}
                >
                  🇧🇷&nbsp;&nbsp;~ Como a comunidade brasileira utiliza o twitter para aprender em público
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text>
              <Link
                fontWeight={'bold'}
                color='blue.500'
                pr={'1'}
                isExternal
                href="https://dev.to/pjonatansr/como-a-comunidade-brasileira-utiliza-o-twitter-para-aprender-em-publico-345b"
              >
                Neste artigo
              </Link>
              falo sobre o &quot;cc @sseraphini&quot;, que vem contribuindo para o aprendizado em público da {''}
              <Link
                color='blue.500'
                isExternal
                href={'https://twitter.com/search?q=%23bolhadev&src=typed_query'}
              >
                #bolhadev
              </Link> no twitter.
            </Text>

          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack >
  );
}