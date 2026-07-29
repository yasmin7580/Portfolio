"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDrawer from "./ProjectDrawer";
export default function Projects() {
    const [selectedProject, setSelectedProject] =
        useState(null);

    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-black py-28 text-white"
        >
            <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-[140px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />
            <div className="mx-auto max-w-7xl px-6">
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <p className="text-sm uppercase tracking-[6px] text-cyan-400">
                        Portfolio
                    </p>

                    <h2 className="mt-4 text-5xl font-bold">
                        Featured
                        <span className="text-cyan-400"> Projects</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-gray-400">
                        A selection of projects showcasing my experience
                        in full-stack web development, modern UI design,
                        authentication, AI integration, and scalable
                        application architecture.
                    </p>
                </motion.div>

                <div className="grid gap-8 lg:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onDetails={setSelectedProject}
                        />
                    ))}
                </div>
            </div>
            <ProjectDrawer
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}