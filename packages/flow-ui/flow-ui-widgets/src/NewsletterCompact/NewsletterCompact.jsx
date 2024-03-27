import React, { useContext } from 'react';
import { Card, Text } from 'theme-ui';
import NewsletterForm from '@components/NewsletterForm';
import Section from '@components/Section';
import useMailChimp from '@helpers/useMailChimp';
import { LanguageContext } from '@helpers-blog/useLanguageContext';

const NewsletterCompact = (props) => {
  const { language } = useContext(LanguageContext);
  const { handleSubmit, canSubmit, submitting, message, success } = useMailChimp();

  const texts = {
    en: {
      title: 'Newsletter',
      description: 'Make sure to subscribe to our newsletter and be the first to know the news.',
    },
    es: {
      title: 'Boletín informativo',
      description: 'Asegúrate de suscribirte a nuestro boletín y ser el primero en conocer las noticias.',
    },
  };

  const { title, description } = texts[language];

  return (
    <Section aside title={title} {...props}>
      <Card variant="paper">
        <Text variant="p">{description}</Text>
        <NewsletterForm {...{ handleSubmit, canSubmit, submitting, message, success }} />
      </Card>
    </Section>
  );
};

export default NewsletterCompact;