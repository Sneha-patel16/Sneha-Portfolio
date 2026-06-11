import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <SectionWrapper>
      <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title blue-gradient">Contact Me</h2>

        <p className="text-slate-400 text-center mb-10">
          Open to internships, entry-level roles, and project opportunities in Data Science, AI/ML, and Data Analytics.
        </p>

        <div className="glow-card rounded-2xl p-8 text-center space-y-5">
          <p className="flex justify-center items-center gap-3">
            <MdEmail className="text-blue-400" />
            snehapatel5212@gmail.com
          </p>

          <p className="flex justify-center items-center gap-3">
            <FaPhoneAlt className="text-blue-400" />
            6268601170
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-4 text-3xl">
            <a href="https://github.com/Sneha-patel16" target="_blank" className="hover:text-blue-400 transition">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/sneha-patel-473264337" target="_blank" className="hover:text-blue-400 transition">
              <FaLinkedin />
            </a>

            <a href="https://leetcode.com/u/Sneha_patel16" target="_blank" className="hover:text-blue-400 transition">
              <SiLeetcode />
            </a>
          </div>
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Contact;