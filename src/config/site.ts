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
    "Barnabas Ministry of Michigan comes alongside pastors and churches as a friend — preaching and pulpit supply, music ministry, the Anchored In Hope grief-and-loss ministry, and Foster Care & Adoption Sundays. Encouraging, equipping, and edifying the local church.",
  shortDescription:
    "A friend to pastors — preaching, music ministry, the Anchored In Hope grief ministry, and Foster Care & Adoption Sundays that encourage, equip, and edify the local church.",
  url: "https://www.barnabasministrymi.com",

  // Contact — from the ministry.
  contactName: "A.C. Caincross",
  phone: "(989) 569-1298",
  phoneTel: "+19895691298",
  email: "pastorac23@gmail.com",
  // No public mailing address supplied — the ministry serves churches on the road.
  serviceArea: "Northern Michigan & the Great Lakes region — traveling as the Lord opens doors",

  // Theme (used by browser chrome + PWA manifest)
  backgroundColor: "#faf5ea",
  themeColorDark: "#101f39",
} as const;

// ---- Navigation -----------------------------------------------------------

export const NAV = [
  { label: "How We Serve", href: "/#serve" },
  { label: "Anchored In Hope", href: "/anchored-in-hope" },
  { label: "Foster & Adoption", href: "/#foster" },
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
    "The name Barnabas means “son of encouragement.” That is our whole calling — to come alongside the man of God and his people through faithful preaching, music, and ministries of hope for the hurting and the fatherless.",
  verseRef: "Acts 4:36 · KJV",
  verse:
    "“And Joses, who by the apostles was surnamed Barnabas, (which is, being interpreted, The son of consolation,) …”",
  primaryCta: { label: "Invite Us to Your Church", href: "/invite" },
  secondaryCta: { label: "How We Serve", href: "/#serve" },
} as const;

// A quiet ribbon of what the ministry is and does.
export const MARQUEE = [
  "A Friend to Pastors",
  "Anchored In Hope",
  "Preaching & Pulpit Supply",
  "Music Ministry",
  "Foster Care & Adoption",
  "Revival Meetings",
  "Encouraging · Equipping · Edifying",
] as const;

// ---- The heart of the ministry (Barnabas) ---------------------------------

export const HEART = {
  kicker: "The Heart of the Ministry",
  heading: "Every pastor needs a Barnabas.",
  body: [
    "When the early church needed someone to stand with a discouraged man, to vouch for him, and to spur him on, they sent Barnabas. Scripture calls him “the son of encouragement” — a good man, full of the Holy Ghost and of faith.",
    "That is the ministry God has laid on our hearts here in Michigan. Pastors carry a weight few people ever see. Our joy is to come alongside them — to preach and fill a pulpit, to carry the music, to bring comfort to the grieving, and to help a church strengthen its homes — and simply to be a friend who believes in the work God has given them.",
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
      body: "Lifting up Christ and building up the body — preaching and music that feed the flock and leave a congregation nearer to the Lord.",
    },
  ],
} as const;

// ---- How we serve — the ministries ----------------------------------------

export const SERVE = {
  kicker: "How We Serve",
  heading: "Ways we come alongside your church.",
  intro:
    "Whether you need a pulpit filled, the music carried, comfort brought to the grieving, or a Sunday that strengthens your homes — we would count it a privilege to serve.",
  items: [
    {
      title: "Preaching & Pulpit Supply",
      tag: "Revival meetings · Pulpit supply · Conferences",
      body: "Faithful, Christ-honoring preaching for your pulpit — a Sunday you're away, a season between pastors, a week of revival, or a conference for your people.",
    },
    {
      title: "Music Ministry",
      tag: "Piano · Special music · Song leading",
      body: "My wife provides piano and music, we sing special music together, and I lead the singing. We're glad to carry the music for a full service — or to come alongside a scheduled evangelist and simply handle the music side.",
    },
    {
      title: "Anchored In Hope",
      tag: "Comfort & healing in grief and loss",
      body: "Out of our own loss, a Sunday or weekday conference that helps the grieving find genuine, biblical healing — and a hope that holds through every trial.",
      href: "/anchored-in-hope",
    },
    {
      title: "Foster Care & Adoption",
      tag: "Strengthening the home",
      body: "As foster and adoptive parents — and a foster-care worker — we help churches take up this part of the Great Commission with a Sunday geared toward fostering, adoption, special-needs and terminally-ill children.",
      href: "/#foster",
    },
  ],
} as const;

// ---- Anchored In Hope (grief & loss) --------------------------------------

