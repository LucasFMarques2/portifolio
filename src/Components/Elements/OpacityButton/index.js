import styles from './OpacityButton.module.css'

export function OpacityButton({text, link}){
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