const skillCategories = [
    {
        title: "Programming Languages",
        description: "Languages I use for software development and problem solving.",
        skills: ["Python", "Java", "JavaScript", "TypeScript", "C"],
    },
    {
        title: "Frontend Development",
        description: "Technologies I use to build modern and responsive interfaces.",
        skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        title: "Backend & APIs",
        description: "Tools and technologies for backend development and APIs.",
        skills: ["Python", "FastAPI", "Node.js", "REST APIs"],
    },
    {
        title: "Databases",
        description: "Database technologies and data management tools.",
        skills: ["PostgreSQL", "PostGIS", "MySQL", "Supabase"],
    },
    {
        title: "Project Management",
        description: "Tools and practices used for collaborative project work.",
        skills: ["Jira", "Confluence", "Agile", "Scrum", "Retrospectives"],
    },
    {
        title: "Testing & QA",
        description: "Tools and practices for software quality and testing.",
        skills: ["Postman", "Selenium", "Test Cases", "Bug Tracking"],
    },
    {
        title: "Development Tools",
        description: "Tools I use throughout the software development process.",
        skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
    },
    {
        title: "Geospatial Technologies",
        description: "Technologies I have used in my flood detection project.",
        skills: [
            "Google Earth Engine",
            "Sentinel-1",
            "Sentinel-2",
            "Remote Sensing",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="border-t border-white/10 px-6 py-24 sm:py-28"
        >
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                        Skills
                    </p>

                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                        Technologies & tools I work with.
                    </h2>

                    <p className="mt-5 leading-8 text-slate-400">
                        A combination of technical knowledge, development tools, and
                        collaborative practices that I have developed through university
                        projects and hands-on experience.
                    </p>
                </div>

                {/* Skill Categories */}
                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.05]"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-sm font-bold text-cyan-400">
                                {category.title.charAt(0)}
                            </div>

                            <h3 className="mt-5 font-semibold text-white">
                                {category.title}
                            </h3>

                            <p className="mt-2 text-xs leading-5 text-slate-500">
                                {category.description}
                            </p>

                            <div className="mt-5 flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-slate-900 px-2.5 py-1 text-xs text-slate-300"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Soft Skills */}
                <div className="mt-16 border-t border-white/10 pt-12">
                    <h3 className="text-xl font-semibold text-white">
                        Professional Strengths
                    </h3>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {[
                            "Communication",
                            "Teamwork",
                            "Problem Solving",
                            "Time Management",
                            "Adaptability",
                            "Critical Thinking",
                            "Leadership",
                            "Continuous Learning",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-400"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}