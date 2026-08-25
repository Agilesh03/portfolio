function Education() {
  return (
    <section
      id="education"
      className="bg-[#0a0a0a] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-500">
            Education
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My Education
          </h2>
        </div>

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* MCA */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-500/40">
            <p className="text-sm font-medium text-blue-400">
              Postgraduate
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Master of Computer Applications
            </h3>

            <p className="mt-2 text-gray-300">
              Generative AI
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Currently pursuing MCA with a focus on Generative AI,
              software development, and modern application technologies.
            </p>
          </div>

          {/* BCA */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-500/40">
            <p className="text-sm font-medium text-blue-400">
              Undergraduate
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              Bachelor of Computer Applications
            </h3>

            <p className="mt-2 text-gray-300">
              Computer Applications
            </p>

            <p className="mt-4 leading-7 text-gray-400">
              Completed BCA with a foundation in programming,
              databases, software development, and computer science.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Education