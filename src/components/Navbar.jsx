import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-extrabold bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent"
        >
          Sneha Patel
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-slate-300 hover:text-cyan-400 transition duration-300"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex gap-4 text-xl">
          <a
            href="https://github.com/Sneha-patel16"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sneha-patel-473264337"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;