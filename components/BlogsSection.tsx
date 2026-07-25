"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Clock, BookOpen } from "lucide-react";
import { blogPosts } from "../data/blogData";
import type { BlogPost } from "../data/blogData";

const categoryColor: Record<BlogPost["category"], string> = {
  "Deep Dive":        "bg-ledger-900 text-glow text-ledger-200",
  "Technical Writing":"bg-ledger-700/90 text-paper",
  "Research":         "bg-ledger-500/90 text-ink",
  "Opinion":          "bg-ink/80 text-paper",
};

const featured = blogPosts.find((p) => p.featured);
const rest = blogPosts.filter((p) => !p.featured);

// ── Featured hero card ───────────────────────────────────────────────────────
function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      className="card-glow group relative block rounded-3xl overflow-hidden bg-ledger-900 min-h-[380px] lg:min-h-[440px]"
    >
      {post.thumbnail && (
        <>
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            sizes="100vw"
            className="object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ledger-900 via-ledger-900/60 to-transparent" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-7 sm:p-10">
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className={`font-mono text-xs uppercase tracking-widest px-3 py-1 rounded-full ${categoryColor[post.category]}`}>
            {post.category}
          </span>
          <span className="font-mono text-xs text-ledger-300 flex items-center gap-1.5">
            <Clock size={11} /> {post.readTime}
          </span>
          <span className="font-mono text-xs text-ledger-400">{post.publishedAt}</span>
        </div>

        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-paper leading-snug mb-3 max-w-3xl">
          {post.title}
        </h3>
        <p className="text-paper/70 leading-relaxed max-w-2xl mb-6 text-sm sm:text-base">
          {post.summary}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((t) => (
            <span key={t} className="font-mono text-xs px-2.5 py-1 rounded-full bg-ledger-700/50 border border-ledger-500/30 text-ledger-200">
              {t}
            </span>
          ))}
        </div>

        <span className="btn-glow inline-flex items-center gap-2 rounded-full bg-ledger-400 hover:bg-ledger-300 text-ink px-6 py-3 font-semibold self-start shadow-glow transition-colors group-hover:shadow-glow">
          Read article
          <motion.span
            animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowUpRight size={17} />
          </motion.span>
        </span>
      </div>
    </motion.a>
  );
}

// ── Regular article card ─────────────────────────────────────────────────────
function ArticleCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.a
      href={post.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.07 }}
      className="card-glow group flex flex-col rounded-2xl bg-paper border border-ledger-700/15 overflow-hidden hover:border-ledger-600/40 transition-colors"
    >
      {post.thumbnail && (
        <div className="relative h-40 overflow-hidden shrink-0">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            sizes="480px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ledger-900/50 to-transparent" />
        </div>
      )}

      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <span className={`font-mono text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full ${categoryColor[post.category]}`}>
            {post.category}
          </span>
          <span className="font-mono text-[10px] text-ledger-600 flex items-center gap-1">
            <Clock size={9} /> {post.readTime}
          </span>
        </div>

        <h3 className="font-display text-base sm:text-lg font-bold text-ink leading-snug mb-2 group-hover:text-ledger-700 transition-colors">
          {post.title}
        </h3>
        <p className="text-sm text-ink/65 leading-relaxed flex-1 mb-4">
          {post.summary}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 3).map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-ledger-50 border border-ledger-600/30 text-ledger-700 uppercase tracking-wider">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <span className="font-mono text-xs text-ledger-600">{post.publishedAt}</span>
          <span className="flex items-center gap-1 text-ledger-700 font-medium text-sm group-hover:gap-2 transition-all">
            Read <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}

// ── Section ──────────────────────────────────────────────────────────────────
export default function BlogsSection() {
  return (
    <div>
      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="flex flex-wrap gap-6 items-center mb-10 pb-8 border-b border-ledger-700/15"
      >
        <div className="flex items-center gap-2 text-ledger-700">
          <BookOpen size={16} />
          <span className="font-mono text-sm">
            <strong>{blogPosts.length}</strong> articles published
          </span>
        </div>
        {(["Deep Dive", "Technical Writing", "Research", "Opinion"] as BlogPost["category"][]).map((cat) => {
          const count = blogPosts.filter((p) => p.category === cat).length;
          if (!count) return null;
          return (
            <span key={cat} className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1 rounded-full ${categoryColor[cat]}`}>
              {count} {cat}
            </span>
          );
        })}
      </motion.div>

      {/* Featured hero */}
      {featured && (
        <div className="mb-10">
          <FeaturedCard post={featured} />
        </div>
      )}

      {/* Article grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((post, i) => (
          <ArticleCard key={post.id} post={post} index={i} />
        ))}
      </div>
    </div>
  );
}
