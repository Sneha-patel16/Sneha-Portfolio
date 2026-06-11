import { useEffect, useState } from "react";
import { FaProjectDiagram, FaCertificate, FaCode, FaBrain } from "react-icons/fa";

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 20);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(timer);
  }, [end]);

  return <>{count}</>;
}

function Stats() {
  const stats = [
    {
      icon: <FaProjectDiagram />,
      value: 10,
      suffix: "+",
      label: "Projects",
    },
    {
      icon: <FaCertificate />,
      value: 15,
      suffix: "+",
      label: "Certificates",
    },
    {
      icon: <FaCode />,
      value: 200,
      suffix: "+",
      label: "Coding Hours",
    },
    {
      icon: <FaBrain />,
      value: 5,
      suffix: "+",
      label: "AI Solutions",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="glow-card rounded-2xl p-6 text-center hover:-translate-y-2 transition duration-300"
          >
            <div className="text-4xl text-cyan-400 mb-4 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-3xl font-bold text-white">
              <Counter end={item.value} />
              {item.suffix}
            </h3>

            <p className="text-slate-400 mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;