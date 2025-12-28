// "use client";

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { MarketingNavbar } from "@/components/ui/marketing-navbar";
// import {
//   ArrowRight,
//   Database,
//   Brain,
//   Sparkles,
//   FileText,
//   Globe,
//   TrendingUp,
//   Shield,
//   Link2,
//   Search,
//   Target,
//   BarChart3,
//   Zap,
//   CheckCircle2,
//   AlertCircle,
// } from "lucide-react";
// import { PLATFORM_AUDIT_MODULES } from "@/lib/platform-data";
// import { DATA_CATEGORIES } from "@/lib/platform-data";

// export default function PlatformPage() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100">
//       {/* ---------------- NAVBAR ---------------- */}
//       <MarketingNavbar activePage="platform" />

//       {/* ---------------- HERO SECTION ---------------- */}
//       <section className="mt-16 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <Badge
//             variant="secondary"
//             className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
//           >
//             <Sparkles className="w-3 h-3 mr-1" />
//             Platform Overview
//           </Badge>

//           <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
//             AI-Native SEO
//             <br />
//             <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Infrastructure
//             </span>
//           </h1>

//           <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed mb-8">
//             A complete platform for measuring, optimizing, and tracking your
//             brand&apos;s visibility across AI-powered search engines.
//           </p>

//           <Button
//             asChild
//             size="lg"
//             className="rounded-full bg-black hover:bg-zinc-800"
//           >
//             <Link href="/app/audit" className="flex items-center gap-2">
//               Run Your First Audit
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//           </Button>
//         </div>
//       </section>

//       {/* ---------------- AUDIT PIPELINE FLOW ---------------- */}
//       <section className="mt-24 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <Badge variant="secondary" className="mb-4">
//               How It Works
//             </Badge>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               The Audit Pipeline
//             </h2>
//             <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
//               From data collection to actionable insights—here&apos;s how
//               Kasparro analyzes your AI visibility.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
//             <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 -translate-y-1/2 z-0" />

//             {/* Step 1: Input */}
//             <Card className="relative z-10 border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-lg hover:shadow-xl transition-all">
//               <CardContent className="p-6">
//                 <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-4">
//                   <Database className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="mb-3 flex items-center gap-2">
//                   <Badge className="bg-blue-600">Step 1</Badge>
//                   <h3 className="text-xl font-bold">Input</h3>
//                 </div>
//                 <p className="text-sm text-zinc-600 mb-4">
//                   <strong className="text-black">InputAssembler</strong>{" "}
//                   collects brand data from multiple sources.
//                 </p>
//                 <ul className="space-y-2 text-sm text-zinc-700">
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
//                     Website content &amp; structure
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
//                     Public APIs &amp; datasets
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
//                     Social signals &amp; mentions
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
//                     Industry context data
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//             {/* Step 2: Process */}
//             <Card className="relative z-10 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white shadow-lg hover:shadow-xl transition-all">
//               <CardContent className="p-6">
//                 <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mb-4">
//                   <Brain className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="mb-3 flex items-center gap-2">
//                   <Badge className="bg-purple-600">Step 2</Badge>
//                   <h3 className="text-xl font-bold">Process</h3>
//                 </div>
//                 <p className="text-sm text-zinc-600 mb-4">
//                   <strong className="text-black">7 Audit Modules</strong>{" "}
//                   analyze different dimensions of AI visibility.
//                 </p>
//                 <ul className="space-y-2 text-sm text-zinc-700">
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
//                     Brand entity recognition
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
//                     Trust signal evaluation
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
//                     Context coverage analysis
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
//                     Competitive benchmarking
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//             {/* Step 3: Output */}
//             <Card className="relative z-10 border-2 border-pink-200 bg-gradient-to-br from-pink-50 to-white shadow-lg hover:shadow-xl transition-all">
//               <CardContent className="p-6">
//                 <div className="w-14 h-14 bg-gradient-to-br from-pink-600 to-red-600 rounded-2xl flex items-center justify-center mb-4">
//                   <FileText className="w-7 h-7 text-white" />
//                 </div>
//                 <div className="mb-3 flex items-center gap-2">
//                   <Badge className="bg-pink-600">Step 3</Badge>
//                   <h3 className="text-xl font-bold">Output</h3>
//                 </div>
//                 <p className="text-sm text-zinc-600 mb-4">
//                   <strong className="text-black">Actionable Reports</strong>{" "}
//                   with scores, insights, and recommendations.
//                 </p>
//                 <ul className="space-y-2 text-sm text-zinc-700">
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
//                     AI Visibility Score (0-100)
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
//                     Key issues &amp; flags
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
//                     Optimization roadmap
//                   </li>
//                   <li className="flex items-start gap-2">
//                     <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
//                     Competitive positioning
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* ---------------- 7 AUDIT MODULES ---------------- */}
//       <section className="mt-32 px-4">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <Badge variant="secondary" className="mb-4">
//               Core Modules
//             </Badge>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               7 Dimensions of AI Visibility
//             </h2>
//             <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
//               Each module evaluates a critical aspect of how AI models perceive
//               and present your brand.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {PLATFORM_AUDIT_MODULES.map((module) => (
//               <Card
//                 key={module.id}
//                 className="group hover:shadow-xl transition-all duration-300 border-zinc-200 hover:border-zinc-300 cursor-pointer"
//               >
//                 <CardContent className="p-6">
//                   <div
//                     className={`w-12 h-12 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
//                   >
//                     <module.icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-lg font-bold mb-2">{module.name}</h3>
//                   <p className="text-sm text-zinc-600 leading-relaxed">
//                     {module.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------------- WHAT MAKES US DIFFERENT ---------------- */}
//       <section className="mt-32 px-4">
//         <div className="max-w-6xl mx-auto">
//           <Card className="bg-gradient-to-br from-zinc-900 to-zinc-800 border-0 shadow-2xl rounded-3xl overflow-hidden">
//             <CardContent className="p-12 md:p-16 text-white">
//               <div className="max-w-3xl">
//                 <Badge className="mb-6 bg-white/20 text-white border-white/30">
//                   Why Kasparro?
//                 </Badge>

