import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Globe, Sparkles } from "lucide-react";
import { Footer } from "@/components/shared/footer";
import { NavbarShell } from "@/components/shared/navbar-shell";
import { ContentImage } from "@/components/shared/content-image";
import { formatRichHtml } from "@/components/shared/rich-content";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { Button } from "@/components/ui/button";
import { SchemaJsonLd } from "@/components/seo/schema-jsonld";
import { buildPostUrl, fetchTaskPostBySlug, fetchTaskPosts } from "@/lib/task-data";
import { buildPostMetadata, buildTaskMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/site-config";
import { getSiteExperience } from "@/lib/site-experience";

export const revalidate = 3;

export async function generateStaticParams() {
  const posts = await fetchTaskPosts("profile", 50);
  if (!posts.length) {
    return [{ username: "placeholder" }];
  }
  return posts.map((post) => ({ username: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  try {
    const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
    return post ? await buildPostMetadata("profile", post) : await buildTaskMetadata("profile");
  } catch (error) {
    console.warn("Profile metadata lookup failed", error);
    return await buildTaskMetadata("profile");
  }
}

function stripTags(value?: string | null) {
  return (value || "")
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, " ")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, " ")
    .replace(/<\/?[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default async function ProfileDetailPage({ params }: { params: Promise<{ username: string }> }) {
  const resolvedParams = await params;
  const post = await fetchTaskPostBySlug("profile", resolvedParams.username);
  if (!post) notFound();

  const content = (post.content || {}) as Record<string, any>;
  const logoUrl = typeof content.logo === "string" ? content.logo : undefined;
  const brandName =
    (content.brandName as string | undefined) ||
    (content.companyName as string | undefined) ||
    (content.name as string | undefined) ||
    post.title;
  const website = content.website as string | undefined;
  const domain = website ? website.replace(/^https?:\/\//, "").replace(/\/.*$/, "") : undefined;
  const description =
    (content.description as string | undefined) ||
    post.summary ||
    "Profile details will appear here once available.";
  const descriptionHtml = formatRichHtml(description);
  const suggestedArticles = await fetchTaskPosts("article", 6);
  const baseUrl = SITE_CONFIG.baseUrl.replace(/\/$/, "");
  const experience = getSiteExperience(SITE_CONFIG.baseUrl);

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
      { "@type": "ListItem", position: 2, name: "Profiles", item: `${baseUrl}/profile` },
      { "@type": "ListItem", position: 3, name: brandName, item: `${baseUrl}/profile/${post.slug}` },
    ],
  };

  const coverUrl =
    typeof content.images?.[0] === "string"
      ? content.images[0]
      : typeof content.logo === "string"
        ? content.logo
        : logoUrl;

  return (
    <div className={`min-h-screen ${experience.pageClass} ${experience.fontClass}`}>
      <NavbarShell />
      <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <SchemaJsonLd data={breadcrumbData} />

        {experience.key === "linedesing" ? (
          <section className="relative overflow-hidden">
            {/* Animated mesh gradient background */}
            <div className="absolute inset-0 bg-slate-950">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-600/40 via-slate-950 to-slate-950" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-pink-600/30 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating geometric shapes */}
            <div className="absolute left-[10%] top-[20%] h-32 w-32 rotate-12 border border-white/10 bg-white/5 backdrop-blur-sm" />
            <div className="absolute right-[15%] top-[30%] h-24 w-24 -rotate-45 rounded-full border border-pink-500/30 bg-pink-500/10" />
            <div className="absolute bottom-[30%] left-[5%] h-16 w-16 rotate-45 bg-gradient-to-br from-cyan-500/20 to-blue-500/20" />
            <div className="absolute right-[8%] bottom-[20%] h-20 w-20 rounded-full border-2 border-purple-500/40" />
            
            {/* Diagonal split header */}
            <div className="relative">
              {/* Cover with diagonal clip */}
              <div className="relative h-72 sm:h-80 lg:h-[28rem]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
                {coverUrl ? (
                  <ContentImage 
                    src={coverUrl} 
                    alt={`${brandName} cover`} 
                    fill 
                    className="object-cover" 
                    sizes="100vw" 
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-slate-800 via-slate-900 to-black" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                
                {/* Neon corner accents */}
                <div className="absolute right-0 top-0 h-32 w-32">
                  <div className="absolute right-6 top-6 h-12 w-12 rotate-45 border border-pink-500/50 bg-pink-500/20 shadow-[0_0_30px_rgba(236,72,153,0.5)]" />
                </div>
                <div className="absolute left-8 top-8 hidden lg:block">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                    <span className="text-xs font-medium text-white/80">Active Now</span>
                  </div>
                </div>
              </div>
              
              {/* Content with overlap */}
              <div className="relative mx-auto max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
                <div className="-mt-24 flex flex-col gap-8 lg:flex-row lg:items-end lg:gap-12">
                  {/* Avatar with neon glow */}
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-75 blur-lg" />
                    <div className="relative h-32 w-32 overflow-hidden rounded-3xl border-4 border-slate-950 bg-slate-900 shadow-2xl sm:h-40 sm:w-40">
                      {logoUrl ? <ContentImage src={logoUrl} alt={brandName} fill className="object-cover" /> : null}
                    </div>
                    {/* Orbiting dot */}
                    <div className="absolute -right-1 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
                  </div>
                  
                  {/* Info section */}
                  <div className="flex-1 space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="group relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md transition-all hover:border-pink-500/50">
                        <span className="relative z-10">Creator Profile</span>
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-pink-500/20 to-purple-500/20 transition-transform group-hover:translate-x-0" />
                      </span>
                      {domain && (
                        <span className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 backdrop-blur-sm">
                          <Globe className="h-3 w-3" />
                          {domain}
                        </span>
                      )}
                    </div>
                    <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                      <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">{brandName}</span>
                    </h1>
                  </div>
                  
                  {/* CTA Button with neon effect */}
                  {website && (
                    <div className="lg:pb-2">
                      <Button 
                        asChild 
                        className="group relative overflow-hidden rounded-full border border-white/20 bg-white/10 px-8 py-6 text-white shadow-[0_0_40px_rgba(255,255,255,0.1)] backdrop-blur-md transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(236,72,153,0.4)]"
                      >
                        <Link href={website} target="_blank" rel="noopener noreferrer" className="relative z-10">
                          <span className="flex items-center gap-2">
                            Visit website
                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
                
                {/* Glass description card */}
                <div className="mt-10 max-w-3xl">
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10">
                    {/* Corner accent */}
                    <div className="absolute -right-12 -top-12 h-24 w-24 rotate-45 bg-gradient-to-br from-pink-500/20 to-purple-500/20" />
                    {/* Glow line */}
                    <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-pink-500 via-purple-500 to-cyan-500" />
                    <p className="relative pl-6 text-lg leading-relaxed text-white/80">
                      {stripTags(description)}
                    </p>
                    {/* Decorative dots */}
                    <div className="absolute bottom-4 right-4 flex gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-pink-500/60" />
                      <span className="h-1.5 w-1.5 rounded-full bg-purple-500/60" />
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-500/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : experience.key === "tynewebdesign" ? (
          <section className={`mx-auto max-w-5xl overflow-hidden rounded-[2.4rem] ${experience.panelClass}`}>
            <div className="relative h-52 sm:h-64">
              {coverUrl ? (
                <ContentImage src={coverUrl} alt={`${brandName} cover`} fill className="object-cover" sizes="100vw" />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-sky-100 via-white to-cyan-100" />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
            </div>
            <div className="relative px-6 pb-10 pt-0 md:px-10">
              <div className="-mt-16 flex flex-col items-center gap-6 md:flex-row md:items-end">
                <div className="relative h-32 w-32 overflow-hidden rounded-[2rem] border-4 border-white bg-white shadow-xl">
                  {logoUrl ? <ContentImage src={logoUrl} alt={brandName} fill className="object-cover" /> : null}
                </div>
                <div className="min-w-0 flex-1 text-center md:text-left">
                  <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${experience.mutedClass}`}>Floating identity card</p>
                  <h1 className="mt-2 text-4xl font-semibold tracking-[-0.04em] text-foreground">{brandName}</h1>
                  {domain ? <p className={`mt-2 text-sm ${experience.mutedClass}`}>{domain}</p> : null}
                </div>
              </div>
            </div>
          </section>
        ) : experience.key === "codepixelmedia" ? (
          <section className="overflow-hidden rounded-[2rem] lg:grid lg:grid-cols-[0.92fr_1.08fr]">
            <div className={`p-8 ${experience.panelClass}`}>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">Split profile</p>
              <h1 className="mt-4 text-5xl font-semibold tracking-[-0.05em] text-white">{brandName}</h1>
              {domain ? <p className="mt-3 text-sm text-slate-300">{domain}</p> : null}
            </div>
            <div className="grid bg-[#eef3ff] p-8">
              <div className="grid gap-5 rounded-[1.75rem] border border-white bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem]">
                  {coverUrl ? <ContentImage src={coverUrl} alt={`${brandName} cover`} fill className="object-cover" /> : null}
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 overflow-hidden rounded-[1.5rem] bg-slate-100">
                    {logoUrl ? <ContentImage src={logoUrl} alt={brandName} fill className="object-cover" /> : null}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Task data side</p>
                    <p className="mt-1 text-lg font-semibold text-slate-950">Profile assets and trust signals</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : experience.key === "radianpark" ? (
          <section className={`rounded-[2rem] p-6 ${experience.panelClass}`}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap items-center justify-between gap-4 rounded-full border border-zinc-200 bg-zinc-50 px-5 py-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Signal bar</p>
                  <h1 className="mt-2 text-3xl font-semibold text-zinc-950">{brandName}</h1>
                </div>
              </div>
              <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-zinc-100">
                  {logoUrl ? <ContentImage src={logoUrl} alt={brandName} fill className="object-cover" /> : null}
                </div>
                <div className={`rounded-[1.75rem] p-6 ${experience.softPanelClass}`}>
                  <p className={`text-sm leading-8 ${experience.mutedClass}`}>Minimal header, denser stats, and a clearer trust-first profile scan.</p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className={`rounded-[2.2rem] p-8 ${experience.panelClass}`}>
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-6">
                <p className={`text-xs font-semibold uppercase tracking-[0.28em] ${experience.mutedClass}`}>{experience.heroEyebrow}</p>
                <h1 className="text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">{brandName}</h1>
                {domain ? (
                  <div className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${experience.softPanelClass}`}>
                    <Globe className="h-4 w-4" />
                    {domain}
                  </div>
                ) : null}
              </div>
              <div className="grid gap-5">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-muted">
                  {coverUrl ? <ContentImage src={coverUrl} alt={`${brandName} cover`} fill className="object-cover" /> : null}
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative h-24 w-24 overflow-hidden rounded-[1.75rem] bg-white shadow-lg">
                    {logoUrl ? <ContentImage src={logoUrl} alt={brandName} fill className="object-cover" /> : null}
                  </div>
                  <div className={`rounded-[1.5rem] p-4 ${experience.softPanelClass}`}>
                    <div className={`flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] ${experience.mutedClass}`}>
                      <Sparkles className="h-4 w-4" />
                      Direct-link identity surface
                    </div>
                    <p className="mt-2 text-sm text-foreground">This profile is built to make the layout shift immediate and unmistakable.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        <section className="mt-10">
          <article
            className={`article-content prose mx-auto max-w-none rounded-[2rem] p-6 prose-p:my-4 prose-a:text-primary prose-a:underline prose-strong:font-semibold ${experience.panelClass}`}
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        </section>

        {suggestedArticles.length ? (
          <section className="mt-14">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">Suggested articles</h2>
              <Link href="/articles" className={`text-sm font-semibold ${experience.mutedClass}`}>
                View all
              </Link>
            </div>

            {experience.key === "codepixelmedia" || experience.key === "helloartcity" ? (
              <div className="flex gap-5 overflow-x-auto pb-2">
                {suggestedArticles.slice(0, 3).map((article) => (
                  <div key={article.id} className="min-w-[280px] max-w-[320px] flex-none">
                    <TaskPostCard post={article} href={buildPostUrl("article", article.slug)} compact />
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {suggestedArticles.slice(0, 3).map((article) => (
                  <TaskPostCard
                    key={article.id}
                    post={article}
                    href={buildPostUrl("article", article.slug)}
                    compact
                  />
                ))}
              </div>
            )}
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
