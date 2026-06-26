import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { news, getNewsBySlug } from "@/content/news";
import * as Icons from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";

export async function generateStaticParams() {
  return news.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = getNewsBySlug(slug);
  
  if (!item) {
    return { title: "Article Not Found" };
  }

  return {
    title: item.title,
    description: item.summary,
  };
}

export default async function NewsArticlePage({ params }) {
  const { slug } = await params;
  const article = getNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="flex-1 flex flex-col bg-white">
      <article className="pt-16 md:pt-24 pb-20">
        <Container className="max-w-4xl">
          {/* Header */}
          <header className="space-y-6 mb-12">
            <div className="flex items-center gap-3 text-sm font-medium">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full uppercase tracking-wider text-xs">
                {article.category}
              </span>
              <span className="text-muted">•</span>
              <time dateTime={article.date} className="text-muted">
                {new Date(article.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </time>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-green-950 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex items-center gap-3 pt-4 border-t border-green-100">
              <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center text-green-900">
                <Icons.User className="w-5 h-5" />
              </div>
              <div className="text-sm">
                <p className="font-semibold text-green-950">{article.author}</p>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <figure className="mb-12 aspect-[21/9] bg-green-50 rounded-3xl border border-green-100 flex items-center justify-center text-green-900/40 overflow-hidden shadow-sm">
            <Icons.Image className="w-16 h-16" />
          </figure>

          {/* Content */}
          <div className="prose prose-lg prose-green max-w-none text-muted leading-relaxed">
            {article.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Footer / Sharing */}
          <footer className="mt-16 pt-8 border-t border-green-100 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-green-950">Share this story:</span>
              <button className="w-10 h-10 rounded-full bg-cream hover:bg-green-100 flex items-center justify-center text-green-900 transition-colors">
                <Icons.Share2 className="w-4 h-4" />
              </button>
            </div>
            
            {article.relatedService && (
              <Button href={`/services/${article.relatedService}`} variant="outline">
                View Related Service
              </Button>
            )}
          </footer>
        </Container>
      </article>
    </main>
  );
}
