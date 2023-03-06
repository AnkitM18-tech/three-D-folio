import {
  mobile,
  backend,
  creator,
  web,
  cpp,
  python,
  accenture,
  java,
  javascript,
  typescript,
  html,
  css,
  learn,
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
  PostJourney,
  shareme,
  Videochat,
  threejs,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Animation Creator",
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
  {
    name: "c++",
    icon: cpp,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Application Development Analyst",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#383E56",
    date: "September 2022 - Present",
    points: [
      "Developing and maintaining automation scripts for a Telecom Giant using Java, Selenium and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Automating SABOR and Siebel Portal with efficient scripts, reducing the execution time by 50%.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Application Development Associate",
    company_name: "Accenture",
    icon: accenture,
    iconBg: "#E6DEDD",
    date: "August 2021 - August 2022",
    points: [
      "Developing and maintaining automation scripts for a Telecom Giant using Java, Selenium and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Automating OR Portal and over 10+ components",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Self Taught Developer",
    company_name: "Self Learning",
    icon: learn,
    iconBg: "#383E56",
    date: "June 2020 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Learning new Technologies by creating Projects around it.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Along with my Full Time Job, learning new tech stacks and framework.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Ankit proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ankit does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Ankit optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "SocialQu",
    description:
      "Web-based Social Media Picture Sharing App with CRUD operations and Google Authentication",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sanity",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shareme,
    source_code_link: "https://github.com/AnkitM18-tech/SocialQu",
    live_demo: "https://sharemeankit.netlify.app",
  },
  {
    name: "PostJourney",
    description:
      "An A.I image generation app created using MERN stack and Open AI API which can generate creative images with the provided prompts.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: PostJourney,
    source_code_link:
      "https://github.com/AnkitM18-tech/ai-image-generation-app",
    live_demo: "https://ankit-ai-image-generation.netlify.app/",
  },
  {
    name: "Video Chat",
    description: "Video Chat app built using React JS , Node JS and WebRTC.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "webRTC",
        color: "green-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: Videochat,
    source_code_link: "https://github.com/AnkitM18-tech/react-video-chat-app",
    live_demo: "https://web-chat-ankit.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
