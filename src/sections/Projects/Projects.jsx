import styles from "./ProjectsStyles.module.css";
import portfolio from "../../assets/2720550.png";
import currency from "../../assets/10826388.png";
import todo from "../../assets/7692809.png";
import router from "../../assets/react-router-logo-png_seeklogo-273846.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={portfolio} link="" h3="Portfolio" p="" />
        <ProjectCard
          src={todo}
          link="https://todolist235.netlify.app/"
          h3="Todo List"
          p=""
        />
        <ProjectCard
          src={router}
          link="https://react-router-0.netlify.app/"
          h3="Page Router"
          p=""
        />
        <ProjectCard
          src={currency}
          link="https://currency-convertor-0.netlify.app/"
          h3="Currency Converter"
          p=""
        />
      </div>
    </section>
  );
}

export default Projects;
