import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import * as Icons from "lucide-react";

export const metadata = {
  title: "Leadership & Team",
  description: "Meet the Founder, Executive Director, Board of Directors and technical team at ARATC.",
};

export default function LeadershipPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
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

      {/* Executive Director */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              <div className="aspect-[3/4] bg-cream rounded-3xl border border-green-100 overflow-hidden flex flex-col items-center justify-center text-green-900/40 p-8 text-center shadow-md">
                <Icons.User className="w-20 h-20 mb-4" />
                <span className="font-medium">Formal Portrait</span>
              </div>
              <div className="md:col-span-2 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-display font-bold text-green-950">John Kwamina Gyimah</h2>
                  <p className="text-xl font-medium text-gold">Founder and Executive Director</p>
                </div>
                <div className="prose prose-green max-w-none text-muted leading-relaxed">
                  <p>
                    John Kwamina Gyimah is an agricultural extension and rural-development professional with more than 36 years of experience in research, extension, programme delivery and community development.
                  </p>
                  <p>
                    His academic and professional background includes an MPhil in Agricultural Extension, a BSc in Agricultural Extension, postgraduate training in agricultural administration and participation in the Cochran Agricultural Fellowship Program in the United States.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Board & Team Placholder */}
      <section className="py-20 bg-green-50 border-t border-green-100">
        <Container>
          <SectionHeading 
            title="Board of Directors & Technical Team" 
            subtitle="Our seven-member Board of Directors provides oversight and strategic direction, while our technical team manages project coordination, crops, animal production, and value chains."
            centered
            className="mb-16 mx-auto"
          />

          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 border border-green-100 text-center shadow-sm">
            <Icons.Users className="w-16 h-16 text-green-700 mx-auto mb-6" />
            <h3 className="text-xl font-bold text-green-950 mb-4">Team Profiles Pending Confirmation</h3>
            <p className="text-muted leading-relaxed">
              Detailed profiles for the Board of Directors and technical team members will be published here once their names, roles, and current portfolios are officially confirmed by management.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
