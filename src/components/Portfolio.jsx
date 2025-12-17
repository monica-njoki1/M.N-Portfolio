// src/pages/Portfolio.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Animation from "../components/Animation";

export default function Portfolio() {
  const rotatingTexts = [
    "Full-Stack Software Developer",
    "Aspiring Fraud Analyst",
    "AI Innovator",
    "Robotics Enthusiast (learning phase)",
    "Ethical Hacking Beginner",
    "Future Tech Visionary"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="w-full min-h-screen overflow-x-hidden scroll-smooth relative"
      style={{
        fontFamily: "Orbitron, sans-serif",
        margin: 0,
        padding: 0,
      }}
    >
      {/* FULLSCREEN MOVING BACKGROUND */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          background: "linear-gradient(90deg, #000000ff 0%, #0f172a 50%, #000000 100%)",
          backgroundSize: "200% 200%",
          animation: "gradientMove 8s ease infinite",
          zIndex: -1,
        }}
      />

      <style>
        {`
          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #000000ff 0%, #0f172a 50%, #000000 100%);
          }
          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* HERO SECTION */}
      <section className="w-full h-screen flex flex-col justify-center items-center text-center p-6">
        <motion.h1
          className="main-title text-5xl md:text-7xl font-extrabold tracking-wide text-cyan-300 drop-shadow-[0_0_20px_#00ffff]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          MONICA NJOKI
        </motion.h1>

        <motion.img
          src="/eye.jpg"
          alt="Future Vision"
          className="w-40 h-40 mt-6 mb-6 rounded-full object-cover shadow-[0_0_40px_#00ffff]"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          height={350} width={460}
        />

        {/* CYAN ROTATING TEXT FIXED */}
        <div className="text-cyan-300 drop-shadow-[0_0_15px_#00ffff]">
          <Animation text={rotatingTexts[index]} />
        </div>

        <motion.p
          className="p text-white max-w-xl mt-6 leading-relaxed text-lg opacity-90"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          I'm <span className="text-cyan-400 font-semibold">Monica Njoki</span> —
          also known as <span className="text-cyan-400 font-semibold">Freeamok</span>.
          Mentally free, unstoppable, and building the future through
          Software Engineering, AI, Cybersecurity, and Robotics.
        </motion.p>

        {/* GitHub Link */}
        <motion.a
          href="https://github.com/monica-njoki1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-cyan-400 rounded-lg font-semibold hover:bg-gray-700 transition border border-cyan-400/30 shadow-[0_0_15px_rgba(0,255,255,0.2)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View GitHub
        </motion.a>
      </section>

      {/* PROJECTS */}
      <section className="w-full flex flex-col gap-20 py-20 px-4">

        {/* ---------------- AFRATER ---------------- */}
        <motion.div
          className="w-full md:w-10/12 md:ml-auto project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="project-inner md:justify-end">
            <img src="/afrater.jpg" className="project-img md:order-2" alt="AFRATER" />
            <div className="md:text-right">
              <h3 className="project-title">AFRATER</h3>
              <p className="project-text">
                A fraud detection platform for minimizing MPESA scams through alert automation,
                con-pattern detection, and user protection. (ongoing project)
              </p>
              <a
                href="https://afrater-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-5 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition shadow-[0_0_15px_#00ffff]"
              >
                View Live →
              </a>
            </div>
          </div>
        </motion.div>

        {/* ---------------- REELBRIEF ---------------- */}
        <motion.div
          className="w-full md:w-10/12 md:mr-auto project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="project-inner md:justify-start">
            <img src="/reelbrief.jpg" className="project-img" alt="ReelBrief" />
            <div>
              <h3 className="project-title">ReelBrief</h3>
              <p className="project-text">
                ReelBrief is an application designed for managing creative production workflows.
                It helps teams stay organized without losing the creative spark. Users can create and view project briefs, assign tasks, and track progress through an interactive, user-friendly interface.
              </p>
              <a
                href="https://reel-brief-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-5 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition shadow-[0_0_15px_#00ffff]"
              >
                View Live →
              </a>
            </div>
          </div>
        </motion.div>

        {/* ---------------- ART GALLERY ---------------- */}
        <motion.div
          className="w-full md:w-10/12 mx-auto project-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="project-inner md:justify-center">
            <img src="/artgallery.jpg" className="project-img" alt="Art Gallery" />
            <div className="text-center md:text-left">
              <h3 className="project-title">Art-Gallery Marketplace</h3>
              <p className="project-text">
                A smooth and modern marketplace for artists to showcase and sell curated art collections.
              </p>
              <a
                href="https://art-gallery-marketplace-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-5 py-2 bg-cyan-500 text-black rounded-lg font-semibold hover:bg-cyan-400 transition shadow-[0_0_15px_#00ffff]"
              >
                View Live →
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SKILLS */}
      <section className="p-10 bg-black/40 backdrop-blur-md border-t border-cyan-700/40">
        <h2 className="skill text-4xl font-bold text-center mb-10 text-cyan-300 drop-shadow-[0_0_15px_#00ffff]">Skills</h2>

        <div className="grid md:grid-cols-3 text-center gap-10">
          <div className="skill-box">
            <h3 className="skill-title">Languages</h3>
            <p className="skill-text">HTML • CSS • JavaScript • Python</p>
          </div>
          <div className="skill-box">
            <h3 className="skill-title">Frameworks</h3>
            <p className="skill-text">React • Tailwind • Flask</p>
          </div>
          <div className="skill-box">
            <h3 className="skill-title">Tools</h3>
            <p className="skill-text">GitHub • Linux • REST APIs</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}

      <section className="contact p-12 text-center">
        <h2 className="connect text-4xl font-bold text-cyan-300 drop-shadow-[0_0_15px_#00ffff] mb-4">Let's Connect</h2>
        <p className="open text-gray-300 mb-6">Open to collaborations, tech ideas, and future-building opportunities.</p>

        <a
          href="mailto:monicanjoki014@gmail.com"
          className="bg-cyan-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-cyan-400 transition shadow-[0_0_20px_#00ffff]"
        >
          Email Me
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer text-center py-6 border-t border-neutral-700 text-gray-400">
        © {new Date().getFullYear()} Freeamok — Vision Without Limits 
      </footer>

      {/* EXTRA STYLES */}
      <style>
        {`
          .main-title {
            color: cyan;
            text-align: center;
          }
          .animation {
            animation: textGlow 3s ease-in-out infinite;
            color: #00ffff;
            text-align: center;
          }
          .connect {
            text-shadow: 0 0 10px #10e9e9ff;
            color: white;
          }
          .p {
            color: white;
            text-align: center;
            
          }
          .open {
            color: #d1d5db;
          }
          .footer {
            color: #9ca3af;
          }
          .contact a {
            box-shadow: 0 0 20px rgba(252, 255, 254, 0.94);
            color: cyan;
          }

          .project-card {
            background: rgba(15, 23, 42, 0.5);
            padding: 1.5rem;
            border-radius: 1.2rem;
            border: 1px solid rgba(0, 255, 255, 0.2);
            backdrop-filter: blur(4px);
            transition: 0.4s ease;
            box-shadow: 0 0 25px rgba(0, 255, 255, 0.1);
          }

          .project-card:hover {
            transform: translateY(-6px) scale(1.02);
            box-shadow: 0 0 35px rgba(0, 255, 255, 0.25);
            border-color: cyan;
          }

          .project-inner {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          }

          @media (min-width: 768px) {
            .project-inner {
              flex-direction: row;
            }
          }

          .project-img {
            height: 6rem;
            width: 10rem;
            border-radius: 0.8rem;
            object-fit: cover;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.12);
          }

          .project-title {
            font-size: 1.6rem;
            font-weight: 700;
            color: cyan;
          }

          .project-text {
            font-size: 1rem;
            color: #d1d5db;
            max-width: 28rem;
          }

          .skill {
            text-shadow: 0 0 10px #10e9e9ff;
            color: white;
          }

          .skill-box {
            padding: 1.5rem;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 1rem;
            border: 1px solid rgba(0,255,255,0.3);
            box-shadow: 0 0 20px rgba(0,255,255,0.1);
            transition: 0.3s ease;
          }

          .skill-title {
            font-size: 1.3rem;
            color: cyan;
            font-weight: bold;
            margin-bottom: .5rem;
          }

          .skill-text {
            color: white;
            opacity: .85;
          }
        `}
      </style>
    </div>
  );
}