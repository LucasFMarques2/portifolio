import styles from './Cards.module.css'
import page from '../../../img/projects/ladingPage.svg'
import {OpacityButton} from '../../Elements/OpacityButton'
import { useState } from 'react'

export function Cards({title, tecnologia,description, img,}){

  const [info, setInfo] = useState(false)

  function infoOn(){
    setInfo(true)
  }

  function infoOf(){
    setInfo(false)
  }

  return(
    <div onMouseLeave={infoOf} className={styles.cards}>
      <img onMouseEnter={(infoOn)} src={img} />
       {info === true && (
         <section>
           <h3>{title}</h3>
           <p> {tecnologia}</p>
           <p> {description}</p>
            <OpacityButton text="Acesse o repositório"/>
        </section>
       )}
    </div>
  )
}