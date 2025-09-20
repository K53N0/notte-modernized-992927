import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function BlogArticles() {
  const articles = [
    {
      id: 1,
      title: "What can I build with Notte?",
      date: "September 18, 2025",
      author: {
        name: "Sam",
        avatar:
          "https://cdn.sanity.io/images/w6wnfh79/production/d45af2ca7149e112839f9351eb4c6c37a895b76a-800x800.jpg?w=64&h=64&auto=format",
      },
      href: "/blog/notte-use-cases",
      categories: [],
    },
    {
      id: 2,
      title: "Notte MCP Server: Extending AI Agents with Browser Control Capabilities",
      date: "May 19, 2025",
      author: {
        name: "Lucas",
        avatar:
          "https://cdn.sanity.io/images/w6wnfh79/production/93d15dfc8880255fba8ca28741dcbc7571cc2f92-504x496.png?rect=4,0,496,496&w=64&h=64&auto=format",
      },
      image:
        "https://cdn.sanity.io/images/w6wnfh79/production/106367553de6b3af4693098329100d69505047d2-1476x964.png?rect=371,0,723,964&w=600&h=800&auto=format",
      href: "/blog/mcp-server",
      categories: ["Agent", "integration"],
    },
    {
      id: 3,
      title: "Choosing between Playwright, Puppeteer, or Selenium? We recommend Playwright",
      date: "May 1, 2025",
      author: {
        name: "Andrea",
        avatar:
          "https://cdn.sanity.io/images/w6wnfh79/production/7215a44010eee2537c32f8874d0e9010e388cf2a-1444x1436.png?rect=4,0,1436,1436&w=64&h=64&auto=format",
      },
      image:
        "https://cdn.sanity.io/images/w6wnfh79/production/40f178c6a01cb7a78d30a1361b00e7833fa71c13-1490x960.png?rect=385,0,720,960&w=600&h=800&auto=format",
      href: "/blog/choosing-between-playwright-puppeteer-or-selenium-we-recommend-playwright",
      categories: ["Automation Tool"],
      excerpt:
        "In web automation and testing, three tools tend to lead the field: Playwright, Puppeteer, and Selenium. Each tool has its own features and benefits. However, for the most powerful and reliable option, Playwright is the best of the three.",
    },
    {
      id: 4,
      title: "Notte Vault: The solution for AI agent authentication",
      date: "April 30, 2025",
      author: {
        name: "Leo",
        avatar:
          "https://cdn.sanity.io/images/w6wnfh79/production/cac00fa31a0879a04b0082ac7f522d53bc1335be-198x190.png?rect=4,0,190,190&w=64&h=64&auto=format",
      },
      image:
        "https://cdn.sanity.io/images/w6wnfh79/production/9ced1d7ea3767396d36388166769112ceba5316c-1514x994.png?rect=384,0,746,994&w=600&h=800&auto=format",
      href: "/blog/notte-vault",
      categories: [],
    },
    {
      id: 5,
      title: "Understand Playwright's BrowserContexts and Pages",
      date: "April 21, 2025",
      author: {
        name: "Lucas",
        avatar:
          "https://cdn.sanity.io/images/w6wnfh79/production/93d15dfc8880255fba8ca28741dcbc7571cc2f92-504x496.png?rect=4,0,496,496&w=64&h=64&auto=format",
      },
      image:
        "https://cdn.sanity.io/images/w6wnfh79/production/d1159d29720a4400f00e648a0915bbe316bb295b-1492x958.png?rect=387,0,719,958&w=600&h=800&auto=format",
      href: "/blog/understand-playwright-s-browsercontexts-and-pages",
      categories: ["API"],
      excerpt:
        "Playwright (and Puppeteer) exposes its API through Browser, BrowserContext, and Page objects with a blurry definition of their boundaries. This article covers their definition, how to leverage them, and how to avoid common pitfalls.",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Latest Articles</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest developments in web automation and AI agents
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {articles.map((article) => (
            <Card
              key={article.id}
              className="group blog-card-hover overflow-hidden border-0 shadow-lg bg-card/80 backdrop-blur-sm h-full flex flex-col"
            >
              {article.image && (
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              )}
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.categories.map((category) => (
                    <Link key={category} href={`/blog?category=${category.toLowerCase()}`}>
                      <Badge
                        variant="secondary"
                        className="text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105"
                      >
                        {category}
                      </Badge>
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={article.author.avatar || "/placeholder.svg"}
                    alt={`${article.author.name}'s avatar`}
                    width={32}
                    height={32}
                    className="rounded-full ring-2 ring-border/50"
                  />
                  <span className="font-medium text-foreground">{article.author.name}</span>
                  <span className="text-sm text-muted-foreground">{article.date}</span>
                </div>

                <Link href={article.href} className="group flex-1">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {article.title}
                  </h3>
                </Link>

                {article.excerpt && (
                  <p className="text-muted-foreground line-clamp-3 mb-6 leading-relaxed flex-1">{article.excerpt}</p>
                )}

                <Link
                  href={article.href}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group mt-auto"
                >
                  Read article
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
          ))}
        </div>
      </div>
    </section>
  )
}
