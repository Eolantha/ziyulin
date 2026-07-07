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
  location: " ",
  date: "7 July 2026",
  edition: "Issue No. 001",
};

export const editorial = {
  heading: "A Letter from the Editor",
  paragraphs: [
    "We all love something. I, for one, love many things - and this manifests in my writing as well as through my lens. This website thus serves as a repository for the beauty I hope to capture through creation.",
    "I implore you to read and look through this website slowly, deliberately, and carefully. After all, art does not deserve to be chewed and then spat out in a hurry, but digested into the bones of ourselves until they become indistinguishable from who we are.",
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
    sign: "aries",
    glyph: "♈",
    title: "the stream (excerpt)",
    preview: ["you give more than anyone asks of you,", "make sure your hands are still your own."],
    body: [
      "for you, i would have picked",
      "your dreams from your memories,",
      "licked the salt from your nightmares,",
      "just for you to look at me.",
      "i would have streamed conscious,",
      "brushed your hands with paint",
      "gleaming marigold,",
      "if only i knew what it was",
      "to be conscious to you.",
    ],
  },
  {
    sign: "taurus",
    glyph: "♉",
    title: "sunday morning",
    preview: ["there is always wisdom", "in repeating small kindnesses."],
    body: [
      "my father makes it a point",
      "to wake early even on the weekends.",
      "he brews coffee, then sits alone",
      "waiting for the house to wake.",
      "it is easier, he says, to get out of bed",
      "knowing that peace and quiet await him.",
    ],
  },
  {
    sign: "gemini",
    glyph: "♊",
    title: "butterfly (excerpt)",
    preview: ["not every contradiction needs resolving."],
    body: [
      "on the fifteenth, light flitters through the chequered windows.",
      "arbitrarily reflected, and in the unknown waters monsoon deep",
      "i see the reflection of a pale circle hanging off velvety black.",
      "i know tomorrow, and for the next month, the cycle will repeat:",
      "the moon's arched spine fanning open and close. within,",
      "there must be a sanctuary's worth of butterflies,",
      "because my grandmother tells me that her mother is the pair",
      "of fire red wings resting on our brass windowsill.",
    ],
  },
  {
    sign: "cancer",
    glyph: "♋",
    title: "oysters",
    preview: ["protect what is soft enough to survive."],
    body: [
      "you called the other day,",
      "saying you wanted your pearls back.",
      "you know i will always let you",
      "crack me open with your hungry teeth. but",
      "i beg of you, leave that fleshy mass",
      "of knowledge in my shell and throw me",
      "back into the sea, so the seagulls",
      "might not ravage me as you have;",
      "so the water might still lie between",
      "me and the unyielding sun.",
    ],
  },
  {
    sign: "leo",
    glyph: "♌",
    title: "auscultations",
    preview: ["preach the beautiful, the lovely, the wanted."],
    body: [
      "what am i but a vessel?",
      "the heart flutters",
      "and sends out a pulse like a flare signal.",
      "a ship races",
      "across bones and streaks them bloody red.",
      "a firework explodes",
      "into fragments of starlight",
      "still incomparable to your smile.",
    ],
  },
  {
    sign: "virgo",
    glyph: "♍",
    title: "ingredients (pg. 9)",
    preview: ["take apart only what you know how to rebuild."],
    body: [
      "our body is a kitchen, we are",
      "made of food and things:",
      "grapes for eyeballs, straws for vessels,",
      "my heart a sponge, that soaks",
      "every last inch of my loving blood.",
      "cut my brain, red and gamey,",
      "with your knife made of bone.",
      "i will bleed with want",
      "for the water in you.",
    ],
  },
  {
    sign: "libra",
    glyph: "♎",
    title: "water tension",
    preview: ["becoming only yourselves in each other's gravity."],
    body: [
      "we meet like how the sun",
      "meets the sea and bakes it",
      "to its bones. will we one day",
      "surface nakedly",
      "gasping for air?",
    ],
  },
  {
    sign: "scorpio",
    glyph: "♏",
    title: "demeter, to her hearth",
    preview: ["there are wounds that glitter before they heal."],
    body: [
      "virgin goddess, would you spit on my grave",
      "if i left your fireplace empty",
      "for a man who could control the skies",
      "and the sea with the flick of his ",
      "hand he had picked my fruit like he",
      "was picking a fight with the ease of a man",
      "who knew the world would not stop him",
      "if it ever had to choose.",
    ],
  },
  {
    sign: "sagittarius",
    glyph: "♐",
    title: "classless",
    preview: ["when the question may mean more than the answer."],
    body: [
      "speak easy to me father,",
      "creator, whoever. i wonder,",
      "would you like if i took it upon myself",
      "to keep these secrets i once heard,",
      "whispered to me in a dream:",
      "that your kindness is a blight,",
      "that your silence is a lesson,",
      "that when we worship we sin,",
      "for what could be more shameful",
      "than wanting more, instead of less.",
    ],
  },
  {
    sign: "capricorn",
    glyph: "♑",
    title: "century eggs",
    preview: ["you do not need to carry every name that came before yours."],
    body: [
      "wake up, little boy of the ark",
      "of the motion - the waves that push",
      "us forward moving, always, with time.",
      "the lights will force you awake,",
      "to carry the legacy of your family,",
      "strapped to your back. youth,",
      "reincarnated innocence, yet",
      "the sclera of your eyes stain the same",
      "hue as the shell of century eggs.",
    ],
  },
  {
    sign: "aquarius",
    glyph: "♒",
    title: "a defeated god",
    preview: ["stand far away enough and even sorrow develops a horizon."],
    body: [
      "there's a stream just across the way",
      "where my soul sits, legs dangling,",
      "a child lonely and lulled from fruit",
      "milking wine on the vine.",
      "below, the lethargic waters",
      "streak with red as it drinks",
      "from me, all that is heat and reaching",
      "and trembling and sweet,",
      "all there is.",
    ],
  },
  {
    sign: "pisces",
    glyph: "♓",
    title: "toothpaste",
    preview: ["you do not have to wash everything away."],
    body: [
      "i still brush my teeth the way you taught me to,",
      "rough and careless. i hurt, and hurt - ",
      "the little critters in teh school garden",
      "leave fine silver dust on my fingers",
      "wings marvellously blue when they flutter",
      "open and dead. so i clean my molars,", 
      "drown them in paste streaked with sky",
      "and remove the taste of butterfly debris,",
      "brittle in my mouth.",

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
      "I am alone today, as I am alone everyday. My footsteps echo against walls untouched except by portraits and statues. I have found that there is something inexplicably lonely in art museums. Perhaps it has something to do with the frames; it always has something to do with the frames. Some disconnect between my world and yours. Your hands create that which mine cannot, your mind from which a whole other world flows, through your mortal and bloody veins to your fingertips, to your irises.", 
      "I am glad to be alone today. Inferiority has always sickened me.",
    ],
  },
  {
    slug: "summer-heat",
    kicker: "On ennui",
    title: "Summer Heat",
    excerpt: "Summer starts as it always does.",
    image: images.train,
    body: [
      "Summer starts as it always does. A yawning heat infuses the air, curdling whatever remains spring left behind her. I wear a skin of sweat and sheen, exhausted from nothing, exhausted from everything, and settle into the alcove by my window. Below me, students sprawl across the green expanse of the campus, intersected by grey pavement peeking through the shimmery, simmering heat.",
    ],
  },
  {
    slug: "sanctuary-blue",
    kicker: "On moments lost",
    title: "Sanctuary Blue",
    excerpt: "Her lips have gone dry in the cold.",
    image: images.book,
    body: [
      "She starts, then wrenches herself from his arms, expletives falling from her mouth almost loosely, carelessly, as she throws the sinless flower that was in her hand onto the floor, crushing it under the heel of her pristine white boots. When she lifts her leg from grinding the petals into the stone floor in frustration, it's been stained a bright and toxic orange. He is stunned, arms falling limp to his side helplessly, head still giddy. ",
      "'I never knew you cursed.' The words are hoarse, and they come out only as a whisper. Even then, his foolish statement echoes within the silent blue walls of the sanctuary, and he fights the nervous laugh rising in his throat. His lips have gone dry in the cold.",
    ],
  },
];

