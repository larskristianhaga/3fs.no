import Image from 'next/image'
import Footer from '@/components/Footer'
import Header from "@/components/Header";
import type {Metadata} from 'next'

export const metadata: Metadata = {
    title: 'Om oss - Over 15 års erfaring med trefelling',
    description: 'Lær mer om Trefellingsspesialisten AS - Over 15 års erfaring med profesjonell trepleie og trefelling. Vi holder til i Ås og betjener Oslo, Akershus, Østfold og Buskerud. Fullt forsikret og sertifiserte arborister.',
    keywords: 'om trefellingsfirma, profesjonelle arborister, sertifisert trefelling, erfaren trepleie, Ås, Oslo, Akershus, trefellingshistorie',
    alternates: {
        canonical: '/om-oss',
    },
    openGraph: {
        title: 'Om oss - Over 15 års erfaring med trefelling | Trefellingsspesialisten AS',
        description: 'Over 15 års erfaring med profesjonell trepleie og trefelling. Vi holder til i Ås og betjener Oslo, Akershus, Østfold og Buskerud. Fullt forsikret og sertifiserte arborister.',
        images: [{
            url: '/images/om-oss/fugleperspektiv-maskiner-fra-tre.jpg',
            width: 1200,
            height: 630,
            alt: 'Trefellingsspesialisten AS i arbeid',
        }],
        url: 'https://3fs.no/om-oss',
        type: 'website',
        locale: 'nb_NO',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Om oss - Over 15 års erfaring med trefelling | Trefellingsspesialisten AS',
        description: 'Over 15 års erfaring med profesjonell trepleie. Holder til i Ås, betjener Oslo-området.',
        images: ['/images/om-oss/fugleperspektiv-maskiner-fra-tre.jpg'],
    },
}

const teamMembers = [
    {
        name: 'Pål-Erik Engedahl',
        role: 'Eier, klatrer og trefeller',
        image: '/images/om-oss/portrett-pe.jpg',
    },
    {
        name: 'Ruud van der Ven',
        role: 'Trefeller og maskinfører',
        image: '/images/om-oss/portrett-ruud.jpg',
    },
    {
        name: 'Oleksandr Khokhlyuk',
        role: 'Trefeller og oppryddnings-ansvarlig',
        image: '/images/om-oss/portrett-olli.jpg',
    },
    {
        name: 'Bobby',
        role: 'Maskot',
        image: '/images/om-oss/portrett-bobby.jpg',
    }
]

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header/>

            <section className="relative  py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <div className="mb-8 lg:mb-0">
                            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                                Om oss
                            </h1>
                            <p className="mt-4 text-xl text-gray-600">
                                Om oss
                                Trefellingsspesialisten holder til i Ås kommune, og vi tar på oss oppdrag i Oslo,
                                Akershus, Østfold og store deler av Buskerud. Vi tilbyr alt innen trefelling,
                                beskjæring, stubbefresing, flishugging, bortkjøring og oppryddning. Vi har oppdrag for
                                stat og kommune, bedrifter og borettslag, privat- og ferie eiendommer. Vi tilbyr alltid
                                en gratis befaring og uforpliktende pristilbud.
                            </p>
                            <p className="mt-4 text-xl text-gray-600">
                                Med erfarne fagfolk og korrekt utstyr feller og beskjærer vi alle typertrær på en
                                skånsom og sikker måte. Vår erfaren klatrer med mer enn 15 års erfaring, er vant med å
                                håndtere utfordrende situasjoner i høyden og har spesialutstyr for å ta ned spesielt
                                vanskelige trær. Så trær som står litt vrient til i hagen, inneklemt mellom hus,
                                ledningsnett, veier eller andre hindringer er ikke noe problem, vi tar jobben!
                            </p>
                            <p className="mt-4 text-xl text-gray-600">
                                Ingen oppdrag er for store eller små. Vi hjelper deg med akkurat den delen av jobben som
                                du ikke får til eller ønsker å gjøre selv. Når jobben er ferdig sørger alltid for å
                                rydde opp, og forlater stedet like fint som vi fant det.
                            </p>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/om-oss/fugleperspektiv-maskiner-fra-tre.jpg"
                                alt="GreenCut Tree Services team at work"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-xl"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <div className="relative w-48 h-48 mx-auto mb-4">
                                    <Image
                                        src={member.image}
                                        alt={`Portrett av ${member.name}`}
                                        fill
                                        className="rounded-full object-cover shadow-lg"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                <p className="text-green-600 font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className=" rounded-lg p-8">
                        <a
                            href="documents/forsikringssertifikat-ansvar-2025-2026.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
                        >
                            Se forsikringsbevis
                        </a>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
