export default function Navbar() {
    return (
        <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
                {/* Logo */}
                <a
                    href="#"
                    className="text-xl font-bold tracking-tight text-white"
                >
                    Kasuni<span className="text-cyan-400">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden items-center gap-8 md:flex">
                    <a
                        href="#about"
                        className="text-sm text-slate-400 transition hover:text-cyan-400"
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className="text-sm text-slate-400 transition hover:text-cyan-400"
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className="text-sm text-slate-400 transition hover:text-cyan-400"
                    >
                        Projects
                    </a>

                    <a
                        href="#contact"
                        className="text-sm text-slate-400 transition hover:text-cyan-400"
                    >
                        Contact
                    </a>

                    <a
                        href="#education"
                        className="text-sm text-slate-400 transition hover:text-cyan-400"
                    >
                        Education
                    </a>

                    <a
                        href="#contact"
                        className="rounded-full border border-cyan-400/50 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
                    >
                        Let&apos;s Talk
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    className="rounded-lg border border-white/10 p-2 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400 md:hidden"
                    aria-label="Open navigation menu"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </button>
            </div>
        </nav>
    );
}