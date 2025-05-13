import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface SectionHeadingProps {
  title: string
  href?: string
  large?: boolean
}

export function SectionHeading({ title, href, large = false }: SectionHeadingProps) {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className={`font-bold ${large ? "text-3xl" : "text-xl"}`}>{title}</h2>
      {href && (
        <Link
          href={href}
          className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          View all <ChevronRight className="h-4 w-4 ml-1" />
        </Link>
      )}
    </div>
  )
}
