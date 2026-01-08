export interface AuditModulePreview {
  name: string;
  status: "complete" | "in-progress";
  score?: number;
}

export interface AIPlatform {
  name: string;
  gradient: string;
  description: string; // Added for clarity
}

export interface SEOComparisonPoint {
  category: string;
  traditional: string;
  aiNative: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
  example: string;
  icon: string; // You can use lucide-react icons
}

// Hero Section Data
export const HERO_DATA = {
  headline: "Get Found by AI.",
  subheadline: "Not Just Google.",
  description:
    "ChatGPT, Claude, and Perplexity are recommending brands right now. Make sure yours is one of them.",
  socialProof: "Join 500+ brands optimizing for AI search",
  primaryCTA: "Start Free Audit",
  secondaryCTA: "See How It Works",
};

// Stats Section
export const IMPACT_STATS = [
  {
    value: "40%+",
    label: "of searches now use AI chatbots",
    description: "Traditional search is being replaced",
  },
  {
    value: "3x",
    label: "higher conversion from AI referrals",
    description: "AI recommendations drive quality traffic",
  },
  {
    value: "2-4 weeks",
    label: "to appear in AI responses",
    description: "Much faster than traditional SEO",
  },
];

// AI Platforms
export const AI_PLATFORMS: AIPlatform[] = [
  {
    name: "ChatGPT",
    gradient: "bg-gradient-to-br from-green-400 to-green-600",
    description: "175M+ weekly users asking questions",
  },
  {
    name: "Gemini",
    gradient: "bg-gradient-to-br from-blue-400 to-purple-600",
    description: "Integrated with Google Search",
  },
  {
    name: "Perplexity",
    gradient: "bg-gradient-to-br from-teal-400 to-blue-600",
    description: "10M+ users for research & discovery",
  },
  {
    name: "Claude",
    gradient: "bg-gradient-to-br from-orange-400 to-red-600",
    description: "Used by professionals for deep analysis",
  },
];

// Comparison Table (More detailed)
export const SEO_COMPARISON: SEOComparisonPoint[] = [
  {
    category: "How People Search",
    traditional: "Type keywords: 'best CRM software'",
    aiNative: "Ask naturally: 'What CRM works best for a 10-person startup?'",
  },
  {
    category: "What Gets You Ranked",
    traditional: "Backlinks and keyword density",
    aiNative: "Trust, expertise, and clear explanations",
  },
  {
    category: "Content Strategy",
    traditional: "Write for Google's crawler",
    aiNative: "Write like you're answering a real person",
  },
  {
    category: "Success Looks Like",
    traditional: "Ranking #1 on Google",
    aiNative: "Being mentioned when AI recommends solutions",
  },
  {
    category: "Time to Results",
    traditional: "6-12 months of consistent effort",
    aiNative: "2-4 weeks to start appearing",
  },
  {
    category: "Tracking Progress",
    traditional: "Monitor keyword positions",
    aiNative: "Track AI mentions and citations",
  },
];

// How It Works Section
export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    number: "01",
    title: "Audit Your AI Presence",
    description:
      "We check if ChatGPT, Claude, and Perplexity know about your brand when relevant questions are asked.",
    example:
      "Example: 'Best project management tools for agencies' - Are you in the answer?",
    icon: "Search",
  },
  {
    number: "02",
    title: "Optimize for AI Understanding",
    description:
      "We restructure your content so AI models can easily understand what you do, who you help, and why you're trustworthy.",
    example:
      "Example: Add clear use cases, customer stories, and expertise signals",
    icon: "Brain",
  },
  {
    number: "03",
    title: "Track Your Growth",
    description:
      "Monitor when and how often AI models recommend your brand across different queries and platforms.",
    example: "Example: See your mentions increase from 5% to 45% in 4 weeks",
    icon: "TrendingUp",
  },
];

// Why This Matters Section
export const WHY_IT_MATTERS = {
  title: "Why Traditional SEO Isn't Enough Anymore",
  points: [
    {
      problem: "People don't scroll through search results anymore",
      solution: "They ask AI and trust the first answer they get",
    },
    {
      problem: "Your perfect SEO won't help if AI doesn't know you exist",
      solution: "AI needs different signals to understand and trust your brand",
    },
    {
      problem: "Your competitors are already optimizing for AI search",
      solution: "The brands AI recommends today will dominate tomorrow",
    },
  ],
};

// Social Proof
export const SOCIAL_PROOF = {
  title: "Brands Already Winning with AI Search",
  description: "Companies across industries are being discovered through AI",
  categories: [
    "SaaS Companies",
    "E-commerce Brands",
    "Professional Services",
    "B2B Platforms",
  ],
};

// Audit Preview (keeping your existing data)
export const AUDIT_MODULES_PREVIEW: AuditModulePreview[] = [
  {
    name: "Brand Presence",
    status: "complete",
    score: 94,
  },
  {
    name: "Context Coverage",
    status: "complete",
    score: 88,
  },
  {
    name: "Trust Signals",
    status: "in-progress",
  },
];

// Legacy support (deprecated, use SEO_COMPARISON instead)
export const SEO_COMPARISON_COLUMNS = [
  {
    title: "Traditional SEO",
    items: [
      "Keyword rankings",
      "Backlink profiles",
      "Page speed optimization",
      "Meta tags & schema",
    ],
    color: "zinc" as const,
  },
  {
    title: "AI-Native SEO",
    items: [
      "Context understanding",
      "Brand entity recognition",
      "Trust & authority signals",
      "Retrieval-optimized content",
    ],
    color: "blue" as const,
  },
];

// Benefits Section
export const BENEFITS = [
  {
    title: "Get Found Faster",
    description:
      "Appear in AI responses within weeks, not months of traditional SEO",
    metric: "2-4 weeks",
  },
  {
    title: "Higher Quality Traffic",
    description:
      "People who find you through AI are actively looking for solutions",
    metric: "3x conversion",
  },
  {
    title: "Future-Proof Strategy",
    description: "As more people use AI search, you're already positioned",
    metric: "40%+ growth",
  },
];
