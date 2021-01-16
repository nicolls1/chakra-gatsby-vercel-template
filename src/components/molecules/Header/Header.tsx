import React from 'react'
import { Link } from 'gatsby'
import { Flex, Heading, Stack, Text } from '@chakra-ui/react'

const headerLinks = [
  {
    href: '/portfolio',
    label: 'Portfolio',
  },
  {
    href: '/pricing',
    label: 'Preise',
  },
  {
    href: '/about',
    label: 'Über uns',
  },
  {
    href: '/contact',
    label: 'Kontakt',
  },
]

const Header: React.FC = () => {
  return (
    <Flex direction="row" justify="space-between" pt={16}>
      <Link to="/">
        <Heading textStyle="logo">Webeez.</Heading>
      </Link>
      <Stack spacing={5} direction="row" h="fit-content" my="auto">
        {headerLinks.map((link) => (
          <Link to={link.href}>
            <Text textStyle="headerLink">{link.label}</Text>
          </Link>
        ))}
      </Stack>
    </Flex>
  )
}
export default Header
