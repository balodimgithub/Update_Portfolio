"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/profileData";

const statusLabel: Record<NonNullable<Project["status"]>, string> = {
  live: "Live",
  wip: "In Progress",
  archived: "Archived",
};

const statusColor: Record<NonNullable<Project["status"]>, string> = {
  live: "bg-ledger-500/90 text-paper",
  wip: "bg-ledger-700/80 text-ledger-100",
  archived: "bg-ink/40 text-paper/70",
};

// ── Profile layout: large alternating media + detail rows ───────────────────
export function ProjectShowcaseCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className={`grid grid-cols-1 lg:grid-cols-5 gap-8 items-center ${
        index % 2 === 1 ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Thumbnail */}
      <div className="lg:col-span-3 relative h-64 lg:h-80 rounded-3xl overflow-hidden card-glow [direction:ltr]">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="800px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ledger-900/70 via-ledger-900/0 to-transparent" />

        <div className="absolute bottom-4 left-4 flex items-center gap-2 [direction:ltr]">
          {project.role && (
            <span className="font-mono text-xs uppercase tracking-widest text-paper bg-ledger-700/80 px-3 py-1 rounded-full">
              {project.role}
            </span>
          )}
          {project.status && (
            <span
              className={`font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full ${statusColor[project.status]}`}
            >
              {statusLabel[project.status]}
            </span>
          )}
        </div>
      </div>

      {/* Detail */}
      <div className="lg:col-span-2 [direction:ltr]">
        {project.year && (
          <p className="font-mono text-xs uppercase tracking-widest text-ledger-600 mb-1">
            {project.year}
          </p>
        )}
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink mb-3">
          {project.title}
        </h3>
        <p className="text-ink/75 leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((s) => (
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
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow flex items-center gap-2 rounded-full bg-ledger-800 text-paper px-5 py-2.5 font-medium shadow-glowSoft hover:shadow-glow transition-shadow"
          >
            <Github size={16} /> Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
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
  );
}

// ── All-projects grid card: compact, uniform height ─────────────────────────
export function ProjectGridCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
      className="card-glow group rounded-2xl bg-paper border border-ledger-700/15 overflow-hidden flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative h-44 overflow-hidden shrink-0">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="480px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ledger-900/55 to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          {project.year && (
            <span className="font-mono text-xs text-paper/80 tracking-widest">
              {project.year}
            </span>
          )}
          {project.status && (
            <span
              className={`font-mono text-xs uppercase tracking-wider px-2.5 py-0.5 rounded-full ${statusColor[project.status]}`}
            >
              {statusLabel[project.status]}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display text-lg font-bold text-ink leading-snug mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-ink/70 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-ledger-50 border border-ledger-600/30 text-ledger-700 uppercase tracking-wider"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow flex items-center gap-1.5 rounded-full bg-ledger-800 text-paper px-4 py-2 text-sm font-medium shadow-glowSoft hover:shadow-glow transition-shadow"
          >
            <Github size={14} /> Code
          </a>
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow flex items-center gap-1.5 rounded-full border border-ledger-700 text-ledger-700 px-4 py-2 text-sm font-medium hover:bg-ledger-700 hover:text-paper transition-colors"
            >
              <ExternalLink size={14} /> Live
            </a>
          ) : (
            <span className="flex items-center gap-1.5 text-sm text-ink/30 px-4 py-2">
              No demo
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
