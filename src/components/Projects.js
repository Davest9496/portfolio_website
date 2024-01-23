import { ToolsItem } from "./ToolsItem";
import { FaLink } from "react-icons/fa";

export function Projects() {
  const project = [
    {
      title: "project name",
      desc: "lorem ipsium",
      image: <img src="/profile.jpeg" className="image" alt="project name" />,
      tools: ["React", "Node.js"],
    },
    {
      title: "project name",
      desc: "lorem ipsium",
      image: <img src="/profile.jpeg" className="image" alt="project name" />,
      tools: ["React", "Node.js"],
    },
    {
      title: "Cravings",
      desc: "Restaurant Website",
      info: `Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy. Various versions have
        evolved over the years, sometimes by accident,`,
      image: <img src="/cravings.png" className="image" alt="project name" />,
      tools: ["React", "Node.js", "SaSS"],
    },
  ];

  return (
    <ul className="project">
      {project.map((item, id) => (
        <ProjectItems items={item} key={id} />
      ))}
    </ul>
  );
}

export function ProjectItems({ items }) {
  return (
    <li className="project-box">
      <div className="project-img">
        <figure>{items.image}</figure>
      </div>
      <div className="project-info">
        <h3 className="project-title">
          {items.title}
          <span className="title-icon">
            <FaLink />
          </span>
        </h3>
        <p className="project-desc">{items.desc}</p>
        <p className="project-info">{items.info}</p>
        <div className="tools">
          {items.tools.map((tool) => (
            <ToolsItem toolItems={tool} />
          ))}
        </div>
      </div>
    </li>
  );
}
