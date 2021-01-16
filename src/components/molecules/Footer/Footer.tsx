import React from 'react'
import { Link } from 'gatsby'
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'

const Footer: React.FC = () => {
  return (
    <Box position="absolute" bottom="0" right="0" left="0">
      <Box
        bgColor="gray.500"
        opacity=".34"
        pos="absolute"
        top="0"
        right="0"
        bottom="0"
        left="0"
      />
      <Container maxW="6xl" opacity="1" pos="relative">
        <SimpleGrid columns={3} w="full" pb={8} pt={5}>
          <Stack spacing={6} direction="row" justifySelf="left" my="auto">
            <Text textStyle="footerLink">DATENSCHUTZ</Text>
            <Text textStyle="footerLink">IMPRESSUM</Text>
          </Stack>
          <Heading textStyle="logo" fontSize="4xl" justifySelf="center">
            Webeez.
          </Heading>
          <Text textStyle="footerLink" justifySelf="right" my="auto">
            Icons
          </Text>
        </SimpleGrid>
      </Container>
    </Box>
  )
}
export default Footer
