function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-500">
            About Me
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Who I Am
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* Description */}
          <div>
            <p className="text-lg leading-8 text-gray-400">
              I am Agilesh P, an aspiring software developer passionate
              about building modern web applications and practical
              technology solutions.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              I have completed my BCA and am currently pursuing my MCA
              with a focus on Generative AI. I enjoy working with
              JavaScript, React, Python, and backend technologies to
              turn ideas into real-world applications.
            </p>

            <p className="mt-6 text-lg leading-8 text-gray-400">
              My goal is to become a full-stack developer and build
              useful applications that solve real-world problems.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Education
              </h3>
              <p className="mt-2 text-gray-400">
                MCA — Generative AI
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Focus
              </h3>
              <p className="mt-2 text-gray-400">
                Full-Stack Development
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Languages
              </h3>
              <p className="mt-2 text-gray-400">
                JavaScript · Python · Java
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold text-white">
                Technologies
              </h3>
              <p className="mt-2 text-gray-400">
                React · Express · MongoDB
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default About