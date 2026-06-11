import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail, MdOutlineFileDownload } from "react-icons/md";

function Contact() {
  const links = [
    {
      label: "Email",
      value: "snehapatel5212@gmail.com",
      icon: <MdEmail />,
      href: "mailto:snehapatel5212@gmail.com",
    },
    {
      label: "LinkedIn",
      value: "Connect professionally",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/sneha-patel-473264337",
    },
    {
      label: "GitHub",
      value: "View my projects",
      icon: <FaGithub />,
      href: "https://github.com/Sneha-patel16",
    },
    {
      label: "LeetCode",
      value: "Coding practice",
      icon: <SiLeetcode />,
      href: "https://leetcode.com/u/Sneha_patel16",
    },
  ];

  return (
    <SectionWrapper>
      <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
        <p className="text-cyan-400 text-center font-semibold mb-3">
          Let’s Connect
        </p>

        <h2 className="section-title blue-gradient">
          Let’s Build Something Amazing Together
        </h2>

        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-14">
          I am actively seeking opportunities in Data Science, AI/ML, Analytics,
          and Software Development. Feel free to connect for internships,
          collaborations, research work, and entry-level roles.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="glow-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-5 text-cyan-400">
              Contact Information
            </h3>

            <div className="space-y-5">
              <p className="flex items-center gap-3 text-slate-300">
                <MdEmail className="text-cyan-400 text-xl" />
                snehapatel5212@gmail.com
              </p>

              <p className="flex items-center gap-3 text-slate-300">
                <FaPhoneAlt className="text-cyan-400 text-lg" />
                6268601170
              </p>

              <a
                href="/resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
              >
                <MdOutlineFileDownload />
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {links.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                className="glow-card rounded-2xl p-6 hover:-translate-y-2 transition duration-300"
              >
                <div className="text-3xl text-cyan-400 mb-4">
                  {item.icon}
                </div>

                <h4 className="font-semibold mb-2">{item.label}</h4>

                <p className="text-sm text-slate-400">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Contact;