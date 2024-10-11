import Paragrafo from '../Parágrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto6 = () => {
  return (
    <Card>
      <Titulo>Página de Evento</Titulo>
      <Paragrafo tipo="secundario">Landing page de evento</Paragrafo>
      <LinkBotao href="https://github.com/pedroluccs/landing-page-birthday">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto6
