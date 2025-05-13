import Link from "next/link"
import Image from "next/image"
import { format } from "date-fns"
import { getTrendingArticles, getLatestArticles } from "@/lib/articles"

export function Sidebar() {
  const trendingArticles = getTrendingArticles()
  const latestArticles = getLatestArticles()

  return (
    <div className="space-y-10">
      {/* Trending section */}
      <div>
        <h3 className="text-xl font-bold mb-6">Trending</h3>
        <div className="space-y-6">
          {trendingArticles.map((article, index) => {
            const category = article.categories[0]
            return (
              <div key={article.id} className="flex items-start gap-4">
                <span className="text-2xl font-bold text-muted-foreground">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <div className="space-y-1">
                  <Link href={`/${category}/${article.slug}`}>
                    <h4 className="font-medium line-clamp-2 hover:text-primary transition-colors">{article.title}</h4>
                  </Link>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>{article.author}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={article.date}>{format(new Date(article.date), "MMM d")}</time>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Latest articles */}
      <div>
        <h3 className="text-xl font-bold mb-6">Latest</h3>
        <div className="space-y-6">
          {latestArticles.map((article) => {
            const category = article.categories[0]
            return (
              <div key={article.id} className="group space-y-3">
                <Link href={`/${category}/${article.slug}`}>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div>
                  <Link href={`/${category}/${article.slug}`}>
                    <h4 className="font-medium line-clamp-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h4>
                  </Link>
                  <div className="flex items-center text-xs text-muted-foreground mt-1">
                    <span>{article.author}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={article.date}>{format(new Date(article.date), "MMM d, yyyy")}</time>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-muted p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Newsletter</h3>
        <p className="text-muted-foreground mb-4">Stay updated with our latest news and articles</p>
        <form className="space-y-2">
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 rounded-md border bg-background"
            required
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  )
}
