"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";

export default function ProjectCard({
    project,
    onDetails,
}) {
    return (
        <motion.div
            whileHover={{
                y: -12,
            }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0b] transition duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,.15)]"
        >
            <div className="relative overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.title}
                    width={700}
                    height={400}
                    className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-70"></div>
            </div>

            <div className="p-7">
                <h2 className="text-2xl font-bold text-white">
                    {project.title}
                </h2>

                <p className="mt-4 line-clamp-3 text-gray-400">
                    {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.slice(0, 4).map((item) => (
                        <span
                            key={item}
                            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-400"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
                    >
                        <ExternalLink size={18} />
                        Live Preview
                    </a>

                    <button
                        onClick={() => onDetails(project)}
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#151515] py-3 text-white transition-all duration-300 hover:border-cyan-400 hover:text-cyan-400"
                    >
                        <Eye size={18} />
                        View Details
                    </button>
                </div>
            </div>
        </motion.div>
    );
}