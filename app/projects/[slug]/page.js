import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { projects, getProjectBySlug } from "@/content/projects";
import * as Icons from "lucide-react";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  
  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: project.title,
    description: project.challenge,
  };
}

export default async function ProjectCaseStudyPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* Project Hero */}
      <section className="bg-green-50 py-16 md:py-24 border-b border-green-100">
        <Container>
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-white border border-green-100 rounded-full text-xs font-semibold text-green-900 uppercase tracking-wider">
                {project.theme}
              </span>
              <span className="px-3 py-1 bg-white border border-green-100 rounded-full text-xs font-semibold text-green-900 uppercase tracking-wider flex items-center gap-1">
                <Icons.MapPin className="w-3 h-3" /> {project.location}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-green-950 leading-tight">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium text-muted">
              <div className="flex items-center gap-2">
                <Icons.Calendar className="w-4 h-4 text-gold" />
                <span>{project.startDate} — {project.endDate}</span>
              </div>
              <div className="flex items-center gap-2">
                <Icons.Briefcase className="w-4 h-4 text-gold" />
                <span>Partner: {project.partner}</span>
              </div>
              {project.beneficiaryCount && (
                <div className="flex items-center gap-2">
                  <Icons.Users className="w-4 h-4 text-gold" />
                  <span>{project.beneficiaryCount} Beneficiaries</span>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Image */}
      <section className="-mt-8 relative z-10">
        <Container>
          <div className="aspect-[21/9] bg-cream rounded-3xl border border-green-100 shadow-md flex items-center justify-center text-green-900/40">
            <Icons.Image className="w-16 h-16" />
            <span className="ml-4 font-medium text-lg">Main Field Image</span>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24">
            
            {/* Story */}
            <div className="lg:col-span-2 space-y-16">
              
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-green-950">The Challenge</h2>
                <p className="text-lg text-muted leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-green-950">ARATC&apos;s Response</h2>
                <p className="text-lg text-muted leading-relaxed">
                  {project.response}
                </p>
              </div>

              <div className="space-y-6">
                <h2 className="text-3xl font-display font-bold text-green-950">Activities Delivered</h2>
                <ul className="space-y-4">
                  {project.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-green-700 font-bold text-sm">{i + 1}</span>
                      </div>
                      <span className="text-muted text-lg">{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Photo Story Gallery */}
              <div className="space-y-6">
                <h2 className="text-2xl font-display font-bold text-green-950">Project Gallery</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="aspect-[4/3] bg-cream rounded-2xl border border-green-100 flex items-center justify-center text-green-900/40">
                      <Icons.Camera className="w-8 h-8" />
                    </div>
                  ))}
                </div>
              </div>
              
            </div>

            {/* Sidebar Results */}
            <div className="space-y-8">
              <div className="bg-green-950 text-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-xl font-display font-bold mb-6 text-gold flex items-center gap-2">
                  <Icons.TrendingUp className="w-6 h-6" />
                  Verified Results
                </h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-green-100/70 mb-3">Outputs</h4>
                    <ul className="space-y-3">
                      {project.outputs.map((output, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Icons.Check className="w-5 h-5 text-gold shrink-0" />
                          <span className="text-sm text-green-50">{output}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-green-900/50">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-green-100/70 mb-3">Outcomes</h4>
                    <ul className="space-y-3">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Icons.Star className="w-5 h-5 text-gold shrink-0" />
                          <span className="text-sm text-green-50">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-3xl p-8 border border-green-100">
                <h3 className="text-lg font-bold text-green-950 mb-2">Interested in similar support?</h3>
                <p className="text-muted text-sm mb-6">
                  We can design and implement comparable interventions for your target communities.
                </p>
                <Button href="/contact?type=discuss-partnership" variant="outline" className="w-full">
                  Discuss a Partnership
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
