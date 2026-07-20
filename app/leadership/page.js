import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import * as Icons from "lucide-react";
import Image from "next/image";
import { teamMembers } from "@/content/team";

export const metadata = {
  title: "Leadership & Team",
  description: "Meet the Founder, Executive Director, Board of Directors and technical team at ARATC.",
  alternates: {
    canonical: "/leadership",
  },
};

export default function LeadershipPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* Hero */}
      <section className="bg-green-50 py-16 md:py-24 border-b border-green-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-green-950">Leadership & Team</h1>
            <p className="text-xl text-muted leading-relaxed">
              ARATC is guided by experienced professionals committed to agricultural extension, rural development, and community impact.
            </p>
          </div>
        </Container>
      </section>

      {/* Executive Director / Founder */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <div className="relative aspect-[3/4] bg-cream rounded-3xl border border-green-100 overflow-hidden shadow-md">
                <Image
                  src="/team/executive_director.png"
                  alt="John Kwamina Gyimah"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-green-700">Executive Director</span>
                  <h2 className="text-3xl font-display font-bold text-green-950">John Kwamina Gyimah</h2>
                  <p className="text-xl font-medium text-gold">Founder & Executive Director</p>
                </div>
                <div className="prose prose-green max-w-none text-muted leading-relaxed text-lg">
                  <p>
                    John Kwamina Gyimah is an agricultural extension and rural development professional with more than 36 years of experience in research, agricultural extension advisory, programme delivery, and community development.
                  </p>
                  <p>
                    His academic and professional background includes an MPhil in Agricultural Extension, a BSc in Agricultural Extension, postgraduate training in agricultural administration, and participation in the Cochran Agricultural Fellowship Program in the United States. 
                  </p>
                  <p>
                    Under his leadership, ARATC has successfully designed and executed livelihood skills interventions and agricultural consultancy assignments for international organizations, private sector groups, and government agencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Board & Technical Team */}
      <section className="py-20 bg-green-50 border-t border-green-100">
        <Container>
          <SectionHeading 
            title="Board of Directors & Technical Team" 
            subtitle="Our active Board of Directors provides strategic direction and compliance oversight, while our technical team manages project delivery and capacity building."
            centered
            className="mb-16 mx-auto"
          />

          {/* Technical Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {teamMembers.filter(member => member.id !== "executive-director").map((member) => (
              <div 
                key={member.id} 
                className="group bg-white rounded-3xl p-5 border-2 border-green-100/70 hover:border-green-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
              >
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-cream">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h4 className="text-lg font-bold text-green-950 mb-1 text-center">
                  {member.name}
                </h4>
                <div className="w-full text-center py-1.5 px-3 bg-green-50 text-green-800 rounded-lg font-semibold text-xs tracking-wider mb-4 uppercase">
                  {member.role}
                </div>
                <p className="text-muted text-sm leading-relaxed text-left flex-1">
                  {member.description}
                </p>
              </div>
            ))}
          </div>

          {/* Board of Directors Details */}
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 border border-green-100 text-center shadow-sm">
            <h3 className="text-xl font-bold text-green-950 mb-4 flex items-center justify-center gap-2">
              <Icons.Users className="w-6 h-6 text-green-700" />
              Board of Directors
            </h3>
            <p className="text-muted text-base leading-relaxed max-w-2xl mx-auto mb-6 font-medium">
              ARATC has an active seven-member Board of Directors. The Board includes professionals with experience in Agricultural Extension, Agribusiness, Microfinance, Small and Medium Enterprise development, and Community Development, and takes an active oversight role in the strategic running and performance of the organization.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-semibold text-green-900 text-left max-w-lg mx-auto">
              <span className="flex items-center gap-2"><Icons.Check className="w-4.5 h-4.5 text-gold shrink-0" /> Agricultural Extension</span>
              <span className="flex items-center gap-2"><Icons.Check className="w-4.5 h-4.5 text-gold shrink-0" /> Agribusiness</span>
              <span className="flex items-center gap-2"><Icons.Check className="w-4.5 h-4.5 text-gold shrink-0" /> Microfinance</span>
              <span className="flex items-center gap-2"><Icons.Check className="w-4.5 h-4.5 text-gold shrink-0" /> SME Development</span>
              <span className="flex items-center gap-2"><Icons.Check className="w-4.5 h-4.5 text-gold shrink-0" /> Community Development</span>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
