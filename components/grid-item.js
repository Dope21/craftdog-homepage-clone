import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay, Flex } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="grid-item-thumbnail"
          placeholder="blur"
          loading="lazy"
        />
        <LinkOverlay href={href} target="_blank">
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </Box>
  )
}

export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  return (
    <Box w="100%" align="center">
      <NextLink href={`/works/${id}`}>
        <LinkBox cursor="pointer">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
          <LinkOverlay href={`/works/${id}`}>
            <Text mt={2} fontSize={20}>
              {title}
            </Text>
          </LinkOverlay>
          <Text fontSize={14}>{children}</Text>
        </LinkBox>
      </NextLink>
    </Box>
  )
}

export const SkillGridItem = ({ children, icon }) => {
  return (
    <Flex align="center" jutifly="center" direction="column">
      <Box position="relative" minW="50px" minH="50px">
        <Image src={icon} layout="fill" objectFit="contain" alt="skill-icon" />
      </Box>
      <Text mt={2} textAlign="center">
        {children}
      </Text>
    </Flex>
  )
}

export const GridItemStyle = () => {
  return (
    <Global
      styles={`
        .grid-item-thumbnail {
          border-radius: 12px;
        }
      `}
    />
  )
}
