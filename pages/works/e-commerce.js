import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react/'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => {
  return (
    <Layout title="e-commerce">
      <Container>
        <Title>
          Restaurant Website <Badge>2021-2022</Badge>
        </Title>
        <P>
          A E-commerce website for a restaurant. Users can register and login to
          order food online through this website.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Bootstrap 5, SCSS, jQuery, PHP, MySQL</span>
          </ListItem>
          <ListItem>
            <Meta>Live</Meta>
            Not available
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              href="https://github.com/Dope21/restaurant-management"
              target="_blank"
            >
              https://github.com/Dope21/restaurant-management
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/ecom_01.png" alt="ecom" />
        <WorkImage src="/images/works/ecom_02.png" alt="ecom" />
        <WorkImage src="/images/works/ecom_03.png" alt="ecom" />
      </Container>
    </Layout>
  )
}

export default Work
