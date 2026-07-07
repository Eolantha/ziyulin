// ── ZIYU LIN — Paper Portfolio ────────────────────────────────
// All editorial content for the publication lives here.

import photoDaisies from "@/assets/photo-daisies.jpg";
import photoClouds from "@/assets/photo-clouds.jpg";
import photoOcean from "@/assets/photo-ocean.jpg";
import photoBuilding from "@/assets/photo-building.jpg";
import photoMuseum from "@/assets/photo-museum.jpg";
import photoTrain from "@/assets/photo-train-window.jpg";
import photoBook from "@/assets/photo-open-book.jpg";
import photoSunset from "@/assets/photo-sunset.jpg";
import photoRain from "@/assets/photo-rain.jpg";
import photoStained from "@/assets/photo-stainedglass.jpg";
import photoWater from "@/assets/photo-waterglass.jpg";
import photoBalloons from "@/assets/photo-balloons.jpg";

export const images = {
  daisies: photoDaisies,
  clouds: photoClouds,
  ocean: photoOcean,
  building: photoBuilding,
  museum: photoMuseum,
  train: photoTrain,
  book: photoBook,
  sunset: photoSunset,
  rain: photoRain,
  stained: photoStained,
  water: photoWater,
  balloons: photoBalloons,
};

export const masthead = {
  name: "ZIYU LIN",
  tagline: "Paper Portfolio",
  issue: "VOL. 001",
  location: "Singapore",
  date: "7 July 2026",
  edition: "Issue No. 001",
};

export const editorial = {
  heading: "A Letter from the Editor",
  paragraphs: [
    "There are things medicine teaches that writing notices. I think healing happens twice — once quietly, in the body, and once again on the page, where you finally admit it happened at all.",
    "This is not a portfolio so much as an edition. It arrives occasionally, the way morning papers used to: folded, imperfect, printed while the ink was still deciding what to say. Read it slowly. There is nothing here that rewards a hurry.",
    "Everything is small on purpose. A poem the size of a horoscope. A photograph with no caption. An observation you could have written yourself, had you been paying that kind of attention.",
  ],
  signature: "— Z.L.",
};

// ── Poetry (The Forecast) ─────────────────────────────
export type Poem = {
  sign: string;
  glyph: string;
  title: string;
  preview: string[];
  body: string[];
};

export const poems: Poem[] = [
  {
    sign: "Aries",
    glyph: "♈",
    title: "Small Fires",
    preview: ["You may mistake nostalgia", "for hope today."],
    body: [
      "You may mistake nostalgia for hope today.",
      "They wear the same coat, keep the same hours,",
      "arrive at the door with the same soft knock.",
      "Let them both in. Offer tea.",
      "One of them will tell you the truth by morning.",
    ],
  },
  {
    sign: "Taurus",
    glyph: "♉",
    title: "The Long Memory",
    preview: ["Someone will remember you", "differently than you do."],
    body: [
      "Someone will remember you differently",
      "than you remember yourself,",
      "and both of you will be right,",
      "and neither version will be enough,",
      "and this is the closest thing to being known.",
    ],
  },
  {
    sign: "Gemini",
    glyph: "♊",
    title: "Rain, Waiting",
    preview: ["The rain has", "been waiting."],
    body: [
      "The rain has been waiting",
      "for you to stop pretending",
      "you don't love the sound of it.",
      "Go on. Stand at the window.",
      "It has been so patient.",
    ],
  },
  {
    sign: "Cancer",
    glyph: "♋",
    title: "A Small Thing",
    preview: ["Your kindness is", "not a small thing."],
    body: [
      "Your kindness is not a small thing,",
      "though you keep it in a small drawer,",
      "though you hand it out like receipts,",
      "quietly, expecting nothing.",
      "Someone kept theirs. Ask them.",
    ],
  },
  {
    sign: "Leo",
    glyph: "♌",
    title: "The Unlocked Door",
    preview: ["A door you thought was", "closed was never locked."],
    body: [
      "A door you thought was closed",
      "was never locked, only heavy,",
      "only waiting for a hand",
      "that wasn't sure it wanted in.",
      "It is still there. It is still yours.",
    ],
  },
  {
    sign: "Virgo",
    glyph: "♍",
    title: "One Ordinary Sentence",
    preview: ["You will overthink", "one ordinary sentence."],
    body: [
      "You will overthink one ordinary sentence",
      "until it becomes a country",
      "you cannot leave without a passport.",
      "It was only a sentence.",
      "Fold it up. Put it away. Sleep.",
    ],
  },
  {
    sign: "Libra",
    glyph: "♎",
    title: "Middle Distances",
    preview: ["Balance is not", "always found in the middle."],
    body: [
      "Balance is not always found in the middle.",
      "Sometimes it lives at the far edge,",
      "leaning, arms out, laughing,",
      "closer to falling than you'd like,",
      "and still, somehow, standing.",
    ],
  },
  {
    sign: "Scorpio",
    glyph: "♏",
    title: "What Heals You",
    preview: ["What haunts you might just", "be what heals you."],
    body: [
      "What haunts you might just",
      "be what heals you, slowly,",
      "the way a splinter works its way out,",
      "the way an old song finds the exact",
      "afternoon it was written for.",
    ],
  },
  {
    sign: "Sagittarius",
    glyph: "♐",
    title: "Staying Still",
    preview: ["Adventure is", "sometimes staying still."],
    body: [
      "Adventure is sometimes staying still",
      "long enough to notice",
      "the room was already changing,",
      "the light already leaving,",
      "the whole world arriving without you moving an inch.",
    ],
  },
  {
    sign: "Capricorn",
    glyph: "♑",
    title: "Repetition",
    preview: ["The lesson is repetition", "until it isn't."],
    body: [
      "The lesson is repetition until it isn't,",
      "until the hands know the shape",
      "your mind keeps forgetting,",
      "until the doing becomes the knowing",
      "and you can finally stop counting.",
    ],
  },
  {
    sign: "Aquarius",
    glyph: "♒",
    title: "Versions of You",
    preview: ["You are allowed to outgrow", "versions of you."],
    body: [
      "You are allowed to outgrow",
      "people, places, versions of you",
      "that once kept you alive.",
      "Thank them at the door.",
      "You are not the coat you wore in winter.",
    ],
  },
  {
    sign: "Pisces",
    glyph: "♓",
    title: "Not About Sleep",
    preview: ["Dreams are not", "always about sleep."],
    body: [
      "Dreams are not always about sleep.",
      "Some of them happen at noon,",
      "with your eyes open,",
      "with your coffee going cold,",
      "with the whole ordinary day dreaming you back.",
    ],
  },
];

