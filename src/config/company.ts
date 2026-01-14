export const companyData = {
    name: 'Trefellingsspesialisten AS',
    organizationNumber: '819 545 782',
    phone: {
        formatted: '47 64 29 70',
        link: '+4747642970',
    },
    email: {
        address: 'rs3felling@gmail.com',
        link: 'mailto:rs3felling@gmail.com',
    },
    website: {
        url: 'https://3fs.no',
        domain: '3fs.no',
    },
    serviceArea: {
        regions: ['Oslo', 'Akershus', 'Østfold', 'Buskerud'],
        description: 'Dekker Oslo, Akershus, Østfold og Buskerud',
    },
    location: {
        municipality: 'Ås',
        county: 'Akershus',
    },
    description: 'Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud.',
    tagline: 'Med erfarne trefellere, maskiner, og riktig utstyr kan du være sikker på at jobben blir gjennomført på en trygg, effektiv måte, og til konkurransedyktige priser.',
} as const;
