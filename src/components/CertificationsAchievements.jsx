import SectionWrapper from "./SectionWrapper";
import {
  FaAward,
  FaCloud,
  FaBrain,
  FaChartLine,
  FaPython,
  FaNetworkWired,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

function CertificationsAchievements() {
  const items = [
    {
      type: "Certification",
      icon: <FaCloud />,
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle",
      skills: ["Cloud", "Data Science", "AI"],
    },
    {
      type: "Certification",
      icon: <FaPython />,
      title: "Data Analytics with Python",
      issuer: "NPTEL",
      skills: ["Python", "Analytics", "EDA"],
    },
    {
      type: "Certification",
      icon: <FaChartLine />,
      title: "GenAI Powered Data Analytics Simulation",
      issuer: "Forage",
      skills: ["GenAI", "Analytics", "Business Insights"],
    },
    {
      type: "Certification",
      icon: <FaBrain />,
      title: "Introduction to Generative AI",
      issuer: "Microsoft",
      skills: ["Generative AI", "AI Tools", "Prompting"],
    },
    {
      type: "Certification",
      icon: <FaNetworkWired />,
      title: "Introduction to Data Science",
      issuer: "Cisco Networking Academy",
      skills: ["Data Science", "Analytics", "Data Basics"],
    },
    {
      type: "Achievement",
      icon: <FaTrophy />,
      title: "Certificate of Merit – Convolve 4.0 Hackathon",
      issuer: "Hackathon",
      skills: ["Innovation", "Problem Solving", "Teamwork"],
    },
    {
      type: "Achievement",
      icon: <FaAward />,
      title: "IEEE Inter-Branch Project Competition",
      issuer: "IEEE",
      skills: ["Project Building", "Presentation", "Technical Skills"],
    },
    {
      type: "Achievement",
      icon: <FaUsers />,
      title: "Winter Consulting Program 2025",
      issuer: "IIT Guwahati",
      skills: ["Consulting", "Strategy", "Analysis"],
    },
  ];

  return (
    <SectionWrapper>
      <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto">
        <p className="text-cyan-400 text-center font-semibold mb-3">
          Learning & Recognition
        </p>

        <h2 className="section-title blue-gradient">
          Certifications & Achievements
        </h2>

        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-14">
          Certifications, hackathons, and achievements that reflect my learning
          journey in Data Science, AI, Cloud, Analytics, and problem-solving.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {items.map((item, index) => (
            <div
              key={index}
              className="glow-card rounded-3xl p-7 hover:-translate-y-2 transition duration-300"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="text-3xl text-cyan-400 bg-cyan-400/10 p-4 rounded-2xl">
                  {item.icon}
                </div>

                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${
                      item.type === "Certification"
                        ? "bg-cyan-500/10 text-cyan-400"
                        : "bg-purple-500/10 text-purple-400"
                    }`}
                  >
                    {item.type}
                  </span>

                  <h3 className="text-lg font-bold text-white leading-7">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-400 mt-2">
                    {item.issuer}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-5">
                {item.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs"
                  >
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

export default CertificationsAchievements;