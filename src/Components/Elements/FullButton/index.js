import styles from './FullButton.module.css'

export function FullButton({text, link}){
  const redirectLinkdIn = (event) => {
    event.preventDefault();
    window.location.href = link;
  };

  return(
    <div className={styles.btn}>
      <button onClick={redirectLinkdIn}>{text}</button>
    </div>
  )
}