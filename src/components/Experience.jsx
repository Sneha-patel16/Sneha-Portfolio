import SectionWrapper from "./SectionWrapper";
import {
  FaBriefcase,
  FaExternalLinkAlt,
  FaCertificate,
  FaPython,
  FaChartLine,
  FaBrain,
} from "react-icons/fa";

function Experience() {
  return (
    <SectionWrapper>
      <section
        id="experience"
        className="py-24 px-6 max-w-7xl mx-auto"
      >
        <p className="text-cyan-400 text-center font-semibold mb-3">
          Professional Journey
        </p>

        <h2 className="section-title blue-gradient">
          Experience
        </h2>

        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-14">
          Hands-on industry experience working on data science projects,
          machine learning workflows, analytics, and practical problem-solving
          using modern data technologies.
        </p>

        <div className="glow-card rounded-3xl p-10">

          <div className="flex items-center gap-5 mb-8">

            <div className="bg-cyan-500/10 p-4 rounded-2xl">
              <FaBriefcase className="text-cyan-400 text-3xl" />
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                Data Science Intern
              </h3>

              <p className="text-cyan-400 font-medium">
                CodSoft | Dec 2024 – Jan 2025
              </p>
            </div>

          </div>

          <p className="text-slate-300 leading-8 mb-8">
            Worked on real-world data science projects involving data analysis,
            machine learning model development, feature engineering, and data
            visualization. Applied Python-based analytics techniques to extract
            insights and solve practical business problems.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-10">

            <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-5">
              <FaPython className="text-cyan-400 text-2xl mb-3" />

              <h4 className="font-semibold mb-2">
                Python Development
              </h4>

              <p className="text-sm text-slate-400">
                Worked extensively with Python for analytics,
                preprocessing, and machine learning tasks.
              </p>
            </div>

            <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-5">
              <FaChartLine className="text-cyan-400 text-2xl mb-3" />

              <h4 className="font-semibold mb-2">
                Data Analytics
              </h4>

              <p className="text-sm text-slate-400">
                Performed exploratory data analysis, data cleaning,
                and visualization to uncover insights.
              </p>
            </div>

            <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-5">
              <FaBrain className="text-cyan-400 text-2xl mb-3" />

              <h4 className="font-semibold mb-2">
                Machine Learning
              </h4>

              <p className="text-sm text-slate-400">
                Built and evaluated predictive models using
                machine learning techniques.
              </p>
            </div>

          </div>

          <ul className="space-y-4 text-slate-300 mb-10">

            <li>
              ✓ Performed data cleaning, preprocessing, and exploratory data analysis.
            </li>

            <li>
              ✓ Built and evaluated machine learning models for predictive analytics.
            </li>

            <li>
              ✓ Developed visualizations and reports for data-driven decision making.
            </li>

            <li>
              ✓ Worked with real-world datasets and industry-oriented workflows.
            </li>

          </ul>

          <a
            href="https://media.licdn.com/dms/image/v2/D4D22AQEUvzXYAR9Acw/feedshare-shrink_800/B4DZRfw5f.HIAg-/0/1736773443183?e=1782950400&v=beta&t=ycAo2mzN7OWxAp_WLTbaMG8A6t2R4SlyQ5KaxU6RRh4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
          >
            <FaCertificate />
            View Completion Certificate
            <FaExternalLinkAlt />
          </a>

        </div>
      </section>
    </SectionWrapper>
  );
}

export default Experience;