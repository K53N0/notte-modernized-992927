"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Code2, Play } from "lucide-react"

export function TutorialsSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">Tutorials</h2>
          <p className="text-xl text-muted-foreground">Learn how to build and run web agents with Notte</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Play className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">Quickstart with Notte</CardTitle>
              <CardDescription>Get up and running with your first web agent in minutes</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Start tutorial</Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <BookOpen className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">What is Notte?</CardTitle>
              <CardDescription>Understand the core concepts and capabilities of our platform</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent">
                Learn more
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* SDK Examples */}
        <Card>
          <CardHeader className="text-center">
            <div className="mb-4 mx-auto inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Code2 className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl">Notte SDK Examples</CardTitle>
            <CardDescription className="text-lg">
              Simple Python code snippets to automate web tasks with Notte
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg p-6 font-mono text-sm">
              <div className="text-muted-foreground mb-2"># Example: Automate web scraping</div>
              <div className="text-primary">from notte import Agent</div>
              <div className="mt-2">agent = Agent()</div>
              <div>result = agent.run("Scrape trending repositories from GitHub")</div>
              <div className="text-muted-foreground mt-2">
                # Agent handles navigation, data extraction, and returns structured results
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
