import type { TaskKey } from '@/lib/site-config'

export const siteContent = {
  navbar: {
    tagline: 'Premium image and profile network',
  },
  footer: {
    tagline: 'Curated visuals and identity-led profiles',
  },
  hero: {
    badge: 'Visual board studio',
    title: ['Collect images, moods, and creator identities.'],
    description:
      'An image-led platform for discovering galleries, creator boards, and visual profiles through a richer browsing flow.',
    primaryCta: {
      label: 'Open image boards',
      href: '/images',
    },
    secondaryCta: {
      label: 'Browse profiles',
      href: '/profile',
    },
    searchPlaceholder: 'Search images, creators, collections, and visual posts',
    focusLabel: 'Focus',
    featureCardBadge: 'latest cover rotation',
    featureCardTitle: 'Latest posts shape the visual identity of the homepage.',
    featureCardDescription:
      'Recent images and stories stay at the center of the experience without changing any core platform behavior.',
  },
  home: {
    metadata: {
      title: 'Premium image sharing and profile discovery',
      description:
        'Discover premium galleries, creator profiles, and visual stories on linedesine.com.',
      openGraphTitle: 'Premium image sharing and profile discovery',
      openGraphDescription:
        'Browse image collections, profile highlights, and visual posts with a premium minimal interface.',
      keywords: ['image sharing', 'creator profiles', 'visual discovery', 'linedesine.com'],
    },
    introBadge: 'About the platform',
    introTitle: 'Built for visual discovery, curated image drops, and standout creator identity.',
    introParagraphs: [
      'linedesine.com is designed around image-led exploration, where every surface gives more room to visuals, creator presence, and premium curation.',
      'Instead of splitting the experience across unrelated content types, the UI now centers on image boards and public profiles so discovery feels focused and intentional.',
      'Visitors can move naturally from a gallery into the person behind it, then into related visual posts without the interface getting noisy.',
    ],
    sideBadge: 'At a glance',
    sidePoints: [
      'Gallery-first homepage with larger visual modules and cleaner whitespace.',
      'Profile-led discovery so every image connects back to a creator identity.',
      'Fewer top-level sections, making the product feel more premium and focused.',
      'Lightweight interactions that keep browsing fast, calm, and immersive.',
    ],
    primaryLink: {
      label: 'Browse image boards',
      href: '/images',
    },
    secondaryLink: {
      label: 'Explore creator profiles',
      href: '/profile',
    },
  },
  cta: {
    badge: 'Start exploring',
    title: 'Explore image collections and creator profiles through one focused visual experience.',
    description:
      'Move between gallery posts and public profiles through a cleaner visual system built for browsing, sharing, and identity.',
    primaryCta: {
      label: 'Create your profile',
      href: '/register',
    },
    secondaryCta: {
      label: 'Browse image boards',
      href: '/images',
    },
  },
  taskSectionHeading: 'Latest {label}',
  taskSectionDescriptionSuffix: 'Browse the newest posts in this section.',
} as const

export const taskPageMetadata: Record<Exclude<TaskKey, 'comment' | 'org' | 'social'>, { title: string; description: string }> = {
  article: {
    title: 'Articles and stories',
    description: 'Read articles, stories, guides, and long-form posts across topics and interests.',
  },
  listing: {
    title: 'Listings and discoverable pages',
    description: 'Explore listings, services, brands, and structured pages organized for easier browsing.',
  },
  classified: {
    title: 'Classifieds and announcements',
    description: 'Browse classifieds, offers, notices, and time-sensitive posts across categories.',
  },
  image: {
    title: 'Images and visual posts',
    description: 'Explore image-led posts, galleries, and visual stories from across the platform.',
  },
  profile: {
    title: 'Profiles and public pages',
    description: 'Discover public profiles, brand pages, and identity-focused posts in one place.',
  },
  sbm: {
    title: 'Curated links and saved resources',
    description: 'Browse useful links, saved references, and curated resources organized for discovery.',
  },
  pdf: {
    title: 'PDFs and downloadable resources',
    description: 'Open reports, documents, and downloadable resources shared across the platform.',
  },
}

export const taskIntroCopy: Record<
  TaskKey,
  { title: string; paragraphs: string[]; links: { label: string; href: string }[] }
