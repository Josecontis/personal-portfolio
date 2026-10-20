import bandb from "../../Assets/Projects/B&B.png";
import fmdEr from "../../Assets/Projects/FMDER.png";
import housePricePred from "../../Assets/Projects/housePricePred.png";
import thesis from "../../Assets/Projects/thesis.png";

// Each project reads title and description from projects.projectCards.<id> in the translations.
// A description paragraph can start with a highlighted tag (translation key in "tag").
export const projects = [
  {
    id: "fmdEr",
    imgPath: fmdEr,
    link: "https://github.com/Ocen5/FMD-ER",
    description: [
      { text: "description1" },
      { tag: "projects.tags.description1", text: "description2" },
      { tag: "projects.tags.description2", text: "description3" },
    ],
  },
  {
    id: "thesis",
    imgPath: thesis,
    link: "https://github.com/Josecontis/opinion_target_extraction",
    description: [{ text: "description" }],
  },
  {
    id: "bandb",
    imgPath: bandb,
    link: "https://github.com/Josecontis/ilbelvedere",
    description: [{ text: "description" }],
  },
  {
    id: "housePricePred",
    imgPath: housePricePred,
    link: "https://github.com/Josecontis/House-Price-Prediction",
    description: [{ text: "description" }],
  },
];
