import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import * as Icons from "lucide-react";
import Image from "next/image";
import { teamMembers } from "@/content/team";

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
              Aboadi Rural Agricultural Technology Centre (ARATC) is a Ghanaian non-governmental, non-profit organization dedicated to improving the living conditions of rural and poor communities.
            </p>
          </div>
        </Container>
      </section>

      {/* Who We Are & Legal Profile */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <SectionHeading 
                title="Who We Are" 
              />
              <div className="prose prose-green max-w-none text-muted text-lg leading-relaxed space-y-6">
                <p>
                  Aboadi Rural Agricultural Technology Centre (ARATC) is a non-governmental and non-profit organization legally registered in Ghana since 2019 under the Companies Act 2019 (Act 992) as a company limited by guarantee.
                </p>
                <p>
                  ARATC operates from Takoradi in the Western Region and Aboadi in the Ahanta West District. The organization focuses on livelihood training, agricultural consultancy, plantation establishment and management, project appraisal and evaluation, and research.
                </p>
                <p>
                  We are supported by a multidisciplinary network of professionals and specialists with experience in consulting, training, research, agribusiness development, community development, monitoring and evaluation, and project management.
                </p>
              </div>
            </div>

            {/* Legal Profile Card */}
            <div className="bg-cream rounded-3xl p-8 md:p-10 border border-green-100/50 shadow-xs">
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
                  <dt className="text-green-950 font-medium">Acronym</dt>
                  <dd className="col-span-2 text-muted font-bold text-green-800">ARATC</dd>
                </div>
                <div className="grid grid-cols-3 gap-4 pb-4 border-b border-green-100">
                  <dt className="text-green-950 font-medium">Status</dt>
                  <dd className="col-span-2 text-muted">Non-Governmental & Non-Profit Organization</dd>
                </div>
                <div className="grid grid-cols-3 gap-4 pb-4 border-b border-green-100">
                  <dt className="text-green-950 font-medium">Legal Form</dt>
                  <dd className="col-span-2 text-muted">Company Limited by Guarantee (Act 992)</dd>
                </div>
                <div className="grid grid-cols-3 gap-4 pb-4 border-b border-green-100">
                  <dt className="text-green-950 font-medium">Reg. Number</dt>
                  <dd className="col-span-2 text-muted font-mono font-bold">CG032470423</dd>
                </div>
                <div className="grid grid-cols-3 gap-4 pb-4 border-b border-green-100">
                  <dt className="text-green-950 font-medium">Established</dt>
                  <dd className="col-span-2 text-muted">Registered in 2019</dd>
                </div>
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-28 bg-green-50/50 border-t border-b border-green-100">
        <Container>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
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
                  <span className="text-xs font-bold uppercase tracking-wider text-green-700">Founder Profile</span>
                  <h2 className="text-3xl font-display font-bold text-green-950">John Kwamina Gyimah</h2>
                  <p className="text-xl font-medium text-gold">Founder & Executive Director</p>
                </div>
                <div className="prose prose-green max-w-none text-muted leading-relaxed text-lg">
                  <p>
                    Aboadi Rural Agricultural Technology Centre was founded by John Kwamina Gyimah, a senior agro-consultant and agricultural extension expert with several years of experience in alternative livelihood ventures, agribusiness development, and project management.
                  </p>
                  <p>
                    Over a career spanning more than 36 years, John has led and coordinated multiple agricultural extension programmes, feasibility studies, and livelihood training interventions, shaping ARATC into a credible developmental partner in Ghana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Vision, Mission & Objectives */}
      <section className="py-20 md:py-28 bg-green-950 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Vision & Mission */}
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex p-3 bg-green-900 rounded-xl">
                  <Icons.Eye className="w-8 h-8 text-gold" />
                </div>
                <h2 className="text-3xl font-display font-bold !text-white">Our Vision</h2>
                <p className="text-green-105 text-lg leading-relaxed">
                  To be a first-class organization in improving the living conditions of rural and poor communities.
                </p>
              </div>

              <div className="space-y-6 pt-4 border-t border-green-900">
                <div className="inline-flex p-3 bg-green-900 rounded-xl">
                  <Icons.Target className="w-8 h-8 text-gold" />
                </div>
                <h2 className="text-3xl font-display font-bold !text-white">Our Mission</h2>
                <p className="text-green-105 text-lg leading-relaxed">
                  ARATC seeks to empower the rural poor and disadvantaged by providing the means, strategies, and products that enhance their economic and social endeavors and assist them to overcome challenging situations with enthusiasm.
                </p>
              </div>
            </div>

            {/* Corporate Objectives */}
            <div className="bg-green-900/40 rounded-3xl p-8 border border-green-900 space-y-6 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-display font-bold !text-white mb-4">Corporate Objective</h2>
                <p className="text-green-100 text-lg leading-relaxed mb-6">
                  To promote and ensure sustainable development in Africa, particularly Ghana.
                </p>
                
                <h3 className="text-lg font-bold !text-gold uppercase tracking-wider mb-4">Specific Objectives</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Icons.CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-green-100">Empower rural and disadvantaged persons, especially women, through livelihood skills and entrepreneurial training.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icons.CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                    <span className="text-green-100">Build the capacity of target farmers in agricultural improvement practices to promote yield, ensure food security, and sustain the environment.</span>
                  </li>
                </ul>
              </div>
              <div className="text-xs text-green-200/50 mt-6">
                * Mapped to support UN Sustainable Development Goals: Goal 1 (No Poverty), Goal 5 (Gender Equality), and Goal 13 (Climate Action).
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values & How We Work */}
      <section className="py-20 md:py-28 bg-cream">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Core Values */}
            <div className="space-y-8">
              <SectionHeading 
                title="Our Core Values" 
                subtitle="The principles that guide and govern ARATC's daily interactions with communities and stakeholders."
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: "Integrity", icon: "Shield", desc: "Honesty and alignment in actions." },
                  { label: "Professionalism", icon: "Award", desc: "Rigorous standards and expertise." },
                  { label: "Respect for Diversity", icon: "Users", desc: "Value and inclusion for all groups." }
                ].map((value) => {
                  const Icon = Icons[value.icon] || Icons.CheckCircle;
                  return (
                    <div key={value.label} className="bg-white p-6 rounded-2xl shadow-xs border border-green-100 text-center">
                      <Icon className="w-8 h-8 mx-auto text-green-700 mb-4" />
                      <span className="font-bold text-green-950 block mb-2">{value.label}</span>
                      <p className="text-xs text-muted leading-relaxed">{value.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* How We Work */}
            <div className="space-y-8">
              <SectionHeading 
                title="How We Work" 
                subtitle="Our development approach and project methodology."
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: "Bottom-up Delivery", desc: "Interventions are designed and delivered directly at the grassroots level." },
                  { title: "Needs Assessment", desc: "All projects are grounded on thorough field assessments of local needs." },
                  { title: "Participatory Development", desc: "Beneficiaries are active partners in planning and execution." },
                  { title: "Inclusive Development", desc: "Ensuring youth, women, and PWDs are fully included in benefits." }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl shadow-xs border border-green-100 flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-green-50 text-green-700 flex items-center justify-center shrink-0 font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-green-950 text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Staffing, Governance & Logistics */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <SectionHeading 
            title="Organizational Capacity" 
            centered
            className="mb-16 mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Staffing */}
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100 hover:shadow-md transition-shadow">
              <Icons.CheckCircle2 className="w-8 h-8 text-green-700 mb-6" />
              <h3 className="text-xl font-bold text-green-950 mb-3">Multidisciplinary Staffing</h3>
              <p className="text-sm text-muted leading-relaxed">
                ARATC has a multidisciplinary staff of 12, including an Executive Director, project coordinator, business development officer, accounts officer, and technical field officers with expertise in M&E, community development, forestry, environment, crop/animal husbandry, and project management.
              </p>
            </div>

            {/* Governance */}
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100 hover:shadow-md transition-shadow">
              <Icons.Users className="w-8 h-8 text-green-700 mb-6" />
              <h3 className="text-xl font-bold text-green-950 mb-3">Strategic Governance</h3>
              <p className="text-sm text-muted leading-relaxed">
                We have an active 7-member Board of Directors made up of professionals with rich experience in Agricultural Extension, Agribusiness, Microfinance, Small and Medium Enterprise (SME) development, and Community Development. The Board provides strategic oversight and guidance.
              </p>
            </div>

            {/* Logistics */}
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100 hover:shadow-md transition-shadow">
              <Icons.Truck className="w-8 h-8 text-green-700 mb-6" />
              <h3 className="text-xl font-bold text-green-950 mb-3">Logistical Capability</h3>
              <p className="text-sm text-muted leading-relaxed">
                Our main office is located at Apremdo New Market in EKMA in the Western Region, fully equipped with communication equipment. For field work across terrains, ARATC owns a utility pickup truck, a saloon car, and a fleet of field motorbikes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Meet Our Technical Team Grid */}
      <section className="py-20 md:py-28 bg-green-50/20 border-t border-green-100">
        <Container>
          <SectionHeading 
            title="Meet Our Technical Team" 
            subtitle="ARATC is powered by a team of dedicated agricultural, financial, and environmental experts."
            centered 
            className="mb-16 mx-auto"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="group bg-white rounded-3xl p-4 border-2 border-green-100/70 hover:border-green-300 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full"
              >
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-5 bg-cream">
                  <Image 
                    src={member.image} 
                    alt={member.role} 
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="w-full text-center py-2 px-3 bg-green-900 text-white rounded-xl font-bold text-sm tracking-wide mb-4">
                  {member.role}
                </div>
                <p className="text-muted text-sm leading-relaxed text-left flex-1">
                  {member.description}
                </p>
              </div>
            ))}
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
