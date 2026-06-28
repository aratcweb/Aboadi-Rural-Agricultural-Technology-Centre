import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import * as Icons from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Us",
  description: "Learn about Aboadi Rural Agricultural Technology Centre (ARATC), our history, vision, mission, and governance.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* Hero / Page Intro */}
      <section className="bg-green-50 py-16 md:py-24 border-b border-green-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-green-950">About ARATC</h1>
            <p className="text-xl text-muted leading-relaxed">
              Aboadi Rural Agricultural Technology Centre (ARATC) is a non-governmental, non-profit organization registered in 2019 with the Registrar General’s Department.
            </p>
          </div>
        </Container>
      </section>

      {/* Institutional Overview & Legal Profile */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <SectionHeading 
                title="Rooted in Community Development" 
              />
              <div className="prose prose-green max-w-none text-muted text-lg leading-relaxed">
                <p>
                  Based in Apremdo in Ghana’s Western Region, ARATC works with communities, institutions and development partners to strengthen agriculture, livelihoods, enterprise and resilience through practical training and technical support.
                </p>
              </div>
              <div className="pt-6 border-t border-green-100 flex flex-wrap gap-4">
                <Button href="/projects" variant="primary">View Our Projects</Button>
                <Button href="/contact" variant="outline">Contact Office</Button>
              </div>
            </div>

            {/* Legal Profile Card */}
            <div className="bg-cream rounded-3xl p-8 md:p-10 border border-green-100/50">
              <h3 className="text-xl font-bold text-green-950 mb-6 flex items-center gap-2">
                <Icons.ShieldCheck className="w-6 h-6 text-green-700" />
                Legal Profile
              </h3>
              <dl className="space-y-4 text-sm">
                <div className="grid grid-cols-3 gap-4 pb-4 border-b border-green-100">
                  <dt className="text-green-950 font-medium">Full Name</dt>
                  <dd className="col-span-2 text-muted">Aboadi Rural Agricultural Technology Centre</dd>
                </div>
                <div className="grid grid-cols-3 gap-4 pb-4 border-b border-green-100">
                  <dt className="text-green-950 font-medium">Status</dt>
                  <dd className="col-span-2 text-muted">Non-governmental, non-profit organization</dd>
                </div>
                <div className="grid grid-cols-3 gap-4 pb-4 border-b border-green-100">
                  <dt className="text-green-950 font-medium">Registration</dt>
                  <dd className="col-span-2 text-muted">Registered in 2019</dd>
                </div>
                <div className="grid grid-cols-3 gap-4 pb-4 border-b border-green-100">
                  <dt className="text-green-950 font-medium">Location</dt>
                  <dd className="col-span-2 text-muted">Apremdo, Western Region, Ghana</dd>
                </div>
                <div className="text-xs text-green-900/60 mt-6 pt-2">
                  * Full registration numbers, tax and PPA details are available upon official request.
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-green-950 text-white text-center">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto">
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto bg-green-900 rounded-2xl flex items-center justify-center">
                <Icons.Eye className="w-8 h-8 text-gold" />
              </div>
              <h2 className="text-3xl font-display font-bold">Our Vision</h2>
              <p className="text-green-100 text-lg leading-relaxed">
                To be a first-class organization in improving living standard of rural and urban poor.
              </p>
            </div>
            <div className="space-y-6">
              <div className="w-16 h-16 mx-auto bg-green-900 rounded-2xl flex items-center justify-center">
                <Icons.Target className="w-8 h-8 text-gold" />
              </div>
              <h2 className="text-3xl font-display font-bold">Our Mission</h2>
              <p className="text-green-100 text-lg leading-relaxed">
                To empower the rural and urban poor by providing capacity, strategies and products to enhance their socio-economic well-being and also inspire them to cultivate can do attitude with enthusiasm.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-cream">
        <Container>
          <SectionHeading 
            title="Our Core Values" 
            centered 
            className="mb-16"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: "Professionalism", icon: "Award" },
              { label: "Excellence", icon: "Star" },
              { label: "Integrity", icon: "Shield" },
              { label: "Innovation", icon: "Lightbulb" },
              { label: "Collaboration", icon: "Users" },
              { label: "Commitment", icon: "Heart" },
              { label: "Transparency", icon: "Search" },
            ].map((value) => {
              const Icon = Icons[value.icon] || Icons.CheckCircle;
              return (
                <div key={value.label} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-green-100/50">
                  <Icon className="w-8 h-8 mx-auto text-green-700 mb-4" />
                  <span className="font-bold text-green-950">{value.label}</span>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Governance Preview */}
      <section className="py-20 md:py-28 bg-white border-t border-green-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Governance & Leadership Image */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-green-100 shadow-sm">
              <Image 
                src="/image 31.webp" 
                alt="ARATC Governance and Leadership"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <SectionHeading 
                title="Governance & Leadership" 
                subtitle="ARATC is guided by a seven-member Board of Directors providing oversight and strategic direction."
              />
              <p className="text-muted leading-relaxed">
                The day-to-day operations and project delivery are managed by our technical team, led by our Founder and Executive Director, who brings over 36 years of experience in agricultural extension and rural development.
              </p>
              <Button href="/leadership" variant="secondary" className="mt-4">
                Meet Our Leadership
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-green-50 text-center border-t border-green-100">
        <Container>
          <h2 className="text-3xl font-display font-bold text-green-950 mb-6">Explore Our Work</h2>
          <div className="flex justify-center gap-4">
            <Button href="/services" variant="primary">What We Do</Button>
            <Button href="/projects" variant="outline">Projects & Impact</Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
