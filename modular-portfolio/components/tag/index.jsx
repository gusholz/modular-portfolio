import styles from "./tag.module.css";

export default function Tag(props) {
  return (
    <div className={`${styles.tag} ${styles[props.tagName]}`}>
      {props.tagName}
    </div>
  );
}
