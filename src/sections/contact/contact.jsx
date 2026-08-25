function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#0a0a0a] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-500">
            Contact
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Let's Work Together
          </h2>

          <p className="mt-4 max-w-2xl text-lg text-gray-400">
            Have a project idea, opportunity, or just want to connect?
            Feel free to send me a message.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-10 md:grid-cols-2">

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold">
              Get in Touch
            </h3>

            <p className="mt-4 max-w-lg leading-7 text-gray-400">
              I'm always interested in learning, building new projects,
              and connecting with people in the technology community.
            </p>

            <div className="mt-8 space-y-5">

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <a
                  href="mailto:your-email@example.com"
                  className="text-gray-300 transition hover:text-blue-400"
                >
                  agiagilesh49@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  GitHub
                </p>

                <a
                  href="#"
                  className="text-gray-300 transition hover:text-blue-400"
                >
                  https://github.com/Agilesh03
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  LinkedIn
                </p>

                <a
                  href="#"
                  className="text-gray-300 transition hover:text-blue-400"
                >
                  www.linkedin.com/in/agilesh3
                </a>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <form className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">

            <div className="grid gap-6">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What is this about?"
                  className="w-full rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/30 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-blue-500"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500"
              >
                Send Message
              </button>

            </div>
          </form>

        </div>
      </div>
    </section>
  )
}

export default Contact