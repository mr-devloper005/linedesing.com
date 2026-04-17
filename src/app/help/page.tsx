import Link from 'next/link'
import { ArrowRight, BookOpen, LifeBuoy, MessageCircleHeart, ShieldCheck, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { mockFaqs } from '@/data/mock-data'

const helpTracks = [
  {
    title: 'Getting started with your profile',
    description: 'Set up your public identity, tune your presentation, and make your profile feel polished from day one.',
  },
  {
    title: 'Publishing image boards',
    description: 'Organize visuals into richer collections with better titles, sequencing, and cover moments.',
  },
  {
    title: 'Growing your visual presence',
    description: 'Use profile cues, curation, and consistency to make your work easier to discover and revisit.',
  },
]

const supportOptions = [
  { label: 'Support inbox', detail: 'Response within one business day', icon: LifeBuoy },
  { label: 'Creator guidance', detail: 'Best-practice help for profiles and galleries', icon: MessageCircleHeart },
  { label: 'Trust & safety', detail: 'Account, access, and visibility support', icon: ShieldCheck },
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff6fb_0%,#fff8f2_42%,#ffffff_100%)] text-[#2c1a24]">
      <NavbarShell />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(251,195,193,0.55)] bg-[rgba(255,245,248,0.8)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5d3249]">
                <Sparkles className="h-3.5 w-3.5" />
                Help center
              </span>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] text-[#2c1a24] sm:text-6xl">
                Support designed around image publishing and creator identity.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#705265]">
                Find clearer guidance for profiles, boards, publishing flow, and account support through a calmer interface that matches the rest of the site.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#FE81D4] px-5 py-3 text-sm font-semibold text-[#3b2032] hover:bg-[#f66bca]">
                  Contact support
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/profile" className="inline-flex items-center gap-2 rounded-full border border-[rgba(251,195,193,0.65)] bg-white px-5 py-3 text-sm font-semibold text-[#3b2032] hover:bg-[#fff2f8]">
                  Explore profiles
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {supportOptions.map((item) => (
                <div key={item.label} className="rounded-[1.8rem] border border-[rgba(251,195,193,0.55)] bg-[rgba(255,255,255,0.9)] p-6 shadow-[0_26px_80px_rgba(176,100,132,0.14)]">
                  <item.icon className="h-5 w-5 text-[#7f4660]" />
                  <h2 className="mt-4 text-xl font-semibold">{item.label}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#705265]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-[2rem] border border-[rgba(251,195,193,0.55)] bg-[rgba(255,255,255,0.9)] p-7 shadow-[0_26px_80px_rgba(176,100,132,0.14)]">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7f4660]">
                <BookOpen className="h-4 w-4" />
                Popular guidance
              </div>
              <div className="mt-5 grid gap-4">
                {helpTracks.map((track) => (
                  <div key={track.title} className="rounded-[1.5rem] border border-[rgba(251,195,193,0.4)] bg-[rgba(255,245,248,0.72)] p-5">
                    <h3 className="text-lg font-semibold">{track.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#705265]">{track.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[rgba(251,195,193,0.55)] bg-[rgba(255,255,255,0.9)] p-7 shadow-[0_26px_80px_rgba(176,100,132,0.14)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7f4660]">Frequently asked</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Quick answers for common creator questions.</h2>
              <Accordion type="single" collapsible className="mt-6">
                {mockFaqs.map((faq) => (
                  <AccordionItem key={faq.id} value={faq.id} className="border-b border-[rgba(251,195,193,0.4)]">
                    <AccordionTrigger className="text-left text-[#2c1a24]">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-sm leading-7 text-[#705265]">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
