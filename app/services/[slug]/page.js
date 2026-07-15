import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { services, getServiceBySlug } from "@/content/services";
import * as Icons from "lucide-react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  
  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.summary,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = Icons[service.icon] || Icons.CheckCircle;

  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* Service Hero */}
      <section className="bg-green-50 py-16 md:py-24 border-b border-green-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-900 text-sm font-semibold mb-2">
                <Icon className="w-4 h-4" />
                {service.title}
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-green-950 leading-tight">
                {service.summary}
              </h1>
              <p className="text-xl text-muted leading-relaxed">
                {service.description}
              </p>
              <div className="pt-6">
                <Button href={`/contact?type=request-training&service=${service.slug}`} variant="primary" size="lg">
                  Request This Training
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative aspect-[4/3] lg:aspect-square bg-cream rounded-3xl border border-green-100 overflow-hidden shadow-md">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Details Section */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Learning Outcomes */}
              {service.learningOutcomes && service.learningOutcomes.length > 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-display font-bold text-green-950">What Participants Will Learn</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.learningOutcomes.map((outcome, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-green-50 border border-green-100">
                        <Icons.CheckCircle2 className="w-6 h-6 text-green-700 shrink-0" />
                        <span className="text-green-950 font-medium">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Gallery Images */}
              {service.gallery && service.gallery.length > 0 && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-display font-bold text-green-950">Practical Demonstration</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {service.gallery.map((imgSrc, i) => (
                      <div key={i} className="relative aspect-[4/3] bg-cream rounded-2xl border border-green-100 overflow-hidden shadow-sm group">
                        <Image
                          src={imgSrc}
                          alt={`${service.title} demonstration ${i + 1}`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Target Groups */}
              <div className="bg-cream rounded-2xl p-8 border border-green-100/50">
                <h3 className="text-lg font-bold text-green-950 mb-4 flex items-center gap-2">
                  <Icons.Users className="w-5 h-5 text-green-700" />
                  Suitable For
                </h3>
                <ul className="space-y-3">
                  {service.targetGroups.map((group, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {group}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Delivery Formats */}
              <div className="bg-white rounded-2xl p-8 border border-green-100 shadow-sm">
                <h3 className="text-lg font-bold text-green-950 mb-4 flex items-center gap-2">
                  <Icons.Presentation className="w-5 h-5 text-green-700" />
                  Delivery Formats
                </h3>
                <ul className="space-y-3">
                  {service.deliveryFormats.map((format, i) => (
                    <li key={i} className="flex items-center gap-3 text-muted text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-700" />
                      {format}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Link */}
              <div className="pt-4">
                <Link href="/projects" className="group flex items-center justify-between p-4 bg-green-950 text-white rounded-xl hover:bg-green-900 transition-colors">
                  <span className="font-medium">View Related Projects</span>
                  <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
