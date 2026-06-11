import SectionWrapper from "./SectionWrapper";

function Achievements() {
  const achievements = [
    "Certificate of Merit – Convolve 4.0 Hackathon",
    "Certificate of Appreciation – IEEE Inter-Branch Project Competition",
    "Certificate of Participation – Winter Consulting Program 2025, IIT Guwahati",
  ];

  return (
    <SectionWrapper>
      <section id="achievements" className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="section-title blue-gradient">Achievements</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {achievements.map((item, index) => (
            <div key={index} className="glow-card rounded-xl p-6 hover:-translate-y-2 transition duration-300">
              <p className="text-slate-300">🏆 {item}</p>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Achievements;