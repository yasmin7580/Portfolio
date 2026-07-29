"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-2xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 lg:px-10">
        {/* Logo */}
        <Link href="#home">
          <motion.div
            whileHover={{ scale: 1.08, rotate: 8 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-cyan-500 to-cyan-600 flex items-center justify-center shadow-[0_0_35px_rgba(34,211,238,0.55)]">
              <span className="text-white text-2xl font-black">J</span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="relative text-gray-400 font-medium transition-all duration-300 hover:text-white group"
              >
                {item.name}

                <span className="absolute left-0 -bottom-2 h-[2px] w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:flex items-center gap-2 rounded-full bg-cyan-400 text-black px-5 py-2.5 font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,.5)]"
        >
          <Download size={18} />
          Resume
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#050505] border-t border-white/10"
          >
            <div className="flex flex-col py-5">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-8 py-4 text-gray-400 hover:text-cyan-400 hover:bg-white/5 transition"
                >
                  {item.name}
                </Link>
              ))}

              <div className="px-8 mt-4">
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center justify-center gap-2 rounded-full bg-cyan-400 py-3 font-semibold text-black"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}