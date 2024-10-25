import styles from "./footer.module.css";
import localFont from "next/font/local";

const anonymous = localFont({
  src: "../../public/static/fonts/AnonymousPro-Regular.ttf",
  weight: "600",
});

export default function Footer(props) {
  return (
    <footer className={styles.footer}>
      <h2 className={`${anonymous.className}`}>{props.text}</h2>
    </footer>
  );
}
