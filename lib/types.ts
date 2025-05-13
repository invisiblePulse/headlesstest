export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string[]
  author: string
  date: string
  image: string
  categories: string[]
  featured?: boolean
  trending?: boolean
}
