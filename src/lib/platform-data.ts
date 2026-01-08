import {
  Globe,
  Database,
  Shield,
  Link2,
  Target,
  BarChart3,
  Zap,
} from "lucide-react";

export interface PlatformAuditModule<TIcon = any> {
  id: number;
  name: string;
  description: string;
  simpleDescription: string; // ✅ Added: Plain English version
  technicalDetails?: string; // ✅ Added: Optional deep dive
  color: string;
  icon: TIcon;
  example?: string; // ✅ Added: Real-world example
}

export const PLATFORM_AUDIT_MODULES: PlatformAuditModule[] = [
  {
    id: 1,
    name: "Brand Presence Analysis",
    icon: Globe,
    simpleDescription:
      "We ask AI models hundreds of questions to see how often they mention your brand and what they say about you.",
    description:
      "Check if ChatGPT, Claude, and Perplexity know about your brand when people ask relevant questions.",
    technicalDetails:
      "Queries GPT-4, Claude 3.5, and Perplexity APIs with 500+ branded prompts to measure entity recognition accuracy and citation frequency across model responses",
    example:
      "Example: We ask 'What are the best CRM tools for startups?' and track if your brand appears in the answer.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    name: "Context Coverage Audit",
    icon: Database,
    simpleDescription:
      "We analyze your content to find gaps in topics you should be covering to get recommended by AI.",
    description:
      "Identify missing topics and context that would help AI models understand when to recommend your brand.",
    technicalDetails:
      "Analyzes semantic embeddings (via OpenAI text-embedding-3-large) across your content corpus to identify topic gaps in vector space representation",
    example:
      "Example: If you're a CRM, we check if you cover topics like 'remote team collaboration' or 'sales automation'.",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Trust Signal Detection",
    icon: Shield,
    simpleDescription:
      "We measure how trustworthy your brand appears to AI models based on credentials, reviews, and authoritative links.",
    description:
      "Evaluate the trust signals AI models look for: author credentials, quality backlinks, and content freshness.",
    technicalDetails:
      "Parses structured data markup (Schema.org), backlink authority (Moz/Ahrefs API), author credentials, and publication dates to quantify E-E-A-T indicators",
    example:
      "Example: Do you have named authors with LinkedIn profiles? Are you cited by industry publications?",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 4,
    name: "Citation & Attribution",
    icon: Link2,
    simpleDescription:
      "We track where AI models are finding and citing your content across the web.",
    description:
      "Monitor how often AI models cite your brand and which sources they're pulling information from.",
    technicalDetails:
      "Tracks citation patterns via LLM API responses and web crawlers (Scrapy/Playwright) to map where AI models source and attribute your brand content",
    example:
      "Example: We discover AI is citing your blog post on 'API security' but missing your case studies.",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    name: "Keyword Entity Mapping",
    icon: Target,
    simpleDescription:
      "We find all the questions and topics where your brand should appear but currently doesn't.",
    description:
      "Discover opportunities where AI should recommend your brand but currently recommends competitors instead.",
    technicalDetails:
      "Uses NER (spaCy/transformers) and knowledge graph queries (Wikidata API) to discover non-branded semantic relationships where your entity should rank",
    example:
      "Example: People ask about 'affordable project management tools' - your brand should be in that conversation.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    name: "Competitive Intelligence",
    icon: BarChart3,
    simpleDescription:
      "We compare how often AI recommends you versus your competitors across different questions.",
    description:
      "Benchmark your AI visibility against competitors to see who's winning the AI search game.",
    technicalDetails:
      "Benchmarks your visibility against 10+ competitors via parallel LLM queries, calculating relative mention share and sentiment analysis (VADER/TextBlob)",
    example:
      "Example: Competitors appear in 60% of AI responses while you appear in only 15% - here's why.",
    color: "from-teal-500 to-cyan-500",
  },
  {
    id: 7,
    name: "Content Structure Optimization",
    icon: Zap,
    simpleDescription:
      "We optimize how your content is structured so AI can easily find and use the right information.",
    description:
      "Restructure your content with clear sections, summaries, and context so AI models can retrieve it efficiently.",
    technicalDetails:
      "Evaluates content structure for RAG systems: chunk size optimization (512-1024 tokens), metadata richness, and embedding similarity scores (cosine >0.85)",
    example:
      "Example: Add executive summaries, clear headers, and key takeaways at the top of each article.",
    color: "from-yellow-500 to-orange-500",
  },
];

