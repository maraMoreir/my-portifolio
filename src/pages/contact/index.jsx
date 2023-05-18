import React from 'react'
import { Container, Content } from './style'
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from 'react-icons/fa'
import ItemContact from '../../../components/ItemContact'

export default function Contact() {
  return (
    <Container>
      <Content>
        <ItemContact
          IconFa={FaLinkedin}
          LinkContact="www.linkedin.com/in/maramoreir/"
        />
        <ItemContact
          IconFa={FaInstagram}
          LinkContact="www.instagram.com/maaracantarelli/"
        />
        <ItemContact
          IconFa={FaGithub}
          LinkContact="www.github.com/maraMoreir"
        />
        <ItemContact
          IconFa={FaEnvelope}
          LinkContact="silmara.moreira@actioncsd.com"
        />

      </Content>
    </Container>
  )
}
