import Link from "next/link";
import { FaEye } from "react-icons/fa";

export const links = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
    nameEng: "Projects",
    hash: "#projects",
  },
  {
    nameEng: "View Items",
    hash: "#items",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData = [
  {
    title: "Mockup Data Title",
    description: (
      <span>
        Mockup Data Description, Mockup Data Description, Mockup Data Description, Mockup Data Description, Mockup Data Description
      </span>
    ),
    tags: ["React.js", "Vite", "React Query", "StyledComponent", "Supabase"],
    imageUrl: "/public/sample.png",
    repo: "X",
    liveDemo: "X",
    youtube: "X"
  },
  {
    title: "Mockup Data Title",
    description: (
      <span>
        Mockup Data Description, Mockup Data Description, Mockup Data Description, Mockup Data Description, Mockup Data Description
      </span>
    ),
    tags: ["React.js", "Next.js", "Tailwind", "Supabase"],
    imageUrl: "/public/sample.png",
    repo: "X",
    liveDemo: "X",
    youtube: "X"
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Next.js",
  "Redux",
  "Redux Toolkit",
  "React Query",
  "Git",
  "Tailwind",
  // "Framer Motion",
  "Supabase",
  "Postman",
  "Node.js",
  "Express.js",
  "MySQL",
  "Socket.io",
  "StyledComponent",
  "React Router",
];
export const educationData = [
  {
    institution: "MockData ",
    logo: "/icon.jpg",
    title: "MockData Title",
    link: "/",
    description: (
      <span>
        Mock Data Description
        <br />
        <Link
          className="flex w-fit items-center gap-1 hover:text-blue-600 hover:underline"
          href="https://docs.google.com/spreadsheets/d/1-FibrhJNfJ5Ia48Ir9WkUkSEastH0prdUph8WQBC0s4/edit?usp=sharing"
        >
          <FaEye /> View More
        </Link>
      </span>
    ),
    year: "Mock Date Time ",
    credential:
      "/"
  },
  {
    institution: "MockData ",
    logo: "/icon.jpg",
    title: "MockData Title",
    link: "/",
    description:
      "Mock Data  Description",
    year: "Mock Date Time ",
    credential: "",
  },
  {
    institution: "MockData",
    logo: "/icon.jpg",
    title: (
      <>
        <span />
        MockData  Title
        <span />
      </>
    ),
    link: "/",
    description:
      "Mock Data  Description",
    year: "Mock Date Time ",
    credential: "",
  },
];
