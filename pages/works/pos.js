import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react/'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'
import NextLink from 'next/link'

const Work = () => {
  return (
    <Layout title="pos">
      <Container>
        <Title>
          Restaurant Management <Badge>2021-2022</Badge>
        </Title>
        <P>
          A POS dashboard application for a restaurant. Has features to manage
          users, menu, orders, payments, and report sales. This application
          works with a{' '}
          <NextLink href="/works/e-commerce">
            <Link>Restaurant Website</Link>
          </NextLink>{' '}
          to support online orders from customers.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>HTML, SCSS, jQuery, PHP, MySQL</span>
          </ListItem>
          <ListItem>
            <Meta>Live</Meta>
            Not available
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Dope21/restaurant-management">
              https://github.com/Dope21/restaurant-management
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/pos_01.png" alt="pos" />
        <WorkImage src="/images/works/pos_02.png" alt="pos" />
        <WorkImage src="/images/works/pos_03.png" alt="pos" />
      </Container>
    </Layout>
  )
}

export default Work
