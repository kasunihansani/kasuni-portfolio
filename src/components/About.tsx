"use client";

import { motion } from "framer-motion";
import { Brain, Users, Sparkles } from "lucide-react";

export default function About() {
  const cards = [
    {
      number: "01",
      title: "Analytical Thinking",
      description:
        "Understanding requirements, identifying problems, and developing practical solutions.",
      icon: Brain,
      color: "from-sky-500/20 to-sky-500/5",
      borderColor: "border-sky-500/30",
      textColor: "text-sky-400",
    },
    {
      number: "02",
      title: "Collaboration",
      description:
        "Working effectively with teams, communicating ideas clearly, and contributing to shared goals.",
      icon: Users,
      color: "from-indigo-500/20 to-indigo-500/5",
      borderColor: "border-indigo-500/30",
      textColor: "text-indigo-400",
    },
    {
      number: "03",
      title: "Continuous Learning",
      description:
        "Continuously developing my technical, analytical, and professional skills.",
      icon: Sparkles,
      color: "from-purple-500/20 to-purple-500/5",
      borderColor: "border-purple-500/30",
      textColor: "text-purple-400",
    },
  ];

  return (
    <section
      id="about"
      className="relative border-t border-white/10 px-6 py-24 sm:py-28 overflow-hidden"
    >
      {/* Background Glow Ambient */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              About Me
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Curious, adaptable, and always learning.
            </h2>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-base leading-8 text-slate-300 sm:text-lg">
              I am an Information Systems undergraduate at Sabaragamuwa
              University of Sri Lanka with a strong interest in business
              analysis, project management, software quality assurance, and
              user-centered design.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
              Through academic projects and collaborative work, I have
              developed experience in requirements analysis, documentation,
              problem solving, software testing, databases, APIs, and working
              with Agile methodologies. I enjoy understanding problems,
              organizing ideas, and turning requirements into practical and
              user-friendly solutions.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
              I am looking for opportunities where I can apply my technical and
              analytical knowledge while developing my skills in Business
              Analysis, Project Management, QA, and UI/UX. I am particularly
              interested in learning from real-world projects and contributing
              effectively within a team.
            </p>

            {/* Highlights Cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {cards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                    className="group relative rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-sky-500/40 hover:bg-slate-900/90 hover:-translate-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-2xl font-black ${card.textColor}`}>
                        {card.number}
                      </span>
                      <Icon className={`h-5 w-5 ${card.textColor}`} />
                    </div>

                    <h3 className="mt-4 text-base font-bold text-white">
                      {card.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {card.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}