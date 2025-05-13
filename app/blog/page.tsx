import { ArticleCard } from "@/components/article-card"
import { FeaturedArticle } from "@/components/featured-article"
import { SectionHeading } from "@/components/section-heading"
import { Sidebar } from "@/components/sidebar"
import { getArticlesByCategory } from "@/lib/articles"

export const metadata = {
  title: "Blog",
  description: "Read our latest blog posts and articles",
}

export default function BlogPage() {
  const blogArticles = getArticlesByCategory("blog")

  const featuredArticle = blogArticles.find((article) => article.featured) || blogArticles[0]
  const regularArticles = blogArticles.filter((article) => article !== featuredArticle)

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeading title="Blog" large />

      {/* Featured article */}
      {featuredArticle && (
        <section className="mb-12">
          <FeaturedArticle article={featuredArticle} priority large />
        </section>
      )}

      {/* Main content with sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main content */}
        <main className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <Sidebar />
        </aside>
      </div>
    </div>
  )
}
