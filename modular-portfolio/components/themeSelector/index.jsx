import styles from "./themeSelector.module.css";
import NextImage from "next/image";

export default function ThemeSelector(props) {
  return (
    <div className={styles.container}>
      <span
        className={`${
          props.isDarkModeActive ? styles.nonSelectedIcon : styles.selectedIcon
        } ${styles.icon}`}
        onClick={() => props.handleThemeToggle("light")}
      >
        <NextImage
          width={32}
          height={32}
          src={"/static/images/sun.png"}
          alt="Light mode button"
        />
      </span>
      <span
        className={`${
          props.isDarkModeActive ? styles.selectedIcon : styles.nonSelectedIcon
        } ${styles.icon}`}
        onClick={() => props.handleThemeToggle("dark")}
      >
        <NextImage
          width={32}
          height={32}
          src={"/static/images/moon.png"}
          alt="Dark mode button"
        />
      </span>
    </div>
  );
}
