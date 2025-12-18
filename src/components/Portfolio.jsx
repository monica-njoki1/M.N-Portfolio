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
                className="inline-block mt-3 px-5 py-2 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition shadow-[0_0_20px_#00ffff]"
                style={{
                  backgroundColor: 'cyan',
                  color: 'black',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.94)',
                  borderRadius: '10%',
                }}
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
                className="inline-block mt-3 px-5 py-2 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition shadow-[0_0_20px_#00ffff]"
                style={{
                  backgroundColor: 'cyan',
                  color: 'black',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.94)',
                  borderRadius: '10%',
                }}
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
                className="inline-block mt-3 px-5 py-2 bg-cyan-400 text-black rounded-lg font-semibold hover:bg-cyan-300 transition shadow-[0_0_20px_#00ffff]"
                style={{
                  backgroundColor: 'cyan',
                  color: 'black',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.94)',
                  borderRadius: '10%',
                }}
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
          style={{
            backgroundColor: 'cyan',
            color: 'black',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.94)',
            borderRadius: '10%',
          }}
        >
          Email Me
        </a>
      </section>

      {/* GITHUB LINK - Small at bottom */}
      <section className="py-8 text-center">
        <a
          href="https://github.com/monica-njoki1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
          style={{
            backgroundColor: 'cyan',
            color: 'black',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.94)',
            borderRadius: '10%',
          }}
        >
          GitHub
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