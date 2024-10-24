import styles from "./languageSelector.module.css";

export default function LanguageSelector(props) {
  return (
    <div className={styles.container}>
      <span
        className={`${
          props.selectedLanguage === "en"
            ? styles.selectedIcon
            : styles.nonSelectedIcon
        } ${styles.icon}`}
        onClick={() => props.handleLanguageChange("en")}
      >
        <h1 className={styles.h1}>En</h1>
      </span>
      <span
        className={`${
          props.selectedLanguage === "en"
            ? styles.nonSelectedIcon
            : styles.selectedIcon
        } ${styles.icon}`}
        onClick={() => props.handleLanguageChange("pt")}
      >
        <h1 className={styles.h1}>Pt</h1>
      </span>
    </div>
  );
}
