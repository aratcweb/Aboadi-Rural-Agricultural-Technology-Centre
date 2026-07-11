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

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-green-950 text-white border-b border-green-900">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="space-y-6">
              <div className="inline-flex p-3 bg-green-900 rounded-xl">
                <Icons.Eye className="w-8 h-8 text-gold" />
              </div>
              <h2 className="text-3xl font-display font-bold !text-white">Our Vision</h2>
              <p className="text-green-100 text-lg leading-relaxed">
                To create thriving communities where sustainable green livelihoods, innovative entrepreneurship, and resilient farm systems empower people to prosper while safeguarding the environment for future generations.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-6">
              <div className="inline-flex p-3 bg-green-900 rounded-xl">
                <Icons.Target className="w-8 h-8 text-gold" />
              </div>
              <h2 className="text-3xl font-display font-bold !text-white">Our Mission</h2>
              <p className="text-green-100 text-lg leading-relaxed">
                ARATC exists to champion the plight of rural people by equipping them with practical skills, knowledge, and opportunities in agriculture and entrepreneurship. Through training, research, and plantation management, we foster inclusive growth, strengthen food security, and promote environmentally responsible practices that transform rural lives and build lasting prosperity.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Strategic Objectives */}
      <section className="py-20 md:py-28 bg-white border-b border-green-100">
        <Container>
          <SectionHeading 
            title="Strategic Objectives" 
            subtitle="The six core pillars guiding our programs, training, partnerships, and service delivery."
            centered
            className="mb-16 mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Capacity Building & Training",
                icon: "GraduationCap",
                items: [
                  "Deliver practical agricultural and entrepreneurship training tailored to rural communities and special groups.",
                  "Strengthen farm-management skills through hands-on demonstrations and mentorship."
                ]
              },
              {
                title: "Research & Innovation",
                icon: "Lightbulb",
                items: [
                  "Conduct applied research to improve productivity, sustainability, and resilience in rural farming systems.",
                  "Promote innovative plantation-management techniques and green-livelihood models."
                ]
              },
              {
                title: "Community Empowerment & Inclusion",
                icon: "Heart",
                items: [
                  "Ensure women, youth, and marginalized groups have equal access to training, resources, and leadership opportunities.",
                  "Facilitate community-driven initiatives that build ownership and long-term impact."
                ]
              },
              {
                title: "Sustainable Livelihoods & Environmental Stewardship",
                icon: "Leaf",
                items: [
                  "Champion environmentally responsible practices that conserve natural resources and promote climate-smart agriculture.",
                  "Support diversified income streams that reduce vulnerability and strengthen household resilience."
                ]
              },
              {
                title: "Partnerships & Stakeholder Engagement",
                icon: "Handshake",
                items: [
                  "Collaborate with traditional leaders, local authorities, and development partners.",
                  "Build networks connecting rural farmers to markets, finance, and policy-advocacy platforms."
                ]
              },
              {
                title: "Institutional Excellence & Accountability",
                icon: "Award",
                items: [
                  "Uphold transparency, integrity, and accountability.",
                  "Continuously improve organizational systems and measurable service delivery."
                ]
              }
            ].map((obj, index) => {
              const Icon = Icons[obj.icon] || Icons.CheckCircle2;
              return (
                <div key={index} className="bg-green-50/30 p-8 rounded-3xl border border-green-100 hover:shadow-md transition-shadow flex flex-col">
                  <div className="w-12 h-12 bg-green-105/10 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6 text-green-700" />
                  </div>
                  <h3 className="text-xl font-bold text-green-950 mb-4">{index + 1}. {obj.title}</h3>
                  <ul className="space-y-3 mt-auto">
                    {obj.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted leading-relaxed">
                        <Icons.Check className="w-4 h-4 text-gold shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-cream border-b border-green-100">
        <Container>
          <SectionHeading 
            title="Our Core Values" 
            subtitle="The principles that guide and govern ARATC's daily interactions with communities and stakeholders."
            centered
            className="mb-16 mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              { label: "Sustainability", icon: "Leaf", desc: "We promote green livelihoods and environmentally responsible practices that protect natural resources for future generations." },
              { label: "Empowerment", icon: "Sparkles", desc: "We equip rural people with knowledge, skills, and opportunities to build resilient and prosperous lives." },
              { label: "Innovation", icon: "Lightbulb", desc: "We embrace research, creativity, and modern farm management techniques to drive agricultural transformation." },
              { label: "Integrity", icon: "Shield", desc: "We uphold transparency, fairness, and accountability in all our engagements with communities and partners." },
              { label: "Collaboration", icon: "Handshake", desc: "We foster partnerships with stakeholders, traditional leaders, and communities to achieve shared development goals." },
              { label: "Inclusivity", icon: "HeartHandshake", desc: "We ensure that women, youth, and marginalized groups have equal access to training, resources, and opportunities." },
              { label: "Excellence", icon: "Award", desc: "We strive for the highest standards in training, plantation management, and community service delivery." }
            ].map((value) => {
              const Icon = Icons[value.icon] || Icons.CheckCircle;
              return (
                <div key={value.label} className="bg-white p-6 rounded-2xl shadow-xs border border-green-100/70 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-green-700" />
                  </div>
                  <span className="font-bold text-green-950 block mb-2">{value.label}</span>
                  <p className="text-xs text-muted leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* The ARATC Work Approach */}
      <section className="py-20 md:py-28 bg-white border-b border-green-100">
        <Container>
          <SectionHeading 
            title="The ARATC Work Approach" 
            subtitle="Our development approach is bottom-up, assessment-based, participatory, and inclusive."
            centered
            className="mb-16 mx-auto"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Bottom-up Delivery of Interventions", desc: "Interventions are designed and delivered directly at the grassroots level to address local challenges." },
              { title: "Interventions Based on Thorough Needs Assessments", desc: "All projects are grounded on thorough field assessments of local agricultural and socioeconomic needs." },
              { title: "Participatory Development", desc: "Beneficiaries and local stakeholders are active partners in project planning, resource allocation, and execution." },
              { title: "Inclusive Development", desc: "Ensuring youth, women, and marginalized groups are fully included in the training benefits and leadership." }
            ].map((item, index) => (
              <div key={index} className="bg-green-50/20 p-6 rounded-2xl border border-green-100/70 flex flex-col hover:shadow-xs transition-shadow">
                <div className="w-10 h-10 rounded-full bg-green-900 text-white flex items-center justify-center font-bold text-sm mb-4">
                  {index + 1}
                </div>
                <h4 className="font-bold text-green-950 text-sm mb-2">{item.title}</h4>
                <p className="text-xs text-muted leading-relaxed mt-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Staffing, Governance, Logistics & Funding */}
      <section className="py-20 md:py-28 bg-white">
        <Container>
          <SectionHeading 
            title="Organizational Capacity & Resources" 
            centered
            className="mb-16 mx-auto"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Staffing */}
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100 hover:shadow-md transition-shadow flex flex-col">
              <Icons.Users className="w-8 h-8 text-green-700 mb-6" />
              <h3 className="text-xl font-bold text-green-950 mb-3">Multidisciplinary Staffing</h3>
              <p className="text-sm text-muted leading-relaxed">
                ARATC currently has a multidisciplinary staff of 12, consisting of an Executive Director, one Project Coordinator, a Business Development Officer, an Accounts Officer, and technical staff. Their collective expertise includes Monitoring and Evaluation, Community Development, Environment, Agricultural practices, Agribusiness Development, and Project Management.
              </p>
            </div>

            {/* Governance */}
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100 hover:shadow-md transition-shadow flex flex-col">
              <Icons.ShieldCheck className="w-8 h-8 text-green-700 mb-6" />
              <h3 className="text-xl font-bold text-green-950 mb-3">Strategic Governance</h3>
              <p className="text-sm text-muted leading-relaxed">
                ARATC has an active seven-member Board of Directors. The Board includes professionals with experience in Agricultural Extension, Agribusiness, Microfinance, Small and Medium Enterprise development, and Community Development. The Board has an active oversight role in the strategic running and performance of the organization.
              </p>
            </div>

            {/* Logistics */}
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100 hover:shadow-md transition-shadow flex flex-col">
              <Icons.Truck className="w-8 h-8 text-green-700 mb-6" />
              <h3 className="text-xl font-bold text-green-950 mb-3">Logistical Capability</h3>
              <p className="text-sm text-muted leading-relaxed">
                ARATC has one main office at Apremdo New Market in the Effia-Kwesimintsim Municipal Assembly in the Western Region, equipped with modern communication equipment supporting effective administrative work. Additionally, ARATC owns a pickup vehicle and motorbikes that can be deployed for development work across different geographical terrains, and has partnerships with critical service providers for logistics deployment within its areas of operation.
              </p>
            </div>

            {/* Funding Sources */}
            <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100 hover:shadow-md transition-shadow flex flex-col">
              <Icons.Coins className="w-8 h-8 text-green-700 mb-6" />
              <h3 className="text-xl font-bold text-green-950 mb-3">Funding Sources</h3>
              <p className="text-sm text-muted leading-relaxed">
                ARATC draws its funding mainly from donor funds, private-sector funds, internally generated funds from fundraising activities, cash donations, and in-kind donations to execute its development projects and operations.
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
