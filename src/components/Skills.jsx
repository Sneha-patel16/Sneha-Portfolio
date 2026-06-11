import SectionWrapper from "./SectionWrapper";
import { FaPython, FaGithub } from "react-icons/fa";
import { TbBrain, TbChartBar } from "react-icons/tb";

function Skills() {
  const skillGroups = [
    {
      title: "Programming & Databases",
      icon: <FaPython />,
      skills: ["Python", "SQL", "Data Structures", "Algorithms"],
    },
    {
      title: "Data Analysis & Visualization",
      icon: <TbChartBar />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI", "Excel"],
    },
    {
      title: "Machine Learning & AI",
      icon: <TbBrain />,
      skills: ["Machine Learning", "Deep Learning Basics", "NLP", "Data Preprocessing"],
    },
    {
      title: "Tools & Platforms",
      icon: <FaGithub />,
      skills: ["GitHub", "Streamlit", "Jupyter Notebook", "Google Cloud", "Oracle Cloud"],
    },
  ];

  return (
    <SectionWrapper>
      <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
        <p className="text-blue-400 text-center font-semibold mb-3">
          What I Work With
        </p>

        <h2 className="section-title blue-gradient">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, index) => (
            <div key={index} className="glow-card rounded-2xl p-7 hover:-translate-y-2 transition duration-300">
              <div className="flex items-center gap-4 mb-5">
                <div className="text-3xl text-blue-400 bg-slate-800 p-3 rounded-xl">
                  {group.icon}
                </div>

                <h3 className="text-2xl font-semibold">{group.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-full text-slate-300 text-sm hover:text-blue-400 hover:border-blue-500 transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Skills;