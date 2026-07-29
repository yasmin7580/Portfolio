"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
const education = [
  {
    degree: "B.A. (Honours) in Economics",
    institute: "Rajbari Government College",
    duration: "2026 - Present",
    location: "Rajbari, Bangladesh",
    result: "1st Year",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Rajbari Government College",
    duration: "Passed • 2025",
    location: "Arts",
    result: "GPA: 4.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institute: "Bartha High School",
    duration: "Passed • 2022",
    location: "Science",
    result: "GPA: 4.33",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="bg-black text-white py-28 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 text-sm">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Academic
            <span className="text-cyan-400"> Journey</span>
          </h2>

          <div className="w-24 h-1 rounded-full bg-cyan-400 mx-auto mt-6"></div>
        </motion.div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 top-0 w-[2px] h-full bg-cyan-400/20"></div>

          <div className="space-y-14">

            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: .6,
                }}
                viewport={{ once: true }}
                className={`relative flex ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Timeline Dot */}

                <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(34,211,238,.4)]">
                  <GraduationCap size={18} className="text-black" />
                </div>

                {/* Card */}

                <div className="ml-20 md:ml-0 md:w-[45%] rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(34,211,238,.15)] transition-all duration-300">

                  <p className="text-cyan-400 text-sm font-semibold mb-2">
                    {item.duration}
                  </p>

                  <h3 className="text-2xl font-bold">
                    {item.degree}
                  </h3>

                  <p className="text-gray-300 mt-3">
                    {item.institute}
                  </p>

                  <p className="text-gray-500 mt-2">
                    {item.location}
                  </p>

                  <div className="inline-block mt-5 rounded-full bg-cyan-400/10 border border-cyan-400/20 px-4 py-2 text-cyan-400 font-medium">
                    {item.result}
                  </div>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}