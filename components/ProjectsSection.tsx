"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import {  extraProjects, MaxFourprojects } from "@/data/profileData";
import Link from "next/link";


export default function ProjectsSection() {
  return (
    <div className="space-y-16">
      {MaxFourprojects.map((proj, i) => (
        <motion.div
          key={proj.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-center ${
            i % 2 === 1 ? "lg:[direction:rtl]" : ""
          }`}
        >
          <div className="lg:col-span-3 relative h-64 lg:h-80 rounded-3xl overflow-hidden card-glow [direction:ltr]">
            <Image
              src={proj.thumbnail}
              alt={proj.title}
              fill
              sizes="800px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ledger-900/70 via-ledger-900/0 to-transparent" />
            <span className="absolute bottom-4 left-4 font-mono text-xs uppercase tracking-widest text-paper bg-ledger-700/80 px-3 py-1 rounded-full">
              {proj.role}
            </span>
          </div>

          <div className="lg:col-span-2 [direction:ltr]">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-3">
              {proj.title}
            </h3>
            <p className="text-ink/75 leading-relaxed mb-4">{proj.description}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {proj.stack.map((s) => (
                <span
                  key={s}
                  className="font-mono text-xs px-2.5 py-1 rounded-full bg-ledger-50 border border-ledger-600/30 text-ledger-700"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href={proj.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-glow flex items-center gap-2 rounded-full bg-ledger-800 text-paper px-5 py-2.5 font-medium shadow-glowSoft hover:shadow-glow transition-shadow"
              >
                <Github size={16} /> Code
              </a>
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-glow flex items-center gap-2 rounded-full border border-ledger-700 text-ledger-700 px-5 py-2.5 font-medium hover:bg-ledger-700 hover:text-paper transition-colors"
                >
                  <ExternalLink size={16} /> Live
                </a>
              )}
                
            </div>
          </div>
        </motion.div>
      ))}
       {extraProjects.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl bg-ledger-900 px-8 py-7"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-ledger-300 mb-1">
              There&apos;s more
            </p>
            <p className="font-display text-xl font-bold text-paper">
              +{extraProjects.length} additional{" "}
              {extraProjects.length === 1 ? "project" : "projects"}
            </p>
          </div>

          <Link
            href="/profile/projects"
            className="btn-glow group inline-flex items-center gap-3 rounded-full bg-ledger-500 hover:bg-ledger-400 text-ink px-7 py-3.5 font-semibold shadow-glow transition-colors"
          >
            Show more
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
