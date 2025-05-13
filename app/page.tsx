import { ArticleCard } from "@/components/article-card"
import { FeaturedArticle } from "@/components/featured-article"
import { SectionHeading } from "@/components/section-heading"
import { Sidebar } from "@/components/sidebar"
import { getArticles } from "@/lib/articles"

export default function HomePage() {
  const articles = getArticles()
  const featuredArticles = articles.filter((article) => article.featured).slice(0, 3)

  // Get articles by category
  const getArticlesByCategory = (category: string) => {
    return articles.filter((article) => article.categories.includes(category)).slice(0, 4)
  }

  const categories = ["politics", "business", "sports", "health", "entertainment"]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section with featured articles */}
      <section className="mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <FeaturedArticle key={article.id} article={article} priority={index === 0} large={index === 0} />
          ))}
        </div>
      </section>

      {/* Main content with sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main content */}
        <main className="lg:col-span-8">
          {/* Category sections */}
          {categories.map((category) => (
            <section key={category} className="mb-12">
              <SectionHeading title={category.charAt(0).toUpperCase() + category.slice(1)} href={`/${category}`} />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {getArticlesByCategory(category).map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          ))}
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <Sidebar />
        </aside>
      </div>
    </div>
  )
}
