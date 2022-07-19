import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react/'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => {
  return (
    <Layout title="Weather">
      <Container>
        <Title>
          Weather App <Badge>2022</Badge>
        </Title>
        <P>
          A weather report app from OpenWeatherMap API. Support Server Side
          Rendering, Searchbox filter, and smooth fade in animation.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Tailwind CSS, Framer motion</span>
          </ListItem>
          <ListItem>
            <Meta>Live</Meta>
            <Link
              href="https://weather-app-three-theta.vercel.app/"
              target="_blank"
            >
              https://weather-app-three-theta.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/Dope21/next-weather-app"
              target="_blank"
            >
              https://github.com/Dope21/next-weather-app{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/weather_01.png" alt="weather" />
        <WorkImage src="/images/works/weather_02.png" alt="weather" />
        <WorkImage src="/images/works/weather_03.png" alt="weather" />
      </Container>
    </Layout>
  )
}

export default Work
