import { FullButton } from "../../Elements/FullButton";
import styles from "./Footer.module.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export function Footer() {
  return (
    <div className={styles.footer}>
      <FullButton text="Ver repositório Completo" />

      <ul>
        <li>
          <a href="https://github.com/LucasFMarques2">
            <FaGithub size={35} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/lusqueneas/">
            <FaInstagram size={35} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lucasfreitasm/">
            <FaLinkedin size={35} />
          </a>
        </li>
      </ul>
      <a>lucasfreitasm3@hotmail.com</a>
      <p>Lucas Freitas © 2024</p>
    </div>
  );
}
