import React, { useState, useEffect } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", id: "home" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Project", id: "project" },
    { label: "Contact", id: "contact" },
  ];

  // Smooth scroll on click
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  // Detect active section based on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15 }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="flex sticky top-0 z-50 items-center justify-between py-4 px-6 sm:px-10 shadow-sm bg-white">
        <h1 className="text-2xl font-bold tracking-wide text-gray-900">
          Akshad Yemul
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 font-medium text-gray-700">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer transition-all duration-200 
                hover:text-purple-600 relative
                ${
                  activeSection === item.id
                    ? "text-purple-600 font-semibold"
                    : "text-gray-700"
                }`}
            >
              {item.label}

              {/* Active underline */}
              {activeSection === item.id && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-purple-600 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div
          className="sm:hidden cursor-pointer"
          onClick={() => setMenuOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </nav>

      {/* Dim Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col gap-6 px-8 mt-4 text-lg font-medium text-gray-700">
          {navItems.map((item) => (
            <li
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`cursor-pointer hover:text-purple-600 transition-colors ${
                activeSection === item.id ? "text-purple-600 font-semibold" : ""
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default NavBar;
