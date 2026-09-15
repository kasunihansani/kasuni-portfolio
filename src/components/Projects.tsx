const projects = [
    {
        title: "LankaGeo – Flood Detection System",
        category: "Final Year Project",
        description:
            "A Sri Lanka-focused flood detection and historical flood risk analysis platform using satellite imagery and geospatial technologies. The system uses Sentinel satellite data and Google Earth Engine to provide flood information and historical risk insights.",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Python",
            "FastAPI",
            "Google Earth Engine",
            "PostgreSQL",
            "PostGIS",
        ],
        featured: true,
        github: "#",
        demo: "#",
    },
    {
        title: "University Project",
        category: "Academic Project",
        description:
            "A software project developed as part of my Information Systems studies. Project details and technologies will be added here.",
        technologies: ["JavaScript", "React", "Database"],
        featured: false,
        github: "#",
        demo: "#",
    },
    {
        title: "Upcoming Project",
        category: "Coming Soon",
        description:
            "A new project from my current semester will be added here as development progresses.",
        technologies: ["Coming Soon"],
        featured: false,
        github: "#",
        demo: "#",
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="border-t border-white/10 px-6 py-24 sm:py-28"
        >
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                        Projects
                    </p>

                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                        Things I&apos;ve built.
                    </h2>

                    <p className="mt-5 leading-8 text-slate-400">
                        A selection of academic and personal projects that demonstrate my
                        experience with software development, problem solving, and
                        technology.
                    </p>
                </div>

                {/* Featured Project */}
                {projects
                    .filter((project) => project.featured)
                    .map((project) => (
                        <div
                            key={project.title}
                            className="group mt-12 overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/[0.08] to-white/[0.02]"
                        >
                            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                                {/* Project Visual */}
                                <div className="relative min-h-72 overflow-hidden bg-slate-900 lg:min-h-full">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(34,211,238,0.15),_transparent_60%)]" />

                                    <div className="relative flex h-full min-h-72 items-center justify-center p-10">
                                        <div className="text-center">
                                            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-cyan-400/30 bg-cyan-400/10 text-4xl">
                                                🌍
                                            </div>

                                            <p className="mt-5 text-sm font-medium text-cyan-400">
                                                Geospatial Technology
                                            </p>

                                            <p className="mt-2 text-xs text-slate-500">
                                                Flood Detection & Risk Analysis
                                            </p>
                                        </div>
                                    </div>

                                    {/* Decorative grid */}
                                    <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />
                                </div>

                                {/* Project Information */}
                                <div className="p-8 sm:p-10">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-400">
                                            Featured Project
                                        </span>

                                        <span className="text-xs text-slate-500">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">
                                        {project.title}
                                    </h3>

                                    <p className="mt-5 leading-8 text-slate-400">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="mt-7 flex flex-wrap gap-2">
                                        {project.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full border border-white/10 bg-slate-950/50 px-3 py-1.5 text-xs text-slate-300"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Links */}
                                    <div className="mt-8 flex flex-wrap gap-4">
                                        <a
                                            href={project.github}
                                            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
                                        >
                                            View GitHub ↗
                                        </a>

                                        <a
                                            href={project.demo}
                                            className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                                        >
                                            Live Demo ↗
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                {/* Other Projects 
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {projects
                        .filter((project) => !project.featured)
                        .map((project) => (
                            <div
                                key={project.title}
                                className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
                            >
                                <p className="text-xs uppercase tracking-wider text-cyan-400">
                                    {project.category}
                                </p>

                                <h3 className="mt-3 text-xl font-semibold text-white">
                                    {project.title}
                                </h3>

                                <p className="mt-4 text-sm leading-7 text-slate-500">
                                    {project.description}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-slate-400"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {project.category !== "Coming Soon" && (
                                    <a
                                        href={project.github}
                                        className="mt-6 inline-block text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                                    >
                                        View Project ↗
                                    </a>
                                )}
                            </div>
                        ))}
                </div>*/}
            </div>
        </section>
    );
}