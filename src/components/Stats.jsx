import SectionWrapper from "./SectionWrapper";
import { FaProjectDiagram, FaCertificate, FaCode, FaBrain } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaProjectDiagram />,
      number: "10+",
      label: "Projects",
    },
    {
      icon: <FaCertificate />,
      number: "15+",
      label: "Certificates",
    },
    {
      icon: <FaCode />,
      number: "200+",
      label: "Coding Hours",
    },
    {
      icon: <FaBrain />,
      number: "5+",
      label: "AI Solutions",
    },
  ];

  return (
    <SectionWrapper>
      <section className="py-12 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="
                rounded-2xl
                border border-slate-700/70
                bg-slate-900/60
                backdrop-blur-xl
                p-6
                text-center
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]
                transition-all
                duration-300
              "
            >
              <div className="text-cyan-300 text-3xl flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-4xl font-extrabold text-white">
                {item.number}
              </h3>

              <p className="text-slate-400 mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default Stats;