"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Folder,
  Layers,
  Sparkles,
  Globe,
  X,
  FileCheck,
  CheckCircle2,
  FileText,
  Search,
  Layout,
  ClipboardList,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: "featured" | "systems" | "qa" | "ui-ux";
  categoryLabel: string;
  description: string;
  role: string;
  technologies: string[];
  featured: boolean;
  github?: string;
  demo?: string;
  highlights?: string[];
}

const projectsList: Project[] = [
  {
    id: "lankageo",
    title: "LankaGeo – Flood Detection System",
    category: "featured",
    categoryLabel: "Capstone Project / GIS",
    description:
      "A Sri Lanka-focused flood detection and historical flood risk analysis platform using satellite imagery and geospatial technologies. Integrates Sentinel satellite data and Google Earth Engine for real-time flood monitoring and historical risk insights.",
    role: "Requirements Analysis, System Architecture & User Testing",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Google Earth Engine",
      "PostgreSQL",
      "PostGIS",
      "Tailwind CSS",
    ],
    featured: true,
    github: "https://github.com/kasunihansani",
    demo: "#",
    highlights: [
      "Sentinel-1 SAR & Sentinel-2 Satellite Feeds",
      "Google Earth Engine Geospatial Processing",
      "SRS Requirements & Use Case Specification",
      "End-to-End Functional QA & Usability Testing",
    ],
  },
  {
    id: "academic-system",
    title: "Academic Portal & Systems Requirements Model",
    category: "systems",
    categoryLabel: "Academic Project",
    description:
      "Comprehensive requirements engineering project involving SRS documentation, use case modeling, process flow diagrams, and ER relational database schema design for a university academic management portal.",
    role: "Business Analyst & Systems Modeling",
    technologies: [
      "SRS Specification",
      "Use Case Modeling",
      "Process Mapping",
      "MySQL",
      "Figma",
      "Agile Methodology",
    ],
    featured: false,
    github: "https://github.com/kasunihansani",
    highlights: [
      "Detailed Business Requirement Document (BRD)",
      "Interactive Wireframes & Flowcharts",
      "Database Entity-Relationship (ER) Design",
    ],
  },
  {
    id: "qa-suite",
    title: "Software QA & Automated Testing Suite",
    category: "qa",
    categoryLabel: "Testing Project",
    description:
      "Structured software quality assurance project featuring test case development, automated REST API testing via Postman collections, Selenium UI automation scripts, and defect tracking in Jira.",
    role: "QA Analyst & Test Automation Lead",
    technologies: [
      "Postman",
      "Selenium",
      "Test Plans",
      "Jira Bug Tracking",
      "REST APIs",
      "Agile Retrospectives",
    ],
    featured: false,
    github: "https://github.com/kasunihansani",
    highlights: [
      "Postman Automated API Test Suites",
      "Selenium Regression Test Scripts",
      "Comprehensive Bug Matrix & Test Reports",
    ],
  },
  {
    id: "uiux-prototype",
    title: "User-Centered Digital Platform UI/UX Prototype",
    category: "ui-ux",
    categoryLabel: "UI/UX Project",
    description:
      "High-fidelity interactive mobile and web prototype designed in Figma, focusing on intuitive user journeys, accessibility standards (WCAG), responsive components, and user usability testing.",
    role: "UI/UX Designer",
    technologies: [
      "Figma",
      "Wireframing",
      "Interactive Prototyping",
      "User Research",
      "Design Systems",
      "Usability Testing",
    ],
    featured: false,
    github: "https://github.com/kasunihansani",
    demo: "#",
    highlights: [
      "Interactive User Flow Mockups",
      "Consistent Design Token Library",
      "Usability Feedback Integration",
    ],
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsList.filter((project) => {
    if (activeTab === "all") return true;
    if (activeTab === "featured") return project.featured;
    return project.category === activeTab;
  });

  return (
    <section
      id="projects"
      className="relative border-t border-white/10 px-6 py-24 sm:py-28 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute -left-20 top-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading & Tabs */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" /> Featured Work & Projects
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Academic & practical projects.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-300">
              A collection of academic and practical work demonstrating experience in business analysis, software QA testing, UI/UX design, and geospatial system development.
            </p>
          </div>

          {/* Filter Category Tabs */}
          <div className="flex flex-wrap gap-2 rounded-2xl border border-white/10 bg-slate-900/60 p-1.5 backdrop-blur-md">
            {[
              { id: "all", label: "All Projects" },
              { id: "featured", label: "Featured Spotlight" },
              { id: "systems", label: "BA & Systems" },
              { id: "qa", label: "QA & Testing" },
              { id: "ui-ux", label: "UI/UX Design" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-slate-950 shadow-md shadow-sky-500/20"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Project Showcase (LankaGeo Spotlight) */}
        {projectsList
          .filter((p) => p.featured)
          .map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative mt-12 overflow-hidden rounded-3xl border border-sky-500/30 bg-gradient-to-br from-sky-950/40 via-slate-900/90 to-purple-950/20 p-8 shadow-2xl backdrop-blur-xl sm:p-10"
            >
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                {/* Left: Info */}
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-400/40 bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-300">
                      <Globe className="h-3.5 w-3.5" /> Featured Spotlight
                    </span>
                    <span className="text-xs font-medium text-slate-400">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                    {project.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
                    {project.highlights?.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/60 px-3 py-2 text-xs text-slate-200"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-400" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-slate-950/80 px-2.5 py-1 text-xs font-medium text-sky-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:shadow-sky-500/40 hover:-translate-y-0.5"
                    >
                      <FileText className="h-4 w-4" />
                      <span>View System Specs & Specs Breakdown</span>
                    </button>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/60 px-5 py-3 text-xs font-semibold text-slate-300 transition hover:border-sky-500/50 hover:text-white"
                      >
                        <span>GitHub Repository</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Visual Spotlight Card */}
                <div className="relative flex min-h-[260px] flex-col justify-center items-center overflow-hidden rounded-2xl border border-sky-500/20 bg-slate-950/80 p-8 text-center shadow-inner">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.15),transparent_70%)]" />

                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-500 to-indigo-500 text-3xl shadow-lg shadow-sky-500/30 text-white">
                    🌍
                  </div>

                  <h4 className="relative z-10 mt-4 text-lg font-bold text-white">
                    LankaGeo Platform
                  </h4>
                  <p className="relative z-10 mt-1 text-xs text-sky-300 font-medium">
                    Geospatial Flood Risk & Satellite Analytics
                  </p>
                  <p className="relative z-10 mt-3 text-[11px] text-slate-400 max-w-xs leading-relaxed">
                    Integrating Google Earth Engine & Sentinel Satellite Feeds for Sri Lanka regional analysis
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        {/* Other Projects Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects
              .filter((p) => !p.featured)
              .map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md transition duration-300 hover:border-sky-500/40 hover:bg-slate-900/90 hover:-translate-y-1 shadow-lg"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400">
                        {project.category === "systems" && (
                          <Search className="h-3.5 w-3.5" />
                        )}
                        {project.category === "qa" && (
                          <FileCheck className="h-3.5 w-3.5" />
                        )}
                        {project.category === "ui-ux" && (
                          <Layout className="h-3.5 w-3.5" />
                        )}
                        {project.categoryLabel}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    {/* Role Tag */}
                    <div className="mt-4 rounded-lg bg-white/5 px-3 py-1.5 text-[11px] font-medium text-slate-300 border border-white/5">
                      <span className="text-sky-400 font-semibold">Role: </span>
                      {project.role}
                    </div>
                  </div>

                  {/* Tech stack & Action */}
                  <div className="mt-6 pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-white/10 bg-slate-950 px-2 py-0.5 text-[11px] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition"
                      >
                        <span>View Repository</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>

      {/* LankaGeo Detailed Spotlight Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-sky-500/40 bg-slate-900 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close details modal"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3">
                <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-300">
                  Detailed Project Specification
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">
                {selectedProject.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                {selectedProject.description}
              </p>

              {/* Key Features Breakdown */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400">
                  Key System Capabilities & Scope
                </h4>
                <ul className="mt-3 space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-400 mt-0.5" />
                    <span>
                      <strong className="text-white">Satellite Data Processing:</strong> Ingestion of Sentinel-1 Synthetic Aperture Radar (SAR) and Sentinel-2 optical feeds.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-400 mt-0.5" />
                    <span>
                      <strong className="text-white">Google Earth Engine Integration:</strong> Automated geospatial cloud processing for flood inundation mapping.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-400 mt-0.5" />
                    <span>
                      <strong className="text-white">Business Requirements (BA):</strong> Complete SRS definition, stakeholder user stories, and system workflow modeling.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-sky-400 mt-0.5" />
                    <span>
                      <strong className="text-white">Software QA & Validation:</strong> Test plan execution, API endpoint testing via Postman, and UI usability validation.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Tech Stack Matrix */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Technologies & Architecture Stack
                </h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-slate-950 px-3 py-1 text-xs text-sky-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer Links */}
              <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-white/10 pt-5">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="rounded-full border border-white/15 bg-slate-800 px-5 py-2.5 text-xs font-semibold text-slate-300 hover:bg-slate-700 hover:text-white transition"
                >
                  Close
                </button>
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-sky-500 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-sky-400 transition"
                  >
                    <span>View GitHub Code</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}