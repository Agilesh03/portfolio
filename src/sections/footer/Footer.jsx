function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Agilesh. All rights reserved.
        </p>

        <p className="text-sm text-gray-500">
          Built with React & Tailwind CSS
        </p>

      </div>
    </footer>
  )
}

export default Footer