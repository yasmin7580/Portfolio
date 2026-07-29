"use client";
import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML5", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
            { name: "CSS3", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
            { name: "JavaScript", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            { name: "React.js", level: 92, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
            { name: "Next.js", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
            { name: "Tailwind CSS", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        ],
    },

    {
        title: "Backend",
        skills: [
            { name: "Node.js", level: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
            { name: "Express.js", level: 88, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
            { name: "MongoDB", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
            { name: "Firebase", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
            { name: "REST API", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
            { name: "JWT", level: 85, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
        ],
    },

    {
        title: "Tools",
        skills: [
            { name: "Git", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
            { name: "GitHub", level: 92, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
            { name: "VS Code", level: 95, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },

            { name: "Vercel", level: 90, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
            { name: "Figma", level: 75, logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
        ],
    },
];


export default function Skills() {

    return (
        <section
            id="skills"
            className="bg-black text-white py-28 px-6"
        >

            <div className="max-w-7xl mx-auto">


                <div className="text-center mb-16">

                    <p className="text-cyan-400 uppercase tracking-[5px] text-sm">
                        My Skills
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        Technologies I{" "}
                        <span className="text-cyan-400">
                            Work With
                        </span>
                    </h2>

                </div>


                <div className="grid lg:grid-cols-3 gap-8">


                    {
                        skillCategories.map((category, index) => (

                            <motion.div

                                key={category.title}

                                initial={{
                                    opacity: 0,
                                    y: 50
                                }}

                                whileInView={{
                                    opacity: 1,
                                    y: 0
                                }}

                                viewport={{
                                    once: true
                                }}

                                transition={{
                                    delay: index * .2
                                }}

                                className="
                            rounded-3xl
                            border border-white/10
                            bg-[#0b0b0b]
                            p-8
                            hover:border-cyan-400/40
                            transition
                            "

                            >


                                <h3 className="
                            text-2xl
                            font-bold
                            text-cyan-400
                            mb-8
                            ">
                                    {category.title}
                                </h3>



                                <div className="grid grid-cols-2 gap-5">


                                    {
                                        category.skills.map(skill => (


                                            <motion.div

                                                whileHover={{
                                                    scale: 1.05,
                                                    y: -5
                                                }}

                                                key={skill.name}

                                                className="
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-3
                                    rounded-2xl
                                    bg-white/[0.04]
                                    border
                                    border-white/10
                                    p-5
                                    hover:bg-cyan-400/10
                                    transition
                                    "

                                            >


                                                <img
                                                    src={skill.logo}
                                                    alt={skill.name}
                                                    className="
                                    w-12
                                    h-12
                                    object-contain
                                    "
                                                />


                                                <p className="text-sm text-gray-300 text-center">
                                                    {skill.name}
                                                </p>



                                            </motion.div>


                                        ))
                                    }


                                </div>


                            </motion.div>

                        ))
                    }


                </div>


            </div>

        </section>
    );
}