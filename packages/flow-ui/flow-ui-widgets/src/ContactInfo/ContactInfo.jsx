import React, { useContext } from 'react'
import { Card, Text, IconButton } from 'theme-ui'
import { FaPhone, FaEnvelope, FaLocationArrow } from 'react-icons/fa'
import Section from '@components/Section'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'
import { LanguageContext } from '@helpers-blog/useLanguageContext';

const ContactInfo = () => {
  const { phone, address, email } = useSiteMetadata()
  const { language } = useContext(LanguageContext);

  const texts = {
    en: {
      title: 'Advertise With Us',
      interest: 'Interested in working together?',
      dropEmail: 'Drop an email! We will get back to you as soon as possible.',
    },
    es: {
      title: 'Anunciate con nosotros',
      interest: '¿Interesado en trabajar juntos?',
      dropEmail: '¡Envíanos un correo electrónico! Nos pondremos en contacto contigo lo antes posible.',
    },
  };

  const { title, interest, dropEmail } = texts[language];

  return (
    <Section aside title={title}>
      <Card variant='paper'>
        <Text variant='p'>{interest}</Text>
        <Text variant='p'>{dropEmail}</Text>
        {phone && (
          <Text>
            <IconButton variant='simple' role='presentation'>
              <FaPhone />
            </IconButton>
            {phone}
          </Text>
        )}
        {email && (
          <Text>
            <IconButton variant='simple' role='presentation'>
              <FaEnvelope />
            </IconButton>
            {email}
          </Text>
        )}
        {address && (
          <Text>
            <IconButton variant='simple' role='presentation'>
              <FaLocationArrow />
            </IconButton>
            {address}
          </Text>
        )}
      </Card>
    </Section>
  )
}

export default ContactInfo