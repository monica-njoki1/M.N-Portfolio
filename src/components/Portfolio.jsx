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
          height={350}
          width={460}
        />

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

        {/* AFRATER */}
        <motion.div className="w-full md:w-10/12 md:ml-auto project-card">
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
                style={{ backgroundColor: "cyan", color: "white", borderRadius: "20%" }}
                className="inline-block mt-3 px-5 py-2 font-semibold shadow-[0_0_20px_#00ffff]"
              >
                LIVE
              </a>
            </div>
          </div>
        </motion.div>

        {/* REELBRIEF */}
        <motion.div className="w-full md:w-10/12 md:mr-auto project-card">
          <div className="project-inner">
            <img src="/reelbrief.jpg" className="project-img" alt="ReelBrief" />
            <div>
              <h3 className="project-title">ReelBrief</h3>
              <p className="project-text">
                ReelBrief is an application designed for managing creative production workflows.
              </p>
              <a
                href="https://reel-brief-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "cyan", color: "white", borderRadius: "20%" }}
                className="inline-block mt-3 px-5 py-2 font-semibold shadow-[0_0_20px_#00ffff]"
              >
                LIVE
              </a>
            </div>
          </div>
        </motion.div>

        {/* ART GALLERY */}
        <motion.div className="w-full md:w-10/12 mx-auto project-card">
          <div className="project-inner md:justify-center">
            <img src="/artgallery.jpg" className="project-img" alt="Art Gallery" />
            <div>
              <h3 className="project-title">Art-Gallery Marketplace</h3>
              <p className="project-text">
                A smooth and modern marketplace for artists to showcase and sell curated art collections.
              </p>
              <a
                href="https://art-gallery-marketplace-frontend.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "cyan", color: "white", borderRadius: "20%" }}
                className="inline-block mt-3 px-5 py-2 font-semibold shadow-[0_0_20px_#00ffff]"
              >
                LIVE
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* CONTACT */}
      <section className="contact p-12 text-center">
        <a
          href="mailto:monicanjoki014@gmail.com"
          style={{ backgroundColor: "cyan", color: "white", borderRadius: "20%" }}
          className="px-8 py-3 font-semibold shadow-[0_0_20px_#00ffff]"
        >
          Email Me
        </a>
      </section>

      {/* GITHUB */}
      <section className="py-8 text-center">
        <a
          href="https://github.com/monica-njoki1"
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "cyan", color: "white", borderRadius: "20%" }}
          className="px-6 py-2 font-semibold shadow-[0_0_20px_#00ffff]"
        >
          GitHub
        </a>
      </section>

      <footer className="footer text-center py-6 border-t border-neutral-700 text-gray-400">
        © {new Date().getFullYear()} Freeamok — Vision Without Limits
      </footer>
    </div>
  );
}
