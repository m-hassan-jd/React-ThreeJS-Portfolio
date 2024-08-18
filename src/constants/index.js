import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  java,
  python,
  meta,
  Icreativez,
  AIClogo,
  JDE,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  expense,
  news,
  tictac,
  dictionary,
  temperature,
  imageEdit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Devloper",
    icon: mobile,
  },
  {
    title: "Python Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Intern Frontend Web Developer",
    company_name: "ICreativez",
    icon: Icreativez,
    iconBg: "#E6DEDD",
    date: "May 2024 - July 2024",
    points: [
      "Learned About the basics of the Frontend Web Development HTML, CSS and JavaScript.",
      "Learned Different Frameworks like BootstrapCSS and React JS.",
      "Completed the tasks given by my Team Lead",
      "Works on the Real World Projects Based on ReactJS",
    ],
  },
  {
    title: "Director Graphics",
    company_name: "Artificial Intellegence Club AIC",
    icon: AIClogo,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Aug 2025",
    points: [
      "AIC is the society of AI students in which i got the oppurtunity to become Derector Designing",
      "It helps me to learning about the team work",
      "I am Learning more tools of Graphic Designing",
    ],
  },
  {
    title: "Graphic Designer",
    company_name: "Jandan Enterprices",
    icon: JDE,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jan 2022",
    points: [
      "This Was my first experience of working like professional",
      "I learned about the Graphic designing tools like Adobe Photoshop, Illustrator And Adobe XD",
      "I had designed manny posts for Different Businesses",
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#383E56",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Expense Tracker",
    description:
      "A Web App to track you expense that how much you have used and how much money do you save.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: expense,
    source_code_link: "https://github.com/m-hassan-jd/React-Expense-Tracker",
  },
  {
    name: "News Website",
    description:
      "A Web based news application using the API calls for the latest news and having different categories of news.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "newsapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: news,
    source_code_link: "https://github.com/m-hassan-jd/React-News-Web",
  },
  {
    name: "Tic Tac Toe",
    description:
      "This Tic Tac Toe game is a game made by using JavaScript using 2D Arrays with alot of logic of Linear Algebra.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tictac,
    source_code_link: "https://github.com/m-hassan-jd/Tic-Tac-Toe",
  },
  {
    name: "Dictionary App",
    description:
      "Dictionary app using JavaScript by API calls which gives meaning and example sentence of the word given with voice translator in it ",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "bootstrapcss",
        color: "pink-text-gradient",
      },
    ],
    image: dictionary,
    source_code_link: "https://github.com/m-hassan-jd/JavaScript-Dictionary-App",
  },
  {
    name: "Temperature Converter",
    description:
      "This web based temperature converter app can converts the temperature in Celcius, Kelvin, and Fahrenheit.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "bootstrapcss",
        color: "pink-text-gradient",
      },
    ],
    image: temperature,
    source_code_link: "https://github.com/m-hassan-jd/Temperature-Converter",
  },
  {
    name: "Image Editing App",
    description:
      "This image editing app can change the contrast blur and brightness of the image and can also rotate and flip the image.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: imageEdit,
    source_code_link: "https://github.com/m-hassan-jd/JS-Image-editing-app",
  },
];

export { services, technologies, experiences, testimonials, projects };
