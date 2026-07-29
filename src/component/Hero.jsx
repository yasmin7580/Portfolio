"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedText from "./AnimatedText";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Download,
    Github,
    Linkedin,
    Mail,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-black pt-28 pb-20"
        >
            {/* Background Grid */}
            <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `
            linear-gradient(to right,#ffffff 1px,transparent 1px),
            linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Glow */}
            <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[130px]" />

            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[170px]" />

            <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-20 px-6 lg:flex-row lg:justify-between">

                {/* LEFT */}

                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .6 }}
                    className="max-w-3xl"
                >
                    {/* Badge */}

                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm text-cyan-400">
                        <span className="h-2.5 w-2.5 rounded-full bg-cyan-400"></span>

                        Open to Internship & Full-Time Opportunities
                    </div>

                    {/* Name */}

                    <h1 className="mt-8 text-5xl font-black leading-none text-white sm:text-6xl lg:text-8xl">
                        Jerin
                        <br />
                        <span className="text-cyan-400">
                            Khondokar
                        </span>
                    </h1>

                    {/* Animated text will come here */}
                    <div className="mt-8">
                        <AnimatedText />
                    </div>

                    {/* Description */}

                    <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
                        I'm passionate about building scalable,
                        responsive, and user-friendly web applications
                        using modern technologies like React,
                        Next.js, Node.js, Express.js, MongoDB,
                        JavaScript and TypeScript.
                    </p>

                    {/* Skills */}

                    <div className="mt-10 flex flex-wrap gap-3">

                        {[
                            "React",
                            "Next.js",
                            "JavaScript",
                            "TypeScript",
                            "Node.js",
                            "Express",
                            "MongoDB",
                            "Tailwind CSS",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-gray-300 backdrop-blur-xl transition hover:border-cyan-400 hover:text-cyan-400"
                            >
                                {skill}
                            </span>
                        ))}

                    </div>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-col gap-4 sm:flex-row">

                        <Link
                            href="#projects"
                            className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
                        >
                            View Projects
                            <ArrowRight size={20} />
                        </Link>

                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <Download size={20} />
                            Download Resume
                        </a>

                    </div>

                    {/* Social */}

                    <div className="mt-12 flex items-center gap-5">

                        <a
                            href="https://github.com/yasmin7580"
                            target="_blank"
                            className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                        >
                           <FaGithub size={22} />

                        </a>

                        <a
                            href="https://www.linkedin.com/in/yasmin-jahan-073ab43b5/"
                            target="_blank"
                            className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                        >
                           <CiLinkedin size={22} />

                        </a>

                        <a
                            href="mailto:jerinahmed@gmail.com"
                            className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <Mail size={22} />
                        </a>

                    </div>

                </motion.div>

                {/* RIGHT */}

                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: .7 }}
                    className="relative"
                >
                    {/* Glow */}

                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl" />
                    {/* Floating Badges */}

                    <div className="absolute -left-10 top-10 rounded-full border border-white/10 bg-[#111] px-4 py-2 text-sm text-cyan-400 backdrop-blur-xl">
                        React
                    </div>

                    <div className="absolute -right-10 top-16 rounded-full border border-white/10 bg-[#111] px-4 py-2 text-sm text-cyan-400 backdrop-blur-xl">
                        Next.js
                    </div>

                    <div className="absolute -left-12 bottom-16 rounded-full border border-white/10 bg-[#111] px-4 py-2 text-sm text-cyan-400 backdrop-blur-xl">
                        Node.js
                    </div>

                    <div className="absolute -right-10 bottom-10 rounded-full border border-white/10 bg-[#111] px-4 py-2 text-sm text-cyan-400 backdrop-blur-xl">
                        MongoDB
                    </div>

                    {/* Ring */}

                    <div className="relative flex h-[340px] w-[340px] items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-xl sm:h-[430px] sm:w-[430px]">

                        <div className="absolute h-full w-full animate-pulse rounded-full border-2 border-cyan-400/20" />

                        <Image
                            src="/profile.png"
                            alt="Jerin Khondokar"
                            width={380}
                            height={380}
                            priority
                            className="h-[300px] w-[300px] rounded-full object-cover sm:h-[380px] sm:w-[380px] animate-[float_5s_ease-in-out_infinite]"
                        />

                    </div>

                </motion.div>

            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <div className="flex flex-col items-center">
                    <span className="text-xs tracking-[6px] text-gray-500">
                        SCROLL
                    </span>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                        }}
                        className="mt-3 h-10 w-[2px] rounded-full bg-cyan-400"
                    />
                </div>
            </div>
        </section>
    );
}