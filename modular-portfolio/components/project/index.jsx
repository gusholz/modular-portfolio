import NextImage from "next/image";
import styles from "./project.module.css";
import Tag from "@/components/tag";
import localFont from "next/font/local";

const anonymous = localFont({
  src: "../../public/static/fonts/AnonymousPro-Regular.ttf",
  weight: "600",
});

export default function Project(props) {
  return (
    <div>
      <NextImage
        className={`${styles.image}`}
        src={"/static/images/gusmodules.png"}
        width={320}
        height={180}
        alt=""
      />
      <h2 className={`${anonymous.className} ${styles.projectName}`}>
        {props.projectName}
      </h2>
      <span className={`${anonymous.className} ${styles.projectDescription}`}>
        {props.projectDescription}
      </span>
      <div className={styles.tagContainer}>
        {props.tags.map((tag, index) => (
          <Tag key={index} tagName={tag} />
        ))}{" "}
      </div>
    </div>
  );
}
