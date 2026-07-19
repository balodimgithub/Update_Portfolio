"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const fullText = `I build the systems that sit underneath money moving from one place to another — the flows that authorize, settle, reconcile, and report on every transaction. My work centers on FinTech system design: mapping how a payment travels from initiation to settlement, then implementing that flow with code that stays accurate even when the unexpected happens.

As an undergraduate studying Finance at the University of Lagos, I bring a structural understanding of how financial instruments and risk actually behave, and I pair that with hands-on software engineering — APIs, databases, and the glue between them. I am drawn to the moments where finance and engineering overlap: reconciliation logic, fraud signals, ledger integrity, audit trails.

Beyond payments, I am constantly pulling at the edges of what is next. Machine Learning and deep research methods occupy a growing share of my curiosity, not as buzzwords but as tools I want to wield responsibly inside financial systems — for fraud detection, for risk scoring, for understanding patterns that humans alone would miss. I see myself at the intersection of finance, software, and the technology still unfolding ahead of us.`;

const shortText =
  "I build the systems that sit underneath money moving from one place to another — mapping and implementing FinTech flows, from authorization to settlement and reconciliation. Finance undergrad at UNILAG, software engineer by craft, and a constant student of Machine Learning and the technology world still unfolding.";

export default function ExpandableBio() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="max-w-3xl">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={expanded ? "full" : "short"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35 }}
        >
          {(expanded ? fullText : shortText).split("\n\n").map((para, i) => (
            <p key={i} className="text-base sm:text-lg leading-relaxed text-ink/85 mb-4">
              {para}
            </p>
          ))}
        </motion.div>
      </AnimatePresence>

      <button
        onClick={() => setExpanded((v) => !v)}
        className="btn-glow group mt-2 inline-flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-ledger-700 hover:text-ledger-900 transition-colors"
        aria-expanded={expanded}
      >
        <span className="ledger-glow">{expanded ? "Show less" : "Read full profile"}</span>
        <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown size={16} />
        </motion.span>
      </button>
    </div>
  );
}
