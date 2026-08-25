function Experiences() {
  return (
    <section
      id="experience"
      className="bg-[#0a0a0a] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Experience
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My Experience
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            My practical learning experience through internships,
            development work, and hands-on projects.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-10">

          {/* MERN Stack Internship */}
          <div className="relative border-l border-white/10 pl-8">
            <div className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-blue-500" />

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-blue-500/40 md:p-8">

              <div className="flex flex-col justify-between gap-3 md:flex-row">
                <div>
                  <h3 className="text-2xl font-semibold">
                    MERN Stack Developer Intern
                  </h3>

                  <p className="mt-2 text-lg text-blue-400">
                    MERN Stack Internship
                  </p>
                </div>

                <span className="text-sm text-gray-500">
                  Internship
                </span>
              </div>

              <p className="mt-6 leading-7 text-gray-400">
                Gained practical experience in full-stack web development
                using the MERN stack. Worked with React for building
                responsive user interfaces and learned how frontend
                applications communicate with backend services through
                APIs. Gained hands-on understanding of Node.js and
                Express.js for backend development and MongoDB for
                storing and managing application data. Developed an
                understanding of the complete flow from frontend
                interface to backend API and database integration.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "MongoDB",
                  "Express.js",
                  "React",
                  "Node.js",
                  "REST API",
                  "Full Stack Development",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* Core Python Development Internship */}
          <div className="relative border-l border-white/10 pl-8">
            <div className="absolute -left-2 top-1 h-4 w-4 rounded-full bg-blue-500" />

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:border-blue-500/40 md:p-8">

              <div className="flex flex-col justify-between gap-3 md:flex-row">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Core Python Development Intern
                  </h3>

                  <p className="mt-2 text-lg text-blue-400">
                    Elysian Intelligence Business Solution Pvt. Ltd.
                  </p>
                </div>

                <span className="text-sm text-gray-500">
                  May 2026 – June 2026
                </span>
              </div>

              <p className="mt-6 leading-7 text-gray-400">
                Completed a hands-on internship in Core Python Development,
                gaining practical experience in Python programming and
                fundamental software development concepts. Strengthened
                programming skills through variables, data types,
                operators, conditional statements, loops, functions,
                object-oriented programming, exception handling, file
                handling, and modules. Applied the concepts learned
                through assigned tasks and practical development work,
                improving problem-solving ability and understanding of
                structured programming.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Python",
                  "Core Python",
                  "OOP",
                  "Functions",
                  "Exception Handling",
                  "File Handling",
                  "Python Modules",
                  "Problem Solving",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Experiences