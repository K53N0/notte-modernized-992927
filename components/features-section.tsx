"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, User, Eye, Zap, Mail, Phone, Crown } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Secure Credential Vault",
    description: "Your agents log in automatically and safely to any website",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: User,
    title: "Persona: Email Service",
    description: "Unique email addresses for automated account creation",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Eye,
    title: "Stealth: Browse undetected",
    description: "Residential proxies and captcha solvers",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Parallel Execution",
    description: "Run multiple agents simultaneously at scale",
    gradient: "from-orange-500 to-red-500",
  },
]

export function FeaturesSection() {
  return (
    <section id="use-cases" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-20">
          <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-2 text-sm font-medium text-accent mb-6">
            <Crown className="mr-2 h-4 w-4" />
            Premium Features
          </div>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-8">
            Advanced Cloud <span className="gradient-text">Infrastructure</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Scale your web automation from zero to production readiness with enterprise-grade cloud infrastructure
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="feature-card group border-0 bg-card/50 backdrop-blur-sm shadow-xl">
              <CardHeader className="pb-4">
                <div
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 mb-20">
          <Card className="feature-card p-8 border-0 bg-card/50 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Verify your email</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-lg">Enter your email to verify:</p>
            <div className="flex gap-3">
              <Button variant="outline" className="border-2 hover:bg-muted bg-transparent">
                Send Verification Email
              </Button>
              <Button className="bg-accent hover:bg-accent/90">Verify Email</Button>
            </div>
          </Card>

          <Card className="feature-card p-8 border-0 bg-card/50 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold">Add Phone Number</h3>
            </div>
            <p className="text-muted-foreground mb-6 text-lg">We'll send you a verification code</p>
            <Button className="bg-accent hover:bg-accent/90">Continue</Button>
          </Card>
        </div>

        <Card className="feature-card relative overflow-hidden border-0 bg-gradient-to-br from-accent/20 via-accent/10 to-primary/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5" />
          <CardContent className="relative p-12 text-center">
            <div className="inline-flex items-center rounded-full bg-accent/20 px-4 py-2 text-sm font-medium text-accent mb-6">
              <Crown className="mr-2 h-4 w-4" />
              Premium Plan
            </div>
            <h3 className="text-4xl font-bold mb-4">Notte Pro</h3>
            <div className="mb-6">
              <span className="text-5xl font-bold gradient-text">$79</span>
              <span className="text-xl text-muted-foreground">/mo</span>
            </div>
            <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
              Subscribe to unlock all features and scale your automation
            </p>
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold shadow-xl"
            >
              Subscribe $79/mo
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