export interface DataCategory {
  title: string;
  description: string; // ✅ Added: Explain what this category means
  items: {
    name: string;
    simpleDescription: string; // ✅ Plain English
    technicalDetails?: string; // ✅ Optional technical version
  }[];
}

export const DATA_CATEGORIES: DataCategory[] = [
  {
    title: "Your Brand Information",
    description:
      "We analyze everything publicly available about your brand to understand how AI models see you.",
    items: [
      {
        name: "Website Content",
        simpleDescription:
          "All pages, blog posts, and resources on your website",
        technicalDetails:
          "sitemap.xml parsing, robots.txt compliance, content crawling",
      },
      {
        name: "Published Content",
        simpleDescription:
          "Articles, guides, and resources you've published anywhere online",
        technicalDetails: "RSS feeds, API endpoints, content aggregation",
      },
      {
        name: "Social Media",
        simpleDescription:
          "Your presence and engagement on LinkedIn, Twitter, and other platforms",
        technicalDetails:
          "Twitter/LinkedIn API, engagement metrics, follower analysis",
      },
      {
        name: "Company Information",
        simpleDescription:
          "Public information about your company, team, and achievements",
        technicalDetails:
          "Crunchbase/LinkedIn Company API, funding data, team size",
      },
    ],
  },
  {
    title: "External Reputation Signals",
    description:
      "We check what others are saying about you across the web - these signals tell AI models if you're trustworthy.",
    items: [
      {
        name: "Media Mentions",
        simpleDescription:
          "Where journalists and publications have mentioned or featured your brand",
        technicalDetails:
          "Google News API, Common Crawl index, press release tracking",
      },
      {
        name: "Industry Publications",
        simpleDescription:
          "Citations in research papers, industry reports, and professional journals",
        technicalDetails:
          "PubMed, arXiv, IEEE Xplore API integrations, academic citation tracking",
      },
      {
        name: "Customer Reviews",
        simpleDescription:
          "What customers say about you on review platforms like G2 and Capterra",
        technicalDetails:
          "G2/Capterra API, sentiment scoring, review aggregation",
      },
      {
        name: "Knowledge Bases",
        simpleDescription:
          "Your presence in Wikipedia, industry databases, and knowledge platforms",
        technicalDetails:
          "Wikipedia API, Wikidata SPARQL queries, knowledge graph connections",
      },
    ],
  },
];

// ✅ Added: Platform Features for Homepage
export const PLATFORM_FEATURES = {
  title: "Everything You Need to Win AI Search",
  subtitle:
    "A complete platform to monitor, optimize, and grow your AI presence",
  features: [
    {
      title: "Real-Time Monitoring",
      description:
        "Track your AI mentions across ChatGPT, Claude, and Perplexity 24/7",
      benefit: "Know immediately when AI recommendations change",
    },
    {
      title: "Automated Audits",
      description: "Weekly checks on your AI visibility and trust signals",
      benefit: "Catch issues before they hurt your visibility",
    },
    {
      title: "Competitor Analysis",
      description: "See how your AI presence compares to competitors",
      benefit: "Find gaps and opportunities to pull ahead",
    },
    {
      title: "Content Recommendations",
      description: "Get specific suggestions on what to publish and optimize",
      benefit: "Clear action items, not vague advice",
    },
  ],
};

// ✅ Added: Results/Outcomes
export const EXPECTED_OUTCOMES = [
  {
    timeline: "Week 1-2",
    outcome: "Complete AI presence audit",
    metric: "Baseline visibility score established",
  },
  {
    timeline: "Week 3-4",
    outcome: "First optimizations implemented",
    metric: "Initial mention increase (10-20%)",
  },
  {
    timeline: "Week 5-8",
    outcome: "Consistent AI recommendations",
    metric: "3-5x increase in AI mentions",
  },
  {
    timeline: "Month 3+",
    outcome: "Dominant AI presence in your niche",
    metric: "Top 3 brand in relevant queries",
  },
];
