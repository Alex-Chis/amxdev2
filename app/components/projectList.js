import "./projectList.css";
import { projectList } from "./credentials";

export default function ProjectList() {
  return (
    <div className="project-list-container">
      <h1>Projects</h1>
      <ul>
        {projectList.map((project) => (
          <li key={project.name}>
            <a href={project.link}>{project.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
