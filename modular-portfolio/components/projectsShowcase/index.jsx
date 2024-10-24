import Project from "@/components/project";
import styles from "./projectsShowcase.module.css";

export default function ProjectsShowcase() {
  return (
    <div className={styles.projectsContainer}>
      <Project
        projectName={"Gusholz Modules"}
        projectDescription={"an open source component library"}
        tags={["frontend", "backend"]}
      />
      <Project
        projectName={"Gusholz Modules"}
        projectDescription={"an open source component library"}
        tags={["frontend"]}
      />
      <Project
        projectName={"Gusholz Modules"}
        projectDescription={"an open source component library"}
        tags={["backend"]}
      />
    </div>
  );
}
