import styles from './NavBar.module.css'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

export function NavBar(){
  return(
    <div className={styles.navbar}>
        <ul>
          <li><Nav.Link href="#Presentation">Apresentação</Nav.Link></li>
          <li><Nav.Link href="#Skills">Habilidades</Nav.Link></li>
          <li><Nav.Link href="#projects">Projetos</Nav.Link></li>
          
        </ul>
        <ul>
          <li><a href="https://github.com/LucasFMarques2"><FaGithub size={35}/></a></li>
          <li><a href="https://www.instagram.com/lusqueneas/"><FaInstagram size={35}/></a></li>
          <li><a href="https://www.linkedin.com/in/lucasfreitasm/"><FaLinkedin size={35}/></a></li>
        </ul>
    </div>
  )
}