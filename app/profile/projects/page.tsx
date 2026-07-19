"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, SlidersHorizontal } from "lucide-react";
import { extraProjects, projects, projectLimit } from "@/data/profileData";
import { ProjectGridCard } from "@/components/ProjectCardList";
import type { Project } from "@/data/profileData";
import {ArrowRight} from "lucide-react"

// Collect every unique stack tag across extra projects for the filter bar
const allTags = Array.from(
  new Set(extraProjects.flatMap((p) => p.stack))
).sort();

const statusOptions: Array<Project["status"] | "all"> = [
  "all",
  "live",
  "wip",
  "archived",
];

const statusLabel: Record<string, string> = {
  all: "All",
  live: "Live",
  wip: "In Progress",
  archived: "Archived",
};

export default function AllProjectsPage() {
  const [activeTag, setActiveTag] = useState<string>("all");
  const [activeStatus, setActiveStatus] = useState<string>("all");

  const filtered = useMemo(() => {
    return extraProjects.filter((p) => {
      const tagMatch = activeTag === "all" || p.stack.includes(activeTag);
      const statusMatch = activeStatus === "all" || p.status === activeStatus;
      return tagMatch && statusMatch;
    });
  }, [activeTag, activeStatus]);

  return (
    <div className="px-6 sm:px-10 lg:px-20 pt-28 pb-32 max-w-6xl mx-auto">

      {/* ── Back button ─────────────────────────────────────────── */}
      <Link
        href="/profile"
        className="btn-glow group inline-flex items-center gap-2 rounded-full border border-ledger-700/30 text-ledger-700 px-5 py-2.5 font-medium mb-12 hover:bg-ledger-800 hover:text-paper hover:border-ledger-800 transition-colors"
      >
        <motion.span
          animate={{ x: [0, -3, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowLeft size={16} />
        </motion.span>
        Back to Profile
      </Link>

      {/* ── Header ──────────────────────────────────────────────── */}
      <header className="mb-12">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ledger-600 mb-2">
          Profile → Projects
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
          More{" "}
          <span className="ledger-glow italic text-ledger-700">projects</span>
        </h1>
        <p className="text-ink/70 max-w-xl leading-relaxed">
          The profile page shows the first {projectLimit} featured
          projects. Everything else lives here —{" "}
          {extraProjects.length} additional{" "}
          {extraProjects.length === 1 ? "project" : "projects"} across{" "}
          {allTags.length} different technologies.
        </p>
      </header>

      {/* ── Filters ─────────────────────────────────────────────── */}
      <div className="mb-10 space-y-4">
        {/* Status filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-ledger-700 mr-1">
            <SlidersHorizontal size={13} /> Status
          </span>
          {statusOptions.map((s) => (
            <button
              key={s}
              onClick={() => setActiveStatus(s!)}
              className={`btn-glow rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors border ${
                activeStatus === s
                  ? "bg-ledger-800 text-paper border-ledger-800 shadow-glowSoft"
                  : "bg-paper border-ledger-700/25 text-ledger-700 hover:border-ledger-700"
              }`}
            >
              {statusLabel[s!]}
            </button>
          ))}
        </div>

        {/* Stack tag filter */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-mono text-xs uppercase tracking-widest text-ledger-700 mr-1">
            Stack
          </span>
          <button
            onClick={() => setActiveTag("all")}
            className={`btn-glow rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors border ${
              activeTag === "all"
                ? "bg-ledger-800 text-paper border-ledger-800 shadow-glowSoft"
                : "bg-paper border-ledger-700/25 text-ledger-700 hover:border-ledger-700"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`btn-glow rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors border ${
                activeTag === tag
                  ? "bg-ledger-800 text-paper border-ledger-800 shadow-glowSoft"
                  : "bg-paper border-ledger-700/25 text-ledger-700 hover:border-ledger-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* ── Grid ────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        {filtered.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="py-20 text-center font-display text-xl italic text-ink/40"
          >
            No projects match those filters — try another combination.
          </motion.p>
        ) : (
          <motion.div
            key={`${activeTag}-${activeStatus}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectGridCard key={project.id} project={project} index={i} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Glowing divider + back to profile CTA ───────────────── */}
      <div className="mt-20">
        <div className="h-px w-2/3 mx-auto bg-gradient-to-r from-transparent via-ledger-500 to-transparent shadow-glow mb-12" />

        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-ledger-600 mb-4">
            Want to see the full story?
          </p>
          <Link
            href="/profile"
            className="btn-glow inline-flex items-center gap-2 rounded-full bg-ledger-800 text-paper px-8 py-3.5 font-semibold shadow-glowSoft hover:shadow-glow transition-shadow"
          >
            <ArrowLeft size={16} />
            Back to full profile
          </Link>
        
        </div>
      </div>
    </div>
  );
}
