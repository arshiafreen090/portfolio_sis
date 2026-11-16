// ------------------------------------------------------------------
// CATEGORY A — AI UGC CREATION
// Pulled from public Instagram data (Nov 2026). Update numbers any time.
//   avatar:     "/images/avatars/<username>.jpg"
//   screenshot: optional real profile screenshot; if set it replaces the
//               built-in profile card
//   showStats:  false hides followers / following / posts and video views
//   videos[].views: "" hides the views badge for that video
//   videos[].preview: optional local mp4 that plays muted on hover
// ------------------------------------------------------------------

export const ugcAccounts = [
  {
    id: "zora-meeto",
    tone: "blush",
    name: "Zora&Meeto",
    username: "zora_meeto",
    category: "Digital creator",
    description:
      "An AI-generated couple series. Zora and Meeto play out relatable relationship moments, with new episodes every day.",
    bio: ["Every love story has two sides.", "Zora | Meeto", "New episodes every day."],
    followers: "1,458",
    following: "4",
    posts: "101",
    showStats: true,
    url: "https://www.instagram.com/zora_meeto/",
    avatar: "/images/avatars/zora_meeto.jpg",
    screenshot: "/images/profile-zora_meeto.jpg",
    videos: [
      {
        title: "Who needs Google when you have a husband",
        views: "1.9M views",
        thumbnail: "/images/ugc/zm-1.jpg",
        preview: "",
        url: "https://www.instagram.com/reel/Dcbg7bezWwB/",
      },
      {
        title: "Before marriage vs after marriage",
        views: "1.8M views",
        thumbnail: "/images/ugc/zm-2.jpg",
        preview: "",
        url: "https://www.instagram.com/reel/Dd63xE5KKpy/",
      },
      {
        title: "4 paragraphs vs one “Ok”",
        views: "1.8M views",
        thumbnail: "/images/ugc/zm-3.jpg",
        preview: "",
        url: "https://www.instagram.com/reel/DfLjnuTB2oE/",
      },
    ],
  },
  {
    id: "algo52",
    tone: "butter",
    name: "Algo52",
    username: "tradewithalgo52",
    category: "Algo trading platform",
    description:
      "UGC-style videos for an AI-powered algo trading platform: product features, smart-trading messaging and platform walkthroughs.",
    bio: ["Advanced Algo Trading Platform"],
    followers: "",
    following: "",
    posts: "",
    showStats: false,
    url: "https://www.instagram.com/tradewithalgo52/",
    avatar: "/images/avatars/tradewithalgo52.jpg",
    screenshot: "",
    videos: [
      {
        title: "First day mistake, don't do this",
        views: "",
        thumbnail: "/images/ugc/algo-1.jpg",
        preview: "",
        url: "https://www.instagram.com/reel/DeHMOMyTvl2/",
      },
      {
        title: "Ek fixed percentage decide karo",
        views: "",
        thumbnail: "/images/ugc/algo-2.jpg",
        preview: "",
        url: "https://www.instagram.com/reel/DeB9jCoze2C/",
      },
      {
        title: "Emotions ko beech mein aane hi nahi deta",
        views: "",
        thumbnail: "/images/ugc/algo-3.jpg",
        preview: "",
        url: "https://www.instagram.com/reel/Dd3vOIuze6z/",
      },
    ],
  },
];
