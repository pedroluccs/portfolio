import Paragrafo from '../Parágrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto3 = () => {
  return (
    <Card>
      <Titulo>Spider-Man Miles Morales</Titulo>
      <Paragrafo tipo="secundario">Landing page feita com Vue.js</Paragrafo>
      <LinkBotao href="https://github.com/pedroluccs/spiderman-beyourself">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto3
