function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold text-white"
        >
          Agilesh<span className="text-blue-500">.</span>
        </a>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <a
            href="#home"
            className="text-sm text-gray-300 transition hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-sm text-gray-300 transition hover:text-blue-400"
          >
            About
          </a>

          <a
            href="#skills"
            className="text-sm text-gray-300 transition hover:text-blue-400"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="text-sm text-gray-300 transition hover:text-blue-400"
          >
            Projects
          </a>

          <a
            href="#experience"
            className="text-sm text-gray-300 transition hover:text-blue-400"
          >
            Experience
          </a>

          <a
            href="#education"
            className="text-sm text-gray-300 transition hover:text-blue-400"
          >
            Education
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-300 transition hover:text-blue-400"
          >
            Contact
          </a>

        </div>

        {/* Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
        >
          Resume
        </a>

      </div>
    </nav>
  )
}

export default Navbar