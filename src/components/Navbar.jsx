function Navbar() {
  const navLinks = ["About", "Skills", "Projects", "Experience", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <a href="#" className="text-2xl font-extrabold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
          Sneha Patel
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-slate-300 hover:text-blue-400 hover:-translate-y-1 transition duration-300 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/resume.pdf"
          target="_blank"
          className="hidden md:block bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition"
        >
          Resume
        </a>

      </div>
    </nav>
  );
}

export default Navbar;