import SectionWrapper from "./SectionWrapper";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function CodingProfiles() {
  return (
    <SectionWrapper>
      <section id="coding" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title blue-gradient">Coding Profiles</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <a
            href="https://github.com/Sneha-patel16"
            target="_blank"
            className="glow-card rounded-2xl p-8 hover:-translate-y-2 transition duration-300"
          >
            <FaGithub className="text-5xl text-blue-400 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">GitHub</h3>
            <p className="text-slate-300">
              Explore my projects, repositories, and development work in Data Science, AI/ML, and analytics.
            </p>
          </a>

          <a
            href="https://leetcode.com/u/Sneha_patel16"
            target="_blank"
            className="glow-card rounded-2xl p-8 hover:-translate-y-2 transition duration-300"
          >
            <SiLeetcode className="text-5xl text-blue-400 mb-5" />
            <h3 className="text-2xl font-semibold mb-3">LeetCode</h3>
            <p className="text-slate-300">
              Track my problem-solving practice and coding consistency for technical interview preparation.
            </p>
          </a>
        </div>
      </section>
    </SectionWrapper>
  );
}

export default CodingProfiles;