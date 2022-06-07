import { Box, Link } from '@chakra-ui/react'
import React from 'react'

interface Props {
  current: string
}

export const Nav = ({ current }: Props) => {
  return (
    <Box
      display={'flex'}
      top={'0'}
      position="sticky"
      bgColor={'#eaeaea75'}
      borderBottom={'1px solid #ccc'}
      justifyContent={'center'}
      alignItems={'center'}
      height={'8vh'}

    >
      {
        ['Home', 'About'] //'Resume',
          .filter((page) => page !== current)
          .map((link, index) => {
            return (
              <Box
                key={index}
                p={'1rem'}
                fontWeight={'bold'}
                fontFamily={'heading2'}
                fontSize={'2.5rem'}
                color={'black'}
              >

                <Link
                  href={`/${link.toLowerCase()}`}
                >{link}</Link>
              </Box>
            )
          }, [])
      }

    </Box>
  )
}
