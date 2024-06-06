import styles from "./Presentation.module.css";
import { FullButton } from '../../Elements/FullButton';

export function Presentation() {
  
  return (
    <div className={styles.presentation} id="Presentation">
      <p>
        <strong>Bem-vindo ao meu Portfólio</strong>
      </p>
      <h1>Olá, eu sou o Lucas Freitas</h1>
      <p>
        Graduado em Análise e Desenvolvimento de Sistemas, especializado em
        criação de sites. Possuo 3 anos de experiência prática, me destaco em
        linguagens e tecnologias como HTML, CSS, JavaScript, React,
        Styled-components e WordPress. Além disso possuo conhecimentos avançados
        em administração de servidores Ubuntu, versionamento com Git e
        gerenciamento de bancos de dados SQL
      </p>

      <FullButton text='Conecte-se comigo!' link='https://www.linkedin.com/in/lucasfreitasm/'/>
    </div>
  );
}
