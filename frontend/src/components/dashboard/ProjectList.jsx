import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ searchQuery, selectedSkills }) => {
  // This would typically come from an API
  const projects = [
    {
      id: "1",
      title: "Modern Dashboard UI",
      description: "A beautiful and responsive dashboard interface built with React and Tailwind CSS.",
      owner: {
        id: "u1",
        name: "John Doe",
        about: "Full-stack developer with 5 years of experience in React and Node.js.",
        skills: ["React", "TypeScript", "Node.js", "Tailwind CSS"],
      },
      techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    },
    {
      id: "2",
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with real-time inventory management.",
      owner: {
        id: "u2",
        name: "Jane Smith",
        about: "Senior software engineer specializing in e-commerce solutions.",
        skills: ["Python", "Django", "React", "PostgreSQL"],
      },
      techStack: ["Python", "Django", "React", "PostgreSQL"],
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesSkills =
      selectedSkills.length === 0 ||
      selectedSkills.some((skill) =>
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(skill.toLowerCase())
        )
      );
    return matchesSearch && matchesSkills;
  });

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-neutral-800">Projects</h2>
      <div className="grid gap-4">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;