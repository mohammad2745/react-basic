import styles from "./style.module.css";

export function Username(props) {
  return (
    <div className={styles.username}>
      <b>Username: </b>
      <span>{ props.username }</span>
      <br />
    </div>
  )
}