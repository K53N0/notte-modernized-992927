"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Zap, Shield, Cpu } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-gradient py-24 lg:py-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full border bg-card/50 backdrop-blur-sm px-4 py-2 text-sm shadow-lg pulse-glow">
            <Zap className="mr-2 h-4 w-4 text-accent animate-pulse" />
            <span className="text-muted-foreground font-medium">Powered by Advanced AI</span>
          </div>

          <h1 className="mb-8 text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            Web agents that can <span className="gradient-text">act and scrape</span> on any site
          </h1>

          <p className="mb-12 text-xl text-muted-foreground sm:text-2xl max-w-3xl mx-auto leading-relaxed">
            Your one-stop shop for web workflow automation. Build, deploy, and scale intelligent agents that navigate
            the web like humans.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              size="lg"
              className="group bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold shadow-xl"
            >
              Book a Demo
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-semibold border-2 hover:bg-muted bg-transparent"
            >
              Sign Up Free
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/30 backdrop-blur-sm border">
              <Shield className="h-6 w-6 text-accent" />
              <span className="font-medium">Secure & Reliable</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/30 backdrop-blur-sm border">
              <Cpu className="h-6 w-6 text-accent" />
              <span className="font-medium">AI-Powered</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-xl bg-card/30 backdrop-blur-sm border">
              <Zap className="h-6 w-6 text-accent" />
              <span className="font-medium">Lightning Fast</span>
            </div>
          </div>

          <div className="feature-card rounded-3xl border bg-card/50 backdrop-blur-sm p-8 shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <div className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent mb-4">
                  Demo Showcase
                </div>
                <h3 className="text-3xl font-bold mb-6 leading-tight">
                  Watch the latest blockbuster now streaming exclusively on NotFlix.
                </h3>
                <div className="flex gap-4">
                  <Button className="group bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Play className="mr-2 h-4 w-4" />
                    Play Demo
                  </Button>
                  <Button variant="outline" className="border-2 bg-transparent">
                    More Info
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="bg-gradient-to-br from-muted to-muted/50 rounded-2xl h-64 flex items-center justify-center floating-animation">
                  <div className="bg-accent/20 rounded-full p-6">
                    <Play className="h-12 w-12 text-accent" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
