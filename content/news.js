export const news = [
  {
    id: "practical-livelihood-training",
    slug: "practical-livelihood-training",
    title: "ARATC delivers practical livelihood training for community participants in the Western Region",
    date: "2026-06-15",
    category: "Project updates",
    author: "ARATC Communications",
    summary: "A recent multi-day training session equipped over 40 participants with new income-generating skills, focusing on soap making and enterprise management.",
    content: `
Aboadi Rural Agricultural Technology Centre (ARATC) recently concluded a five-day intensive livelihood training programme in the Western Region, supporting 40 community members with practical income-generating skills.

The intervention focused primarily on liquid and bar soap making, combined with fundamental enterprise management and safety protocols. Participants were guided through the entire production cycle, from ingredient measurement and safe handling to packaging and quality control.

"Providing practical, hands-on skills rather than just theory is essential for creating sustainable livelihoods," said John Kwamina Gyimah, Executive Director of ARATC. "These participants can now establish small enterprises that generate income even during the agricultural off-season."

The programme also included modules on basic financial literacy and cooperative formation, encouraging participants to pool resources for bulk purchasing of materials.

ARATC continues to deliver targeted livelihood support to women, youth, and vulnerable groups across the region.
    `,
    image: null, // "requires-confirmation"
    relatedService: "livelihood-skills",
    status: "published"
  }
];

export function getNewsBySlug(slug) {
  return news.find(n => n.slug === slug);
}
