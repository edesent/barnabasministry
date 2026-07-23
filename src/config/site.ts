// ============================================================================
// Barnabas Ministry of Michigan — site content
//
// EVERYTHING the website says lives in this one file. To change a word, a name,
// a service, or a Scripture, find it below, edit the text between the "quotes",
// and save. The live site updates within about a minute.
//
// (No coding needed. If you'd rather just say what you want changed in plain
//  English, ask Claude or ChatGPT connected to this site and it will edit for you.)
// ============================================================================

export const SITE = {
  name: "Barnabas Ministry of Michigan",
  shortName: "Barnabas Ministry",
  tagline: "A Friend to Pastors",
  slogan: "Encouraging · Equipping · Edifying",
  description:
    "Barnabas Ministry of Michigan comes alongside pastors and churches as a friend — pulpit supply, revival meetings, Bible conferences, and camps. Encouraging, equipping, and edifying the local church, one congregation at a time.",
  shortDescription:
    "A friend to pastors — pulpit supply, revival meetings, conferences, and camps that encourage, equip, and edify the local church.",
  url: "https://barnabasministry.elijahdesent.com",

  // Contact — from the ministry.
  contactName: "A.C. Caincross",
  phone: "(989) 569-1298",
  phoneTel: "+19895691298",
  email: "pastorac23@gmail.com",
  // No public mailing address supplied — the ministry serves churches on the road.
  serviceArea: "Michigan & the Great Lakes region — traveling as the Lord opens doors",

  // Theme (used by browser chrome + PWA manifest)
  backgroundColor: "#faf5ea",
  themeColorDark: "#101f39",
} as const;

// ---- Navigation -----------------------------------------------------------

export const NAV = [
  { label: "The Ministry", href: "/#heart" },
  { label: "How We Serve", href: "/#serve" },
  { label: "Our Aim", href: "/#pillars" },
  { label: "About", href: "/about" },
  { label: "Invite Us", href: "/invite" },
] as const;

// ---- Hero -----------------------------------------------------------------

export const HERO = {
  kicker: "Barnabas Ministry of Michigan",
  // The headline reads like a warm promise; the second line carries the accent.
  headline: "A friend to pastors,",
  headlineAccent: "and to the churches they serve.",
  subhead:
    "The name Barnabas means “son of encouragement.” That is our whole calling — to come alongside the man of God and his people with pulpit supply, revival meetings, conferences, and camps that lift up the local church.",
  verseRef: "Acts 4:36 · KJV",
  verse:
    "“And Joses, who by the apostles was surnamed Barnabas, (which is, being interpreted, The son of consolation,) …”",
  primaryCta: { label: "Invite Us to Your Church", href: "/invite" },
  secondaryCta: { label: "How We Serve", href: "/#serve" },
} as const;

// A quiet ribbon of what the ministry is and does.
export const MARQUEE = [
  "A Friend to Pastors",
  "Pulpit Supply",
  "Revival Meetings",
  "Bible Conferences",
  "Youth & Family Camps",
  "Encouraging · Equipping · Edifying",
  "The Son of Encouragement",
] as const;

// ---- The heart of the ministry (Barnabas) ---------------------------------

export const HEART = {
  kicker: "The Heart of the Ministry",
  heading: "Every pastor needs a Barnabas.",
  body: [
    "When the early church needed someone to stand with a discouraged man, to vouch for him, and to spur him on, they sent Barnabas. Scripture calls him “the son of encouragement” — a good man, full of the Holy Ghost and of faith.",
    "That is the ministry God has laid on our hearts here in Michigan. Pastors carry a weight few people ever see. Our joy is to come alongside them — to fill a pulpit when they need rest, to preach revival when a church is dry, to teach and encourage at a conference or camp, and simply to be a friend who believes in the work God has given them.",
  ],
  verse: {
    text:
      "“Being enriched in every thing to all bountifulness, which causeth through us thanksgiving to God.”",
    ref: "II Corinthians 9:11 · KJV",
  },
} as const;

// ---- The three E's — Encouraging · Equipping · Edifying --------------------

export const PILLARS = {
  kicker: "Our Threefold Aim",
  heading: "Encouraging · Equipping · Edifying",
  intro:
    "Three words shape everything we do. They are the way a friend serves the local church — not to take its place, but to strengthen it.",
  items: [
    {
      n: "I",
      name: "Encouraging",
      body: "Standing with the pastor and the people — a word in season, a shoulder to the plow, and the reminder that the labor is not in vain in the Lord.",
    },
    {
      n: "II",
      name: "Equipping",
      body: "Teaching, training, and pouring into God's people so the church is built up for the work of the ministry, long after the meeting is over.",
    },
    {
      n: "III",
      name: "Edifying",
      body: "Lifting up Christ and building up the body — preaching that feeds the flock and leaves a congregation nearer to the Lord.",
    },
  ],
} as const;

