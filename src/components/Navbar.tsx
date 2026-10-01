"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  User,
  Code2,
  FolderGit2,
  GraduationCap,
  Award,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";

const navItems = [
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code2 },
  { name: "Projects", href: "#projects", icon: FolderGit2 },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Certificates", href: "#certificates", icon: Award },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.substring(1);
    setActiveSection(targetId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-sky-950/30 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 text-xl font-bold tracking-tight text-white transition hover:opacity-90"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-500 via-indigo-500 to-purple-500 p-0.5 shadow-md shadow-sky-500/20 transition group-hover:scale-105">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-slate-950">
              <Sparkles className="h-4 w-4 text-sky-400" />
            </div>
          </div>
          <span className="font-sans">
            Kasuni<span className="text-sky-400">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium transition-colors rounded-full ${
                  isActive
                    ? "text-sky-400 font-semibold"
                    : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                }`}
              >
                <Icon className={`h-3.5 w-3.5 ${isActive ? "text-sky-400" : "text-slate-400"}`} />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeNavTab"
                    className="absolute inset-0 -z-10 rounded-full bg-sky-500/10 border border-sky-500/30 shadow-inner"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          <a
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            className="ml-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-sky-500/25 transition hover:shadow-sky-500/40 hover:scale-105 active:scale-95"
          >
            <span>Let&apos;s Talk</span>
            <Send className="h-3.5 w-3.5" />
          </a>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-900/80 text-slate-300 transition hover:border-sky-500/50 hover:text-sky-400 active:scale-95 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/10 bg-slate-950/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-6 max-h-[calc(100vh-80px)] overflow-y-auto">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? "bg-sky-500/10 text-sky-400 border border-sky-500/30"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5 text-sky-400" />
                    <span>{item.name}</span>
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => handleNavClick("#contact")}
                className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 px-5 py-3 font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition active:scale-95"
              >
                <span>Let&apos;s Talk</span>
                <Send className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}