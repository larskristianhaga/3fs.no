/**
 * Centralized company information configuration
 * All company data like phone number, org number, address, etc. in one place
 */

export const companyInfo = {
  name: "Trefellingsspesialisten AS",
  description: "Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Over 15 års erfaring med trefelling, beskjæring, stubbefresing og tomterydding. Forsikret og sertifisert.",
  
  contact: {
    phone: {
      display: "47 64 29 70",
      href: "+4747642970"
    },
    email: "rs3felling@gmail.com"
  },
  
  organization: {
    number: "819 545 782"
  },
  
  address: {
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
  
  serviceAreasText: "Oslo, Akershus, Østfold og Buskerud",
  
  openingHours: "Mo-Fr 08:00-17:00",
  
  priceRange: "$$",
  
  website: "https://3fs.no"
} as const
