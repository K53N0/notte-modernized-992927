import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function BlogCategories() {
  const categories = [
    { name: "All", href: "/blog" },
    { name: "API", href: "/blog?category=api" },
    { name: "Agent", href: "/blog?category=agent" },
    { name: "Automation Tool", href: "/blog?category=automation-tool" },
    { name: "integration", href: "/blog?category=integration" },
  ]

  return (
    <div className="flex flex-wrap gap-3 mb-12 justify-center">
      {categories.map((category) => (
        <Link key={category.name} href={category.href}>
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105 hover:shadow-md"
          >
            {category.name}
          </Badge>
        </Link>
      ))}
    </div>
  )
}
