import { FaArrowRight } from 'react-icons/fa'
import { Container, Content, Infos, Name, Function, Intro, LinkProjects, Logo, Img } from '../../styles/indexStyle'
import Link from 'next/link'

export default function Home() {
  return (
    <Container>
      <Content>
        <Infos>
          <Name>Olá, sou Silmara</Name>
          <Function>FullStack Developer</Function>
          <Intro>Graduanda em Análise e Desenvolvimento de Sistemas
          </Intro>
          <Link href="projects">
            <LinkProjects>PROJETOS <FaArrowRight /></LinkProjects>
          </Link>
        </Infos>
        <Logo>
          {/* <Img src="" alt="" /> */}
        </Logo>
      </Content>
    </Container>
  )
}
