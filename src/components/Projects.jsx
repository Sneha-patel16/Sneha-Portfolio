import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "TrayamBakam AI",
      problem:
        "Students often struggle with anxiety and stress, while most detection systems rely on only one input source.",
      description:
        "A multimodal AI system for anxiety detection using facial expressions, voice tone, and text emotion analysis.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1200&q=80",
      tech: ["Python", "NLP", "BERT", "Deep Learning", "Emotion AI"],
      features: [
        "Facial emotion recognition",
        "Voice tone analysis",
        "Text emotion detection",
        "AI emotional support system",
      ],
      github: "https://github.com/Sneha-patel16",
      live: "#",
    },
    {
      title: "Visionix",
      problem:
        "Raw datasets require cleaning, preprocessing, dashboards, and insights before they become useful.",
      description:
        "An AI-powered analytics and business intelligence platform for automated data cleaning, visualization, and insights.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      tech: ["Python", "Streamlit", "SQL", "Power BI", "EDA"],
      features: [
        "Automated data cleaning",
        "EDA and visualization",
        "Interactive dashboard",
        "Insight generation",
      ],
      github: "https://github.com/Sneha-patel16",
      live: "#",
    },
    {
      title: "Salary Prediction System",
      problem:
        "Salary estimation helps understand how experience, role, and skills influence compensation.",
      description:
        "A machine learning model that predicts salaries based on professional and job-related attributes.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
      tech: ["Python", "Machine Learning", "Regression", "Streamlit"],
      features: [
        "Regression model",
        "Feature preprocessing",
        "Interactive prediction UI",
        "Model evaluation",
      ],
      github: "https://github.com/Sneha-patel16",
      live: "#",
    },
    {
      title: "IMDb India Movie Analysis",
      problem:
        "Movie datasets contain hidden trends related to ratings, genres, actors, and audience preferences.",
      description:
        "A data analysis project exploring IMDb India movie data to identify meaningful entertainment industry insights.",
      image:
        "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      tech: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
      features: [
        "Data cleaning",
        "Genre-based analysis",
        "Rating trends",
        "Visual insights",
      ],
      github: "https://github.com/Sneha-patel16",
      live: "#",
    },
    {
      title: "Titanic Survival Prediction",
      problem:
        "Passenger survival can be predicted using demographic and travel-related features.",
      description:
        "A machine learning classification project predicting Titanic passenger survival using structured data.",
      image:
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
      tech: ["Python", "Pandas", "Scikit-Learn", "Classification"],
      features: [
        "Data preprocessing",
        "Feature engineering",
        "Classification model",
        "Accuracy evaluation",
      ],
      github: "https://github.com/Sneha-patel16",
      live: "#",
    },
    {
      title: "YouTube Data Analysis",
      problem:
        "YouTube data can reveal trends in audience engagement, video performance, and content strategy.",
      description:
        "A data analytics project analyzing YouTube video metrics to understand views, likes, comments, and engagement patterns.",
      image:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=1200&q=80",
      tech: ["Python", "Pandas", "EDA", "Data Visualization"],
      features: [
        "Video performance analysis",
        "Engagement trend analysis",
        "Data visualization",
        "Insight generation",
      ],
      github: "https://github.com/Sneha-patel16",
      live: "#",
    },
  ];

  return (
    <SectionWrapper>
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <p className="text-cyan-400 text-center font-semibold mb-3">
          Selected Work
        </p>

        <h2 className="section-title blue-gradient">Featured Projects</h2>

        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-14">
          Practical AI, Machine Learning, and Data Analytics projects focused on
          real-world problem solving and data-driven insights.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glow-card rounded-3xl overflow-hidden hover:-translate-y-2 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover opacity-90"
              />

              <div className="p-7">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-300 mb-4 text-sm leading-7">
                  <span className="font-semibold text-white">Problem: </span>
                  {project.problem}
                </p>

                <p className="text-slate-400 mb-6 text-sm leading-7">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-white">
                    Key Features
                  </h4>

                  <ul className="grid sm:grid-cols-2 gap-2 text-slate-300 text-sm">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-black text-sm font-semibold hover:bg-cyan-400 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-sm hover:border-cyan-400 transition"
                  >
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>

                  <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700 text-sm hover:border-cyan-400 transition">
                    <FaInfoCircle />
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Projects;