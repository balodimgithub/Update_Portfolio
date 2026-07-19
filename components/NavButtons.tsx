"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Home, User, Mail, ArrowUp } from "lucide-react";

export default function NavButtons() {
  const pathname = usePathname();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/profile", label: "Profile", icon: User },
    { href: "/contact", label: "Contact", icon: Mail },
  ].filter((l) => l.href !== pathname);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Floating identity mark, top-left, replaces a topbar */}
      <div className="fixed top-5 left-5 z-50 select-none">
        <span className="font-display italic text-lg sm:text-xl text-ledger-800 tracking-tight">
         Career<span className="text-ledger-500">&amp;</span>Identity
        </span>
      </div>

      {/* Floating nav pills, bottom-center on mobile, bottom-right on desktop */}
      <div className="fixed bottom-5 inset-x-0 sm:inset-x-auto sm:right-6 z-50 flex justify-center sm:justify-end gap-3 px-4">
        <AnimatePresence>
          {showTop && (
            <motion.button
              key="top"
              onClick={scrollToTop}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              aria-label="Back to top"
              className="btn-glow flex items-center justify-center w-12 h-12 rounded-full bg-ledger-800 text-glow shadow-glowSoft hover:shadow-glow text-paper"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {links.map(({ href, label, icon: Icon }, i) => (
          <motion.div
            key={href}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * i, duration: 0.5, ease: "easeOut" }}
          >
            <Link
              href={href}
              className="btn-glow group flex items-center gap-2 rounded-full bg-paper/90 border border-ledger-700/30 backdrop-blur px-5 py-3 font-medium text-ledger-800 shadow-glowSoft hover:shadow-glow hover:bg-ledger-800 hover:text-paper transition-colors duration-300"
            >
              <Icon size={18} className="transition-transform group-hover:rotate-6" />
              <span className="hidden sm:inline">{label}</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
