"use client";

import Image from "next/image";
import { learning } from "@/data/profileData";

export default function LearningSection() {
  return (
    <div className="overflow-x-auto sm:overflow-hidden">
      <div className="flex sm:animate-ticker gap-6 w-max sm:hover:[animation-play-state:paused]">
        {[...learning, ...learning].map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="card-glow w-72 shrink-0 rounded-2xl bg-gradient-to-br from-ledger-900 to-ledger-700 text-paper p-6 flex flex-col justify-between"
          >
            {item.image && (
              <div className="relative w-full h-28 rounded-xl overflow-hidden mb-4">
                <Image src={item.image} alt={item.title} fill sizes="280px" className="object-cover" />
              </div>
            )}
            <div>
              <h3 className="font-display text-lg font-bold mb-2 italic">{item.title}</h3>
              <p className="text-sm text-paper/80 leading-relaxed">{item.note}</p>
            </div>
            <span className="mt-4 font-mono text-xs uppercase tracking-widest text-glow text-ledger-200">
              in progress
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
