import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { projects } from "@/content/projects";
import * as Icons from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Projects & Impact",
  description: "Explore ARATC's practical interventions and the results we deliver for farmers, women, youth and communities.",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 flex flex-col bg-white">
      {/* Hero */}
      <section className="bg-green-50 py-16 md:py-24 border-b border-green-100">
        <Container>
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-green-950">Projects & Impact</h1>
            <p className="text-xl text-muted leading-relaxed">
              We focus on evidence-based delivery. Explore our recent interventions and see how practical training transforms livelihoods.
            </p>
          </div>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-28">
        <Container>
          {/* Simple Filters Placeholder */}
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-2 rounded-full bg-green-950 text-white text-sm font-medium">All Projects</span>
            <span className="px-4 py-2 rounded-full bg-cream text-green-950 hover:bg-green-100 text-sm font-medium cursor-pointer transition-colors">Sustainable Agriculture</span>
            <span className="px-4 py-2 rounded-full bg-cream text-green-950 hover:bg-green-100 text-sm font-medium cursor-pointer transition-colors">Livelihood Skills</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-green-100 shadow-sm hover:shadow-md transition-all overflow-hidden"
              >
                {/* Image */}
                <div className="aspect-[4/3] bg-green-50 flex items-center justify-center text-green-900/40 border-b border-green-100 relative overflow-hidden">
                  {project.images && project.images.length > 0 ? (
                    <Image 
                      src={project.images[0]} 
                      alt={project.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <Icons.Image className="w-10 h-10 group-hover:scale-110 transition-transform duration-500" />
                  )}
                  <div className="absolute inset-0 bg-green-950/0 group-hover:bg-green-950/5 transition-colors z-10" />
                </div>
                
                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs font-medium text-muted mb-4">
                    <span className="flex items-center gap-1 bg-cream px-2 py-1 rounded-md text-green-900">
                      <Icons.MapPin className="w-3 h-3" /> {project.location}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-green-950 mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted text-sm line-clamp-3 mb-6 flex-1">
                    {project.challenge}
                  </p>
                  
                  <div className="pt-4 border-t border-green-50 flex items-center justify-between mt-auto">
                    <span className="text-xs font-semibold text-green-900 uppercase tracking-wider">
                      {project.theme}
                    </span>
                    <Icons.ArrowRight className="w-5 h-5 text-green-700 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
