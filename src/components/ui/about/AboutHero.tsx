import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export function AboutHero() {
  return (
    <section className="mt-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Badge
          variant="secondary"
          className="mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
        >
          <Sparkles className="w-3 h-3 mr-1" />
          About Kasparro
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          Building the future of{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            brand visibility
          </span>
        </h1>

        <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
          We're creating the infrastructure for brands to win in the AI-first
          search era—where ChatGPT, Gemini, and Perplexity are becoming the new
          front door to the internet.
        </p>
      </div>
    </section>
  );
}
