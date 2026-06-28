export const services = [
  {
    id: "sustainable-agriculture",
    slug: "sustainable-agriculture",
    title: "Sustainable Agriculture & Food Security",
    icon: "Sprout",
    summary: "Climate-smart production, aquaculture, beekeeping, mushroom, snail, poultry, rabbit and grasscutter enterprises.",
    description: "Our sustainable agriculture training equips farmers and community groups with practical skills in modern, climate-resilient farming techniques. We focus on low-barrier entry enterprises that provide quick returns and improve food security.",
    learningOutcomes: [
      "Understand climate-smart agricultural practices",
      "Master production techniques for selected enterprises",
      "Develop farm management and record-keeping skills",
      "Learn disease and pest control methods"
    ],
    targetGroups: ["Farmers", "Cooperatives", "Youth groups", "Women's groups"],
    deliveryFormats: ["Group training", "Demonstration", "Site visit", "Technical assistance"],
    status: "published",
    image: "/hero-images/image 3.webp"
  },
  {
    id: "livelihood-skills",
    slug: "livelihood-skills",
    title: "Livelihood & Skills Training",
    icon: "HandHeart",
    summary: "Practical soap making, baking, gari processing, bead making and other practical income-generating activities.",
    description: "We provide hands-on training in alternative livelihood skills designed to help individuals and groups build sustainable income streams independent of seasonal agriculture.",
    learningOutcomes: [
      "Master production techniques and safety protocols",
      "Understand basic quality control and packaging",
      "Develop enterprise management skills",
      "Learn marketing and sales strategies"
    ],
    targetGroups: ["Women's groups", "Youth", "Community organizations"],
    deliveryFormats: ["Group training", "Demonstration", "Institutional training"],
    status: "published",
    image: "/image 29.webp"
  },
  {
    id: "entrepreneurship",
    slug: "entrepreneurship",
    title: "Entrepreneurship Development",
    icon: "TrendingUp",
    summary: "Enterprise formation, business development, market linkages and value-chain support.",
    description: "Our entrepreneurship programmes help individuals turn agricultural and livelihood skills into viable, formal businesses. We guide participants through enterprise formation, financial literacy, and market access.",
    learningOutcomes: [
      "Business planning and enterprise formation",
      "Financial literacy and record keeping",
      "Value chain analysis and market linkages",
      "Access to finance and cooperative formation"
    ],
    targetGroups: ["Agri-preneurs", "Cooperatives", "Small business owners"],
    deliveryFormats: ["Workshop", "Consultancy", "Mentorship"],
    status: "published",
    image: "/hero-images/image 25.webp"
  },
  {
    id: "research-consultancy",
    slug: "research-consultancy",
    title: "Research & Consultancy",
    icon: "Search",
    summary: "Feasibility studies, baseline surveys, project evaluation, farm planning, market analysis and monitoring.",
    description: "We partner with institutions and development organizations to provide accurate, field-based research, monitoring, and evaluation services across the agricultural and rural development sectors.",
    learningOutcomes: [],
    targetGroups: ["Development partners", "Government agencies", "Private sector", "NGOs"],
    deliveryFormats: ["Consultancy", "Technical support", "Project implementation"],
    status: "published",
    image: "/hero-images/image 14.webp"
  },
  {
    id: "private-sector",
    slug: "private-sector",
    title: "Private Sector & Market Systems",
    icon: "Briefcase",
    summary: "Value-chain development, M4P approaches, supply-chain support and community engagement for companies and partners.",
    description: "We assist private sector companies in developing inclusive supply chains and delivering impactful Corporate Social Responsibility (CSR) programmes that genuinely benefit rural communities.",
    learningOutcomes: [],
    targetGroups: ["Agribusinesses", "Corporate CSR teams", "Buyers and processors"],
    deliveryFormats: ["Consultancy", "Project delivery", "Community engagement"],
    status: "published",
    image: "/hero-images/image 17.webp"
  },
  {
    id: "community-development",
    slug: "community-development",
    title: "Environment & Community Development",
    icon: "Users",
    summary: "Climate adaptation, natural-resource livelihoods, health and sanitation, gender inclusion, youth participation.",
    description: "Our community interventions focus on building overall resilience, addressing climate adaptation, promoting gender inclusion, and improving local governance and sanitation.",
    learningOutcomes: [
      "Community resource mapping and planning",
      "Climate adaptation strategies",
      "Gender mainstreaming and inclusion",
      "WASH (Water, Sanitation and Hygiene) awareness"
    ],
    targetGroups: ["Communities", "Local authorities", "Vulnerable populations"],
    deliveryFormats: ["Community mobilization", "Workshop", "Project implementation"],
    status: "published",
    image: "/hero-images/image 7.webp"
  }
];

export function getServiceBySlug(slug) {
  return services.find(s => s.slug === slug);
}
