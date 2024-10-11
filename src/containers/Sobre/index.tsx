import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Parágrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Sou desenvolvedor front-end com experiência em HTML, CSS (SASS e LESS),
      JavaScript, TypeScript e frameworks como React, utilizo boas práticas de
      desenvolvimento como a metodologia BEM e Styled Components para construir
      aplicações escaláveis e eficientes. Também faço uso de ferramentas como
      Redux Toolkit para gerenciamento de estado global e otimização da
      performance.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=pedroluccs&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pedroluccs&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
