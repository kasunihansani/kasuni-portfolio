"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  ArrowRight,
  GraduationCap,
  FileCheck,
  Search,
  Layout,
  ClipboardList,
} from "lucide-react";

// Clean custom SVG icons for social platforms
const GithubIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section id="hero" className="relative flex min-h-[92vh] items-center overflow-hidden px-6 pt-28 pb-16">
      {/* Background Decorative Ambient Blobs */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-[450px] w-[450px] rounded-full bg-sky-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-20 top-1/3 h-[400px] w-[400px] rounded-full bg-indigo-500/15 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/3 bottom-10 h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-[100px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Left Column: Hero Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start text-left"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300 shadow-sm shadow-sky-500/10 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-400" />
              </span>
              Information Systems Undergraduate
            </span>
          </motion.div>

          {/* Main Name Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Kasuni Hansani
            </span>
          </motion.h1>

          {/* Subtitle Role */}
          <motion.h2
            variants={itemVariants}
            className="mt-4 flex flex-wrap items-center gap-2 text-lg font-medium text-slate-200 sm:text-xl md:text-2xl"
          >
            <span>Business Analyst</span>
            <span className="text-sky-400">&bull;</span>
            <span className="text-indigo-300">Project Coordinator</span>
            <span className="text-sky-400">&bull;</span>
            <span className="text-purple-300">QA Analyst</span>
            <span className="text-sky-400">&bull;</span>
            <span className="text-cyan-300">UI/UX Designer</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg"
          >
            I&apos;m an Information Systems undergraduate at Sabaragamuwa University of Sri Lanka, interested in business analysis, project coordination, software quality assurance, and user-centered design. I enjoy understanding requirements, improving processes, testing software, and creating intuitive digital experiences.
          </motion.p>

          {/* Focus Tags Matrix */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap gap-2.5"
          >
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm">
              <Search className="h-3.5 w-3.5 text-sky-400" /> Business Analysis
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm">
              <ClipboardList className="h-3.5 w-3.5 text-indigo-400" /> Project Coordination
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm">
              <FileCheck className="h-3.5 w-3.5 text-purple-400" /> Software QA & Testing
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-1.5 text-xs font-medium text-slate-300 shadow-sm backdrop-blur-sm">
              <Layout className="h-3.5 w-3.5 text-cyan-400" /> UI/UX Design
            </span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-purple-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition duration-300 hover:shadow-sky-500/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Explore My Work</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-7 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition duration-300 hover:border-sky-500/50 hover:bg-slate-800/80 hover:text-sky-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Mail className="h-4 w-4 text-sky-400" />
              <span>Get In Touch</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-4 border-t border-white/10 pt-6"
          >
            <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Connect with me:
            </span>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/kasunihansani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-300 transition hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400"
              >
                <GithubIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-300 transition hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400"
              >
                <LinkedinIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>

              <a
                href="mailto:kasunihansani7@gmail.com"
                aria-label="Send Email"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-300 transition hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-400"
              >
                <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image & Floating Glass Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Animated Glow Rings */}
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-purple-500/20 blur-2xl animate-pulse" />

            {/* Profile Picture Frame */}
            <div className="relative h-72 w-72 overflow-hidden rounded-[2.5rem] border-2 border-white/15 bg-slate-900 shadow-2xl shadow-sky-950/50 sm:h-84 sm:w-84 lg:h-96 lg:w-96">
              <Image
                src="/profile.jpeg"
                alt="Kasuni Hansani"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 640px) 288px, (max-width: 1024px) 336px, 384px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
            </div>

            {/* Floating Badge 1: Academic & Focus Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/90 p-3.5 shadow-xl backdrop-blur-xl sm:-left-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-white shadow-md shadow-sky-500/30">
                <Search className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-sky-400">
                  Career Focus
                </p>
                <p className="text-xs font-bold text-white">
                  BA &bull; QA &bull; UI/UX
                </p>
              </div>
            </motion.div>

            {/* Floating Badge 2: Sabaragamuwa University Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -top-5 -right-5 flex items-center gap-3 rounded-2xl border border-white/15 bg-slate-950/90 p-3 shadow-xl backdrop-blur-xl sm:-right-8"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                <GraduationCap className="h-4 w-4" />
              </div>
              <div className="pr-2">
                <p className="text-[10px] font-medium text-slate-400">
                  Sabaragamuwa Univ
                </p>
                <p className="text-xs font-semibold text-slate-200">
                  B.Sc. Hons IS
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

