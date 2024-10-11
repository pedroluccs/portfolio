import Paragrafo from '../Parágrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto4 = () => {
  return (
    <Card>
      <Titulo>Calculadora de IMC</Titulo>
      <Paragrafo tipo="secundario">
        Calculadora de IMC feita com Vue.js
      </Paragrafo>
      <LinkBotao href="https://github.com/pedroluccs/imc-calculator">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto4
