import React from "react";

function WhatIDo() {
  const card =
    "flex flex-col w-full bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1";

  const titleClass = "mb-3 text-2xl font-semibold text-gray-900";
  const textClass = "text-gray-600 leading-[1.65]";

  return (
    <section id="whatIDo" className="mt-8">
      <h1 className="mb-6 ml-1 text-4xl font-extrabold sm:ml-8">What I Do!</h1>
      <hr className="sm:mx-8 mb-10" />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:px-8">

        {/* DSA & Problem Solving */}
        <div className={card}>
          <h5 className={titleClass}>DSA & Problem Solving</h5>
          <p className={textClass}>
            Actively strengthening my foundations in algorithms and data structures.
            Focused on writing clean, optimized code and improving logical reasoning.
          </p>
        </div>

        {/* Linux & System Mastery */}
        <div className={card}>
          <h5 className={titleClass}>Linux & System Mastery</h5>
          <p className={textClass}>
            Daily Linux user for 4+ years. Skilled with CLI, system configuration,
            package management, shell scripting, and building an efficient open-source workflow.
          </p>
        </div>

        {/* Research & Self-Learning */}
        <div className={card}>
          <h5 className={titleClass}>Research & Self-Learning</h5>
          <p className={textClass}>
            Curious and self-driven learner. I enjoy exploring new technologies,
            reading documentation, and understanding systems deeply — especially
            open-source and backend concepts.
          </p>
        </div>

        {/* Full-Stack Development */}
        <div className={card}>
          <h5 className={titleClass}>Front-End & Back-End</h5>
          <p className={textClass}>
            Building modern, responsive UIs with React and Tailwind CSS, and developing
            backend functionality using Python or Node.js based on project needs.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhatIDo;
