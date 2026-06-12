import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Navbar() {
  const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl font-extrabold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent"
        >
          Sneha Patel
        </a>

        {/* Center Links */}
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-slate-300 hover:text-cyan-400 hover:-translate-y-1 transition duration-300 inline-block"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/Sneha-patel16"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-cyan-400 text-xl transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sneha-patel-473264337"
            target="_blank"
            rel="noreferrer"
            className="text-slate-300 hover:text-cyan-400 text-xl transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-cyan-400 text-slate-950 rounded-xl font-bold text-sm hover:bg-cyan-300 transition inline-flex items-center gap-2"
          >
            <FaDownload />
            Resume
          </a>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;