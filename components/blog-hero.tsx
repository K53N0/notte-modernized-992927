export function BlogHero() {
  return (
    <section className="relative py-24 md:py-32 gradient-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="container mx-auto px-4 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-balance bg-gradient-to-br from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Building the future of Web AI Agents
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Learn about the intersection of LLM agents and browser navigation. Technical insights on building AI-powered
            tools that actually work.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="px-6 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border/50">
              <span className="text-sm font-medium text-muted-foreground">
                Latest insights from our engineering team
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
