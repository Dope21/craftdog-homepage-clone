import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbWeather from '../public/images/works/weather_eyecatching.png'
import thumbTodo from '../public/images/works/todo_eyecatching.png'
import thumbEcom from '../public/images/works/ecom_eyecatching.png'
import thumbPos from '../public/images/works/pos_eyecatching.png'
import thumbCreative from '../public/images/works/creative_eyecatching.png'
import thumbCloud from '../public/images/works/cloud_eyecatching.png'

const Works = () => (
  <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Web Application
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="weather"
            title="Weather App"
            thumbnail={thumbWeather}
          >
            A weather report app from OpenWeatherMap API
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem id="todo" title="Todo App" thumbnail={thumbTodo}>
            A react todo app with user authentication supported by node.js
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="e-commerce"
            title="Restaurant Website"
            thumbnail={thumbEcom}
          >
            An E-commerce website for a restaurant
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="pos"
            title="Restaurant Management"
            thumbnail={thumbPos}
          >
            A POS dashboard application for a restaurant
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Responsive Website
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem
            id="creative"
            title="Creative Agency"
            thumbnail={thumbCreative}
          >
            Bootstrap responsive landing page with Semantic HTML
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="cloud" title="Cloud" thumbnail={thumbCloud}>
            A react responsive website using Tailwind.css
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
