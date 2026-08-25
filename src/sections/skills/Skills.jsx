function Skills() {
  const skillGroups = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "Java"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Flask", "FastAPI"],
    },
    {
      title: "Database",
      skills: ["MongoDB", "MySQL", "Oracle"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code"],
    },
    {
      title: "AI & Data",
      skills: ["Generative AI", "RAG", "NumPy", "Pandas"],
    },
  ]

  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-500">
            My Skills
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            A collection of technologies and tools I use to build
            web applications and AI-powered solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-500/40"
            >
              <h3 className="mb-5 text-xl font-semibold">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills