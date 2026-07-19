"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { activities } from "@/data/profileData";

export default function ActivitySection() {
  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-ledger-500 to-transparent hidden sm:block shadow-glow" />
      <div className="space-y-10 sm:space-y-0">
        {activities.map((act, i) => {
          const fromLeft = i % 2 === 0;
          return (
            <div
              key={act.id}
              className={`sm:grid sm:grid-cols-2 sm:gap-10 sm:py-10 items-center ${
                fromLeft ? "" : ""
              }`}
            >
              <motion.div
                initial={{ opacity: 0, x: fromLeft ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6 }}
                className={`card-glow rounded-2xl bg-ledger-800 text-paper p-6 ${
                  fromLeft ? "sm:col-start-1" : "sm:col-start-2"
                }`}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-ledger-200 mb-2">
                  {act.date}
                </p>
                <h3 className="font-display text-xl font-bold mb-1">{act.title}</h3>
                <p className="text-sm italic text-ledger-100 mb-3">{act.organization}</p>
                <p className="text-sm leading-relaxed text-paper/85">{act.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: fromLeft ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`relative h-40 sm:h-full rounded-2xl overflow-hidden mt-4 sm:mt-0 ${
                  fromLeft ? "sm:col-start-2" : "sm:col-start-1 sm:row-start-1"
                }`}
              >
                <Image
                  src={act.image}
                  alt={act.title}
                  fill
                  sizes="480px"
                  className="object-cover rounded-2xl card-glow"
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
