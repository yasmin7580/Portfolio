"use client";

import { motion } from "framer-motion";
import {
    Code2,
    LaptopMinimal,
    Rocket,
    Coffee,
} from "lucide-react";

const cards = [
    {
        icon: <Code2 size={28} />,
        title: "Programming",
        text: "I enjoy turning ideas into real-world web applications using modern technologies and clean code.",
    },
    {
        icon: <LaptopMinimal size={28} />,
        title: "Learning",
        text: "I constantly explore new frameworks, best practices, and development tools to improve my skills.",
    },
    {
        icon: <Rocket size={28} />,
        title: "Building",
        text: "Creating fast, responsive, and user-friendly websites is what motivates me every day.",
    },
    {
        icon: <Coffee size={28} />,
        title: "Beyond Coding",
        text: "When I'm not coding, I enjoy learning new technologies, watching tech content, and spending quality time with friends and family.",
    },
];

export default function About() {
    return (
        <section
            id="about"
            className="bg-black text-white py-28 px-6"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <p className="text-cyan-400 uppercase tracking-[6px] text-sm">
                        About Me
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        Passionate Full Stack
                        <span className="text-cyan-400"> Developer</span>
                    </h2>

                    <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full mt-6"></div>
                </motion.div>

                {/* Content */}

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-semibold mb-8">
                            Hi, I'm
                            <span className="text-cyan-400">
                                {" "}Jerin Khondokar
                            </span>
                        </h3>

                        <p className="text-gray-400 leading-8 mb-6">
                            My journey into programming started with curiosity and a passion
                            for creating things on the web. What began as learning HTML and
                            CSS gradually evolved into building full-stack web applications
                            using modern technologies.
                        </p>

                        <p className="text-gray-400 leading-8 mb-6">
                            I enjoy solving real-world problems through clean, scalable, and
                            user-friendly applications. Every project I build is an
                            opportunity to learn something new and improve my development
                            skills.
                        </p>

                        <p className="text-gray-400 leading-8">
                            Outside of programming, I enjoy exploring new technologies,
                            watching tech videos, reading documentation, and continuously
                            improving myself as a developer.
                        </p>
                    </motion.div>

                    {/* Right */}

                    <div className="grid sm:grid-cols-2 gap-6">
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: .5,
                                    delay: index * .15,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8,
                                    scale: 1.03,
                                }}
                                className="bg-[#0B0B0B] border border-white/10 rounded-3xl p-7 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,.18)]"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-5">
                                    {card.icon}
                                </div>

                                <h4 className="text-xl font-semibold mb-3">
                                    {card.title}
                                </h4>

                                <p className="text-gray-400 leading-7 text-sm">
                                    {card.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}