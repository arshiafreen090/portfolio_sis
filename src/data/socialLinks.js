// ------------------------------------------------------------------
// PROFILE + SOCIAL LINKS
// Everything personal lives here. Replace the placeholder values.
// Images go in /public/images and are referenced as "/images/file.jpg".
// Leave an image path as "" to keep the styled placeholder.
// ------------------------------------------------------------------

export const profile = {
  name: "Sabiha",
  role: "Content & Growth Strategist",
  greeting: "Heyaa, I'm",
  intro:
    "Blending creativity, AI-powered content and strategic thinking to create content that connects, engages and grows.",
  positioning: "Creative thinking meets content strategy and growth.",
  heroImage: "/images/sabiha-hero.jpg",
  aboutImage: "", // optional still image; the video below is used when set
  aboutVideo: "/videos/about-collage.mp4", // muted, looping animation
  aboutVideoPoster: "/images/about-collage-poster.jpg",
  resumeUrl: "#", // e.g. "/documents/sabiha-resume.pdf"
  footerTagline: "Made with creativity, curiosity & a little bit of strategy.",
};

// [EDITABLE] Short bio. Keep it to 2-3 short paragraphs.
export const about = {
  heading: "A little about me...",
  paragraphs: [
    "Content & growth strategist who handles content end to end: research, scripting, AI-powered UGC, publishing and optimisation.",
    "I create AI UGC videos, write video scripts, manage brand Instagram accounts and write SEO blogs, always focused on what the content does for the brand.",
  ],
  process: [
    "Research & ideation",
    "AI UGC creation",
    "Video scripting",
    "Social media strategy",
    "Publishing",
    "SEO & blogs",
    "Optimisation",
  ],
  loves: [
    "Turning ideas into scroll-stopping content",
    "Telling brand stories creatively",
    "Exploring AI-powered production",
    "Building strategies that drive growth",
  ],
  openTo: [
    "New opportunities",
    "Content strategy roles",
    "Creative strategy roles",
    "Growth marketing",
    "Collaborations",
  ],
};

// id must be one of: email | linkedin | instagram | x (add an instagram entry here to show it)
export const socialLinks = [
  { id: "email", label: "Email", handle: "aurshisabiha@gmail.com", url: "mailto:aurshisabiha@gmail.com" },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "Sabiha Aurshi",
    url: "https://www.linkedin.com/in/sabiha-aurshi-6b82422a9",
  },
  { id: "x", label: "X (Twitter)", handle: "@Sabihaarshi_x", url: "https://x.com/Sabihaarshi_x" },
];

// Which of the links above appear in the hero (spec: Email, LinkedIn, X).
export const heroSocialIds = ["email", "linkedin", "x"];
