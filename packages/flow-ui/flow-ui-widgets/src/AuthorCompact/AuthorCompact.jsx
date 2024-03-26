import React from 'react'
import { Link as GLink } from 'gatsby'
import { Box, Heading, Card, Link } from 'theme-ui'
import Navigation from '@components/Navigation'
import Section from '@components/Section'
import Avatar from '@components/Avatar'
import attachSocialIcons from '@helpers/attachSocialIcons'
import { useContext } from 'react';
import { LanguageContext } from '@helpers-blog/useLanguageContext';

const styles = {
  wrapper: {
    textAlign: `center`
  },
  avatarWrapper: {
    mb: 4
  },
  title: {
    color: `omegaDark`
  }
}

const AuthorCompact = ({ author, omitSocial, locale, ...props }) => {
  if (!author) return ''
  const { language } = useContext(LanguageContext);

  return (
    <Section aside title='The Author' {...props}>
      <Card variant='paper'>
        <Box sx={styles.wrapper}>
          {author.thumbnail && (
            <Box sx={styles.avatarWrapper}>
              <Link as={GLink} to={`/${language}${author.slug}`} aria-label={author.name}>
                <Avatar
                  avatar={author.thumbnail}
                  alt={author.name}
                  withPattern
                />
              </Link>
            </Box>
          )}
          <Link as={GLink} to={`/${language}${author.slug}`}>
            <Heading variant='h3'>{author.name}</Heading>
          </Link>
          <Heading variant='h4' sx={styles.title}>
            {author.title}
          </Heading>
          {!omitSocial && author.social && (
            <Navigation
              variant='horizontal'
              items={attachSocialIcons(author.social)}
              iconOnly
            />
          )}
        </Box>
      </Card>
    </Section>
  )
}

export default AuthorCompact
