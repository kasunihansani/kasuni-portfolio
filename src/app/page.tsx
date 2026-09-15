import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />

      {/* Contact */}
      <section id="contact" className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            Contact
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Let&apos;s build something together.
          </h2>

          <p className="mt-6 max-w-xl leading-8 text-slate-400">
            I&apos;m open to internship opportunities, projects, and
            opportunities to learn and grow in the technology industry.
          </p>

          <a
            href="mailto:kasunihansani7@gmail.com"
            className="mt-8 inline-block rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Email Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 Kasuni Hansani. All rights reserved.</p>
          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}