export const ANCHORED = {
  kicker: "Anchored In Hope",
  heading: "Hope that holds, even in grief.",
  intro:
    "Many in your congregation have known grief and loss — and many have never been shown how to walk through it biblically. Resources that teach how to let the Lord turn our trials into triumph are few.",
  story: [
    "My wife and I have suffered the loss of two children — each of whom went home to be with the Lord at just two years old. Through those seasons we have watched God answer prayer, provide for our needs, and hold our family together.",
    "Out of that grief the Lord gave us a burden: to help those who are hurting find genuine healing by His grace, and to see Him transform our trials into triumph.",
  ],
  verse: {
    text:
      "“Which hope we have as an anchor of the soul, both sure and stedfast …”",
    ref: "Hebrews 6:19 · KJV",
  },
  formatsHeading: "An Anchored In Hope Day — two ways to receive it",
  formats: [
    {
      title: "An Anchored In Hope Sunday",
      body: "We come for your Sunday service and minister to your congregation — bringing comfort, hope, and support to the grieving in your church and community.",
    },
    {
      title: "An Anchored In Hope Conference",
      body: "A gathering on a weekday, giving more room to teach and to sit with those who are hurting, for your church or several churches together.",
    },
    {
      title: "Our Story, Shared Together",
      body: "My wife and I share our story together in a warm, informal setting — one family speaking honestly to another about grief, faith, and the God who carries us.",
    },
    {
      title: "A Message of Hope, Preached",
      body: "I share our story and preach a biblical message of hope — grounding the comfort of the gospel in the Word of God for the whole congregation.",
    },
  ],
  cta: "Schedule an Anchored In Hope Day for 2026",
  closing:
    "Whichever avenue you choose is sure to bring comfort, hope, and support to the grieving in your church and community.",
} as const;

// ---- Foster Care & Adoption -----------------------------------------------

export const FOSTER = {
  kicker: "Foster Care & Adoption",
  heading: "Strengthening the home for the fatherless.",
  body: [
    "Pastor, have you considered what your church can do to fulfill this part of the Great Commission? There are few resources on family, fostering, and adoption from a solid, biblical perspective.",
    "As foster and adoptive parents — and as a foster-care worker — we can speak to both sides of the equation, including adopting children with special needs and caring for the terminally ill. A Sunday geared toward strengthening the home will bless your congregation and answer the questions your folks have about becoming foster parents.",
  ],
  verse: {
    text:
      "“Pure religion and undefiled before God and the Father is this, To visit the fatherless and widows in their affliction …”",
    ref: "James 1:27 · KJV",
  },
  cta: "Plan a Foster Care & Adoption Sunday",
} as const;

// ---- A word from the ministry ---------------------------------------------

export const LETTER = {
  kicker: "A Word From the Caincrosses",
  heading: "We simply want to be a friend to you.",
  body: [
    "Pastor, we know the calling you carry. We have seen the joy of it and the weariness of it. And we have walked through valleys of our own — and found the Lord faithful in every one.",
    "That is why this ministry exists. Not to build a name, but to lend a hand. If we can fill your pulpit, carry the music, bring hope to the grieving, or help you strengthen the homes of your church, we would be honored. And if all you need is someone to pray with and encourage you, that is a ministry too.",
  ],
  pullQuote: "The name Barnabas means encouragement. That is the whole of it.",
  signoff: "— A.C. & Mrs. Caincross, Barnabas Ministry of Michigan",
} as const;

// ---- Invite / booking -----------------------------------------------------

export const INVITE = {
  kicker: "Invite Us",
  heading: "Let's find a date for your church.",
  body: "Preaching and pulpit supply, music ministry, an Anchored In Hope Day, or a Foster Care & Adoption Sunday — across Michigan and the Great Lakes region. Tell us a little about your church and what you have in mind, and we'll be in touch.",
  callLabel: "Call or Text",
  emailLabel: "Email",
  reasons: [
    "Anchored In Hope — Sunday or Conference",
    "Foster Care & Adoption Sunday",
    "Music Ministry (special music / song leading)",
    "Preaching / Pulpit Supply",
    "Revival Meeting",
    "Bible Conference or Camp",
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
    "A.C. Caincross and his wife serve churches across Michigan and the surrounding region in whatever way is needed — preaching and pulpit supply, revival meetings, and music, with A.C. leading the singing and his wife at the piano. They are glad to carry a whole service, or simply to handle the music alongside a visiting evangelist.",
    "Their ministry also flows out of their own story. Having suffered the loss of two children, the Caincrosses carry a burden to comfort the grieving through their Anchored In Hope ministry. And as foster and adoptive parents — and a foster-care worker — they help churches strengthen their homes and answer God's call to care for the fatherless.",
    "The ministry rests on three words — encouraging, equipping, and edifying — and on the conviction that a healthy, well-loved pastor, and a church that cares for the hurting, are among God's greatest gifts to a community.",
  ],
  couplePhoto: "/caincross-couple.jpg",
  couplePhotoAlt: "A.C. Caincross and his wife, Barnabas Ministry of Michigan",
} as const;
