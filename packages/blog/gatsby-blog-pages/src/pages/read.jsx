import React from 'react'
import { Layout, Stack, Main, Sidebar } from '@layout'
import PageTitle from '@components/PageTitle'
import Divider from '@components/Divider'
import Seo from '@widgets/Seo'
import ContactForm from '@widgets/ContactForm'
import ContactInfo from '@widgets/ContactInfo'
import Commitment from '@widgets/Commitment'
import { useContext } from 'react';
import { LanguageContext } from '@helpers-blog/useLanguageContext';

const PageContact = props => {
  const { language } = useContext(LanguageContext);
  
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
          <img src="https://i.imgur.com/7hDFuhb.png" alt="Wellcome to Drusniel" />
        </Main>
      </Stack>
    </Layout>
  )
}

export default PageContact