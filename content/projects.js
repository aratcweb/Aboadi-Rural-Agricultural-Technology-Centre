export const projects = [
  {
    id: "livelihood-support-400-farmers",
    slug: "livelihood-support-400-farmers",
    title: "Livelihood Support for 400 Farmers",
    theme: "Livelihood Skills",
    partner: "Requires Confirmation",
    partnerStatus: "requires-confirmation",
    startDate: "Requires Confirmation",
    endDate: "Requires Confirmation",
    location: "Western Region",
    role: "Implementing Partner",
    beneficiaryCount: 400,
    challenge: "Farmers in the region faced significant income drops during the off-season, lacking diversified income streams.",
    response: "ARATC designed and delivered a comprehensive livelihood support programme focusing on alternative income-generating activities that require low capital input.",
    activities: [
      "Ruminant production training",
      "Soap making practical sessions",
      "Beekeeping establishment"
    ],
    outputs: [
      "400 farmers trained",
      "Starter kits distributed",
      "Production manuals provided"
    ],
    outcomes: [
      "Participants established secondary income streams",
      "Improved household financial resilience"
    ],
    images: [],
    testimonial: null,
    consentConfirmed: false,
    publicationStatus: "published"
  },
  {
    id: "snail-farming-initiative",
    slug: "snail-farming-initiative",
    title: "Alternative Livelihood Support: Snail Farming",
    theme: "Sustainable Agriculture",
    partner: "Requires Confirmation",
    partnerStatus: "requires-confirmation",
    startDate: "Requires Confirmation",
    endDate: "Requires Confirmation",
    location: "Western Region",
    role: "Technical Training Provider",
    beneficiaryCount: null,
    challenge: "Need for low-space, low-capital agricultural enterprises for community members.",
    response: "Delivered intensive snail farming training covering housing, feeding, and management.",
    activities: [
      "Pen construction demonstration",
      "Breeding stock selection",
      "Feeding and hygiene management"
    ],
    outputs: [
      "Participants equipped with practical snail farming knowledge",
      "Demonstration pens established"
    ],
    outcomes: [
      "Adoption of snail farming as a viable micro-enterprise"
    ],
    images: [],
    testimonial: null,
    consentConfirmed: false,
    publicationStatus: "published"
  },
  {
    id: "military-personnel-livelihood",
    slug: "military-personnel-livelihood",
    title: "Diversified Livelihood Training for Military Personnel",
    theme: "Entrepreneurship",
    partner: "Ghana Armed Forces (Pending confirmation)",
    partnerStatus: "requires-confirmation",
    startDate: "Requires Confirmation",
    endDate: "Requires Confirmation",
    location: "Western Region",
    role: "Training Provider",
    beneficiaryCount: 120,
    challenge: "Military personnel approaching retirement required practical skills to establish post-service enterprises.",
    response: "ARATC provided targeted training in viable agricultural and livelihood enterprises suitable for retiring personnel.",
    activities: [
      "Vegetable production",
      "Grasscutter rearing",
      "Fish farming"
    ],
    outputs: [
      "120 personnel trained in selected enterprises"
    ],
    outcomes: [
      "Participants prepared for post-retirement income generation"
    ],
    images: [],
    testimonial: null,
    consentConfirmed: false,
    publicationStatus: "published"
  }
];

export function getProjectBySlug(slug) {
  return projects.find(p => p.slug === slug);
}
