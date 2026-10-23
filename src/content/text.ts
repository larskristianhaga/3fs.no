import {companyInfo, yearsOfExperience} from '@/config/company'

export const siteText = {
    common: {
        bookVisit: 'Bestill gratis befaring →',
        contactUs: 'Kontakt oss',
        readMore: 'Les mer →',
        areasTitle: 'Tjenester i ditt område',
        areasText: 'Les mer om hvor vi tilbyr trefelling og trepleie.',
        pricingGuide: 'Se prisguide for trefelling →',
        servicesCtaTitle: 'Usikker på hva du trenger?',
        servicesCtaText: 'Vi kommer på gratis befaring, ser på trærne og gir deg fastpris.',
        aboutTeamTitle: 'Folka bak',
        aboutInsuranceTitle: 'Fullforsikret gjennom If',
        portraitOf: 'Portrett av',
        faqCtaTitle: 'Har du andre spørsmål?',
        faqCtaText: 'Hvis du ikke finner svar på det du lurer på, ta gjerne kontakt med oss!',
        contactAreasTitle: 'Vi dekker disse områdene',
        contactAreasText: 'Les mer om tjenester i ditt nærområde:',
        blogCtaTitle: 'Har du spørsmål? Vi er her for å hjelpe',
        blogCtaText: 'Kontakt oss direkte eller sjekk ut FAQ-siden vår for mer informasjon.',
        relatedArticles: 'Relaterte artikler',
        articleCtaTitle: 'Trenger du profesjonell hjelp?',
        articleCtaText: 'Kontakt oss i dag for gratis befaring og pristilbud.',
        areaHelpTitle: 'Hva vi hjelper med',
        areaCasesTitle: 'Lokale case fra',
        notFoundTitle: 'Denne siden finnes ikke',
        notFoundText: 'Siden kan ha blitt flyttet eller slettet. Gå tilbake til forsiden, eller ring oss om du trenger hjelp med et tre.',
        notFoundButton: 'Til forsiden',
        breadcrumbLabel: 'Brødsmuler',
    },

    header: {
        nav: {
            home: 'Forside',
            services: 'Tjenester',
            pricing: 'Trefelling pris',
            about: 'Om oss',
            faq: 'Ofte stilte spørsmål',
            blog: 'Blogg',
            contact: 'Kontakt oss',
        },
        aria: {
            logo: 'Trefellingsspesialisten AS hjem',
            menuOpen: 'Åpne hovedmeny',
            nav: 'Hovedmeny',
        },
        callUs: 'Ring',
    },

    footer: {
        quickLinks: {
            title: 'Hurtiglenker',
            home: 'Forside',
            services: 'Tjenester',
            about: 'Om oss',
            faq: 'Ofte stilte spørsmål',
            contact: 'Kontakt oss',
        },
        services: {
            title: 'Tjenester',
            treeFelling: 'Trefelling',
            stumpGrinding: 'Stubbefresing',
            pruning: 'Beskjæring',
            siteClearance: 'Tomterydding',
        },
        contactSection: {
            title: 'Kontakt',
        },
        safety: {
            title: 'Trygghet',
            certificate: 'Forsikringsbevis (PDF)',
            insuredThrough: 'Forsikret gjennom',
        },
        orgNumber: 'Org.nr',
        mobileBar: {
            contact: 'Gratis befaring',
        },
        locations: {
            title: 'Områder',
            oslo: 'Oslo',
            akershus: 'Akershus',
            ostfold: 'Østfold',
            buskerud: 'Buskerud',
        },
    },

    home: {
        hero: {
            areas: 'Oslo · Akershus · Østfold · Buskerud',
            title: 'Trær som står vanskelig til?',
            titleAccent: 'Det er vår spesialitet.',
            description: 'Erfarne trefellere, egne maskiner og riktig utstyr. Vi tar ned, beskjærer og rydder — trygt, effektivt og til fastpris.',
            cta: 'Bestill gratis befaring →',
            secondaryCta: 'Se tjenester',
            imageAlt: 'Beskåret tre i en hage',
            insuranceBadge: {
                title: 'Fullforsikret gjennom',
                linkText: 'Se forsikringsbevis',
            },
        },
        trustStrip: [
            {title: 'Gratis befaring', description: 'Uforpliktende, hos deg'},
            {title: 'Fastpris', description: 'Ingen overraskelser'},
            {title: `Over ${yearsOfExperience} års erfaring`, description: 'Private, borettslag og kommuner'},
            {title: 'Vi rydder etter oss', description: 'Bortkjøring på samme jobb'},
        ],
        servicesSection: {
            title: 'Tjenester',
            subtitle: 'Alt fra ett enkelt tre til hele tomten. Ofte kombinerer vi flere tjenester i samme oppdrag.',
            quoteLink: 'Få pristilbud på',
            allServicesLink: 'Les mer om alle tjenestene →',
            pricingLink: 'Se priser for trefelling →',
            items: [
                {
                    id: 'trefelling',
                    title: 'Trefelling',
                    description: 'Alle typer trær, store og små. Vi velger metode etter størrelse, tilstand og plassering — også tett på hus, gjerder og strømledninger.',
                },
                {
                    id: 'beskjaering',
                    title: 'Beskjæring',
                    description: 'Fjerning av døde og tunge greiner, reduksjon og forming. Gir et sunnere tre og mer lys i hagen.',
                },
                {
                    id: 'stubbefresing',
                    title: 'Stubbefresing',
                    description: 'Den mest skånsomme måten å fjerne stubber på. Vi freser bort synlige røtter og hovedroten ca. 20–30 cm under bakken.',
                },
                {
                    id: 'flishugging',
                    title: 'Flishugging',
                    description: 'Greiner og kvist blir til flis på stedet. Behold flisa til bed og stier, eller la oss ta den med.',
                },
                {
                    id: 'bortkjoring',
                    title: 'Bortkjøring',
                    description: 'Stammer, greiner og flis kjøres bort etter jobben, så du slipper tidkrevende rydding selv.',
                },
                {
                    id: 'tomterydding',
                    title: 'Tomterydding',
                    description: 'Klargjøring av tomt før bygging eller ny hage. Felling, fresing og rydding i ett og samme oppdrag.',
                },
            ],
        },
        insurance: {
            eyebrow: 'Forsikring',
            title: 'Fullforsikret for inntil 14 millioner',
            description: 'Vi er forsikret mot skade på eiendom og personer gjennom If. Ikke alle i bransjen er det — sjekk gjerne beviset før du velger hvem som skal felle trærne dine.',
            openButton: 'Åpne forsikringsbevis (PDF)',
            card: {
                title: 'Forsikringsbevis',
                holderLabel: 'Forsikringstaker',
                coverageLabel: 'Dekning',
                coverage: 'Skade på eiendom og personer',
                coveragePrefix: 'Inntil',
                cta: 'Klikk for å åpne PDF →',
            },
        },
        about: {
            title: 'Startet med én motorsag. I dag: eksperter på vanskelige oppdrag.',
            description: `For over ${yearsOfExperience} år siden kjøpte vi en motorsag og begynte å felle trær i skogen. I dag har vi flere dyktige trefellere og en maskin- og utstyrspark vi er stolte av. Vi holder til i Ås og jobber for private, borettslag, entreprenører og kommuner.`,
            tagline: 'Vår jobb — din trygghet.',
            imageAlt: 'Utsikt ned fra tretopp over maskinene under et oppdrag',
            link: 'Møt teamet →',
            stats: [
                {value: `${yearsOfExperience}+`, label: 'års erfaring'},
                {value: companyInfo.stats.treesFelled, label: 'felte trær'},
                {value: companyInfo.stats.happyCustomers, label: 'fornøyde kunder'},
            ],
        },
        testimonials: {
            title: 'Hva kundene sier',
            attribution: 'Kundeanmeldelse',
            items: [
                'Kan på det sterkeste anbefale Trefellingsspesialisten! Ekstremt effektiv og ryddig. Rydder fint opp etter seg. Veldig profesjonell og serviceinnstilt og hele tiden med et godt smil.',
                'Kom på befaring et par dager etter jeg hadde ringt, og jeg fikk pristilbud på stedet. Trærne sto vanskelig til, mellom hus, strømledninger, gjerder og annen beplantning. Klatret opp i trærne, og kappet ned ovenfra og ned, i et imponerende tempo, og med god presisjon. Jeg er meget fornøyd med utført jobb.',
                'Utrolig rask til å jobbe, bra resultat og en skikkelig apekatt når det kommer til å klatre.',
                'Utrolig flinke og effektive. Ryddet opp etter seg. Kan anbefales, vi er veldig fornøyde. 3 høye furutrær ++ fjernet og kuttet opp i løpet av et par timer.',
            ],
        },
        booking: {
            eyebrow: 'Gratis befaring',
            title: 'Fortell oss om jobben',
            description: 'Send noen linjer og gjerne et bilde. Vi tar kontakt for å avtale en uforpliktende befaring, og du får fastpris.',
            phoneLabel: 'Telefon',
            emailLabel: 'E-post',
            locationLabel: 'Adresse',
        },
    },

    services: {
        title: 'Tjenester',
        readMore: 'Les mer om',
        detailsTitle: 'Slik jobber vi',
        faqTitle: 'Spørsmål om',
        areasTitle: 'Her tilbyr vi',
        areasText: 'Vi holder til i Ås og tar oppdrag i Oslo, Akershus, Østfold og store deler av Buskerud.',
        otherServicesTitle: 'Andre tjenester',
        allServicesLink: 'Se alle tjenestene →',
        ctaTitle: 'Vil du ha pris på jobben?',
        ctaText: 'Vi kommer på gratis befaring, ser på forholdene og gir deg fastpris.',
        items: [
            {
                id: 'trefelling',
                title: 'Trefelling',
                description: `Vi utfører felling av alle typer trær, både små og store. Hvert tre er unikt med tanke på størrelse, tilstand og plassering, og det kreves derfor ulike fellingsmetoder, for å ta ned treet på en sikker og skånsom måte. Vår erfaren klatrer med mer enn ${yearsOfExperience} års erfaring, er vant med å håndtere utfordrende situasjoner i høyden og har spesialutstyr for å ta ned spesielt vanskelige trær.`,
                imageAlt: 'Profesjonell trefelling med spesialistutstyr',
                intro: 'Alle typer trær, store og små. Vi velger metode etter størrelse, tilstand og plassering — også tett på hus, gjerder og strømledninger.',
                metaDescription: 'Trygg trefelling i Oslo, Akershus, Østfold og Buskerud. Erfarne trefellere tar ned store og vanskelige trær tett på hus og ledninger. Gratis befaring og fastpris.',
                details: [
                    'Når et tre står tett på hus, gjerder, veier eller strømledninger, klatrer vi opp og tar det ned i seksjoner ovenfra og ned. Da har vi kontroll på hver del, og treet kan felles uten skade på omgivelsene. Vi planlegger jobben nøye på befaringen, så vi vet hvilken metode og hvilket utstyr som trengs før vi starter.',
                    'Trefelling kombineres ofte med stubbefresing, flishugging og bortkjøring, så hele jobben blir gjort i samme oppdrag. Vi rydder opp etter oss, og du kan selv velge om du vil beholde noe av veden eller flisen.',
                ],
                faq: [
                    {
                        question: 'Hva koster trefelling?',
                        answer: 'Prisen avhenger av treets høyde, diameter og tilstand, avstanden til hus, vei og ledninger, og hvor god tilgang det er for utstyr og bortkjøring. Vi kommer på gratis befaring og gir deg et uforpliktende pristilbud før arbeidet starter. I prisguiden vår finner du eksempler fra typiske oppdrag.',
                    },
                    {
                        question: 'Kan dere felle trær som står vanskelig til?',
                        answer: `Ja, vår erfarne klatrer med over ${yearsOfExperience} års erfaring er vant med å håndtere utfordrende situasjoner. Vi har spesialutstyr for å ta ned trær som står inneklemt mellom hus, nær ledninger, eller i andre vanskelige plasseringer.`,
                    },
                    {
                        question: 'Trenger jeg tillatelse for å felle trær?',
                        answer: 'I noen kommuner kreves det tillatelse for å felle trær, spesielt for større trær eller trær i vernede områder. Vi anbefaler at du sjekker med din kommune før du bestiller trefelling. Vi kan også hjelpe deg med å finne informasjon om lokale reguleringer.',
                    },
                    {
                        question: 'Hvor lang tid tar det å felle et tre?',
                        answer: 'Det avhenger av treets størrelse, plassering og om det er hindringer i nærheten. Et enkelt tre kan ta fra noen timer til en hel dag. Vi gir deg et tidsestimat ved befaring.',
                    },
                    {
                        question: 'Når på året er det best å felle trær?',
                        answer: 'Vinter og tidlig vår er ofte en god tid, fordi treet er i dvale og arbeidet blir enklere. Vi feller likevel trær hele året ved behov.',
                    },
                ],
            },
            {
                id: 'stubbefresing',
                title: 'Stubbefresing',
                description: 'Stubbefresing er den mest skånsomme og effektive måten å fjerne stubber på som står i veien eller som du ønsker å fjerne. Vi freser bort alle synlige røtter, og ca. 20-30 cm under bakken for å frese hovedroten under stubben, slik at alle spor etter stubben og røttene er fjernet. Maskinen har belter, så vi unngår skade på plen og hage, og du sitter igjen med et flott resultat.',
                imageAlt: 'Stubbefresing med dyktig maskinoperatør',
                intro: 'Den mest skånsomme måten å fjerne stubber på. Vi freser bort synlige røtter og hovedroten ca. 20–30 cm under bakken.',
                metaDescription: 'Stubbefresing i Oslo, Akershus, Østfold og Buskerud. Vi freser bort stubben og hovedroten ca. 20–30 cm under bakken, med beltemaskin som skåner plenen.',
                details: [
                    'Når stubben og hovedroten er frest bort, er det ingen spor igjen etter treet, og du kan bruke området som du vil, for eksempel til plen eller bed. Det er en enklere og mer skånsom løsning enn å grave opp stubben.',
                    'Stubbefresing kan bestilles sammen med trefelling, eller som en egen jobb for stubber som allerede står i hagen. Send oss gjerne et bilde av stubbene, så får du et uforpliktende pristilbud.',
                ],
                faq: [
                    {
                        question: 'Hva er stubbefresing?',
                        answer: 'Stubbefresing er den mest skånsomme og effektive måten å fjerne stubber på. Vi freser ca. 20-30 cm under bakken for å fjerne hovedroten og alle synlige røtter, slik at ingen spor etter stubben er igjen.',
                    },
                    {
                        question: 'Blir plenen ødelagt av maskinen?',
                        answer: 'Nei, stubbefreseren går på belter, så vi unngår skade på plen og hage.',
                    },
                    {
                        question: 'Kan dere fjerne stubber etter trær som allerede er felt?',
                        answer: 'Ja, vi freser både stubber etter trær vi feller selv og stubber som har stått i hagen en stund. Ta kontakt, gjerne med et bilde, så avtaler vi en gratis befaring.',
                    },
                ],
            },
            {
                id: 'bortkjoring',
                title: 'Bortkjøring',
                description: 'Bortkjøring av flis, greiner og trestammer etter gjennomført arbeid er noe vi gjerne hjelper med. Etter felling kan det være mye som skal ryddes, og fjernes, noe som kan være tidskrevende å gjøre selv. Vi har et stort utvalg av kjøretøy, og hengere som gjør bortkjøringen av alt trevirke effektivt og enkelt.',
                imageAlt: 'Effektiv bortkjøring av trevirke',
                intro: 'Stammer, greiner og flis kjøres bort etter jobben, så du slipper tidkrevende rydding selv.',
                metaDescription: 'Bortkjøring av trestammer, greiner og flis etter trefelling i Oslo, Akershus, Østfold og Buskerud. Vi rydder opp og tar med oss trevirket.',
                details: [
                    'Bortkjøringen gjøres på samme oppdrag som fellingen, så du slipper å leie henger eller kjøre mange turer selv. Vi rydder grundig og forlater stedet like fint som vi fant det.',
                    'Du bestemmer selv hva som skal kjøres bort. Mange velger å beholde noe av materialet, for eksempel ved til brenning eller flis til dekkbark i bedet.',
                ],
                faq: [
                    {
                        question: 'Rydder dere opp etter trefelling?',
                        answer: 'Ja, vi sørger alltid for å rydde opp grundig etter endt arbeid. Dette inkluderer bortkjøring av trevirke, kvist og flis hvis ønskelig. Vi forlater stedet like fint som vi fant det.',
                    },
                    {
                        question: 'Kan jeg beholde noe av veden eller flisen?',
                        answer: 'Ja, du kan velge å beholde noe av materialet, for eksempel flis til bruk som dekkbark eller ved til brenning. Resten kjører vi bort.',
                    },
                    {
                        question: 'Er bortkjøring med i prisen?',
                        answer: 'Behovet for bortkjøring og tilgangen for kjøretøy er med på å bestemme prisen. Vi avklarer hva som skal kjøres bort på befaringen, så det er med i pristilbudet du får.',
                    },
                ],
            },
            {
                id: 'flishugging',
                title: 'Flishugging',
                description: 'Flishugging er en miljøvennlig og effektiv måte å rydde kvist, greiner og mindre trestammer på. Maskinen kverner trevirke til flis, og kan ta trestammer inntil 30 cm i diameter. Dette reduserer volumet av trevirke etter et trefellingsoppdrag og sparer tid på bortkjøring. Flisen fra vår flishugger egner seg godt som dekkbark i bed eller skråninger og som fyllmasse for å jevne terreng.',
                imageAlt: 'Flishugging av trestammer og greiner',
                intro: 'Greiner og kvist blir til flis på stedet. Behold flisa til bed og stier, eller la oss ta den med.',
                metaDescription: 'Flishugging av greiner, kvist og stammer inntil 30 cm i Oslo, Akershus, Østfold og Buskerud. Behold flisen som dekkbark, eller la oss kjøre den bort.',
                details: [
                    'Vi hugger greiner og kvist til flis der vi jobber, så det blir langt mindre volum å kjøre bort etter et trefellingsoppdrag. Det sparer både tid og plass.',
                    'Flisen kan du bruke selv som dekkbark i bed og skråninger, på stier, eller som fyllmasse for å jevne ut terreng. Vil du ikke beholde den, tar vi den med oss.',
                ],
                faq: [
                    {
                        question: 'Kan jeg få treet fliset?',
                        answer: 'Ja, vi tilbyr flishugging som en miljøvennlig måte å håndtere kvist, greiner og mindre trestammer på. Det reduserer volumet og sparer tid på bortkjøring.',
                    },
                    {
                        question: 'Hvor tykke stammer kan flishuggeren ta?',
                        answer: 'Flishuggeren vår tar trestammer inntil 30 cm i diameter. Tykkere stammer kapper vi opp og kjører bort, eller lar ligge som ved om du ønsker det.',
                    },
                    {
                        question: 'Hva kan jeg bruke flisen til?',
                        answer: 'Flisen egner seg godt som dekkbark i bed eller skråninger, på stier og som fyllmasse for å jevne terreng.',
                    },
                ],
            },
            {
                id: 'beskjaering',
                title: 'Beskjæring',
                description: 'Beskjæring kan være en fin løsning om treet er større eller høyere enn du ønsker, eller hvis det hindrer utsikt eller sol. Store trær kan beskjæres, reduseres, formes eller toppes, alt ettersom hva du som kunde ønsker. Våre dyktige trefellere har alle gjennomført beskjæringskurs, og har kompetanse innen beskjæring av alle typer trær, hekker og andre buskvekster.',
                imageAlt: 'Profesjonell beskjæring av tre',
                intro: 'Fjerning av døde og tunge greiner, reduksjon og forming. Gir et sunnere tre og mer lys i hagen.',
                metaDescription: 'Beskjæring av trær, hekker og busker i Oslo, Akershus, Østfold og Buskerud. Vi reduserer, former og topper trær som tar sol eller utsikt.',
                details: [
                    'Med beskjæring kan du ofte beholde treet selv om det har blitt for stort. Vi fjerner døde og tunge greiner, reduserer kronen eller former treet, slik at du får mer lys og utsikt og et sunnere tre.',
                    'Store trær klatrer vi opp i, så vi kommer til der det trengs. På befaringen ser vi på treet sammen med deg og anbefaler hva som bør gjøres.',
                ],
                faq: [
                    {
                        question: 'Når er det best å beskjære trær?',
                        answer: 'Vinter og tidlig vår er vanligvis best, når treet er i dvale. Det reduserer stresset på treet og gjør arbeidet enklere. Vi kan likevel beskjære hele året ved behov.',
                    },
                    {
                        question: 'Bør jeg beskjære eller felle treet?',
                        answer: 'Er treet friskt, men større eller høyere enn du ønsker, eller tar det sol og utsikt, kan beskjæring være nok. Vi vurderer treet på en gratis befaring og gir deg en anbefaling.',
                    },
                    {
                        question: 'Beskjærer dere hekker og busker også?',
                        answer: 'Ja, trefellerne våre har gjennomført beskjæringskurs og beskjærer alle typer trær, hekker og andre buskvekster.',
                    },
                ],
            },
            {
                id: 'tomterydding',
                title: 'Tomterydding',
                description: 'I vår maskin- og utstyrspark har vi alt vi trenger for å effektivt klargjøre og rydde en eiendom for trær, busker og annen vegetasjon. Vi har lang erfaring med tomterydding for både private kunder, entreprenører og kommuner. Våre maskiner og utstyr er beregnet på både små og store områder, og vi kan håndtere arbeid i krevende og vanskelig terreng.',
                imageAlt: 'Tomterydding med moderne maskiner',
                intro: 'Klargjøring av tomt før bygging eller ny hage. Felling, fresing og rydding i ett og samme oppdrag.',
                metaDescription: 'Tomterydding i Oslo, Akershus, Østfold og Buskerud for private, entreprenører og kommuner. Felling, stubbefresing, flishugging og bortkjøring i ett oppdrag.',
                details: [
                    'En tomterydding samler flere tjenester i ett oppdrag: vi feller trær, freser stubber, hugger kvist til flis og kjører bort trevirket. Du får én kontakt og ett pristilbud for hele jobben.',
                    'Vi har maskiner og utstyr for både små og store områder, også i krevende og vanskelig terreng. Tomten blir klar for bygging, ny hage eller annen bruk.',
                ],
                faq: [
                    {
                        question: 'Hva inngår i tomterydding?',
                        answer: 'Vi tilpasser jobben etter tomten. Vanligvis inngår felling av trær og busker, stubbefresing, flishugging og bortkjøring av trevirke. Vi går gjennom hva som skal gjøres på befaringen.',
                    },
                    {
                        question: 'Tar dere store tomter og krevende terreng?',
                        answer: 'Ja, maskinene og utstyret vårt er beregnet på både små og store områder, og vi har erfaring med arbeid i krevende og vanskelig terreng.',
                    },
                    {
                        question: 'Hvem gjør dere tomterydding for?',
                        answer: 'Vi har lang erfaring med tomterydding for private kunder, entreprenører og kommuner.',
                    },
                ],
            },
        ],
    },

    pricing: {
        title: 'Trefelling pris',
        subtitle: 'Pris avhenger av størrelse, plassering og tilgang. Vi gir alltid gratis befaring og et tydelig pristilbud.',
        ranges: [
            {
                label: 'Små trær (ca. 4-6 meter)',
                price: 'Fra 3 000-5 000 kr',
                details: 'Enkle forhold med god tilgang og få hindringer.',
            },
            {
                label: 'Mellomstore trær (ca. 6-10 meter)',
                price: 'Fra 5 000-10 000 kr',
                details: 'Vanligvis behov for mer rigging og mer tid.',
            },
            {
                label: 'Store trær (10+ meter)',
                price: 'Fra 10 000-20 000+ kr',
                details: 'Krevende felling, ofte med klatring og seksjonering.',
            },
        ],
        factorsTitle: 'Hva påvirker prisen?',
        factors: [
            'Treets høyde, diameter og tilstand',
            'Avstand til hus, vei, ledninger og naboer',
            'Tilgang for utstyr og bortkjøring',
            'Behov for stubbefresing, flishugging og opprydding',
            'Om jobben krever ekstra sikring eller klatring',
        ],
        examplesTitle: 'Eksempelpriser fra typiske oppdrag',
        examples: [
            'Nordre Follo: Felling av gran på ca. 7 meter med god tilgang: ca. 5 500 kr.',
            'Oslo: Felling av bjørk nær hus med rigging: ca. 8 500 kr.',
            'Indre Østfold: Felling av stor furu i trang passasje med opprydding: ca. 14 500 kr.',
        ],
        ctaTitle: 'Vil du ha nøyaktig pris?',
        ctaText: 'Send oss bilder eller bestill gratis befaring. Du får et konkret og uforpliktende pristilbud.',
    },

    about: {
        title: 'Om oss',
        intro: [
            {
                paragraph: 'Trefellingsspesialisten holder til i Ås kommune, og vi tar på oss oppdrag i Oslo, Akershus, Østfold og store deler av Buskerud. Vi tilbyr alt innen trefelling, beskjæring, stubbefresing, flishugging, bortkjøring og oppryddning. Vi har oppdrag for stat og kommune, bedrifter og borettslag, privat- og ferie eiendommer. Vi tilbyr alltid en gratis befaring og uforpliktende pristilbud.',
            },
            {
                paragraph: `Med erfarne fagfolk og korrekt utstyr feller og beskjærer vi alle typer trær på en skånsom og sikker måte. Vår erfaren klatrer med mer enn ${yearsOfExperience} års erfaring, er vant med å håndtere utfordrende situasjoner i høyden og har spesialutstyr for å ta ned spesielt vanskelige trær. Så trær som står litt vrient til i hagen, inneklemt mellom hus, ledningsnett, veier eller andre hindringer er ikke noe problem, vi tar jobben!`,
            },
            {
                paragraph: 'Ingen oppdrag er for store eller små. Vi hjelper deg med akkurat den delen av jobben som du ikke får til eller ønsker å gjøre selv. Når jobben er ferdig sørger vi alltid for å rydde opp, og forlater stedet like fint som vi fant det.',
            }
        ],
        imageAlt: 'Trefellingsspesialisten team i arbeid',
        team: [
            {
                name: 'Pål-Erik Engedahl',
                role: 'Eier, klatrer og trefeller',
            },
            {
                name: 'Ruud van der Ven',
                role: 'Trefeller og maskinfører',
            },
            {
                name: 'Oleksandr Khokhlyuk',
                role: 'Trefeller og oppryddnings-ansvarlig',
            },
            {
                name: 'Bobby',
                role: 'Maskot',
            },
        ],
        insurance: {
            buttonText: 'Se forsikringsbevis',
        },
    },

    contact: {
        title: 'Kontakt oss',
        intro: [
            {
                paragraph: 'Alle oppdrag er ulike, og det kan være vanskelig å gi en konkret pris før vi vet litt mer. I noen tilfeller kan vi gi en fastpris ved å se på bilder du kan legge ved i kontaktskjemaet. I andre tilfeller er det hensiktsmessig at vi møter opp på en uforpliktende befaring.',
            },
            {
                paragraph: 'Vi hjelper deg gjerne, send oss en e-post i dag, så vil du bli kontaktet fortløpende for en uforpliktende samtale eller avtale om en gratis befaring.',
            },
            {
                paragraph: 'Ikke nøl med å ta kontakt med oss om du har noen spørsmål knyttet til vårt arbeid eller tjenester!',
            }
        ],
        form: {
            name: 'Navn',
            email: 'E-post',
            phone: 'Telefon',
            address: 'Adresse',
            postCodeAndLocation: 'Postnummer og poststed',
            message: 'Melding',
            attachment: 'Vedlegg',
            attachmentHint: 'Du kan legge ved flere bilder. De forminskes automatisk før sending.',
            required: '*',
            submitButton: 'Send melding',
            submitting: 'Sender...',
            successMessage: 'Takk! Vi ringer deg med pristilbud.',
            errorMessage: `Ups! Noe gikk galt. Send oss en epost på ${companyInfo.contact.email} eller ring oss på: ${companyInfo.contact.phone.display}`,
            fileTooLargeMessage: `Bildene er for store til å sendes samlet. Prøv med færre bilder, eller send dem på e-post til ${companyInfo.contact.email} eller SMS til ${companyInfo.contact.phone.display}.`,
            exitMessage: `Før du går - du kan også ringe oss nå: ${companyInfo.contact.phone.display}`,
            servicesLegend: 'Hva trenger du hjelp med?',
            messageLabel: 'Beskriv jobben',
            messagePlaceholder: 'F.eks. To store bjørker nær huset, ca. 15 m høye. Ønsker stubbene fjernet.',
            attachmentLabel: 'Bilder',
            attachmentOptional: 'Valgfritt — hjelper oss å gi et riktig tilbud',
            attachmentButton: 'Velg bilder',
            noFilesSelected: 'Ingen bilder valgt',
            fileSelected: 'bilde valgt',
            filesSelected: 'bilder valgt',
            emailOptional: 'Valgfritt — vi ringer deg uansett',
            addressLabel: 'Adresse for oppdraget',
            addressPlaceholder: 'Gate og husnummer',
            postCodePlaceholder: 'F.eks. 1430 Ås',
            bookingSubmit: 'Send forespørsel om befaring',
            freeNote: 'Befaring og pristilbud er gratis og uforpliktende.',
            servicesPrefix: 'Gjelder',
            generalRequest: 'Generell forespørsel',
            successTitle: 'Takk',
            successText: 'Vi har mottatt forespørselen og ringer deg på',
            successTextSuffix: 'for å avtale befaring.',
            newRequest: 'Send en ny forespørsel',
            // WebMCP: describes the form as a tool for AI agents in the visitor's browser
            agentTool: {
                description: `Send en forespørsel om gratis og uforpliktende befaring og pristilbud til ${companyInfo.name}, som feller og beskjærer trær i ${companyInfo.serviceAreasText}. Firmaet ringer kunden tilbake for å avtale befaring. Brukeren ser over skjemaet og sender det selv. Skriv i meldingen hvilke tjenester det gjelder:`,
                params: {
                    message: 'Beskrivelse av jobben: hvilke tjenester det gjelder, antall trær, treslag, omtrentlig høyde, hvor de står (f.eks. nær hus eller ledninger) og om stubber eller kvister skal fjernes.',
                    address: 'Gateadresse der jobben skal gjøres. Valgfritt.',
                    postCodeAndLocation: 'Postnummer og poststed der jobben skal gjøres, f.eks. «1430 Ås».',
                    name: 'Kundens fulle navn.',
                    phone: 'Kundens telefonnummer. Firmaet ringer dette nummeret for å avtale befaring.',
                    email: 'Kundens e-postadresse. Valgfritt.',
                    website: 'Skal alltid stå tomt.',
                },
            },
        },
    },

    blog: {
        title: 'Blogg',
        subtitle: 'Tips, råd og innsikt om trefelling og trepleie',
        posts: [
            {
                id: 'treet-er-syk',
                title: 'Treet er syk - må det fellas?',
                excerpt: 'Hvordan identifisiere om treet ditt er syk og når det er tiden for felling versus behandling.',
                content: `Å ha et syk tre i hagen er frustrerende. Du er usikker på om du bør behandle det, kutte det eller felle det helt. Som erfarne trefellere med over ${yearsOfExperience} års erfaring, har vi sett mange tilfeller av syke trær. I denne guiden lærer du hvordan du gjenkjenner tegn på sykdom, hva behandlingsalternativene er, og når det er tid for felling.

TEGN PÅ AT TREET DITT ER SIKT

Det første steget er å identifisere om treet ditt virkelig er sikt. Her er de vanligste tegnene:

- Kvist som ikke springer ut om våren
- Løv som er misfarget, brunt eller visnet
- Bark som blir av treet
- Dårlig trådannelse (treet har få grener)
- Svamp eller insekter på stammen
- Røtter som stikker opp fra bakken
- Treet som heller eller er ustabilt

VANLIGE TRESYKDOMMER I ØSTLANDET

Vi på Trefellingsspesialisten har erfaring med å håndtere mange tresykdommer i Oslo, Akershus, Østfold og Buskerud:

Fukttresykdommen: Denne er vanlig i vårt område og gjør at treet mister vitalen. Du vil merke at barken blir fuktig, og det kommer ofte slimstrenger fra stammen.

Honningsopp: En alvorlig svampesykdom som angriper røttene. Treet svekkes gradvis og kan falle plutselig.

Askeskuddbarkebille: Har dessverre kommet til Norge og dreper asketrær. Hvis du har asketrær, anbefaler vi å kontrollere dem regelmessig.

Frostekrekk: Oppstår i vintermånedene når barken utvides og krymper. Kan gjøre treet sårbart for andre sykdommer.

BEHANDLING VERSUS FELLING

Ikke alle syke trær må fellas. Her er noen alternativer:

Avventing: Noen trær kan komme seg selv. Vi anbefaler å vente hvis treet ellers er friskt og bare har menor symptomer.

Beskjæring: Hvis bare deler av treet er sikt, kan beskjæring av de syke grenene hjelpe.

Behandling: For visse typer sykdommer finnes det behandlinger. En arborist kan vurdere om dette er aktuelt.

Felling: Hvis treet er dødsdømt, er det beste å felle det før det blir farlig.

NÅR DU SKAL FELLE TREET

Det er tid for felling når:

- Treet er helt dødt og utgjør en fare
- Sykdommen er så alvorlig at behandling ikke hjelper
- Treet er så ustabilt at det kan falle
- Du ønsker det fjernet av estetiske årsaker
- Treet står i veien for byggeprosjekter

GRATIS BEFARING

Hvis du er usikker, kan du kontakte oss for en gratis befaring. Vi vurderer treet ditt, foreslår løsninger, og gir deg et uforpliktende pristilbud. Med over ${yearsOfExperience} års erfaring kan vi si deg raskt hva som er best for din situasjon.

Ikke venter for lenge - syke trær kan bli farlige. Ta kontakt med oss i dag!`,
                category: 'Trepleie',
                readTime: '5 min',
                publishedDate: '2024-01-15',
                imageAlt: 'Syk tre som trenger vurdering',
            },
            {
                id: 'kostnad-trefelling-2026',
                title: 'Kostnad for trefelling i 2026 - Komplett guide',
                excerpt: 'Hvor mye koster det egentlig å felle et tre? Vi bryter ned alle kostnader.',
                content: `En av de første spørsmålene folk stiller når de kontakter oss er: "Hva koster trefelling?" Svaret er komplisert fordi det avhenger av mange faktorer. I denne guiden bryter vi ned all kostnader slik at du forstår hva du betaler for.

GJENNOMSNITTLIG PRIS FOR TREFELLING I 2026

For små trær (4-6 meter høyt):
Fra 3000-5000 kr. Enkle forhold og lett tilgang = lavere pris.

For medium trær (6-10 meter høyt):
Fra 5000-10000 kr. Krever mer utstyr og arbeid.

For store trær (10+ meter høyt):
Fra 10000-20000+ kr. Kan kreve spesialutstyr og flere timers arbeid.

Disse er gjennomsnittsestimater. Din pris kan være høyere eller lavere basert på faktorene nedenfor.

FAKTORER SOM PÅVIRKER PRISEN

Treets størrelse og høyde
Et større tre tar lengre tid og krever mer utstyr. Høyden påvirker risiko og hvor komplisert jobben er.

Treets tilstand
Et dårlig tre er lettere å felle enn et sunt. Et sikt tre har kanskje svakere struktur.

Plassering
Et tre som står langt fra huset og veien er lettere å felle. Et tre inneklemt mellom hus, ledninger og gjerde krever spesialistferdigheter og sikkerhetstiltak. Dette kan øke prisen betydelig.

Tilgjengelighet
Hvis vi kan kjøre maskiner helt fram til treet, sparer vi tid. Hvis vi må bære utstyr gjennom hagen, tar det lengre.

Grener som må kuttes først
Et tre med mange store grener som skal kuttes av før felling, tar lenger tid.

Kvisthåndtering og opprydding
Vil du at vi skal frese kubben? Frakte bort alt materialet? Dette påvirker prisen.

KOSTNADSEKSEMPLER FRA VÅRE PROSJEKTER

Eksempel 1: Småhustomt i Ås
Et 6-meter grantre midt på tomten. Lett tilgang, ingen hindringer. Tid: 2-3 timer. Pris: 4500 kr.

Eksempel 2: Oslo, boligstrøk
Et 8-meter birketreet nær hus og ledninger. Krevde spesialt utstyr og klatring. Tid: 5 timer. Pris: 8000 kr.

Eksempel 3: Akershus, vanskelig plassering
Et 12-meter furutre inneklemt mellom hus og vei. Klatring, seilkving av grener. Tid: Full dag (8 timer). Pris: 15000 kr.

SPARING MED GRATIS BEFARING

Vi tilbyr alltid gratis befaring. Under befaringen vurderer vi jobben, foreslår den beste metoden, og gir deg et nøyaktig og uforpliktende pristilbud.

Du er ikke forpliktet til noe. Vi gir deg informasjonen du trenger for å ta en god beslutning.

HVORFOR PRISENE VARIERER

Trefelling er ikke som en standardtjeneste. Hver jobb er unik. En billig pris kan bety at jobben blir gjort dårlig eller farlig. Vi prioriterer sikkerhet og kvalitet, som reflekteres i prisene.

Vi er også forsikret, noe som gir deg trygghet hvis noe skulle skje.

TIPS FOR Å SPARE PENGER

- Vent til vinter når vi har mer kapasitet
- Samle flere trær som skal fellas - rabatt på flere jobber
- La oss handle oppryddingen (vi bruker mindre tid på dette)
- Spør om flishugger - kan spare på bortkjøring

Kontakt oss i dag for en gratis befaring og exactt pristilbud!`,
                category: 'Prising',
                readTime: '7 min',
                publishedDate: '2024-01-10',
                imageAlt: 'Trefelling kostnad guide',
            },
            {
                id: 'sikkerhet-trefelling',
                title: 'Sikkerhet ved trefelling - Hva du må vite',
                excerpt: 'Trefelling er farlig arbeid. Lær om sikkerhetstiltak og hvorfor profesjonell hjelp er viktig.',
                content: `Trefelling er en av de farligste aktivitetene en privatperson kan gjøre. Hvert år er det dødsfalls- og alvorlige skadetilfeller relatert til trefelling. I denne artikkelen forklarer vi hvorfor fag mennesker er avgjørende for sikkerhet.

HVORFOR TREFELLING ER FARLIG

Et stort tre veier mange tonn. Når det faller, har det enorm kraft. Små feil i planlegging eller utføring kan føre til:

- Treet faller i gal retning
- Grener eller hele treet deler seg under felling
- Trevirket eller grener faller og treffer mennesker eller hus
- Treet får dårlig balanse under felling
- Maskiner veltes
- Klatrer faller fra høyde

DIY-FELLING: IKKE GJØR DET

Jeg hører ofte: "Jeg kan felle treet selv med motorsag." Her er hvorfor det er risikabelt:

Du har sannsynligvis ikke erfaring med å bedømme hvordan treet vil falle. Små vinkler kan avgjøre hvor treet faller - ofte ikke der du tror.

Motorsagen er dødelig i uerfarne hender. Motorsagulykker resulterer ofte i alvorlige kutt og blødninger.

Du mangler sikkerhetsutstyr som arbeidsbukse med forbygde lommer, kaskje og ørebeskyttelse.

Hvis treet treffer huset ditt eller nabo huset, er du ansvarlig for all skade.

Du kan ikke klatre sikkert. De fleste ulykker med treklatring skjer med personer uten trening.

PROFESJONELT SIKKERHETSUTSTYR

Når vi feller trær, bruker vi:

Sertifisert sikkerhetsutstyr: Arbeidsbukse med kevlarforing (motstand mot motorsag), stålhjelm, ørebeskyttelse, hansker, støvler med stålhette.

Tau og seil: For å sikre grener og kontrollere fallet.

Motorsager av høy kvalitet: Vedlikeholdt og brukt av erfarne operatører.

Moderne maskiner: For grunnarbeid, hvis nødvendig.

Førstehjelpsutstyr: I tilfelle ulykkestilfeller.

TRENING OG ERFARING

Vår erfarne klatrer har over ${yearsOfExperience} års erfaring. Han har:

- Gjennomført sertifiseringskurser
- Trenet med eksperter
- Håndtert hundrevis av klatring- og fellinger
- Erfaring med nødløsninger når ting blir komplisert

Denne erfaringen kan ikke erstattes av videoer på YouTube.

VI ER FULLT FORSIKRET

Trefellingsspesialisten har full ansvarsforsikring. Hvis noe skjer under arbeidet:

- Din eiendom er dekket
- Skader på nabo eiendom er dekket
- Personskader er dekket

Når du hirer en ikke-forsikret person og noe skjer, er det DU som betaler.

TEGN PÅ UPROFESJONELL TREFELLING

Vær forsiktig hvis:

- Personen har ingen forsikring
- De har ikke sikkerthetseutstyr
- De kan ikke forklare hvordan treet vil felle
- De vil ikke ta tid til planlegging
- De har ikke referanser

SIKKERT VALG

Å hyre en profesjonell trefeller er den smarteste investeringen du kan gjøre. Du sparer:

- Dine egne skader
- Risiko for skade på eiendom
- Juridiske problemer
- Forsikringskrav

Kontakt oss i dag for en gratis og sikker befaring!`,
                category: 'Sikkerhet',
                readTime: '6 min',
                publishedDate: '2024-01-05',
                imageAlt: 'Sikker trefelling med profesjonelt utstyr',
            },
            {
                id: 'beste-tid-trefelling',
                title: 'Beste tid for trefelling - Sesonger og timing',
                excerpt: 'Når bør du felle treet ditt? Lær om optimal timing basert på tretyper og vær.',
                content: `Når du planlegger å felle et tre, spørsmål er ofte: "Når bør jeg gjøre det?" Svaret er: Det avhenger. Ulike sesonger har fordeler og ulemper. Som erfarne trefellere i Oslo-området, hjelper vi deg å velge riktig tid.

HØST (SEPTEMBER - OKTOBER)

Fordeler:
- Trær er i dvale
- Mindre blad/nål gjør det lettere å se strukturen
- Vær er vanligvis stabilt
- Treet er tørrere inne, mer forutsigbart ved felling

Ulemper:
- Bakken kan være våt og lett
- Høytrykkssystem kan gjøre treet sprøtt

Best for: De fleste fellinger.

VINTER (NOVEMBER - FEBRUAR)

Fordeler:
- Trær er helt i dvale
- Minst risiko for stress på treet
- Bakken kan være frossen og lettere å jobbe på
- Mindre ublåst løv og mindre rottenende materiale
- Beste tiden for større fellinger

Ulemper:
- Kaldt for klatrere
- Mindre synlighet i snø
- Vanskelig vær kan stoppe jobben
- Veldig kort dagslys

Best for: Større trær, kritiske fellinger, når det er kaldt og stabilt.

VÅR (MARS - MAI)

Fordeler:
- Lengre dager, mer lys
- Generelt tørrere forhold
- Blomstrende trær (mindre viktig for fellinger)
- Ideelt for planlegging av sommerjobber

Ulemper:
- Trær begynner å få sap
- Bakken blir våt og mudrete
- Insekter vekkes opp
- Mer risiko for at treet "bløder"

Best for: Mindre trær, planlegging av større prosjekter.

SOMMER (JUNI - AUGUST)

Fordeler:
- Langt dagslys
- Tørt vær normalt
- God visuell kontroll

Ulemper:
- Trær har fullt løv - tung og vanskelig å se gjennom
- Varmt for arbeidere
- Mer usikkerhet i hvordan treet faller med fullt løv
- Busker og vegetasjon på bakken gjør oppryddingen vanskeligere

Best for: Mindre urgente jobber, når du ikke kan vente.

TIDSPLAN FOR ØSTLANDET (2026)

Januar - Februar: Utmerket. Stillt vær og trær er helt i dvale.
Mars - April: OK. Våt bakke, men trær er fortsatt i dvale.
Mai - Juni: Minst ideelt. Trær får sap, varmt.
Juli - August: Minst ideelt. Fullt løv, varmt.
September - Oktober: Utmerket. Høstfellinger er perfekt.
November - Desember: Utmerket. Vinterfellinger er sikre.

PLANLEGGING TIPS

Planlegg større fellinger om høsten eller vinteren for sikkerhet.

For mindre trær eller mindre prioritert arbeid, kan sommerfelling OK hvis det er tørt.

Hvis treet er farlig (risiko for å falle selv), venter ikke - fells den når treet og værforhold tillater det.

Kontakt oss tidlig. Vi kan planlegge jobben din for optimal timing!`,
                category: 'Planlegging',
                readTime: '5 min',
                publishedDate: '2023-12-28',
                imageAlt: 'Sesongbest trefelling planlegging',
            },
            {
                id: 'tomterydding-guide',
                title: 'Tomterydding - Steg for steg guide',
                excerpt: 'Planlegger å rydde tomten din? Her er din komplette guide.',
                content: `Tomterydding kan virke som en overvelmende oppgave. Du har kanskje arvet en eiendal som trenger rydding, eller du planlegger et byggprosjekt. Her er en komplett guide til prosessen.

STEG 1: VURDERING OG PLANLEGGING

Før du starter, trenger du å forstå omfanget:

Hva skal ryddes?
- Store trær
- Busker og mindre vegetasjon
- Gamle strukturer eller ruiner
- Steiner og prydblokkinger
- Jordmasser som skal flyttes

Hva med jorden?
- Skal det fylles på med ny jord?
- Skal terreng endres?
- Skal det graves ut?

Hvor skal alt materialet?
- Skal det fraktekses bort?
- Kan noe brukes (brennved, flis)?
- Er det miljøgifter som krever spesiell håndtering?

GRATIS BEFARING

Dette er hvor vi kommer inn. Vi besøker tomten, vurderer alt som må gjøres, og gir deg en detaljert plan og pristilbud.

STEG 2: FORBEREDELSE

Hvis det er elektriske ledninger: Kontakt før du starter.
Hvis det er underjordiske rør: Sjekk hvor de ligger.
Naboer: Fortell dem hva du gjør.

STEG 3: HOVEDFELLING

Større trær blir felt først. Vi bruker:
- Motorsag for felling
- Klatring for vanskelige trær
- Kran hvis nødvendig

STEG 4: KVISTHÅNDTERING

Etter felling, håndterer vi kvisten:
- Maskinell hacking til flis (miljøvennlig)
- Brennved hvis det er eik eller annet godt brennematerial
- Bortkjøring av resten

STEG 5: STUBBEFRESING

Stubber blir fjernet med spesialisert utstyr:
- Vi freser 20-30 cm under bakken
- Fjerner hovedrøtter
- Etterlater flat terreng

STEG 6: VEGETASJON OG BUSKER

Mindre vegetasjon blir fjernet:
- Hånd eller maskinell fjerning
- Rydding av rester
- Noen ganger bruk av herbisider (om nødvendig)

STEG 7: OPPRYDDING OG FINALISERING

Vi sørger for at alt blir ryddet:
- Hele tomten blir feiet
- Løse steiner og prydblokkinger blir fjernet eller oppbevart
- Området er klart for neste steg (bygning, plantning, etc.)

TIPS FOR Å MAKSIMERE VERDIEN

Rydd før salg: En ryddig tomt øker eiendomsverdien betydelig.
Bevar gode trær: Hvis det er vakre trær som er sunne, behold dem.
Lag enkel landskapsplan: Flat terreng er enklere å bygge på.
Planlegg drenering: Vann skal kunne drenere bort fra områder.

KOSTNAD FOR TOMTERYDDING

Små tomter (under 1000 m2):
Fra 15000-30000 kr avhengig av vegetasjon.

Medium tomter (1000-3000 m2):
Fra 30000-60000 kr.

Store tomter eller kompleks rydding:
Individuell pris etter befaring.

TIDSRAMME

En liten tomt: 1-2 dager
En medium tomt: 3-5 dager
En stor tomt: 1-2 uker

Mange faktorer påvirker dette:
- Mengde vegetasjon
- Terrengtype
- Værforhold
- Bortkjøring av materialer

VÅRE MASKINER OG RESSURSER

Vi har:
- Stor maskinpark for effektiv rydding
- Flere medarbeidere for raskere gjennomføring
- Biler og hengere for bortkjøring
- Spesialutstyr for stubber og rotting

KONTAKT OSS I DAG

Tomterydding er vår spesialitet. Med over ${yearsOfExperience} års erfaring har vi gjennomført hundrevis av tomteprosjekter i Oslo, Akershus, Østfold og Buskerud.

Få en gratis befaring i dag!`,
                category: 'Tomterydding',
                readTime: '8 min',
                publishedDate: '2023-12-20',
                imageAlt: 'Profesjonell tomterydding prosess',
            },
            {
                id: 'case-trefelling-nordre-follo',
                title: 'Case: Trefelling i Nordre Follo ved bolig og garasje',
                excerpt: 'Slik gjennomførte vi trygg trefelling i Nordre Follo med begrenset plass og full opprydding.',
                content: `Vi fikk henvendelse om et høyt grantre i Nordre Follo som sto tett på bolig og garasje. Kunden var bekymret for sikkerheten i sterk vind.

UTFORDRING

- Begrenset plass for tradisjonell felling
- Naboeiendom tett inntil
- Behov for rask og sikker gjennomføring

LØSNING

Vi brukte seksjonert nedtaking med klatrer og kontrollerte tau. Hver del av treet ble firet ned trygt for å unngå skade på bygg og uteområde.

RESULTAT

- Treet ble fjernet uten skader
- Alt virke ble ryddet og kjørt bort
- Kunden fikk dokumentert arbeid og tydelig prisgrunnlag

Denne typen oppdrag er typisk for trefelling i Nordre Follo der trær ofte står tett på bebyggelse.`,
                category: 'Case',
                readTime: '4 min',
                publishedDate: '2024-02-20',
                imageAlt: 'Case fra trefelling i Nordre Follo',
            },
            {
                id: 'case-stubbefresing-oslo',
                title: 'Case: Stubbefresing i Oslo etter felling av bjørk',
                excerpt: 'Etter trefelling i Oslo fjernet vi stubbe og røtter for å klargjøre hagen for ny plen.',
                content: `Etter en tidligere trefelling i Oslo ønsket kunden å fjerne stubben helt for å kunne etablere ny plen og bedre adkomst i hagen.

UTFORDRING

- Stubben sto nær kantstein og bed
- Viktig å minimere skader på omkringliggende område

LØSNING

Vi brukte beltegående stubbefreser og freste ca. 20-30 cm under bakkenivå. Synlige røtter ble fjernet, og området ble jevnet før avslutning.

RESULTAT

- Stubben ble helt fjernet
- Området var klart for videre hagearbeid
- Kunden slapp tungt manuelt arbeid og bortkjøring selv

Dette er et godt eksempel på effektiv stubbefjerning i Oslo med skånsom metode.`,
                category: 'Case',
                readTime: '3 min',
                publishedDate: '2024-02-12',
                imageAlt: 'Case fra stubbefresing i Oslo',
            },
            {
                id: 'case-trefelling-indre-ostfold',
                title: 'Case: Trefelling i Indre Østfold i krevende terreng',
                excerpt: 'Vi løste en krevende felling i Indre Østfold med trygg planlegging, klatring og effektiv opprydding.',
                content: `På et oppdrag i Indre Østfold skulle et stort furutre fjernes i skrånende terreng med begrenset maskintilgang.

UTFORDRING

- Bratt terreng og vanskelig logistikk
- Risiko for skade på gjerde og nabotomt
- Behov for sikker håndtering av store grener

LØSNING

Vi planla nedtak i etapper, med taukontroll og løpende sikring av arbeidsområdet. Alt trevirke ble håndtert fortløpende for å holde området trygt gjennom hele jobben.

RESULTAT

- Fullført uten skader på eiendom
- Effektiv bortkjøring av virke
- Tydelig dokumentert sluttresultat for kunden

Slik jobber vi med trefelling i Indre Østfold når forholdene krever ekstra kontroll.`,
                category: 'Case',
                readTime: '4 min',
                publishedDate: '2024-02-05',
                imageAlt: 'Case fra trefelling i Indre Østfold',
            },
        ],
    },

    faq: {
        title: 'Ofte stilte spørsmål',
        subtitle: 'Her finner du svar på de mest stilte spørsmålene om våre tjenester',
        questions: [
            {
                question: 'Hva koster trefelling?',
                answer: 'Prisen varierer avhengig av treets størrelse, plassering og tilgjengelighet. Vi tilbyr alltid gratis befaring og uforpliktende pristilbud. Kontakt oss for å få en prissetting basert på ditt spesifikke oppdrag.',
            },
            {
                question: 'Hvor lang tid tar det å felle et tre?',
                answer: 'Tiden det tar å felle et tre avhenger av flere faktorer som treets størrelse, plassering, og om det er hindringer i nærheten. Et enkelt tre kan ta fra noen timer til en hel dag. Vi gir deg et tidsestimat ved befaring.',
            },
            {
                question: 'Trenger jeg tillatelse for å felle trær?',
                answer: 'I noen kommuner kreves det tillatelse for å felle trær, spesielt for større trær eller trær i vernede områder. Vi anbefaler at du sjekker med din kommune før du bestiller trefelling. Vi kan også hjelpe deg med å finne informasjon om lokale reguleringer.',
            },
            {
                question: 'Rydder dere opp etter trefelling?',
                answer: 'Ja, vi sørger alltid for å rydde opp grundig etter endt arbeid. Dette inkluderer bortkjøring av trevirke, kvist og flis hvis ønskelig. Vi forlater stedet like fint som vi fant det.',
            },
            {
                question: 'Kan dere felle trær som står vanskelig til?',
                answer: `Ja, vår erfarne klatrer med over ${yearsOfExperience} års erfaring er vant med å håndtere utfordrende situasjoner. Vi har spesialutstyr for å ta ned trær som står inneklemt mellom hus, nær ledninger, eller i andre vanskelige plasseringer.`,
            },
            {
                question: 'Er dere forsikret?',
                answer: 'Ja, vi har full ansvarsforsikring som dekker eventuelle skader som måtte oppstå under arbeidet. Dette gir trygghet for deg som kunde. Du kan se vårt forsikringsbevis på "Om oss"-siden.',
            },
            {
                question: 'Hvilke områder betjener dere?',
                answer: 'Vi holder til i Ås kommune og tar på oss oppdrag i Oslo, Akershus, Østfold og store deler av Buskerud. Kontakt oss gjerne for å høre om vi kan ta oppdraget i ditt område.',
            },
            {
                question: 'Hva er stubbefresing?',
                answer: 'Stubbefresing er den mest skånsomme og effektive måten å fjerne stubber på. Vi freser ca. 20-30 cm under bakken for å fjerne hovedroten og alle synlige røtter, slik at ingen spor etter stubben er igjen. Maskinen har belter som unngår skade på plen og hage.',
            },
            {
                question: 'Kan jeg få treet fliset?',
                answer: 'Ja, vi tilbyr flishugging som en miljøvennlig måte å håndtere kvist, greiner og mindre trestammer på. Flisen egner seg godt som dekkbark i bed eller skråninger. Dette reduserer også volumet og sparer tid på bortkjøring.',
            },
            {
                question: 'Hvordan bestiller jeg tjenester?',
                answer: 'Du kan kontakte oss via kontaktskjemaet på nettsiden, ringe oss direkte, eller sende en e-post. Vi tilbyr alltid gratis befaring og uforpliktende pristilbud, så du vet nøyaktig hva du kan forvente før arbeidet starter.',
            },
            {
                question: 'Kan dere felle tre nær huset mitt uten skade?',
                answer: 'Ja, vi er spesialisert i treffelling i trange områder. Med erfaring og spesialutstyr kan vi felle trær helt nær hus, veier, og andre strukturer uten skade. Vi planlegger hver jobb nøye for å sikre sikkerheten for deg og dine omgivelser.',
            },
            {
                question: 'Hvor raskt kan dere komme?',
                answer: `Vi prøver å tilby fleksibel tidsbestilling. For akutte tilfeller kan vi ofte komme innen kort tid. Kontakt oss direkte på ${companyInfo.contact.phone.display} så diskuterer vi tilgjengelig tid for ditt oppdrag.`,
            },
            {
                question: 'Hva skjer hvis noe går galt under arbeidet?',
                answer: 'Vi har full ansvarsforsikring som dekker eventuelle skader som måtte oppstå under arbeidet. Vår erfarne team arbeider etter strenge sikkerhetsprotokoller for å minimalisere risiko. Se forsikringsbevis på "Om oss"-siden.',
            },
            {
                question: 'Er alt materialet fullt bortfraktet?',
                answer: 'Ja, vi sørger alltid for å rydde opp grundig og fjerne alt trevirke, kvist og flis hvis ønskelig. Du kan også velge å beholde noe av materialet, for eksempel flis til bruk som dekkbark eller brennved.',
            },
            {
                question: 'Kan jeg få referanser og før/etter bilder?',
                answer: `Ja, vi har gjennomført hundrevis av oppgaver de siste ${yearsOfExperience} årene. Vi kan gjerne vise deg eksempler på vårt tidligere arbeid og gi deg referanser fra fornøyde kunder. Kontakt oss for mer informasjon.`,
            },
            {
                question: 'Trenger jeg tillatelse for trefelling i Ås kommune?',
                answer: 'I Ås kommune kreves det tillatelse for trefelling av større trær. Vi anbefaler at du sjekker med kommunen din eller så kan vi hjelpe deg med informasjonen. Vi er kjent med lokale reguleringer og kan veilede deg gjennom prosessen.',
            },
            {
                question: 'Hva er gjennomsnittskostnaden for trefelling i Oslo?',
                answer: 'Prisene for trefelling i Oslo varierer fra 3000-15000 kr avhengig av treets størrelse, plassering og kompleksitet. Vi tilbyr alltid gratis befaring og uforpliktende pristilbud slik at du vet nøyaktig hva jobben vil koste før vi starter.',
            },
            {
                question: 'Hva er beste tid for trefelling og beskjæring?',
                answer: 'Beste tid for trefelling og beskjæring er vanligvis vinter og tidlig vår når treet er i dvale. Dette reduserer stresset på treet og gjør arbeidet enklere. Vi kan imidlertid håndtere trefelling hele året ved behov.',
            },
            {
                question: 'Opererer dere i hele Akershus og Østfold?',
                answer: 'Ja, vi opererer i hele Akershus og Østfold regioner, samt Oslo og deler av Buskerud. Vi holder til i Ås og har erfaring med alle områdene vi betjener. Kontakt oss for å bekrefte at vi kan hjelpe med ditt oppdrag.',
            },
        ],
    },
    locations: {
        title: 'Trefelling i',
        subtitle: 'Vi tilbyr gratis befaring, trygg gjennomføring og grundig opprydding.',
        ctaTitle: 'Trenger du hjelp i ditt område?',
        ctaText: 'Kontakt oss for gratis befaring og uforpliktende pristilbud.',
        areas: [
            {
                slug: 'oslo',
                name: 'Oslo',
                description: 'Trefelling i Oslo for private, borettslag og bedrifter. Vi hjelper med trygg trefelling, beskjæring og stubbefresing i tettbebygde områder.',
                intro: 'I Oslo utfører vi ofte oppdrag der trær står tett på hus, gjerder, veier og ledningsnett. Vi planlegger hvert oppdrag slik at arbeidet blir sikkert og effektivt.',
                highlights: [
                    'Trygg trefelling i trange forhold',
                    'Beskjæring for bedre lys og utsikt',
                    'Stubbefresing og komplett opprydding'
                ],
            },
            {
                slug: 'akershus',
                name: 'Akershus',
                description: 'Trefelling i Akershus med erfarne trefellere og moderne utstyr. Vi tilbyr gratis befaring for villaområder, gårdstun og større tomter.',
                intro: 'I Akershus dekker vi alt fra mindre hageoppdrag til større tomterydding. Vi tilpasser metode og utstyr etter terreng, tilgang og sikkerhetsbehov.',
                highlights: [
                    'Trefelling og trepleie for alle tomtestørrelser',
                    'Effektiv tomterydding for privat og næring',
                    'Bortkjøring av kvist, stammer og flis'
                ],
            },
            {
                slug: 'ostfold',
                name: 'Østfold',
                description: 'Profesjonell trefelling i Østfold med fokus på sikkerhet, kvalitet og ryddighet. Vi hjelper med felling, flishugging og stubbefresing.',
                intro: 'I Østfold tar vi oppdrag gjennom hele året. Enten du trenger felling av et risikotre eller rydding av vegetasjon, løser vi jobben trygt.',
                highlights: [
                    'Sikker felling av store og krevende trær',
                    'Flishugging og praktisk håndtering av trevirke',
                    'Gratis befaring og tydelig pristilbud'
                ],
            },
            {
                slug: 'buskerud',
                name: 'Buskerud',
                description: 'Trefelling i Buskerud for boligeiere, borettslag og entreprenører. Vi leverer trygg trefelling, beskjæring og rydding av tomt.',
                intro: 'I Buskerud har vi erfaring med krevende terreng og varierende tilgang. Vi setter sikkerhet først og finner en løsning som passer eiendommen din.',
                highlights: [
                    `Erfarne fagfolk med over ${yearsOfExperience} års praksis`,
                    'Beskjæring, stubbefresing og tomterydding',
                    'Effektiv gjennomføring med full forsikring'
                ],
            },
            {
                slug: 'nordre-follo',
                name: 'Nordre Follo',
                description: 'Trefelling i Nordre Follo for boliger, sameier og næring. Vi tilbyr trygg felling, stubbefresing og komplett opprydding.',
                intro: 'I Nordre Follo håndterer vi mange oppdrag der trær står nær bolig, garasje eller nabogrense. Vi bruker metoder som gir kontroll i trange omgivelser.',
                highlights: [
                    'Kontrollert trefelling i tett boligbebyggelse',
                    'Beskjæring og reduksjon av store trær',
                    'Rydding, flishugging og bortkjøring'
                ],
            },
            {
                slug: 'indre-ostfold',
                name: 'Indre Østfold',
                description: 'Trefelling i Indre Østfold med fokus på sikkerhet, effektiv fremdrift og ryddig sluttresultat.',
                intro: 'I Indre Østfold utfører vi oppdrag på både små boligtomter og større eiendommer. Vi tilpasser gjennomføring etter terreng, vær og tilgang.',
                highlights: [
                    'Trygg felling av store trær i krevende terreng',
                    'Stubbefresing og klargjøring av tomt',
                    'Gratis befaring med tydelig pristilbud'
                ],
            },
        ],
    },

    privacy: {
        navLabel: 'Personvern',
        title: 'Personvernerklæring',
        intro: 'Her forklarer vi hvilke opplysninger vi samler inn når du bruker nettsiden vår, hvorfor vi gjør det og hvilke rettigheter du har.',
        sections: [
            {
                heading: 'Behandlingsansvarlig',
                paragraphs: [
                    'Trefellingsspesialisten AS er behandlingsansvarlig for personopplysningene som samles inn via denne nettsiden. Kontaktinformasjon finner du nederst på siden.',
                ],
            },
            {
                heading: 'Kontaktskjema',
                paragraphs: [
                    'Når du sender oss en henvendelse, behandler vi navn, e-post, telefonnummer, adresse, meldingen din og eventuelle bilder du laster opp. Opplysningene brukes kun til å svare på henvendelsen og gi deg et pristilbud. Behandlingsgrunnlaget er å gjennomføre tiltak før en eventuell avtale (GDPR art. 6 nr. 1 b).',
                    'Skjemaet sendes som e-post via Resend, og henvendelsen lagres i vår e-postinnboks. Vi sletter henvendelser som ikke fører til oppdrag når de ikke lenger er nødvendige.',
                ],
            },
            {
                heading: 'Statistikk og feilsøking',
                paragraphs: [
                    'Vi bruker PostHog (servere i EU) for å forstå hvordan nettsiden brukes, for eksempel hvilke sider som besøkes og om kontaktskjemaet sendes, og for å oppdage tekniske feil. Vercel Speed Insights måler hvor raskt sidene laster. Behandlingsgrunnlaget er vår berettigede interesse i å forbedre nettsiden (GDPR art. 6 nr. 1 f).',
                    'Begge verktøyene er satt opp uten informasjonskapsler (cookies) og lagrer ingenting på enheten din. Vi bruker ikke dataene til markedsføring og deler dem ikke med andre.',
                ],
            },
            {
                heading: 'Informasjonskapsler',
                paragraphs: [
                    'Nettsiden bruker ikke informasjonskapsler eller lignende lagring på enheten din. Derfor ber vi heller ikke om samtykke til dette.',
                ],
            },
            {
                heading: 'Databehandlere',
                paragraphs: [
                    'Vi bruker Vercel (drift av nettsiden), Resend (utsending av e-post) og PostHog (statistikk og feillogging). Disse behandler opplysninger på våre vegne og er bundet av databehandleravtaler.',
                ],
            },
            {
                heading: 'Dine rettigheter',
                paragraphs: [
                    'Du har rett til innsyn i, retting og sletting av opplysningene vi har om deg, og til å protestere mot behandlingen. Ta kontakt med oss på e-post for å bruke rettighetene dine. Du kan også klage til Datatilsynet.',
                ],
            },
        ],
    },
} as const
