import { Heading, Skeleton, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';

const getHeader = () => (
  <Tr
  >
    {[
      '#️⃣',
      'Status',
      'Title',
      'Language',
      'Created',
      'Closed'
    ].map((description, index) => {
      return (
        <Th
          fontSize={'1.25rem'}
          fontWeight={'semibold'}
          fontFamily={'sans-serif'}
          key={`${description}-${index}`}
          isNumeric={index === 0}
          position={'sticky'}
          top={0}
          bg={'#eaeaeaff'}
        >
          {description}
        </Th>
      );
    })}
  </Tr>
);

export const PullRequests = ({ pullRequests = [], hasErrors }: { pullRequests: any[]; hasErrors: boolean }) => {
  const prArray: any[] = [];
  for (const pullRequest of pullRequests) {
    const { title, url, number, merged, created_at, closed_at, language
    } = pullRequest;
    const prUrl = url
      .replace(/api.|repos\/|(pull)s/g, "$1");

    prArray.push(
      <Tr
        key={`pr-${number}`}
      >
        <Td
          isNumeric
        >
          #{`${number}`}
        </Td>
        <Td
          textAlign={'center'}
        >
          {merged ? "💯" : "🤡"}
        </Td>
        <Td color={merged ? '#00aa00' : '#ff0000'}>
          <Link href={prUrl as string} isExternal>
            {title}
          </Link>
        </Td>
        <Td>
          {language}
        </Td>
        <Td>
          {new Date(created_at).toLocaleString()}
        </Td>

        <Td>
          {new Date(closed_at).toLocaleString()}
        </Td>
      </Tr>
    );
  }


  return (
    <TableContainer
      h={'80vh'}
      maxW={'90vw'}
      overflowY={'auto'}
    >
      <Heading
        fontFamily={'sans-serif'}
        textAlign={'center'}
      >
        {hasErrors ? 'Failed to load pull requests' : ''}
      </Heading>
      <Skeleton isLoaded={!hasErrors} minH={'50vh'}>
        <Table variant='striped'
          colorScheme='blackAlpha'
          bgColor={'#eaeaeaff'}
          fontFamily={'sans-serif'}
        >
          <TableCaption
            placement={'top'}
            top={0}
            p={0}
            m={0}
            fontSize={'1.25rem'}
            bgColor={'#eaeaeaff'}
            fontFamily={'sans-serif'}
            color={'black'}
          >
            Pull Requests at ccsseraphini repo
          </TableCaption>
          <Thead
          >
            {getHeader()}
          </Thead>
          <Tbody
          >
            {prArray}
          </Tbody>
        </Table>
      </Skeleton>
    </TableContainer >

  );
};




