"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ProfileImage from "../public/images/me.jpeg";
const bio =
  "I am a software engineer, experienced in payment systems. An undergraduate student at the University of Lagos studying Finance, with a constant desire to learn about Machine Learning, Deep Research, and more as the technology world continues to unfold.";

export default function HomePage() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient floating ledger marks */}
      <div className="pointer-events-none absolute -top-10 -left-10 w-72 h-72 rounded-full bg-ledger-200/30 blur-3xl animate-floatUp" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-ledger-400/20 blur-3xl animate-floatUp" />

      <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-0 px-6 sm:px-10 lg:px-0 pt-28 pb-32 lg:pt-0 lg:pb-0">
        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative z-10 w-full lg:w-1/2 lg:pr-0 lg:-mr-24 max-w-xl lg:max-w-none"
        >
          <p className="font-mono text-ledger-600 text-sm tracking-[0.3em] uppercase mb-4">
            Software Engineer · FinTech Systems
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-ink mb-6">
            Designing the <span className="ledger-glow italic text-ledger-700">flow</span>{" "}
            behind every transaction.
          </h1>
          <p className="text-base sm:text-lg leading-relaxed text-ink/80 lg:bg-offwhite/0 lg:backdrop-blur-0 max-w-lg">
            {bio}
          </p>

          <div className="mt-8 flex flex-wrap gap-3 font-mono text-xs uppercase tracking-widest text-ledger-700">
            <span className="px-3 py-1 rounded-full border border-ledger-600/40 bg-ledger-50">
              Payment Systems
            </span>
            <span className="px-3 py-1 rounded-full border border-ledger-600/40 bg-ledger-50">
              tech Research
            </span>
            <span className="px-3 py-1 rounded-full border border-ledger-600/40 bg-ledger-50">
              Machine Learning — learning
            </span>
          </div>
        </motion.div>

        {/* Image block — fades into the text on large screens via mask gradient, stacks plainly on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative z-0 w-full max-w-sm lg:max-w-none lg:w-1/2 h-[420px] lg:h-screen"
        >
          <div
            className="relative w-full h-full rounded-3xl lg:rounded-none overflow-hidden card-glow lg:shadow-none"
            style={{
              maskImage:
                "linear-gradient(to right, transparent 0%, black 28%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 28%)",
            }}
          >
            <Image
              src={ProfileImage}
              alt="Portrait"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 50vw"
              className="object-cover hidden lg:block"
            />
            {/* mobile/tablet version without the mask so the image stays fully visible */}
            <Image
              src={ProfileImage}
              alt="Portrait"
              fill
              priority
              sizes="90vw"
              className="object-cover lg:hidden rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ledger-900/30 via-transparent to-transparent lg:hidden" />
          </div>
        </motion.div>
      </div>

      {/* glowing ledger line divider / signature element */}
      <div className="relative h-px w-2/3 mx-auto mb-16 lg:mb-24 bg-gradient-to-r from-transparent via-ledger-500 to-transparent shadow-glow" />
    </section>
  );
}
