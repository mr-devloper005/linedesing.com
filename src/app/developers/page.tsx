import Link from 'next/link'
import { ArrowRight, Code2, Layers3, Shield, Sparkle } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const developerAreas = [
  {
    title: 'Profile and creator surfaces',
    description: 'Understand how identity, publishing, and public profile presentation fit together across the frontend.',
  },
  {
    title: 'Media-first UI patterns',
    description: 'Build around larger visual modules, quieter metadata, and the premium gallery rhythm used across the site.',
  },
  {
    title: 'Platform trust and reliability',
    description: 'Ship frontend improvements with a strong focus on quality, consistency, and account safety cues.',
  },
]

const principles = [
  'Keep interfaces image-first and profile-aware.',
  'Use soft premium surfaces and calm visual hierarchy.',
  'Avoid generic dashboard patterns where a curated layout works better.',
  'Preserve fast browsing and low-friction publishing flow.',
]

export default function DevelopersPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff6fb_0%,#fff8f2_42%,#ffffff_100%)] text-[#2c1a24]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(251,195,193,0.55)] bg-[rgba(255,245,248,0.8)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5d3249]">
              <Code2 className="h-3.5 w-3.5" />
              Developers
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
              Build on the visual system without losing the creator-first feel.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#705265]">
              The developer surface explains how the frontend experience is shaped so future work can extend the site while keeping the same image-led, profile-aware personality.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#FE81D4] px-5 py-3 text-sm font-semibold text-[#3b2032] hover:bg-[#f66bca]">
                Talk to the team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/status" className="inline-flex items-center gap-2 rounded-full border border-[rgba(251,195,193,0.65)] bg-white px-5 py-3 text-sm font-semibold text-[#3b2032] hover:bg-[#fff2f8]">
                View status
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[rgba(251,195,193,0.55)] bg-[rgba(255,255,255,0.9)] p-7 shadow-[0_26px_80px_rgba(176,100,132,0.14)]">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7f4660]">
              <Sparkle className="h-4 w-4" />
              Design principles
            </div>
            <div className="mt-5 space-y-3">
              {principles.map((principle) => (
                <div key={principle} className="rounded-[1.4rem] border border-[rgba(251,195,193,0.4)] bg-[rgba(255,245,248,0.72)] px-4 py-4 text-sm text-[#4f3040]">
                  {principle}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {developerAreas.map((area, index) => {
            const icons = [Layers3, Code2, Shield]
            const Icon = icons[index] || Code2
            return (
              <div key={area.title} className="rounded-[2rem] border border-[rgba(251,195,193,0.55)] bg-[rgba(255,255,255,0.9)] p-7 shadow-[0_26px_80px_rgba(176,100,132,0.14)]">
                <Icon className="h-5 w-5 text-[#7f4660]" />
                <h2 className="mt-4 text-xl font-semibold">{area.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#705265]">{area.description}</p>
              </div>
            )
          })}
        </section>
      </main>
      <Footer />
    </div>
  )
}
