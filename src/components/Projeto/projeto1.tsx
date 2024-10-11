import Paragrafo from '../Parágrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto1 = () => {
  return (
    <Card>
      <Titulo>Lista de Tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com React</Paragrafo>
      <LinkBotao href="https://github.com/pedroluccs/lista-de-tarefas">
        Visualizar
      </LinkBotao>
    </Card>
  )
}

export default Projeto1
