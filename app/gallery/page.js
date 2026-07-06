import { Container } from "@/components/Container";
import { GalleryGrid } from "@/components/GalleryGrid";

export const metadata = {
  title: "Media Gallery",
  description: "Explore photographs of ARATC's practical agricultural training, livelihood skills, and community outreach projects.",
};

export default function GalleryPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      <section className="bg-green-50 py-16 md:py-24 border-b border-green-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-green-950">Gallery & Media</h1>
            <p className="text-xl text-muted leading-relaxed">
              An organized visual record of our training sessions, workshops, and community impact.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <GalleryGrid />
        </Container>
      </section>
    </main>
  );
}
