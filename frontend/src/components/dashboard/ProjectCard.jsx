import React from "react";
import { User } from "lucide-react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";

const ProjectCard = ({ project }) => {
  return (
    <div className="rounded-lg border border-neutral-200 bg-white p-6 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <button className="group">
              <div className="h-10 w-10 rounded-full bg-neutral-100 flex items-center justify-center">
                {project.owner.avatar ? (
                  <img
                    src={project.owner.avatar}
                    alt={project.owner.name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                ) : (
                  <User className="h-5 w-5 text-neutral-400" />
                )}
              </div>
            </button>
          </DialogTrigger>
          <DialogContent>
            <div className="space-y-4 p-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-neutral-100 flex items-center justify-center">
                  {project.owner.avatar ? (
                    <img
                      src={project.owner.avatar}
                      alt={project.owner.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                  ) : (
                    <User className="h-8 w-8 text-neutral-400" />
                  )}
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{project.owner.name}</h2>
                  <p className="text-sm text-neutral-500">Project Owner</p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-700">About</h3>
                <p className="mt-1 text-sm text-neutral-500">{project.owner.about}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-neutral-700">Skills</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.owner.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-blue-50 px-2.5 py-1 text-xs text-blue-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <div className="flex-1">
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-left group">
                <h3 className="font-medium group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-neutral-500 line-clamp-2">
                  {project.description}
                </p>
              </button>
            </DialogTrigger>
            <DialogContent>
              <div className="space-y-4 p-4">
                <div>
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="mt-2 text-neutral-500">{project.description}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-700">Tech Stack</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-blue-50 px-2.5 py-1 text-xs text-blue-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-neutral-700">Owner</h3>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center">
                      {project.owner.avatar ? (
                        <img
                          src={project.owner.avatar}
                          alt={project.owner.name}
                          className="h-8 w-8 rounded-full object-cover"
                        />
                      ) : (
                        <User className="h-4 w-4 text-neutral-400" />
                      )}
                    </div>
                    <span className="text-sm text-neutral-700">{project.owner.name}</span>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-4">
        <h4 className="text-xs font-medium text-neutral-700">Tech Stack:</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;