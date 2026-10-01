"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ClipboardList,
  FileCheck,
  Layout,
  Code,
  Database,
  Globe,
  Wrench,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: any;
  skills: string[];
  color: string;
  badgeBg: string;
  badgeText: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: "ba-pm",
    title: "Business Analysis & PM",
    description: "Requirements engineering, documentation, and Agile project coordination.",
    icon: ClipboardList,
    skills: ["Requirements Gathering", "User Stories", "BRD/SRS Documentation", "Process Mapping", "Agile / Scrum", "Jira", "Confluence"],
    color: "sky",
    badgeBg: "bg-sky-500/10 border-sky-500/30",
    badgeText: "text-sky-400",
  },
  {
    id: "qa-testing",
    title: "Software QA & Testing",
    description: "Quality assurance practices, test execution, and API validation.",
    icon: FileCheck,
    skills: ["Test Cases & Plans", "Manual Testing", "Postman", "Selenium", "Bug Tracking", "API Testing", "Sprint Retrospectives"],
    color: "indigo",
    badgeBg: "bg-indigo-500/10 border-indigo-500/30",
    badgeText: "text-indigo-400",
  },
  {
    id: "ui-ux",
    title: "UI/UX & Interface Design",
    description: "User-centered design, prototyping, and layout organization.",
    icon: Layout,
    skills: ["Figma", "Wireframing", "Interactive Prototyping", "User-Centered Design", "Design Systems", "Usability Testing"],
    color: "purple",
    badgeBg: "bg-purple-500/10 border-purple-500/30",
    badgeText: "text-purple-400",
  },
  {
    id: "languages-web",
    title: "Languages & Web Tech",
    description: "Programming languages and modern web development technologies.",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "TypeScript", "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
    color: "cyan",
    badgeBg: "bg-cyan-500/10 border-cyan-500/30",
    badgeText: "text-cyan-400",
  },
  {
    id: "databases-apis",
    title: "Databases & Backend",
    description: "Data management systems, database design, and API architectures.",
    icon: Database,
    skills: ["PostgreSQL", "PostGIS", "MySQL", "Supabase", "FastAPI", "Node.js", "REST APIs"],
    color: "blue",
    badgeBg: "bg-blue-500/10 border-blue-500/30",
    badgeText: "text-blue-400",
  },
  {
    id: "geospatial",
    title: "Geospatial & Analytics",
    description: "GIS tools and remote sensing datasets for geospatial analysis.",
    icon: Globe,
    skills: ["Google Earth Engine", "Sentinel-1 SAR", "Sentinel-2 Optical", "Remote Sensing", "GIS Data Analytics"],
    color: "teal",
    badgeBg: "bg-teal-500/10 border-teal-500/30",
    badgeText: "text-teal-400",
  },
  {
    id: "dev-tools",
    title: "Development & Version Control",
    description: "Essential productivity, version control, and collaboration tools.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Slack"],
    color: "slate",
    badgeBg: "bg-slate-500/10 border-slate-500/30",
    badgeText: "text-slate-300",
  },
];

const professionalStrengths = [
  "Requirements Analysis",
  "Problem Solving",
  "Team Collaboration",
  "Agile & Scrum Practices",
  "Clear Communication",
  "Process Improvement",
  "Adaptability",
  "Continuous Learning",
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCategories = skillCategories.filter((category) => {
    const matchesCategory =
      activeCategory === "all" || category.id === activeCategory;

    const matchesSearch =
      searchQuery.trim() === "" ||
      category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="skills"
      className="relative border-t border-white/10 px-6 py-24 sm:py-28 overflow-hidden"
    >
      {/* Background Ambient Lights */}
      <div className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* Section Heading & Search */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" /> Skills & Knowledge Matrix
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Tools, methodologies & technologies.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-300">
              A comprehensive toolkit developed through Information Systems academic projects, collaborative teamwork, and hands-on domain exploration.
            </p>
          </div>

          {/* Interactive Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills or tools..."
              value={searchQuery}
              aria-label="Search skills or tools"
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-slate-900/80 py-2.5 pl-10 pr-4 text-sm text-slate-200 placeholder-slate-400 transition focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/50 backdrop-blur-md"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 border-b border-white/10 pb-6">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-slate-950 shadow-md shadow-sky-500/20"
                : "border border-white/10 bg-slate-900/60 text-slate-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-slate-950 shadow-md shadow-sky-500/20"
                  : "border border-white/10 bg-slate-900/60 text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-md transition duration-300 hover:border-sky-500/40 hover:bg-slate-900/90 hover:-translate-y-1 shadow-xl"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-xl border ${category.badgeBg}`}
                      >
                        <Icon className={`h-5 w-5 ${category.badgeText}`} />
                      </div>
                      <span className="text-xs font-medium text-slate-500">
                        {category.skills.length} skills
                      </span>
                    </div>

                    <h3 className="mt-5 text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                      {category.title}
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-slate-400">
                      {category.description}
                    </p>
                  </div>

                  {/* Skill Badges */}
                  <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {category.skills.map((skill) => {
                      const isHighlighted =
                        searchQuery.trim() !== "" &&
                        skill.toLowerCase().includes(searchQuery.toLowerCase());
                      return (
                        <span
                          key={skill}
                          className={`rounded-lg border px-3 py-1.5 text-xs font-medium transition ${
                            isHighlighted
                              ? "border-sky-400 bg-sky-500/20 text-sky-200 shadow-sm"
                              : "border-white/10 bg-slate-950/80 text-slate-300 hover:border-sky-500/30 hover:text-white"
                          }`}
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredCategories.length === 0 && (
          <div className="mt-12 rounded-2xl border border-white/10 bg-slate-900/40 p-12 text-center">
            <p className="text-slate-400 text-sm">
              No skills found matching &quot;{searchQuery}&quot;. Try adjusting your search term.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("all");
              }}
              className="mt-4 rounded-full bg-sky-500/20 border border-sky-500/40 px-5 py-2 text-xs font-semibold text-sky-300 hover:bg-sky-500/30 transition"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Professional Strengths Section */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-sky-400" />
            <h3 className="text-lg font-bold text-white">
              Professional Strengths & Competencies
            </h3>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {professionalStrengths.map((strength) => (
              <span
                key={strength}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/80 px-4 py-2 text-xs font-medium text-slate-300 shadow-sm transition hover:border-sky-500/50 hover:bg-sky-500/10 hover:text-sky-300 hover:scale-105"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}