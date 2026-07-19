import ExpandableBio from "@/components/ExpandableBio";
import CertificatesSection from "@/components/CertificatesSection";
import ActivitySection from "@/components/ActivitySection";
import ProjectsSection from "@/components/ProjectsSection";
import LearningSection from "@/components/LearningSection";

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-ledger-600 mb-2">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
        <span className="ledger-glow">{title}</span>
      </h2>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <div className="px-6 sm:px-10 lg:px-20 pt-28 pb-32 max-w-6xl mx-auto">
      <header className="mb-20">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ledger-600 mb-3">
          Profile
        </p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
          What I <span className="italic text-ledger-700">actually</span> do
        </h1>
        <ExpandableBio />
      </header>

      <section className="mb-24">
        <SectionHeading eyebrow="01 — Credentials" title="Certificates" />
        <CertificatesSection />
      </section>

      <section className="mb-24">
        <SectionHeading eyebrow="02 — Timeline" title="Activity" />
        <ActivitySection />
      </section>

      <section className="mb-24">
        <SectionHeading eyebrow="03 — Built things" title="Projects" />
        <ProjectsSection />
      </section>

      <section>
        <SectionHeading eyebrow="04 — Right now" title="Currently Learning" />
        <LearningSection />
      </section>
    </div>
  );
}
