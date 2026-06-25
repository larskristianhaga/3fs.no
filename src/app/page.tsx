import Image from 'next/image'
import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PreloadLink from "@/components/PreloadLink";
import Testimonials from "@/components/Testimonials";
import {companyInfo} from '@/config/company'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { siteText } from '@/content/text'
import { colors } from '@/config/colors'

export const metadata: Metadata = {
    title: 'Trefelling i Oslo og Akershus | Erfarne trefellere | Trefellingsspesialisten AS',
    description: 'Erfarne trefellere for trygg trefelling, beskjæring og stubbefresing i Oslo, Akershus, Østfold og Buskerud. Gratis befaring, rask respons og tydelig pris.',
    keywords: 'trefelling, trefellere, trefeller, trepleie, arborist, beskjæring, stubbefresing, tomterydding, Oslo, Akershus, Østfold, Buskerud, Ås',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Trefelling i Oslo og Akershus | Erfarne trefellere',
        description: 'Trygg trefelling, beskjæring og stubbefresing med erfarne trefellere. Gratis befaring og tydelig pristilbud.',
        images: [{
            url: '/images/beskjaert-tre.jpg',
            width: 1200,
            height: 630,
            alt: 'Trefellingsspesialisten AS - Profesjonell trefelling og beskjæring',
        }],
        url: 'https://3fs.no',
        type: 'website',
        locale: 'nb_NO',
        siteName: 'Trefellingsspesialisten AS',
    },
}

