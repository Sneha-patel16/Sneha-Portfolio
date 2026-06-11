import SectionWrapper from "./SectionWrapper";

function About() {
  return (
    <SectionWrapper>
      <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title blue-gradient">About Me</h2>

        <div className="glow-card rounded-2xl p-8">
          <p className="text-slate-300 leading-8 text-lg">
            I am a Data Science undergraduate passionate about Artificial Intelligence,
            Machine Learning, Data Analytics, and building real-world technology solutions.
            My interests lie in transforming raw data into meaningful insights and developing
            intelligent systems that solve practical problems.
          </p>

          <p className="text-slate-300 leading-8 text-lg mt-6">
            Through academic projects, internships, and continuous learning, I have gained
            experience in Python, SQL, Data Analysis, Machine Learning, Power BI, and modern
            development tools. I enjoy exploring emerging technologies and applying them to
            create impactful, data-driven solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {[
            ["5+", "Projects"],
            ["1", "Internship"],
            ["4+", "Certifications"],
            ["2027", "Graduation"],
          ].map((item, index) => (
            <div key={index} className="glow-card rounded-xl p-6 text-center hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-bold text-blue-400">{item[0]}</h3>
              <p className="text-slate-300">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default About;