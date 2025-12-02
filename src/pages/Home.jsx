import React from "react";

function Home() {
  const iconClass =
    "w-10 h-10 rounded-md object-cover mx-2 transition-transform duration-200 hover:scale-90";

  return (
    <section id="home">
    <div className="flex w-full bg-[#f9fcfb] py-10 sm:py-16">
      {/* LEFT SECTION */}
      <div className="w-full px-6 sm:w-1/2 sm:px-12">
        <div className="max-w-2xl">
          <p className="text-lg text-gray-600">Hello!</p>

          <h1 className="text-4xl font-bold text-gray-900 sm:text-6xl">
            I'm Akshad Yemul
          </h1>

          <h3 className="mt-3 text-xl font-semibold text-gray-800 sm:text-2xl">
            Software Engineer
          </h3>

          <p className="mt-4 mb-6 text-lg text-gray-600 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            esse eius laborum atque culpa fugiat cum in, numquam officiis alias
            voluptas minima cupiditate est, eaque assumenda vero quaerat dolores
            non! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            In, nobis.
          </p>

          {/* Buttons + Icons */}
          <div className="flex items-center gap-4 flex-wrap">
            {/* Download Resume */}
            <button className="relative flex items-center gap-1 rounded-3xl bg-[#5c5fe9] px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-opacity-80 active:shadow-inner hover:scale-90">
              Download Resume
            </button>

            {/* Social Icons */}
            <div className="flex items-center">
              <a href="https://github.com/Akshadyemul" target="_blank">
                <img
                  src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                  className={iconClass}
                />
              </a>

              <a href="https://www.linkedin.com/in/akshadyemul" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                  className={iconClass}
                />
              </a>

              <a href="https://www.instagram.com/akshadyemul/" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                  className={iconClass}
                />
              </a>

              <a href="https://x.com/AkshadYemul" target="_blank">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
                  className={iconClass}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION - Profile Image */}
      <div className="hidden w-1/2 sm:flex justify-center items-center">
        <img
          src="https://avatars.githubusercontent.com/u/116255237?s=400&u=cd063865d2ed1e23039c0d191edc287c7b4c703f&v=4"
          className="w-90 h-90 object-cover rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
    </section>
  );
}

export default Home;
