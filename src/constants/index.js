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
// import cv from "../assets/Screenshot 2023-03-31 at 13.52.55.png";
import coaster from "../assets/coaster.png";
import college from "../assets/college.png";
import toilink from "../assets/toilink.png";

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
    testimonial: "Get to know more about me , here is a link to my CV",
    name: "CV",
    designation: "CV",
    company: "Mrigesh Thakur",
    image: op3,
    link: "https://drive.google.com/file/d/1uTIWyOcnuoSwB0u9-tzMGU2oJmWR08Ca/view?usp=sharing",
  },
  {
    testimonial: "Read my blogs here , I post them here occasionally",
    name: "Blogs",
    designation: "Blogs",
    company: "Mrigesh Thakur",
    image: op1,
    link: "https://mrigeshthakur11.hashnode.dev/",
  },
  {
    testimonial: "I am a big time anime and manga fan , here is my myanimelist",
    name: "Anime",
    designation: "Anime",
    company: "Mrigesh Thakur",
    image: op4,
    link: "https://myanimelist.net/profile/Legend_101",
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
    Link: "https://drive.google.com/file/d/17cBsMzgzeOnKsxabA_gPRGICL2RS4r0k/view?usp=sharing",
    image: metaa,
    source_code_link: "https://github.com/Legend101Zz/metaCRAM",
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
    Link: "https://www.youtube.com/watch?v=LZyOPmZs6xs&t=22s",
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
    source_code_link: "https://legend101zz.github.io/pokemon-nft-retro-game/",
  },
  {
    name: "VR-Coaster",
    description:
      "A VR ride to explore my college campus in a new and interesting way.. ",
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
    image: coaster,
    Link: "https://main--dashing-kitten-0d0d19.netlify.app",
    source_code_link: "https://github.com/Legend101Zz/VR-rollerCoaster",
  },
  {
    name: "VR-College",
    description:
      "This VR project allows users to experience a virtual college campus in full 3D. The project is designed to provide an immersive experience for users who want to explore the campus, its buildings, and surrounding areas. ",
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
    image: college,
    Link: "https://college-vr-test.netlify.app/",
    source_code_link: "https://github.com/Legend101Zz/vr-test-rocket-chat",
  },
  {
    name: "Toi-Link",
    description:
      "A VR ride to explore my college campus in a new and interesting way.. link:-",
    tags: [
      {
        name: "Google Maps",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
      {
        name: "Express",
        color: "blue-text-gradient",
      },
    ],
    image: toilink,
    Link: "https://toi-link.onrender.com/toilink/",
    source_code_link:
      "https://github.com/Legend101Zz/Google-solution-challenge-toilink",
  },
];

export { services, technologies, experiences, testimonials, projects };
