"use client";

import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    MapPin,
    Linkedin,
    Send,
    Briefcase,
} from "lucide-react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-black py-28"
        >
            {/* Background Glow */}
            <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />
            <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

            <div className="relative mx-auto max-w-7xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mb-20 text-center"
                >
                    <p className="uppercase tracking-[8px] text-cyan-400 text-sm">
                        CONTACT
                    </p>

                    <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
                        Let's Build
                        <span className="text-cyan-400"> Together</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-gray-400">
                        I'm always excited to work on meaningful projects,
                        collaborate with great people, and explore new opportunities.
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-cyan-400">
                        <Briefcase size={18} />
                        Open for Internship & Full-Time Opportunities
                    </div>
                </motion.div>

                {/* Content */}

                <div className="grid gap-10 lg:grid-cols-2">

                    {/* Left */}

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .5 }}
                        className="space-y-6"
                    >

                        <InfoCard
                            icon={<Mail size={22} />}
                            title="Email"
                            value="jerinahmed@gmail.com"
                        />

                        <InfoCard
                            icon={<Phone size={22} />}
                            title="Phone"
                            value="+880 1688-132207"
                        />

                        <InfoCard
                            icon={<MapPin size={22} />}
                            title="Location"
                            value="Rajbari, Bangladesh"
                        />

                        {/* Social */}

                        <div className="flex gap-4 pt-6">

                            <a
                                href="https://github.com/yasmin7580"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                            >
                                <FaGithub />

                            </a>

                            <a
                                href="https://www.linkedin.com/in/yasmin-jahan-073ab43b5/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-400"
                            >
                               <CiLinkedin />

                            </a>

                        </div>

                    </motion.div>

                    {/* Right */}

                    <motion.form
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .5 }}
                        className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
                    >

                        <div className="space-y-5">

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full rounded-xl border border-white/10 bg-[#111] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                            />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full rounded-xl border border-white/10 bg-[#111] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full rounded-xl border border-white/10 bg-[#111] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                            />

                            <textarea
                                rows={6}
                                placeholder="Write your message..."
                                className="w-full resize-none rounded-xl border border-white/10 bg-[#111] px-5 py-4 text-white outline-none transition focus:border-cyan-400"
                            />

                            <button
                                className="flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
                            >
                                <Send size={20} />
                                Send Message
                            </button>

                        </div>

                    </motion.form>

                </div>

            </div>
        </section>
    );
}

function InfoCard({ icon, title, value }) {
    return (
        <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:-translate-y-1">
            <div className="rounded-xl bg-cyan-400/10 p-4 text-cyan-400">
                {icon}
            </div>

            <div>
                <p className="text-sm text-gray-400">
                    {title}
                </p>

                <h3 className="mt-1 text-lg font-semibold text-white">
                    {value}
                </h3>
            </div>
        </div>
    );
}