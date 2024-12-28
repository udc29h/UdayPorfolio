import ExternalLink from "../../assets/images/project-live.svg";
import GithubRepo from "../../assets/images/project-source.svg";
import { projectsData } from "../../data/projectsData";

const Projects = () => {
  return (
    <section className="portfolio-grid">
      {projectsData.map((project) => (
        <section key={project.id} className="project">
          <img
            src={project.img}
            alt=""
            aria-hidden="true"
            className="project-img"
          />
          <section className="project-description">
            <h3 className="project-title white-text">{project.name}</h3>
            <p className="white-text p-tag detailed-project-description">{project.description}</p>
            <section className="project-meta-stack">
              {project.stack.map((stackName, index) => (
                <p key={index}>{stackName}</p>
              ))}
            </section>
            <section className="project-links">
              <a href={project.src} target="_blank" rel="noreferrer">
                <img src={ExternalLink} alt="Link to project" className="live-project-icon" />
              </a>
              <a href={project.source} target="_blank" rel="noreferrer">
                <img src={GithubRepo} alt="Link to Github" className="github-source-icon" />
              </a>
            </section>
          </section>
        </section>
      ))}
    </section>
  );
};

export default Projects;
