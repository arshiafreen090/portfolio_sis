// ------------------------------------------------------------------
// CATEGORY B — SCRIPTING + CONTENT CREATION
// Same account shape as ugcAccounts.js (see notes there).
// ------------------------------------------------------------------

export const contentAccounts = [
  {
    id: "zorameeto",
    tone: "blush",
    name: "Zorameeto",
    username: "zorameeto",
    category: "Dating app",
    description:
      "Brand account for the Zorameeto dating app: relatable static posts, carousels and reels around modern dating and real connections.",
    bio: ["Meet Someone Who Matches Your Life."],
    followers: "1,718",
    following: "5",
    posts: "241",
    showStats: true,
    url: "https://www.instagram.com/zorameeto/",
    avatar: "/images/avatars/zorameeto.jpg",
    screenshot: "/images/profile-zorameeto.jpg",
    videos: [
      {
        title: "A referral that's actually rewarding",
        views: "2.2M views",
        thumbnail: "/images/content/zorameeto-reel-1.jpg",
        preview: "",
        url: "https://www.instagram.com/reel/Dbn48UTBzuW/",
      },
      {
        title: "What's your biggest dating red flag?",
        views: "1M views",
        thumbnail: "/images/content/zorameeto-reel-2.jpg",
        preview: "",
        url: "https://www.instagram.com/reel/DbtCkt8hguF/",
      },
      {
        title: "Tired of endless swiping?",
        views: "273K views",
        thumbnail: "/images/content/zorameeto-reel-3.jpg",
        preview: "",
        url: "https://www.instagram.com/reel/DcdJh1ECZb7/",
      },
    ],
  },
];

// Static posts / carousels for the Pinterest-style gallery.
// Images show at their natural proportions; columns are staggered automatically.
const ZM = "https://www.instagram.com/zorameeto/";
export const staticPosts = [
  { image: "/images/content/post-zm-2.jpg", category: "Carousel", account: "@zorameeto", title: "Are you a door? Because you're a-door-able", url: "https://www.instagram.com/p/De1elzHHzM7/" },
  { image: "/images/content/post-bs-3.jpg", category: "Carousel", account: "@bhatt_square", title: "Digital marketing ke bina business grow nahi hoga", url: "https://www.instagram.com/p/DaklVIHkuA6/" },
  { image: "/images/content/post-zm-wemet.jpg", category: "Static Post", account: "@zorameeto", title: "We met on Zorameeto", url: ZM },
  { image: "/images/content/post-zm-neend.jpg", category: "Static Post", account: "@zorameeto", title: "Neend bahot aa rahi hai, par maza bhi", url: ZM },
  { image: "/images/content/post-zm-friendship.jpg", category: "Static Post", account: "@zorameeto", title: "Love and friendship in one person", url: ZM },
  { image: "/images/content/post-bs-2.jpg", category: "Static Post", account: "@bhatt_square", title: "Business without a CRM looks like...", url: "https://www.instagram.com/p/DbDP-SwSMRy/" },
  { image: "/images/content/post-zm-3.jpg", category: "Static Post", account: "@zorameeto", title: "Understanding over ego", url: "https://www.instagram.com/p/DemHGe7PLOp/" },
  { image: "/images/content/post-bs-1.jpg", category: "Carousel", account: "@bhatt_square", title: "We're a tech company, of course we...", url: "https://www.instagram.com/p/DauMplXEn1A/" },
  { image: "/images/content/post-zm-4.jpg", category: "Carousel", account: "@zorameeto", title: "Her biggest fan", url: "https://www.instagram.com/p/DewZzKZH-JD/" },
  { image: "/images/content/post-zm-1.jpg", category: "Carousel", account: "@zorameeto", title: "Life after downloading Zorameeto", url: "https://www.instagram.com/p/DfCwidyn-CA/" },
];

