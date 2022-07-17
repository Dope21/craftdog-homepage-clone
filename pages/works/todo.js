import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react/'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layout/article'

const Work = () => {
  return (
    <Layout title="Todo">
      <Container>
        <Title>
          Todo App <Badge>2022</Badge>
        </Title>
        <P>
          A React Todo application, allow user to create and delete task. This
          project also support Dark/Light theme and user authentication.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React.js, Tailwind CSS, Node.js, Express.js, JWT, MySQL</span>
          </ListItem>
          <ListItem>
            <Meta>Live</Meta>
            <Link href="https://tnk-todo-app.netlify.app/">
              https://tnk-todo-app.netlify.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Dope21/react-todo-app">
              https://github.com/Dope21/react-todo-app
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/todo_01.png" alt="todo" />
        <WorkImage src="/images/works/todo_02.png" alt="todo" />
        <WorkImage src="/images/works/todo_03.png" alt="todo" />
      </Container>
    </Layout>
  )
}

export default Work
