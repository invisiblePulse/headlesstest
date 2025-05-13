import { ArticleCard } from "@/components/article-card"
import { FeaturedArticle } from "@/components/featured-article"
import { SectionHeading } from "@/components/section-heading"
import { Sidebar } from "@/components/sidebar"
import { getArticles } from "@/lib/articles"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return [
    { category: "politics" },
    { category: "business" },
    { category: "sports" },
    { category: "health" },
    { category: "entertainment" },
    { category: "blog" },
  ]
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const category = params.category
  return {
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} News`,
    description: `Latest ${category} news and updates`,
  }
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params
  const validCategories = ["politics", "business", "sports", "health", "entertainment", "blog"]

  if (!validCategories.includes(category)) {
    notFound()
  }

  const articles = getArticles()
  const categoryArticles = articles.filter((article) => article.categories.includes(category))

  const featuredArticle = categoryArticles.find((article) => article.featured)
  const regularArticles = categoryArticles.filter((article) => article !== featuredArticle)

  return (
    <div className="container mx-auto px-4 py-8">
      <SectionHeading title={category.charAt(0).toUpperCase() + category.slice(1)} large />

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
