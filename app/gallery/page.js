import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import * as Icons from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Media Gallery",
  description: "Explore photographs and videos of ARATC's practical agricultural training and community development projects.",
};

export default function GalleryPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      <section className="bg-green-50 py-16 md:py-24 border-b border-green-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-green-950">Gallery & Media</h1>
            <p className="text-xl text-muted leading-relaxed">
              An organized visual record of our work, training sessions, and community impact.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          {/* Filters Placeholder */}
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-2 rounded-full bg-green-950 text-white text-sm font-medium">All</span>
            <span className="px-4 py-2 rounded-full bg-cream text-green-950 hover:bg-green-100 text-sm font-medium cursor-pointer transition-colors">Agricultural Production</span>
            <span className="px-4 py-2 rounded-full bg-cream text-green-950 hover:bg-green-100 text-sm font-medium cursor-pointer transition-colors">Livelihood Skills</span>
            <span className="px-4 py-2 rounded-full bg-cream text-green-950 hover:bg-green-100 text-sm font-medium cursor-pointer transition-colors">Community Outreach</span>
            <span className="px-4 py-2 rounded-full bg-cream text-green-950 hover:bg-green-100 text-sm font-medium cursor-pointer transition-colors">Projects & Partners</span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({length: 32}, (_, i) => i + 1).map((i) => (
              <div key={i} className="group relative rounded-2xl overflow-hidden bg-cream border border-green-100 aspect-square cursor-pointer">
                <Image 
                  src={`/gallery-images/image-${i}.webp`}
                  alt={`ARATC Activity ${i}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-green-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end text-white">
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider mb-2">ARATC Activity</span>
                  <p className="font-medium text-sm line-clamp-3">
                    Practical agricultural and livelihood training session in progress.
                  </p>
                  <div className="flex items-center gap-2 mt-4 text-xs text-green-100/70">
                    <Icons.MapPin className="w-3 h-3" /> Western Region
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Placeholder */}
          <div className="mt-16 text-center">
            <button className="px-6 py-3 rounded-lg border-2 border-green-900 text-green-950 font-medium hover:bg-green-50 transition-colors">
              Load More Media
            </button>
          </div>
        </Container>
      </section>
    </main>
  );
}
