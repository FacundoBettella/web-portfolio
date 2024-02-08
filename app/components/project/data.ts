const GITHUB_PATH = "https://github.com/FacundoBettella/";
const GENERIC_IMG_PATH = "/projects/code-img.jpg";

const projectsData = [
  {
    id: 1,
    title: "Personal responsive web portfolio",
    description:
      "This portfolio was made with next, typescript, tailwind and three js.",
    imageUrl: GENERIC_IMG_PATH,
    gitUrl: `${GITHUB_PATH}web-portfolio`,
  },
  {
    id: 2,
    title: "RocketXchange",
    description:
      "As a final integration project, a platform was created to connect individuals to the blockchain network, enabling them to exchange their assets for various types of currencies, including both fiat and cryptocurrencies. For this purpose, we utilized the Stellar network in its test environment.",
    imageUrl: "/projects/rocketXchange.png",
    gitUrl: "https://github.com/andresf2448/Exchange-ProyectoFinal",
  },
  {
    id: 3,
    title: "Microfrontend with module federation",
    description:
      "The project employs a microfrontend architecture, leveraging the power of pure JavaScript and Module Federation",
    imageUrl: "/projects/module-federation.jpg",
    gitUrl: `${GITHUB_PATH}microfrontend-module-fedaration`,
  },
  {
    id: 4,
    title: "Memory Game",
    description:
      "This project is a memory game where a series of cards is displayed face down, and the player must click on them to find pairs of cards that have the same value.",
    imageUrl: GENERIC_IMG_PATH,
    tag: ["All", "Web", "React", "Typescript", "Bootstrap"],
    gitUrl: `${GITHUB_PATH}memory-game`,
  },
  {
    id: 5,
    title: "E-commerce Application",
    description:
      "Our eCommerce application, built with React, Styled Components, Firebase, GoogleAuthProvider, and React Context API, serves as an educational resource for developers at EY facilitating their transition to React development from other programming languages",
    imageUrl: "/projects/shopping-chart.png",
    tag: ["All", "React", "Firebase", "StyledComponents"],
    gitUrl: `${GITHUB_PATH}react-shopping-cart`,
  },
  {
    id: 6,
    title: "Personal NES UI library",
    description:
      "This project is a personal UI component library in progress. Currently,  includes a little collection of NES-styled components, reminiscent of the classic Nintendo Entertainment System (NES) design. Stay tuned for updates as more components are added!",
    imageUrl: "/projects/storybook.png",
    gitUrl: `${GITHUB_PATH}/STORYBOOK---NES-Components`,
    previewUrl:
      "https://sunny-platypus-916654.netlify.app/??path=/story/nes-ui-button-mybutton--zelda-green",
  },
];

export default projectsData;
