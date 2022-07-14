import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react/'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => {
  return (
    <Layout title="cloud">
      <Container>
        <Title>
          Cloud <Badge>2022</Badge>
        </Title>
        <P>A react responsive website with tailwind.css</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React.js, Tailwind CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Live</Meta>
            <Link href="https://thanasak-demo-cloud.netlify.app/">
              https://thanasak-demo-cloud.netlify.app/
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Dope21/react-website-cloud">
              https://github.com/Dope21/react-website-cloud
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/cloud_01.png" alt="cloud" />
        <WorkImage src="/images/works/cloud_02.png" alt="cloud" />
        <WorkImage src="/images/works/cloud_03.png" alt="cloud" />
      </Container>
    </Layout>
  )
}

export default Work
