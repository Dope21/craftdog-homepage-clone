import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { SkillGridItem } from '../components/gird-item'
import Layout from '../components/layout/article'
import Section from '../components/section'

const Skills = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Skills
        </Heading>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Frontend
          </Heading>
          <SimpleGrid columns={[3, 4, 5]} spacing={2}>
            <SkillGridItem icon={'/images/skills/js.png'}>
              JavaScript
            </SkillGridItem>
            <SkillGridItem icon={'/images/skills/jq.png'}>jQuery</SkillGridItem>
            <SkillGridItem icon={'/images/skills/react.png'}>
              React.js
            </SkillGridItem>
            <SkillGridItem icon={'/images/skills/next.png'}>
              Next.js
            </SkillGridItem>
            <SkillGridItem icon={'/images/skills/b5.png'}>
              Bootstrap 5
            </SkillGridItem>
            <SkillGridItem icon={'/images/skills/sass.png'}>
              SASS/SCSS
            </SkillGridItem>
            <SkillGridItem icon={'/images/skills/tailwind.png'}>
              Tailwind
            </SkillGridItem>
            <SkillGridItem icon={'/images/skills/chakra.png'}>
              Chakra UI
            </SkillGridItem>
            <SkillGridItem icon={'/images/skills/framer.png'}>
              Framer Motion
            </SkillGridItem>
            <SkillGridItem icon={'/images/skills/three.png'}>
              Three.js
            </SkillGridItem>
          </SimpleGrid>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Backend
          </Heading>
          <SimpleGrid columns={[3, 4, 5]} spacing={2}>
            <SkillGridItem icon={'/images/skills/php.png'}>PHP</SkillGridItem>
            <SkillGridItem icon={'/images/skills/mysql.png'}>
              mySQL
            </SkillGridItem>
            <SkillGridItem icon={'/images/skills/node.png'}>
              Node.js
            </SkillGridItem>
          </SimpleGrid>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Other
          </Heading>
          <SimpleGrid columns={[3, 4, 5]} spacing={2}>
            <SkillGridItem icon={'/images/skills/git.png'}>Git</SkillGridItem>
            <SkillGridItem icon={'/images/skills/figma.png'}>
              Figma
            </SkillGridItem>
            <SkillGridItem icon={'/images/skills/ps.png'}>
              Photoshop
            </SkillGridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Skills
