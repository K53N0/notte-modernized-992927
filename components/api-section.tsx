"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Shield, Bell, CreditCard } from "lucide-react"

const apiFeatures = [
  {
    icon: Database,
    title: "Secure Vault",
    description: "Keep secrets safe and sound",
    link: "https://docs.notte.cc/concepts/vaults",
  },
  {
    icon: Shield,
    title: "Personas",
    description: "Create unique identities for each task",
    link: "https://docs.notte.cc/concepts/personas",
  },
  {
    icon: Code,
    title: "Storage",
    description: "Persistent data across sessions",
    link: "https://docs.notte.cc/features/sessions/storage",
  },
  {
    icon: Bell,
    title: "Notifiers",
    description: "Get alerts when tasks complete",
    link: "/lp/notifiers",
  },
  {
    icon: CreditCard,
    title: "Payments",
    description: "Handle transactions automatically",
    link: "/lp/payments",
  },
]

export function ApiSection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6">Main API</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Create instant Browser sessions. Scrape. Reason and plan. Act. Auth. Reason again.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Browser Agent Ecosystem</h3>
          <p className="text-center text-muted-foreground mb-12">
            Agents deserve all the right tooling, all in one place.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {apiFeatures.map((feature, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
