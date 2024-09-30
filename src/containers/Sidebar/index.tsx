import Avatar from '../../components/Avatar'
import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Parágrafo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Pedro Lucas</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        pedroluccs
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Dev Front End
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
