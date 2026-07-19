"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

// Fill these in from your EmailJS dashboard (https://www.emailjs.com/)
// const EMAILJS_SERVICE_ID = process.env.EMAILJS_SERVICE_ID || "";
// const EMAILJS_TEMPLATE_ID = process.env.EMAILJS_TEMPLATE_ID || "";
// const EMAILJS_PUBLIC_KEY = process.env.EMAILJS_PUBLIC_KEY || "";


const EMAILJS_SERVICE_ID = "service_x3wfno4";
const EMAILJS_TEMPLATE_ID = "template_3foigjc";
const EMAILJS_PUBLIC_KEY = "aKYDGi7Xo_3idUb3r";
type Status = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen px-6 sm:px-10 lg:px-20 pt-28 pb-32 max-w-4xl mx-auto">
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ledger-600 mb-3">
          Contact
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">
          Let&apos;s <span className="ledger-glow italic text-ledger-700">talk</span> flow
        </h1>
        <p className="text-ink/75 max-w-xl">
          Have a payment system to design, a flow to debug, or a role worth discussing?
          Send a note below — every field is read, and replies come fast.
        </p>
      </motion.header>

      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="card-glow rounded-3xl bg-paper border border-ledger-700/15 p-6 sm:p-10 space-y-6"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <Field label="Full name" name="name" type="text" placeholder="Ada Lovelace" required />
          <Field label="Email" name="email" type="email" placeholder="ada@example.com" required />
        </div>

        <Field label="Phone" name="phone" type="tel" placeholder="+234 800 000 0000" />
           <Field label="address" name="address" type="text" placeholder="123 Main Street, City, Country" />

        <div>
          <label className="block font-mono text-xs uppercase tracking-widest text-ledger-700 mb-2">
            Work request
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell me about the system, role, or idea..."
            className="w-full rounded-xl border border-ledger-700/25 bg-offwhite px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-ledger-500 focus:shadow-glow transition-shadow"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="btn-glow w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-ledger-800 text-paper px-8 py-3.5 font-semibold shadow-glowSoft hover:shadow-glow transition-shadow disabled:opacity-60"
        >
          <Send size={18} />
          {status === "sending" ? "Sending..." : "Send message"}
        </button>

        {status === "success" && (
          <p className="flex items-center gap-2 text-ledger-700 font-medium">
            <CheckCircle2 size={18} /> Message sent — thank you, I&apos;ll reply soon.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-red-600 font-medium">
            <AlertCircle size={18} /> Something went wrong. Please check the EmailJS keys or try again.
          </p>
        )}
      </motion.form>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block font-mono text-xs uppercase tracking-widest text-ledger-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ledger-700/25 bg-offwhite px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-ledger-500 focus:shadow-glow transition-shadow"
      />
    </div>
  );
}
