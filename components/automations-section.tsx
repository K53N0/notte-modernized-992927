"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Bot, Zap, Globe, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const automations = [
  "Cancel my NotFlix subscription",
  "Buy Notte t-shirt from shop",
  "Download my OpenAI invoice",
  "Reply to X DMs",
  "Scrape trending repositories",
  "Monitor prices and alert",
  "Parse receipts from email",
  "Export Stripe payouts",
  "Summarize meeting notes",
]

const capabilities = [
  {
    icon: Zap,
    title: "Autoreplay at light speed",
    description: "High-speed agent task replay with millisecond precision",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Bot,
    title: "Run Agents",
    description:
      "Given a goal in natural language, run an autonomous agent to plan, perceive, navigate, and act end-to-end.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Browser Sessions",
    description:
      "Headless browsers, without the headache. Spin up secure, scalable browser sessions that your agents can control.",
    gradient: "from-blue-500 to-cyan-500",
  },
]

export function AutomationsSection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-muted/30 via-background to-muted/20" />
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-20">
          <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent mb-6">
            <Bot className="mr-2 h-4 w-4" />
            Automation Engine
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8">
            Automate <span className="gradient-text">browser-based</span> workflows
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover how Notte powers your automated tasks with intelligent agents that understand context and execute
            with precision
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          {capabilities.map((capability, index) => (
            <Card key={index} className="feature-card group border-0 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardContent className="p-8 text-center">
                <div
                  className={`mb-8 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${capability.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <capability.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{capability.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{capability.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="feature-card border-0 bg-card/50 backdrop-blur-sm shadow-2xl mb-12">
          <CardContent className="p-12">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Popular Automations</h3>
              <p className="text-xl text-muted-foreground">Select and run any of these pre-built workflows</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {automations.map((automation, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-accent/5 transition-all duration-300 cursor-pointer border border-transparent hover:border-accent/20"
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-accent group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-sm font-medium group-hover:text-accent transition-colors">{automation}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all ml-auto opacity-0 group-hover:opacity-100" />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold shadow-xl"
              >
                View All Automations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
