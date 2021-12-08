import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Circle, Stack, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Image } from '@chakra-ui/image';
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

          <Box ml={isNotSmallerScreen ? "0" : "16"} alignSelf="flex-start">
            <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
            <Text 
              bgColor="blue.200" 
              bgClip="text"
              fontSize="7xl" 
              fontWeight="bold"               
            >
              Xybercommander
            </Text>
            <Text bgColor={isDark ? "gray.200" : "gray.500"} bgClip="text">
              Highly motivated self taught CS undergrad eager to learn new technologies to make
              modern mobile and web applications. I am confident with my ability to provide
              optimized code to make outstanding applications with the latest frameworks.
            </Text>
            <Button mt={8} colorScheme="blue" onClick={() => window.open("https://github.com/xybercommander")}>My Github</Button>
          </Box>
          <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"} mb={isNotSmallerScreen ? "0" : "12"} borderRadius="full" backgroundColor="transparent" boxShadow="lg" boxSize="300px" src="https://avatars.githubusercontent.com/u/38849650?v=4" />

        </Flex>
      </Stack>
    </div>
  )
}

export default Header
