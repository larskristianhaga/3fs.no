import Image from 'next/image'
import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: 'Tjenester - Trefelling, Beskjæring og Stubbefresing',
    description: 'Komplette trefellingstjenester inkludert trefelling, beskjæring, stubbefresing, tomterydding, flishugging og bortkjøring. Profesjonelle arborister som betjener privatkunder, bedrifter og kommuner i Oslo, Akershus, Østfold og Buskerud.',
    keywords: 'trefelling, beskjæring, stubbefresing, tomterydding, flishugging, bortkjøring, arborist, treklatring, trepleie, Oslo, Akershus, Østfold, Buskerud',
    alternates: {
        canonical: '/tjenester',
    },
    openGraph: {
        title: 'Tjenester - Trefelling, Beskjæring og Stubbefresing | Trefellingsspesialisten AS',
        description: 'Komplette trefellingstjenester inkludert trefelling, beskjæring, stubbefresing, tomterydding, flishugging og bortkjøring. Profesjonelle arborister i Oslo-området.',
        images: [{
            url: '/images/tjenester/trefelling.jpg',
            width: 1200,
            height: 630,
            alt: 'Trefellingsspesialisten AS - Trefellingstjenester',
        }],
        url: 'https://3fs.no/tjenester',
        type: 'website',
        locale: 'nb_NO',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Tjenester - Trefelling, Beskjæring og Stubbefresing | Trefellingsspesialisten AS',
        description: 'Komplette trefellingstjenester i Oslo, Akershus, Østfold og Buskerud.',
        images: ['/images/tjenester/trefelling.jpg'],
    },
}

const services = [
    {
        id: 'trefelling', title: 'Trefelling',
        description: 'Vi utfører felling av alle typer trær, både små og store. Hvert tre er unikt med tanke på størrelse, tilstand og plassering, og det kreves derfor ulike fellingsmetoder, for å ta ned treet på en sikker og skånsom måte. Vår erfaren klatrer med mer enn 15 års erfaring, er vant med å håndtere utfordrende situasjoner i høyden og har spesialutstyr for å ta ned spesielt vanskelige trær.',
        image: '/images/tjenester/trefelling.jpg',
    },
    {
        id: 'stubbefresing', title: 'Stubbefresing',
        description: 'Stubbefresing er den mest skånsomme og effektive måten å fjerne stubber på som står i veien eller som du ønsker å fjerne. Vi freser bort alle synlige røtter, og ca. 20-30 cm under bakken for å frese hovedroten under stubben, slik at alle spor etter stubben og røttene er fjernet. Maskinen har belter, så vi unngår skade på plen og hage, og du sitter igjen med et flott resultat.',
        image: '/images/tjenester/stubbefresing.jpg',
    },
    {
        id: 'bortkjoring', title: 'Bortkjøring',
        description: 'Bortkjøring av flis, greiner og trestammer etter gjennomført arbeid er noe vi gjerne hjelper med. Etter felling kan det være mye som skal ryddes, og fjernes, noe som kan være tidskrevende å gjøre selv. Vi har et stort utvalg av kjøretøy, og hengere som gjør bortkjøringen av alt trevirke effektivt og enkelt.',
        image: '/images/tjenester/bortkjoring.jpg',
    },
    {
        id: 'flishugging', title: 'Flishugging',
        description: 'Flishugging er en miljøvennlig og effektiv måte å rydde kvist, greiner og mindre trestammer på. Maskinen kverner trevirke til flis, og kan ta trestammer inntil 30 cm i diameter. Dette reduserer volumet av trevirke etter et trefellingsoppdrag og sparer tid på bortkjøring. Flisen fra vår flishugger egner seg godt som dekkbark i bed eller skråninger og som fyllmasse for å jevne terreng.',
        image: '/images/tjenester/flishugging.jpg',
    },
    {
        id: 'Beskjaering', title: 'Beskjæring',
        description: 'Beskjæring kan være en fin løsning om treet er større eller høyere enn du ønsker, eller hvis det hindrer utsikt eller sol. Store trær kan beskjæres, reduseres, formes eller toppes, alt ettersom hva du som kunde ønsker. Våre dyktige trefellere har alle gjennomført beskjæringskurs, og har kompetanse innen beskjæring av alle typer trær, hekker og andre buskvekster.',
        image: '/images/tjenester/beskjaering.jpg',
    },
    {
        id: 'tomterydding', title: 'Tomterydding',
        description: 'I vår maskin- og utstyrspark har vi alt vi trenger for å effektivt klargjøre og rydde en eiendom for trær, busker og annen vegetasjon. Vi har lang erfaring med tomterydding for både private kunder, entreprenører og kommuner. Våre maskiner og utstyr er beregnet på både små og store områder, og vi kan håndtere arbeid i krevende og vanskelig terreng.',
        image: '/images/tjenester/tomterydding.jpg',
    }
]

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header/>

            <section className="relative  py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Tjenester
                        </h1>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {services.map((service, index) => (
                            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                <div className="relative h-64">
                                    <Image
                                        src={service.image}
                                        alt={`${service.title} - Professional tree service`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        priority={index < 2}
                                        quality={85}
                                        {...(index >= 2 && { loading: "lazy" as const })}
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h2 className="text-2xl font-bold text-gray-900">
                                            {service.title}
                                        </h2>
                                        <span className="text-green-600 font-semibold text-lg">
                    </span>
                                    </div>
                                    <p className="text-gray-600 mb-6">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
