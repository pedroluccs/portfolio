import Paragrafo from '../Parágrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto5 = () => {
  return (
    <Card>
      <Titulo>Calculadora</Titulo>
      <Paragrafo tipo="secundario">Calculadora feita com Vue.js</Paragrafo>
      <LinkBotao href="https://github.com/pedroluccs/calculator">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto5
