import styles from './Cards.module.css'
import page from '../../../img/projects/ladingPage.svg'
import {OpacityButton} from '../../Elements/OpacityButton'

export function Cards({title, tecnologia,description, img, alt}){
  return(
    <div className={styles.cards}>
      <img src={img}  />
      <section>
        <h3>{title}</h3>
        <p> {tecnologia}</p>
        <p> {description}</p>
        <OpacityButton text="Acesse o repositório"/>
      </section>
    </div>
  )
}