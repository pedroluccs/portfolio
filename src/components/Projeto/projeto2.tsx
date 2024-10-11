import Paragrafo from '../Parágrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto2 = () => {
  return (
    <Card>
      <Titulo>Clone Disney+</Titulo>
      <Paragrafo tipo="secundario">
        Clone da landing page do Disney+ utilizando Vue.js
      </Paragrafo>
      <LinkBotao href="https://github.com/pedroluccs/disneyplus_project">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto2
