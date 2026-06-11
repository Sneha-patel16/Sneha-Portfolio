import SectionWrapper from "./SectionWrapper";

function Experience() {
  return (
    <SectionWrapper>
      <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title blue-gradient">Experience</h2>

        <div className="glow-card rounded-2xl p-8 hover:-translate-y-2 transition duration-300">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
            <h3 className="text-2xl font-semibold text-blue-400">
              Data Science Intern
            </h3>

            <span className="text-slate-400">Dec 2024 – Jan 2025</span>
          </div>

          <p className="text-slate-300 font-medium mb-4">CodSoft</p>

          <ul className="list-disc list-inside text-slate-300 space-y-3">
            <li>Performed data cleaning, preprocessing, and exploratory data analysis using Python.</li>
            <li>Applied machine learning techniques to build and evaluate predictive models.</li>
            <li>Created data visualizations and reports to communicate insights effectively.</li>
          </ul>
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Experience;