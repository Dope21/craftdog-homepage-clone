import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button,
  List,
  ListItem,
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layout/article'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoGithub, IoLogoGoogle, IoLogoLinkedin } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          m={6}
          align="center"
        >
          Hello, Welcome to my Portfolio!
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Thanasak Limsila
            </Heading>
            <p>Full Stack Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/thanasak.png"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About me
          </Heading>
          <Paragraph>
            I'm a developer based in Thailand with a passion for building web
            application focused on beautiful and professional design while
            writing clean code. I love problem solving and learning new things
            to improve my skills.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>2001</BioYear>
            Born in Chumphon, Thailand.
          </BioSection>
          <BioSection>
            <BioYear>2022</BioYear>
            Completed the Diploma of Vocational Education in{' '}
            <Link>Information and Communication Technology</Link> from Chumphon
            Technical College
          </BioSection>
          <BioSection>
            <BioYear>2022 to present</BioYear>
            Currnetly studying in Bachelor degree of{' '}
            <Link>Computer Engineering</Link> at KMIT university in Bangkok
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Reading books, Music, and Playing video game</Paragraph>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Socials
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/Dope21" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @Dope21
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="linkedin.com/in/thanasak-limsila-99a814225"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  @Thanasak Limsila
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=thanasaklimsila%40gmail.com&authuser=0"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGoogle />}
                >
                  thanasaklimsila@gmail.com
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