export default function HomePage() {
    return (
        <div className={`min-h-screen ${colors.background.white}`}>
            <Header/>

            <section className={`relative overflow-hidden ${colors.background.primary[50]} py-20 sm:py-28`}>
                {/* Decorative background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 opacity-70"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="mb-8 lg:mb-0">
                            <h1 className={`text-4xl font-extrabold ${colors.text.gray[900]} sm:text-5xl lg:text-6xl wrap-break-word leading-tight tracking-tight`}>
                                {siteText.home.hero.title}
                            </h1>
                            <p className={`mt-6 text-lg sm:text-xl ${colors.text.gray[700]} max-w-3xl leading-relaxed`}>
                                {siteText.home.hero.description}
                            </p>

                            {/* Trust badges */}
                            <div className="mt-8 flex flex-wrap gap-4">
                                {siteText.home.hero.trustBadges.map((badge, index) => (
                                    <div key={index} className={`flex items-center gap-2 ${colors.text.primary[700]} font-medium text-sm sm:text-base`}>
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {badge}
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <Button asChild variant="default" size="lg">
                                    <PreloadLink href="/kontakt-oss">
                                        {siteText.home.hero.cta}
                                    </PreloadLink>
                                </Button>
                                <Button asChild variant="outline" size="lg">
                                    <a href={`tel:${companyInfo.contact.phone.href}`}>
                                        📞 {companyInfo.contact.phone.display}
                                    </a>
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur-lg opacity-20"></div>
                            <Image
                                src="/images/beskjaert-tre.jpg"
                                alt="Profesjonell trefelling og beskjæring"
                                width={370}
                                height={500}
                                className="rounded-2xl shadow-2xl w-full h-auto relative ring-1 ring-gray-200"
                                priority
                                quality={85}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 370px"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl font-extrabold ${colors.text.gray[900]} sm:text-4xl tracking-tight`}>
                            {siteText.home.whyChooseUs.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-8 rounded-xl hover:bg-green-50 transition-all duration-300 group">
                            <div
                                className={`w-20 h-20 ${colors.background.primary[100]} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                <svg className={`w-10 h-10 ${colors.text.primary[600]}`} fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className={`text-xl font-bold ${colors.text.gray[900]} mb-3`}>{siteText.home.whyChooseUs.experience.title}</h3>
                            <p className={`text-base ${colors.text.gray[600]} leading-relaxed`}>
                                {siteText.home.whyChooseUs.experience.description}
                            </p>
                        </div>
                        <div className="text-center p-8 rounded-xl hover:bg-green-50 transition-all duration-300 group">
                            <div
                                className={`w-20 h-20 ${colors.background.primary[100]} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                <svg className={`w-10 h-10 ${colors.text.primary[600]}`} fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                </svg>
                            </div>
                            <h3 className={`text-xl font-bold ${colors.text.gray[900]} mb-3`}>{siteText.home.whyChooseUs.insured.title}</h3>
                            <p className={`text-base ${colors.text.gray[600]} leading-relaxed`}>
                                {siteText.home.whyChooseUs.insured.description}
                            </p>
                        </div>
                        <div className="text-center p-8 rounded-xl hover:bg-green-50 transition-all duration-300 group">
                            <div
                                className={`w-20 h-20 ${colors.background.primary[100]} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                <svg className={`w-10 h-10 ${colors.text.primary[600]}`} fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className={`text-xl font-bold ${colors.text.gray[900]} mb-3`}>{siteText.home.whyChooseUs.fast.title}</h3>
                            <p className={`text-base ${colors.text.gray[600]} leading-relaxed`}>
                                {siteText.home.whyChooseUs.fast.description}
                            </p>
                        </div>
                        <div className="text-center p-8 rounded-xl hover:bg-green-50 transition-all duration-300 group">
                            <div
                                className={`w-20 h-20 ${colors.background.primary[100]} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}>
                                <svg className={`w-10 h-10 ${colors.text.primary[600]}`} fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className={`text-xl font-bold ${colors.text.gray[900]} mb-3`}>{siteText.home.whyChooseUs.competitive.title}</h3>
                            <p className={`text-base ${colors.text.gray[600]} leading-relaxed`}>
                                {siteText.home.whyChooseUs.competitive.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={`py-20 ${colors.background.primary[50]}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="mb-10 lg:mb-0">
                            <h2 className={`text-3xl sm:text-4xl font-extrabold ${colors.text.gray[900]} mb-6 tracking-tight`}>
                                {siteText.home.ourStory.title}
                            </h2>
                            <div className={`space-y-4 text-base sm:text-lg ${colors.text.gray[700]} leading-relaxed`}>
                                {siteText.home.ourStory.content.map((item, index) => (
                                    <p key={index}>
                                        {index === 0 ? `${companyInfo.name} ${item.paragraph}` : item.paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-96 lg:h-[500px]">
                            <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-600 rounded-2xl blur opacity-20"></div>
                            <Image
                                src="/images/om-oss/fugleperspektiv-maskiner-fra-tre.jpg"
                                alt={siteText.home.ourStory.imageAlt}
                                fill
                                className="rounded-2xl shadow-2xl object-cover relative ring-1 ring-gray-200"
                                quality={85}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className={`py-20 ${colors.background.white}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl sm:text-4xl font-extrabold ${colors.text.gray[900]} tracking-tight`}>
                            {siteText.home.servicesSection.title}
                        </h2>
                        <p className={`mt-4 text-lg sm:text-xl ${colors.text.gray[600]} max-w-3xl mx-auto`}>
                            {siteText.home.servicesSection.subtitle}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>{siteText.home.servicesSection.treeFelling.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    {siteText.home.servicesSection.treeFelling.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <PreloadLink href="/tjenester#trefelling"
                                      className={`${colors.text.primary[600]} hover:underline font-medium`}>
                                    {siteText.home.servicesSection.treeFelling.linkText}
                                </PreloadLink>
                            </CardFooter>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{siteText.home.servicesSection.stumpGrinding.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    {siteText.home.servicesSection.stumpGrinding.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <PreloadLink href="/tjenester#stubbefresing"
                                      className={`${colors.text.primary[600]} hover:underline font-medium`}>
                                    {siteText.home.servicesSection.stumpGrinding.linkText}
                                </PreloadLink>
                            </CardFooter>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{siteText.home.servicesSection.pruning.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    {siteText.home.servicesSection.pruning.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <PreloadLink href="/tjenester#beskjaering"
                                      className={`${colors.text.primary[600]} hover:underline font-medium`}>
                                    {siteText.home.servicesSection.pruning.linkText}
                                </PreloadLink>
                            </CardFooter>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{siteText.home.servicesSection.siteClearance.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    {siteText.home.servicesSection.siteClearance.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <PreloadLink href="/tjenester#tomterydding"
                                      className={`${colors.text.primary[600]} hover:underline font-medium`}>
                                    {siteText.home.servicesSection.siteClearance.linkText}
                                </PreloadLink>
                            </CardFooter>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{siteText.home.servicesSection.chipping.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    {siteText.home.servicesSection.chipping.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <PreloadLink href="/tjenester#flishugging"
                                      className={`${colors.text.primary[600]} hover:underline font-medium`}>
                                    {siteText.home.servicesSection.chipping.linkText}
                                </PreloadLink>
                            </CardFooter>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle>{siteText.home.servicesSection.removal.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">
                                    {siteText.home.servicesSection.removal.description}
                                </CardDescription>
                            </CardContent>
                            <CardFooter>
                                <PreloadLink href="/tjenester#bortkjoring"
                                      className={`${colors.text.primary[600]} hover:underline font-medium`}>
                                    {siteText.home.servicesSection.removal.linkText}
                                </PreloadLink>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="text-center mt-10">
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button asChild size="lg">
                                <PreloadLink href="/tjenester">
                                    {siteText.home.servicesSection.allServicesButton}
                                </PreloadLink>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <PreloadLink href="/trefelling-pris">
                                    Se pris for trefelling
                                </PreloadLink>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonials
                title={siteText.home.testimonials.title}
                subtitle={siteText.home.testimonials.subtitle}
                items={siteText.home.testimonials.items}
            />

            <section className={`py-20 ${colors.background.white}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`${colors.background.primary[600]} rounded-3xl shadow-2xl overflow-hidden relative`}>
                        {/* Decorative gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 opacity-90"></div>
                        
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 relative">
                            <div className="p-8 sm:p-10 lg:p-14">
                                <h2 className={`text-3xl sm:text-4xl font-extrabold ${colors.text.white} mb-6 tracking-tight`}>
                                    Kontakt oss i dag
                                </h2>
                                <p className={`${colors.text.primary[100]} text-lg sm:text-xl mb-8 leading-relaxed`}>
                                    Vi tilbyr gratis befaring og uforpliktende pristilbud. Ta kontakt så hjelper vi deg!
                                </p>
                                <div className="space-y-5 mb-8">
                                    <div className="flex items-center text-white">
                                        <svg className="w-7 h-7 mr-4 flex-shrink-0" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                        <a href={`tel:${companyInfo.contact.phone.href}`}
                                           className="text-lg sm:text-xl hover:underline font-semibold">
                                            {companyInfo.contact.phone.display}
                                        </a>
                                    </div>
                                    <div className="flex items-center text-white">
                                        <svg className="w-7 h-7 mr-4 flex-shrink-0" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                        <a href={`mailto:${companyInfo.contact.email}`}
                                           className="text-lg sm:text-xl hover:underline break-words font-semibold">
                                            {companyInfo.contact.email}
                                        </a>
                                    </div>
                                    <div className="flex items-start text-white">
                                        <svg className="w-7 h-7 mr-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        <span className="text-lg sm:text-xl font-semibold">
                                            {companyInfo.serviceAreasText}
                                        </span>
                                    </div>
                                </div>
                                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto shadow-lg hover:shadow-xl">
                                    <PreloadLink href="/kontakt-oss">
                                        Send oss en melding
                                    </PreloadLink>
                                </Button>
                            </div>
                            <div className="relative h-80 lg:h-auto">
                                <Image
                                    src="/images/beskjaert-tre.jpg"
                                    alt="Kontakt Trefellingsspesialisten"
                                    fill
                                    className="object-cover opacity-30 lg:opacity-50"
                                    quality={85}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}
