import React from "react";

function Skills() {
  const SkillData = [
    {
      name: "Python",
      experience: "Self-taught • Practical hands-on learning",
      image:
        "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
    },
    {
      name: "Linux",
      experience: "4+ years daily usage (primary OS)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Icons8_flat_linux.svg/2048px-Icons8_flat_linux.svg.png",
    },
    {
      name: "GitHub",
      experience: "Self-taught • Practical hands-on usage",
      image:
        "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
    },
    {
      name: "React",
      experience: "Self-taught",
      image:
        "https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon.png",
    },

    {
      name: "Tailwind CSS",
      experience: "Self-taught",
      image:
        "https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png",
    },
    {
      name: "MongoDB",
      experience: "Self-taught",
      image:
        "https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png",
    },
  ];

  return (
    <section id="skills" className="mt-20">
      <h1 className="mb-3 ml-3 text-4xl font-extrabold sm:ml-8 sm:mb-6">
        Skills
      </h1>
      <hr className="sm:mx-8" />

      <div className="my-12 grid grid-cols-2 gap-8 sm:grid-cols-6 px-4 sm:px-8">
        {SkillData.map((skill, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center rounded-2xl border border-indigo-300 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            {/* Skill Icon */}
            <div className="w-20 h-20 bg-indigo-50 rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src={skill.image}
                className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                alt={skill.name}
              />
            </div>

            {/* Skill Name */}
            <p className="mt-4 font-semibold text-indigo-700 text-center text-lg">
              {skill.name}
            </p>

            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 mb-3 hidden w-max -translate-x-1/2 group-hover:flex flex-col items-center transition-all duration-200">
              <div className="rounded-md bg-indigo-700 px-3 py-1 text-xs text-white shadow-lg">
                {skill.experience} experience
              </div>
              <div className="h-0 w-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-indigo-700"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
