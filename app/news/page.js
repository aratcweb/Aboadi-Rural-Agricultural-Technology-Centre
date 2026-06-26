import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { news } from "@/content/news";
import * as Icons from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "News & Stories",
  description: "Updates, beneficiary stories, agricultural guidance, and organizational news from ARATC.",
};

export default function NewsPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      <section className="bg-green-50 py-16 md:py-24 border-b border-green-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-green-950">News & Stories</h1>
            <p className="text-xl text-muted leading-relaxed">
              Read about our latest project updates, beneficiary stories, agricultural guidance, and organizational news.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          {news.length === 0 ? (
            <div className="text-center py-20 bg-cream rounded-3xl border border-green-100">
              <Icons.Newspaper className="w-16 h-16 text-green-900/40 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-green-950 mb-2">No updates available yet</h2>
              <p className="text-muted">Check back soon for news and stories from our recent projects.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item) => (
                <Link 
                  key={item.id} 
                  href={`/news/${item.slug}`}
                  className="group flex flex-col bg-white rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
                >
                  <div className="aspect-[16/9] bg-green-50 flex items-center justify-center text-green-900/40 border-b border-green-100 overflow-hidden relative">
                    <Icons.Image className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-green-950/0 group-hover:bg-green-950/5 transition-colors" />
                  </div>
                  
                  <div className="p-6 md:p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs font-medium text-muted mb-4">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-md">
                        {item.category}
                      </span>
                      <span>•</span>
                      <time dateTime={item.date}>{new Date(item.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</time>
                    </div>
                    
                    <h3 className="text-xl font-bold text-green-950 mb-3 group-hover:text-green-700 transition-colors line-clamp-3">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted text-sm line-clamp-3 mb-6 flex-1">
                      {item.summary}
                    </p>
                    
                    <div className="pt-4 border-t border-green-50 flex items-center gap-2 text-green-700 font-medium text-sm mt-auto">
                      Read Story <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  );
}
