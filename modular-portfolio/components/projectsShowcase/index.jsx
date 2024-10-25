import Project from "@/components/project";
import styles from "./projectsShowcase.module.css";

const defaultPath = "/static/images/";
const defaultFileFormat = ".png";

export default function ProjectsShowcase({ projects }) {
  return (
    <div className={styles.projectsContainer}>
      {projects.map((project, index) => (
        <Project
          key={index}
          projectName={project.projectName}
          projectDescription={project.projectDescription}
          imageName={`${defaultPath}${project.imageName}${defaultFileFormat}`}
          tags={project.tags}
        />
      ))}
    </div>
  );
}
