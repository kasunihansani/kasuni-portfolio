import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
            {/* Background decoration */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
                {/* Hero Content */}
                <div>
                    <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                        Information Systems Undergraduate
                    </p>

                    <h1 className="text-5xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl">
                        Hi, I&apos;m
                        <br />
                        <span className="text-cyan-400">Kasuni Hansani.</span>
                    </h1>

                    <h2 className="mt-6 text-xl font-medium text-slate-200 sm:text-2xl">
                        Aspiring Software Developer
                    </h2>

                    <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                        I&apos;m an Information Systems undergraduate passionate about
                        building practical digital solutions through software development,
                        modern web technologies, databases, and geospatial technologies.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:-translate-y-1 hover:bg-cyan-300"
                        >
                            View My Work
                        </a>

                        <a
                            href="#contact"
                            className="rounded-full border border-white/20 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                        >
                            Let&apos;s Connect
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="mt-10 flex items-center gap-6 text-sm text-slate-400">
                        <a
                            href="https://github.com/kasunihansani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-cyan-400"
                        >
                            GitHub ↗
                        </a>

                        <span className="h-4 w-px bg-white/20" />

                        <a
                            href="#"
                            className="transition hover:text-cyan-400"
                        >
                            LinkedIn ↗
                        </a>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center lg:justify-end">
                    <div className="relative">
                        {/* Outer glow */}
                        <div className="absolute -inset-4 rounded-[2.5rem] bg-cyan-400/10 blur-2xl" />

                        {/* Image container */}
                        <div className="relative h-72 w-72 overflow-hidden rounded-[2.5rem] border border-cyan-400/30 bg-slate-900 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                            <Image
                                src="/profile.jpeg"
                                alt="Kasuni Hansani"
                                fill
                                priority
                                className="object-cover"
                                sizes="(max-width: 640px) 320px, (max-width: 1024px) 384px, 384px"
                            />
                        </div>

                        {/* Project badge */}
                        <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-slate-900 px-5 py-3 shadow-xl">
                            <p className="text-xs text-slate-500">
                                Currently building
                            </p>

                            <p className="mt-1 text-sm font-semibold text-white">
                                LankaGeo 🌍
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}