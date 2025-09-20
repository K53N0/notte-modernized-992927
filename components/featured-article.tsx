import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedArticle() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Articles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep dives into web automation, AI agents, and the future of browser-based workflows
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-7xl mx-auto">
          {/* Main Featured Article */}
          <Card className="group blog-card-hover overflow-hidden border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <div className="aspect-[16/10] overflow-hidden relative">
              <Image
                src="https://cdn.sanity.io/images/w6wnfh79/production/59e4ce49e08aef7c51c7f7b7d4c74cbc6931db3d-1478x960.png?rect=19,0,1440,960&w=1170&h=780&auto=format"
                alt="What can I build with Notte?"
                width={1170}
                height={780}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="https://cdn.sanity.io/images/w6wnfh79/production/d45af2ca7149e112839f9351eb4c6c37a895b76a-800x800.jpg?w=64&h=64&auto=format"
                  alt="Sam's avatar"
                  width={40}
                  height={40}
                  className="rounded-full ring-2 ring-border"
                />
                <div>
                  <span className="font-medium text-foreground">Sam</span>
                  <span className="text-sm text-muted-foreground ml-3">Sep 18, 2025</span>
                </div>
              </div>
              <Link href="/blog/notte-use-cases" className="group">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  What can I build with Notte?
                </h3>
              </Link>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Discover the endless possibilities of web automation with Notte's powerful AI agents and browser control
                capabilities.
              </p>
              <Link
                href="/blog/notte-use-cases"
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
              >
                Read full article
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </CardContent>
          </Card>

          {/* Secondary Featured Article */}
          <Card className="group blog-card-hover overflow-hidden border-0 shadow-lg bg-card/80 backdrop-blur-sm">
            <div className="aspect-[16/10] overflow-hidden relative">
              <Image
                src="https://cdn.sanity.io/images/w6wnfh79/production/106367553de6b3af4693098329100d69505047d2-1476x964.png?rect=9,0,1446,964&w=1170&h=780&auto=format"
                alt="Notte MCP Server"
                width={1170}
                height={780}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Badge variant="secondary" className="bg-accent text-accent-foreground font-medium">
                  Agent
                </Badge>
                <Badge variant="outline" className="font-medium">
                  Integration
                </Badge>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src="https://cdn.sanity.io/images/w6wnfh79/production/93d15dfc8880255fba8ca28741dcbc7571cc2f92-504x496.png?rect=4,0,496,496&w=64&h=64&auto=format"
                  alt="Lucas's avatar"
                  width={40}
                  height={40}
                  className="rounded-full ring-2 ring-border"
                />
                <div>
                  <span className="font-medium text-foreground">Lucas</span>
                  <span className="text-sm text-muted-foreground ml-3">May 19, 2025</span>
                </div>
              </div>
              <Link href="/blog/mcp-server" className="group">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  Notte MCP Server: Extending AI Agents with Browser Control Capabilities
                </h3>
              </Link>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Learn how to integrate Notte's browser automation capabilities directly into your AI agent workflows.
              </p>
              <Link
                href="/blog/mcp-server"
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group"
              >
                Read full article
                <svg
                  className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
