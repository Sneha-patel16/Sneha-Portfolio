import SectionWrapper from "./SectionWrapper";

function Certifications() {
  const certifications = [
    "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    "Data Analytics with Python - NPTEL",
    "Introduction to Data Science - Cisco Networking Academy",
    "Tata GenAI Powered Data Analytics Simulation - Forage",
    "Microsoft Introduction to Generative AI",
  ];

  return (
    <SectionWrapper>
      <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title blue-gradient">Certifications</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="glow-card rounded-xl p-6 hover:-translate-y-2 transition duration-300">
              <p className="text-slate-300">📜 {cert}</p>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Certifications;