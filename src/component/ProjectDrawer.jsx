"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
    X,
    ExternalLink,

    CheckCircle2,
    AlertCircle,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectDrawer({ project, onClose }) {
    return (
        <AnimatePresence>
            {project && (
                <>
                    {/* Overlay */}
                    <motion.div
                        onClick={onClose}
                        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 18,
                        }}
                        className="fixed right-0 top-0 z-[60] h-screen w-full overflow-y-auto bg-[#0b0b0b] shadow-2xl md:w-[700px]"
                    >
                        {/* Header */}
                        <div className="sticky top-0 flex items-center justify-between border-b border-white/10 bg-[#0b0b0b]/95 px-6 py-5 backdrop-blur-xl">
                            <h2 className="text-2xl font-bold text-white">
                                {project.title}
                            </h2>

                            <button
                                onClick={onClose}
                                className="rounded-full p-2 transition hover:bg-white/10"
                            >
                                <X className="text-white" />
                            </button>
                        </div>

                        {/* Image */}
                        <div className="p-6">
                            <Image
                                src={project.image}
                                width={900}
                                height={600}
                                alt={project.title}
                                className="rounded-2xl border border-white/10"
                            />
                        </div>

                        {/* Content */}
                        <div className="space-y-10 px-6 pb-10">
                            {/* Description */}
                            <div>
                                <h3 className="mb-3 text-xl font-semibold text-cyan-400">
                                    About Project
                                </h3>

                                <p className="leading-8 text-gray-300">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h3 className="mb-4 text-xl font-semibold text-cyan-400">
                                    Technology Stack
                                </h3>

                                <div className="flex flex-wrap gap-3">
                                    {project.stack.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-400"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Challenges */}
                            <div>
                                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-cyan-400">
                                    <AlertCircle size={20} />
                                    Challenges
                                </h3>

                                <ul className="space-y-3">
                                    {project.challenges.map((challenge, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-gray-300"
                                        >
                                            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400"></span>
                                            {challenge}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Future Improvements */}
                            <div>
                                <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold text-cyan-400">
                                    <CheckCircle2 size={20} />
                                    Future Improvements
                                </h3>

                                <ul className="space-y-3">
                                    {project.improvements.map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-gray-300"
                                        >
                                            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Buttons */}
                            <div className="grid grid-cols-2 gap-4 pt-2">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 rounded-xl border border-white/10 py-3 font-semibold text-white  hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition-all duration-300"
                                >
                                    <FaGithub size={18} />

                                    GitHub
                                </a>

                                <a
                                    href={project.live}
                                    target="_blank"
                                    className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 font-semibold text-black transition hover:bg-cyan-300 hover:-translate-y-1 duration-300 "
                                >
                                    <ExternalLink size={18} />
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}