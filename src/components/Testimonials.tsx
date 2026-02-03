import { colors } from '@/config/colors'

interface TestimonialItem {
    text: string
    author: string
    location: string
}

interface TestimonialsProps {
    title: string
    subtitle: string
    items: readonly TestimonialItem[]
}

export default function Testimonials({ title, subtitle, items }: TestimonialsProps) {
    return (
        <section className={`py-20 ${colors.background.primary[50]}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-3xl sm:text-4xl font-extrabold ${colors.text.gray[900]} tracking-tight mb-3`}>
                        {title}
                    </h2>
                    <p className={`text-lg ${colors.text.gray[600]}`}>
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`${colors.background.white} rounded-lg shadow-md p-8 border-l-4 ${colors.border.primary[600]} hover:shadow-lg transition-shadow`}
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg
                                        key={i}
                                        className={`w-5 h-5 ${colors.text.primary[600]}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className={`${colors.text.gray[700]} mb-6 leading-relaxed text-sm sm:text-base`}>
                                "{testimonial.text}"
                            </p>

                            {/* Author */}
                            <div>
                                <p className={`font-semibold ${colors.text.gray[900]}`}>
                                    {testimonial.author}
                                </p>
                                <p className={`text-sm ${colors.text.gray[500]}`}>
                                    {testimonial.location}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust badge */}
                <div className="text-center mt-12">
                    <p className={`text-lg font-semibold ${colors.text.gray[900]}`}>
                        ⭐ Over 15 år med fornøyde kunder
                    </p>
                </div>
            </div>
        </section>
    )
}
