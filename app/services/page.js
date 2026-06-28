import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { services } from "@/content/services";
import * as Icons from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "What We Do - Services & Training",
  description: "ARATC provides practical training and support in sustainable agriculture, livelihood skills, entrepreneurship, research and community development.",
};

export default function ServicesDirectoryPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* Hero */}
      <section className="bg-green-50 py-16 md:py-24 border-b border-green-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-green-950">What We Do</h1>
            <p className="text-xl text-muted leading-relaxed">
              We provide practical agricultural training, livelihood development, consultancy services and community-based programmes across Ghana.
            </p>
          </div>
        </Container>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="space-y-16 lg:space-y-24">
            {services.map((service, index) => {
              const Icon = Icons[service.icon] || Icons.CheckCircle;
              const isEven = index % 2 === 1;

              return (
                <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}>
                  {/* Image */}
                  <div className="w-full lg:w-1/2 aspect-[4/3] bg-cream rounded-3xl border border-green-100 overflow-hidden relative group">
                    <Image 
                      src={service.image || "/image 28.webp"} 
                      alt={service.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold mb-2">
                      <Icon className="w-4 h-4" />
                      {service.title}
                    </div>
                    <h2 className="text-3xl font-display font-bold text-green-950">
                      {service.summary}
                    </h2>
                    <p className="text-lg text-muted leading-relaxed">
                      {service.description}
                    </p>
                    
                    {service.learningOutcomes && service.learningOutcomes.length > 0 && (
                      <ul className="space-y-3 pt-4">
                        {service.learningOutcomes.slice(0, 3).map((outcome, i) => (
                          <li key={i} className="flex items-start gap-3 text-muted">
                            <Icons.Check className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="pt-6 flex flex-wrap gap-4">
                      <Button href={`/services/${service.slug}`} variant="primary">
                        View Details
                      </Button>
                      <Button href={`/contact?type=request-training&service=${service.slug}`} variant="outline">
                        Request Training
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-950 text-white text-center">
        <Container>
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-display font-bold">Need a Custom Programme?</h2>
            <p className="text-green-100 text-lg">
              We can adapt our training modules for specific community groups, women and youth programmes, or institutional development projects.
            </p>
            <div className="pt-4">
              <Button href="/contact?type=discuss-partnership" variant="primary" className="bg-gold text-green-950 hover:bg-gold/90 border-none">
                Discuss Your Requirements
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
