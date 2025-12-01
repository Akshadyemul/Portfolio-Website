import React from "react";

function Home() {
  return (
    <div className="justify-left relative flex w-full break-after-column gap-2 bg-[#f9fcfb] sm:flex">
      <div className="spt-16 relative isolate w-full px-5  sm:w-1/2 sm:px-12  lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="text-left">
            <p className="mt-6 text-lg leading-8 text-gray-600">Hello!</p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              I'm Akshad Yemul
            </h1>
            <h3 className="mt-4 text-xl font-bold tracking-tight text-gray-800 sm:text-2xl">
              Software Engineer
            </h3>
            <p className="mb-4 mt-4 text-lg leading-8 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              esse eius laborum atque culpa fugiat cum in, numquam officiis
              alias voluptas minima cupiditate est, eaque assumenda vero quaerat
              dolores non!
            </p>

            <div className="justify-left mb-4 flex items-center gap-x-6 pb-10 sm:pb-1">
              <button className="group/download relative flex cursor-pointer gap-1 rounded-3xl bg-[#5c5fe9] px-8 py-4 font-semibold text-[#f1f1f1] shadow-xl transition-all duration-300 hover:bg-opacity-70 active:shadow-inner">
                Download Resume
                <div className="absolute bottom-full left-2/4 mb-3 origin-bottom scale-0 rounded-mg bg-[#5c5fe9] px-2 py-2 text-xs uppercase shadow-lg transition-all duration-300 before:absolute before:left-2/4 before:top-full before:h-3 before:w-3 before:-translate-x-2/4 before:-translate-y-2/4 before:rotate-45 before:border-solid before:bg-[#5c5fe9] before:content-[''] group-hover/download:scale-100">
                  Download size
                </div>
              </button>

              <div className="flex justify-start gap-">
                <a href="https://github.com/Akshadyemul" target="_blank">
                  <img
                    src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
                    className="mx-3 w-12 hover:scale-95"
                  />
                </a>

                <a
                  href="http://www.linkedin.com/in/akshadyemul"
                  target="_blank"
                >
                  <img
                    src="https://i.pinimg.com/1200x/4c/ea/62/4cea62557d3c8e345f51e9dd3e9347ad.jpg"
                    className="mx-3 w-12 hover:scale-95"
                  />
                </a>

                <a
                  href="https://www.instagram.com/akshadyemul/"
                  target="_blank"
                >
                  <img
                    src="https://i.pinimg.com/1200x/cc/dd/7c/ccdd7c16a26eb9c326f359c0f418004c.jpg"
                    className="mx-3 w-12 hover:scale-95"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden w-1/2 object-contain sm:block">
        <img
          src="https://avatars.githubusercontent.com/u/116255237?s=400&u=cd063865d2ed1e23039c0d191edc287c7b4c703f&v=4"
          className="mx-auto rounded-full"
        />
      </div>
    </div>
  );
}

export default Home;
