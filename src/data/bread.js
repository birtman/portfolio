import FeaturePG from "../images/Feature_PG.png";
import FeatureHTW from "../images/Feature_htwsaar.png";
import FeatureDimension from "../images/Feature_Dimensions.png";

import Dimensions1 from "../images/Dimensions/Dimensions8.png"
import Dimensions2 from "../images/Dimensions/Dimensions7.png"
import Dimensions3 from "../images/Dimensions/Dimensions1.png"
import Dimensions4 from "../images/Dimensions/Dimensions3.png"
import Dimensions5 from "../images/Dimensions/Dimensions6.png"

import HtwsaarWeb1 from "../images/htwsaarweb/HtwsaarWeb1.png"
import HtwsaarWeb2 from "../images/htwsaarweb/HtwsaarWeb2.png"
import HtwsaarWeb3 from "../images/htwsaarweb/HtwsaarWeb3.png"
import HtwsaarWeb4 from "../images/htwsaarweb/HtwsaarWeb4.png"
import HtwsaarWeb5 from "../images/htwsaarweb/HtwsaarWeb5.png"

import PGManual1 from "../images/PGManual/PGManual1.png"
import PGManual2 from "../images/PGManual/PGManual4.png"
import PGManual3 from "../images/PGManual/PGManual2.png"
import PGManual4 from "../images/PGManual/PGManual3.png"
import PGManual5 from "../images/PGManual/PGManual5.png"

const bread = [
  {
    id: "1",
    bg: "#130972",
      fg: "#f78765",
    title: "Peter Gross Bau",
    subtitle: "",
    specs:
      "Birte Spreuer and Daniela Spinelli collect little moments of happiness, which we all usually restlessly rush past. Mischievous or cheeky, cheerful or thoughtful, they awaken memories and tickle desires with little provocations.",
    url: "https://gross-bau.de/",
    date: "2016 — today",
    client: "Peter Gross Bau & Holding GmbH",
    product: "Corporate Branding, Corporate Publishing, Webdesign",
    usedTechnologies: "",
    latest: true,
    image: PGManual1,
    specImage1: PGManual2,
    specImage2: PGManual3,
    specImage3: PGManual4,
    specImage4: PGManual5,
    category: ["digital", "analog", "all"],
  },
    {
      theme: "bread",
      bg: "#130972",
      fg: "#f78765",
      title: "Dimensions",
      specs:
        "In close cooperation with the technical directors of Dimension, a web application for the research community, where you can search across multiple content types, ranging from publications to grants, clinical trials, patents, datasets and policy documents, the dependencies between different teams, the data flow, and the data management were visually analyzed in this project. It was a great pleasure to gradually understand how data is refined in different enrichment steps, which databases are involved, which processes run simultaneously, which are interdependent. Loved it.",
      url: "https://www.dimensions.ai/",
      date: "2018",
      client: "Digital Science",
      product: "Software Architecture Visualization",
      services: "Visualization, Presentation Slides",
      usedTechnologies: "",
      latest: true,
      image: Dimensions2,
      specImage1: Dimensions1,
      specImage2: Dimensions3,
      specImage3: Dimensions4,
      specImage4: Dimensions5,
      category: ["digital", "all"],
    },
    {
      theme: "bread",
      bg: "#130972",
      fg: "#f78765",
      title: "htw saar",
      specs:
        "Together with the Head of Software Development at UberResearch GmbH / Digital Science a presentation was developed to show the advantages of Kubernetes for the stability and performance of the webapp Dimensions.",
      url: "https://www.htwsaar.de/",
      date: "2020",
      client: "University of Applied science Saar",
      product: "Website",
      services: "UX / UI, Conceptualization",
      usedTechnologies: "Figma",
      latest: true,
      image: HtwsaarWeb1,
      specImage1: HtwsaarWeb2,
      specImage2: HtwsaarWeb3,
      specImage3: HtwsaarWeb4,
      specImage4: HtwsaarWeb5,
      category: ["digital", "all"],
    },
];
export default bread;
