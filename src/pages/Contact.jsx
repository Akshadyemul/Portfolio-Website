import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="mt-20 scroll-mt-24 pb-16">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold mb-6 ml-3 sm:ml-8 text-center sm:text-left">
        Contact Me
      </h2>
      <hr className="mb-6" />

      <p className="text-gray-600 mb-10 px-8 text-center sm:text-left">
        I&apos;m open to projects, collaboration, and opportunities. Feel free
        to contact me via email, phone, or locate me on the map.
      </p>

      {/* Contact Cards */}
      <div className="px-8 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ContactCard
          title="Email"
          description="Contact me directly"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M2 6.75A2.75 2.75 0 014.75 4h14.5A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20H4.75A2.75 2.75 0 012 17.25V6.75z"
                stroke="#6b21a8"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 6.75l7.25 5.25L18 6.75"
                stroke="#6b21a8"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          href="mailto:akshadyemul05@gmail.com"
          value="akshadyemul05@gmail.com"
        />

        <ContactCard
          title="Phone"
          description="Reach me by phone"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.21.45 2.4.97 3.5a2 2 0 0 1-.45 2.11L8.91 10.09a15.05 15.05 0 0 0 6 6l1.76-1.76a2 2 0 0 1 2.11-.45c1.1.52 2.29.85 3.5.97A2 2 0 0 1 22 16.92z"
                stroke="#6b21a8"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          href="tel:+917498638013"
          value="+91 7498638013"
        />

        <ContactCard
          title="Location"
          description="Find me here"
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 21s8-4.5 8-10A8 8 0 1 0 4 11c0 5.5 8 10 8 10z"
                stroke="#6b21a8"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="11" r="2.5" fill="#6b21a8" />
            </svg>
          }
          href="https://maps.app.goo.gl/dVLZ9k4ABDkhzotq8"
          value="Solapur, Maharashtra"
          external
        />
      </div>
      &nbsp;
      

    </section>
  );
}

/* Reusable Contact Card Component */
function ContactCard({ title, description, icon, href, value, external }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noreferrer" : ""}
      className="flex flex-col items-center justify-center text-center gap-4 rounded-2xl bg-white p-8 shadow-sm hover:shadow-lg transition hover:cursor-pointer h-full"
    >
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-indigo-50">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600">{description}</p>

      <span className="text-indigo-600 font-medium hover:underline">{value}</span>
    </a>
  );
}
