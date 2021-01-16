import React from 'react'
import { Box, Container } from '@chakra-ui/react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import './layout.css'

const Layout: React.FC = ({ children }) => {
  return (
    <Box w="full" h="full" minH="100vh" bgColor="darkBlue.500">
      <Container maxW="6xl">
        <Header />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}
export default Layout