//                 <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
//                   How we&apos;re different from traditional SEO tools
//                 </h2>

//                 <div className="space-y-6 mb-8">
//                   <div className="flex items-start gap-4">
//                     <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
//                       <AlertCircle className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold mb-2">
//                         AI-First Architecture
//                       </h3>
//                       <p className="text-white/80 leading-relaxed">
//                         We don&apos;t retrofit traditional SEO metrics. Our
//                         platform is built from the ground up to understand how
//                         AI models retrieve and present information.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
//                       <Brain className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold mb-2">
//                         Context Understanding
//                       </h3>
//                       <p className="text-white/80 leading-relaxed">
//                         Traditional tools track keywords. We model semantic
//                         relationships, entity graphs, and the contextual
//                         frameworks AI models use to understand topics.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4">
//                     <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
//                       <TrendingUp className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold mb-2">
//                         Actionable Intelligence
//                       </h3>
//                       <p className="text-white/80 leading-relaxed">
//                         No vanity metrics. Every score, insight, and
//                         recommendation is tied to measurable improvements in AI
//                         model visibility and citation rates.
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 <Button
//                   asChild
//                   size="lg"
//                   className="bg-white text-zinc-900 hover:bg-zinc-100 rounded-full"
//                 >
//                   <Link href="/app/audit" className="flex items-center gap-2">
//                     See It In Action
//                     <ArrowRight className="w-4 h-4" />
//                   </Link>
//                 </Button>
//               </div>
//             </CardContent>
//           </Card>
//         </div>
//       </section>

//       {/* ---------------- DATA CONSUMPTION ---------------- */}
//       <section className="mt-32 px-4 pb-32">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-12">
//             <Badge variant="secondary" className="mb-4">
//               Under the Hood
//             </Badge>
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               What Data We Consume
//             </h2>
//             <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
//               Kasparro analyzes publicly available data to build a comprehensive
//               picture of your brand&apos;s AI visibility.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
//             {DATA_CATEGORIES.map((category, i) => (
//               <Card key={i} className="border-zinc-200">
//                 <CardHeader>
//                   <CardTitle className="text-xl">{category.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <ul className="space-y-3">
//                     {category.items.map((item, j) => (
//                       <li key={j} className="flex items-start gap-2">
//                         <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
//                         <span className="text-zinc-700">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>

//           <div className="text-center">
//             <p className="text-zinc-600 mb-6 text-lg">
//               Ready to understand how AI models see your brand?
//             </p>
//             <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
//               <Button
//                 asChild
//                 size="lg"
//                 className="bg-black hover:bg-zinc-800 rounded-full"
//               >
//                 <Link href="/app/audit" className="flex items-center gap-2">
//                   Start Your Audit
//                   <ArrowRight className="w-4 h-4" />
//                 </Link>
//               </Button>
//               <Button
//                 asChild
//                 size="lg"
//                 variant="outline"
//                 className="rounded-full"
//               >
//                 <Link href="/about">Learn More About Us</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
"use client";

import { MarketingNavbar } from "@/components/ui/marketing-navbar";
import { PlatformHero } from "@/components/ui/platform/PlatformHero";
import { AuditPipelineSection } from "@/components/ui/platform/AuditPipelineSection";
import { AuditModulesSection } from "@/components/ui/platform/AuditModulesSection";
import { WhyKasparroSection } from "@/components/ui/platform/WhyKasparroSection";
import { DataConsumptionSection } from "@/components/ui/platform/DataConsumptionSection";

export default function PlatformPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-50 to-zinc-100">
      <MarketingNavbar activePage="platform" />
      <PlatformHero />
      <AuditPipelineSection />
      <AuditModulesSection />
      <WhyKasparroSection />
      <DataConsumptionSection />
    </main>
  );
}
