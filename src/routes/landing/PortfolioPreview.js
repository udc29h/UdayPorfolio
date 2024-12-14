import ProjectsPreview from "./ProjectsPreview";

const PortfolioPreview = () => {
  return (
    <article className="portfolio">
      <section className="portfolio-text">
        <h2 className="title-font pink-text h2-tag">Portfolio</h2>
        <p className="white-text p-tag">
             Substantial time in a variety of projects, thoroughly enjoying the process of building things from the ground up. Here are a few of my cherished endeavors that encapsulate my expertise.  on my {" "}
          <span>
            <a
              href="https://github.com/catherineisonline?tab=repositories"
              className="pink-text"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>
        </p>
      </section>
      <ProjectsPreview />
    </article>
  );
};

export default PortfolioPreview;
