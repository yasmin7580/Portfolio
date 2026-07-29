const projects = [
  {
    id: 1,
    title: "VentureConnect",
    image: "/venture-connect.png",

    live: "https://venture-connect-mu.vercel.app/",

    github: "https://github.com/yasmin7580/venture-connect",

    stack: [
      "Next.js",
      "JavaScript",
      "Tailwind",
      "HeroUI",
      "BetterAuth",
      "MongoDB",
      "Express"
    ],

    description:
      "VentureConnect is a platform that connects startup founders, investors, and collaborators. It simplifies networking, team building, and startup funding opportunities.",

    challenges: [
      "Implemented Better Auth authentication with Email/Password and Google Login.",
      "Integrated Better Auth API for updating user profile information.",
      "Protected dashboard and profile pages with secure authentication."
    ],

    improvements: [
      "AI-powered collaborator recommendations.",
      "Real-time messaging system.",
      "Email notifications.",
      "Advanced startup search.",
      "Analytics dashboard."
    ]
  },

  {
    id: 2,

    title: "FocusHub",

    image: "/focushub.png",

    live: "https://focus-hub-theta-ten.vercel.app/",

    github: "https://github.com/yasmin7580/Focushub",

    stack: [
      "Next.js",
      "JavaScript",
      "Tailwind",
      "HeroUI",
      "MongoDB",
      "Express",
      "BetterAuth"
    ],

    description:
      "FocusHub is a modern study room booking platform with secure authentication, real-time availability, and a smooth booking experience.",

    challenges: [
      "Protected frontend routes and backend APIs.",
      "Managed secure deployment and environment variables on Vercel."
    ],

    improvements: [
      "Google Calendar integration.",
      "QR-based check-in.",
      "Review & rating system.",
      "Booking reminders.",
      "Admin analytics."
    ]
  },

  {
    id: 3,

    title: "MyKitchen",

    image: "/my-kitchen.png",

    live: "https://my-kitchen-seven-blue.vercel.app/",

    github: "https://github.com/yasmin7580/my-kitchen",

    stack: [
      "React",
      "TypeScript",
      "Tailwind",
      "Node.js",
      "Express",
      "Gemini AI"
    ],

    description:
      "MyKitchen is an AI-powered recipe sharing platform where users can discover, create, and manage recipes with intelligent cooking assistance.",

    challenges: [
      "Implemented Gemini AI chatbot.",
      "Maintained conversation history.",
      "Managed secure deployment."
    ],

    improvements: [
      "Meal planner.",
      "Nutrition calculator.",
      "Recipe video upload.",
      "Bookmark recipes.",
      "Community reviews."
    ]
  }
];

export default projects;