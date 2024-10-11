import Projeto1 from '../../components/Projeto/projeto1'
import Projeto2 from '../../components/Projeto/projeto2'
import Projeto3 from '../../components/Projeto/projeto3'
import Projeto4 from '../../components/Projeto/projeto4'
import Projeto5 from '../../components/Projeto/projeto5'
import Projeto6 from '../../components/Projeto/projeto6'
import Titulo from '../../components/Titulo'

import { Lista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Lista>
      <li>
        <Projeto1 />
      </li>
      <li>
        <Projeto2 />
      </li>
      <li>
        <Projeto3 />
      </li>
      <li>
        <Projeto4 />
      </li>
      <li>
        <Projeto5 />
      </li>
      <li>
        <Projeto6 />
      </li>
    </Lista>
  </section>
)

export default Projetos
