import localFont from "next/font/local";
import styles from "./contentSection.module.css";

const anonymous = localFont({
  src: "../../public/static/fonts/AnonymousPro-Regular.ttf",
  weight: "600",
});

export default function ContentSection(props) {
  return (
    <section className={styles.container}>
      <h3 className={`${anonymous.className} ${styles.contentSectionHeader}`}>
        {props.title}
      </h3>
      {props.content}
    </section>
  );
}
