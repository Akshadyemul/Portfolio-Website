import React from "react";

function WhatIDo() {
  const card =
    "flex flex-col w-full bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1";

  const titleClass = "mb-3 text-2xl font-semibold text-gray-900";
  const textClass = "text-gray-600 leading-[1.65]";

  return (
    <section id="whatIDo" className="mt-20 scroll-mt-24">
      <h1 className="mb-6 ml-1 text-4xl font-extrabold sm:ml-8">What I Do!</h1>
      <hr className="sm:mx-8 mb-10" />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-4 sm:px-8">

        {/* DSA & Problem Solving */}
        <div className={card}>
          <h5 className={titleClass}>DSA & Problem Solving</h5>
          <p className={textClass}>
            Currently learning Data Structures and Algorithms using Python and C++.
            Focused on improving problem-solving skills and writing efficient code.
          </p>
        </div>

        {/* Linux */}
        <div className={card}>
          <h5 className={titleClass}>Linux</h5>
          <p className={textClass}>
            Comfortable working in a Linux environment with hands-on experience in CLI,
            package management, and system usage for development.
          </p>
        </div>

        {/* Git & GitHub */}
        <div className={card}>
          <h5 className={titleClass}>Git & GitHub</h5>
          <p className={textClass}>
            Familiar with version control using Git and GitHub. Able to manage code,
            track changes, and collaborate on projects.
          </p>
        </div>

        {/* Learning & Growth */}
        <div className={card}>
          <h5 className={titleClass}>Learning & Growth</h5>
          <p className={textClass}>
 Curious and motivated learner who enjoys exploring new concepts and building small projects.
    I am also interested in research and aim to develop a deeper understanding of computer science concepts over time.
          </p>
        </div>

      </div>
    </section>
  );
}

export default WhatIDo;