'use client'

import { useState } from 'react'
import Image from 'next/image'
import { colors } from '@/config/colors'

interface BeforeAfterItem {
    id: string
    beforeImage: string
    afterImage: string
    title: string
    description: string
}

interface BeforeAfterGalleryProps {
    title: string
    items: BeforeAfterItem[]
}

export default function BeforeAfterGallery({ title, items }: BeforeAfterGalleryProps) {
    const [selectedId, setSelectedId] = useState<string | null>(items[0]?.id || null)
    const selected = items.find(item => item.id === selectedId)

    if (!selected) return null

    return (
        <section className={`py-20 ${colors.background.white}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl sm:text-4xl font-extrabold ${colors.text.gray[900]} tracking-tight mb-3`}>
                        {title}
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Gallery list */}
                    <div className="lg:col-span-1">
                        <div className="grid gap-3">
                            {items.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => setSelectedId(item.id)}
                                    className={`p-4 text-left rounded-lg border-2 transition-all ${
                                        selectedId === item.id
                                            ? `${colors.border.primary[600]} ${colors.background.primary[50]}`
                                            : `${colors.border.gray[200]} ${colors.hover.background.gray[50]}`
                                    }`}
                                >
                                    <h3 className={`font-semibold ${colors.text.gray[900]} mb-1`}>
                                        {item.title}
                                    </h3>
                                    <p className={`text-sm ${colors.text.gray[600]}`}>
                                        {item.description}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Selected project display */}
                    <div className="lg:col-span-2">
                        {selected && (
                            <div>
                                {/* Before/After slider */}
                                <div className="relative w-full aspect-square mb-6 rounded-lg overflow-hidden shadow-lg">
                                    <div className="relative w-full h-full">
                                        {/* After image (background) */}
                                        <Image
                                            src={selected.afterImage}
                                            alt={`${selected.title} - etter`}
                                            fill
                                            className="object-cover"
                                            quality={85}
                                        />

                                        {/* Before image overlay */}
                                        <div className="absolute inset-0">
                                            <Image
                                                src={selected.beforeImage}
                                                alt={`${selected.title} - før`}
                                                fill
                                                className="object-cover"
                                                quality={85}
                                            />
                                        </div>

                                        {/* Before label */}
                                        <div className="absolute top-4 left-4">
                                            <span className={`${colors.background.white} ${colors.text.gray[900]} px-3 py-1 rounded-full text-sm font-semibold shadow-md`}>
                                                FØR
                                            </span>
                                        </div>

                                        {/* After label */}
                                        <div className="absolute top-4 right-4">
                                            <span className={`${colors.background.primary[600]} ${colors.text.white} px-3 py-1 rounded-full text-sm font-semibold shadow-md`}>
                                                ETTER
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Project info */}
                                <div className={`${colors.background.primary[50]} p-6 rounded-lg`}>
                                    <h3 className={`text-xl font-bold ${colors.text.gray[900]} mb-2`}>
                                        {selected.title}
                                    </h3>
                                    <p className={`${colors.text.gray[700]} leading-relaxed`}>
                                        {selected.description}
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
