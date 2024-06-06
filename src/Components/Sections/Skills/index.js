import styles from './Skills.module.css'

import iconJs from '../../../img/iconJs.svg'
import iconHTML from '../../../img/iconHTML.svg'
import iconCSS from '../../../img/iconCSS.svg'
import iconReact from '../../../img/iconReact.svg'
import iconWordPress from '../../../img/iconWordPress.svg'



export function Skills(){
  return(
    <div className={styles.skills} id='Skills'>
      <h1>Habilidades</h1>
      <p>Conheça um pouco das minhas principais habilidades e conhecimentos</p>
      <div>
        <img src={iconJs} alt="Icon do javaScript" />
        <img src={iconHTML} alt="Icon do html" />
        <img src={iconCSS} alt="Icon do CSS" />
        <img src={iconReact} alt="Icon do React" />
        <img src={iconWordPress} alt="Icon do WordPress" />
      </div>
    </div>
  )
}