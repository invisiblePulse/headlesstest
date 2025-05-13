import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import type { Article } from "@/lib/types"

interface FeaturedArticleProps {
  article: Article
  priority?: boolean
  large?: boolean
}

export function FeaturedArticle({ article, priority = false, large = false }: FeaturedArticleProps) {
  const category = article.categories[0]

  return (
    <div className={`group relative ${large ? "col-span-3 lg:col-span-2" : ""}`}>
      <Link href={`/${category}/${article.slug}`}>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            priority={priority}
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-md">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <h2
              className={`font-bold mb-2 line-clamp-2 group-hover:text-primary/90 transition-colors ${large ? "text-2xl md:text-3xl" : "text-xl"}`}
            >
              {article.title}
            </h2>
            {large && <p className="text-white/80 mb-2 line-clamp-2 hidden md:block">{article.excerpt}</p>}
            <div className="flex items-center text-xs text-white/70">
              <span>{article.author}</span>
              <span className="mx-2">•</span>
              <time dateTime={article.date}>{format(new Date(article.date), "MMM d, yyyy")}</time>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
