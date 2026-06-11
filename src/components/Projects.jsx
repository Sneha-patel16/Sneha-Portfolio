import SectionWrapper from "./SectionWrapper";
import { FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "TrayamBakam AI",
      description:
        "AI-powered multimodal anxiety detection and emotional support system using facial, voice, and text analysis.",
      tech: ["Python", "NLP", "BERT", "Deep Learning"],
    },
    {
      title: "Visionix",
      description:
        "AI-driven analytics platform for automated data cleaning, visualization, dashboarding, and insight generation.",
      tech: ["Python", "Streamlit", "SQL", "Power BI"],
    },
    {
      title: "Salary Prediction",
      description:
        "Machine learning model for predicting salaries based on professional attributes.",
      tech: ["Python", "Machine Learning", "Streamlit"],
    },
    {
      title: "IMDb Movie Analysis",
      description:
        "EDA project focused on trends and insights from IMDb India movie datasets.",
      tech: ["Python", "Pandas", "Visualization"],
    },
    {
      title: "AI Chatbot",
      description:
        "Conversational AI chatbot designed to provide intelligent responses using NLP.",
      tech: ["Python", "NLP", "AI"],
    },
  ];

  return (
    <SectionWrapper>
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title blue-gradient">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glow-card rounded-2xl p-7 hover:-translate-y-2 transition duration-300">
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                {project.title}
              </h3>

              <p className="text-slate-300 mb-5">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((item, idx) => (
                  <span key={idx} className="text-sm bg-slate-800 text-slate-300 px-3 py-1 rounded-full">
                    {item}
                  </span>
                ))}
              </div>

              <a href="https://github.com/Sneha-patel16" target="_blank" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300">
                <FaGithub />
                <div className="flex gap-4">

                  <a
                    href="https://github.com/Sneha-patel16"
                    target="_blank"
                    className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                  >
                    GitHub
                  </a>
                  <button
                    className="px-4 py-2 border border-slate-700 rounded-lg hover:border-blue-500 transition"
                  >
                    Details
                  </button>

                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Projects;