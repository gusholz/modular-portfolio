import Link from "next/link";
import localFont from "next/font/local";
import styles from "./contactSection.module.css";

const anonymous = localFont({
  src: "../../public/static/fonts/AnonymousPro-Regular.ttf",
  weight: "600",
});

export default function ContactSection() {
  return (
    <div className={styles.container}>
      <h1 className={`${anonymous.className}`}>contatos</h1>
      <p className={`${anonymous.className}`}>
        email: gustavobarretohv@live.com
      </p>
      <p className={`${anonymous.className}`}>telefone: (85) 99915-7089</p>
      <Link
        href={"https://www.linkedin.com/in/gustavo-holzmann/"}
        className={`${anonymous.className}`}
      >
        linkedin: /gusholz
      </Link>
    </div>
  );
}
