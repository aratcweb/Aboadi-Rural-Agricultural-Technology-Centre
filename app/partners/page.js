import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import * as Icons from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Partners & Collaborators",
  description: "Organizations ARATC has worked with through selected projects and assignments.",
};

export default function PartnersPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* Hero */}
      <section className="bg-green-50 py-16 md:py-24 border-b border-green-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-green-950">Partners & Collaborators</h1>
            <p className="text-xl text-muted leading-relaxed">
              ARATC collaborates with international agencies, government bodies, private enterprises, and local governments to deliver community-centered interventions.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-12 bg-cream p-6 rounded-2xl border border-green-100 text-sm text-green-900/85">
            <strong>Disclaimer:</strong> The relationships displayed below relate to specific projects and completed assignments. They demonstrate ARATC&apos;s active institutional collaborations.
          </div>

          <div className="space-y-20">
            {/* International & Development Partners */}
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-green-950 border-b border-green-100 pb-4 flex items-center gap-2">
                <Icons.Globe className="w-6 h-6 text-green-700" />
                International & Development Partners
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "World Vision International", logo: "/partners/world_vision_international.svg" },
                  { name: "Rainforest Alliance", logo: "/partners/rainforest_alliance.svg" },
                  { name: "Cocoa Life", logo: "/partners/cocoa_life.svg" },
                  { name: "UNDP", logo: "/partners/undp.svg" },
                  { name: "Solidaridad", logo: "/partners/solidaridad.png" },
                  { name: "FAO", logo: "/partners/fao.svg" },
                  { name: "World Bank", logo: "/partners/world_bank.svg" },
                  { name: "Mondelez", logo: "/partners/mondelez.svg" }
                ].map((partner) => (
                  <div key={partner.name} className="h-36 bg-white rounded-2xl border border-green-100 shadow-xs flex flex-col items-center justify-center p-6 text-center hover:border-green-300 hover:shadow-md transition-all duration-300 gap-3 group">
                    <div className="relative w-full h-14 flex items-center justify-center">
                      <Image 
                        src={partner.logo} 
                        alt={`${partner.name} Logo`} 
                        width={140}
                        height={56}
                        className="max-h-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="font-semibold text-green-900/60 text-xs group-hover:text-green-900 transition-colors">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Government Agencies */}
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-green-950 border-b border-green-100 pb-4 flex items-center gap-2">
                <Icons.Building2 className="w-6 h-6 text-green-700" />
                Government Agencies
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { name: "Ministry of Food and Agriculture (MoFA)", logo: "/partners/ministry_of_food_and_agriculture_mofa.svg" },
                  { name: "Environmental Protection Agency (EPA)", logo: "/partners/environmental_protection_agency_epa.svg" },
                  { name: "Ghana Enterprise Agency", logo: "/partners/ghana_enterprise_agency.svg" },
                  { name: "Ghana Armed Forces (Resettlement Directorate)", logo: "/partners/ghana_armed_forces_resettlement_directorate.svg" }
                ].map((partner) => (
                  <div key={partner.name} className="h-36 bg-white rounded-2xl border border-green-100 shadow-xs flex flex-col items-center justify-center p-6 text-center hover:border-green-300 hover:shadow-md transition-all duration-300 gap-3 group">
                    <div className="relative w-full h-14 flex items-center justify-center">
                      <Image 
                        src={partner.logo} 
                        alt={`${partner.name} Logo`} 
                        width={140}
                        height={56}
                        className="max-h-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="font-semibold text-green-900/60 text-xs group-hover:text-green-900 transition-colors">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Sector */}
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-green-950 border-b border-green-100 pb-4 flex items-center gap-2">
                <Icons.Briefcase className="w-6 h-6 text-green-700" />
                Private Sector
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Benso Oil Palm Plantation (BOPP)", logo: "/partners/benso_oil_palm_plantation_bopp.svg" },
                  { name: "OLAM", logo: "/partners/olam.svg" },
                  { name: "Plantation Socfinaf Ghana", logo: "/partners/plantation_socfinaf_ghana.svg" }
                ].map((partner) => (
                  <div key={partner.name} className="h-36 bg-white rounded-2xl border border-green-100 shadow-xs flex flex-col items-center justify-center p-6 text-center hover:border-green-300 hover:shadow-md transition-all duration-300 gap-3 group">
                    <div className="relative w-full h-14 flex items-center justify-center">
                      <Image 
                        src={partner.logo} 
                        alt={`${partner.name} Logo`} 
                        width={140}
                        height={56}
                        className="max-h-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="font-semibold text-green-900/60 text-xs group-hover:text-green-900 transition-colors">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Structures */}
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-green-950 border-b border-green-100 pb-4 flex items-center gap-2">
                <Icons.MapPin className="w-6 h-6 text-green-700" />
                Local Structures
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { name: "Sekondi-Takoradi Metropolitan Assembly (STMA)", logo: "/partners/sekondi_takoradi_metropolitan_assembly_stma.svg" },
                  { name: "Effia Kwesimintsim Municipal Assembly (EKMA)", logo: "/partners/effia_kwesimintsim_municipal_assembly_ekma.svg" }
                ].map((partner) => (
                  <div key={partner.name} className="h-36 bg-white rounded-2xl border border-green-100 shadow-xs flex flex-col items-center justify-center p-6 text-center hover:border-green-300 hover:shadow-md transition-all duration-300 gap-3 group">
                    <div className="relative w-full h-14 flex items-center justify-center">
                      <Image 
                        src={partner.logo} 
                        alt={`${partner.name} Logo`} 
                        width={140}
                        height={56}
                        className="max-h-full w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="font-semibold text-green-900/60 text-xs group-hover:text-green-900 transition-colors">{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Structures */}
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-green-950 border-b border-green-100 pb-4 flex items-center gap-2">
                <Icons.Users className="w-6 h-6 text-green-700" />
                Community Collaboration
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-2xl border border-green-100 p-8 flex items-start gap-4">
                  <Icons.UserCheck className="w-8 h-8 text-green-700 shrink-0" />
                  <div>
                    <h3 className="font-bold text-green-950 mb-2">Local Authorities & Groups</h3>
                    <p className="text-sm text-muted">
                      We continuously collaborate with District Assemblies, traditional councils, community-based organizations, agricultural cooperatives, farmer groups, and local youth/women leaders to ensure our interventions are context-appropriate, needs-driven, and highly sustainable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-24 bg-green-950 text-white text-center">
        <Container>
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold !text-white">Partner with an experienced local organization</h2>
            <p className="text-lg text-green-100 leading-relaxed">
              ARATC collaborates with development organizations, public institutions, companies and community structures to design and deliver practical agricultural, livelihood and rural-development interventions.
            </p>
            <div className="pt-6">
              <Button href="/contact?type=discuss-partnership" variant="primary" size="lg" className="bg-gold text-green-950 hover:bg-gold/90 border-none">
                Contact us to discuss support
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
