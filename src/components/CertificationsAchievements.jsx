import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";
import {
  FaExternalLinkAlt,
  FaTrophy,
  FaCloud,
  FaPython,
  FaNetworkWired,
  FaRobot,
  FaChartLine,
  FaUniversity,
  FaAward,
} from "react-icons/fa";
import { SiCisco, SiGooglecloud } from "react-icons/si";

function CertificateAchievement() {
  const items = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      category: "Cloud & Data Science",
      type: "Certificate",
      issuer: "Oracle University",
      date: "Oct 2025",
      icon: <FaCloud />,
      color: "text-red-400",
      bg: "bg-red-500/10",
      glow: "hover:shadow-[0_0_35px_rgba(248,113,113,0.25)]",
      link: "https://media.licdn.com/dms/image/v2/D4D22AQEihvRWyUw31w/feedshare-shrink_800/B4DZpShChOIMAg-/0/1762320988395?e=1782950400&v=beta&t=kFMgcSryhrgGJBv22xJFQ6gBPE-bROTL0jICxsm0hEw",
    },
    {
      title: "Data Analytics with Python",
      category: "Python Analytics",
      type: "Certificate",
      issuer: "NPTEL / IIT Roorkee",
      date: "Jan–Apr 2025",
      icon: <FaPython />,
      color: "text-yellow-400",
      bg: "bg-yellow-500/10",
      glow: "hover:shadow-[0_0_35px_rgba(250,204,21,0.25)]",
      link: "https://media.licdn.com/dms/image/v2/D4D22AQGjc_WHvQGPqA/feedshare-shrink_800/B4DZbY7QjUG0Ak-/0/1747396144177?e=1782950400&v=beta&t=gormOfle8KYH6PPRg6c9SqLWh7EWbgveMj1BE9pTLmo",
    },
    {
      title: "Foundations of Data Science",
      category: "Data Science",
      type: "Certificate",
      issuer: "Google / Coursera",
      date: "Jan 2025",
      icon: <FaChartLine />,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      glow: "hover:shadow-[0_0_35px_rgba(96,165,250,0.25)]",
      link: "https://media.licdn.com/dms/image/v2/D4D22AQEoSV-qW43OpQ/feedshare-shrink_800/B4DZQgO2tkGgAg-/0/1735707556563?e=1782950400&v=beta&t=C0UxIGcaewawWteEYb3Tgm6kfBf1B6UuF8A2EZii2Gs",
    },
    {
      title: "Introduction to Data Science",
      category: "Data Science",
      type: "Certificate",
      issuer: "Cisco Networking Academy",
      date: "Sep 2025",
      icon: <SiCisco />,
      color: "text-cyan-400",
      bg: "bg-cyan-500/10",
      glow: "hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]",
      link: "https://media.licdn.com/dms/image/v2/D4D22AQEeCH-4iCqYkw/feedshare-shrink_800/B4DZmUXr2WIYAg-/0/1759130867843?e=1782950400&v=beta&t=aRx6FYvTCjNYmU_3Hk8N9khEzjykR8ACA8KXP7XyWFI",
    },
    {
      title: "IEEE Inter-Branch Project Competition",
      category: "Event Coordination",
      type: "Achievement",
      issuer: "IEEE / BGI",
      date: "Dec 2025",
      icon: <FaNetworkWired />,
      color: "text-indigo-400",
      bg: "bg-indigo-500/10",
      glow: "hover:shadow-[0_0_35px_rgba(129,140,248,0.25)]",
      link: "https://media.licdn.com/dms/image/v2/D5622AQEEb9aDcp6-Wg/feedshare-shrink_1280/B56ZtQ_wIAJ8As-/0/1766590449511?e=1782950400&v=beta&t=3UPgFtYQg4GJWp-7dCHM_rJ9unYDn7GwNG_vfUyJIeY",
    },
    {
      title: "Winter Consulting Program 2025",
      category: "Consulting & Analytics",
      type: "Achievement",
      issuer: "Consulting & Analytics Club, IIT Guwahati",
      date: "2025",
      icon: <FaUniversity />,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      glow: "hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]",
      link: "https://media.licdn.com/dms/image/v2/D4D22AQGd4fF9o6D7Cg/feedshare-shrink_800/B4DZwXq9reKEAg-/0/1769923664944?e=1782950400&v=beta&t=uoavL1TkMiT2UaJy3ZzS9CBAIoT31x0lQ8vM_5l-lTY",
    },
    {
      title: "Convolve 4.0 – Certificate of Merit",
      category: "AI/ML Hackathon",
      type: "Achievement",
      issuer: "Convolve 4.0",
      date: "Jan–Feb 2026",
      icon: <FaTrophy />,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      glow: "hover:shadow-[0_0_35px_rgba(251,191,36,0.25)]",
      link: "https://media.licdn.com/dms/image/v2/D4D22AQGu184zLQNOhQ/feedshare-shrink_800/B4DZxHvHswJwAk-/0/1770730061475?e=1782950400&v=beta&t=Skl_VygH3pPLNx6jeWKXiPFFUQn4DBLaomgN9wFTnyM",
    },
    {
      title: "BGI Hackathon 2026 – Vision 2047",
      category: "Hackathon",
      type: "Achievement",
      issuer: "Bansal Group of Institutes",
      date: "May 2026",
      icon: <FaAward />,
      color: "text-pink-400",
      bg: "bg-pink-500/10",
      glow: "hover:shadow-[0_0_35px_rgba(244,114,182,0.25)]",
      link: "https://media.licdn.com/dms/image/v2/D5622AQE3vNhoiUgySw/feedshare-shrink_800/B56Z6szUIRKAAc-/0/1781015593925?e=1782950400&v=beta&t=ifUR3b0Cfc9lf9cKM9a8Fj3jnE0201hAQGPrNKb1sQA",
    },
    {
      title: "Professional Learning Badge",
      category: "Digital Badge",
      type: "Badge",
      issuer: "LinkedIn Shared Badge",
      date: "2025",
      icon: <FaRobot />,
      color: "text-teal-400",
      bg: "bg-teal-500/10",
      glow: "hover:shadow-[0_0_35px_rgba(45,212,191,0.25)]",
      link: "https://media.licdn.com/dms/image/sync/v2/D4D27AQGmif1hMv18zg/articleshare-shrink_160/B4DZol5Mv1JcAk-/0/1761572343253?e=1781856000&v=beta&t=0eE2X-u8-a45aCOKmJ5VjZGpDSna4V4_CAaOpKzrwnc",
    },
    {
      title: "Google Cloud Skills Boost Badge",
      category: "Cloud Badge",
      type: "Badge",
      issuer: "Google Cloud",
      date: "2025",
      icon: <SiGooglecloud />,
      color: "text-green-400",
      bg: "bg-green-500/10",
      glow: "hover:shadow-[0_0_35px_rgba(74,222,128,0.25)]",
      link: "https://media.licdn.com/dms/image/sync/v2/D5627AQEKZiyGHLdZ2w/articleshare-shrink_160/B56ZwACzWXJEAk-/0/1769527261034?e=1781856000&v=beta&t=CrFOEwdVWHgOwTfnRW684pA1n-bQTbIU57kaTO8Q-Yc",
    },
  ];

  return (
    <SectionWrapper>
      <section id="certifications" className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-extrabold mb-4">
          Certifications &{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
            Achievements
          </span>
        </h2>

        <p className="text-center text-slate-400 max-w-3xl mx-auto mb-14">
          Verified certifications, hackathon achievements, and learning badges
          across Data Science, AI, Cloud, Analytics, and professional development.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.25 }}
              className={`group relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80 backdrop-blur-xl p-7 transition-all duration-500 ${item.glow}`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${item.bg} blur-3xl`}></div>

              <div className="flex items-center justify-between mb-6 relative z-10">
                <div
                  className={`w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center text-3xl`}
                >
                  {item.icon}
                </div>

                <span
                  className={`px-3 py-1 rounded-full ${item.bg} border border-slate-700 ${item.color} text-xs font-bold`}
                >
                  {item.type}
                </span>
              </div>

              <p className={`text-sm font-semibold mb-2 ${item.color}`}>
                {item.category}
              </p>

              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {item.title}
              </h3>

              <p className="text-slate-400 text-sm mb-2">
                {item.issuer}
              </p>

              <p className="text-slate-500 text-xs mb-6">
                {item.date}
              </p>

              <div className={`flex items-center gap-2 font-semibold ${item.color}`}>
                View Credential
                <FaExternalLinkAlt className="text-sm group-hover:translate-x-1 transition" />
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </SectionWrapper>
  );
}

export default CertificateAchievement;