import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'

interface Props {
  current: string
}

export const Nav = ({ current }: Props) => {
  return (
    <Flex
      pos={'sticky'}
      top={0}
      zIndex={1}
      w={'100vw'}
      bgColor={'#eaeaeaff'}
      borderBottom={'1px solid #ccc'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'8vh'}

    >
      {
        ['home', 'about']//, 'open-source']
          .filter((page) => page !== current)
          .map((link, index) => {
            return (
              <Box
                key={index}
                p={'1rem'}
                fontWeight={'semibold'}
                fontFamily={'heading2'}
                fontSize={'3rem'}
                color={'black'}
              >

                <Link
                  href={`/${link}`}
                >{link}</Link>
              </Box>
            )
          }, [])
      }

    </Flex>
  )
}
