export default function Education() {
    return (
        <section
            id="education"
            className="border-t border-white/10 px-6 py-24 sm:py-28"
        >
            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="max-w-2xl">
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                        Education
                    </p>

                    <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                        My academic journey.
                    </h2>
                </div>

                {/* Education Card */}
                <div className="relative mt-12">
                    {/* Timeline line */}
                    <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 sm:block" />

                    <div className="relative sm:pl-12">
                        {/* Timeline dot */}
                        <div className="absolute left-0 top-8 hidden h-9 w-9 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950 sm:flex">
                            <div className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                        </div>

                        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-cyan-400/20 sm:p-10">
                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                <div>
                                    <p className="text-sm font-medium text-cyan-400">
                                        Undergraduate Degree
                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold text-white">
                                        BSc (Hons) Information Systems
                                    </h3>

                                    <p className="mt-2 text-base text-slate-300">
                                        Sabaragamuwa University of Sri Lanka
                                    </p>
                                </div>

                                <span className="w-fit rounded-full border border-white/10 px-4 py-2 text-xs text-slate-400">
                                    Currently Studying
                                </span>
                            </div>

                            <p className="mt-6 max-w-3xl leading-8 text-slate-400">
                                Developing knowledge across software development, information
                                systems, databases, systems analysis, project management,
                                software quality assurance, and related computing disciplines.
                            </p>

                            {/* Relevant Areas */}
                            <div className="mt-8">
                                <p className="text-sm font-medium text-white">
                                    Relevant Areas
                                </p>

                                <div className="mt-4 flex flex-wrap gap-2">
                                    {[
                                        "Software Development",
                                        "Database Management",
                                        "Systems Analysis",
                                        "Project Management",
                                        "Business Analysis",
                                        "Software Quality Assurance",
                                        "Web Development",
                                        "Information Systems",
                                    ].map((area) => (
                                        <span
                                            key={area}
                                            className="rounded-full border border-white/10 bg-slate-900 px-3 py-1.5 text-xs text-slate-400"
                                        >
                                            {area}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}