
import RestCountries from "../assets/images/portfolio/RestCountries.jpeg";
import movieList from "../assets/images/portfolio/movielist.jpg"
import tabldo from "../assets/images/portfolio/tabldo.jpg"
import chloro from "../assets/images/portfolio/chloro.jpg"

const projectsData = [
  {
    id: "movieList",
    img: movieList,
    name: "movieList",
    stack : ["< JavaScript />" , "< NodeJs />" , "< ExpressJs />", "< MongoDB />" , "< CSS3 />" , "< HTML5 />"],
    src: "https://movie-flix-wheat.vercel.app/index.html",
    source : "https://github.com/udc29h/MovieFlix",
    description : "Simplified the process of finding the best movies to watch",
  },
  {
    id: "frontend skill",
    img: chloro,
    name: "Chloro",
    stack : ["< Nextjs />" , "< TailwindCSS />"],
    src: "https://chloro-sepia.vercel.app/",
    source: "https://github.com/udc29h/chloro",
    description: "showcasing my frontend skill",
  },
  {
    id : "Tabldo",
    img : tabldo,
    name : "Tabldo",
    stack: ["< Tabulator.js />" , "< React.js />" , "< TailwindCSS />" , "< JavaScript />"],
    src : "https://tabldo.vercel.app/",
    source: "https://github.com/udc29h/TodoTable",
    description: "You can add your task in the table and modify it's progress"
  },
  {
    id: "reactChat",
    img: RestCountries,
    name: "ReactChat",
    stack: ["< React.js />", "< CSS3 />", "< Firebase />"],
    src: "https://reactchat-chi.vercel.app/",
    source: "https://github.com/catherineisonline/rest-countries",
    description:
      "Created group chat app using Reactjs and firebase , implement the google authentication",
  },
];

export { projectsData };

