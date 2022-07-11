import Head from 'next/head'
import NoSsr from '../no-ssr'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pd={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Thanasak Limsila - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        {children}
      </Container>
    </Box>
  )
}

export default Main
