function Projects() {
  const projects = [
    {
      title: "AI Resume Analyzer & ATS Checker",
      description:
        "An AI-powered web application that analyzes resumes, extracts important information, evaluates ATS compatibility, and provides improvement suggestions.",
      technologies: ["Python", "Flask", "NLP", "HTML", "CSS"],
    },
    {
      title: "RAG-based AI Application",
      description:
        "A Retrieval-Augmented Generation application that retrieves relevant information from documents and generates contextual responses using an AI model.",
      technologies: ["Python", "RAG", "LLM", "Embeddings", "Vector Database"],
    },
    {
      title: "E-Commerce Application",
      description:
        "A full-stack e-commerce application with product browsing, cart management, user authentication, and order functionality.",
      technologies: ["React", "JavaScript", "Python", "Oracle"],
    },
    {
      title: "Food Restaurant Website",
      description:
        "A responsive restaurant website designed to provide users with an attractive interface for exploring food items and restaurant information.",
      technologies: ["JavaScript", "HTML", "CSS"],
    },
  ]

  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-500">
            My Work
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            A selection of projects I have built while learning and
            applying software development and AI technologies.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500/40"
            >

              {/* Project Title */}
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-8 flex gap-4">

                <a
                  href="#"
                  className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium transition hover:bg-blue-500"
                >
                  Live Demo
                </a>

                <a
                  href="#"
                  className="rounded-lg border border-white/15 px-5 py-2.5 text-sm font-medium text-gray-300 transition hover:border-white/30 hover:text-white"
                >
                  GitHub
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default Projects