import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import * as Icons from "lucide-react";

export const metadata = {
  title: "Partners & Collaborators",
  description: "Organizations ARATC has worked with through selected projects and assignments.",
};

export default function PartnersPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      <section className="bg-green-50 py-16 md:py-24 border-b border-green-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-green-950">Partners & Collaborators</h1>
            <p className="text-xl text-muted leading-relaxed">
              Organizations ARATC has worked with through selected projects and assignments.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-12 bg-cream p-6 rounded-2xl border border-green-100 text-sm text-green-900/80">
            <strong>Disclaimer:</strong> The relationships displayed below may relate to specific past assignments and should not automatically be interpreted as ongoing partnerships.
          </div>

          <div className="space-y-20">
            {/* International & Development */}
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-green-950 border-b border-green-100 pb-4">
                International & Development Partners
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["World Vision International", "Rainforest Alliance", "Cocoa Life", "UNDP", "Solidaridad", "FAO", "World Bank"].map((partner) => (
                  <div key={partner} className="h-32 bg-white rounded-2xl border border-green-100 shadow-sm flex items-center justify-center p-6 text-center hover:border-green-300 transition-colors">
                    <span className="font-semibold text-green-900/70 text-sm">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Government */}
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-green-950 border-b border-green-100 pb-4">
                Government & Public Institutions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["MoFA", "EPA", "Ghana Enterprise Agency", "Ghana Armed Forces"].map((partner) => (
                  <div key={partner} className="h-32 bg-white rounded-2xl border border-green-100 shadow-sm flex items-center justify-center p-6 text-center hover:border-green-300 transition-colors">
                    <span className="font-semibold text-green-900/70 text-sm">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Private Sector */}
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-green-950 border-b border-green-100 pb-4">
                Private Sector
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {["Benso Oil Palm Plantation", "OLAM", "Plantation Sofnaf Ghana", "Mondelez"].map((partner) => (
                  <div key={partner} className="h-32 bg-white rounded-2xl border border-green-100 shadow-sm flex items-center justify-center p-6 text-center hover:border-green-300 transition-colors">
                    <span className="font-semibold text-green-900/70 text-sm">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Structures */}
            <div className="space-y-8">
              <h2 className="text-2xl font-display font-bold text-green-950 border-b border-green-100 pb-4">
                Community Structures
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 rounded-2xl border border-green-100 p-8 flex items-start gap-4">
                  <Icons.Users className="w-8 h-8 text-green-700 shrink-0" />
                  <div>
                    <h3 className="font-bold text-green-950 mb-2">Local Authorities & Groups</h3>
                    <p className="text-sm text-muted">
                      We continuously collaborate with District Assemblies, community-based organizations, cooperatives, farmer groups, and local leaders to ensure interventions are context-appropriate and sustainable.
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
            <h2 className="text-3xl md:text-4xl font-display font-bold">Partner with an experienced local organization</h2>
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
