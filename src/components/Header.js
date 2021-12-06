import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Circle, Stack, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex } from '@chakra-ui/react';
import React from 'react'

function Header() {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)")

  return (
    <div>
      <Stack>
        <Circle position="absolute" bg="blue.100" opacity="0.1" w="300px" h="300px" alignSelf="flex-end" />        
        <Flex
          direction={isNotSmallerScreen ? "row" : "column"}
          spacing="200px" p={isNotSmallerScreen ? "32" : "8"}
          alignSelf="flex-start"
        >

          <Box ml={isNotSmallerScreen ? "4" : "16"} alignSelf="flex-start">
            <Text fontSize="5x1" fontWeight="semibold">Hi, I am</Text>
          </Box>

        </Flex>
      </Stack>
    </div>
  )
}

export default Header