// ── Prose (Feature Stories) ───────────────────────────
export type Article = {
  slug: string;
  kicker: string;
  title: string;
  excerpt: string;
  image: string;
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "museum",
    kicker: "On solitude",
    title: "Museum",
    excerpt: "There is something inescapably lonely in art museums.",
    image: images.museum,
    body: [
      "There is something inescapably lonely in art museums. Not sad, exactly. Lonely in the way a cathedral is lonely — built for crowds, best understood alone.",
      "You walk the same route everyone walks, and yet you are the only person standing in front of this painting at this exact minute of your life. The guard has seen it ten thousand times. You will see it once.",
      "I have started going on weekday mornings, when the rooms are almost empty and the light has not yet decided what to do. The paintings seem grateful for the quiet. So am I.",
    ],
  },
  {
    slug: "bone-marrow",
    kicker: "On labour",
    title: "Bone Marrow",
    excerpt: "The old man works very hard.",
    image: images.train,
    body: [
      "The old man works very hard. He has worked hard for so long that the working has become a kind of weather — you cannot imagine him without it, the way you cannot imagine a coastline without wind.",
      "I asked him once when he would rest. He looked at me the way you look at someone who has asked a question in the wrong language.",
      "There is a tenderness in relentless people that we rarely name. They are not avoiding rest. They are keeping something afloat that would sink the moment they stopped.",
    ],
  },
  {
    slug: "mother-tongue",
    kicker: "On language",
    title: "Mother Tongue",
    excerpt: "I have long forgotten how to speak your language.",
    image: images.book,
    body: [
      "I have long forgotten how to speak your language. I can still hear it — in markets, in phone calls home, in the particular way my mother says my name — but the words no longer come when I call them.",
      "It is a strange grief, to lose a language you were born inside. Like inheriting a house and slowly forgetting which rooms are yours.",
      "Still, some things survive translation. A lullaby I could not explain but could still hum. The word for 'come home,' which I understand instantly and can no longer pronounce.",
    ],
  },
];

// ── Photography (Photo Essays) ────────────────────────
export type Photo = { src: string; label: string };

export const photos: Photo[] = [
  { src: images.daisies, label: "Morning" },
  { src: images.clouds, label: "Kyoto" },
  { src: images.building, label: "Singapore" },
  { src: images.ocean, label: "Rain" },
  { src: images.balloons, label: "Festival" },
  { src: images.museum, label: "Museum" },
  { src: images.sunset, label: "Dusk" },
];

// ── Notebook (From the Notebook) ──────────────────────
export type Note = {
  no: number;
  title: string;
  excerpt: string;
  image: string;
};

export const notes: Note[] = [
  {
    no: 18,
    title: "Water Glasses",
    excerpt:
      "There is something about fathers who always overfill your water glass, as if love were a thing measured in millilitres.",
    image: images.water,
  },
  {
    no: 19,
    title: "Stained Glass",
    excerpt:
      "Stained glass doesn't change the weather. Only the colour you experience it in.",
    image: images.stained,
  },
  {
    no: 20,
    title: "One Umbrella",
    excerpt:
      "Today I watched two strangers share an umbrella and part without a word, both a little drier, both a little kinder.",
    image: images.rain,
  },
  {
    no: 21,
    title: "Kept Pages",
    excerpt:
      "Pages I didn't write but will keep anyway — the blank ones remember something too.",
    image: images.book,
  },
  {
    no: 22,
    title: "Soft Landings",
    excerpt: "Some days are just soft landings. That is enough of an event.",
    image: images.sunset,
  },
];

export const featuredNote = notes[0];
