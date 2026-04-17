import Link from 'next/link'
import { ArrowRight, CalendarDays, HeartHandshake, MessagesSquare, Users } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const communityMoments = [
  {
    title: 'Creator circles',
    description: 'Smaller groups centered on style, medium, and profile-building conversations.',
  },
  {
    title: 'Board reviews',
    description: 'Share visual collections and get thoughtful feedback on sequencing, cover choices, and tone.',
  },
  {
    title: 'Spotlight sessions',
    description: 'Discover featured creators, emerging image boards, and collaborative publishing moments.',
  },
]

const events = [
  { date: 'Every Thursday', title: 'Gallery critique room', detail: 'Live session for image sequencing and cover selection.' },
  { date: 'April 24', title: 'Profile polish workshop', detail: 'Improve bios, visual identity, and first-impression clarity.' },
  { date: 'May 2', title: 'Curation roundtable', detail: 'Talk through collection structure, mood, and discoverability.' },
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff6fb_0%,#fff8f2_42%,#ffffff_100%)] text-[#2c1a24]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(251,195,193,0.55)] bg-[rgba(255,245,248,0.8)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5d3249]">
              <Users className="h-3.5 w-3.5" />
              Community
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
              A warmer community space for visual creators and profile-led publishing.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#705265]">
              Community on linedesine.com is built around thoughtful curation, creative exchange, and helping image-led work connect back to the people behind it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/register" className="inline-flex items-center gap-2 rounded-full bg-[#FE81D4] px-5 py-3 text-sm font-semibold text-[#3b2032] hover:bg-[#f66bca]">
                Join the community
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/images" className="inline-flex items-center gap-2 rounded-full border border-[rgba(251,195,193,0.65)] bg-white px-5 py-3 text-sm font-semibold text-[#3b2032] hover:bg-[#fff2f8]">
                Browse image boards
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[rgba(251,195,193,0.55)] bg-[rgba(255,255,255,0.9)] p-7 shadow-[0_26px_80px_rgba(176,100,132,0.14)]">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7f4660]">
              <HeartHandshake className="h-4 w-4" />
              What the space feels like
            </div>
            <div className="mt-5 grid gap-4">
              {communityMoments.map((moment) => (
                <div key={moment.title} className="rounded-[1.5rem] border border-[rgba(251,195,193,0.4)] bg-[rgba(255,245,248,0.72)] p-5">
                  <h2 className="text-lg font-semibold">{moment.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-[#705265]">{moment.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[rgba(251,195,193,0.55)] bg-[rgba(255,255,255,0.9)] p-7 shadow-[0_26px_80px_rgba(176,100,132,0.14)]">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7f4660]">
              <CalendarDays className="h-4 w-4" />
              Upcoming moments
            </div>
            <div className="mt-5 space-y-4">
              {events.map((event) => (
                <div key={event.title} className="rounded-[1.5rem] border border-[rgba(251,195,193,0.4)] bg-[rgba(255,245,248,0.72)] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8d6176]">{event.date}</p>
                  <h3 className="mt-2 text-xl font-semibold">{event.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-[#705265]">{event.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[rgba(251,195,193,0.55)] bg-[rgba(255,255,255,0.9)] p-7 shadow-[0_26px_80px_rgba(176,100,132,0.14)]">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7f4660]">
              <MessagesSquare className="h-4 w-4" />
              Community rhythm
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Conversations that stay connected to the work.</h2>
            <p className="mt-4 text-sm leading-8 text-[#705265]">
              Instead of generic discussion boards, the community experience is shaped around creator pages, image drops, and curated visual identity. The result feels calmer, more relevant, and easier to return to.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {['Profile-led discussions', 'Visual critique circles', 'Curated showcases', 'Creator introductions'].map((item) => (
                <div key={item} className="rounded-[1.4rem] border border-[rgba(251,195,193,0.4)] bg-[rgba(255,245,248,0.72)] px-4 py-4 text-sm font-medium text-[#4f3040]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
