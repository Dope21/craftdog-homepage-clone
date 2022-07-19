import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react/'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => {
  return (
    <Layout title="creative agency">
      <Container>
        <Title>
          Creative Agency <Badge>2022</Badge>
        </Title>
        <P>A Bootstrap responsive landing page with Semantic HTML</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Bootstrap 5, SCSS, jQuery</span>
          </ListItem>
          <ListItem>
            <Meta>Live</Meta>
            <Link
              href="https://thanasak-demo-creative-agency.netlify.app/"
              target="_blank"
            >
              https://thanasak-demo-creative-agency.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/Dope21/bootstarp-creative-agency"
              target="_blank"
            >
              https://github.com/Dope21/bootstarp-creative-agency
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/creative_01.png" alt="creative" />
        <WorkImage src="/images/works/creative_02.png" alt="creative" />
        <WorkImage src="/images/works/creative_03.png" alt="creative" />
      </Container>
    </Layout>
  )
}

export default Work
