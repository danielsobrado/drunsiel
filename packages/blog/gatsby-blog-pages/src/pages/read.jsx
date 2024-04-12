import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import { useContext } from 'react';
import { LanguageContext } from '@helpers-blog/useLanguageContext';
import { StaticImage } from 'gatsby-plugin-image'
import { Box, Flex, NavLink } from 'theme-ui'
import { Link } from 'gatsby'

const PageContact = props => {
  const { language } = useContext(LanguageContext);

  const styles = {
    imageWrapperSimple: {
      bg: `omegaLight`,
      display: `inline-block`,
      verticalAlign: `middle`,
      borderRadius: `full`,
      borderStyle: `solid`,
      borderWidth: `md`,
      borderColor: `omegaLight`,
      overFlow: `hidden`,
      opacity: 0.9,
      ':hover': {
        opacity: 1
      }
    },
    sidebar: {
      flexDirection: 'column',
      bg: 'omegaLight',
      p: 3,
      borderRadius: 'lg',
      mb: 4,
    },
    navLink: {
      color: 'omegaDark',
      textDecoration: 'none',
      fontWeight: 'bold',
      p: 2,
      '&:hover': {
        color: 'alpha',
      },
    },
  }

  const englishLinks = [
    { text: 'Start the adventure here', url: '/swords-and-shadows-the-awakening-of-drusniel/' },
    { text: 'Astalor regions', url: '/discovering-the-regions-of-astalor/' },
    { text: 'Magic in Astalor', url: '/magic-in-astalor/' },
    { text: 'Lore', url: '/en/tag/lore/' },
  ];

  const spanishLinks = [
    { text: 'Comienza la aventura aquí', url: '/espadas-y-sombras-el-despertar-de-drusniel/' },
    { text: 'Regiones de Astalor', url: '/descubriendo-las-regiones-de-astalor/' },
    { text: 'Magia en Astalor', url: '/la-magia-en-astalor/' },
    { text: 'Historia y Mitología', url: '/es/tag/historia/' },
  ];

  const links = language === 'es' ? spanishLinks : englishLinks;
  
  let header = "Begin your journey through Astalor here";
  if (language === "es") {
    header = "Inicia tu viaje a través de Astalor aquí";
  }
  
  let subheader = "How to read the blog? Dive into the lore to explore the regions, magic, and races of Astalor, or plunge directly into the adventure, choosing to unravel the lore at your own pace later on.";
  if (language === "es") {
    subheader = "¿Cómo leer el blog? Sumérgete en la mitología para explorar las regiones, la magia y las razas de Astalor, o comienza directamente con la aventura, optando por desentrañar la mitología a tu propio ritmo más adelante.";
  }

  return (
    <Layout {...props}>
      <Seo title='Begin' />
      <Divider />
      <Stack>
        <Main>
          <PageTitle header={header} subheader={subheader} />
          <Divider />
          {links.map((link, index) => (
            <React.Fragment key={index}>
              <NavLink as={Link} to={link.url} sx={styles.navLink}>
                {link.text}
              </NavLink>
              {index < links.length - 1 && ' - '}
            </React.Fragment>
          ))}
          <Box sx={styles.imageWrapperSimple}>
            {/* <StaticImage
              src="https://i.imgur.com/7hDFuhb.png"
              alt="Welcome to Drusniel"
              loading="eager"
            /> */}
            <img src="https://i.imgur.com/7hDFuhb.png" alt="Wellcome to Drusniel" />
          </Box>
        </Main>
      </Stack>
    </Layout>
  )
}

export default PageContact