// ── Photography (Photo Essays) ────────────────────────
export type Photo = { src: string; label: string };

export const photos: Photo[] = [
  { src: images.daisies, label: "Daisies" },
  { src: images.clouds, label: "Cathedral" },
  { src: images.building, label: "Man & Dog" },
  { src: images.ocean, label: "Bucharest" },
  { src: images.balloons, label: "Forest" },
  { src: images.museum, label: "Tokyo Tower" },
  { src: images.sunset, label: "Artifact" },
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
    title: "red forest",
    excerpt:
      "i love nothing more than the vibrancy of nature - auburn seems like an apt adjective here, for the leaves do look as if they are burning.",
    image: images.water,
  },
  {
    no: 19,
    title: "flowers, streamed",
    excerpt:
      "how sad i was when i saw these flowers; then how happy, when i saw the photo. we are ever so quick to change our minds.",
    image: images.stained,
  },
  {
    no: 20,
    title: "love in shadows",
    excerpt:
      "i find it so easy to find love everywhere. you need only open your eyes.",
    image: images.rain,
  },
  {
    no: 21,
    title: "flowers, pink",
    excerpt:
      "if you haven't already been able to tell, i am obsessed with anything flora.",
    image: images.book,
  },
  {
    no: 22,
    title: "green artifact",
    excerpt: "isn't it more beautiful in its mystery?",
    image: images.sunset,
  },
];

export const featuredNote = notes[0];
