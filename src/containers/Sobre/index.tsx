import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Parágrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Sou desenvolvedor front-end com experiência em HTML, CSS (SASS e LESS) e
      JavaScript, incluindo TypeScript e frameworks como React. Sigo as melhores
      práticas de desenvolvimento, como a metodologia BEM e Styled Components,
      para criar aplicações escaláveis e eficientes. Além disso, utilizo
      ferramentas como Redux Toolkit para gerenciamento global de estado e
      otimização de performance.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=pedroluccs&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pedroluccs&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
