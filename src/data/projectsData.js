
import RestCountries from "../assets/images/portfolio/RestCountries.jpeg";
import movieList from "../assets/images/portfolio/movielist.jpg"
import tabldo from "../assets/images/portfolio/tabldo.jpg"
import chloro from "../assets/images/portfolio/chloro.jpg"
import youtube from "../assets/images/portfolio/youtube.png"

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
    id: "contentSage-Youtube Extension",
    img: youtube,
    name: "contentSage-Extension",
    stack : ["< JavaScript />" , "< NodeJs />" , "< ExpressJs />", "< MongoDB />" , "< CSS3 />" , "< HTML5 />"],
    src: "https://contentsageserver.onrender.com/",
    source : "https://github.com/udc29h/newTube",
    description : "Based on voting of users, the extension will categorize the youtube vedios age wise and user will be allowed to view the vedios only of there age range only",
  },
  {
    id: "frontend skill",
    img: chloro,
    name: "Chloro",
    stack : ["< Nextjs />" , "< TailwindCSS />"],
    src: "https://chloro-sepia.vercel.app/",
    source: "https://github.com/udc29h/chloro",
    description: "showcasing my frontend skill dfksdfsfdssf sdfkseoi sdfksd eiodiweio dfke dfiew kd wo sdweio dfoe  sdkjweo  dfeio ie dkfe  sdfke ",
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

