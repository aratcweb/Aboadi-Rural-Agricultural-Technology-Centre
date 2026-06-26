import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteInfo } from "@/content/site";
import { services } from "@/content/services";
import * as Icons from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { HeroCarousel } from "@/components/HeroCarousel";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-green-950 text-white pt-20 pb-28 md:pt-32 md:pb-40 overflow-hidden">
        <HeroCarousel />
        <Container className="relative z-20">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-balance !text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
              Empowering communities through agriculture, skills and enterprise
            </h1>
            <p className="text-lg md:text-xl !text-white max-w-2xl leading-relaxed drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-medium">
              ARATC provides practical agricultural training, livelihood development, consultancy services and community-based programmes that help people build sustainable incomes and stronger communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button href="/projects" variant="primary" size="lg" className="bg-[#16a34a] hover:bg-[#15803d] !text-white border-none shadow-lg">
                Explore Our Work
              </Button>
              <Button href="/contact?type=discuss-partnership" variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/20 hover:text-white bg-black/40 backdrop-blur-sm shadow-lg">
                Partner With Us
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Strip */}
      <section className="bg-cream py-6 border-b border-green-100">
        <Container>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-green-900">
            <span className="flex items-center gap-2">
              <Icons.CheckCircle2 className="w-4 h-4 text-gold" />
              Ghanaian Non-Governmental Organization
            </span>
            <span className="flex items-center gap-2">
              <Icons.CheckCircle2 className="w-4 h-4 text-gold" />
              Registered in 2019
            </span>
            <span className="flex items-center gap-2">
              <Icons.CheckCircle2 className="w-4 h-4 text-gold" />
              Based in the Western Region
            </span>
            <span className="flex items-center gap-2">
              <Icons.CheckCircle2 className="w-4 h-4 text-gold" />
              Practical training and technical support
            </span>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionHeading 
                title="Experience rooted in communities" 
                subtitle="Aboadi Rural Agricultural Technology Centre (ARATC) is a Ghanaian non-governmental, non-profit organization that delivers practical agricultural training, livelihood development, research and consultancy services."
              />
              <p className="text-muted leading-relaxed">
                Our work supports farmers, women, young people and institutions with skills and solutions that improve productivity, resilience and economic opportunity.
              </p>
              <Button href="/about" variant="secondary" className="mt-4">
                About ARATC
              </Button>
            </div>
            {/* Experience Image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-green-100 shadow-lg">
              <Image 
                src="/image 28.jpg" 
                alt="ARATC Experience rooted in communities"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-28 bg-green-50">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading 
              title="What We Do" 
              subtitle="Practical solutions for stronger livelihoods and resilient communities."
            />
            <Button href="/services" variant="outline" className="hidden md:inline-flex shrink-0">
              View All Services
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = Icons[service.icon] || Icons.CheckCircle;
              return (
                <Link 
                  key={service.id} 
                  href={`/services/${service.slug}`}
                  className="group bg-white p-6 md:p-8 rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
                >
                  <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-100 transition-colors">
                    <Icon className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-green-950 mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                    {service.summary}
                  </p>
                  <span className="text-green-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                    Learn more <Icons.ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button href="/services" variant="outline" className="w-full">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* Impact */}
      <section className="py-20 md:py-28 bg-green-900 text-white">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold">Making a visible impact</h2>
            <p className="text-green-100 text-lg">
              We deliver evidence-based results through practical training, community engagement, and strong partnerships.
            </p>
            {/* To be replaced with actual impact figures when confirmed */}
            <div className="pt-8">
              <Button href="/projects" variant="primary" className="bg-gold text-green-950 hover:bg-gold/90 border-none">
                Read Our Impact Stories
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Projects (Placeholder Structure) */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionHeading 
              title="Featured Projects" 
              subtitle="Recent interventions and community outcomes."
            />
            <Button href="/projects" variant="outline" className="hidden md:inline-flex shrink-0">
              View All Projects
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder Project Cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col group">
                <div className="aspect-[4/3] bg-green-50 rounded-2xl mb-6 overflow-hidden border border-green-100 flex items-center justify-center text-green-900/40">
                  <Icons.Image className="w-8 h-8" />
                </div>
                <div className="flex items-center gap-3 text-xs font-medium text-muted mb-3">
                  <span className="flex items-center gap-1"><Icons.MapPin className="w-3 h-3" /> Western Region</span>
                  <span>•</span>
                  <span>Requires Confirmation</span>
                </div>
                <h3 className="text-xl font-bold text-green-950 mb-3 group-hover:text-green-700 transition-colors">
                  Project title requires confirmation
                </h3>
                <p className="text-muted text-sm line-clamp-2 mb-4 flex-1">
                  Project description placeholder. This will be replaced with real data once projects are approved.
                </p>
                <Link href="/projects" className="text-green-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all mt-auto">
                  Read Project <Icons.ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Leadership Preview */}
      <section className="py-20 md:py-28 bg-cream border-t border-green-100">
        <Container>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-green-100/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="aspect-square md:aspect-[3/4] bg-green-50 rounded-2xl border border-green-100 flex items-center justify-center text-green-900/40">
                <Icons.User className="w-12 h-12" />
              </div>
              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-green-950">John Kwamina Gyimah</h2>
                  <p className="text-gold font-semibold mt-1">Founder and Executive Director</p>
                </div>
                <p className="text-muted leading-relaxed">
                  John Kwamina Gyimah is an agricultural extension and rural-development professional with more than 36 years of experience in research, extension, programme delivery and community development. His academic and professional background includes an MPhil in Agricultural Extension, a BSc in Agricultural Extension, postgraduate training in agricultural administration and participation in the Cochran Agricultural Fellowship Program in the United States.
                </p>
                <Button href="/leadership" variant="secondary">
                  Meet the Leadership & Team
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 bg-green-950 text-center px-4">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white text-balance">
              Let us build practical solutions together
            </h2>
            <p className="text-lg text-green-100 text-balance leading-relaxed">
              Are you planning an agricultural training programme, livelihood intervention, community project or technical study? Speak with ARATC about your objectives, target group and location.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Button href="/contact?type=request-training" variant="primary" size="lg" className="bg-gold text-green-950 hover:bg-gold/90">
                Request Training
              </Button>
              <Button href="/contact?type=discuss-partnership" variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
                Discuss a Partnership
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
