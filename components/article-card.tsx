import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import type { Article } from "@/lib/types"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  const category = article.categories[0]

  return (
    <div className="group space-y-4">
      <Link href={`/${category}/${article.slug}`}>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src={article.image || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-md">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </div>
        </div>
      </Link>
      <div className="space-y-2">
        <Link href={`/${category}/${article.slug}`}>
          <h3 className="font-bold line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
        </Link>
        <p className="text-muted-foreground text-sm line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center text-xs text-muted-foreground">
          <span>{article.author}</span>
          <span className="mx-2">•</span>
          <time dateTime={article.date}>{format(new Date(article.date), "MMM d, yyyy")}</time>
        </div>
      </div>
    </div>
  )
}
