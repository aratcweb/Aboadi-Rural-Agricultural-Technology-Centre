export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://arattc.org"
).replace(/\/$/, "");

export const siteInfo = {
  name: "Aboadi Rural Agricultural Technology Centre",
  shortName: "ARATC",
  description: "A Ghanaian non-governmental, non-profit organization that delivers practical agricultural training, livelihood development, research, and consultancy services.",
  registrationYear: "2019",
  tagline: "Practical knowledge. Stronger livelihoods. Resilient communities.",
  contact: {
    address: "E. Akuffo Addo Road, Apremdo New Market, Takoradi, Ghana",
    postalAddress: "Post Office Box 254, Sekondi",
    gps: "WK-593-8381",
    contactPerson: "John Kwamina Gyimah",
    phones: ["+233 249 724 496", "+233 200 733 59"],
    emails: ["info.arattc@gmail.com", "johngyimah299@gmail.com"],
  },
  social: {
    facebook: "https://facebook.com/Arattc-Ghana",
    instagram: "https://www.instagram.com/info.arattc?igsh=M20wcjV3dW11dmcw&utm_source=qr",
    linkedin: "https://linkedin.com/company/Arattc-Ghana",
    twitter: null,
  }
};
