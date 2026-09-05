function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center bg-[#0a0a0a] px-6 pt-20 text-white"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">

        {/* Left Content */}
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-blue-500">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Agilesh P
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-300 md:text-3xl">
            Aspiring Full Stack Developer
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
            I build modern web applications and real-world software
            solutions using JavaScript, React, Python, and modern
            development technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="/Agilesh_resume.pdf"
              download
              className="rounded-lg border border-white/20 px-6 py-3 font-medium text-white transition hover:border-blue-500 hover:text-blue-400"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-5">

            {/* GitHub */}
            <a
              href="https://github.com/Agilesh03"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="text-gray-400 transition duration-300 hover:-translate-y-1 hover:text-white"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.82-.255.82-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57C20.565 21.795 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/agilesh3"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 transition duration-300 hover:-translate-y-1 hover:text-blue-400"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V8.999h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V8.999h3.564v11.453zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
              </svg>
            </a>

            {/* Gmail */}
            <a
              href="mailto:agiagilesh49@gmail.com"
              aria-label="Email"
              className="text-gray-400 transition duration-300 hover:-translate-y-1 hover:text-red-400"
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>

          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">

            <div className="absolute -inset-4 rounded-full bg-blue-500/20 blur-3xl" />

            <div className="relative h-72 w-72 overflow-hidden rounded-full border border-white/10 md:h-96 md:w-96">
              <img
                src="/profile_2.png"
                alt="Agilesh P"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero