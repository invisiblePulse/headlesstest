import Image from "next/image"
import { notFound } from "next/navigation"
import { format } from "date-fns"
import { getArticleBySlug, getRelatedArticles } from "@/lib/articles"
import { ArticleCard } from "@/components/article-card"
import { Sidebar } from "@/components/sidebar"

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found",
    }
  }

  return {
    title: article.title,
    description: article.excerpt,
  }
}

export default function ArticlePage({ params }: { params: { slug: string; category: string } }) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(article.id, params.category)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <main className="lg:col-span-8">
          <article className="prose prose-slate dark:prose-invert max-w-none">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>

            <div className="flex items-center text-muted-foreground mb-6">
              <span className="mr-4">By {article.author}</span>
              <time dateTime={article.date}>{format(new Date(article.date), "MMMM d, yyyy")}</time>
            </div>

            <div className="relative aspect-video mb-8 overflow-hidden rounded-lg">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4">
              {article.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </article>

          {/* Related articles */}
          {relatedArticles.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <ArticleCard key={relatedArticle.id} article={relatedArticle} />
                ))}
              </div>
            </section>
          )}
        </main>

        <aside className="lg:col-span-4">
          <Sidebar />
        </aside>
      </div>
    </div>
  )
}
