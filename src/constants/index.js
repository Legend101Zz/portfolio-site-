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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import sol from "../assets/tech/sol.png";
import eth from "../assets/tech/eth.png";
import sql from "../assets/tech/sql.png";
import op1 from "../assets/op1.jpg";
import op2 from "../assets/op2.jpg";
import op3 from "../assets/op3.jpg";
import op4 from "../assets/op4.jpg";
import metaa from "../assets/meta.png";
import retro from "../assets/retro.jpeg";
import outpass from "../assets/outpass.png";

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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "MetaVerse Creator",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "ethereum",
    icon: eth,
  },
  {
    name: "solidity",
    icon: sol,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "The Coding Saga Begins",
    company_name: "Beginning",
    icon: op1,
    iconBg: "#383E56",
    date: "Feb 2022 - Aug 2022",
    points: [
      "I started my journey in python and then went on to learn unity and game development.",
      "I learned many things during this period and explored myself to the fullest.",
      "Then after the dust settled, I found my passion in web development and began my journey of MERN stack development.",
      "I focused on Backend development, participated in hackathons and honed my skills as a node developer",
    ],
  },
  {
    title: "Every journey teaches something new",
    company_name: "Phase 1",
    icon: op2,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Nov 2022",
    points: [
      "During this period, I made many fullstack projects and also entered the open-source world",
      "I along with my friends started some major new projects, one of them being our outpass management application",
      "I learned many new skills , adding react, threejs, blender and cpp to my tech-stack.",
      "Participated in developing resources for my college society and worked towards refining my skills ",
    ],
  },
  {
    title: "I haven't been everywhere, but it's on my list.",
    company_name: "Phase 2",
    icon: op4,
    iconBg: "#383E56",
    date: "Nov 2022 - Jan 2023",
    points: [
      "This is where I along with my gang entered the world of metaverse and started working towards our project MetaCRAM",
      "I had the oppurtunity to lead the back-end development of a newly established startup HonBil and worked towards making it's backend and defining it's architecture ",
      "We finished our outpass application and rolled out it's version 1..",
      "I participated in many web3 and metaverse hackathons ",
    ],
  },
  {
    title: "Still more lies ahead",
    company_name: "Current",
    icon: op3,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Currently I am contributing in many open-source projects, RocketChat, BookBrainz and Ethereal-Engine to name a few",
      "I stared learning blockchain and exploring it's vast avenues",
      "I got collaborated with yet another startup RODHAK and have been working as it's backend developer",
      "I still continue to explore many new things and see where this journey takes me ..",
    ],
  },
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
    name: "MetaCRAM",
    description:
      "(In progress )Created a meta-stadium with added city levels with various games and art gallery, and nfts to buy with added blender models rendered in browser using three.js and added VR functionality via WebXR api using js",
    tags: [
      {
        name: "ThreeJs",
        color: "blue-text-gradient",
      },
      {
        name: "Unity",
        color: "green-text-gradient",
      },
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Ethereum",
        color: "pink-text-gradient",
      },
    ],
    image: metaa,
    source_code_link: "https://github.com/Legend101Zz/vr-project-meta-plex",
  },
  {
    name: "NITH-Portal",
    description:
      "Flutter application for creating outpass portal for NITH Hostels for MMCA to scrape the laboursome paper work and make the process more efficient.  ",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs,express",
        color: "green-text-gradient",
      },
      {
        name: "MERN stack",
        color: "pink-text-gradient",
      },
    ],
    image: outpass,
    source_code_link: "https://github.com/Legend101Zz/NITH-Portal",
  },
  {
    name: "Retro-Nft",
    description:
      "A nostaglic dive into old retro-games, recraeting them with the power of threeJs and adding blockchain to create a fun nft based game",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "pink-text-gradient",
      },
    ],
    image: retro,
    Link: "https://legend101zz.github.io/pokemon-nft-retro-game/",
    source_code_link: "https://github.com/",
  },
  {
    name: "VR-Coaster",
    description:
      "A VR ride to explore my college campus in a new and interesting way.. link:-",
    tags: [
      {
        name: "Blender",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "ThreeJs",
        color: "pink-text-gradient",
      },
    ],
    image: retro,
    Link: "https://legend101zz.github.io/pokemon-nft-retro-game/",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
