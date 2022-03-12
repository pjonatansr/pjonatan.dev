import { Link, Text, Accordion, AccordionItem, AccordionButton, Box, AccordionIcon, AccordionPanel, Heading, Flex, VStack } from "@chakra-ui/react";

export const Articles = () => {
  return (
    <VStack
      bgColor={'#fff8'}

    >
      <Heading
      >
        Articles:
      </Heading>
      <Accordion
        defaultIndex={[0]}
        allowToggle

      >
        <AccordionItem
        >
          <h2>
            <AccordionButton>
              <Box flex='1' textAlign='left'>
                <Text
                  fontWeight={'bold'}
                >
                  🇧🇷 Como a comunidade brasileira utiliza o twitter para aprender em público
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
                href="https://dev.to/pjonatansr/como-a-comunidade-brasileira-utiliza-o-twitter-para-aprender-em-publico-345b"
              >
                Neste artigo
              </Link>
              falo sobre o fenômeno do &quot;cc @sseraphini&quot;, que vem contribuindo para o aprendizado em público da chamada &quot;bolha dev&quot; no twitter.
            </Text>

          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </VStack>
  );
}