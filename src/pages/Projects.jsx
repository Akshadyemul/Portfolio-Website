import React from "react";

const projects = [
  {
    title: "My Portfolio Website",
    description:
      "A personal portfolio built using React, Tailwind CSS — responsive, modern UI, and smooth scroll navigation.",
    imageUrl: "/path/to/portfolio-screenshot.png", // replace with your image path
    tech: ["React", "Tailwind", "JavaScript"],
    demoLink: "https://your-portfolio.com",
    repoLink: "https://github.com/YourUsername/portfolio",
  },
  // {
  //   title: "Chat App (MERN)",
  //   description:
  //     "Full-stack chat application with real-time messaging using React, Express, MongoDB, and Socket.io.",
  //   imageUrl: "/path/to/chatapp-screenshot.png",
  //   tech: ["React", "Node.js", "MongoDB", "Socket.io"],
  //   demoLink: "https://chatapp-demo.com",
  //   repoLink: "https://github.com/YourUsername/chat-app",
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="mt-20 scroll-mt-24">
      <h2 className="mb-6 ml-3 text-4xl font-extrabold sm:ml-8">Projects</h2>
      <hr />
      
      <div className="mt-6 m-8 sm:grid-cols-2 space-y-10 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200 flex flex-col"
          >
            {/* Project Image */}
            {proj.imageUrl && (
              <img
                src={proj.imageUrl}
                alt={proj.title}
                className="w-full h-80 object-cover"
              />
            )}

            <div className="p-6 flex flex-col">
              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>

              {/* Description */}
              <p className="text-gray-600 flex">{proj.description}</p>

              {/* Tech stack (tags) */}
              <div className="mt-4 flex flex-wrap gap-2">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-800 text-sm font-medium px-2 py-1 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-4">
                {proj.demoLink && (
                  <a
                    href={proj.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 font-medium hover:underline"
                  >
                    Live Demo
                  </a>
                )}
                {proj.repoLink && (
                  <a
                    href={proj.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 font-medium hover:underline"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
