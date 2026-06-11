import SectionWrapper from "./SectionWrapper";
import Tilt from "react-parallax-tilt";
import { FaGithub, FaFileAlt, FaBrain } from "react-icons/fa";

function Research() {
  return (
    <SectionWrapper>
      <section id="research" className="py-24 px-6 max-w-7xl mx-auto">
        <p className="text-cyan-400 text-center font-semibold mb-3">
          Research & Innovation
        </p>

        <h2 className="section-title blue-gradient">
          AI Research Focus
        </h2>

        <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} glareEnable={true} glareMaxOpacity={0.1}>
          <div className="glow-card rounded-3xl p-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl text-cyan-400 bg-cyan-400/10 p-4 rounded-2xl">
                <FaBrain />
              </div>

              <div>
                <h3 className="text-3xl font-bold">
                  TrayamBakam AI: Multimodal Anxiety Detection System
                </h3>
                <p className="text-slate-400 mt-2">
                  AI-based mental wellness support using facial, voice, and textual emotion analysis.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mt-8">
              <div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">
                  Research Problem
                </h4>
                <p className="text-slate-300 leading-7">
                  Most emotion and anxiety detection systems rely on a single input such as text or facial expressions.
                  TrayamBakam AI focuses on combining facial expression analysis, voice emotion recognition,
                  and text-based sentiment understanding to create a more reliable software-only anxiety detection system.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">
                  Novel Contributions
                </h4>
                <ul className="text-slate-300 space-y-3">
                  <li>✓ Tri-modal anxiety detection architecture</li>
                  <li>✓ Facial, voice, and text emotion fusion</li>
                  <li>✓ Hinglish and Hindi emotion understanding scope</li>
                  <li>✓ Emotional support assistant for mood neutralization</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">
                Technologies & Methods
              </h4>

              <div className="flex flex-wrap gap-3">
                {["Python", "BERT", "NLP", "CNN", "LSTM", "CLIP", "Librosa", "Emotion AI", "Multimodal Fusion"].map((item, index) => (
                  <span key={index} className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-10">
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition">
                <FaFileAlt />
                Research Paper
              </a>

              <a href="https://github.com/Sneha-patel16" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:border-cyan-400 transition">
                <FaGithub />
                View Implementation
              </a>
            </div>
          </div>
        </Tilt>
      </section>
    </SectionWrapper>
  );
}

export default Research;