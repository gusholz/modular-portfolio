"use client";
import styles from "./themeSelector.module.css";
import NextImage from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeSelector(props) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !theme) {
    return (
      <div className={styles.container}>
        <span className={styles.icon}>
          <NextImage
            width={32}
            height={32}
            src={"/static/images/sun.png"}
            alt="Light mode button"
          />
        </span>
        <span className={styles.icon}>
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

  return (
    <div className={styles.container}>
      <span
        className={`${
          theme === "dark" ? styles.nonSelectedIcon : styles.selectedIcon
        } ${styles.icon}`}
        onClick={() => setTheme("light")}
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
          theme === "dark" ? styles.selectedIcon : styles.nonSelectedIcon
        } ${styles.icon}`}
        onClick={() => setTheme("dark")}
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
