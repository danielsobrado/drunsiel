import React from 'react'
import { Card, Text } from 'theme-ui'
import Section from '@components/Section'

const Commitment = props => (
  <Section aside title='Say Hi!' {...props}>
    <Card variant='paper'>
      <Text variant='p'>
      Hello there! We're thrilled to be connected with you and help bring your ideas to life.
      </Text>
    </Card>
  </Section>
)

export default Commitment
