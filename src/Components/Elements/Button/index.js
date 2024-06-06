import styles from './Button.module.css'

export function Button({name, link}){
    const redirectGit = (event) => {
        event.preventDefault();
        window.location.href =link;
      };
   
    return(
        <div className={styles.button}>
            <button onClick={redirectGit}>{name}</button>
            
        </div>
    )
}