> = {
  listing: {
    title: 'Listings, services, and structured pages',
    paragraphs: [
      'Explore listings, services, brands, and discoverable pages across categories. Each entry is organized to make browsing clearer and help visitors quickly understand what a post offers.',
      'Listings connect naturally with articles, images, resources, and other content types so supporting information stays easy to reach from the same platform.',
      'Browse by category to compare posts in context, discover related content, and move between formats without losing your place.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'Explore classifieds', href: '/classifieds' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  article: {
    title: 'Articles, stories, and long-form reading',
    paragraphs: [
      'This section is built for stories, explainers, guides, and long-form reading across topics and interests.',
      'Articles connect with listings, images, resources, and other content types so deeper reading can lead naturally into related discovery.',
      'Use this section to browse thoughtful posts, revisit useful writing, and move into supporting content when you want more context.',
    ],
    links: [
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open images', href: '/images' },
      { label: 'Browse resources', href: '/pdf' },
    ],
  },
  classified: {
    title: 'Classifieds, offers, and timely updates',
    paragraphs: [
      'Classified posts help surface offers, notices, deals, and time-sensitive opportunities in a faster-scanning format.',
      'They work well alongside articles, listings, and profiles, making it easier to connect short-term posts with more structured content.',
      'Browse by category to find announcements quickly, then continue into related sections when you need more detail.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View profiles', href: '/profile' },
    ],
  },
  image: {
    title: 'Image-led posts and visual stories',
    paragraphs: [
      'Images take the lead in this section through galleries, visual drops, and mood-led posts where photography and artwork carry the experience.',
      'Each board is designed to feel immersive first, with quieter metadata and stronger visual rhythm so the content has room to breathe.',
      'Browse the latest visual updates, then continue into related creator profiles for context, identity, and follow-through.',
    ],
    links: [
      { label: 'Explore creator profiles', href: '/profile' },
      { label: 'Open image boards', href: '/images' },
      { label: 'Create your profile', href: '/register' },
    ],
  },
  profile: {
    title: 'Profiles, identities, and public pages',
    paragraphs: [
      'Profiles capture the identity behind each gallery, making it easier to understand the creator, studio, or visual brand behind the work.',
      'These pages act as the trust and personality layer of the platform, connecting visitors to style, tone, and publishing history.',
      'Browse profiles to discover people behind the images, then continue into their boards and recent visual posts.',
    ],
    links: [
      { label: 'Browse images', href: '/images' },
      { label: 'Explore profiles', href: '/profile' },
      { label: 'Create your profile', href: '/register' },
    ],
  },
  sbm: {
    title: 'Curated links and bookmarked resources',
    paragraphs: [
      'This section collects useful links, references, tools, and saved resources in a text-first browsing format.',
      'Bookmarks stay connected to the rest of the platform, making it easier to move from a saved link into related stories, listings, or resources.',
      'Use this section to organize helpful sources and discover connected content without leaving the broader site experience.',
    ],
    links: [
      { label: 'Browse articles', href: '/articles' },
      { label: 'Explore listings', href: '/listings' },
      { label: 'Open PDFs', href: '/pdf' },
    ],
  },
  pdf: {
    title: 'PDFs, documents, and downloadable files',
    paragraphs: [
      'The PDF library hosts reports, guides, downloadable files, and longer-form document resources that support reading and discovery.',
      'These resources work alongside stories, listings, and profiles, helping document-style content stay connected to the rest of the platform.',
      'Browse by category to find relevant files quickly, then continue into related sections when you want more context.',
    ],
    links: [
      { label: 'Read articles', href: '/articles' },
      { label: 'See listings', href: '/listings' },
      { label: 'Explore profiles', href: '/profile' },
    ],
  },
  social: {
    title: 'Short updates and community signals',
    paragraphs: [
      'Short updates add quick signals that keep activity flowing across the platform.',
      'They work well with stories, listings, and resources by helping visitors move from brief updates into deeper content.',
      'Use these posts as lightweight entry points into the broader site experience.',
    ],
    links: [
      { label: 'Open listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'View PDFs', href: '/pdf' },
    ],
  },
  comment: {
    title: 'Comments and contextual responses',
    paragraphs: [
      'Comments surface responses connected directly to articles and help keep discussion close to the writing it belongs to.',
      'This layer adds perspective and reaction without needing a separate standalone content format.',
      'Use comments as supporting context beneath stories, then continue exploring related content from the same topic area.',
    ],
    links: [
      { label: 'Explore articles', href: '/articles' },
      { label: 'View listings', href: '/listings' },
      { label: 'See classifieds', href: '/classifieds' },
    ],
  },
  org: {
    title: 'Organizations, teams, and structured entities',
    paragraphs: [
      'Organization pages provide structured identity surfaces for teams, brands, communities, and agencies.',
      'Used with listings, stories, profiles, and resources, they help create stronger structure across the platform.',
      'Connect organization pages with related content to build a clearer and more unified site presence.',
    ],
    links: [
      { label: 'Business listings', href: '/listings' },
      { label: 'Read articles', href: '/articles' },
      { label: 'PDF library', href: '/pdf' },
    ],
  },
}
