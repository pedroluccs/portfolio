import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Parágrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem Paragrafo dolor sit amet consectetur adipisicing elit. Laudantium
      neque deserunt quis dolorum rem! Sequi, numquam earum similique quaerat
      beatae tenetur porro laudantium suscipit id architecto dolorum nulla
      deleniti aperiam!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=pedroluccs&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=pedroluccs&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
