import { OpacityButton } from "../../Elements/OpacityButton";
import { Cards } from "../../Elements/Cards";
import styles from "./Projects.module.css";
import page from "../../../img/projects/ladingPage.svg";
import porti from "../../../img/projects/portifolio.svg";

export function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <h1>Projetos</h1>
      <Cards
        img={page}
        title="Projeto landPage"
        tecnologia="JavaScript | HTML | CSS"
        description="Projeto criado para tanana, tantantan, blablabla, e cim."
      />
      <Cards
        img={porti}
        title="Projeto landPage"
        tecnologia="JavaScript | HTML | CSS"
        description="Projeto criado para tanana, tantantan, blablabla, e cim."
      />
    </div>
  );
}
