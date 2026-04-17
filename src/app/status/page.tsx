import { Activity, CheckCircle2, Clock3, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

const services = [
  { name: 'Gallery browsing', status: 'Operational', detail: 'Image boards are loading normally with fast page response.' },
  { name: 'Creator profiles', status: 'Operational', detail: 'Profile pages, saved identity details, and public views are healthy.' },
  { name: 'Local auth session', status: 'Operational', detail: 'Sign in and account persistence are working as expected on-device.' },
]

const incidents = [
  { date: 'April 9, 2026', title: 'Short image refresh delay', status: 'Resolved', detail: 'Some gallery covers refreshed more slowly than expected during a deploy window.' },
  { date: 'March 28, 2026', title: 'Profile cache lag', status: 'Resolved', detail: 'Recent profile edits took longer to appear for a small subset of visitors.' },
]

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fff6fb_0%,#fff8f2_42%,#ffffff_100%)] text-[#2c1a24]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <section className="grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(251,195,193,0.55)] bg-[rgba(255,245,248,0.8)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#5d3249]">
              <Activity className="h-3.5 w-3.5" />
              System status
            </span>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.06em] sm:text-6xl">
              Platform health presented with the same calm visual system.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[#705265]">
              Track service health for image browsing, creator profiles, and session flow through a clearer status surface that still feels part of the main product.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[rgba(251,195,193,0.55)] bg-[rgba(255,255,255,0.9)] p-7 shadow-[0_26px_80px_rgba(176,100,132,0.14)]">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7f4660]">
              <Sparkles className="h-4 w-4" />
              Current summary
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">All core surfaces are currently operational.</h2>
            <p className="mt-4 text-sm leading-8 text-[#705265]">
              No active incidents are affecting the main experience right now. We continue to monitor gallery rendering, profile delivery, and auth continuity.
            </p>
          </div>
        </section>

        <section className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.name} className="rounded-[2rem] border border-[rgba(251,195,193,0.55)] bg-[rgba(255,255,255,0.9)] p-7 shadow-[0_26px_80px_rgba(176,100,132,0.14)]">
              <CheckCircle2 className="h-5 w-5 text-[#4d9468]" />
              <h2 className="mt-4 text-xl font-semibold">{service.name}</h2>
              <div className="mt-3 inline-flex rounded-full bg-[rgba(142,214,170,0.22)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2e6c49]">
                {service.status}
              </div>
              <p className="mt-4 text-sm leading-7 text-[#705265]">{service.detail}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 rounded-[2rem] border border-[rgba(251,195,193,0.55)] bg-[rgba(255,255,255,0.9)] p-7 shadow-[0_26px_80px_rgba(176,100,132,0.14)]">
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#7f4660]">
            <Clock3 className="h-4 w-4" />
            Incident history
          </div>
          <div className="mt-5 space-y-4">
            {incidents.map((incident) => (
              <div key={incident.title} className="rounded-[1.5rem] border border-[rgba(251,195,193,0.4)] bg-[rgba(255,245,248,0.72)] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8d6176]">{incident.date}</p>
                <h3 className="mt-2 text-xl font-semibold">{incident.title}</h3>
                <p className="mt-2 text-sm font-medium text-[#5d3249]">{incident.status}</p>
                <p className="mt-2 text-sm leading-7 text-[#705265]">{incident.detail}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
