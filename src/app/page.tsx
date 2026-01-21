import Image from 'next/image'
import type {Metadata} from 'next'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PreloadLink from "@/components/PreloadLink";
import {companyInfo} from '@/config/company'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { siteText } from '@/content/text'

export const metadata: Metadata = {
    title: 'Trefellingsspesialisten AS | Trefelling, Beskjæring, Tomteryddning, stubbefresing | Oslo, Akershus, Østfold, og Buskerud',
    description: 'Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Erfarne fagfolk med over 15 års erfaring. Forsikret og sertifisert. Gratis befaring og konkurransedyktige priser.',
    keywords: 'trefelling, trepleie, arborist, beskjæring, stubbefresing, tomterydding, trefeller, klatring, Oslo, Akershus, Østfold, Buskerud, Ås',
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'Trefellingsspesialisten AS | Profesjonelle Trefellingstjenester',
        description: 'Profesjonelle trefellingstjenester i Oslo, Akershus, Østfold og Buskerud. Erfarne fagfolk med over 15 års erfaring. Gratis befaring og konkurransedyktige priser.',
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
        <div className="min-h-screen bg-white">
            <Header/>

            <section className="relative bg-green-50 py-16 sm:py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                        <div className="mb-8 lg:mb-0">
                            <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl lg:text-6xl break-words">
                                {siteText.home.hero.title}
                            </h1>
                            <p className="mt-6 text-base sm:text-xl text-gray-600 max-w-3xl leading-relaxed">
                                {siteText.home.hero.description}
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                <Button asChild variant="outline" size="lg">
                                    <PreloadLink href="/kontakt-oss">
                                        {siteText.home.hero.cta}
                                    </PreloadLink>
                                </Button>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/beskjaert-tre.jpg"
                                alt="Profesjonell trefelling og beskjæring"
                                width={370}
                                height={500}
                                className="rounded-lg shadow-xl w-full h-auto"
                                priority
                                quality={85}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 370px"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                            {siteText.home.whyChooseUs.title}
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6">
                            <div
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{siteText.home.whyChooseUs.experience.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {siteText.home.whyChooseUs.experience.description}
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{siteText.home.whyChooseUs.insured.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {siteText.home.whyChooseUs.insured.description}
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{siteText.home.whyChooseUs.fast.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {siteText.home.whyChooseUs.fast.description}
                            </p>
                        </div>
                        <div className="text-center p-6">
                            <div
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor"
                                     viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{siteText.home.whyChooseUs.competitive.title}</h3>
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                                {siteText.home.whyChooseUs.competitive.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="mb-8 lg:mb-0">
                            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6">
                                {siteText.home.ourStory.title}
                            </h2>
                            <div className="space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                                <p>
                                    {companyInfo.name} {siteText.home.ourStory.paragraph1}
                                </p>
                                <p>
                                    {siteText.home.ourStory.paragraph2}
                                </p>
                                <p>
                                    {siteText.home.ourStory.paragraph3}
                                </p>
                                <p>
                                    {siteText.home.ourStory.paragraph4}
                                </p>
                            </div>
                        </div>
                        <div className="relative h-96">
                            <Image
                                src="/images/om-oss/fugleperspektiv-maskiner-fra-tre.jpg"
                                alt={siteText.home.ourStory.imageAlt}
                                fill
                                className="rounded-lg shadow-xl object-cover"
                                quality={85}
                                sizes="(max-width: 768px) 100vw, 50vw"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
                            {siteText.home.servicesSection.title}
                        </h2>
                        <p className="mt-4 text-base sm:text-xl text-gray-600">
                            {siteText.home.servicesSection.subtitle}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="hover:shadow-lg transition-shadow">
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
                                      className="text-green-600 hover:underline font-medium">
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
                                      className="text-green-600 hover:underline font-medium">
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
                                      className="text-green-600 hover:underline font-medium">
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
                                      className="text-green-600 hover:underline font-medium">
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
                                      className="text-green-600 hover:underline font-medium">
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
                                      className="text-green-600 hover:underline font-medium">
                                    {siteText.home.servicesSection.removal.linkText}
                                </PreloadLink>
                            </CardFooter>
                        </Card>
                    </div>
                    <div className="text-center mt-10">
                        <Button asChild size="lg">
                            <PreloadLink href="/tjenester">
                                {siteText.home.servicesSection.allServicesButton}
                            </PreloadLink>
                        </Button>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">
                            {siteText.home.testimonials.title}
                        </h2>
                        <p className="mt-4 text-base sm:text-xl text-gray-600">
                            {siteText.home.testimonials.subtitle}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                                {siteText.home.testimonials.testimonial1.text}
                            </p>
                            <p className="font-semibold text-gray-900 text-sm sm:text-base">{siteText.home.testimonials.testimonial1.author}</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                                {siteText.home.testimonials.testimonial2.text}
                            </p>
                            <p className="font-semibold text-gray-900 text-sm sm:text-base">{siteText.home.testimonials.testimonial2.author}</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
                            <div className="flex items-center mb-4">
                                <div className="flex text-yellow-400">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                </div>
                            </div>
                            <p className="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
                                {siteText.home.testimonials.testimonial3.text}
                            </p>
                            <p className="font-semibold text-gray-900 text-sm sm:text-base">{siteText.home.testimonials.testimonial3.author}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-green-600 rounded-2xl shadow-xl overflow-hidden">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                            <div className="p-6 sm:p-8 lg:p-12">
                                <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
                                    Kontakt oss i dag
                                </h2>
                                <p className="text-green-100 text-base sm:text-lg mb-6 leading-relaxed">
                                    Vi tilbyr gratis befaring og uforpliktende pristilbud. Ta kontakt så hjelper vi deg!
                                </p>
                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center text-white">
                                        <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                        <a href={`tel:${companyInfo.contact.phone.href}`}
                                           className="text-base sm:text-lg hover:underline">
                                            {companyInfo.contact.phone.display}
                                        </a>
                                    </div>
                                    <div className="flex items-center text-white">
                                        <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                        <a href={`mailto:${companyInfo.contact.email}`}
                                           className="text-base sm:text-lg hover:underline break-words">
                                            {companyInfo.contact.email}
                                        </a>
                                    </div>
                                    <div className="flex items-start text-white">
                                        <svg className="w-6 h-6 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor"
                                             viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                        <span className="text-base sm:text-lg">
                                            {companyInfo.serviceAreasText}
                                        </span>
                                    </div>
                                </div>
                                <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto">
                                    <PreloadLink href="/kontakt-oss">
                                        Send oss en melding
                                    </PreloadLink>
                                </Button>
                            </div>
                            <div className="relative h-64 lg:h-auto">
                                <Image
                                    src="/images/beskjaert-tre.jpg"
                                    alt="Kontakt Trefellingsspesialisten"
                                    fill
                                    className="object-cover"
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