// ---- How we serve — the four ministries -----------------------------------

export const SERVE = {
  kicker: "How We Serve",
  heading: "Four ways we come alongside your church.",
  intro:
    "Whether you need a pulpit filled this Sunday, a week of revival, a conference speaker, or a friend for your camp — we would count it a privilege to serve.",
  items: [
    {
      title: "Pulpit Supply",
      tag: "When you need rest or a Sunday away",
      body: "Vacation, illness, a season between pastors, or simply a needed rest — we will fill your pulpit with faithful, Christ-honoring preaching so your people are fed and your church never misses a beat.",
    },
    {
      title: "Revival Meetings",
      tag: "A fresh stirring for your congregation",
      body: "A weekend or a full week of preaching aimed at the heart — calling the saved to get right, the lost to get saved, and a whole church to be renewed in its first love.",
    },
    {
      title: "Bible Conferences",
      tag: "Teaching that equips your people",
      body: "Focused sessions for your church, association, or fellowship — practical, biblical teaching that equips God's people and encourages those who serve them.",
    },
    {
      title: "Youth & Family Camps",
      tag: "Alongside you at the campground",
      body: "Camp preaching and encouragement for young people and families — meeting them where decisions are made, and standing with the leaders who pour their summers into them.",
    },
  ],
} as const;

// ---- A word from the ministry ---------------------------------------------

export const LETTER = {
  kicker: "A Word From the Caincrosses",
  heading: "We simply want to be a friend to you.",
  body: [
    "Pastor, we know the calling you carry. We have seen the joy of it and the weariness of it. And we have watched how much a single friend — someone who shows up, believes the best, and preaches Christ — can mean to a man of God and his church.",
    "That is why this ministry exists. Not to build a name, but to lend a hand. If we can fill your pulpit, preach a revival, teach at your conference, or stand with you at camp, we would be honored. And if all you need is someone to pray with and encourage you, that is a ministry too.",
  ],
  pullQuote: "The name Barnabas means encouragement. That is the whole of it.",
  signoff: "— A.C. & Mrs. Caincross, Barnabas Ministry of Michigan",
} as const;

// ---- Invite / booking -----------------------------------------------------

export const INVITE = {
  kicker: "Invite Us",
  heading: "Let's find a date for your church.",
  body: "Pulpit supply, revival meetings, conferences, and camps — across Michigan and the Great Lakes region. Tell us a little about your church and what you have in mind, and we'll be in touch.",
  callLabel: "Call or Text",
  emailLabel: "Email",
  reasons: [
    "Pulpit Supply (a Sunday or a season)",
    "Revival Meeting",
    "Bible Conference",
    "Youth or Family Camp",
    "Just an encouragement / prayer",
    "Something else",
  ],
} as const;

// ---- About ----------------------------------------------------------------

export const ABOUT = {
  kicker: "The Ministry & The Family",
  heading: "Barnabas Ministry of Michigan",
  role: "A.C. & Mrs. Caincross · A Friend to Pastors",
  lead: "A husband-and-wife ministry given to one simple work: encouraging pastors and building up the local church.",
  paragraphs: [
    "Barnabas Ministry of Michigan was born out of a love for pastors and a burden for the local church. Named for the “son of encouragement” in the book of Acts, the ministry exists to come alongside the men and women who give their lives to shepherd God's people.",
    "A.C. Caincross and his wife travel across Michigan and the surrounding region as a friend to the church — supplying pulpits, preaching revival meetings, teaching at conferences, and serving at camps. Their aim is never to draw a crowd to themselves, but to leave a pastor encouraged and a congregation nearer to Christ.",
    "The ministry rests on three words — encouraging, equipping, and edifying — and on the conviction that a healthy, well-loved pastor is one of God's greatest gifts to a community.",
    "Grounded in the Word of God and the old-fashioned gospel, the Caincrosses count it a privilege to be, in whatever way they can, a friend to pastors.",
  ],
  couplePhoto: "/caincross-couple.jpg",
  couplePhotoAlt: "A.C. Caincross and his wife, Barnabas Ministry of Michigan",
} as const;
