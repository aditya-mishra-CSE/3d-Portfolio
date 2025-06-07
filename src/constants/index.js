
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    postman,
    api,
    vscode,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    github,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    PRIMEBOOK,
    carrent,
    jobit,
    tripguide,
    threejs,
    express,
    Razorpay,
    StudyNotion,
    PrimeHRGenQ,
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
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "React.js Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "MERN stack Developer",
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
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
      name: "express",
      icon: express,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "postman",
      icon: postman,
    },
    {
      name: "api",
      icon: api,
    }
  

    // {
    //   name: "git",
    //   icon: git,
    // },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Primebook - Floydwiz Technologies Pvt. Ltd.",
      icon: PRIMEBOOK,
      iconBg: "#383E56",
      date: "Oct 2024 - Mar 2025",
      points: [
        "Spearheaded the development of PrimeHR – GenQ, an AI-powered platform for generating role- and experience-based interview questionsvia Gemini API, reducing HR question preparation time by over 50%",
        "Integrated secure REST APIs to efficiently fetch and render question sets based on job roles, reducing manual effort by 60% and improving process efficiency for recruitment teams.",
        "Crafted a responsive accordion-based interface that enhanced user navigation and raised engagement by 30%, as reported in early user feedback.",
        "Developed a question-pinning feature that allowed bookmarking of key questions, leading to a 25% improvement in interview readiness based on HR user testing.",
        "Implemented JWT-based user authentication and authorization mechanisms in web applications, appying industry best practices for security.",
        "Optimized frontend performance with code splitting and lazy loading, reducing initial page load time by and significantly boosting responsiveness.",
        "Collaborated effectively with cross-functional team of 4+ developers and designers to ensure timely project delivery within resource constraints.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
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
      name: "PrimeHR - GenQ",
      description:
        "AI-powered platform for generating role- and experience-based interview questions, optimizing the hiring process for HR teams. Integrated secure REST APIs, JWT auth, and built a responsive UI with features like question pinning and accordions, improving efficiency and engagement. Optimized performance with lazy loading and collaborated with a cross-functional team to deliver on time.",
      tags: [
        {
          name: "MERN Stack",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Gemini API",
          color: "pink-text-gradient",
        },
      ],
      image: PrimeHRGenQ,
      source_code_link: "https://github.com/",
      website_link: "https://prime-hr-gen-q-git-main-aditya-mishra-cses-projects.vercel.app/",
    },
        {
      name: "StudyNotion An-Ed Tech Platform",
      description:
        "Built a full-stack EdTech platform using the MERN stack for 1000+ users to securely access and purchase courses. Implemented JWT auth and bcrypt encryption, boosting login security and reducing issues by 40%. Designed a responsive UI with React and Tailwind, integrated Razorpay for seamless payments, and optimized media handling via Cloudinary, cutting video load times by 50%.",
    
      tags: [
        {
          name: "MERN Stack",
          color: "blue-text-gradient",
        },
        {
          name: "Razorpay APIs",
          color: "green-text-gradient",
        },
        {
          name: "Cloudinary",
          color: "pink-text-gradient",
        },

      ],
      image: StudyNotion,
      source_code_link: "https://github.com/aditya-mishra-CSE/StudyNotion---Ed-Tech",
      website_link: "https://study-notion-ed-tech-aditya.vercel.app/",
    },
    {
      name: "Razorpay Clone",

      description:
        "A responsive UI replica of the Razorpay payment gateway interface to demonstrate front-end development efficiency using modern styling tools. Crafted a clean and intuitive interface using Tailwind CSS, enabling rapid and consistent UI development. Designed a fully responsive layout to ensure optimal usability across 3+ device types (desktop, tablet, mobile). Emulated Razorpay’s official UI with precision, maintaining pixel-perfect layout and design consistency.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: Razorpay,
      source_code_link: "https://github.com/aditya-mishra-CSE/Razorpay-Clone",
      website_link: "https://razorpayclone-adityaa.netlify.app/",
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };
