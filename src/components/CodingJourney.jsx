import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaCode, FaDatabase, FaRocket } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function CodingJourney() {
  const cards = [
    {
      icon: <FaGithub />,
      title: "GitHub Development",
      desc: "Project repositories showcasing my work in Data Science, AI/ML, Analytics, and application development.",
      points: ["AI & ML Projects", "Data Analytics Work", "Version Control"],
      button: "View GitHub",
      link: "https://github.com/Sneha-patel16",
    },
    {
      icon: <SiLeetcode />,
      title: "Problem Solving",
      desc: "Consistent practice to strengthen programming logic, DSA fundamentals, SQL, and interview preparation.",
      points: ["Python DSA", "SQL Practice", "Logical Thinking"],
      button: "View LeetCode",
      link: "https://leetcode.com/u/Sneha_patel16",
    },
    {
      icon: <FaRocket />,
      title: "Current Focus",
      desc: "Improving job-ready skills through hands-on projects, technical learning, and placement preparation.",
      points: ["Machine Learning", "Big Data Analytics", "Cloud Fundamentals"],
      button: "View Projects",
      link: "#projects",
    },
  ];

  return (
    <SectionWrapper>
      <section id="coding" className="py-24 px-6 max-w-7xl mx-auto">
        <p className="text-cyan-400 text-center font-semibold mb-3">
          Coding & Growth
        </p>

        <h2 className="section-title blue-gradient">
          Development Journey
        </h2>

        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-14">
          A focused view of my project development, coding practice, and
          continuous learning across Data Science, AI/ML, analytics, and
          technical interview preparation.
        </p>

        <div className="grid lg:grid-cols-3 gap-7">
          {cards.map((card, index) => (
            <div
              key={index}
              className="glow-card rounded-3xl p-8 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl text-cyan-400 mb-6">
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {card.title}
              </h3>

              <p className="text-slate-400 leading-7 mb-6">
                {card.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {card.points.map((point, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm"
                  >
                    {point}
                  </span>
                ))}
              </div>

              <a
                href={card.link}
                target={card.link.startsWith("http") ? "_blank" : "_self"}
                className="inline-flex px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
              >
                {card.button}
              </a>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default CodingJourney;