import { Box, Container, Flex, Skeleton, Stack, Text, Tfoot, Th, Tr } from '@chakra-ui/react'
import { getHttpProtocol } from '../getHttpProtocol';
import type { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head'
import { Nav } from '../components/Nav'
import { PullRequests } from '../components/PullRequests';

interface Props {
  hasErrors?: boolean;
  pullRequests?: any[];
}

const OpenSourcePage: NextPage<Props> = ({ pullRequests, hasErrors }: Props) => {
  return (
    <Container>
      <Head>
        <title>Pablo Jonatan | Open Source</title>
      </Head>
      <Flex
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
      >
        <Nav
          current={'open-source'}
        />
        <Flex
          h={'92vh'}
          w={'98vw'}
          direction={'row'}
          justifyContent={'center'}
          alignItems={'center'}
        >

          <PullRequests pullRequests={pullRequests as any} hasErrors={!!hasErrors} />

        </Flex>

      </Flex>
    </Container>
  )
}

export default OpenSourcePage

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { req } = ctx;
  const host = req.headers.host as string;
  const httpProtocol = getHttpProtocol(host);
  const response = await fetch(`${httpProtocol}://${host}/api/github/sibelius/ccsseraphini/pull-requests`);

  if (response.status !== 200) {
    return {
      props: {
        hasError: true
      },
    };
  }

  const pullRequests = await response.json();
  return {
    props: {
      pullRequests,
    },
  };



}

