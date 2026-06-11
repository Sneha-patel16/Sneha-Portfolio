import SectionWrapper from "./SectionWrapper";
import {
  FaGraduationCap,
  FaBriefcase,
  FaBrain,
  FaChartLine,
  FaCloud,
  FaTrophy,
} from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaGraduationCap />,
      text: "B.Tech Data Science (2023–2027)",
    },
    {
      icon: <FaBriefcase />,
      text: "Data Science Intern at CodSoft",
    },
    {
      icon: <FaBrain />,
      text: "AI & Machine Learning Enthusiast",
    },
    {
      icon: <FaChartLine />,
      text: "Data Analytics & Business Intelligence",
    },
    {
      icon: <FaCloud />,
      text: "Google & Oracle Cloud Certified",
    },
    {
      icon: <FaTrophy />,
      text: "Hackathons, Research & Projects",
    },
  ];

  return (
    <SectionWrapper>
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <p className="text-cyan-400 text-center font-semibold mb-3">
          About Me
        </p>

        <h2 className="section-title blue-gradient">
          Who I Am
        </h2>

        <div className="glow-card rounded-3xl p-8 mb-10">
          <p className="text-slate-300 text-lg leading-8 text-center max-w-4xl mx-auto">
            Data Science undergraduate passionate about Artificial Intelligence,
            Machine Learning, Data Analytics, and building impactful technology
            solutions. I enjoy transforming raw data into meaningful insights,
            developing AI-powered applications, and continuously exploring
            emerging technologies through real-world projects and research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="glow-card rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition duration-300"
            >
              <div className="text-2xl text-cyan-400">
                {item.icon}
              </div>

              <p className="text-slate-300 font-medium">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default About;