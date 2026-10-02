// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface SocialLink {
  href: string;
  label: string;
}

interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

// Site configuration
export const SITE: Site = {
  website: "https://jake-builds.github.io/",
  author: "Jake",
  profile: "https://jake-builds.github.io/about",
  desc: "Jake builds web apps and explores applied AI through practical projects, clear prompts, and AI-assisted development. Connect about AI engineering opportunities.",
  title: "Jake Builds",
  ogImage: "jake-avatar.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: true,
    text: "Edit on GitHub",
    url: "https://github.com/jake-builds/jake-builds.github.io/edit/main/",
  },
  dynamicOgImage: false,
  lang: "en",
  timezone: "America/Los_Angeles",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;
export const LINKEDIN_URL = "https://www.linkedin.com/in/jakeshi";

// Navigation links
export const NAV_LINKS: SocialLink[] = [
  {
    href: "/",
    label: "Blog",
  },
  {
    href: "/about",
    label: "About",
  },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: LINKEDIN_URL,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/jakeshi",
    label: "GitHub",
  },
  {
    href: "https://x.com/jakexshi",
    label: "Twitter",
  },
  {
    href: "/rss.xml",
    label: "RSS",
  },
];

// Icon map for social media
export const ICON_MAP: Record<string, string> = {
  LinkedIn: "linkedin",
  GitHub: "github",
  Twitter: "twitter",
  BlueSky: "bsky",
  RSS: "rss",
  Email: "mail",
};
