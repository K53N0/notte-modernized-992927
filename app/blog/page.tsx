import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHero } from "@/components/blog-hero"
import { BlogCategories } from "@/components/blog-categories"
import { FeaturedArticle } from "@/components/featured-article"
import { BlogArticles } from "@/components/blog-articles"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative">
        <BlogHero />
        <div className="container mx-auto px-4 relative z-10">
          <BlogCategories />
        </div>
        <FeaturedArticle />
        <BlogArticles />
      </main>
      <Footer />
    </div>
  )
}

export const metadata = {
  title: "Notte Blog",
  description:
    "Building the future of Web AI Agents. Learn about the intersection of LLM agents and browser navigation. Technical insights on building AI-powered tools that actually work.",
}
