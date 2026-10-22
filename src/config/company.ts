export const yearsOfExperience = 20

export const companyInfo = {
  name: "Trefellingsspesialisten AS",
  description: `Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Over ${yearsOfExperience} års erfaring med trefelling, beskjæring, stubbefresing og tomterydding. Forsikret og sertifisert.`,

  contact: {
    phone: {
      display: "476 42 970",
      href: "+4747642970"
    },
    email: "rs3felling@gmail.com"
  },
  
  organization: {
    number: "819 545 782"
  },
  
  address: {
    street: "Stønerudveien 4",
    postalCode: "1434",
    locality: "Ås",
    region: "Akershus",
    country: "NO"
  },
  
  geo: {
    latitude: 59.6606,
    longitude: 10.7819
  },
  
  serviceAreas: [
    {
      type: "City" as const,
      name: "Oslo"
    },
    {
      type: "AdministrativeArea" as const,
      name: "Akershus"
    },
    {
      type: "AdministrativeArea" as const,
      name: "Østfold"
    },
    {
      type: "AdministrativeArea" as const,
      name: "Buskerud"
    }
  ],
  
  stats: {
    employees: "3",
    treesFelled: "10 000",
    happyCustomers: "2 000"
  },

  serviceAreasText: "Oslo, Akershus, Østfold og Buskerud",

  insurance: {
    provider: "If",
    coverage: "14 000 000 kr",
    coverageShort: "14 mill.",
    certificate: "/documents/forsikringssertifikat-ansvar-2026-2027.pdf"
  },
  
  openingHours: "Mo-Fr 08:00-17:00",
  
  // The site's own address, used for canonical URLs, sitemap, robots, llms.txt and JSON-LD.
  // Set NEXT_PUBLIC_BASE_URL in Vercel; it stays on the temporary domain until 3fs.no moves off Wix.
  website: process.env.NEXT_PUBLIC_BASE_URL || "https://3fs.vercel.app"
} as const