// Video scripts. `url` opens the full script (PDF in /public/documents).
// beats: the script's structure, shown as a timeline on the card.
const SCRIPTS_PDF = "/documents/zorameeto-scripts.pdf";
export const scripts = [
  {
    title: "Giving love another chance",
    category: "Storytelling",
    duration: "30 sec",
    hook: "\u0905\u0930\u0947, \u0906\u0916\u093f\u0930 \u091a\u093e\u0939\u093f\u090f \u0915\u094d\u092f\u093e \u0914\u0930\u0924 \u0915\u094b? Bas ek loyal aur caring partner, someone who's genuinely there!",
    preview:
      "But aajkal situationships, benching, flings aur casual dating ke beech, we've somehow made love so complicated. Mere saath bhi kuch aisa hi tha. Then I came across Zorameeto...",
    beats: ["Hook", "Problem", "Message", "Brand discovery", "Experience", "CTA"],
    note: "relatable hook",
    url: `${SCRIPTS_PDF}#page=1`,
    full: [
      {
            "time": "0–4 sec",
            "section": "Hook",
            "line": "अरे, आखिर चाहिए क्या औरत को? बस एक loyal aur caring partner, someone who's genuinely there!"
      },
      {
            "time": "4–9 sec",
            "section": "Problem",
            "line": "But aajkal situationships, benching, flings aur casual dating ke beech, we've somehow made love so complicated."
      },
      {
            "time": "9–14 sec",
            "section": "Main message",
            "line": "And maybe that's why this generation is a little afraid of falling in love again. Which is fair, because sometimes personal experiences change the way we look at love."
      },
      {
            "time": "14–20 sec",
            "section": "Brand discovery",
            "line": "Mere saath bhi kuch aisa hi tha. Then I came across Zorameeto. I thought, maybe it's time to give dating another chance."
      },
      {
            "time": "20–26 sec",
            "section": "Solution / experience",
            "line": "And here I am, planning another date! This time, I've planned it myself, because efforts should always be from both sides. Maybe one right swipe really can lead to the right choice!"
      },
      {
            "time": "26–30 sec",
            "section": "CTA",
            "line": "I'm getting late! Link's in my bio. Tell me, where would you plan your next date? Comment below. Okay byee!"
      }
    ],
  },
  {
    title: "What modern dating apps were missing",
    category: "Product explainer",
    duration: "30 sec",
    hook: "Honestly, I think ZoraMeeto is what modern dating apps were missing!",
    preview:
      "It's not just about finding someone, it's about genuine connections. With face verification, you connect with verified profiles, not random fake accounts. And guess what? You can actually earn while connecting...",
    beats: ["Hook", "Brand + trust", "Earning", "Features", "CTA"],
    note: "features \u2192 benefits",
    url: `${SCRIPTS_PDF}#page=2`,
    full: [
      {
            "time": "0–4 sec",
            "section": "Hook",
            "line": "Honestly, I think ZoraMeeto is what modern dating apps were missing! Because dating should be more than just swiping left and right."
      },
      {
            "time": "4–9 sec",
            "section": "Brand intro + trust",
            "line": "First, it's not just about finding someone. It's about making genuine connections. With face verification, you connect with verified profiles, not random fake accounts!"
      },
      {
            "time": "9–17 sec",
            "section": "Earning opportunity",
            "line": "And guess what? You can actually earn while connecting! Get ₹5 per minute on audio calls and ₹20 per minute on video calls. Yes, you're hearing that right!"
      },
      {
            "time": "17–24 sec",
            "section": "Experience + features",
            "line": "You can chat, make audio and video calls, send virtual gifts, and even Roses! Plus, Refer & Earn gives you another way to earn."
      },
      {
            "time": "24–30 sec",
            "section": "CTA + closing",
            "line": "So, if you're looking for real connections with some exciting earning opportunities, stop scrolling and give ZoraMeeto a try. Trust me, it's more than a dating app!"
      }
    ],
  },
  {
    title: "Ghosted again? (two-person skit)",
    category: "Comedy skit",
    duration: "30 sec",
    hook: "\u092a\u0924\u093e \u0928\u0939\u0940\u0902 \u092f\u093e\u0930! \u0939\u0930 \u092c\u093e\u0930 dating app \u092a\u0930 \u0915\u094b\u0908 \u092e\u093f\u0932\u0924\u093e \u0939\u0948, \u0926\u094b \u0926\u093f\u0928 \u092c\u093e\u0924 \u0915\u0930\u0924\u093e \u0939\u0948 \u0914\u0930 \u092b\u093f\u0930 ghost \u0915\u0930 \u0926\u0947\u0924\u093e \u0939\u0948!",
    preview:
      "Girl: \u201c\u0932\u0917\u0924\u093e \u0939\u0948 \u092e\u0947\u0930\u0940 \u0915\u093f\u0938\u094d\u092e\u0924 \u092e\u0947\u0902 \u0938\u0939\u0940 \u0907\u0902\u0938\u093e\u0928 \u0915\u093e Wi-Fi \u0939\u0940 \u0928\u0939\u0940\u0902 \u0906\u0924\u093e!\u201d Boy: \u201c\u0905\u0930\u0947, \u090f\u0915 \u092c\u093e\u0930 ZoraMeeto try \u0915\u0930! Face-verified profiles, genuine connections, no random bots.\u201d",
    beats: ["Opening", "Frustration hook", "Comedy", "Brand intro", "Curiosity", "CTA"],
    note: "humour sells it",
    url: `${SCRIPTS_PDF}#page=3`,
    full: [
      {
            "time": "0–5 sec",
            "section": "Boy · opening",
            "line": "Boy: “Oye, all good?”"
      },
      {
            "time": "5–10 sec",
            "section": "Girl · frustration / hook",
            "line": "Girl: “पता नहीं यार! हर बार dating app पर कोई मिलता है, दो दिन बात करता है और फिर ghost कर देता है!”"
      },
      {
            "time": "10–15 sec",
            "section": "Boy · funny response",
            "line": "Boy: “तो फिर random dating apps छोड़ ना! हर बार ऐसे लोगों को ही क्यों ढूंढती है?”"
      },
      {
            "time": "15–18 sec",
            "section": "Girl · comedy",
            "line": "Girl: “तो क्या करूँ? लगता है मेरी किस्मत में सही इंसान का Wi-Fi ही नहीं आता!”"
      },
      {
            "time": "18–24 sec",
            "section": "Boy · brand intro + trust",
            "line": "Boy: “अरे, एक बार ZoraMeeto try कर! यहाँ मिलते हैं face-verified profiles, genuine connections और no random bot profiles!”"
      },
      {
            "time": "24–27 sec",
            "section": "Girl · curiosity",
            "line": "Girl: “सच में? मतलब अब fake profiles और random लोगों का झंझट नहीं?”"
      },
      {
            "time": "27–30 sec",
            "section": "Boy · CTA",
            "line": "Boy: “Exactly! So stop chasing random matches and start making meaningful connections. Try ZoraMeeto!”"
      }
    ],
  },
];
