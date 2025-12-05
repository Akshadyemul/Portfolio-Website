import React from "react";

function Education() {
  const timeline = [
    // {
    //   id: 4,
    //   title: "PhD or Job",
    //   subtitle: "Profession",
    //   date: "∞ - ∞",
    //   color: "bg-gray-800",
    //   align: "left",
    // },
    // {
    //   id: 3,
    //   title: "Masters or Job",
    //   subtitle: "Research or job or university name (if masters)",
    //   date: "2027 - ∞",
    //   color: "bg-indigo-700",
    //   align: "right",
    // },
    {
      id: 2,
      title: "BTech in Computer Science Engineering",
      subtitle: "Vidya Vikas Pratishthan Institute Of Engineering & Technology",
      date: "2024 - 2027",
      color: "bg-indigo-700",
      align: "left",
    },
    {
      id: 1,
      title: "Computer Science Engineering",
      subtitle: "Vidya Vikas Pratishthan Polytechnic, Solapur",
      date: "2021 - 2024",
      color: "bg-gray-800",
      align: "right",
    },
  ];

  return (
    <section id="experience" className="mt-20">
      <h2 className="mb-6 ml-3 text-4xl font-extrabold sm:ml-8">
        Education & Experience
      </h2>
      <hr />

      <div className="mt-6 h-full w-full border border-violet-500">
        <div className="wrap relative h-full overflow-hidden p-10">
          {/* Vertical Line */}
          <div className="absolute left-0 h-full border border-gray-700 border-opacity-20 sm:left-1/2"></div>

          {timeline.map((item) => (
            <div
              key={item.id}
              className={`mb-8 w-full flex ${
                item.align === "left"
                  ? "flex-row-reverse sm:flex"
                  : "items-center sm:flex"
              } justify-between`}
            >
              {/* Empty spacing block */}
              <div className="order-1 sm:w-5/12"></div>

              {/* Number Circle */}
              <div
                className={`z-20 order-1 flex h-8 w-8 items-center justify-center rounded-full shadow-xl ${item.color}`}
              >
                <h1 className="text-lg font-semibold text-white">{item.id}</h1>
              </div>

              {/* Main Timeline Card */}
              <div
                className={`order-1 rounded-lg px-6 py-4 shadow-xl sm:w-5/12 ${item.color}`}
              >
                <h3 className="mb-3 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-sm font-medium leading-snug tracking-wide text-white">
                  {item.subtitle}
                </p>
                <p className="mt-3 text-sm font-medium leading-snug tracking-wide text-white">
                  {item.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
