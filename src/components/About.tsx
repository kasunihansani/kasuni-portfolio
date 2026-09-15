export default function About() {
    return (
        <section
            id="about"
            className="border-t border-white/10 px-6 py-24 sm:py-28"
        >
            <div className="mx-auto max-w-6xl">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

                    {/* Section Heading */}
                    <div>
                        <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
                            About Me
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                            Curious, adaptable, and always learning.
                        </h2>
                    </div>

                    {/* Content */}
                    <div>
                        <p className="text-base leading-8 text-slate-400 sm:text-lg">
                            I am an Information Systems undergraduate at Sabaragamuwa
                            University of Sri Lanka with a strong interest in software
                            development and technology-driven problem solving.
                        </p>

                        <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
                            Through academic projects and collaborative development, I have
                            gained practical experience in frontend and backend development,
                            databases, APIs, version control, and geospatial technologies.
                            I enjoy turning ideas into practical solutions and working with
                            others to build useful and reliable systems.
                        </p>

                        <p className="mt-5 text-base leading-8 text-slate-400 sm:text-lg">
                            I am also interested in project management, business analysis,
                            and quality assurance, and I am looking for opportunities where
                            I can apply my technical knowledge while continuing to develop
                            my professional skills.
                        </p>

                        {/* Highlights */}
                        <div className="mt-10 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                <p className="text-2xl font-bold text-cyan-400">01</p>
                                <p className="mt-2 text-sm font-medium text-white">
                                    Problem Solving
                                </p>
                                <p className="mt-2 text-xs leading-5 text-slate-500">
                                    Turning real-world problems into practical software
                                    solutions.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                <p className="text-2xl font-bold text-cyan-400">02</p>
                                <p className="mt-2 text-sm font-medium text-white">
                                    Collaboration
                                </p>
                                <p className="mt-2 text-xs leading-5 text-slate-500">
                                    Working effectively within teams using Agile practices.
                                </p>
                            </div>

                            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                                <p className="text-2xl font-bold text-cyan-400">03</p>
                                <p className="mt-2 text-sm font-medium text-white">
                                    Continuous Learning
                                </p>
                                <p className="mt-2 text-xs leading-5 text-slate-500">
                                    Continuously expanding my technical and professional skills.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}