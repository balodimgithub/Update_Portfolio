"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { certificates } from "@/data/profileData";

export default function CertificatesSection() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, i) => (
          <motion.a
            key={cert.id}
            href={cert.credentialUrl || "#"}
            initial={{ opacity: 0, y: 24, rotate: i % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -1 : 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ rotate: 0, scale: 1.03 }}
            className="card-glow group block rounded-2xl bg-paper border border-ledger-700/15 p-4 overflow-hidden"
          >
            <div className="relative w-full h-40 rounded-xl overflow-hidden mb-4">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                sizes="320px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ledger-900/10 group-hover:bg-ledger-900/0 transition-colors" />
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-ledger-600 mb-1">
              {cert.date}
            </p>
            <h3 className="font-display text-lg font-semibold text-ink leading-snug mb-1">
              {cert.title}
            </h3>
            <p className="text-sm text-ink/65 italic">{cert.issuer}</p>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
